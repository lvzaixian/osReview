import { useState, useMemo } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Eye } from 'lucide-react';
import { coaTerms } from '../data/coa_terms';
import type { CoaTerm } from '../data/coa_terms';

interface CoaTermsStudyProps {
  onBack: () => void;
}

export default function CoaTermsStudy({ onBack }: CoaTermsStudyProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<CoaTerm[]>([]);
  const [studyMode, setStudyMode] = useState<'sequential' | 'random'>('sequential');

  // 初始化学习顺序
  useMemo(() => {
    const sorted = studyMode === 'random' 
      ? [...coaTerms].sort(() => Math.random() - 0.5)
      : coaTerms;
    setCurrentOrder(sorted);
    setCurrentIndex(0);
    setShowDefinition(false);
  }, [studyMode]);

  const currentTerm = currentOrder[currentIndex];
  const progress = currentIndex + 1;

  const handleNext = () => {
    if (currentIndex < currentOrder.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowDefinition(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowDefinition(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setShowDefinition(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 sm:p-8">
      {/* 顶部导航 */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">返回</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400">
            计算机组成原理 - 名词解释
          </h1>
          <div className="text-sm text-gray-400">
            {progress} / {currentOrder.length}
          </div>
        </div>
      </div>

      {/* 主卡片 */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 sm:p-12 border border-cyan-500/20 min-h-96 flex flex-col justify-center">
          {currentTerm && (
            <>
              {/* 术语 */}
              <div className="text-center mb-8">
                <div className="text-sm text-cyan-400 mb-2">COA 名词解释</div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-300">
                  {currentTerm.term}
                </h2>
                {currentTerm.important && (
                  <div className="inline-block bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm border border-red-500/50">
                    ⭐ 重要
                  </div>
                )}
              </div>

              {/* 定义 */}
              <div
                className={`bg-slate-700/50 rounded-xl p-6 sm:p-8 mb-8 min-h-40 flex items-center justify-center transition-all duration-300 cursor-pointer border-2 ${
                  showDefinition
                    ? 'border-cyan-400 bg-slate-700/80'
                    : 'border-slate-600 hover:border-cyan-400/50'
                }`}
                onClick={() => setShowDefinition(!showDefinition)}
              >
                {showDefinition ? (
                  <div className="text-left">
                    <p className="text-lg leading-relaxed text-gray-100">
                      {currentTerm.definition}
                    </p>
                  </div>
                ) : (
                  <div className="text-center text-gray-400">
                    <Eye size={32} className="mx-auto mb-2 opacity-50" />
                    <p>点击卡片显示定义</p>
                  </div>
                )}
              </div>

              {/* 关键词 */}
              {showDefinition && (
                <div className="mb-8">
                  <div className="text-sm text-cyan-400 mb-3">关键词：</div>
                  <div className="flex flex-wrap gap-2">
                    {currentTerm.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/50"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 提示 */}
              {showDefinition && currentTerm.tips && (
                <div className="mb-8 bg-blue-500/10 border-l-4 border-blue-400 p-4 rounded">
                  <div className="text-sm text-blue-400 mb-2">💡 记忆技巧：</div>
                  <p className="text-blue-200">{currentTerm.tips}</p>
                </div>
              )}

              {/* 进度条 */}
              <div className="mb-8">
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                    style={{ width: `${(progress / currentOrder.length) * 100}%` }}
                  />
                </div>
              </div>
            </>
          )}

          {/* 控制按钮 */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-6 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">上一个</span>
            </button>

            <button
              onClick={handleReset}
              className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <RotateCcw size={20} />
              <span className="hidden sm:inline">重新开始</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === currentOrder.length - 1}
              className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-2"
            >
              <span className="hidden sm:inline">下一个</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* 学习模式切换 */}
          <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="text-sm text-gray-400">学习模式：</span>
            <button
              onClick={() => setStudyMode('sequential')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                studyMode === 'sequential'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              顺序学习
            </button>
            <button
              onClick={() => setStudyMode('random')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                studyMode === 'random'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              随机学习
            </button>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700">
            <div className="text-sm text-gray-400">总数</div>
            <div className="text-2xl font-bold text-cyan-400">{currentOrder.length}</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700">
            <div className="text-sm text-gray-400">进度</div>
            <div className="text-2xl font-bold text-cyan-400">
              {Math.round((progress / currentOrder.length) * 100)}%
            </div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700">
            <div className="text-sm text-gray-400">重要</div>
            <div className="text-2xl font-bold text-red-400">
              {currentOrder.filter(t => t.important).length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
