import { useState, useMemo } from 'react';
import { FileText, Server, UserCircle, Globe, Search, Brain, RotateCcw, Cpu, Database, HardDrive, Layers } from 'lucide-react';

// 图标组件映射
const Icons = {
  Process: Cpu,
  Memory: Database,
  IO: HardDrive,
  File: FileText,
  System: Server,
  Brain: Brain,
  Rotate: RotateCcw,
  Layers: Layers
};

interface ConceptOption {
  key: string;
  desc: string;
  context: string;
}

interface ConceptData {
  title: string;
  category: 'process' | 'memory' | 'io' | 'file';
  rank: number;
  desc: string;
  memory: string;
  visual: string;
  options: ConceptOption[];
  example: string;
  tip: string;
}

const conceptData: ConceptData[] = [
  // --- 进程管理 (Process) ---
  {
    title: "Process State",
    category: "process",
    rank: 5,
    desc: "进程的三种基本状态及其转换",
    memory: "就绪(Ready) -> 执行(Running) -> 阻塞(Blocked)",
    visual: "🚦 就像红绿灯，绿灯行(运行)，红灯停(阻塞)，黄灯等(就绪)。",
    options: [
      { key: "Ready", desc: "就绪态", context: "万事俱备，只欠CPU" },
      { key: "Running", desc: "运行态", context: "正在占用CPU执行指令" },
      { key: "Blocked", desc: "阻塞态", context: "等待I/O或事件，给CPU也没法运行" }
    ],
    example: "进程A请求读取磁盘(运行->阻塞)，磁盘读完(阻塞->就绪)，调度程序选中(就绪->运行)。",
    tip: "注意：阻塞态不能直接变运行态，必须先变就绪态。"
  },
  {
    title: "Deadlock",
    category: "process",
    rank: 5,
    desc: "死锁的四个必要条件",
    memory: "互占不可(环)",
    visual: "🔒 四把锁互相锁住，谁也打不开谁。",
    options: [
      { key: "Mutual Exclusion", desc: "互斥条件", context: "资源独占" },
      { key: "Hold and Wait", desc: "请求与保持", context: "吃着碗里的，看着锅里的" },
      { key: "No Preemption", desc: "不可剥夺", context: "不能强抢" },
      { key: "Circular Wait", desc: "循环等待", context: "你等我，我等你" }
    ],
    example: "哲学家进餐问题：每个人都拿了左边的筷子等右边的。",
    tip: "破坏任意一个条件即可解除死锁，通常破坏循环等待或请求与保持。"
  },
  {
    title: "Scheduling",
    category: "process",
    rank: 4,
    desc: "常见调度算法",
    memory: "FCFS, SJF, RR",
    visual: "⏱️ 排队买票(FCFS)，短作业优先(SJF)，每个人轮流玩(RR)。",
    options: [
      { key: "FCFS", desc: "先来先服务", context: "公平，但对短作业不利" },
      { key: "SJF", desc: "短作业优先", context: "平均等待时间最短，但可能导致长作业饥饿" },
      { key: "RR", desc: "时间片轮转", context: "公平，适合分时系统" }
    ],
    example: "Windows使用多级反馈队列调度。",
    tip: "响应比高优先权 = (等待时间+要求服务时间)/要求服务时间"
  },
   // --- 存储管理 (Memory) ---
  {
    title: "Paging",
    category: "memory",
    rank: 5,
    desc: "分页存储管理",
    memory: "页框(Frame) 与 页面(Page)",
    visual: "📄 书被切成同样大小的页，书架也被分成同样大小的格。",
    options: [
      { key: "Page", desc: "页面", context: "逻辑地址空间的划分" },
      { key: "Frame", desc: "页框/物理块", context: "物理内存的划分" },
      { key: "Page Table", desc: "页表", context: "记录页面到页框的映射" }
    ],
    example: "4KB一页是常见设置。",
    tip: "分页解决外部碎片，但产生内部碎片(页内碎片)。"
  },
  {
    title: "Segmentation",
    category: "memory",
    rank: 4,
    desc: "分段存储管理",
    memory: "按逻辑分段",
    visual: "🧩 就像写文章，分章、节、段，长短不一。",
    options: [
      { key: "Segment", desc: "段", context: "具有逻辑意义的连续空间" },
      { key: "Base", desc: "基址", context: "段在内存的起始位置" },
      { key: "Limit", desc: "段长", context: "段的长度限制" }
    ],
    example: "代码段、数据段、堆栈段。",
    tip: "分段方便共享和保护，但有外部碎片。"
  }
];

