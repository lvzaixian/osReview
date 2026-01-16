import { useEffect, useState } from 'react';
import { getFullStats } from './data';
import ExamEngineTest from './components/ExamEngineTest';
import TrashBin from './components/TrashBin';
import ModeSelector from './components/ModeSelector';
import EssayMode from './components/EssayMode';
import CoaModeSelector from './components/CoaModeSelector';
import CoaTermsStudy from './components/CoaTermsStudy';
import { loadProgress, saveProgress } from './utils/storage';
import type { ExamMode } from './types';

type StudyDomain = 'os' | 'coa';
type CoaMode = 'terms' | null;

function App() {
  const [stats, setStats] = useState<ReturnType<typeof getFullStats> | null>(null);
  const [currentMode, setCurrentMode] = useState<ExamMode | null>(null);
  const [showTrashBin, setShowTrashBin] = useState(false);
  const [showEssayMode, setShowEssayMode] = useState(false);
  const [studyDomain, setStudyDomain] = useState<StudyDomain>('os');
  const [coaMode, setCoaMode] = useState<CoaMode>(null);
  const [userProgress, setUserProgress] = useState(() => loadProgress());

  // 每次显示垃圾桶时重新加载数据
  useEffect(() => {
    if (showTrashBin) {
      setUserProgress(loadProgress());
    }
  }, [showTrashBin]);

  // 每次从学习模式返回时也重新加载
  useEffect(() => {
    if (!currentMode) {
      setUserProgress(loadProgress());
    }
  }, [currentMode]);

  useEffect(() => {
    // 加载题库统计信息
    const questionStats = getFullStats();
    setStats(questionStats);
    
    // 在控制台输出详细统计
    console.group('📚 OS&COA Reviewer 题库统计');
    console.log('总题数:', questionStats.questionBank.total);
    console.log('数据完整:', questionStats.questionBank.isComplete ? '✅ 是' : '⚠️ 否（待补充）');
    console.groupEnd();
  }, []);

  // 处理复原单个题目
  const handleRestore = (questionId: string) => {
    const newKilled = new Set(userProgress.killedQuestions);
    newKilled.delete(questionId);
    const newProgress = {
      ...userProgress,
      killedQuestions: newKilled,
      lastActiveTime: Date.now(),
    };
    setUserProgress(newProgress);
    saveProgress(newProgress);
  };

  // 处理批量复原
  const handleRestoreAll = () => {
    const count = userProgress.killedQuestions.size;
    if (count === 0) return;
    
    if (window.confirm(`确定要复原所有 ${count} 道已斩杀的题目吗？`)) {
      const newProgress = {
        ...userProgress,
        killedQuestions: new Set<string>(),
        lastActiveTime: Date.now(),
      };
      setUserProgress(newProgress);
      saveProgress(newProgress);
    }
  };

  // 处理在垃圾桶中复习题目
  const handleReview = (_questionId: string) => {
    // 关闭垃圾桶，进入背题模式并跳转到该题
    alert('此功能将在垃圾桶中查看题目，不需跳转到其他模式');
  };

  // COA 模式选择器
  if (studyDomain === 'coa' && coaMode === null && !currentMode && !showTrashBin && !showEssayMode) {
    return (
      <CoaModeSelector
        onSelectMode={(mode) => setCoaMode(mode)}
        onBack={() => setStudyDomain('os')}
      />
    );
  }

  // COA 名词解释学习模式
  if (studyDomain === 'coa' && coaMode === 'terms' && !currentMode && !showTrashBin && !showEssayMode) {
    return (
      <CoaTermsStudy 
        onBack={() => {
          setCoaMode(null);
        }}
      />
    );
  }

  // 如果显示大题模式（优先级高于垃圾桶）
  if (showEssayMode) {
    return (
      <EssayMode
        onBack={() => setShowEssayMode(false)}
      />
    );
  }

  // 如果显示垃圾桶（优先级高于模式选择器）
  if (showTrashBin) {
    return (
      <TrashBin
        killedQuestions={userProgress.killedQuestions}
        onBack={() => setShowTrashBin(false)}
        onRestore={handleRestore}
        onRestoreAll={handleRestoreAll}
        onReview={handleReview}
      />
    );
  }

  // 如果选择了模式，显示学习界面（优先级高于模式选择器）
  if (currentMode) {
    return (
      <ExamEngineTest 
        initialMode={currentMode} 
        onBack={() => setCurrentMode(null)}
      />
    );
  }

  // 默认显示题库主页
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
       <div className="pt-8 pb-2 text-center relative">
         <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-2">
            OS&COA Reviewer
         </h1>
         <p className="text-xl text-gray-700 font-medium">
            操作系统 + 计算机组成原理 - 期末突击复习系统
         </p>
         
         {/* 右上角模式切换按钮 */}
         <div className="absolute top-4 right-4 sm:top-8 sm:right-8 flex gap-2">
           <button
             onClick={() => {
               setStudyDomain('os');
               setCoaMode(null);
             }}
             className={`px-4 py-2 rounded-lg font-semibold transition-all ${
               studyDomain === 'os'
                 ? 'bg-blue-600 text-white shadow-lg'
                 : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
             }`}
           >
             OS
           </button>
           <button
             onClick={() => {
               setStudyDomain('coa');
               setCoaMode(null);
             }}
             className={`px-4 py-2 rounded-lg font-semibold transition-all ${
               studyDomain === 'coa'
                 ? 'bg-blue-600 text-white shadow-lg'
                 : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
             }`}
           >
             COA
           </button>
         </div>
       </div>
      <ModeSelector 
        onSelectMode={setCurrentMode}
        onShowTrashBin={() => setShowTrashBin(true)}
        onShowEssayMode={() => setShowEssayMode(true)}
        userProgress={userProgress}
      />
    </div>
  );
}

export default App;
