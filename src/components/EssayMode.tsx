import { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, ArrowRight, RotateCcw, Eye, EyeOff, 
  ChevronRight, ChevronDown, BookMarked, Target, CheckCircle, List
} from 'lucide-react';

/// 简答题数据（操作系统重点简答题）
const essayData = [
  {
    id: 'q1',
    q: '简要描述处理机的双重工作模式。',
    a: `（1）用户态也称为目态，计算机硬件可以通过一个模式位1来表示它；当计算机系统执行用户程序时，系统处于用户态。

（2）内核态也称为管态或系统态，计算机硬件可以通过一个模式位0来表示它；每当OS能够控制计算机时，它就处于内核态。`,
    keywords: ['用户态', '目态', '模式位1', '内核态', '管态', '模式位0'],
    tips: '用户态用1表示，内核态用0表示，通过模式位切换',
    emoji: '💻',
    important: true
  },
  {
    id: 'q2',
    q: '什么是系统调用？系统调用与一般用户程序和库函数有何区别？',
    a: `系统调用是OS提供给程序员的唯一接口（程序员利用系统调用，在源程序层动态请求和释放系统资源，并调用系统中已有的系统功能完成与机器硬件相关的工作等）。

系统调用与一般用户、库函数的区别：
①系统调用在内核态下执行；
②用户程序在用户态下执行；
③库函数通过封装系统调用，简化了编程复杂度，提供了更多高级功能。`,
    keywords: ['系统调用', '唯一接口', '内核态', '用户态', '库函数'],
    tips: '系统调用是OS接口，内核态执行；库函数封装系统调用，提供高级功能',
    emoji: '🔌'
  },
  {
    id: 'q3',
    q: '在创建一个进程时，OS需要完成的主要工作是什么？',
    a: `①调用进程创建原语；
②申请一个空白PCB，向PCB中填写控制和管理进程的信息；
③为该进程分配运行时需要的资源；
④把该进程的PCB改成就绪态，并插入就绪队列。`,
    keywords: ['进程创建原语', 'PCB', '分配资源', '就绪态', '就绪队列'],
    tips: '创建进程四步：调用原语→申请PCB→分配资源→插入就绪队列',
    emoji: '🔨'
  },
  {
    id: 'q4',
    q: '当前有哪几种高级通信机制？',
    a: `①共享存储器系统：进程通过共享某些数据结构或存储区进行通信。

②管道通信系统：发送进程和接收进程利用管道进行通信。

③消息传递系统：将通信的数据封装在消息中，利用OS提供的一组通信命令在进程间进行消息传递。

④客户机-服务器系统：在网络环境的各种应用领域，已成为主流的通信机制。`,
    keywords: ['共享存储器', '管道通信', '消息传递', '客户机-服务器'],
    tips: '四种高级通信：共享存储、管道、消息传递、客户机-服务器',
    emoji: '📡'
  },
  {
    id: 'q5',
    q: '简述引起进程调度的常见原因。',
    a: `①正在运行的进程正常终止或异常终止；
②正在运行的进程因某种原因而阻塞；
③在引入时间片的系统中，时间片用完；
④在抢占式调度方式中，有优先级更高的进程进入就绪队列。`,
    keywords: ['进程终止', '进程阻塞', '时间片', '抢占式调度', '就绪队列'],
    tips: '四种原因：终止、阻塞、时间片到、高优先级进程到达',
    emoji: '⚡'
  },
  {
    id: 'q6',
    q: '产生死锁必须同时具备的必要条件是什么？',
    a: `互斥条件，请求和保持条件，不可抢占条件，循环等待条件。`,
    keywords: ['互斥条件', '请求和保持', '不可抢占', '循环等待'],
    tips: '死锁四条件：互斥、请求保持、不可抢占、循环等待',
    emoji: '🔒',
    important: true
  },
  {
    id: 'q7',
    q: '常用的死锁处理方法是哪几种？哪个方法最易于实现？哪个方法可使资源利用率最高？',
    a: `解决死锁的方法有：预防死锁，避免死锁，检测和解除死锁。

其中最容易实现的是预防死锁，但因限制条件过于严格，资源利用率和系统吞吐量会降低；

而检测和解除死锁可获得较好的资源利用率和系统吞吐量。`,
    keywords: ['预防死锁', '避免死锁', '检测和解除', '资源利用率'],
    tips: '预防最易实现但利用率低，检测解除利用率最高',
    emoji: '🛠️'
  },
  {
    id: 'q8',
    q: '同步机制应遵循的准则有哪些？',
    a: `空闲让进，忙则等待，有限等待，让权等待。`,
    keywords: ['空闲让进', '忙则等待', '有限等待', '让权等待'],
    tips: '四大准则：空闲让进、忙则等待、有限等待、让权等待',
    emoji: '🔄'
  },
  {
    id: 'q9',
    q: '若有 4 个进程共享同一程序段，而且每次最多允许 3 个进程进入该程序段，则信号量值的变化范围是什么？',
    a: `程序段作为共享资源，最多允许3个进程进入其中，因此设置信号量初值为3。

当4个进程共享该程序段时，在每个进程申请进入时，信号量都会执行减1操作。

当第1个进程申请进入时，信号量值变为2；
第2个进程申请进入时，信号量值变为1；
第3个进程申请进入时，信号量值变为0；
第4个进程申请进入时，信号量值变为-1。

因此，信号量的变化范围是3，2，1，0，-1。`,
    keywords: ['信号量', '初值为3', '变化范围', '3,2,1,0,-1'],
    tips: '初值3，4个进程申请，范围：3→2→1→0→-1',
    emoji: '📊'
  },
  {
    id: 'q10',
    q: '什么是动态重定位，实现动态重定位需要什么硬件支持？',
    a: `动态重定位是在程序运行过程中要访问数据时再进行地址变换。

硬件上需要基址寄存器和限长寄存器的支持。`,
    keywords: ['动态重定位', '地址变换', '基址寄存器', '限长寄存器'],
    tips: '运行时地址变换，需要基址和限长寄存器',
    emoji: '🎯'
  },
  {
    id: 'q11',
    q: '某系统采用分页存储管理方式，拥有逻辑空间 32 页，每页 2KB；拥有物理空间 1MB。（1）写出逻辑地址的格式。（2）若不考虑访问权限等，则进程的页表有多少项？每项至少有多少位？',
    a: `（1）该系统拥有逻辑空间32页，故逻辑地址中页号必须用5位来描述。而每页为2KB，页内地址必须用11位来描述，可得逻辑地址格式如下图所示。

（2）每个进程最多有32个页面，进程的页表项最多为32项。若不考虑访问权限等，则页表项中只须给出页所对应的物理块块号，1MB的物理空间可分成29个内存块，故每个页表项至少有9位。`,
    keywords: ['分页存储', '页号5位', '页内地址11位', '页表32项', '每项9位'],
    tips: '逻辑地址=页号(5位)+页内地址(11位)，页表32项每项9位',
    emoji: '📐',
    hasImage: true,
    important: true
  },
  {
    id: 'q12',
    q: 'I/O设备的控制方式有哪几种？',
    a: `轮询方式，中断方式，直接存储器（DMA）方式，通道方式。`,
    keywords: ['轮询方式', '中断方式', 'DMA方式', '通道方式'],
    tips: '四种I/O控制：轮询、中断、DMA、通道',
    emoji: '🖥️'
  },
  {
    id: 'q13',
    q: '简述I/O管理中引入缓冲区的目的。',
    a: `①缓和CPU与I/O设备间速度不匹配的矛盾；

②减少对CPU的中断频率，放宽对CPU中断响应时间的限制；

③解决数据粒度不匹配的问题；

④提高CPU与I/O设备之间的并行性。`,
    keywords: ['缓冲区', '速度不匹配', '中断频率', '数据粒度', '并行性'],
    tips: '四个目的：平衡速度、减少中断、匹配粒度、提高并行',
    emoji: '📦'
  },
  {
    id: 'q14',
    q: '常见的文件存储空间管理方法有哪几种？',
    a: `空闲区表法，空闲链表法，位示图法，成组链接法。`,
    keywords: ['空闲区表法', '空闲链表法', '位示图法', '成组链接法'],
    tips: '四种管理方法：空闲区表、空闲链表、位示图、成组链接',
    emoji: '💾'
  },
  {
    id: 'q15',
    q: '不同页的大小对分页系统性能的影响是什么？',
    a: `①页面小：可以减少内部碎片，提高内存的利用率；但进程占用较多的页导致页表过长，占用大量内存；还会降低页面换入/换出的效率。

②页面大：可以减少页表长度，提高页面换入/换出的效率；但是页内碎片会增大。`,
    keywords: ['页面小', '页面大', '内部碎片', '页表长度', '换入换出效率'],
    tips: '页面小：碎片少但页表长；页面大：页表短但碎片多',
    emoji: '📏'
  }
];

