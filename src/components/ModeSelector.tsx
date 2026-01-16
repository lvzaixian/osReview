import { BookOpen, Brain, RotateCcw, FileText, ArrowLeft, Trash2, BookMarked } from 'lucide-react';
import type { ExamMode, UserProgress } from '../types';

interface ModeSelectorProps {
  onSelectMode: (mode: ExamMode) => void;
  onShowTrashBin: () => void;
  onShowEssayMode: () => void; // 新增：显示大题模式
  userProgress: UserProgress;
}

export default function ModeSelector({ onSelectMode, onShowTrashBin, onShowEssayMode, userProgress }: ModeSelectorProps) {
  const modes = [
    {
      mode: 'study' as ExamMode,
      icon: <BookOpen className="w-16 h-16" />,
      title: '📖 背题模式',
      description: '顺序学习，高亮关键词，助记',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      mode: 'practice' as ExamMode,
      icon: <Brain className="w-16 h-16" />,
      title: '✍️ 刷题模式',
      description: '选项乱序，错题强制复习',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
    },
    {
      mode: 'review' as ExamMode,
      icon: <RotateCcw className="w-16 h-16" />,
      title: '🔄 错题回顾',
      description: '专注错题，针对性复习',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
    },
    {
      mode: 'exam' as ExamMode,
      icon: <FileText className="w-16 h-16" />,
      title: '📝 模拟考试',
      description: '真实模拟，计时评分',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-3 sm:px-6 py-6 sm:py-12">
        {/* Header Removed as per request */}
        
        {/* 选填板块标题 */}
        <div className="max-w-4xl mx-auto mb-3 sm:mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-2">
            <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
            选填板块
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">单选、填空</p>
        </div>

        {/* Mode Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8">
          {modes.map((item) => (
            <button
              key={item.mode}
              onClick={() => onSelectMode(item.mode)}
              className={`${item.color} ${item.hoverColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 sm:mb-4 scale-125 sm:scale-150">{item.icon}</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-lg sm:text-xl md:text-2xl opacity-90">{item.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* 垃圾桶按钮 - 移至选填板块下方 */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <button
            onClick={() => {
              onShowTrashBin();
            }}
            className="w-full flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Trash2 className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="font-bold text-lg sm:text-xl md:text-2xl">
              垃圾桶
              {userProgress.killedQuestions.size > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-base sm:text-lg">
                  {userProgress.killedQuestions.size}
                </span>
              )}
            </span>
          </button>
          <p className="text-center text-xs sm:text-sm md:text-base text-gray-500 mt-2">
            查看和管理已斩杀的选填题目
          </p>
        </div>

        {/* 简答题板块 */}
        <div className="max-w-4xl mx-auto mt-10 sm:mt-12 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-2 mb-3 sm:mb-4">
            <BookMarked className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600" />
            简答题板块
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">操作系统重点简答题 · 用于背诵</p>
          
          <button
            onClick={() => {
              onShowEssayMode();
            }}
            className="w-full flex flex-col items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-6 sm:py-8 bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl sm:rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <BookMarked className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
              <div className="text-3xl sm:text-4xl md:text-5xl font-black">📖 简答题</div>
              <BookMarked className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
            </div>
            <div className="text-base sm:text-lg md:text-xl opacity-90 font-medium">
              知识点背诵模式 · 主动回忆训练
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
