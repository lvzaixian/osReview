import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, CheckCircle, Target, BookMarked, RotateCcw } from 'lucide-react';
import { coaTerms } from '../data/coa_terms';
import type { CoaTerm } from '../data/coa_terms';

interface CoaTermsStudyProps {
  onBack: () => void;
}

// 翻转卡片组件 - 完全对齐 EssayMode 样式
const TermsFlashcard = ({ item, onNext, onPrev, isMastered, toggleMastered }: { item: CoaTerm; onNext: () => void; onPrev: () => void; isMastered: boolean; toggleMastered: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => { setIsFlipped(false); }, [item]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-2 sm:p-4 relative">
      <div className="relative w-full aspect-[3/4] md:aspect-[4/3] cursor-pointer group" style={{ perspective: '1000px' }} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="w-full h-full transition-all duration-500 shadow-xl rounded-2xl relative" style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
          
          {/* Front */}
          <div className="absolute inset-0 w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 border-2 border-cyan-50 hover:border-cyan-200 relative overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
            {item.important && <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 bg-gradient-to-r from-red-500 to-rose-500 text-white text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full font-bold shadow-sm">⭐ 重点</div>}
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3 sm:mb-4 md:mb-6">💻</div>
            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center leading-tight px-2">{item.term}</h3>
            <p className="absolute bottom-4 sm:bottom-6 md:bottom-8 text-gray-400 text-[10px] sm:text-xs md:text-sm animate-pulse flex items-center gap-1"><RotateCcw className="w-3 h-3 md:w-4 md:h-4" /> 点击看答案</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-cyan-50/30 rounded-2xl flex flex-col p-4 sm:p-6 md:p-8 overflow-hidden border-2 border-cyan-400 shadow-inner" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            
            <div className="flex-1 overflow-y-auto mt-6 sm:mt-8 md:mt-10 px-1 sm:px-2 md:px-3 pb-2 sm:pb-3 md:pb-4">
              {/* 答案内容区 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-5 border border-cyan-100 shadow-sm">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl space-y-3">
                  {/* 英文全称 */}
                  <div className="pb-3 border-b-2 border-cyan-100">
                    <div className="text-xs md:text-sm text-cyan-600 font-bold mb-2">英文全称:</div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{item.fullName}</div>
                  </div>
                  
                  {/* 定义 */}
                  <div>
                    <div className="text-xs md:text-sm text-gray-600 font-bold mb-2">定义:</div>
                    <p className="text-gray-800 leading-relaxed">{item.definition}</p>
                  </div>
                  
                  {/* 关键词 */}
                  {item.keywords && item.keywords.length > 0 && (
                    <div>
                      <div className="text-xs md:text-sm text-gray-600 font-bold mb-2">关键词:</div>
                      <div className="flex flex-wrap gap-2">
                        {item.keywords.map((kw, idx) => (
                          <span key={idx} className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* 提示信息 */}
              {item.tips && (
                <div className="mt-2 sm:mt-3 md:mt-4 bg-gradient-to-r from-amber-50 to-orange-50 py-2 sm:py-3 px-3 sm:px-4 rounded-lg border border-amber-200/50">
                  <div className="flex items-start gap-2">
                    <span className="text-lg md:text-xl lg:text-2xl flex-shrink-0">💡</span>
                    <div className="flex-1">
                      <div className="font-bold text-amber-900 text-xs sm:text-sm md:text-base">记忆提示</div>
                      <div className="text-xs sm:text-sm md:text-base text-amber-800 leading-snug">{item.tips}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-4 sm:mt-6 gap-2 sm:gap-4">
        <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="p-3 sm:p-4 rounded-full bg-white shadow-md hover:bg-gray-50 text-gray-700 border border-gray-200 hover:shadow-lg transition-all"><ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /></button>
        <button onClick={toggleMastered} className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl shadow-sm font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${isMastered ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-green-200' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'}`}>{isMastered ? <><CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">已掌握 (移除)</span><span className="sm:hidden">已掌握</span></> : <><Target className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">标记为已掌握</span><span className="sm:hidden">标记</span></>}</button>
        <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md hover:shadow-lg text-white transition-all hover:scale-105"><ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" /></button>
      </div>
    </div>
  );
};

// 列表视图组件 - 完全对齐 EssayMode 样式
const ListView = ({ items }: { items: CoaTerm[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto px-2 sm:px-0">
      {items.map((item, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-lg hover:border-cyan-200">
          <button 
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-gradient-to-r hover:from-cyan-50/50 hover:to-transparent transition-all"
          >
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 flex-1 min-w-0">
              <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl text-xl sm:text-2xl md:text-3xl bg-gradient-to-br from-cyan-100 to-blue-100 shadow-sm">
                💻
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-bold text-gray-800 leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl block">
                  {item.term}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-500 mt-1 block">第 {idx + 1} 项</span>
              </div>
              {item.important && (
                 <span className="flex-shrink-0 px-2 sm:px-3 py-1 bg-gradient-to-r from-red-500 to-rose-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-sm">
                   ⭐ 重点
                 </span>
              )}
            </div>
            <div className={`ml-2 p-2 rounded-full transition-all ${openIndex === idx ? 'bg-cyan-100 text-cyan-600 rotate-180' : 'bg-gray-100 text-gray-400'}`}>
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </button>
          
          <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 bg-gradient-to-b from-gray-50/50 to-white border-t border-gray-100">
              <div className="mt-3 sm:mt-4 md:mt-5">
                {/* 答案内容 - 完全对齐 EssayMode 的答案渲染样式 */}
                <div className="bg-white rounded-xl p-3 sm:p-4 md:p-5 border border-cyan-100 shadow-inner">
                  <div className="text-sm sm:text-base md:text-lg space-y-3">
                    {/* 英文全称 */}
                    <div className="pb-3 border-b-2 border-cyan-100">
                      <div className="text-xs md:text-sm text-cyan-600 font-bold mb-2">英文全称:</div>
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{item.fullName}</div>
                    </div>
                    
                    {/* 定义 */}
                    <div>
                      <div className="text-xs md:text-sm text-gray-600 font-bold mb-2">定义:</div>
                      <p className="text-gray-800 leading-relaxed">{item.definition}</p>
                    </div>
                    
                    {/* 关键词 */}
                    {item.keywords && item.keywords.length > 0 && (
                      <div>
                        <div className="text-xs md:text-sm text-gray-600 font-bold mb-2">关键词:</div>
                        <div className="flex flex-wrap gap-2">
                          {item.keywords.map((kw, kidx) => (
                            <span key={kidx} className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 提示信息 */}
                {item.tips && (
                  <div className="mt-3 sm:mt-4 bg-gradient-to-r from-amber-50 to-orange-50 py-2 sm:py-3 px-3 sm:px-4 rounded-lg border border-amber-200/50">
                    <div className="flex items-start gap-2">
                      <span className="text-lg md:text-xl flex-shrink-0">💡</span>
                      <div className="flex-1">
                        <div className="font-bold text-amber-900 text-xs sm:text-sm md:text-base">记忆提示</div>
                        <div className="text-xs sm:text-sm md:text-base text-amber-800 leading-snug">{item.tips}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function CoaTermsStudy({ onBack }: CoaTermsStudyProps) {
  const [mode, setMode] = useState<'menu' | 'flashcard' | 'list'>('menu');
  const [cardIndex, setCardIndex] = useState(0);
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('coa_terms_mastered_ids') || '[]'); } catch { return []; }
  });

  useEffect(() => { localStorage.setItem('coa_terms_mastered_ids', JSON.stringify(masteredIds)); }, [masteredIds]);

  const toggleMasteredId = (id: string) => {
    setMasteredIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const activeDeck = useMemo(() => {
    const unmastered = coaTerms.filter(i => !masteredIds.includes(i.id));
    return unmastered.length > 0 ? unmastered : coaTerms;
  }, [masteredIds]);

  const currentItem = activeDeck[cardIndex];

  const handleNext = () => {
    if (cardIndex < activeDeck.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      setCardIndex(0);
    }
  };

  const handlePrev = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setCardIndex(activeDeck.length - 1);
    }
  };

  const renderMenu = () => (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Header */}
      <div className="sticky top-0 z-50 pointer-events-none">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 sm:gap-2 text-gray-700 hover:text-gray-900 font-semibold bg-white/95 backdrop-blur-md shadow-lg rounded-xl px-3 sm:px-5 py-2 sm:py-2.5 pointer-events-auto transition-all hover:shadow-xl hover:scale-105 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">返回主页</span>
            <span className="sm:hidden">返回</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 max-w-5xl">
        {/* 主标题区 - 完全对齐 EssayMode 样式 */}
        <div className="relative mb-8 sm:mb-16">
          <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-600 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-white relative overflow-hidden">
            {/* 装饰元素 */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                <div className="bg-white/20 p-2 sm:p-3 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                  <BookMarked className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                  名词解释
                </h1>
              </div>
              <p className="text-cyan-100 text-sm sm:text-lg md:text-xl mb-4 sm:mb-6 text-center">主动回忆训练 · COA核心概念背诵</p>
              
              {/* 进度卡片 */}
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/30 shadow-lg">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    <div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-black">{Math.round((masteredIds.length / coaTerms.length) * 100)}%</div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-cyan-200 font-medium">已掌握</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 模式选择卡片 - 完全对齐 EssayMode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <button
            onClick={() => { setMode('flashcard'); setCardIndex(0); }}
            className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* 渐变背景 */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl md:text-4xl">🎴</span>
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-white mb-1 sm:mb-2 transition-colors">翻转卡片</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-cyan-100 transition-colors">主动回忆，点击翻转查看答案</p>
            </div>
          </button>

          <button
            onClick={() => setMode('list')}
            className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* 渐变背景 */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl md:text-4xl">📋</span>
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-white mb-1 sm:mb-2 transition-colors">列表模式</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-cyan-100 transition-colors">展开全部，快速浏览所有题目</p>
            </div>
          </button>
        </div>

        {/* 题库信息卡片 - 完全对齐 EssayMode */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
              <span className="text-xl sm:text-2xl">📚</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">题库信息</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-600 mb-0.5 sm:mb-1">{coaTerms.length}</div>
              <div className="text-xs sm:text-sm md:text-base text-cyan-700 font-medium">总题数</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-red-600 mb-0.5 sm:mb-1">{coaTerms.filter(i => i.important).length}</div>
              <div className="text-xs sm:text-sm md:text-base text-red-700 font-medium">重点题</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-green-600 mb-0.5 sm:mb-1">{masteredIds.length}</div>
              <div className="text-xs sm:text-sm md:text-base text-green-700 font-medium">已掌握</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-orange-600 mb-0.5 sm:mb-1">{coaTerms.length - masteredIds.length}</div>
              <div className="text-xs sm:text-sm md:text-base text-orange-700 font-medium">剩余</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (mode === 'menu') {
    return renderMenu();
  }

  if (mode === 'flashcard' && currentItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
            <button onClick={() => setMode('menu')} className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-gray-800 text-base sm:text-lg md:text-xl font-medium">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> <span className="hidden sm:inline">返回菜单</span><span className="sm:hidden">返回</span>
            </button>
            <div className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold">
              {cardIndex + 1} / {activeDeck.length}
            </div>
            <button onClick={() => setMode('list')} className="flex items-center gap-1.5 sm:gap-2 text-cyan-600 hover:text-cyan-800 text-base sm:text-lg md:text-xl font-medium">
              <span className="hidden sm:inline">📋 列表</span>
              <span className="sm:hidden">📋</span>
            </button>
          </div>
        </div>
        <TermsFlashcard
          item={currentItem}
          onNext={handleNext}
          onPrev={handlePrev}
          isMastered={masteredIds.includes(currentItem.id)}
          toggleMastered={() => toggleMasteredId(currentItem.id)}
        />
      </div>
    );
  }

  if (mode === 'list') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
            <button onClick={() => setMode('menu')} className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-gray-800 text-base sm:text-lg md:text-xl font-medium">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> <span className="hidden sm:inline">返回菜单</span><span className="sm:hidden">返回</span>
            </button>
            <div className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold">
              共 {coaTerms.length} 项
            </div>
            <button onClick={() => { setMode('flashcard'); setCardIndex(0); }} className="flex items-center gap-1.5 sm:gap-2 text-cyan-600 hover:text-cyan-800 text-base sm:text-lg md:text-xl font-medium">
              <span className="hidden sm:inline">🎴 卡片</span>
              <span className="sm:hidden">🎴</span>
            </button>
          </div>
        </div>
        <div className="container mx-auto px-3 sm:px-4 pb-6 sm:pb-8 max-w-5xl">
          <ListView items={coaTerms} />
        </div>
      </div>
    );
  }

  return null;
}