// 关键词高亮组件
const KeywordPill = ({ text, isRevealedGlobal, forceHighlight = false }: { text: string; isRevealedGlobal: boolean; forceHighlight?: boolean }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  
  useEffect(() => {
    if (!isRevealedGlobal) {
      setIsRevealed(false);
    }
  }, [isRevealedGlobal]);

  const visible = forceHighlight || isRevealed || isRevealedGlobal;

  return (
    <span 
      onClick={(e) => { 
        if (!forceHighlight) {
          e.stopPropagation(); 
          setIsRevealed(!isRevealed); 
        }
      }}
      className={`
        inline-block mx-0.5 px-1.5 py-0.5 rounded transition-all border font-bold
        ${visible 
          ? 'bg-indigo-100 text-indigo-700 border-indigo-200' 
          : 'bg-gray-200 text-transparent border-gray-300 w-16 align-bottom select-none hover:bg-gray-300 cursor-pointer relative overflow-hidden'}
        ${forceHighlight ? 'cursor-text' : ''}
      `}
      title={visible ? "核心考点" : "点击查看"}
    >
      {text}
      {!visible && <span className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-mono">???</span>}
    </span>
  );
};

// 文本关键词遮盖组件
const ClozeText = ({ text, keywords, isRevealedGlobal, forceHighlight = false, hasImage = false }: { text: string; keywords: string[]; isRevealedGlobal: boolean; forceHighlight?: boolean; hasImage?: boolean }) => {
  if (!keywords || keywords.length === 0) {
    return (
      <span className="whitespace-pre-line">
        {text}
        {hasImage && (
          <div className="my-4 flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gray-200">
              <div className="font-mono text-center">
                <div className="flex border-2 border-gray-800">
                  <div className="flex-1 border-r-2 border-gray-800 px-4 py-2 bg-gray-50">
                    <div className="text-xs text-gray-600 mb-1">15 11 10 0</div>
                    <div className="text-sm font-bold">页号</div>
                  </div>
                  <div className="flex-1 px-4 py-2 bg-gray-50">
                    <div className="text-xs text-gray-600 mb-1">&nbsp;</div>
                    <div className="text-sm font-bold">页内地址</div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">逻辑地址格式：页号(5位) + 页内地址(11位)</div>
            </div>
          </div>
        )}
      </span>
    );
  }

  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
  const escapedKeywords = sortedKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'g');

  const parts = text.split(regex);

  return (
    <span className="leading-relaxed whitespace-pre-line">
      {parts.map((part, i) => {
        const isKeyword = keywords.some(k => k === part);
        
        if (isKeyword) {
          return <KeywordPill key={i} text={part} isRevealedGlobal={isRevealedGlobal} forceHighlight={forceHighlight} />;
        }
        return <span key={i}>{part}</span>;
      })}
      {hasImage && (
        <div className="my-4 flex justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gray-200">
            <div className="font-mono text-center">
              <div className="flex border-2 border-gray-800">
                <div className="flex-1 border-r-2 border-gray-800 px-4 py-2 bg-gray-50">
                  <div className="text-xs text-gray-600 mb-1">15 11 10 0</div>
                  <div className="text-sm font-bold">页号</div>
                </div>
                <div className="flex-1 px-4 py-2 bg-gray-50">
                  <div className="text-xs text-gray-600 mb-1">&nbsp;</div>
                  <div className="text-sm font-bold">页内地址</div>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">逻辑地址格式：页号(5位) + 页内地址(11位)</div>
          </div>
        </div>
      )}
    </span>
  );
};

