import { useEffect, useState } from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { getFullStats } from './data';
import ExamEngineTest from './components/ExamEngineTest';
import TrashBin from './components/TrashBin';
import ModeSelector from './components/ModeSelector';
import EssayMode from './components/EssayMode';
import SystematicLearning from './components/SystematicLearning';
import { loadProgress, saveProgress } from './utils/storage';
import type { ExamMode } from './types';

function App() {
  const [stats, setStats] = useState<ReturnType<typeof getFullStats> | null>(null);
  const [currentMode, setCurrentMode] = useState<ExamMode | null>(null);
  const [showTrashBin, setShowTrashBin] = useState(false);
  const [showModeSelector, setShowModeSelector] = useState(false);
  const [showEssayMode, setShowEssayMode] = useState(false);
  const [showSystematic, setShowSystematic] = useState(false);
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
    console.group('📚 ExamRank1 题库统计');
    console.log('总题数:', questionStats.questionBank.total);
    console.log('单选题:', questionStats.questionBank.single);
    console.log('多选题:', questionStats.questionBank.multi);
    console.log('判断题:', questionStats.questionBank.boolean);
    console.log('填空题:', questionStats.questionBank.fill);
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

  // 如果显示系统化学习
  if (showSystematic) {
    return <SystematicLearning onBack={() => setShowSystematic(false)} />;
  }

  // 如果显示大题模式（优先级高于垃圾桶）
  if (showEssayMode) {
    return (
      <EssayMode
        onBack={() => {
          setShowEssayMode(false);
          // 返回到模式选择器
        }}
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
        onBack={() => {
          setCurrentMode(null);
          // 如果是从模式选择器进入的，返回时回到模式选择器
          if (showModeSelector) {
            // 保持showModeSelector为true，不关闭
          } else {
            setShowModeSelector(false);
          }
        }}
      />
    );
  }

  // 如果显示模式选择器
  if (showModeSelector) {
    return (
      <ModeSelector 
        onBack={() => setShowModeSelector(false)} 
        onSelectMode={setCurrentMode}
        onShowTrashBin={() => {
          setShowTrashBin(true);
        }}
        onShowEssayMode={() => {
          setShowEssayMode(true);
        }}
        userProgress={userProgress}
        setShowModeSelector={setShowModeSelector}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-3 sm:mb-5">
            OS Review
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium">
            操作系统 - 期末突击复习系统
          </p>
        </div>

        {/* 2x2网格布局 */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* 系统化学习按钮 */}
          <button
            onClick={() => setShowSystematic(true)}
            className="group relative overflow-hidden flex flex-col items-center justify-center gap-3 px-6 py-8 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.03] hover:shadow-purple-500/50 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
            <GraduationCap className="w-12 h-12 animate-bounce" style={{animationDuration: '2s'}} />
            <div className="text-2xl font-black tracking-tight">📚 系统化学习</div>
            <div className="text-sm opacity-95 font-medium text-center">
              深度课程内容 · 完整知识体系
            </div>
          </button>

          {/* 作业题回顾按钮 */}
          <button
            onClick={() => setShowModeSelector(true)}
            className="group relative overflow-hidden flex flex-col items-center justify-center gap-3 px-6 py-8 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.03] hover:shadow-emerald-500/50 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
            <BookOpen className="w-12 h-12 animate-bounce" style={{animationDuration: '2s'}} />
            <div className="text-2xl font-black tracking-tight">📝 作业题回顾</div>
            <div className="text-sm opacity-95 font-medium text-center">
              {stats?.questionBank.total || 0}道题全面复习
            </div>
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-14 sm:mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto border border-white/50">
            <div className="text-gray-700">
              <p className="text-sm sm:text-base font-semibold flex items-center justify-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1">
                  ✅ 项目架构已完成
                </span>
                <span className="text-gray-400">|</span>
                <span className="inline-flex items-center gap-1">
                  ✅ 数据层已就绪
                </span>
                <span className="text-gray-400">|</span>
                <span className="inline-flex items-center gap-1">
                  ✅ 类型系统已就绪
                </span>
              </p>
              <p className="text-xs sm:text-sm mt-3 sm:mt-4 text-gray-600">
                🛠️ 技术栈: React + TypeScript + Tailwind CSS + Vite
              </p>
            </div>
            
            {/* 版权信息 */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-200">
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                © 2025 小红书@元认知星图 版权所有
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
