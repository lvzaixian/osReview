import type { Question } from '../types';

export const rawQuestions: Question[] = [
    {
        id: "obj-intro-1",
        stem: "下列关于批处理系统的叙述中，正确的是\n①批处理系统允许多个用户与计算机直接交互\n②批处理系统分为单道批处理系统和多道批处理系统\n③中断技术使得多道批处理系统的I/O设备可与CPU并行工作",
        options: [
            { key: "A", text: "仅②、③" },
            { key: "B", text: "仅②" },
            { key: "C", text: "仅①、②" },
            { key: "D", text: "仅①、③" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-2",
        stem: "下列关于 CPU 模式的叙述中，正确的是",
        options: [
            { key: "A", text: "CPU处于用户态时只能执行特权指令" },
            { key: "B", text: "CPU处于内核态时只能执行特权指令" },
            { key: "C", text: "CPU处于用户态时只能执行非特权指令" },
            { key: "D", text: "CPU处于内核态时只能执行非特权指令" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-3",
        stem: "本地用户通过键盘登录系统时，首先获得键盘输入信息的程序是",
        options: [
            { key: "A", text: "命令解释程序" },
            { key: "B", text: "中断处理程序" },
            { key: "C", text: "系统调用服务程序" },
            { key: "D", text: "用户登录程序" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-4",
        stem: "下列关于系统调用的叙述中，正确的是\n①在执行系统调用服务程序的过程中，CPU处于内核态\n②操作系统通过提供系统调用避免用户程序直接访问外设\n③不同的操作系统为应用程序提供了统一的系统调用接口\n④系统调用是操作系统内核为应用程序提供服务的接口",
        options: [
            { key: "A", text: "仅①、④" },
            { key: "B", text: "仅②、③" },
            { key: "C", text: "仅①、②、④" },
            { key: "D", text: "仅①、③、④" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-5",
        stem: "某单CPU系统中有输入和输出设备奱1台，现有3个并发执行的作业，每个作业的输入、计算和输出的时间均分别为2ms、3ms和4ms，且都按输入、计算和输出的顺序执行，则执行完3个作业需要的时间最少是",
        options: [
            { key: "A", text: "15ms" },
            { key: "B", text: "17ms" },
            { key: "C", text: "22ms" },
            { key: "D", text: "27ms" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-6",
        stem: "内部异常(内中断)可分为故障( fault)、陷阱( trap)和终止( abort)三类。下列有关内部异常的叙述中，错误的是",
        options: [
            { key: "A", text: "内部异常的产生与当前执行指令相关" },
            { key: "B", text: "内部异常的检测由CPU内部逻辑实现" },
            { key: "C", text: "内部异常的响应发生在指令执行过程中" },
            { key: "D", text: "内部异常处理后返回到发生异常的指令继续执行" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-7",
        stem: "下列选项中，会导致用户进程从用户态切换到内核态的操作是\n①整数除以零\n② sin()函数调用\n③read系统调用",
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
        id: "obj-intro-8",
        stem: "从下面关于并发性的论述中选出一条正确的论述",
        options: [
            { key: "A", text: "并发性是指若干事件在同一时刻发生" },
            { key: "B", text: "并行性是指若干事件在不同时刻发生" },
            { key: "C", text: "并发性是指若干事件在同一时间间隔内发生" },
            { key: "D", text: "并发性是指若干事件在不同时间间隔内发生" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-11",
        stem: "下列选项中，会导致进程从执行态变为就绪态的事件是",
        options: [
            { key: "A", text: "执行P(wait)操作" },
            { key: "B", text: "申请内存失败" },
            { key: "C", text: "启动I/O设备" },
            { key: "D", text: "被高优先级进程抢占" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-12",
        stem: "下列由当前线程引起的事件或执行的操作中，可能导致该线程由执行态变为就绪态的是",
        options: [
            { key: "A", text: "键盘输入" },
            { key: "B", text: "缺页异常" },
            { key: "C", text: "主动出让 CPU" },
            { key: "D", text: "执行信号量的wait()操作" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-15",
        stem: "下列事件或操作中，可能导致进程 P 由执行态变为阻塞态的是\n①进程 P 读文件\n②进程 P 的时间片用完\n③进程 P 申请外设\n④进程 P 执行信号量的 wait()操作",
        options: [
            { key: "A", text: "仅①、④" },
            { key: "B", text: "仅②、③" },
            { key: "C", text: "仅③、④" },
            { key: "D", text: "仅①、③、④" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-16",
        stem: "下列选项中，导致创建新进程的操作是\n①用户登录成功\n②设备分配\n③启动程序执行",
        options: [
            { key: "A", text: "仅①和②" },
            { key: "B", text: "仅②和③" },
            { key: "C", text: "仅①和③" },
            { key: "D", text: "①、②和③" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-17",
        stem: "下列操作中，操作系统在创建新进程时，必须完成的是\n①申请空白的进程控制块\n②初始化进程控制块\n③设置进程状态为执行态",
        options: [
            { key: "A", text: "仅①" },
            { key: "B", text: "仅①、②" },
            { key: "C", text: "仅①、③" },
            { key: "D", text: "仅②、③" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-18",
        stem: "下列关于管道( Pipe )通信的叙述中，正确的是",
        options: [
            { key: "A", text: "一个管道可实现双向数据传输" },
            { key: "B", text: "管道的容量仅受磁盘容量大小限制" },
            { key: "C", text: "进程对管道进行读操作和写操作都可能被阻塞" },
            { key: "D", text: "一个管道只能有一个读进程或一个写进程对其操作" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-19",
        stem: "下列关于线程的叙述中，错误的",
        options: [
            { key: "A", text: "内核级线程的调度由操作系统完成" },
            { key: "B", text: "操作系统为每个用户级线程建立一个线程控制块" },
            { key: "C", text: "用户级线程间的切换比内核级线程间的切换效率高" },
            { key: "D", text: "用户级线程可以在不支持内核级线程的操作系统上实现" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-20",
        stem: "下列关于进程和线程的叙述中，正确的是",
        options: [
            { key: "A", text: "不管系统是否支持线程，进程都是资源分配的基本单位" },
            { key: "B", text: "线程是资源分配的基本单位，进程是调度的基本单位" },
            { key: "C", text: "系统级线程和用户级线程的切换都需要内核的支持" },
            { key: "D", text: "同一进程中的各个线程拥有各自不同的地址空间" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-21",
        stem: "在支持多线程的系统中，进程P创建的若干线程不能共享的是",
        options: [
            { key: "A", text: "进程P的代码段" },
            { key: "B", text: "进程P中打开的文件" },
            { key: "C", text: "进程P的全局变量" },
            { key: "D", text: "进程P中某线程的栈指针" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-22",
        stem: "使用TSL(Test and Set Lock)指令实现进程互斥的伪代码如下所示。下列与该实现机制相关的叙述中，正确的是\n```\ndo{\n...\nwhile(TSL(&lock));\ncritical section;\nlock=FALSE;\n...\n}while(TRUE);\n```",
        options: [
            { key: "A", text: "退出临界区的进程负责唤醒阻塞态进程" },
            { key: "B", text: "等待进入临界区的进程不会主动放弃CPU" },
            { key: "C", text: "上述伪代码满足“让权等待”的同步准则" },
            { key: "D", text: "while( TSL( &lock) )语句应在关中断状态下执行" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-23",
        stem: "下列准则中，实现临界区互斥机制必须遵循的是\n①两个进程不能同时进入临界区\n②允许进程访问空闲的临界资源\n③进程等待进入临界区的时间是有限的\n④不能进入临界区的执行态进程立即放弃CPU",
        options: [
            { key: "A", text: "仅①、④" },
            { key: "B", text: "仅②、③" },
            { key: "C", text: "仅①、②、③" },
            { key: "D", text: "仅①、③、④" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-intro-25",
        stem: "设与某资源关联的信号量初值为3，当前值为1。若M表示该资源的可用个数，N表示等待该资源的进程数，则M、N分别是",
        options: [
            { key: "A", text: "0、1" },
            { key: "B", text: "1、0" },
            { key: "C", text: "1、2" },
            { key: "D", text: "2、0" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-2",
        stem: "死锁与安全状态的关系是",
        options: [
            { key: "A", text: "死锁状态有可能是安全状态" },
            { key: "B", text: "安全状态有可能成为死锁状态" },
            { key: "C", text: "不安全状态就是死锁状态" },
            { key: "D", text: "死锁状态一定是不安全状态" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-3",
        stem: "假设系统中有4个同类资源，进程P1、P2和P3需要的资源数分别为4、3和1，P1、P2和P3已申请到的资源数分别为2、1和0，则执行安全性检测算法的结果是",
        options: [
            { key: "A", text: "不存在安全序列，系统处于不安全状态" },
            { key: "B", text: "存在多个安全序列，系统处于安全状态" },
            { key: "C", text: "存在唯一安全序列P3、P1、P2，系统处于安全状态" },
            { key: "D", text: "存在唯一安全序列P3、P2、P1，系统处于安全状态" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-4",
        stem: "下列关于银行家算法的叙述中，正确的是",
        options: [
            { key: "A", text: "银行家算法可以预防死锁" },
            { key: "B", text: "当系统处于安全状态时， 系统中一定无死锁进程" },
            { key: "C", text: "当系统处于不安全状态时，系统中一定会出现死锁进程" },
            { key: "D", text: "银行家算法破坏了死锁必要条件中的“请求和保持”条件" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-5",
        stem: "现有3个同时到达的作业J1、J2、J3，它们的执行时间分别为T1、T2、T3，且T1<T2<T3 。系统按单道方式运行且采用短作业优先算法，则平均周转时间是",
        options: [
            { key: "A", text: "T1+T2+T3" },
            { key: "B", text: "(T1+T2+T3)/3" },
            { key: "C", text: "(3T1+2T2+T3)/3" },
            { key: "D", text: "(T1+2T2+3T3)/3" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-6",
        stem: "下列事件中，可能引起进程调度程序执行的是\n①中断处理结束\n②进程阻塞\n③进程执行结束\n④进程的时间片用完",
        options: [
            { key: "A", text: "仅①、③" },
            { key: "B", text: "仅②、④" },
            { key: "C", text: "仅③、④" },
            { key: "D", text: "①、②、③和④" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-7",
        stem: "假设4个作业到达系统的时刻和运行时间如下表所示。系统在t=2时开始作业调度。若分别采用先来先服务和短作业优先调度算法，则选中的作业分别是\n| 作业 | 到达时间t | 运行时间 |\n| ---- | --------- | -------- |\n| J1   | 0         | 3        |\n| J2   | 1         | 3        |\n| J3   | 1         | 2        |\n| J4   | 3         | 1        |",
        options: [
            { key: "A", text: "J2、J3" },
            { key: "B", text: "J1、J4" },
            { key: "C", text: "J2、J4" },
            { key: "D", text: "J1、J3" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-8",
        stem: "进程P1、P2和P3进入就绪队列的时刻，优先值(越大优先权越高) 以及CPU的执行时间如下表所示。系统采用基于优先权的抢占式CPU调度算法，从0ms时刻开始进行调度，则P1、P2、P3的平均周转时间为\n| 进程名 | 进入就绪队列的时刻 | 优先数 | CPU的执行时间 |\n| ------ | ------------------ | ------ | ------------- |\n| p1     | 0ms                | 1      | 60ms          |\n| p2     | 20ms               | 10     | 42ms          |\n| p3     | 30ms               | 100    | 13ms          |",
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
        id: "obj-deadlock-9",
        stem: "进程P0、P1、P2和P3进入就绪队列的时刻、优先级(值越小优先权越高)及CPU执行时间如下表所示。若系统采用基于优先权的抢占式进程调度算法，则从0ms时刻开始调度，到4个进程都运行结束为止，发生进程调度的总次数为\n| 进程 | 进入就绪队列的时刻 | 优先数 | CPU执行时间 |\n| ---- | ------------------ | ------ | ----------- |\n| P0   | 0ms                | 15     | 100ms       |\n| P1   | 10ms               | 20     | 60ms        |\n| P2   | 10ms               | 10     | 20ms        |\n| P3   | 15ms               | 6      | 10ms        |",
        options: [
            { key: "A", text: "4" },
            { key: "B", text: "5" },
            { key: "C", text: "6" },
            { key: "D", text: "7" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-10",
        stem: "某系统采用基于优先权的非抢占式进程调度策略，完成一次进程调度和进程切换的系统时间开销为1 µs。在T时刻就绪队列中有3个进程P1、P2和P3，其在就绪队列中的等待时间、需要的CPU时间和优先权如下表所示。若优先权值大的进程优先获得 CPU，从T时刻起系统开始进程调度，则系统的平均周转时间为\n| 进程 | 等待时间 | 需要的CPU时间 | 优先权 |\n| ---- | -------- | ------------- | ------ |\n| P1   | 30μs     | 12μs          | 10     |\n| P2   | 15μs     | 24μs          | 30     |\n| P3   | 18μs     | 36μs          | 20     |",
        options: [
            { key: "A", text: "54 µs" },
            { key: "B", text: "73 µs" },
            { key: "C", text: "74 µs" },
            { key: "D", text: "75 µs" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-11",
        stem: "下列选项中，降低进程优先级的合理时机是",
        options: [
            { key: "A", text: "进程的时间片用完" },
            { key: "B", text: "进程刚完成I/O，进入就绪队列" },
            { key: "C", text: "进程长期处于就绪队列中" },
            { key: "D", text: "进程从就绪状态转为运行状态" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-12",
        stem: "某系统正在执行三个进程P1、P2和P3，各进程的计算(CPU)时间和I/O时间比例如下表所示。为提高系统资源利用率，合理的进程优先级设置应为\n| 进程 | 计算时间 | I/O时间 |\n| ---- | -------- | ------- |\n| P1   | 90%      | 10%     |\n| P2   | 50%      | 50%     |\n| P3   | 15%      | 85%     |",
        options: [
            { key: "A", text: "P1>P2>P3" },
            { key: "B", text: "P3>P2>P1" },
            { key: "C", text: "P2>P1=P3" },
            { key: "D", text: "P1>P2=P3" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-13",
        stem: "下列有关基于时间片的进程调度的叙述中，错误的是",
        options: [
            { key: "A", text: "时间片越短，进程切换的次数越多，系统开销也越大" },
            { key: "B", text: "当前进程的时间片用完后，该进程状态由执行态变为阻塞态" },
            { key: "C", text: "时钟中断发生后，系统会修改当前进程在时间片内的剩余时间" },
            { key: "D", text: "影响时间片大小的主要因素包括响应时间、系统开销和进程数量等" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-14",
        stem: "下列内核的数据结构或程序中，分时系统实现时间片轮转调度需要使用的是\n①进程控制块\n②时钟中断处理程序\n③进程就绪队列\n④进程阻塞队列",
        options: [
            { key: "A", text: "仅②、③" },
            { key: "B", text: "仅①、④" },
            { key: "C", text: "仅①、②、③" },
            { key: "D", text: "仅①、②、④" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-15",
        stem: "下列调度算法中，不可能导致饥饿现象的是",
        options: [
            { key: "A", text: "时间片轮转" },
            { key: "B", text: "静态优先数调度" },
            { key: "C", text: "非抢占式短作业优先" },
            { key: "D", text: "抢占式短作业优先" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-16",
        stem: "下列选项中，满足短任务优先且不会发生饥饿现象的调度算法是",
        options: [
            { key: "A", text: "先来先服务" },
            { key: "B", text: "高响应比优先" },
            { key: "C", text: "时间片轮转" },
            { key: "D", text: "非抢占式短任务优先" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-17",
        stem: "一个进程的读磁盘操作完成后，操作系统针对该进程必做的是",
        options: [
            { key: "A", text: "修改进程状态为就绪态" },
            { key: "B", text: "降低进程优先级" },
            { key: "C", text: "给进程分配用户内存空间" },
            { key: "D", text: "增加进程时间片大小" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-18",
        stem: "系统采用二级反馈队列调度算法进行进程调度。就绪队列Q1采用时间片轮转调度算法，时间片为10 ms；就绪队列Q2 采用短进程优先调度算法；系统优先调度Q1队列中的进程，当Q1为空时系统才会调度Q2中的进程；新创建的进程首先进入Q1；Q1中的进程执行一个时间片后，若未结束，则转入Q2。若当前Q1、Q2为空，系统依次创建进程P1、P2后即开始进程调度，P1、P2需要的CPU时间分别为30 ms和20ms，则进程P1 、P2在系统中的平均等待时间为",
        options: [
            { key: "A", text: "25 ms" },
            { key: "B", text: "20 ms" },
            { key: "C", text: "15 ms" },
            { key: "D", text: "10 ms" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-19",
        stem: "下列与进程有关的因素中，在设计多级反馈队列调度算法时需要考虑的是\n①就绪队列的数量\n②就绪队列的优先级\n③各就绪队列的调度算法\n④进程在就绪队列间的迁移条件",
        options: [
            { key: "A", text: "仅①、②" },
            { key: "B", text: "仅③、④" },
            { key: "C", text: "仅②、③、④" },
            { key: "D", text: "①、②、③和④" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-20",
        stem: "若系统中有n(n≥2)个进程，每个进程均需要使用某类临界资源2个，则系统不会发生死锁所需的该类资源总数至少是",
        options: [
            { key: "A", text: "2" },
            { key: "B", text: "n" },
            { key: "C", text: "n+1" },
            { key: "D", text: "2n" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-21",
        stem: "某计算机系统中有8台打印机，由K个进程竞争使用，每个进程最多需要3台打印机。该系统可能会发生死锁的K的最小值是",
        options: [
            { key: "A", text: "2" },
            { key: "B", text: "3" },
            { key: "C", text: "4" },
            { key: "D", text: "5" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-22",
        stem: "某系统有n台互斥使用的同类设备，三个并发进程分别需要3、4、5台设备，可确保系统不发生死锁的设备数m最小为",
        options: [
            { key: "A", text: "9" },
            { key: "B", text: "10" },
            { key: "C", text: "11" },
            { key: "D", text: "12" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-23",
        stem: "下列关于死锁的叙述中，正确的是\n①可以通过剥夺进程资源解除死锁\n②死锁的预防方法能确保系统不发生死锁\n③银行家算法可以判断系统是否处于死锁状态\n④当系统出现死锁时，必然有两个或两个以上的进程处于阻塞态",
        options: [
            { key: "A", text: "仅②、③" },
            { key: "B", text: "仅①、②、④" },
            { key: "C", text: "仅①、②、③" },
            { key: "D", text: "仅①、③、④" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-24",
        stem: "系统中有3个不同的临界资源R1、R2和R3，被4个进程p1、p2、p3和p4共享。各进程对资源的需求：p1申请R1和R2，p2申请R2和R3，p3申请R1和R3，p4申请R2。若系统出现死锁，则处于死锁状态的进程数至少是",
        options: [
            { key: "A", text: "1" },
            { key: "B", text: "2" },
            { key: "C", text: "3" },
            { key: "D", text: "4" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-deadlock-25",
        stem: "若系统S1采用死锁避免方法，S2采用死锁检测方法。下列叙述中，正确的是\n①S1会限制用户申请资源的顺序，而S2不会\n②S1需要进程运行所需资源总量信息，而S2不需要\n③S1不会给可能导致死锁的进程分配资源，而S2会",
        options: [
            { key: "A", text: "仅①、②" },
            { key: "B", text: "仅②、③" },
            { key: "C", text: "仅①、③" },
            { key: "D", text: "①、②、③" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-memory-1",
        stem: "设内存的分配情况如图所示。若要申请一块40K的内存空间，采用最佳适应算法，则所得到的分区首址是\n```\n<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>内存分配图渲染</title>\n    <style>\n        body {\n            font-family: \"Times New Roman\", serif; /* 模仿原图的衬线字体 */\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            min-height: 100vh;\n            background-color: #f5f5f5;\n        }\n        /* 内存容器 */\n        .memory-container {\n            position: relative;\n            width: 160px; /* 内存条宽度 */\n            border: 2px solid #333; /* 整体外边框 */\n            background-color: #fff;\n            margin-left: 60px; /* 为左侧文字留出空间 */\n            margin-right: 80px; /* 为右侧文字留出空间 */\n        }\n        /* 通用内存块样式 */\n        .memory-block {\n            position: relative;\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            border-bottom: 2px solid #333; /* 分隔线 */\n            box-sizing: border-box;\n            font-size: 20px;\n            font-weight: bold;\n            color: #222;\n        }\n        /* 最后一个块去掉底部边框，因为容器已经有边框了 */\n        .memory-block:last-child {\n            border-bottom: none;\n        }\n        /* 左侧地址 (0, 100K...) */\n        .addr-label {\n            position: absolute;\n            left: -70px; /* 向左偏移 */\n            top: -10px; /* 向上对齐分割线 */\n            width: 60px;\n            text-align: right;\n            font-size: 16px;\n            font-weight: bold;\n            font-family: \"Times New Roman\", serif;\n        }\n        /* 底部特例地址 (512K-1) */\n        .addr-bottom {\n            position: absolute;\n            left: -80px;\n            bottom: -10px;\n            width: 70px;\n            text-align: right;\n            font-size: 16px;\n            font-weight: bold;\n        }\n        /* 右侧大小 (80K, 90K...) */\n        .size-label {\n            position: absolute;\n            right: -90px; /* 向右偏移 */\n            top: 50%;\n            transform: translateY(-50%); /* 垂直居中 */\n            width: 80px;\n            text-align: left;\n            font-size: 18px;\n            font-weight: bold;\n        }\n        /* 特殊文字样式：操作系统 */\n        .os-text {\n            font-size: 22px;\n            letter-spacing: 2px;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"memory-container\">\n        <div class=\"memory-block\" style=\"height: 120px;\">\n            <span class=\"addr-label\">0</span>\n            <span class=\"os-text\">操作系统</span>\n        </div>\n        <div class=\"memory-block\" style=\"height: 96px;\">\n            <span class=\"addr-label\">100K</span>\n            <span class=\"size-label\">80K</span>\n        </div>\n        <div class=\"memory-block\" style=\"height: 12px;\">\n            <span class=\"addr-label\">180K</span>\n            <span style=\"font-size: 12px;\">占用</span> </div>\n        <div class=\"memory-block\" style=\"height: 108px;\">\n            <span class=\"addr-label\">190K</span>\n            <span class=\"size-label\">90K</span>\n            <span class=\"os-text\">占用</span> </div>\n        </div>\n    <script>\n        document.body.innerHTML = `\n        <div class=\"memory-container\" style=\"width: 180px; border: 2px solid #444;\">\n            <div class=\"memory-block\" style=\"height: 100px;\">\n                <span class=\"addr-label\">0</span>\n                <span class=\"os-text\">操作系统</span>\n            </div>\n            <div class=\"memory-block\" style=\"height: 80px;\">\n                <span class=\"addr-label\">100K</span>\n                <span class=\"size-label\">80K</span>\n            </div>\n            <div class=\"memory-block\" style=\"height: 30px;\"> <span class=\"addr-label\">180K</span>\n                <span>占用</span>\n            </div>\n            <div class=\"memory-block\" style=\"height: 90px;\">\n                <span class=\"addr-label\">190K</span>\n                <span class=\"size-label\">90K</span>\n            </div>\n            <div class=\"memory-block\" style=\"height: 50px;\">\n                <span class=\"addr-label\">280K</span>\n                <span>占用</span>\n            </div>\n            <div class=\"memory-block\" style=\"height: 60px;\">\n                <span class=\"addr-label\">330K</span>\n                <span class=\"size-label\">60K</span>\n            </div>\n            <div class=\"memory-block\" style=\"height: 30px;\"> <span class=\"addr-label\">390K</span>\n                <span>占用</span>\n            </div>\n            <div class=\"memory-block\" style=\"height: 102px;\">\n                <span class=\"addr-label\">410K</span>\n                <span class=\"size-label\">102K-1</span>\n                <span class=\"addr-bottom\">512K-1</span>\n            </div>\n        </div>\n        `;\n    </script>\n</body>\n</html>\n```",
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
        id: "obj-memory-2",
        stem: "某基于动态分区存储管理的计算机，其主存容量为55 MB(初始为空闲)，采用最佳适配(Best Fit)算法，分配和释放的顺序：分配15 MB，分配30 MB，释放15 MB，分配8 MB，分配6 MB。此时主存中最大空闲分区的大小是",
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
        id: "obj-memory-3",
        stem: "某计算机采用二级页表的分页存储管理方式，按字节编制，页大小为1KB，页表项大小为2B，逻辑地址结构如下。逻辑地址空间大小为2的16次方个页，则表示整个逻辑地址空间的页目录表中包含表项的个数至少是\n| 页目录号 | 页号 | 页内偏移量 |\n| -------- | ---- | ---------- |\n|          |      |            |",
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
        id: "obj-memory-4",
        stem: "在一个段式存储管理系统中，段表内容如下表所示。一个逻辑地址为（2, 154B），它对应的物理地址是\n| 段号 | 段首地址 | 段长度 |\n| ---- | -------- | ------ |\n| 0    | 120K     | 40K    |\n| 1    | 760K     | 30K    |\n| 2    | 480K     | 20K    |\n| 3    | 370K     | 20K    |",
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
        id: "obj-memory-6",
        stem: "在动态分区分配方案中，某一作业完成后，系统收回其主存空间，并与相邻空闲区合并，为此需修改空闲区表，造成空闲区数减1的情况是",
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
        id: "obj-memory-8",
        stem: "不会产生内部碎片的存储管理是",
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
        id: "obj-memory-9",
        stem: "在不使用快表的情况下，基本段页式内存管理系统中，访问一条指令需要几次访问内存?",
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
        id: "obj-memory-11",
        stem: "对于采用虚拟内存管理方式的系统，下列关于进程虚拟地址空间的叙述中，错误的是",
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
        id: "obj-memory-12",
        stem: "下列选项中，不会影响系统缺页率的是",
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
        id: "obj-memory-13",
        stem: "在页式虚拟存储管理系统中，采用某些页面置换算法，会出现Belady异常现象，即进程的缺页次数会随着分配给该进程的页框个数的增加而增加。下列算法中：① LRU算法 ②FIFO算法 ③OPT算法，可能出现Belady异常现象的是",
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
        id: "obj-memory-14",
        stem: "某进程访问的页 b 不在内存中，导致产生缺页异常，该缺页异常处理过程中不一定包含的操作是",
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
        id: "obj-memory-16",
        stem: "在缺页处理过程中，操作系统执行的操作可能是\n①修改页表 ②磁盘I/O ③分配页框",
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
        id: "obj-memory-17",
        stem: "某请求分页存储系统的页大小为4KB，按字节编址。系统给进程P分配2个固定的页框,并采用改进型Clock置换算法，进程P页表的部分内容如下表所示。若P访问虚拟地址为02A01H的存储单元，则经地址变换后得到的物理地址是\n| 页号 | 页框号 | 存在位(1:存在，0:不存在) | 访问位(1:访问，0:未访问) | 修改位(1:修改，0:未修改) |\n| ---- | ------ | ------------------------ | ------------------------ | ------------------------ |\n| …    | …      | …                        | …                        | …                        |\n| 2    | 20H    | 0                        | 0                        | 0                        |\n| 3    | 60H    | 1                        | 1                        | 0                        |\n| 4    | 80H    | 1                        | 1                        | 1                        |\n| …    | …      | …                        | …                        | …                        |",
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
        id: "obj-memory-18",
        stem: "在采用二级页表的分页系统中，CPU页表基址寄存器中的内容是",
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
        id: "obj-memory-19",
        stem: "某计算机主存按字节编址，采用二级分页存储管理，地址结构如下所示。虚拟地址2050 1225H对应的页目录号、页号分别是\n| 页目录号（10位） | 页号（10）位 | 页内偏移（12位） |\n| ---------------- | ------------ | ---------------- |\n|                  |              |                  |",
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
        id: "obj-memory-20",
        stem: "在可变式分区存储管理中的紧凑技术可以",
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
        id: "obj-memory-21",
        stem: "虚拟存储管理策略可以",
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
        id: "obj-memory-22",
        stem: "一般情况下，请求分页存储管理方式中，页面大小增加一倍则缺页中断次数",
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
        id: "obj-memory-23",
        stem: "下列选项中，属于多级页表优点的是",
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
        id: "obj-memory-25",
        stem: "系统为某进程分配了4个页框，该进程已访问的页号序列为2、0、2、9、3、4、2、8、2、4、8、4、5。若进程要访问的下一页的页号为7，依据 LRU 算法，应淘汰页的页号是",
        options: [
            { key: "A", text: "2" },
            { key: "B", text: "3" },
            { key: "C", text: "4" },
            { key: "D", text: "8" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-1",
        stem: "文件系统中用（）管理文件。",
        options: [
            { key: "A", text: "作业控制块" },
            { key: "B", text: "外页表" },
            { key: "C", text: "目录" },
            { key: "D", text: "软硬件结合的方法" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-2",
        stem: "如果文件系统中有两个文件重名，不应采用（ ）。",
        options: [
            { key: "A", text: "单级目录结构" },
            { key: "B", text: "树型目录结构" },
            { key: "C", text: "二级目录结构" },
            { key: "D", text: "非循环图目录结构" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-3",
        stem: "下列选项中，支持文件长度可变、随机访问的磁盘存储空间分配方式是( )。",
        options: [
            { key: "A", text: "索引分配" },
            { key: "B", text: "链接分配" },
            { key: "C", text: "连续分配" },
            { key: "D", text: "动态分区分配" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-4",
        stem: "采用直接存取方法来读写硬盘上的物理记录时，效率最低的文件结构是( )。",
        options: [
            { key: "A", text: "连续文件" },
            { key: "B", text: "索引文件" },
            { key: "C", text: "链接文件" },
            { key: "D", text: "索引连续文件" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-5",
        stem: "在磁盘上容易导致存储碎片发生的物理文件结构是（ ）。",
        options: [
            { key: "A", text: "链接文件" },
            { key: "B", text: "连续文件" },
            { key: "C", text: "索引文件" },
            { key: "D", text: "索引和链接文件" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-6",
        stem: "UNIX系统中对空闲磁盘存储空间采用( )方法管理。",
        options: [
            { key: "A", text: "位示图" },
            { key: "B", text: "空闲块成组链接" },
            { key: "C", text: "空闲块单向链接" },
            { key: "D", text: "空闲块表" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-7",
        stem: "为支持CD-ROM中视频文件的快速随机播放，播放性能最好的文件数据块组织方式（ ）。",
        options: [
            { key: "A", text: "连续结构" },
            { key: "B", text: "链式结构" },
            { key: "C", text: "直接索引结构" },
            { key: "D", text: "多级索引结构" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-8",
        stem: "若某文件系统索引节点(inode)中有直接地址项和间接地址项，则下列选项中，与单个文件长度无关的因素是( )。",
        options: [
            { key: "A", text: "索引节点的总数" },
            { key: "B", text: "间接地址索引的级数" },
            { key: "C", text: "地址项的个数" },
            { key: "D", text: "文件块大小" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-9",
        stem: "一个系统，它的文件控制块占64B，一个磁盘块大小为1KB，采用一级目录。假定文件目录中有3200个目录项。问查找一个文件平均需要（ ）次访问磁盘。",
        options: [
            { key: "A", text: "50" },
            { key: "B", text: "54" },
            { key: "C", text: "100" },
            { key: "D", text: "200" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-10",
        stem: "某文件系统的簇（块）和磁盘扇区大小分别为1 KB和512B。若一个文件的大小为1026B，则系统分配给该文件的磁盘空间大小是( )。",
        options: [
            { key: "A", text: "1026B" },
            { key: "B", text: "1536B" },
            { key: "C", text: "1538B" },
            { key: "D", text: "2048B" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-11",
        stem: "下列选项中，可用于文件系统管理空闲磁盘块的数据结构是( )。\n①位图 ②索引节点 ③空闲磁盘块链IV.文件分配表(FAT)",
        options: [
            { key: "A", text: "仅①②" },
            { key: "B", text: "仅①③④" },
            { key: "C", text: "仅①③" },
            { key: "D", text: "仅②③④" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-12",
        stem: "设文件索引节点中有7个地址项，其中4个地址项为直接地址索引，2个地址项是一级间接地址索引，1个地址项是二级间接地址索引，每个地址项大小为4字节，若磁盘索引块和磁盘数据块大小均为256字节，则可表示的单个文件的最大长度是（ ）。",
        options: [
            { key: "A", text: "33KB" },
            { key: "B", text: "519KB" },
            { key: "C", text: "1057KB" },
            { key: "D", text: "16513KB" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-13",
        stem: "假设某个文件的索引节点已在内存，其他信息均在外存，为了访问该文件的某内容，直接寻址、一次间接、二次间接、三次间接分别需要几次访盘？（ ）",
        options: [
            { key: "A", text: "0,1,2,3" },
            { key: "B", text: "1,2,3,4" },
            { key: "C", text: "2,3,4,5" },
            { key: "D", text: "1,3,4,5" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-14",
        stem: "某文件系统的目录项由文件名和索引节点号构成。若每个目录项长度为64字节，其中4个字节存放索引节点号，60个字节存放文件名，文件名由小写英文字母构成，则该文件系统能创建的文件数量的上限为( )。",
        options: [
            { key: "A", text: "2^26" },
            { key: "B", text: "2^32" },
            { key: "C", text: "2^60" },
            { key: "D", text: "2^64" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-15",
        stem: "现有一个容量为10GB的磁盘分区，磁盘空间以簇(Cluster)为单位进行分配，簇的大小为4KB，若采用位图法管理该分区的空闲空间，即用一位(bit)标识一个簇是否被分配，则存放该位图所需簇的个数为( )。",
        options: [
            { key: "A", text: "80" },
            { key: "B", text: "320" },
            { key: "C", text: "80K" },
            { key: "D", text: "320K" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-16",
        stem: "引入高速缓冲的主要目的是（ ）。",
        options: [
            { key: "A", text: "提高CPU的利用率" },
            { key: "B", text: "提高I/O设备的利用率" },
            { key: "C", text: "改善CPU和I/O设备之间速度不匹配的情况" },
            { key: "D", text: "节省内存" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-17",
        stem: "CPU输出数据的速度远远高于打印机的打印速度，为了解决这一矛盾，可采用（ ）。",
        options: [
            { key: "A", text: "并行技术" },
            { key: "B", text: "通道技术" },
            { key: "C", text: "缓冲技术" },
            { key: "D", text: "虚存技术" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-18",
        stem: "通道相当于小型处理机，它用于实现（ ）之间的信息传输。",
        options: [
            { key: "A", text: "内存与外设" },
            { key: "B", text: "CPU与外设" },
            { key: "C", text: "内存与外存" },
            { key: "D", text: "CPU与外存" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-19",
        stem: "以时间换空间或者以空间换时间是操作系统的基本技术，以下属于以空间换时间的机制是( )。",
        options: [
            { key: "A", text: "SPOOLing" },
            { key: "B", text: "虚拟存储技术" },
            { key: "C", text: "通道技术" },
            { key: "D", text: "覆盖技术" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-20",
        stem: "通过硬件和软件的功能扩充，把原来独占的设备改造成能为若干用户共享的设备，这种设备称为（ ）。",
        options: [
            { key: "A", text: "存储设备" },
            { key: "B", text: "系统设备" },
            { key: "C", text: "用户设备" },
            { key: "D", text: "虚拟设备" },
        ],
        answer: "D",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-21",
        stem: "在（ ）I/O控制方式中，设备能直接与内存交换数据而不占用CPU。",
        options: [
            { key: "A", text: "轮询" },
            { key: "B", text: "中断" },
            { key: "C", text: "DMA" },
            { key: "D", text: "MMU" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-22",
        stem: "某系统中磁盘的磁道数为200(0~199)，磁头当前在184号磁道上。用户进程提出的磁盘访问请求对应的磁道号依次为184、 187、176、182、199。若采用最短寻道时间优先调度算法(SSTF)完成磁盘访问，则磁头移动的距离(磁道数)是( )。",
        options: [
            { key: "A", text: "37" },
            { key: "B", text: "38" },
            { key: "C", text: "41" },
            { key: "D", text: "42" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-23",
        stem: "在以下磁盘调度算法中，（ ）算法可能会随时改变移动臂的运动方向 。",
        options: [
            { key: "A", text: "最短寻道时间优先" },
            { key: "B", text: "扫描SCAN（双向扫描）" },
            { key: "C", text: "巡回扫描C-SCAN（单向扫描）" },
            { key: "D", text: "都不会" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-24",
        stem: "一个计算机系统配置了2台同类绘图机和3台同类打印机。为了正确驱动这些设备，系统应该提供（ ）个设备驱动程序。",
        options: [
            { key: "A", text: "5" },
            { key: "B", text: "3" },
            { key: "C", text: "2" },
            { key: "D", text: "1" },
        ],
        answer: "C",
        type: "single",
        explain: "暂无解析"
    },
    {
        id: "obj-io-25",
        stem: "磁盘调度的目的是为了缩短（ ）时间。",
        options: [
            { key: "A", text: "寻道" },
            { key: "B", text: "延迟" },
            { key: "C", text: "传送" },
            { key: "D", text: "启动" },
        ],
        answer: "A",
        type: "single",
        explain: "暂无解析"
    },
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
        stem: "有两个并发执行的进程P1和P2，共享初值为1的变量x。P1对x加1，P2对x减1。加1和减1操作的指令序列分别如下所示。两个操作完成后，x的值( )。",
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
        id: "hw2-23",
        stem: "某系统采用基于优先权的非抢占式进程调度策略,完成一次进程调度和进程切换的系统时间开销为1 µs。在T时刻就绪队列中有3个进程P1、P2和P3，其在就绪队列中的等待时间、需要的CPU时间和优先权如下表所示。若优先权值大的进程优先获得 CPU，从T时刻起系统开始进程调度，则系统的平均周转时间为( )。",
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
        stem: "设内存的分配情况如图所示。若要申请一块40K的内存空间，采用最佳适应算法，则所得到的分区首址是( )。",
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
        id: "hw3-4",
        stem: "在一个段式存储管理系统中，段表内容如下表所示。一个逻辑地址为(2, 154B)，它对应的物理地址是( )。",
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
        id: "hw3-11",
        stem: "下列选项中，可用于文件系统管理空闲磁盘块的数据结构是( )。\n\t①位图 ②索引节点 ③空闲磁盘块链IV.文件分配表(FAT)",
        options: [
            { key: "A", text: "仅①②" },
            { key: "B", text: "仅①③④" },
            { key: "C", text: "仅①③" },
            { key: "D", text: "仅②③④" },
        ],
        answer: "B",
        type: "single",
        explain: "暂无解析"
    }
];

export const getQuestionBankStats = () => {
    return {
        total: 143,
        single: 143,
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
