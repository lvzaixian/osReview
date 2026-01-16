/**
 * 计算机组成原理 - 名词解释
 */

export interface CoaTerm {
  id: string;
  term: string;
  definition: string;
  keywords: string[];
  tips?: string;
  important?: boolean;
}

export const coaTerms: CoaTerm[] = [
  {
    id: 'coa-1',
    term: 'ROM（只读存储器）',
    definition: '只读存储器，主要用于存储固定的系统程序和数据。其特点是数据不能被修改，只能被读取。即使断电，存储在ROM中的信息也不会丢失，属于非易失性存储器。',
    keywords: ['只读', '非易失', '系统程序', '固定数据'],
    tips: '只读 = 不能写，断电不丢失',
    important: true
  },
  {
    id: 'coa-2',
    term: 'CU（控制单元）',
    definition: '处理器的重要组成部分，主要功能是向计算机中各部分发送控制信号。CU负责指令的解析和执行控制，根据指令操作码产生相应的微操作序列，驱动整个计算机工作。',
    keywords: ['控制信号', '指令解析', '微操作', '核心部件'],
    tips: '控制单元 = CPU的"大脑"，负责控制整个系统',
    important: true
  },
  {
    id: 'coa-3',
    term: 'DRAM（动态随机存取存储器）',
    definition: '一种使用电容存储信息的存储器。由于电容会自然放电，所以需要定期刷新以保持数据。DRAM具有集成度高、功耗低、成本低的优点，是现在最常见的主存储器。',
    keywords: ['动态', '电容', '需要刷新', '主存', '成本低'],
    tips: '动态 = 需要定期刷新，这就是名字的来源',
    important: true
  },
  {
    id: 'coa-4',
    term: 'RISC（精简指令集计算机）',
    definition: '一种处理器设计哲学，采用指令集简洁、指令数量少、指令长度固定的设计方案。RISC处理器执行速度快，易于设计，但程序代码较长。',
    keywords: ['精简', '指令集少', '执行快', '易设计'],
    tips: '精简 = 指令少但执行快，代码长',
    important: true
  },
  {
    id: 'coa-5',
    term: 'EEPROM（电可擦除可编程只读存储器）',
    definition: '一种可重复擦除和编程的只读存储器。可以用电信号擦除其中全部或部分内容，然后重新编程。EEPROM具有非易失性，常用于存储系统参数和用户数据。',
    keywords: ['可擦除', '可编程', '电信号', '非易失'],
    tips: '电可擦除 = 用电信号就能擦掉，可以多次重写',
    important: false
  },
  {
    id: 'coa-6',
    term: 'HLDA（总线响应信号）',
    definition: '由处理器输出的总线响应信号，用于向DMA控制器或其他总线管理器表示处理器已释放总线控制权。当HLDA为高电平时，表示处理器同意放弃总线。',
    keywords: ['总线', '响应信号', 'DMA', '释放控制权'],
    tips: '总线响应 = 处理器告诉DMA：我把总线让给你了',
    important: false
  },
  {
    id: 'coa-7',
    term: 'MDR（存储器数据寄存器）',
    definition: '用于暂存从存储器读出的数据或要写入存储器的数据。MDR的位数等于存储器的字长，是处理器与存储器间的数据通道。',
    keywords: ['数据缓存', '存储器', '字长', '数据通道'],
    tips: '数据寄存器 = 存储器和处理器之间的中转站',
    important: true
  },
  {
    id: 'coa-8',
    term: 'INTA（中断响应信号）',
    definition: '由处理器输出的中断响应信号。当处理器同意接受中断并准备响应中断时，INTA信号有效。中断控制器可通过INTA信号向处理器提供中断向量或中断类型号。',
    keywords: ['中断', '响应信号', '中断向量', '中断类型'],
    tips: '中断响应 = 处理器告诉外设：我收到你的中断了',
    important: false
  },
  {
    id: 'coa-9',
    term: 'PC（程序计数器）',
    definition: '处理器中的一个寄存器，用于存放下一条要执行的指令的地址。PC会自动递增或根据转移指令的结果进行修改，是实现程序顺序执行和转移的关键。',
    keywords: ['指令地址', '自动递增', '转移控制', '核心寄存器'],
    tips: '程序计数器 = 告诉处理器下一步去哪儿',
    important: true
  },
  {
    id: 'coa-10',
    term: 'EPROM（可编程只读存储器）',
    definition: '一种可以多次改写内容的只读存储器。用紫外线照射可以将其全部内容擦除，然后可以重新编程。具有非易失性，曾广泛用于存储BIOS等固件。',
    keywords: ['可编程', '紫外线擦除', '非易失', '固件'],
    tips: '可编程只读 = 能改写但需要紫外线擦除',
    important: false
  },
  {
    id: 'coa-11',
    term: 'MAR（存储器地址寄存器）',
    definition: '用于暂存要访问的存储器单元的地址。MAR的位数等于存储器的地址位数，决定了存储器的寻址范围。',
    keywords: ['地址缓存', '存储寻址', '地址范围', '位宽'],
    tips: '地址寄存器 = 告诉存储器要去找哪个单元',
    important: true
  },
  {
    id: 'coa-12',
    term: 'DMA（直接内存存取）',
    definition: '允许设备与内存之间进行直接的数据传输，而不需要经过处理器。DMA控制器管理这个传输过程，大大提高了I/O效率，减少了处理器负担。',
    keywords: ['直接传输', '不经过处理器', '高效', 'I/O'],
    tips: '直接内存访问 = 外设和内存绕过处理器直接对话',
    important: true
  },
  {
    id: 'coa-13',
    term: 'RAM（随机存取存储器）',
    definition: '一种易失性存储器，可以随机读取和写入任何位置的数据，访问速度快。RAM存储的数据会随着电源关闭而丢失。是计算机的主存储器。',
    keywords: ['随机读写', '易失性', '主存', '访问快'],
    tips: '随机存取 = 可以快速访问任何位置，断电数据丢失',
    important: true
  },
  {
    id: 'coa-14',
    term: 'PROM（一次性编程只读存储器）',
    definition: '一种只能被编程一次的只读存储器。用户可以在现场对其进行编程，但编程后就不能再修改。具有非易失性。',
    keywords: ['一次性', '用户编程', '不可修改', '非易失'],
    tips: '一次性编程 = 写进去就改不了了',
    important: false
  },
  {
    id: 'coa-15',
    term: 'ALU（算术逻辑单元）',
    definition: '处理器的重要组成部分，主要完成算术运算（加、减、乘、除）和逻辑运算（与、或、非、异或）。ALU是处理器进行数据处理的核心部件。',
    keywords: ['运算', '算术', '逻辑', '核心部件'],
    tips: '算术逻辑单元 = 处理器的"计算工人"',
    important: true
  },
  {
    id: 'coa-16',
    term: 'IR（指令寄存器）',
    definition: '用于暂存从存储器取出的指令。IR中存放的指令被控制单元分析和执行。IR的位数等于指令的长度。',
    keywords: ['指令缓存', '指令执行', '控制单元', '指令长度'],
    tips: '指令寄存器 = 临时存放当前要执行的指令',
    important: true
  },
  {
    id: 'coa-17',
    term: 'SRAM（静态随机存取存储器）',
    definition: '一种使用触发器存储信息的存储器，只要电源不断电，存储的数据就不会丢失。SRAM速度快、易于使用，但集成度低、功耗大、成本高，常用作高速缓存。',
    keywords: ['静态', '触发器', '速度快', '成本高', '缓存'],
    tips: '静态 = 不需要刷新，但速度快成本贵',
    important: true
  },
  {
    id: 'coa-18',
    term: 'CISC（复杂指令集计算机）',
    definition: '一种处理器设计哲学，采用指令集复杂、指令数量多、指令长度不固定的设计方案。CISC处理器指令功能强大，程序代码短，但设计复杂、执行速度相对较慢。',
    keywords: ['复杂', '指令多', '代码短', '设计复杂'],
    tips: '复杂指令集 = 指令多功能强，但设计麻烦',
    important: true
  },
  {
    id: 'coa-19',
    term: 'MREQ（存储请求信号）',
    definition: '由处理器输出的存储请求信号。当处理器需要读写存储器时，MREQ信号有效，告诉存储系统处理器要访问存储器。',
    keywords: ['存储访问', '读写请求', '控制信号'],
    tips: '存储请求 = 处理器告诉存储器：我要读/写你',
    important: false
  },
  {
    id: 'coa-20',
    term: 'FLOPS（每秒浮点运算数）',
    definition: '计算机性能的一个重要指标，表示计算机每秒能进行浮点运算的次数。单位为FLOPS（Floating Point Operations Per Second）。用来衡量处理器的计算能力。',
    keywords: ['性能指标', '浮点运算', '计算速度', '处理能力'],
    tips: '浮点运算 = 衡量计算机计算能力的标准尺子',
    important: false
  }
];

export const getCoaTermStats = () => {
  return {
    total: coaTerms.length,
    important: coaTerms.filter(t => t.important).length,
    isComplete: true
  };
};

export const getCoaTermById = (id: string) => {
  return coaTerms.find(t => t.id === id);
};
