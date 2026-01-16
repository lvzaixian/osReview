import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, CheckCircle, Target, BookMarked } from 'lucide-react';
import { coaTerms } from '../data/coa_terms';
import type { CoaTerm } from '../data/coa_terms';

interface CoaTermsStudyProps {
  onBack: () => void;
}

// 翻转卡片组件 - 简答题风格
const TermsFlashcard = ({ item, onNext, onPrev, isMastered, toggleMastered }: { item: CoaTerm; onNext: () => void; onPrev: () => void; isMastered: boolean; toggleMastered: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => { setIsFlipped(false); }, [item]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center items-center px-2 sm:px-4">
      <div className="w-full max-w-2xl">
        {/* 卡片 */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200 p-8 sm:p-12 min-h-80 cursor-pointer transition-all duration-300 hover:shadow-xl flex flex-col justify-center"
        >
          {!isFlipped ? (
            // 问题面
            <div className="text-center">
              <div className="text-cyan-600 text-sm font-bold mb-4">COA 名词解释</div>
              <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 font-mono">
                {item.term}
              </h2>
              {item.important && (
                <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">
                  ⭐ 重要
                </div>
              )}
              <div className="mt-6 text-gray-500 text-sm">点击卡片查看答案</div>
            </div>
          ) : (
            // 答案面
            <div className="space-y-4">
              <div className="pb-4 border-b-2 border-cyan-200">
                <div className="text-xs text-cyan-600 font-bold mb-2">英文全称:</div>
                <div className="text-xl font-bold text-gray-900">{item.fullName}</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 font-bold mb-2">定义:</div>
                <p className="text-gray-800 leading-relaxed">{item.definition}</p>
              </div>
              {item.keywords && item.keywords.length > 0 && (
                <div>
                  <div className="text-xs text-gray-600 font-bold mb-2">关键词:</div>
                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((kw, idx) => (
                      <span key={idx} className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {item.tips && (
                <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded">
                  <div className="text-xs text-amber-700 font-bold mb-1">💡 记忆技巧:</div>
                  <p className="text-amber-800 text-sm">{item.tips}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 进度条 */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${(item ? 50 : 0)}%` }} />
          </div>
          <span className="text-gray-600 font-semibold">已翻转</span>
        </div>

        {/* 控制按钮 */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="p-3 sm:p-4 rounded-full bg-gray-500 hover:bg-gray-600 text-white transition-all hover:scale-110"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={toggleMastered}
            className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl shadow-sm font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${isMastered ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-green-200' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'}`}
          >
            {isMastered ? <><CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">已掌握 (移除)</span><span className="sm:hidden">已掌握</span></> : <><Target className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">标记为已掌握</span><span className="sm:hidden">标记</span></>}
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md hover:shadow-lg text-white transition-all hover:scale-110"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

// 列表视图组件 - 简答题风格
const ListView = ({ items }: { items: CoaTerm[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto px-2 sm:px-0">
      {items.map((item, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-lg hover:border-cyan-200">
          <button 
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gradient-to-r hover:from-cyan-50/50 hover:to-transparent transition-all"
          >
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl text-lg sm:text-xl bg-gradient-to-br from-cyan-100 to-blue-100 shadow-sm font-bold font-mono">
                {item.term}
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-bold text-gray-800 leading-tight text-base sm:text-lg block">
                  {item.fullName}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 mt-1 block">第 {idx + 1} 项</span>
              </div>
              {item.important && (
                 <span className="flex-shrink-0 px-2 sm:px-3 py-1 bg-gradient-to-r from-red-500 to-rose-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-sm">
                   ⭐ 重要
                 </span>
              )}
            </div>
            <div className={`ml-2 p-2 rounded-full transition-all ${openIndex === idx ? 'bg-cyan-100 text-cyan-600 rotate-180' : 'bg-gray-100 text-gray-400'}`}>
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </button>
          
          <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 bg-gradient-to-b from-gray-50/50 to-white border-t border-gray-100">
              <div className="mt-3 sm:mt-4 space-y-4">
                {/* 定义 */}
                <div className="bg-white rounded-xl p-3 sm:p-4 border border-cyan-100 shadow-inner">
                  <div className="text-xs text-gray-600 font-bold mb-2">定义:</div>
                  <div className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    {item.definition}
                  </div>
                </div>

                {/* 关键词 */}
                {item.keywords && item.keywords.length > 0 && (
                  <div>
                    <div className="text-xs text-gray-600 font-bold mb-2">关键词:</div>
                    <div className="flex flex-wrap gap-2">
                      {item.keywords.map((kw, kidx) => (
                        <span key={kidx} className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 提示信息 */}
                {item.tips && (
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-2 px-3 rounded-lg border border-amber-200/50">
                    <div className="flex items-start gap-2">
                      <span className="text-lg flex-shrink-0">💡</span>
                      <div className="flex-1">
                        <div className="font-bold text-amber-900 text-xs sm:text-sm">记忆提示</div>
                        <div className="text-xs sm:text-sm text-amber-800 leading-snug">{item.tips}</div>
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
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
        {/* 主标题区 */}
        <div className="relative mb-8 sm:mb-16">
          <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-600 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-white relative overflow-hidden">
            {/* 装饰元素 */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                <div className="bg-white/20 p-2 sm:p-3 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                  <BookMarked className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h1 className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  名词解释
                </h1>
              </div>
              <p className="text-cyan-100 text-sm sm:text-lg mb-4 sm:mb-6 text-center">主动回忆训练 · COA核心概念背诵</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-white/20">
                  <div className="text-2xl sm:text-3xl font-black">{coaTerms.length}</div>
                  <div className="text-xs sm:text-sm text-cyan-100 mt-1">总项数</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-white/20">
                  <div className="text-2xl sm:text-3xl font-black text-red-300">{coaTerms.filter(t => t.important).length}</div>
                  <div className="text-xs sm:text-sm text-cyan-100 mt-1">重要项</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-white/20">
                  <div className="text-2xl sm:text-3xl font-black text-green-300">{masteredIds.length}</div>
                  <div className="text-xs sm:text-sm text-cyan-100 mt-1">已掌握</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 模式选择按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <button
            onClick={() => { setMode('flashcard'); setCardIndex(0); }}
            className="flex-1 py-4 sm:py-5 px-4 sm:px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <div>🎴</div>
            <span>翻转卡片学习</span>
          </button>
          <button
            onClick={() => setMode('list')}
            className="flex-1 py-4 sm:py-5 px-4 sm:px-6 rounded-xl bg-white text-gray-800 font-bold text-base sm:text-lg shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 border-gray-200 flex items-center justify-center gap-2"
          >
            <div>📋</div>
            <span>列表浏览</span>
          </button>
        </div>
      </div>
    </div>
  );

  if (mode === 'menu') {
    return renderMenu();
  }

  if (mode === 'flashcard' && currentItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <button
            onClick={() => setMode('menu')}
            className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 font-semibold bg-white/95 shadow-lg rounded-xl px-3 sm:px-5 py-2 sm:py-2.5 transition-all text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">返回菜单</span>
            <span className="sm:hidden">返回</span>
          </button>
        </div>
        <TermsFlashcard
          item={currentItem}
          onNext={handleNext}
          onPrev={handlePrev}
          isMastered={masteredIds.includes(currentItem.id)}
          toggleMastered={() => toggleMasteredId(currentItem.id)}
        />
        <div className="text-center pb-8 text-gray-600">
          {cardIndex + 1} / {activeDeck.length}
        </div>
      </div>
    );
  }

  if (mode === 'list') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <button
            onClick={() => setMode('menu')}
            className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 font-semibold bg-white/95 shadow-lg rounded-xl px-3 sm:px-5 py-2 sm:py-2.5 transition-all text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">返回菜单</span>
            <span className="sm:hidden">返回</span>
          </button>
        </div>
        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">名词解释列表</h2>
          <ListView items={coaTerms} />
        </div>
      </div>
    );
  }

  return null;
}