export default function OSConceptCards() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const filteredData = useMemo(() => {
    return conceptData.filter(item => {
      const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categories = [
    { id: 'all', label: '全部', icon: Icons.Layers },
    { id: 'process', label: '进程', icon: Icons.Process },
    { id: 'memory', label: '存储', icon: Icons.Memory },
    { id: 'io', label: 'I/O', icon: Icons.IO },
    { id: 'file', label: '文件', icon: Icons.File },
  ];

  return (
    <div className="h-full flex flex-col bg-gray-50/50">
      {/* 顶部搜索栏 */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Icons.Brain className="w-6 h-6 text-blue-600" />
              OS Concept Cards
            </h2>
            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium">Core</span>
          </div>
          
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text"
                placeholder="Search concepts..."
                className="w-full pl-9 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              {categories.map(cat => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`
                      flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all
                      ${isActive 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200 scale-105' 
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 卡片网格 */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredData.map((item, index) => (
            <div 
              key={index}
              className={`
                group relative bg-white rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
                ${activeCard === index 
                  ? 'border-blue-500 shadow-xl ring-2 ring-blue-100' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'}
              `}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              {/* 卡片头部 */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`
                      px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider
                      ${item.category === 'process' ? 'bg-purple-100 text-purple-700' :
                        item.category === 'memory' ? 'bg-green-100 text-green-700' :
                        item.category === 'io' ? 'bg-orange-100 text-orange-700' :
                        'bg-blue-100 text-blue-700'}
                    `}>
                      {item.category}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(item.rank)].map((_, i) => (
                        <div key={i} className="w-1 h-3 bg-red-400 rounded-full opacity-60" />
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {item.desc}
                </p>

                {/* 记忆提示 */}
                <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg text-xs text-yellow-800 font-medium">
                  <Icons.Brain className="w-4 h-4 text-yellow-600 shrink-0" />
                  {item.memory}
                </div>
              </div>

              {/* 展开内容 */}
              <div className={`
                bg-gray-50 border-t border-gray-100 transition-all duration-300
                ${activeCard === index ? 'max-h-[500px] opacity-100 p-5' : 'max-h-0 opacity-0 overflow-hidden'}
              `}>
                <div className="space-y-4">
                  {/* 可视化描述 */}
                  <div className="text-sm text-gray-600 italic border-l-2 border-blue-400 pl-3">
                    {item.visual}
                  </div>

                  {/* 选项/参数列表 */}
                  <div className="grid gap-2">
                    {item.options.map((opt, i) => (
                      <div key={i} className="flex items-baseline gap-2 text-sm">
                        <code className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-blue-600 font-mono text-xs shadow-sm">
                          {opt.key}
                        </code>
                        <span className="font-medium text-gray-700">{opt.desc}</span>
                        <span className="text-gray-400 text-xs">-</span>
                        <span className="text-gray-500">{opt.context}</span>
                      </div>
                    ))}
                  </div>

                  {/* 例子和提示 */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white p-3 rounded-xl border border-gray-200">
                      <div className="text-xs font-bold text-gray-400 uppercase mb-1">Example</div>
                      <div className="text-sm text-gray-700 font-mono">{item.example}</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200">
                      <div className="text-xs font-bold text-gray-400 uppercase mb-1">Note</div>
                      <div className="text-sm text-gray-700">{item.tip}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 底部指示器 */}
              <div className="absolute bottom-2 right-1/2 translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className={`w-8 h-1 rounded-full ${activeCard === index ? 'bg-transparent' : 'bg-gray-300'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
