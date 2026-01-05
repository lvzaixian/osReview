/**
 * Linux系统与安全 - 题库数据
 * 
 * 数据来源：作业题自动转换
 * 题目总数：78 题
 * 题型分布：
 *   - 单选题（single）：7 题
 *   - 填空题（fill）：71 题
 * 
 * 自动生成时间：2025/12/29 05:10:28
 */

import type { Question } from '../types';

export const rawQuestions: Question[] = [
  {
    "id": "q001",
    "type": "fill",
    "stem": ". 通配符\"\\*\"代表从它所在位置开始的________________，但________________中的\".\"和路径名中\"/\"必须显式匹配。",
    "options": [],
    "answer": "任意字符串；文件名",
    "explain": "星号可展开成任意长度字符串，唯独\".\"和\"/\"必须字面出现。",
    "keywords": []
  },
  {
    "id": "q002",
    "type": "fill",
    "stem": "通配符\"?\"代表它所在位置上的________________字符；\"[ ]\"每次只匹配其中字符的________________个。",
    "options": [],
    "answer": "任何单个；一",
    "explain": "\"?\"严格占位 1 个字符；方括号内枚举集合也只命中 1 个字符。",
    "keywords": []
  },
  {
    "id": "q003",
    "type": "fill",
    "stem": "特殊字符\\\\(反斜杠)被称为________________字符；符号|(管道)表示________________。",
    "options": [],
    "answer": "转义；管道",
    "explain": "反斜杠用于转义后续字符，连续两个反斜杠则输出一个字面反斜杠本身。",
    "keywords": []
  },
  {
    "id": "q004",
    "type": "fill",
    "stem": "组合键________________可结束当前程序输入或从系统注销。",
    "options": [],
    "answer": "Ctrl+D",
    "explain": "Ctrl+D 发送 EOF，终端收到后结束多数交互式程序或登录会话。",
    "keywords": []
  },
  {
    "id": "q005",
    "type": "fill",
    "stem": "组合键________________用于字符终端切换，如 Alt+F2 切到第 2 个虚拟控制台。",
    "options": [],
    "answer": "Alt+F#",
    "explain": "传统 Linux 控制台用 Alt+F1\\~F6 切换，# 代表 1--6 任意数字。",
    "keywords": []
  },
  {
    "id": "q006",
    "type": "fill",
    "stem": "在 UNIX/Linux 中，目录只包括________________和________________号等相关信息，而文件的属性信息保存在________________信息中。",
    "options": [],
    "answer": "文件名；i 节点；i 节点",
    "explain": "目录文件本质是\"文件名 ↔ i-node 号\"对照表，真正的属性存在 i-node 结构体里。",
    "keywords": []
  },
  {
    "id": "q007",
    "type": "fill",
    "stem": ". 目录文件在形式上与________________文件一样，但具有目录属性，只能用________________来访问和管理。",
    "options": [],
    "answer": "普通；目录管理命令",
    "explain": "目录与普通文件共用 inode，只是 mode 位不同；用户需用专用命令（ls、cd、mkdir 等）操作。",
    "keywords": []
  },
  {
    "id": "q008",
    "type": "fill",
    "stem": "UNIX/Linux 把每个 I/O 设备都看成一个________________，与________________一样处理。",
    "options": [],
    "answer": "文件；普通文件",
    "explain": "\"一切皆文件\"------设备节点在 /dev 下表现为特殊文件，可用 open/read/write 统一接口访问。",
    "keywords": []
  },
  {
    "id": "q009",
    "type": "fill",
    "stem": "以长列表列出 /dev 并直接统计其中文件个数的完整命令是：________________",
    "options": [],
    "answer": "$ ls -l /dev | wc -l",
    "explain": "ls -l 逐行列出，wc -l 统计行数即文件（含设备）数量。",
    "keywords": []
  },
  {
    "id": "q010",
    "type": "fill",
    "stem": "在 $ 提示符下，定义变量 x 值为 123 的格式是：________________",
    "options": [],
    "answer": "$ x=123",
    "explain": "Shell 变量赋值语法，等号两侧不能有空格。",
    "keywords": []
  },
  {
    "id": "q011",
    "type": "fill",
    "stem": "在 shell 提示符下，显示当前命令搜索路径的命令及格式是：________________",
    "options": [],
    "answer": "$ echo $PATH",
    "explain": "$PATH 环境变量保存可执行文件搜索路径，echo 即可打印。",
    "keywords": []
  },
  {
    "id": "q012",
    "type": "fill",
    "stem": "反单引号用于命令替换。依次写出两条命令的功能：① $ x=`pwd` ② $ echo $x 功能：________________",
    "options": [],
    "answer": "将当前工作目录赋予变量 x，然后显示变量 x 的值；即\"显示当前工作目录\"。",
    "explain": "反单引号把 pwd 输出捕获成字符串赋给 x；echo $x 再把字符串打印出来，等价于直接执行 pwd。",
    "keywords": []
  },
  {
    "id": "q013",
    "type": "single",
    "stem": "在 UNIX/Linux 系统添加新用户的命令是（ ）",
    "options": [
      {
        "key": "A",
        "text": "groupadd"
      },
      {
        "key": "B",
        "text": "usermod"
      },
      {
        "key": "C",
        "text": "userdel"
      },
      {
        "key": "D",
        "text": "useradd"
      }
    ],
    "answer": "D",
    "explain": "useradd 专用于新建账号。",
    "keywords": []
  },
  {
    "id": "q014",
    "type": "single",
    "stem": "添加用户时使用参数（ ）可指定用户标识号",
    "options": [
      {
        "key": "A",
        "text": "-d"
      },
      {
        "key": "B",
        "text": "-p"
      },
      {
        "key": "C",
        "text": "-u"
      },
      {
        "key": "D",
        "text": "-c"
      }
    ],
    "answer": "C",
    "explain": "-u 后直接接数字 UID。",
    "keywords": []
  },
  {
    "id": "q015",
    "type": "single",
    "stem": "用户 mytest 修改自己的密码可使用（ ）",
    "options": [
      {
        "key": "A",
        "text": "passwd"
      },
      {
        "key": "B",
        "text": "passwd -d mytest"
      },
      {
        "key": "C",
        "text": "passwd mytest"
      },
      {
        "key": "D",
        "text": "passwd -l"
      }
    ],
    "answer": "A",
    "explain": "不带用户名的 passwd 默认改当前登录者自己的口令。",
    "keywords": []
  },
  {
    "id": "q016",
    "type": "single",
    "stem": "解锁一个用户的命令和选项为（ ）",
    "options": [
      {
        "key": "A",
        "text": "passwd -u"
      },
      {
        "key": "B",
        "text": "passwd -x"
      },
      {
        "key": "C",
        "text": "passwd -d"
      },
      {
        "key": "D",
        "text": "passwd -l"
      }
    ],
    "answer": "A",
    "explain": "-u 去掉 shadow 里的\"!\"锁定标记。",
    "keywords": []
  },
  {
    "id": "q017",
    "type": "single",
    "stem": "删除一个用户密码所使用的命令和选项（ ）",
    "options": [
      {
        "key": "A",
        "text": "passwd -u"
      },
      {
        "key": "B",
        "text": "passwd -x"
      },
      {
        "key": "C",
        "text": "passwd -d"
      },
      {
        "key": "D",
        "text": "passwd -l"
      }
    ],
    "answer": "C",
    "explain": "-d 立即清空密码哈希，账号变为无口令状态。",
    "keywords": []
  },
  {
    "id": "q018",
    "type": "single",
    "stem": "若使pid进程无条件终止，使用的命令是（ ）",
    "options": [
      {
        "key": "A",
        "text": "kill -9"
      },
      {
        "key": "B",
        "text": "kill -15"
      },
      {
        "key": "C",
        "text": "killall -1"
      },
      {
        "key": "D",
        "text": "kill -3"
      }
    ],
    "answer": "A",
    "explain": "-9 发送 SIGKILL，进程无法捕获或忽略，立即无条件终止。 ",
    "keywords": []
  },
  {
    "id": "q019",
    "type": "single",
    "stem": "在Linux系统中用于进程状态查询的常用命令是（ ）和（ ）",
    "options": [
      {
        "key": "A",
        "text": "ps"
      },
      {
        "key": "B",
        "text": "kill"
      },
      {
        "key": "C",
        "text": "killall"
      },
      {
        "key": "D",
        "text": "pstree"
      }
    ],
    "answer": "A",
    "explain": "ps 快照列出进程；pstree 以树状显示进程父子关系；kill/killall 用于发信号而非查询。 ",
    "keywords": []
  },
  {
    "id": "q020",
    "type": "fill",
    "stem": "IP地址(Internet Protocol Address)，又译为________________。每个IP地址都分为________________和________________两部分。",
    "options": [],
    "answer": "网际协议地址格式 网络号 主机号",
    "explain": "IP 给\"网络号\"定边界，\"主机号\"定节点，合起来实现分层寻址。",
    "keywords": []
  },
  {
    "id": "q021",
    "type": "fill",
    "stem": "由于一个IP地址由________________位二进制数构成，将它分成________________组，每组________________位，各组都以十进制表示，并用圆点分开，这种表示方法称为\"________________表示法\"。",
    "options": [],
    "answer": "32 4 8 点分十进制",
    "explain": "32 b → 4×8 b → 4 个 0-255 十进制数，点分书写最直观。",
    "keywords": []
  },
  {
    "id": "q022",
    "type": "fill",
    "stem": "子网掩码可以用来区分一个IP地址的网络号和主机号________________位。A、B、C类IP地址的标准子网掩码分别为：A类---255.0.0.0 B类---255.255.0.0 C类---255.255.255.0",
    "options": [],
    "answer": "各占多少",
    "explain": "掩码\"1\"位对应网络号，\"0\"位对应主机号，用\"各占多少\"概括其分界作用。",
    "keywords": []
  },
  {
    "id": "q023",
    "type": "fill",
    "stem": "一个进程和另一个进程进行通信时，需要以某种方式标识自己。对此，TCP/IP用一个被称作________________的逻辑结构来实现。一个________________是一个16位的数字，它唯一地标识一个进程。",
    "options": [],
    "answer": "端口 端口号",
    "explain": "端口是逻辑概念，端口号是 16 位无符号整数，0-65535。",
    "keywords": []
  },
  {
    "id": "q024",
    "type": "fill",
    "stem": "（MAC地址）一般位于网卡中，一个网卡具有全球________________地址，用于标识网络设备，控制对网络介质的访问。",
    "options": [],
    "answer": "物理地址 唯一的MAC",
    "explain": "MAC 48 位全球唯一，写在网卡 EEPROM，实现链路层寻址。",
    "keywords": []
  },
  {
    "id": "q025",
    "type": "fill",
    "stem": "（网络地址）即IP地址或网络地址。IPv4使用32位二进制来表示网络地址，称为________________或逻辑地址。逻辑地址用于________________层上对目的主机的寻址。",
    "options": [],
    "answer": "逻辑地址 IP地址 网络",
    "explain": "逻辑地址（IP）在网络层选路；MAC 在链路层选下一跳。",
    "keywords": []
  },
  {
    "id": "q026",
    "type": "fill",
    "stem": "hostname功能是显示和临时设置主机名，其语法为：________________",
    "options": [],
    "answer": "hostname [-v] {name|-F file}",
    "explain": "不给参数时显示当前主机名；加 name 立即临时生效；-F 从文件读取。",
    "keywords": []
  },
  {
    "id": "q027",
    "type": "fill",
    "stem": "hostnamectl用于查询和设置主机名，其用法为：________________",
    "options": [],
    "answer": "hostnamectl [options] {cmd}",
    "explain": "systemd 环境统一接口，可永久设置静态/瞬态/灵活主机名。",
    "keywords": []
  },
  {
    "id": "q028",
    "type": "fill",
    "stem": "ping命令的用法为：________________",
    "options": [],
    "answer": "ping [options] hostname/IP",
    "explain": "连续发送 ICMP Echo，Ctrl-C 给出统计，常用于连通性测试。",
    "keywords": []
  },
  {
    "id": "q029",
    "type": "fill",
    "stem": "netstat主要用于________________信息，包括________________、________________和________________统计信息等。通过这些信息可以知道开启的端口、正在为哪些用户服务以及服务的状态等",
    "options": [],
    "answer": "显示系统网络 网络连接 路由表 网络接口通信",
    "explain": "netstat -r 看路由，-i 看接口，-t/-u/-n 看端口连接。",
    "keywords": []
  },
  {
    "id": "q030",
    "type": "fill",
    "stem": "显示所有TCP端口的命令是________________",
    "options": [],
    "answer": "netstat -ia",
    "explain": "-i 列出接口，-a 含 listening 与 non-listening，组合后可看到全部 TCP 监听端口。",
    "keywords": []
  },
  {
    "id": "q031",
    "type": "fill",
    "stem": "显示网络接口使用的统计信息，使用________________选项执行________________命令可以显示所有已配置接口的一些有用的统计信息，使用该参数，可以很容易检查连接的状态以及连接是否\"正常\"。因此，这是一个用于检测和排除网络故障的非常有用的措施。",
    "options": [],
    "answer": "-i netstat",
    "explain": "netstat -i 每秒收发包/错包一目了然，可快速判断链路健康。",
    "keywords": []
  },
  {
    "id": "q032",
    "type": "fill",
    "stem": "________________命令的功能是管理网络接口，用于查看、配置、启用或禁用网络接口",
    "options": [],
    "answer": "ifconfig",
    "explain": "传统工具，可启停接口、设 IP/掩码/广播地址；新版系统推荐 ip 命令。",
    "keywords": []
  },
  {
    "id": "q033",
    "type": "fill",
    "stem": "ifconfig的功能是________________。",
    "options": [],
    "answer": "运行ifconfig显示所有网卡的配置信息",
    "explain": "不带参数时列出全部接口的 IP、MAC、掩码、收发统计等详细信息。",
    "keywords": []
  },
  {
    "id": "q034",
    "type": "fill",
    "stem": "UNIX/Linux系统中有三种基本的文件类型：____,____,____。",
    "options": [],
    "answer": "普通文件,目录文件,设备文件",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q035",
    "type": "fill",
    "stem": "链接为 Linux 系统解决了文件的共享使用，还带来了____、____及____等好处。",
    "options": [],
    "answer": "隐藏文件路径、增加权限安全,节省存储",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q036",
    "type": "fill",
    "stem": "文件在文件系统中的位置可以由____或____来决定。",
    "options": [],
    "answer": "相对路径,绝对路径",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q037",
    "type": "fill",
    "stem": "标准输出重定向是指把命令的标准输出保存到文件中，可用两种方式：____,____。",
    "options": [],
    "answer": "覆盖方式(>)，追加方式(>>)",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q038",
    "type": "fill",
    "stem": "反单引号的作用是____。",
    "options": [],
    "answer": "命令替换",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q039",
    "type": "fill",
    "stem": "系统在启动时创建了很多进程。进程的创建者称为____，被创建者称为____。为对进程管理，系统为每个进程分配了一个____。",
    "options": [],
    "answer": "父进程,子进程,编号PID：进程号或进程标识.",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q040",
    "type": "fill",
    "stem": "wc的功能是____。统计信息包括____等。",
    "options": [],
    "answer": "对输入文件的信息进行统计, \t行数、单词数和总字节数",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q041",
    "type": "fill",
    "stem": "vim在命令模式下，输入____进入编辑模式，编辑完毕后通过按____返回命令模式。",
    "options": [],
    "answer": "i,esc",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q042",
    "type": "fill",
    "stem": "sudo rm -rf /*进行了什么操作________________。",
    "options": [],
    "answer": "使用管理员（root）权限删除电脑中的一切东西（包括可移动设备中的文件）",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q043",
    "type": "fill",
    "stem": "vim中编辑完成后回到命令模式保存文件，并强制退出的命令________________。",
    "options": [],
    "answer": ":wq!",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q044",
    "type": "fill",
    "stem": "显示自身用户名称的命令________________.",
    "options": [],
    "answer": "whoami",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q045",
    "type": "fill",
    "stem": "当前为user@Ubuntu:~/Desktop$ ,输入ls ，无任何文件，在本目录temp下创建子目录child的命令________________。",
    "options": [],
    "answer": "mkdir -p temp/child",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q046",
    "type": "fill",
    "stem": "将文件file倒着显示命令________________。",
    "options": [],
    "answer": "tac file",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q047",
    "type": "fill",
    "stem": "将文件fiel1，file2移动到目录mydir下命令________________。",
    "options": [],
    "answer": "mv file1 file2 mydir",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q048",
    "type": "fill",
    "stem": "将根目录短式列表显示到屏幕上的同时也保存到文件f1和f2中________________.(输入命令)",
    "options": [],
    "answer": "ls / | tee f1 f2",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q049",
    "type": "fill",
    "stem": "撤销my_env环境变量的命令是________________.",
    "options": [],
    "answer": "export -n my_env",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q050",
    "type": "fill",
    "stem": "终止pid为1988的进程的命令是________________.",
    "options": [],
    "answer": "kill -9 1988",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q051",
    "type": "fill",
    "stem": "组信息存放在________________.",
    "options": [],
    "answer": "/etc/group",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q052",
    "type": "fill",
    "stem": "系统在创建用户时，给每个用户划组，每个组一个________________和________________.用户可以分配________________组。",
    "options": [],
    "answer": "组名   组标识（gid）   不同",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q053",
    "type": "fill",
    "stem": "Linux系统中的用户信息存储在________________文件中文件中",
    "options": [],
    "answer": "/etc/passwd",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q054",
    "type": "fill",
    "stem": "密码的最后修改日期是从1970年1月1日到上次修改密码的天数间隔，这个信息存储在________________文件中.",
    "options": [],
    "answer": "/etc/shadow",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q055",
    "type": "fill",
    "stem": "用户管理的命令有________________、________________和________________，它们分别用于用户创建、用户属性修改和用户删除。",
    "options": [],
    "answer": "useradd、usermod、userdel",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q056",
    "type": "fill",
    "stem": "UNIX/Linux系统的标准安全级别为C2级(TCSEC标准)，具有用户________________、________________、________________等特点。密码管理是________________的基础。",
    "options": [],
    "answer": "身份认证、访问控制、操作的可靠性     身份认证",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q057",
    "type": "fill",
    "stem": "给用户 test修改密码的命令________________.",
    "options": [],
    "answer": "passwd test",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q058",
    "type": "fill",
    "stem": "不退出系统而将自己切换成newuser人仍使用原环境工作________________.",
    "options": [],
    "answer": "su newuser",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q059",
    "type": "fill",
    "stem": "sudo的配置文件是________________.",
    "options": [],
    "answer": "/etc/sudoers",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q060",
    "type": "fill",
    "stem": "wall（write to all）功能是向登录到系统中工作的所有用户发送________________信息.",
    "options": [],
    "answer": "广播",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q061",
    "type": "fill",
    "stem": "只有________________能够上锁或解锁一个用户",
    "options": [],
    "answer": "root",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q062",
    "type": "fill",
    "stem": "命令 id 用于显示用户的________________和________________。",
    "options": [],
    "answer": "用户标识号 (UID)   组标识号 (GID)",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q063",
    "type": "fill",
    "stem": "命令________________用于显示当前的 终端设备名。",
    "options": [],
    "answer": "tty",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q064",
    "type": "fill",
    "stem": "UNIX/Linux用________________来解决存取权限的控制问题（重要的安全解决策略）。",
    "options": [],
    "answer": "文件存取控制表",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q065",
    "type": "fill",
    "stem": "普通权限三种________________,________________,________________.",
    "options": [],
    "answer": "读权限（r）  写权限（w）  执行权（x）",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q066",
    "type": "fill",
    "stem": "UNIX/Linux系统对文件操作的三种权限只对三类人分配，分别是________________,________________,________________.",
    "options": [],
    "answer": "用户主（user：u）、同组人（group：g）和其他人（other：o）。",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q067",
    "type": "fill",
    "stem": "目录/dev的权限为rwxr-xr-x，转换为八进制后可以说/dev的权限为________________.",
    "options": [],
    "answer": "755",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q068",
    "type": "fill",
    "stem": "文件或目录的默认权限由________________来控制，是权限的“补码”。默认情况，root的umask值为________________.(首位特殊)",
    "options": [],
    "answer": "文件权限掩码(umask)   0022",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q069",
    "type": "fill",
    "stem": "改变文件的权限________________.",
    "options": [],
    "answer": "chmod",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q070",
    "type": "fill",
    "stem": "目录/dev的权限为rwxrx---- umask值为________________.",
    "options": [],
    "answer": "0027",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q071",
    "type": "fill",
    "stem": "将/class中的所有文件和各级子目录及内容权限设置为755________________",
    "options": [],
    "answer": "chmod -R 755 /class/*",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q072",
    "type": "fill",
    "stem": "________________有权使用chown.",
    "options": [],
    "answer": "超级用户",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q073",
    "type": "fill",
    "stem": "IDE硬盘设备的形式为________________.",
    "options": [],
    "answer": "/dev/hdmn",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q074",
    "type": "fill",
    "stem": "SCSI存储设备的形式为________________.",
    "options": [],
    "answer": "/dev/sdmn",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q075",
    "type": "fill",
    "stem": "用于管理硬盘上分区的命令有________________和________________,主要目的是用于对磁盘分区的显示与查询.",
    "options": [],
    "answer": "fdisk parted",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q076",
    "type": "fill",
    "stem": "显示硬盘/dev/sda的分区信息________________.",
    "options": [],
    "answer": "fdisk -l /dev/sda",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q077",
    "type": "fill",
    "stem": "在移动磁盘上创建ext2文件系统的命令是________________.",
    "options": [],
    "answer": "mkfs -t ext2 /dev/sdb",
    "explain": "",
    "keywords": []
  },
  {
    "id": "q078",
    "type": "fill",
    "stem": "将U盘上vfat格式的系统安装在/mnt/fd上________________.",
    "options": [],
    "answer": "mount -t vfat /dev/sdc /mnt/fd",
    "explain": "",
    "keywords": []
  }
];

