import { Cpu } from 'lucide-react';

interface CoaModeSelectorProps {
  onSelectMode: (mode: 'terms') => void;
  onBack: () => void;
}

export default function CoaModeSelector({ onSelectMode, onBack }: CoaModeSelectorProps) {
  const modes = [
    {
      mode: 'terms' as const,
      icon: <Cpu className="w-16 h-16" />,
      title: '📚 名词解释',
      description: '计算机组成原理核心概念背诵',
      color: 'bg-cyan-500',
      hoverColor: 'hover:bg-cyan-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="container mx-auto px-3 sm:px-6 py-6 sm:py-12">
        {/* 返回按钮 */}
        <div className="max-w-4xl mx-auto mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors shadow-md border border-gray-200"
          >
            <span>←</span>
            <span>返回</span>
          </button>
        </div>

        {/* 标题 */}
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 mb-2">
            计算机组成原理 (COA)
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            处理器组成 · 存储系统 · 外部设备
          </p>
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
                <div className="mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-base sm:text-lg opacity-90">{item.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* 统计信息 */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-md border border-cyan-100">
            <div className="text-sm text-gray-600">名词总数</div>
            <div className="text-3xl font-bold text-cyan-600">20</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md border border-cyan-100">
            <div className="text-sm text-gray-600">重要概念</div>
            <div className="text-3xl font-bold text-red-500">11</div>
          </div>
        </div>
      </div>
    </div>
  );
}
