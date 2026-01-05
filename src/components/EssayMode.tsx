import { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, ArrowRight, RotateCcw, Eye, EyeOff, 
  ChevronRight, ChevronDown, BookMarked, Target, CheckCircle, List
} from 'lucide-react';

// 大题数据（从作业.md提取的简答和论述题）
const essayData = [
  {
    id: 'q1',
    q: '为了提高系统的安全性，对用户密码应如何管理？',
    a: `① 强制定义密码策略（长度、复杂度、历史、有效期）
② 定期更换并提前提醒
③ 首次登录强制改初始口令
④ 连续失败锁定+延时解锁
⑤ 只存加盐慢哈希
⑥ 定期审计弱/空口令
⑦ 多因素认证`,
    keywords: ['密码策略', '定期更换', '强制改口令', '失败锁定', '加盐哈希', '审计', '多因素认证'],
    tips: '覆盖"设、换、锁、存、查、增"全流程',
    emoji: '🔐',
    important: true
  },
  {
    id: 'q2',
    q: '简述 /etc/passwd、/etc/shadow、/etc/group 文件的作用及简要结构',
    a: `/etc/passwd 存用户基本信息（名:x:UID:GID:注释:家:Shell）

/etc/shadow 存密码哈希与策略（名:加密口令:最后修改:最小:最大:警告:失效:保留）

/etc/group 存组信息（组名:x:GID:成员列表）`,
    keywords: ['passwd', 'shadow', 'group', 'UID', 'GID', '加密口令', '成员列表'],
    tips: 'passwd 可读，shadow 仅 root，group 实现多用户快速授权',
    emoji: '📝'
  },
  {
    id: 'q3',
    q: '为何要上锁一个用户？如何锁定？如何解锁？',
    a: `原因：防止非法或闲置账号被利用

锁定：passwd -l 用户名 或 usermod -L 用户名

解锁：passwd -u 用户名 或 usermod -U 用户名`,
    keywords: ['passwd -l', 'usermod -L', 'passwd -u', '防止非法', '闲置账号'],
    tips: '锁定后用户无法通过密码认证，解锁即恢复',
    emoji: '🔒'
  },
  {
    id: 'q4',
    q: '如何在删除一个用户时也同时删除它的家目录？操作时应注意什么？',
    a: `命令：userdel -r 用户名

注意：先备份、确认无共用家目录、检查计划任务/邮件/进程残留`,
    keywords: ['userdel -r', '备份', '家目录', '邮件', '进程残留'],
    tips: '-r 递归删除家目录与邮件箱，操作不可逆',
    emoji: '🗑️'
  },
  {
    id: 'q5',
    q: '如何确定用户所使用的终端？',
    a: `who 或 w 命令查看当前登录会话及终端设备名

tty 显示当前 shell 所在终端文件（如 /dev/tty2）`,
    keywords: ['who', 'w', 'tty', '终端设备', '/dev/tty2'],
    tips: 'who 列所有会话，tty 只给当前窗口',
    emoji: '💻'
  },
  {
    id: 'q6',
    q: '简述 Linux 系统的访问控制机制',
    a: `自主访问控制（DAC）：
内核依据文件 inode 中的 9 位 rwx 权限位与进程 euid/egid 比对，决定读写执行；属主、属组、其它三级匹配

特殊位与掩码：
SUID/SGID/SBIT 扩展身份/行为；umask 决定新建默认权限

强制访问控制（MAC）：
加载安全模块（SELinux、AppArmor、SMACK 等）后，内核再按安全标签、策略规则做二次判定

能力（Capabilities）与命名空间：
将 root 特权拆分为独立能力，按需授予进程；结合 user/pid/mount 等命名空间实现容器级隔离

审计与扩展：
audit 子系统记录所有权限判定结果；可叠加 RBAC、ACL、SELinux RBAC/MLS 实现更细粒度控制`,
    keywords: ['DAC', 'MAC', 'SUID', 'SELinux', 'Capabilities', 'audit', 'RBAC', 'ACL'],
    tips: '五层叠加，实现"先 DAC 后 MAC，再 Cap"的立体控制',
    emoji: '🛡️',
    important: true
  },
  {
    id: 'q7',
    q: '简述 su 和 sudo 命令的用法',
    a: `su 切换用户（默认 root），需目标密码，su - 启动登录 shell

sudo 以 root（或授权用户）执行单条命令，需自身密码，策略文件 /etc/sudoers 可限命令、主机、参数，默认日志记录`,
    keywords: ['su', 'sudo', '切换用户', 'sudoers', '日志记录'],
    tips: 'su 适合长时间维护，sudo 实现"最小权限 + 可追溯"',
    emoji: '👤'
  },
  {
    id: 'q8',
    q: '简述如何进行用户和组管理',
    a: `用户：useradd 建账号，passwd 设口令，usermod 改属性，userdel 删账号，vipw 安全编辑

组：groupadd 建组，groupmod 改属性，groupdel 删组，gpasswd -a/-d 增删成员，vigr 编辑

核心文件：/etc/passwd、/etc/shadow、/etc/group、/etc/gshadow`,
    keywords: ['useradd', 'passwd', 'usermod', 'userdel', 'groupadd', 'gpasswd', 'vipw', 'vigr'],
    tips: '命令是封装，四个文本文件是真相，编辑前务必用 vipw/vigr 加锁防止损坏',
    emoji: '👥'
  },
  {
    id: 'q9',
    q: '普通权限共有哪三种？并解释其功能。',
    a: `读权限（r）：指用户对文件或目录查看权限

写权限（w）：指用户对文件或目录的写权力。若用户对某文件没有写权限，则不能修改它；若用户对某目录没有写权限，则不能在该目录内创建文件或子目录

执行权（x）：指用户对文件的执行权或对目录的进入权限。若用户对某文件没有执行权则不能执行它；若用户对某目录没有执行权则不能进入它`,
    keywords: ['读权限', '写权限', '执行权', '查看权限', '进入权限'],
    tips: 'rwx 对文件和目录的意义不同，目录必须有 x 才能进入',
    emoji: '🔑'
  },
  {
    id: 'q10',
    q: 'UNIX/Linux 系统对文件操作的三种权限只对三类人分配，是哪三类人？',
    a: `用户主（user：u）：文件的拥有者

同组人（group：g）：与文件主同组的用户

其他人（other：o）：除用户主和同组人以外的用户`,
    keywords: ['用户主', '同组人', '其他人', 'user', 'group', 'other'],
    tips: 'ls -l 显示的 9 位权限分为 3 组，分别对应 u、g、o',
    emoji: '👨‍👩‍👧'
  },
  {
    id: 'q11',
    q: 'UNIX/Linux 系统有几类进程？试说明后台进程的作用或执行过程。',
    a: `三类：交互进程、批处理进程、守护进程（后台）

后台进程作用：不占用终端，完成无需用户干预的任务（如系统服务、定时任务）

执行过程：启动后脱离控制终端，进入后台运行，直至任务完成或被终止`,
    keywords: ['交互进程', '批处理进程', '守护进程', '脱离终端', '系统服务'],
    tips: '守护进程是后台的特殊形式，随系统启动，永不占用前台终端',
    emoji: '⚙️'
  },
  {
    id: 'q12',
    q: '试述 0# 和 1# 进程的作用及 UNIX/Linux 进程树的形成过程。',
    a: `0# idle 进程：CPU 空闲时运行，负责负载均衡，生命周期同内核

1# init 进程：首个用户态进程，负责系统初始化、收养孤儿、管理运行级别，崩溃则内核 panic

形成过程：0# 手工创建 → 启动 1# → 1# exec 为 /sbin/init → init 不断 fork 子进程，用户进程再层层 fork，以 1# 为根构成单根树`,
    keywords: ['idle 进程', 'init 进程', 'fork', '孤儿进程', '单根树'],
    tips: '0# 隐藏于内核，ps 看不到；1# 是用户空间"始祖"',
    emoji: '🌳',
    important: true
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
const ClozeText = ({ text, keywords, isRevealedGlobal, forceHighlight = false }: { text: string; keywords: string[]; isRevealedGlobal: boolean; forceHighlight?: boolean }) => {
  if (!keywords || keywords.length === 0) return <span className="whitespace-pre-line">{text}</span>;

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
                  <ClozeText text={item.a} keywords={item.keywords} isRevealedGlobal={revealAll} />
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
                       <ClozeText text={item.a} keywords={item.keywords} isRevealedGlobal={false} forceHighlight={true} />
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
                  简答 & 论述题
                </h1>
              </div>
              <p className="text-purple-100 text-sm sm:text-lg mb-4 sm:mb-6 text-center">主动回忆训练 · 看不懂没关系，背下来就行！</p>
              
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