/**
 * 获取题库统计信息
 */
export function getQuestionBankStats() {
  const stats = {
    total: rawQuestions.length,
    single: rawQuestions.filter(q => q.type === 'single').length,
    multi: rawQuestions.filter(q => q.type === 'multi').length,
    boolean: rawQuestions.filter(q => q.type === 'boolean').length,
    fill: rawQuestions.filter(q => q.type === 'fill').length,
    isComplete: rawQuestions.length > 0,
  };
  return stats;
}

/**
 * 根据 ID 获取题目
 */
export function getQuestionById(id: string): Question | undefined {
  return rawQuestions.find(q => q.id === id);
}

/**
 * 根据类型获取题目列表
 */
export function getQuestionsByType(type: 'single' | 'multi' | 'boolean' | 'fill'): Question[] {
  return rawQuestions.filter(q => q.type === type);
}

/**
 * 获取随机题目
 */
export function getRandomQuestions(count: number): Question[] {
  const shuffled = [...rawQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, rawQuestions.length));
}

/**
 * 生成考试题目（25题：20道填空+5道选择）
 */
export function getExamQuestions(): Question[] {
  // 固定配置：25题 = 20填空 + 5选择（单选）
  const fillCount = 20;
  const singleCount = 5;
  
  // 获取所有题目
  const fillQuestions = getQuestionsByType('fill');
  const singleQuestions = getQuestionsByType('single');
  
  // 随机抽取
  const selectedFill = fillQuestions.sort(() => Math.random() - 0.5).slice(0, Math.min(fillCount, fillQuestions.length));
  const selectedSingle = singleQuestions.sort(() => Math.random() - 0.5).slice(0, Math.min(singleCount, singleQuestions.length));
  
  // 合并并乱序
  return [...selectedFill, ...selectedSingle].sort(() => Math.random() - 0.5);
}
