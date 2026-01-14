import { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { getAllModules, getSnapshotStats, type KnowledgeModule } from '../utils/knowledgeSnapshot';

interface KnowledgeSnapshotProps {
  onBack: () => void;
}

export default function KnowledgeSnapshot({ onBack }: KnowledgeSnapshotProps) {
  const [selectedModule, setSelectedModule] = useState<KnowledgeModule | null>(null);
  const [reciteModeCards, setReciteModeCards] = useState<Set<string>>(new Set()); // 每个卡片独立的背诵模式
  const modules = getAllModules();
  const stats = getSnapshotStats();

  // 监听滚动事件，控制背景透明度
  useEffect(() => {
    const handleScroll = () => {
      // Scroll tracking for future use
      window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 当选择模块或返回模块列表时，滚动到页面顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedModule]);

  // 如果选择了模块，显示详细卡片
  if (selectedModule) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        {/* Fixed Header */}
        <div className="sticky top-0 z-50 pointer-events-none">
          <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-2 sm:gap-3">
              <button
                onClick={() => {
                  setSelectedModule(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-gray-800 font-medium bg-white/90 backdrop-blur-sm shadow-lg rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 pointer-events-auto transition-all hover:bg-white text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">返回模块列表</span>
                <span className="sm:hidden">返回</span>
              </button>
              
              <div className="flex items-center gap-2 sm:gap-3">
                {/* 一键背诵按钮 */}
                <button
                  onClick={() => {
                    const allCardIds = selectedModule.cards.map(c => c.id);
                    const allHidden = allCardIds.every(id => reciteModeCards.has(id));
                    
                    const newSet = new Set(reciteModeCards);
                    if (allHidden) {
                      // 全部显示：移除所有
                      allCardIds.forEach(id => newSet.delete(id));
                    } else {
                      // 全部隐藏：添加所有
                      allCardIds.forEach(id => newSet.add(id));
                    }
                    setReciteModeCards(newSet);
                  }}
                  className={`flex items-center gap-1 sm:gap-2 font-semibold bg-white/90 backdrop-blur-sm shadow-lg rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 pointer-events-auto transition-all hover:shadow-xl text-sm sm:text-base ${
                    selectedModule.cards.every(c => reciteModeCards.has(c.id))
                      ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                      : 'text-gray-700 hover:bg-white'
                  }`}
                >
                  {selectedModule.cards.every(c => reciteModeCards.has(c.id)) ? (
                    <>
                      <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">显示全部</span>
                      <span className="sm:hidden">显示</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">一键背诵</span>
                      <span className="sm:hidden">背诵</span>
                    </>
                  )}
                </button>
                
                {/* 知识点计数卡片 */}
                <div className="text-xs sm:text-sm text-gray-600 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 pointer-events-auto font-medium whitespace-nowrap">
                  {selectedModule.cards.filter(c => reciteModeCards.has(c.id)).length}/{selectedModule.cards.length}
                  <span className="hidden sm:inline"> 已隐藏</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">

          {/* Module Title */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{selectedModule.icon}</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{selectedModule.name}</h2>
          </div>

          {/* Knowledge Cards */}
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            {selectedModule.cards.map((card, index) => (
              <div
                key={card.id}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all hover:scale-[1.02]"
              >
                {/* Card Header */}
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                    selectedModule.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    selectedModule.color === 'green' ? 'bg-green-100 text-green-600' :
                    selectedModule.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    selectedModule.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                    selectedModule.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                    selectedModule.color === 'cyan' ? 'bg-cyan-100 text-cyan-600' :
                    selectedModule.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                    selectedModule.color === 'red' ? 'bg-red-100 text-red-600' :
                    selectedModule.color === 'teal' ? 'bg-teal-100 text-teal-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 break-words"
                      dangerouslySetInnerHTML={{ __html: card.title }}
                    />
                  </div>
                  {/* 每个卡片独立的背诵模式开关 */}
                  <button
                    onClick={() => {
                      const newSet = new Set(reciteModeCards);
                      if (newSet.has(card.id)) {
                        newSet.delete(card.id);
                      } else {
                        newSet.add(card.id);
                      }
                      setReciteModeCards(newSet);
                    }}
                    className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg font-medium text-xs sm:text-sm transition-all flex-shrink-0 ${
                      reciteModeCards.has(card.id)
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {reciteModeCards.has(card.id) ? <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" /> : <Eye className="w-3 h-3 sm:w-4 sm:h-4" />}
                    <span className="hidden sm:inline">{reciteModeCards.has(card.id) ? '显示' : '背诵'}</span>
                  </button>
                </div>

                {/* Key Points */}
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                  {card.keyPoints.map((point, idx) => {
                    const iconColor = 
                      selectedModule.color === 'blue' ? 'text-blue-500' :
                      selectedModule.color === 'green' ? 'text-green-500' :
                      selectedModule.color === 'purple' ? 'text-purple-500' :
                      selectedModule.color === 'orange' ? 'text-orange-500' :
                      selectedModule.color === 'indigo' ? 'text-indigo-500' :
                      selectedModule.color === 'cyan' ? 'text-cyan-500' :
                      selectedModule.color === 'pink' ? 'text-pink-500' :
                      selectedModule.color === 'red' ? 'text-red-500' :
                      selectedModule.color === 'teal' ? 'text-teal-500' :
                      'text-gray-500';
                    
                    // 背诵模式：隐藏<kw>标签中的关键词（科学记忆法）
                    let processedPoint = point;
                    if (reciteModeCards.has(card.id)) {
                      // 优先处理<kw>标签（专门用于背诵的关键词）
                      processedPoint = point.replace(
                        /<kw>(.*?)<\/kw>/g,
                        '<span class="inline-block bg-gray-400 text-gray-400 select-none blur-sm rounded px-1">$1</span>'
                      );
                      // 如果没有<kw>标签，才回退到遮盖<strong>（兼容旧数据）
                      if (!point.includes('<kw>')) {
                        processedPoint = point.replace(
                          /<strong>(.*?)<\/strong>/g,
                          '<span class="inline-block bg-gray-300 text-gray-300 select-none blur-sm rounded px-1">$1</span>'
                        );
                      }
                    }
                    
                    return (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3 group">
                        <CheckCircle className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor} flex-shrink-0 mt-0.5`} />
                        <div 
                          className="text-lg sm:text-xl text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: processedPoint }}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Tips - 助记口诀（背诵模式全量遮盖） */}
                {card.tips && (
                  <div className={`border-l-4 p-3 sm:p-4 rounded-r-lg mb-2 sm:mb-3 ${
                    selectedModule.color === 'blue' ? 'bg-blue-50 border-blue-400' :
                    selectedModule.color === 'green' ? 'bg-green-50 border-green-400' :
                    selectedModule.color === 'purple' ? 'bg-purple-50 border-purple-400' :
                    selectedModule.color === 'orange' ? 'bg-orange-50 border-orange-400' :
                    selectedModule.color === 'indigo' ? 'bg-indigo-50 border-indigo-400' :
                    selectedModule.color === 'cyan' ? 'bg-cyan-50 border-cyan-400' :
                    selectedModule.color === 'pink' ? 'bg-pink-50 border-pink-400' :
                    selectedModule.color === 'red' ? 'bg-red-50 border-red-400' :
                    selectedModule.color === 'teal' ? 'bg-teal-50 border-teal-400' :
                    'bg-gray-50 border-gray-400'
                  }`}>
                    {reciteModeCards.has(card.id) ? (
                      // 背诵模式：全量遮盖助记口诀
                      <div className="text-sm text-gray-400 select-none">
                        <span className="inline-block bg-gray-400 blur-sm rounded px-2 py-1">
                          {card.tips.replace(/<[^>]*>/g, '')} {/* 移除HTML标签后遮盖 */}
                        </span>
                      </div>
                    ) : (
                      // 正常模式：显示完整内容
                      <div 
                        className="text-lg sm:text-xl text-gray-700"
                        dangerouslySetInnerHTML={{ __html: card.tips }}
                      />
                    )}
                  </div>
                )}

                {/* Story - 场景化联想 */}
                {card.story && (
                  <div className={`border-l-4 p-3 sm:p-4 rounded-r-lg ${
                    selectedModule.color === 'blue' ? 'bg-indigo-50 border-indigo-400' :
                    selectedModule.color === 'green' ? 'bg-teal-50 border-teal-400' :
                    selectedModule.color === 'purple' ? 'bg-pink-50 border-pink-400' :
                    selectedModule.color === 'orange' ? 'bg-yellow-50 border-yellow-400' :
                    selectedModule.color === 'indigo' ? 'bg-purple-50 border-purple-400' :
                    selectedModule.color === 'cyan' ? 'bg-sky-50 border-sky-400' :
                    selectedModule.color === 'pink' ? 'bg-rose-50 border-rose-400' :
                    selectedModule.color === 'red' ? 'bg-orange-50 border-orange-400' :
                    selectedModule.color === 'teal' ? 'bg-emerald-50 border-emerald-400' :
                    'bg-amber-50 border-amber-400'
                  }`}>
                    <div 
                      className="text-lg sm:text-xl text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: card.story }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 默认显示模块列表
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 pointer-events-none">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <button
            onClick={() => {
              onBack();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-gray-800 font-medium bg-white/90 backdrop-blur-sm shadow-lg rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 pointer-events-auto transition-all hover:bg-white text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            返回主菜单
          </button>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">

        {/* Title Section */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">知识快照</h1>
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mb-2 px-2">
            📸 Linux核心考点
          </p>
          <p className="text-sm sm:text-base text-gray-500 px-2">
            基于重点.md提炼的Linux操作系统必考知识 · 背题前必看
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600">{stats.modules}</div>
              <div className="text-sm sm:text-base text-gray-500">知识模块</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600">{stats.cards}</div>
              <div className="text-sm sm:text-base text-gray-500">知识卡片</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-pink-600">{stats.keyPoints}</div>
              <div className="text-sm sm:text-base text-gray-500">核心要点</div>
            </div>
          </div>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => {
                setSelectedModule(module);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl border-2 ${
                module.color === 'blue' ? 'border-blue-200' :
                module.color === 'green' ? 'border-green-200' :
                module.color === 'purple' ? 'border-purple-200' :
                module.color === 'orange' ? 'border-orange-200' :
                module.color === 'indigo' ? 'border-indigo-200' :
                module.color === 'cyan' ? 'border-cyan-200' :
                module.color === 'pink' ? 'border-pink-200' :
                module.color === 'red' ? 'border-red-200' :
                module.color === 'teal' ? 'border-teal-200' :
                'border-gray-200'
              }`}
            >
              {/* Icon */}
              <div className="text-4xl sm:text-5xl text-center mb-3 sm:mb-4">{module.icon}</div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-2 sm:mb-3">
                {module.name}
              </h3>
              
              {/* Stats */}
              <div className="flex justify-center gap-3 sm:gap-4 text-sm">
                <div className="text-center">
                  <div className={`text-base sm:text-lg font-bold ${
                    module.color === 'blue' ? 'text-blue-600' :
                    module.color === 'green' ? 'text-green-600' :
                    module.color === 'purple' ? 'text-purple-600' :
                    module.color === 'orange' ? 'text-orange-600' :
                    module.color === 'indigo' ? 'text-indigo-600' :
                    module.color === 'cyan' ? 'text-cyan-600' :
                    module.color === 'pink' ? 'text-pink-600' :
                    module.color === 'red' ? 'text-red-600' :
                    module.color === 'teal' ? 'text-teal-600' :
                    'text-gray-600'
                  }`}>
                    {module.cards.length}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">知识卡片</div>
                </div>
                <div className="text-center">
                  <div className={`text-base sm:text-lg font-bold ${
                    module.color === 'blue' ? 'text-blue-600' :
                    module.color === 'green' ? 'text-green-600' :
                    module.color === 'purple' ? 'text-purple-600' :
                    module.color === 'orange' ? 'text-orange-600' :
                    module.color === 'indigo' ? 'text-indigo-600' :
                    module.color === 'cyan' ? 'text-cyan-600' :
                    module.color === 'pink' ? 'text-pink-600' :
                    module.color === 'red' ? 'text-red-600' :
                    module.color === 'teal' ? 'text-teal-600' :
                    'text-gray-600'
                  }`}>
                    {module.cards.reduce((sum, c) => sum + c.keyPoints.length, 0)}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">核心要点</div>
                </div>
              </div>

              {/* Preview */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                <div className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                  {module.cards.map(c => c.title).join(' · ')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="max-w-4xl mx-auto mt-8 sm:mt-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg p-6 sm:p-8 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            使用建议
          </h3>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs sm:text-sm">
                1
              </div>
              <p><strong>快速浏览</strong>：通过模块卡片快速掌握Linux章节框架</p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs sm:text-sm">
                2
              </div>
              <p><strong>重点标记</strong>：用<mark className="bg-yellow-300 text-gray-800 px-1">高亮</mark>和<strong>粗体</strong>快速定位必考知识点</p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs sm:text-sm">
                3
              </div>
              <p><strong>助记口诀</strong>：关注🎯助记和⚠️注意事项，快速记忆</p>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs sm:text-sm">
                4
              </div>
              <p><strong>配合背题</strong>：先看快照建立框架，再进入背题模式强化记忆</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