// 翻转卡片组件
const Flashcard = ({ item, onNext, onPrev, isMastered, toggleMastered }: { item: typeof essayData[0]; onNext: () => void; onPrev: () => void; isMastered: boolean; toggleMastered: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [revealAll, setRevealAll] = useState(false);

  useEffect(() => { setIsFlipped(false); setRevealAll(false); }, [item]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-2 sm:p-4 relative">
      <div className="relative w-full aspect-[3/4] md:aspect-[4/3] cursor-pointer group" style={{ perspective: '1000px' }} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="w-full h-full transition-all duration-500 shadow-xl rounded-2xl relative" style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
          
          {/* Front */}
          <div className="absolute inset-0 w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center p-4 sm:p-6 border-2 border-purple-50 hover:border-purple-200 relative overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
            {item.important && <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-100 text-red-600 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-bold">重点</div>}
            <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">{item.emoji}</div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center leading-tight px-2">{item.q}</h3>
            <p className="absolute bottom-4 sm:bottom-6 text-gray-400 text-[10px] sm:text-xs animate-pulse flex items-center gap-1"><RotateCcw className="w-3 h-3" /> 点击看答案</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 w-full h-full bg-white rounded-2xl flex flex-col p-4 sm:p-6 overflow-hidden border-2 border-purple-500" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className="absolute top-2 right-2 flex gap-1.5 sm:gap-2 z-20" onClick={e => e.stopPropagation()}>
               <button onClick={() => setRevealAll(!revealAll)} className="p-1.5 sm:p-2 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-100" title={revealAll ? "隐藏填空" : "显示填空"}>{revealAll ? <Eye className="w-3 h-3 sm:w-4 sm:h-4" /> : <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" />}</button>
            </div>
            
            <div className="flex-1 overflow-y-auto mt-6 sm:mt-8 px-1 sm:px-2 pb-3 sm:pb-4">
              {/* 答案内容区 - 左对齐，统一缩进 */}
              <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-xl p-3 sm:p-4 md:p-5 border border-purple-100">
                <div className="text-base sm:text-lg md:text-xl font-medium text-left text-gray-800 leading-relaxed">
                  <ClozeText text={item.a} keywords={item.keywords} isRevealedGlobal={revealAll} hasImage={item.hasImage} />
                </div>
              </div>
              
              {/* 提示信息 */}
              {item.tips && (
                <div className="mt-2 sm:mt-3 bg-amber-50 p-2 sm:p-3 rounded-xl border border-amber-200 shadow-sm">
                  <div className="flex items-start gap-1.5 sm:gap-2">
                    <span className="text-sm sm:text-base flex-shrink-0">💡</span>
                    <div className="flex-1">
                      <div className="font-bold text-amber-900 text-sm sm:text-base mb-0.5">提示</div>
                      <div className="text-sm sm:text-base text-amber-800 leading-snug">{item.tips}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-4 sm:mt-6 gap-2 sm:gap-4">
        <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="p-3 sm:p-4 rounded-full bg-white shadow hover:bg-gray-50 text-gray-700 border border-gray-100"><ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /></button>
        <button onClick={toggleMastered} className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-xl shadow-sm font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${isMastered ? 'bg-green-100 text-green-700' : 'bg-white text-gray-500 border hover:bg-gray-50'}`}>{isMastered ? <><CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">已掌握 (移除)</span><span className="sm:hidden">已掌握</span></> : <><Target className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="hidden sm:inline">标记为已掌握</span><span className="sm:hidden">标记</span></>}</button>
        <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="p-3 sm:p-4 rounded-full bg-purple-600 shadow hover:bg-purple-700 text-white"><ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" /></button>
      </div>
    </div>
  );
};

// 列表视图组件
const ListView = ({ items }: { items: typeof essayData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto px-2 sm:px-0">
      {items.map((item, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
          <button 
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg text-xs sm:text-sm font-bold bg-purple-50 text-purple-700 border-purple-200">
                {item.emoji || (idx + 1)}
              </span>
              <span className="font-semibold text-gray-800 leading-tight text-lg sm:text-xl break-words">
                {item.q}
              </span>
              {item.important && (
                 <span className="flex-shrink-0 ml-1 sm:ml-2 px-1.5 sm:px-2 py-0.5 bg-red-50 text-red-600 text-[9px] sm:text-[10px] font-bold rounded-full uppercase border border-red-100">
                   重点
                 </span>
              )}
            </div>
            {openIndex === idx ? <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 ml-2" /> : <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 ml-2" />}
          </button>
          
          <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="p-3 sm:p-4 pt-0 bg-gray-50 border-t border-gray-100">
              <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                 <div className="flex gap-2 sm:gap-3">
                    <div className="w-1 bg-purple-400 rounded-full flex-shrink-0 h-auto"></div>
                    <div className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl w-full">
                       <ClozeText text={item.a} keywords={item.keywords} isRevealedGlobal={false} forceHighlight={true} hasImage={item.hasImage} />
                    </div>
                 </div>

                 {item.tips && (
                   <div className="ml-3 sm:ml-4 bg-amber-50 p-2 sm:p-3 rounded-lg border border-amber-100 text-base sm:text-lg text-amber-800">
                      <span className="font-bold">💡 提示：</span>{item.tips}
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

export default function EssayMode({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<'menu' | 'flashcard' | 'list'>('menu');
  const [cardIndex, setCardIndex] = useState(0);
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('essay_mastered_ids') || '[]'); } catch { return []; }
  });

  useEffect(() => { localStorage.setItem('essay_mastered_ids', JSON.stringify(masteredIds)); }, [masteredIds]);

  const toggleMasteredId = (id: string) => {
    setMasteredIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const activeDeck = useMemo(() => {
    const unmastered = essayData.filter(i => !masteredIds.includes(i.id));
    return unmastered.length > 0 ? unmastered : essayData;
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <div className="sticky top-0 z-50 pointer-events-none">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 sm:gap-2 text-gray-700 hover:text-gray-900 font-semibold bg-white/95 backdrop-blur-md shadow-lg rounded-xl px-3 sm:px-5 py-2 sm:py-2.5 pointer-events-auto transition-all hover:shadow-xl hover:scale-105 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">返回作业题回顾</span>
            <span className="sm:hidden">返回</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 max-w-5xl">
        {/* 主标题区 */}
        <div className="relative mb-8 sm:mb-16">
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-white relative overflow-hidden">
            {/* 装饰元素 */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                <div className="bg-white/20 p-2 sm:p-3 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                  <BookMarked className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h1 className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  简答题
                </h1>
              </div>
              <p className="text-purple-100 text-sm sm:text-lg mb-4 sm:mb-6 text-center">主动回忆训练 · 操作系统重点简答题</p>
              
              {/* 进度卡片 */}
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 border border-white/30 shadow-lg">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" />
                    <div>
                      <div className="text-xl sm:text-2xl font-black">{Math.round((masteredIds.length / essayData.length) * 100)}%</div>
                      <div className="text-[10px] sm:text-xs text-purple-200 font-medium">已掌握</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 模式选择卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <button
            onClick={() => setMode('flashcard')}
            className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* 渐变背景 */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl">🎴</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 group-hover:text-white mb-1 sm:mb-2 transition-colors">翻转卡片</h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-purple-100 transition-colors">主动回忆，点击翻转查看答案</p>
            </div>
          </button>

          <button
            onClick={() => setMode('list')}
            className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* 渐变背景 */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl">📋</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 group-hover:text-white mb-1 sm:mb-2 transition-colors">列表模式</h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-purple-100 transition-colors">展开全部，快速浏览所有题目</p>
            </div>
          </button>
        </div>

        {/* 题库信息卡片 */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
              <span className="text-xl sm:text-2xl">📚</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">题库信息</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-purple-600 mb-0.5 sm:mb-1">{essayData.length}</div>
              <div className="text-xs sm:text-sm text-purple-700 font-medium">总题数</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-red-600 mb-0.5 sm:mb-1">{essayData.filter(i => i.important).length}</div>
              <div className="text-xs sm:text-sm text-red-700 font-medium">重点题</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-green-600 mb-0.5 sm:mb-1">{masteredIds.length}</div>
              <div className="text-xs sm:text-sm text-green-700 font-medium">已掌握</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-orange-600 mb-0.5 sm:mb-1">{essayData.length - masteredIds.length}</div>
              <div className="text-xs sm:text-sm text-orange-700 font-medium">剩余</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (mode === 'menu') {
    return renderMenu();
  }

  if (mode === 'flashcard') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
            <button onClick={() => setMode('menu')} className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-gray-800 text-base sm:text-lg font-medium">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" /> <span className="hidden sm:inline">返回菜单</span><span className="sm:hidden">返回</span>
            </button>
            <div className="text-sm sm:text-base text-gray-600 font-semibold">
              {cardIndex + 1} / {activeDeck.length}
            </div>
            <button onClick={() => setMode('list')} className="flex items-center gap-1.5 sm:gap-2 text-purple-600 hover:text-purple-800 text-base sm:text-lg font-medium">
              <List className="w-5 h-5 sm:w-6 sm:h-6" /> <span className="hidden sm:inline">列表</span>
            </button>
          </div>
          {currentItem && (
            <Flashcard
              item={currentItem}
              onNext={handleNext}
              onPrev={handlePrev}
              isMastered={masteredIds.includes(currentItem.id)}
              toggleMastered={() => toggleMasteredId(currentItem.id)}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
          <button onClick={() => setMode('menu')} className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-gray-800 text-base sm:text-lg font-medium">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" /> <span className="hidden sm:inline">返回菜单</span><span className="sm:hidden">返回</span>
          </button>
          <div className="text-sm sm:text-base text-gray-600 font-semibold">
            共 {essayData.length} 题
          </div>
          <button onClick={() => setMode('flashcard')} className="flex items-center gap-1.5 sm:gap-2 text-purple-600 hover:text-purple-800 text-base sm:text-lg font-medium">
            <span className="hidden sm:inline">🎴 卡片</span>
            <span className="sm:inline">🎴</span>
          </button>
        </div>
        <ListView items={essayData} />
      </div>
    </div>
  );
}
