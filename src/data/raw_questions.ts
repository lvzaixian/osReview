import type { Question } from '../types';

export const rawQuestions: Question[] = [
    {
        id: "hw1-1",
        stem: "从下面关于并发性的论述中选出一条正确的论述( )。",
        options: [
            { key: "A", text: "并发性是指若干事件在同一时刻发生" },
            { key: "B", text: "并发性是指若干事件在不同时间间隔内发生" },
            { key: "C", text: "并行性是指若干事件在不同时刻发生" },
            { key: "D", text: "并发性是指若干事件在同一时间间隔内发生" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-2",
        stem: "某单CPU系统中有输入和输出设备各1台，现有3个并发执行的作业，每个作业的输入、计算和输出的时间均分别为2ms、3ms和4ms，且都按输入、计算和输出的顺序执行，则执行完3个作业需要的时间最少是( )。",
        options: [
            { key: "A", text: "27ms" },
            { key: "B", text: "15ms" },
            { key: "C", text: "22ms" },
            { key: "D", text: "17ms" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-3",
        stem: "内部异常(内中断)可分为故障( fault)、陷阱( trap)和终止( abort)三类。下列有关内部异常的叙述中，错误的是( )。",
        options: [
            { key: "A", text: "内部异常的产生与当前执行指令相关" },
            { key: "B", text: "内部异常处理后返回到发生异常的指令继续执行" },
            { key: "C", text: "内部异常的响应发生在指令执行过程中" },
            { key: "D", text: "内部异常的检测由CPU内部逻辑实现" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-4",
        stem: "下列关于管道( Pipe )通信的叙述中，正确的是( )。",
        options: [
            { key: "A", text: "管道的容量仅受磁盘容量大小限制" },
            { key: "B", text: "一个管道只能有一个读进程或一个写进程对其操作" },
            { key: "C", text: "一个管道可实现双向数据传输" },
            { key: "D", text: "进程对管道进行读操作和写操作都可能被阻塞" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-5",
        stem: "下列选项中，导致创建新进程的操作是( )。\n    ①用户登录成功\n    ②设备分配\n    ③启动程序执行",
        options: [
            { key: "A", text: "仅①和②" },
            { key: "B", text: "仅②和③" },
            { key: "C", text: "①、②和③" },
            { key: "D", text: "仅①和③" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-6",
        stem: "下列关于进程和线程的叙述中，正确的是( )。",
        options: [
            { key: "A", text: "同一进程中的各个线程拥有各自不同的地址空间" },
            { key: "B", text: "系统级线程和用户级线程的切换都需要内核的支持" },
            { key: "C", text: "线程是资源分配的基本单位，进程是调度的基本单位" },
            { key: "D", text: "不管系统是否支持线程，进程都是资源分配的基本单位" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-7",
        stem: "本地用户通过键盘登录系统时，首先获得键盘输入信息的程序是( )。",
        options: [
            { key: "A", text: "系统调用服务程序" },
            { key: "B", text: "中断处理程序" },
            { key: "C", text: "用户登录程序" },
            { key: "D", text: "命令解释程序" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-8",
        stem: "下列准则中，实现临界区互斥机制必须遵循的是( )。\n    ①两个进程不能同时进入临界区\n    ②允许进程访问空闲的临界资源\n    ③进程等待进入临界区的时间是有限的\n    ④不能进入临界区的执行态进程立即放弃CPU",
        options: [
            { key: "A", text: "仅②、③" },
            { key: "B", text: "仅①、③、④" },
            { key: "C", text: "仅①、④" },
            { key: "D", text: "仅①、②、③" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-9",
        stem: "在支持多线程的系统中，进程P创建的若干线程不能共享的是( )。",
        options: [
            { key: "A", text: "进程P的代码段" },
            { key: "B", text: "进程P中某线程的栈指针" },
            { key: "C", text: "进程P的全局变量" },
            { key: "D", text: "进程P中打开的文件" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-10",
        stem: "下列事件或操作中，可能导致进程 P 由执行态变为阻塞态的是( )。\n\t①进程 P 读文件\n\t②进程 P 的时间片用完\n\t③进程 P 申请外设\n\t④进程 P 执行信号量的 wait()操作",
        options: [
            { key: "A", text: "仅①、④" },
            { key: "B", text: "仅③、④" },
            { key: "C", text: "仅①、③、④" },
            { key: "D", text: "仅②、③" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-11",
        stem: "设与某资源关联的信号量初值为3，当前值为1。若M表示该资源的可用个数，N表示等待该资源的进程数，则M、N分别是( )。",
        options: [
            { key: "A", text: "1、2" },
            { key: "B", text: "1、0" },
            { key: "C", text: "0、1" },
            { key: "D", text: "2、0" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-12",
        stem: "使用TSL(Test and Set Lock)指令实现进程互斥的伪代码如下所示。下列与该实现机制相关的叙述中，正确的是( )。\n\n```\ndo{\n...\nwhile(TSL(&lock));\ncritical section;\nlock=FALSE;\n...\n}while(TRUE);\n```",
        options: [
            { key: "A", text: "退出临界区的进程负责唤醒阻塞态进程" },
            { key: "B", text: "while( TSL( &lock) )语句应在关中断状态下执行" },
            { key: "C", text: "上述伪代码满足“让权等待”的同步准则" },
            { key: "D", text: "等待进入临界区的进程不会主动放弃CPU" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-13",
        stem: "执行系统调用的过程包括如下主要操作:\n     ①返回用户态\n     ②执行陷入(trap)指令\n     ③传递系统调用参数\n     ④执行相应的服务程序\n     正确的执行顺序是( )",
        options: [
            { key: "A", text: "②→④→③→①" },
            { key: "B", text: "③→④→②→①" },
            { key: "C", text: "②→③→①→④" },
            { key: "D", text: "③→②→④→①" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-14",
        stem: "下列选项中，会导致进程从执行态变为就绪态的事件是( )。",
        options: [
            { key: "A", text: "启动I/O设备" },
            { key: "B", text: "被高优先级进程抢占" },
            { key: "C", text: "执行P(wait)操作" },
            { key: "D", text: "申请内存失败" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-15",
        stem: "有两个并发执行的进程P1和P2，共享初值为1的变量x。P1对x加1，P2对x减1。加1和减1操作的指令序列分别如下所示。两个操作完成后，x的值( )。\n\n```\n//加1操作                    //减1操作\nload R1,x  //取x到寄存器R1中   load R2, x\ninc R1                        dee R2\nshore x,R1 //将R1的内容存入x   shore x,R2\n```",
        options: [
            { key: "A", text: "只能为1" },
            { key: "B", text: "可能为0、1或2" },
            { key: "C", text: "可能为-1或3" },
            { key: "D", text: "可能为-1、0、1或2" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-16",
        stem: "进程的基本状态( )可以由其他两种基本状态转变而来。",
        options: [
            { key: "A", text: "新建状态" },
            { key: "B", text: "执行状态" },
            { key: "C", text: "就绪状态" },
            { key: "D", text: "阻塞状态" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-17",
        stem: "当一个进程( )，就要退出等待队列而进入就绪队列。",
        options: [
            { key: "A", text: "能得到所等待的处理器" },
            { key: "B", text: "启动了外设" },
            { key: "C", text: "用完了规定的时间片" },
            { key: "D", text: "获得了所等待的资源" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-18",
        stem: "下列关于 CPU 模式的叙述中，正确的是( )。",
        options: [
            { key: "A", text: "CPU处于用户态时只能执行非特权指令" },
            { key: "B", text: "CPU处于内核态时只能执行特权指令" },
            { key: "C", text: "CPU处于内核态时只能执行非特权指令" },
            { key: "D", text: "CPU处于用户态时只能执行特权指令" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-19",
        stem: "下列关于线程的叙述中，错误的( )。",
        options: [
            { key: "A", text: "用户级线程可以在不支持内核级线程的操作系统上实现" },
            { key: "B", text: "内核级线程的调度由操作系统完成" },
            { key: "C", text: "操作系统为每个用户级线程建立一个线程控制块" },
            { key: "D", text: "用户级线程间的切换比内核级线程间的切换效率高" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-20",
        stem: "下列操作中，操作系统在创建新进程时，必须完成的是( )。\n     ①申请空白的进程控制块\n     ②初始化进程控制块\n     ③设置进程状态为执行态",
        options: [
            { key: "A", text: "仅①、②" },
            { key: "B", text: "仅①" },
            { key: "C", text: "仅②、③" },
            { key: "D", text: "仅①、③" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-21",
        stem: "下列选项中，会导致用户进程从用户态切换到内核态的操作是( )。\n     ①整数除以零\n     ② sin()函数调用\n     ③read系统调用",
        options: [
            { key: "A", text: "仅①、②" },
            { key: "B", text: "仅①、③" },
            { key: "C", text: "仅②、③" },
            { key: "D", text: "①、②和③" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-22",
        stem: "下列关于系统调用的叙述中，正确的是( )。\n     ①在执行系统调用服务程序的过程中，CPU处于内核态\n     ②操作系统通过提供系统调用避免用户程序直接访问外设\n     ③不同的操作系统为应用程序提供了统一的系统调用接口\n     ④系统调用是操作系统内核为应用程序提供服务的接口",
        options: [
            { key: "A", text: "仅①、②、④" },
            { key: "B", text: "仅①、④" },
            { key: "C", text: "仅①、③、④" },
            { key: "D", text: "仅②、③" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-23",
        stem: "下列由当前线程引起的事件或执行的操作中，可能导致该线程由执行态变为就绪态的是( )。",
        options: [
            { key: "A", text: "主动出让 CPU" },
            { key: "B", text: "缺页异常" },
            { key: "C", text: "键盘输入" },
            { key: "D", text: "执行信号量的wait()操作" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw1-24",
        stem: "分时操作系统通常采用( )策略为用户服务。",
        options: [
            { key: "A", text: "时间片轮转" },
            { key: "B", text: "时间片加权分配" },
            { key: "C", text: "短作业优先" },
            { key: "D", text: "可靠性和安全性" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-1",
        stem: "下列调度算法中，不可能导致饥饿现象的是( )。",
        options: [
            { key: "A", text: "非抢占式短作业优先" },
            { key: "B", text: "时间片轮转" },
            { key: "C", text: "抢占式短作业优先" },
            { key: "D", text: "静态优先数调度" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-2",
        stem: "某计算机系统中有8台打印机，由K个进程竞争使用，每个进程最多需要3台打印机。该系统可能会发生死锁的K的最小值是( )。",
        options: [
            { key: "A", text: "4" },
            { key: "B", text: "2" },
            { key: "C", text: "5" },
            { key: "D", text: "3" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-3",
        stem: "假设系统中有4个同类资源，进程P1、P2和P3需要的资源数分别为4、3和1，P1、P2和P3已申请到的资源数分别为2、1和0，则执行安全性检测算法的结果是( )。",
        options: [
            { key: "A", text: "不存在安全序列，系统处于不安全状态" },
            { key: "B", text: "存在唯一安全序列P3、P1、P2，系统处于安全状态" },
            { key: "C", text: "存在唯一安全序列P3、P2、P1，系统处于安全状态" },
            { key: "D", text: "存在多个安全序列，系统处于安全状态" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-4",
        stem: "下列事件中，可能引起进程调度程序执行的是( )。\n①中断处理结束\n②进程阻塞\n③进程执行结束\n④进程的时间片用完",
        options: [
            { key: "A", text: "仅②、④" },
            { key: "B", text: "仅①、③" },
            { key: "C", text: "仅③、④" },
            { key: "D", text: "①、②、③和④" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-5",
        stem: "现有3个同时到达的作业J1、J2、J3，它们的执行时间分别为T1、T2、T3，且T1<T2<T3。系统按单道方式运行且采用短作业优先算法，则平均周转时间是( )",
        options: [
            { key: "A", text: "(T1+2T2+3T3)/3" },
            { key: "B", text: "(3T1+2T2+T3)/3" },
            { key: "C", text: "T1+T2+T3" },
            { key: "D", text: "(T1+T2+T3)/3" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-6",
        stem: "下列与进程有关的因素中，在设计多级反馈队列调度算法时需要考虑的是( )。\n①就绪队列的数量\n②就绪队列的优先级\n③各就绪队列的调度算法\n④进程在就绪队列间的迁移条件",
        options: [
            { key: "A", text: "①、②、③和④" },
            { key: "B", text: "仅②、③、④" },
            { key: "C", text: "仅③、④" },
            { key: "D", text: "仅①、②" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-7",
        stem: "死锁的预防是根据( )而采取措施实现的。",
        options: [
            { key: "A", text: "使进程的推进顺序合理" },
            { key: "B", text: "配置足够的系统资源" },
            { key: "C", text: "防止系统进入不安全状态" },
            { key: "D", text: "破坏死锁的四个必要条件之一" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-8",
        stem: "系统中有3个不同的临界资源R1、R2和R3，被4个进程p1、p2、p3和p4共享。各进程对资源的需求:p1申请R1和R2，p2申请R2和R3，p3申请R1和R3，p4申请R2。若系统出现死锁，则处于死锁状态的进程数至少是( )。",
        options: [
            { key: "A", text: "1" },
            { key: "B", text: "4" },
            { key: "C", text: "2" },
            { key: "D", text: "3" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-9",
        stem: "进程P1、P2和P3进入就绪队列的时刻，优先值(越大优先权越高) 以及CPU的执行时间如下表所示。系统采用基于优先权的抢占式CPU调度算法，从0ms时刻开始进行调度，则P1、P2、P3的平均周转时间为( )。\n\n| 进程名 | 进入就绪队列的时刻 | 优先数 | CPU的执行时间 |\n| ------ | ------------------ | ------ | ------------- |\n| p1     | 0ms                | 1      | 60ms          |\n| p2     | 20ms               | 10     | 42ms          |\n| p3     | 30ms               | 100    | 13ms          |",
        options: [
            { key: "A", text: "60ms" },
            { key: "B", text: "61ms" },
            { key: "C", text: "70ms" },
            { key: "D", text: "71ms" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-10",
        stem: "一个进程的读磁盘操作完成后，操作系统针对该进程必做的是( )。",
        options: [
            { key: "A", text: "修改进程状态为就绪态" },
            { key: "B", text: "给进程分配用户内存空间" },
            { key: "C", text: "增加进程时间片大小" },
            { key: "D", text: "降低进程优先级" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-11",
        stem: "若系统S1采用死锁避免方法，S2采用死锁检测方法。下列叙述中，正确的是( )。\n\t①S1会限制用户申请资源的顺序，而S2不会\n\t②S1需要进程运行所需资源总量信息，而S2不需要\n\t③S1不会给可能导致死锁的进程分配资源，而S2会",
        options: [
            { key: "A", text: "仅①、②" },
            { key: "B", text: "仅①、③" },
            { key: "C", text: "仅②、③" },
            { key: "D", text: "①、②、③" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-12",
        stem: "下列内核的数据结构或程序中，分时系统实现时间片轮转调度需要使用的是( )。\n\t①进程控制块\n\t②时钟中断处理程序\n\t③进程就绪队列\n\t④进程阻塞队列",
        options: [
            { key: "A", text: "仅①、④" },
            { key: "B", text: "仅②、③" },
            { key: "C", text: "仅①、②、④" },
            { key: "D", text: "仅①、②、③" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-13",
        stem: "死锁与安全状态的关系是( )。",
        options: [
            { key: "A", text: "死锁状态一定是不安全状态" },
            { key: "B", text: "安全状态有可能成为死锁状态" },
            { key: "C", text: "不安全状态就是死锁状态" },
            { key: "D", text: "死锁状态有可能是安全状态" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-14",
        stem: "下列选项中，降低进程优先级的合理时机是( )。",
        options: [
            { key: "A", text: "进程的时间片用完" },
            { key: "B", text: "进程长期处于就绪队列中" },
            { key: "C", text: "进程刚完成I/O，进入就绪队列" },
            { key: "D", text: "进程从就绪状态转为运行状态" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-15",
        stem: "某系统有n台互斥使用的同类设备，三个并发进程分别需要3、4、5台设备，可确保系统不发生死锁的设备数n最小为( )。",
        options: [
            { key: "A", text: "10" },
            { key: "B", text: "12" },
            { key: "C", text: "9" },
            { key: "D", text: "11" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-16",
        stem: "若系统中有n(n≥2)个进程，每个进程均需要使用某类临界资源2个，则系统不会发生死锁所需的该类资源总数至少是( )。",
        options: [
            { key: "A", text: "n+1" },
            { key: "B", text: "n" },
            { key: "C", text: "2" },
            { key: "D", text: "2n" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-17",
        stem: "进程P0、P1、P2和P3进入就绪队列的时刻、优先级(值越小优先权越高)及CPU执行时间如下表所示。若系统采用基于优先权的抢占式进程调度算法，则从0ms时刻开始调度，到4个进程都运行结束为止，发生进程调度的总次数为( )。\n\n| 进程 | 进入就绪队列的时刻 | 优先数 | CPU执行时间 |\n| ---- | ------------------ | ------ | ----------- |\n| P0   | 0ms                | 15     | 100ms       |\n| P1   | 10ms               | 20     | 60ms        |\n| P2   | 10ms               | 10     | 20ms        |\n| P3   | 15ms               | 6      | 10ms        |",
        options: [
            { key: "A", text: "5" },
            { key: "B", text: "4" },
            { key: "C", text: "6" },
            { key: "D", text: "7" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-18",
        stem: "下列有关基于时间片的进程调度的叙述中，错误的是( )。",
        options: [
            { key: "A", text: "影响时间片大小的主要因素包括响应时间、系统开销和进程数量等" },
            { key: "B", text: "时钟中断发生后，系统会修改当前进程在时间片内的剩余时间" },
            { key: "C", text: "当前进程的时间片用完后，该进程状态由执行态变为阻塞态" },
            { key: "D", text: "时间片越短，进程切换的次数越多，系统开销也越大" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-19",
        stem: "下列关于银行家算法的叙述中，正确的是( )。",
        options: [
            { key: "A", text: "当系统处于不安全状态时，系统中一定会出现死锁进程" },
            { key: "B", text: "银行家算法破坏了死锁必要条件中的“请求和保持”条件" },
            { key: "C", text: "银行家算法可以预防死锁" },
            { key: "D", text: "当系统处于安全状态时，系统中一定无死锁进程" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-20",
        stem: "下列选项中，满足短任务优先且不会发生饥饿现象的调度算法是( )。",
        options: [
            { key: "A", text: "先来先服务" },
            { key: "B", text: "非抢占式短任务优先" },
            { key: "C", text: "时间片轮转" },
            { key: "D", text: "高响应比优先" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-21",
        stem: "下列关于死锁的叙述中，正确的是( )。\n\t①可以通过剥夺进程资源解除死锁\n\t②死锁的预防方法能确保系统不发生死锁\n\t③银行家算法可以判断系统是否处于死锁状态\n\t④当系统出现死锁时，必然有两个或两个以上的进程处于阻塞态",
        options: [
            { key: "A", text: "仅①、②、④" },
            { key: "B", text: "仅①、②、③" },
            { key: "C", text: "仅②、③" },
            { key: "D", text: "仅①、③、④" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-22",
        stem: "某系统正在执行三个进程P1、P2和P3，各进程的计算(CPU)时间和I/O时间比例如下表所示。为提高系统资源利用率，合理的进程优先级设置应为( )。\n\n| 进程 | 计算时间 | I/O时间 |\n| ---- | -------- | ------- |\n| P1   | 90%      | 10%     |\n| P2   | 50%      | 50%     |\n| P3   | 15%      | 85%     |",
        options: [
            { key: "A", text: "P2>P1=P3" },
            { key: "B", text: "P1>P2=P3" },
            { key: "C", text: "P3>P2>P1" },
            { key: "D", text: "P1>P2>P3" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-23",
        stem: "某系统采用基于优先权的非抢占式进程调度策略,完成一次进程调度和进程切换的系统时间开销为1 µs。在T时刻就绪队列中有3个进程P1、P2和P3，其在就绪队列中的等待时间、需要的CPU时间和优先权如下表所示。若优先权值大的进程优先获得 CPU，从T时刻起系统开始进程调度，则系统的平均周转时间为( )。\n\n| 进程 | 等待时间 | 需要的CPU时间 | 优先权 |\n| ---- | -------- | ------------- | ------ |\n| P1   | 30μs     | 12μs          | 10     |\n| P2   | 15μs     | 24μs          | 30     |\n| P3   | 18μs     | 36μs          | 20     |",
        options: [
            { key: "A", text: "75 µs" },
            { key: "B", text: "73 µs" },
            { key: "C", text: "74 µs" },
            { key: "D", text: "54 µs" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-24",
        stem: "假设4个作业到达系统的时刻和运行时间如下表所示。系统在t=2时开始作业调度。若分别采用先来先服务和短作业优先调度算法，则选中的作业分别是( )。\n\n| 作业 | 到达时间t | 运行时间 |\n| ---- | --------- | -------- |\n| J1   | 0         | 3        |\n| J2   | 1         | 3        |\n| J3   | 1         | 2        |\n| J4   | 3         | 1        |",
        options: [
            { key: "A", text: "J1、J4" },
            { key: "B", text: "J2、J3" },
            { key: "C", text: "J2、J4" },
            { key: "D", text: "J1、J3" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw2-25",
        stem: "系统采用二级反馈队列调度算法进行进程调度。就绪队列Q1采用时间片轮转调度算法，时间片为10 ms;就绪队列Q2 采用短进程优先调度算法;系统优先调度Q1队列中的进程，当Q1为空时系统才会调度Q2中的进程;新创建的进程首先进入Q1;Q1中的进程执行一个时间片后，若未结束，则转入Q2。若当前Q1、Q2为空，系统依次创建进程P1、P2后即开始进程调度，P1、P2需要的CPU时间分别为30 ms和20ms，则进程P1 、P2在系统中的平均等待时间为( )。",
        options: [
            { key: "A", text: "10 ms" },
            { key: "B", text: "25 ms" },
            { key: "C", text: "15 ms" },
            { key: "D", text: "20 ms" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-1",
        stem: "设内存的分配情况如图所示。若要申请一址40K的内存空间，采用最佳适应算法，则所得到的分区首址是( )。",
        options: [
            { key: "A", text: "100K" },
            { key: "B", text: "190K" },
            { key: "C", text: "330K" },
            { key: "D", text: "410K" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-2",
        stem: "某基于动态分区存储管理的计算机，其主存容量为55 MB(初始为空闲)，采用最佳适配(Best Fit)算法，分配和释放的顺序:分配15 MB，分配30 MB，释放15 MB，分配8 MB，分配6 MB。此时主存中最大空闲分区的大小是( )。",
        options: [
            { key: "A", text: "7MB" },
            { key: "B", text: "9MB" },
            { key: "C", text: "10MB" },
            { key: "D", text: "15MB" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-3",
        stem: "某计算机采用二级页表的分页存储管理方式，按字节编制，页大小为1KB，页表项大小为2B，逻辑地址结构如下。逻辑地址空间大小为2的16次方个页，则表示整个逻辑地址空间的页目录表中包含表项的个数至少是( )。",
        options: [
            { key: "A", text: "64" },
            { key: "B", text: "128" },
            { key: "C", text: "256" },
            { key: "D", text: "512" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-4",
        stem: "在一个段式存储管理系统中，段表内容如下表所示。一个逻辑地址为（2, 154B），它对应的物理地址是( )。\n\n| 段号 | 段首地址 | 段长度 |\n| ---- | -------- | ------ |\n| 0    | 120K     | 40K    |\n| 1    | 760K     | 30K    |\n| 2    | 480K     | 20K    |\n| 3    | 370K     | 20K    |",
        options: [
            { key: "A", text: "120K+2B" },
            { key: "B", text: "480K+154B" },
            { key: "C", text: "30K+154B" },
            { key: "D", text: "480K+2B" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-5",
        stem: "动态重定位是在作业的( )中进行的。",
        options: [
            { key: "A", text: "编译过程" },
            { key: "B", text: "装入过程" },
            { key: "C", text: "链接过程" },
            { key: "D", text: "执行过程" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-6",
        stem: "在动态分区分配方案中，某一作业完成后,系统收回其主存空间，并与相邻空闲区合并，为此需修改空闲区表，造成空闲区数减1的情况是( )。",
        options: [
            { key: "A", text: "无上邻空闲区，也无下邻空闲区" },
            { key: "B", text: "有上邻空闲区，但无下邻空闲区" },
            { key: "C", text: "有下邻空闲区，但无上邻空闲区" },
            { key: "D", text: "有上邻空闲区，也有下邻空闲区" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-7",
        stem: "下面的存储管理方案中，( )方式可以采用静态重定位。",
        options: [
            { key: "A", text: "固定分区" },
            { key: "B", text: "可变分区" },
            { key: "C", text: "页式" },
            { key: "D", text: "段式" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-8",
        stem: "不会产生内部碎片的存储管理是( )。",
        options: [
            { key: "A", text: "分页" },
            { key: "B", text: "分段" },
            { key: "C", text: "段页式" },
            { key: "D", text: "固定分区" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-9",
        stem: "在不使用快表的情况下，基本段页式内存管理系统中，访问一条指令需要几次访问内存? ( )。",
        options: [
            { key: "A", text: "3" },
            { key: "B", text: "0" },
            { key: "C", text: "1" },
            { key: "D", text: "2" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-10",
        stem: "虚拟存储管理系统的基础是程序的( )理论。",
        options: [
            { key: "A", text: "动态性" },
            { key: "B", text: "虚拟性" },
            { key: "C", text: "局部性" },
            { key: "D", text: "全局性" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-11",
        stem: "对于采用虚拟内存管理方式的系统，下列关于进程虚拟地址空间的叙述中，错误的是( )。",
        options: [
            { key: "A", text: "每个进程都有自已独立的虚拟地址空间" },
            { key: "B", text: "C语言中malloc()函数返回的是虚拟地址" },
            { key: "C", text: "进程对数据段和代码段可以有不同的访问权限" },
            { key: "D", text: "虚拟地址的大小由主存和硬盘的大小决定" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-12",
        stem: "下列选项中，不会影响系统缺页率的是( )。",
        options: [
            { key: "A", text: "页置换算法" },
            { key: "B", text: "工作集的大小" },
            { key: "C", text: "进程的数量" },
            { key: "D", text: "页缓冲队列的长度" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-13",
        stem: "在页式虚拟存储管理系统中，采用某些页面置换算法，会出现Belady异常现象，即进程的缺页次数会随着分配给该进程的页框个数的增加。下列算法中:① LRU算法 ②FIFO算法 ③OPT算法，可能出现Belady异常现象的是( )。",
        options: [
            { key: "A", text: "仅②" },
            { key: "B", text: "仅①、②" },
            { key: "C", text: "仅①、③" },
            { key: "D", text: "仅②、③" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-14",
        stem: "某进程访问的页 b 不在内存中，导致产生缺页异常，该缺页异常处理过程中不一定包含的操作是( )。",
        options: [
            { key: "A", text: "淘汰内存中的页" },
            { key: "B", text: "建立页号与页框号的对应关系" },
            { key: "C", text: "将页 b 从外存读入内存" },
            { key: "D", text: "修改页表中页 b 对应的存在位" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-15",
        stem: "多进程能在主存中彼此互不干扰的环境下运行，OS是通过( )来实现的。",
        options: [
            { key: "A", text: "内存分配" },
            { key: "B", text: "内存保护" },
            { key: "C", text: "内存扩充" },
            { key: "D", text: "地址映射" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-16",
        stem: "在缺页处理过程中，操作系统执行的操作可能是( )。\n\t①修改页表②磁盘I/O③分配页框",
        options: [
            { key: "A", text: "仅①、②" },
            { key: "B", text: "仅②" },
            { key: "C", text: "仅③" },
            { key: "D", text: "①、②、③" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-17",
        stem: "某请求分页存储系统的页大小为4KB，按字节编址。系统给进程P分配2个固定的页框,并采用改进型Clock置换算法，进程P页表的部分内容如下表所示。若P访问虚拟地址为02A01H的存储单元，则经地址变换后得到的物理地址是( )。\n\n| 页号 | 页框号 | 存在位(1:存在，0:不存在) | 访问位(1:访问，0:未访问) | 修改位(1:修改，0:未修改) |\n| ---- | ------ | ------------------------ | ------------------------ | ------------------------ |\n| …    | …      | …                        | …                        | …                        |\n| 2    | 20H    | 0                        | 0                        | 0                        |\n| 3    | 60H    | 1                        | 1                        | 0                        |\n| 4    | 80H    | 1                        | 1                        | 1                        |\n| …    | …      | …                        | …                        | …                        |",
        options: [
            { key: "A", text: "00A01H" },
            { key: "B", text: "20A01H" },
            { key: "C", text: "60A01H" },
            { key: "D", text: "80A01H" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-18",
        stem: "在采用二级页表的分页系统中，CPU页表基址寄存器中的内容是( )。",
        options: [
            { key: "A", text: "当前进程的一级页表的起始虚拟地址" },
            { key: "B", text: "当前进程的一级页表的起始物理地址" },
            { key: "C", text: "当前进程的二级页表的起始虚拟地址" },
            { key: "D", text: "当前进程的二级页表的起始物理地址" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-19",
        stem: "某计算机主存按字节编址，采用二级分页存储管理，地址结构如下所示。虚拟地址2050 1225H对应的页目录号、页号分别是( )。",
        options: [
            { key: "A", text: "081H、101H" },
            { key: "B", text: "081H、401H" },
            { key: "C", text: "201H、101H" },
            { key: "D", text: "201H、401H" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-20",
        stem: "在可变式分区存储管理中的紧凑技术可以( )。",
        options: [
            { key: "A", text: "集中空闲区" },
            { key: "B", text: "增加主存容量" },
            { key: "C", text: "缩短访问周期" },
            { key: "D", text: "加速地址转换" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-21",
        stem: "虚拟存储管理策略可以( )。",
        options: [
            { key: "A", text: "扩大逻辑内存容量" },
            { key: "B", text: "扩大物理内存容量" },
            { key: "C", text: "扩大逻辑外存容量" },
            { key: "D", text: "扩大物理外存容量" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-22",
        stem: "一般情况下，请求分页存储管理方式中，页面大小增加一倍则缺页中断次数( )。",
        options: [
            { key: "A", text: "增加" },
            { key: "B", text: "减少" },
            { key: "C", text: "不变" },
            { key: "D", text: "可能增加也可能减少" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-23",
        stem: "下列选项中，属于多级页表优点的是( )。",
        options: [
            { key: "A", text: "加快地址变换速度" },
            { key: "B", text: "减少缺页中断次数" },
            { key: "C", text: "减少页表项所占字节数" },
            { key: "D", text: "减少页表所占的连续内存空间" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-24",
        stem: "在虚拟存储系统中，若进程在内存中占3块(开始时为空)，采用先进先出页面淘汰算法，当执行访问页号序列为1、2、3、4、1、2、5、1、2、3、4、5、6时，将产生( )次缺页中断。",
        options: [
            { key: "A", text: "7" },
            { key: "B", text: "8" },
            { key: "C", text: "9" },
            { key: "D", text: "10" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "hw3-25",
        stem: "系统为某进程分配了4个页框，该进程已访问的页号序列为2、0、2、9、3、4、2、8、2、4、8、4、5。若进程要访问的下一页的页号为7，依据 LRU 算法，应淘汰页的页号是( )。",
        options: [
            { key: "A", text: "2" },
            { key: "B", text: "3" },
            { key: "C", text: "4" },
            { key: "D", text: "8" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    }
];

export const getQuestionBankStats = () => {
    return {
        total: 74,
        single: 74,
        multi: 0,
        boolean: 0,
        fill: 0,
        essay: 0,
        isComplete: true
    };
};

// 辅助函数
export const getQuestionById = (id: string) => {
    return rawQuestions.find(q => q.id === id);
};

export const getQuestionsByChapter = (chapter: string) => {
    return rawQuestions.filter(q => q.id.startsWith(chapter));
};

export const getRandomQuestions = (count: number) => {
    const shuffled = [...rawQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

export const getExamQuestions = () => {
    return rawQuestions;
};
