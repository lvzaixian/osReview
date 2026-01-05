/**
 * Linux核心考点数据
 * 从重点.md提炼的Linux操作系统核心考点,按章节分类
 * 帮助用户在背题前快速掌握必考知识点
 */

export interface KnowledgeCard {
  id: string;
  title: string;
  keyPoints: string[];
  tips?: string;
  story?: string; // 场景化联想
  relatedQuestions: string[]; // 相关题目ID
}

export interface KnowledgeModule {
  id: string;
  name: string;
  icon: string;
  color: string; // Tailwind color class
  cards: KnowledgeCard[];
}

export const KNOWLEDGE_MODULES: KnowledgeModule[] = [
  {
    id: 'ch1-2-security',
    name: '第一章/第二章：系统安全管理',
    icon: '🔒',
    color: 'red',
    cards: [
      {
        id: 'os-security-goals',
        title: '操作系统安全管理的7大目标 <mark>【考点:操作系统安全管理的目标】</mark>',
        keyPoints: [
          '<kw>访问控制</kw>：防止非法访问资源（<kw>窃取、篡改、破坏</kw>）',
          '<kw>身份鉴别</kw>：<kw>标识并验证</kw>用户身份',
          '<kw>安全监督</kw>：<kw>监控系统运行</kw>的安全性',
          '<kw>自身安全</kw>：保证系统自身的<kw>安全性和完整性</kw>',
          '<kw>访问控制机制</kw>：<kw>自主访问控制、强制访问控制、客体重用</kw>',
          '<kw>追究机制</kw>：<kw>标识与鉴别、可信路径、安全审计</kw>',
          '<kw>连续保护机制</kw>：<kw>系统完整性、隐蔽通道分析、最小特权管理、可信恢复</kw>'
        ],
        tips: '🎯 助记口诀：<mark>访身监自，访追保</mark>（访问、身份、监督、自身、访问机制、追究机制、保护机制）',
        story: '🚨 场景联想：<strong>访客</strong>（访问控制）进门先<strong>亮身份证</strong>（身份鉴别），保安<strong>监控</strong>（安全监督）并保护<strong>自己</strong>（自身安全），后面还要<strong>追查访问记录</strong>（追究+访问机制）并<strong>持续保护</strong>（连续保护）。',
        relatedQuestions: []
      },
      {
        id: 'linux-history',
        title: 'Linux系统简介 <mark>【考点:Linux 系统简介】</mark>',
        keyPoints: [
          '<strong>Minix</strong>：<kw>荷兰科学家Andy Tanenbaum</kw>开发的<kw>类Unix系统</kw>（教学用）',
          '<strong>Linux诞生</strong>：<kw>芬兰学生Linus Torvalds</kw>在Minix基础上编写，<kw>1991年10月</kw>发布0.0.2版',
          '<strong>发行套件</strong>：<kw>公司对内核打包改进</kw>形成产品（如RedHat 9.0）',
          '<strong>当前版本</strong>：内核<kw>Kernel 2.6</kw>'
        ],
        tips: '💡 记住：<mark>Andy的Minix → Linus的Linux</mark>',
        story: '📖 场景联想：荷兰<strong>教授Andy</strong>写了个<strong>迷你教学系统</strong>（Minix），芬兰<strong>学生Linus</strong>看不过瘾于是<strong>自己造轮子</strong>（1991），后来各大<strong>公司打包卖</strong>（发行套件）。',
        relatedQuestions: []
      },
      {
        id: 'shutdown-commands',
        title: 'Linux关机/重启命令 <mark>【考点:Linux 开关机命令】</mark>',
        keyPoints: [
          '<strong>5大命令</strong>：<kw>halt、reboot、poweroff、shutdown、init</kw>',
          '<strong>区别</strong>：每个命令<kw>工作过程不同</kw>，但都能关机/重启'
        ],
        tips: '🎯 助记：<mark>哈瑞宝收印</mark>（halt、reboot、poweroff、shutdown、init）',
        story: '🔌 场景联想：电脑关机有<strong>5种姿势</strong>：<strong>停止</strong>（halt）、<strong>重启</strong>（reboot）、<strong>断电</strong>（poweroff）、<strong>定时关机</strong>（shutdown）、<strong>切换运行级别</strong>（init）。',
        relatedQuestions: []
      }
    ]
  },
  {
    id: 'ch3-shell',
    name: '第三章：Shell与文件系统',
    icon: '📁',
    color: 'blue',
    cards: [
      {
        id: 'shell-basics',
        title: 'Shell功能与种类 <mark>【考点:Shell 的功能】</mark>',
        keyPoints: [
          '<strong>定义</strong>：操作系统的<kw>命令解释程序</kw>，<kw>接收并执行用户命令</kw>',
          '<strong>6大功能</strong>：<kw>命令解释执行、文件名及管理、I/O重定向、通信管道建立、系统环境设置、shell编程</kw>',
          '<strong>常用种类</strong>：<kw>ash、bash、tcsh</kw>（功能基本相同）'
        ],
        tips: '🎯 助记：<mark>命文IO管环编</mark>（命令、文件、IO、管道、环境、编程）',
        story: '🗣️ 场景联想：Shell是<strong>系统的翻译官</strong>，你说<strong>人话</strong>（命令），它翻译成<strong>机器语</strong>。它有<strong>6项技能</strong>：听懂你的话、管理文件、改变输入输出方向、搭建通信管道、设置环境、还能自己写脚本。',
        relatedQuestions: []
      },
      {
        id: 'escape-chars',
        title: '转义字符 <mark>【考点:转义字符】</mark>',
        keyPoints: [
          '<strong>定义</strong>：<kw>反斜杠\\</kw>，用于表示特殊字符',
          '<strong>常用</strong>：<kw>\\a响铃、\\b退格、\\f换页、\\n换行、\\r回车、\\t Tab</kw>',
          '<strong>进制</strong>：<kw>\\x??（16进制）、\\0???（8进制）</kw>',
          '<strong>转义自身</strong>：<kw>\\\\表示\\、\\`表示`、\\\"表示"</kw>'
        ],
        tips: '💡 <mark>反斜杠\\是转义字符</mark>，作用类似C语言',
        story: '✨ 场景联想：反斜杠\\u662f<strong>魔法棒</strong>，点一下字母就<strong>变身</strong>：\\n变换行符、\\t变Tab键、\\a变响铃。它还能<strong>自我复制</strong>：\\\\表示自己。就像<strong>双重身份</strong>：平时是普通斜杠，加上反斜杠前缀就有了<strong>特异功能</strong>。',
        relatedQuestions: []
      },
      {
        id: 'file-types',
        title: 'Linux三种基本文件类型 <mark>【考点:文件类型】</mark>',
        keyPoints: [
          '<kw>普通文件</kw>：<kw>存储数据</kw>的常规文件',
          '<kw>目录文件</kw>：至少包含<kw>. 和 .. 两项</kw>（<kw>当前目录和上级目录</kw>）',
          '<kw>设备文件</kw>：<kw>代表硬件设备</kw>的特殊文件',
          '<strong>根目录</strong>：<kw>目录也是文件</kw>，命名规则与文件相同'
        ],
        tips: '🎯 <mark>. 是当前目录，.. 是上级目录</mark>',
        story: '📁 场景联想：Linux文件系统像<strong>三层文件柜</strong>：第一层放<strong>普通文件</strong>（笔记本），第二层放<strong>目录文件</strong>（文件夹，内有.和..两个标签指示位置），第三层放<strong>设备文件</strong>（说明书，指向硬件）。',
        relatedQuestions: []
      },
      {
        id: 'pipes',
        title: '管道类型 <mark>【考点:管道的定义】</mark>',
        keyPoints: [
          '<kw>无名管道</kw>：用于<kw>父子进程通信</kw>，进程结束后<kw>自动消失</kw>',
          '<kw>命名管道</kw>：<kw>以文件形式存在</kw>，<kw>无家族关系进程也能用</kw>，<kw>不主动删除不会消失</kw>'
        ],
        tips: '💡 <mark>无名管道临时用，命名管道持久存</mark>',
        story: '🚧 场景联想：管道是<strong>进程间的对讲机</strong>。<strong>无名管道</strong>像<strong>一次性纸杯电话</strong>（父子专用，打完就扫）；<strong>命名管道</strong>像<strong>固定电话亭</strong>（任何人都能用，一直在那里）。',
        relatedQuestions: []
      },
      {
        id: 'links',
        title: '硬链接 vs 软链接(符号链接) <mark>【考点:两类文件链接(软链接/硬链接)】</mark>',
        keyPoints: [
          '<strong>硬链接</strong>：<kw>相同inode</kw>、<kw>不能链接目录</kw>、<kw>删除原文件链接仍有效</kw>、<kw>共享文件内容</kw>',
          '<strong>软链接</strong>：<kw>不同inode</kw>、<kw>可链接目录</kw>、<kw>删除原文件变悬空</kw>、<kw>存储路径不是内容</kw>'
        ],
        tips: '🎯 <mark>硬链接=多个门牌同一家，软链接=快捷方式指向家</mark>',
        story: '🔗 场景联想：<strong>硬链接</strong>像<strong>同一房子的多个门</strong>（同inode，同一家），关一个门其他门还能进（删除原文件仍有效）。<strong>软链接</strong>像<strong>桌面快捷方式</strong>（不同inode，只存路径），原文件删了快捷方式就<strong>悬空了</strong>。',
        relatedQuestions: []
      },
      {
        id: 'paths',
        title: '绝对路径 vs 相对路径 <mark>【考点:相对路径和绝对路径】</mark>',
        keyPoints: [
          '<kw>绝对路径</kw>：<kw>从根目录/开始</kw>，<kw>确定不变</kw>',
          '<kw>相对路径</kw>：<kw>从当前工作目录开始</kw>，<kw>随工作目录变化而变化</kw>',
          '<strong>路径表示</strong>：用<kw>/分隔</kw>的目录名链接'
        ],
        tips: '💡 <mark>绝对路径以/开头，相对路径不以/开头</mark>',
        story: '🗺️ 场景联想：<strong>绝对路径</strong>像<strong>GPS坐标</strong>（从地球/开始，永远不变），<strong>相对路径</strong>像<strong>“向右走50米”</strong>（从你所在地开始，你换个地方就变了）。',
        relatedQuestions: []
      },
      {
        id: 'io-redirect',
        title: 'I/O重定向 <mark>【考点:输入输出重定向】</mark>',
        keyPoints: [
          '<strong>输入重定向 &lt;</strong>：<kw>让命令从文件读取输入</kw>（如：wc &lt; /etc/passwd）',
          '<strong>输出重定向 &gt;</strong>：<kw>覆盖方式</kw>保存输出到文件',
          '<strong>输出追加 &gt;&gt;</strong>：<kw>追加方式</kw>保存输出到文件',
          '<strong>副作用</strong>：<kw>可能覆盖已有文件、可能追加无意义信息</kw>'
        ],
        tips: '🎯 <mark>&lt;输入 &gt;覆盖输出 &gt;&gt;追加输出</mark>',
        story: '🔀 场景联想：I/O重定向像<strong>水管接头</strong>。<strong>&lt;输入</strong>是<strong>从水桶取水</strong>（从文件读），<strong>&gt;输出</strong>是<strong>倒满水桶</strong>（覆盖），<strong>&gt;&gt;追加</strong>是<strong>往水桶继续加水</strong>。小心<strong>倒满别人的水</strong>！',
        relatedQuestions: []
      },
      {
        id: 'env-vars',
        title: '环境变量管理 <mark>【考点:查看或设置环境变量】</mark>',
        keyPoints: [
          '<strong>定义</strong>：Shell定义的<kw>控制程序执行</kw>或<kw>提供环境支持</kw>的变量',
          '<strong>查看命令</strong>：<kw>env、export、set</kw>（显示所有环境变量）',
          '<strong>特点</strong>：用户可<kw>自定义环境变量</kw>'
        ],
        tips: '💡 <mark>export/env查看环境变量</mark>',
        story: '🌍 场景联想：环境变量是<strong>系统的配置文件</strong>，就像<strong>游戏设置</strong>：语言、分辨率、声音大小。用<strong>env/export</strong>是<strong>打开设置面板</strong>，看所有配置。',
        relatedQuestions: []
      },
      {
        id: 'ls-command',
        title: 'ls命令组合拳 <mark>【考点:ls 命令和示例】</mark>',
        keyPoints: [
          '<strong>-l</strong>：<kw>长格式显示</kw>（详细信息）',
          '<strong>-t</strong>：<kw>按修改时间排序</kw>',
          '<strong>-r</strong>：<kw>反向排序</kw>',
          '<strong>-R</strong>：<kw>递归显示子目录</kw>',
          '<strong>-a</strong>：<kw>显示隐藏文件</kw>（含.和..）',
          '<strong>-A</strong>：<kw>显示几乎所有</kw>（不含.和..）',
          '<strong>-d</strong>：<kw>显示目录本身</kw>',
          '<strong>-F</strong>：<kw>文件名后加类型标识</kw>',
          '<strong>-i</strong>：<kw>显示inode编号</kw>'
        ],
        tips: '🎯 <mark>ls -ltr</mark>：长格式+时间+倒序，查最新文件必备',
        story: '📊 场景联想：ls是<strong>文件夹的显微镜</strong>，加上不同镜头：<strong>-l高清镜头</strong>（详细信息）、<strong>-t时间排序</strong>、<strong>-r反向播放</strong>、<strong>-a红外镜头</strong>（看隐藏文件）。<strong>-ltr组合拳</strong>：高清+时间倒序，<strong>找最新文件神器</strong>！',
        relatedQuestions: []
      },
      {
        id: 'more-less',
        title: 'more/less分页查看 <mark>【考点:more 和 less 的用法】</mark>',
        keyPoints: [
          '<strong>more</strong>：<kw>分页显示文件</kw>，<kw>空格翻页、q退出</kw>',
          '<strong>-d</strong>：<kw>显示提示信息</kw>',
          '<strong>-s</strong>：<kw>压缩连续空行</kw>',
          '<strong>+/pattern</strong>：<kw>从匹配处开始显示</kw>',
          '<strong>+linenum</strong>：<kw>从第N行开始</kw>',
          '<strong>less</strong>：more改进版，支持<kw>PgUp/PgDn、HOME/END</kw>'
        ],
        tips: '💡 <mark>more能前进，less能前进后退</mark>',
        story: '📚 场景联想：<strong>more</strong>是<strong>翻页器</strong>，像<strong>单向滚轴</strong>（只能往后翻），<strong>less</strong>是<strong>升级版</strong>，像<strong>PDF阅读器</strong>（可以前后翻页、跳转）。记住：<strong>less is more</strong>（功能更多）！',
        relatedQuestions: []
      },
      {
        id: 'vi-modes',
        title: 'vi三种工作模式 <mark>【考点:vi 的三种工作模式】</mark>',
        keyPoints: [
          '<kw>命令模式</kw>：进入vi时的<kw>默认模式</kw>，<kw>执行文件操作命令</kw>',
          '<kw>编辑模式</kw>：通过<kw>o/O/a/A/i/I进入</kw>，按<kw>Esc返回命令模式</kw>',
          '<kw>底行模式</kw>：命令模式下<kw>输入:进入</kw>，<kw>执行保存/退出等操作</kw>'
        ],
        tips: '🎯 <mark>Esc回命令模式，:进底行模式</mark>',
        story: '✏️ 场景联想：vi编辑器有<strong>三种人格</strong>：<strong>命令模式</strong>是<strong>指挥官</strong>（默认，发命令），<strong>编辑模式</strong>是<strong>作家</strong>（i/a/o变身，写东西），<strong>底行模式</strong>是<strong>秘书</strong>（:召唤，保存退出）。按<strong>Esc回指挥官</strong>！',
        relatedQuestions: []
      },
      {
        id: 'signals',
        title: '进程与信号 <mark>【考点:进程和信号】</mark>',
        keyPoints: [
          '<strong>信号</strong>：Linux响应某些状况产生的<kw>事件</kw>，用于<kw>进程间通信</kw>',
          '<strong>命令</strong>：<kw>kill（发送信号）、trap（捕获信号）</kw>'
        ],
        tips: '💡 <mark>信号是进程间通信的方式，实现进程控制</mark>',
        story: '📡 场景联想：信号是<strong>进程间的短信</strong>。<strong>kill</strong>是<strong>发短信</strong>（发信号），<strong>trap</strong>是<strong>设置收信规则</strong>（捕获信号）。kill不仅能<strong>杀进程</strong>，还能<strong>发各种指令</strong>（暂停、继续、重启）。',
        relatedQuestions: []
      },
      {
        id: 'alias',
        title: '别名管理alias/unalias <mark>【考点:别名管理 alias/unalias】</mark>',
        keyPoints: [
          '<strong>alias</strong>：<kw>定义命令别名</kw>（如：alias ll="ls -l"）',
          '<strong>alias -p</strong>：<kw>显示所有别名</kw>',
          '<strong>unalias name</strong>：<kw>取消指定别名</kw>',
          '<strong>unalias -a</strong>：<kw>取消所有别名</kw>',
          '<strong>常见别名</strong>：<kw>ll、root用户的cp/mv</kw>'
        ],
        tips: '🎯 <mark>alias定义别名，unalias取消别名</mark>',
        story: '🏷️ 场景联想：alias是<strong>命令的外号</strong>，像<strong>给人起绐号</strong>。比如<strong>ll</strong>是<strong>ls -l</strong>的外号（短一点好记），root用户的<strong>cp自动带-i</strong>（防止误删）。<strong>unalias</strong>是<strong>撤销外号</strong>。',
        relatedQuestions: []
      }
    ]
  },
  {
    id: 'ch4-users',
    name: '第四章：用户与权限管理',
    icon: '👤',
    color: 'green',
    cards: [
      {
        id: 'users-groups',
        title: '用户与用户组 <mark>【考点:用户与用户组,超级用户和一般用户】</mark>',
        keyPoints: [
          '<strong>用户</strong>：必须以<kw>已存在用户身份登录</kw>，通过<kw>密码验证</kw>',
          '<kw>超级用户</kw>：<kw>至高无上权力</kw>，可做任何操作',
          '<kw>一般用户</kw>：只能在<kw>给定权限范围内工作</kw>',
          '<kw>用户组</kw>：<kw>不同组用户享有某些共同权限</kw>'
        ],
        tips: '💡 <mark>超级用户责任最大，安全性要求最高</mark>',
        story: '👥 场景联想：Linux用户系统像<strong>公司的员工系统</strong>。<strong>超级用户</strong>是<strong>老板</strong>（权力最大），<strong>一般用户</strong>是<strong>普通员工</strong>（只能在自己岗位工作），<strong>用户组</strong>是<strong>部门</strong>（同部门共享某些权限）。',
        relatedQuestions: []
      },
      {
        id: 'uid-gid',
        title: 'uid与gid概念 <mark>【考点:uid 与 gid 的概念】</mark>',
        keyPoints: [
          '<strong>uid</strong>：<kw>用户标识</kw>（user identification），<kw>系统辨识用户的唯一标识</kw>',
          '<strong>用户名</strong>：用户的<kw>外部表示</kw>，uid是<kw>内部标识</kw>',
          '<strong>gid</strong>：<kw>组标识</kw>（group identification）',
          '<strong>存储</strong>：<kw>用户信息存/etc/passwd，组信息存/etc/group</kw>',
          '<strong>查询</strong>：使用<kw>id命令</kw>查询uid和gid'
        ],
        tips: '🎯 <mark>/etc/passwd存用户，/etc/group存组</mark>',
        story: '🎫 场景联想：uid/gid像<strong>员工工号</strong>。<strong>用户名</strong>是<strong>姓名</strong>（外部表示），<strong>uid</strong>是<strong>工号</strong>（系统内部用）。<strong>/etc/passwd</strong>是<strong>员工花名册</strong>，<strong>/etc/group</strong>是<strong>部门花名册</strong>。用<strong>id命令</strong>是<strong>查工牌</strong>。',
        relatedQuestions: []
      },
      {
        id: 'passwd-shadow',
        title: '/etc/passwd与/etc/shadow <mark>【考点:/etc/passwd、/etc/shadow 文件内容】</mark>',
        keyPoints: [
          '<strong>/etc/passwd结构</strong>：<kw>username:password:uid:gid:comment:dir:shell</kw>',
          '<strong>username</strong>：用户名，<kw>必须以字符开始，只能小写字母</kw>',
          '<strong>uid</strong>：用户标识号，<kw>一般用户UID_MIN≤uid≤UID_MAX</kw>',
          '<strong>dir</strong>：<kw>用户家目录</kw>，<kw>登录成功后的工作目录</kw>',
          '<strong>shell</strong>：<kw>用户登录后使用的shell程序</kw>',
          '<strong>/etc/shadow</strong>：<kw>影子密码文件</kw>，存<kw>加密密码和登录控制信息</kw>',
          '<strong>shadow字段</strong>：<kw>用户名、加密密码、最后修改日期、密码有效期等</kw>'
        ],
        tips: '⚠️ /etc/passwd和/etc/shadow安全性要求最高',
        story: '📝 场景联想：<strong>/etc/passwd</strong>是<strong>员工花名册</strong>（公开，7个字段：姓名:密码:工号:部门:备注:家址:工具），<strong>/etc/shadow</strong>是<strong>加密保险柜</strong>（存真密码和过期信息）。为什么分开？<strong>防止密码泄露</strong>！',
        relatedQuestions: []
      },
      {
        id: 'user-commands',
        title: '用户管理命令 <mark>【考点:用户添加和删除】</mark>',
        keyPoints: [
          '<strong>useradd</strong>：<kw>创建新用户</kw>',
          '<strong>usermod</strong>：<kw>修改用户属性</kw>',
          '<strong>userdel</strong>：<kw>删除用户</kw>',
          '<strong>passwd</strong>：<kw>设置或修改密码</kw>',
          '<strong>whoami</strong>：<kw>显示当前用户名</kw>（相当于id -un）'
        ],
        tips: '💡 <mark>用户管理三大件：useradd、usermod、userdel</mark>',
        story: '🛠️ 场景联想：用户管理命令是<strong>HR系统</strong>。<strong>useradd</strong>是<strong>招新人</strong>，<strong>usermod</strong>是<strong>调岗或改信息</strong>，<strong>userdel</strong>是<strong>离职</strong>，<strong>passwd</strong>是<strong>改密码</strong>（重置门禁卡），<strong>whoami</strong>是<strong>报工号</strong>。',
        relatedQuestions: []
      },
      {
        id: 'password-tips',
        title: '密码设置注意事项 <mark>【考点:密码设置注意事项】</mark>',
        keyPoints: [
          '<kw>定期修改</kw>：按规定<kw>定期或不定期修改密码</kw>',
          '<kw>避免简单</kw>：<kw>不含完整单词、生日、电话、姓名、用户名等</kw>',
          '<kw>区分系统</kw>：<kw>不同系统和用户应有不同密码</kw>',
          '<kw>易记勿写</kw>：<kw>密码应易记且不要写在纸上</kw>',
          '<kw>保密</kw>：<kw>不共用密码，输入时不让人看见</kw>'
        ],
        tips: '🔐 密码安全6原则：<mark>定期、复杂、区分、易记、保密、不共享</mark>',
        story: '🔒 场景联想：密码像<strong>家门钥匙</strong>。<strong>定期换锁</strong>（定期改），<strong>不用123456</strong>（避免简单），<strong>家门和公司门用不同钥匙</strong>（区分系统），<strong>记在脑子不写纸上</strong>（易记勿写），<strong>不借人也不被偷窥</strong>（保密）。',
        relatedQuestions: []
      },
      {
        id: 'su-sudo',
        title: 'su与sudo区别 <mark>【考点:su 和 sudo 的区别】</mark>',
        keyPoints: [
          '<strong>su</strong>：<kw>切换到新用户身份</kw>，<kw>有效uid/gid变为新用户的uid/gid</kw>',
          '<strong>su用法</strong>：<kw>su [options] [-] [newuser [args]]</kw>',
          '<strong>sudo</strong>：允许用户以<kw>超级用户或其他用户身份执行命令</kw>',
          '<strong>sudo用法</strong>：<kw>sudo [-bH] [-p str] [-u user] [-g group] {-s|cmd}</kw>',
          '<strong>区别</strong>：<kw>su切换身份，sudo临时提权执行命令</kw>'
        ],
        tips: '💡 <mark>su切换用户，sudo借权执行</mark>',
        story: '🔑 场景联想：<strong>su</strong>是<strong>变身术</strong>（切换身份，完全变成另一个人），<strong>sudo</strong>是<strong>借传送门</strong>（临时借用超级权限，用完就还）。比如你要开门：<strong>su</strong>是<strong>变成老板</strong>，<strong>sudo</strong>是<strong>借老板钥匙开门</strong>。',
        relatedQuestions: []
      }
    ]
  },
  {
    id: 'ch5-permissions',
    name: '第五章：文件权限与存储',
    icon: '🔑',
    color: 'orange',
    cards: [
      {
        id: 'three-permissions',
        title: '三种基本权限 <mark>【考点:三种权限(读/写/执行)】</mark>',
        keyPoints: [
          '<kw>读权限 r</kw>：<kw>查看文件或目录内容</kw>',
          '<kw>写权限 w</kw>：<kw>修改文件，在目录内创建文件或子目录</kw>',
          '<kw>执行权 x</kw>：<kw>执行文件，或进入目录</kw>',
          '<strong>数字表示</strong>：<kw>r=4、w=2、x=1</kw>，<kw>三位二进制数转八进制</kw>',
          '<strong>示例</strong>：<kw>rwxr-xr-x = 755</kw>（主7、组5、其他5）'
        ],
        tips: '🎯 <mark>r4w2x1，二进制111=7，101=5</mark>',
        story: '🔐 场景联想：文件权限像<strong>房门钥匙</strong>。<strong>r读</strong>是<strong>透明窗</strong>（看得见），<strong>w写</strong>是<strong>改造权</strong>（能装修），<strong>x执行</strong>是<strong>房门钥匙</strong>（能进入）。数字是<strong>421二进制编码</strong>：111=7（全有），101=5（读+执行）。',
        relatedQuestions: []
      },
      {
        id: 'umask',
        title: '文件创建掩码umask <mark>【考点:掩码的概念(umask)】</mark>',
        keyPoints: [
          '<strong>定义</strong>：控制新建文件/目录默认权限的<kw>“补码”</kw>',
          '<strong>默认值</strong>：<kw>root的umask=0022，普通用户=0002</kw>',
          '<strong>计算</strong>：<kw>新文件权限=777-umask</kw>，再<kw>去除可执行权</kw>（文件默认不可执行）',
          '<strong>示例</strong>：<kw>umask=022，目录权限=755，文件权限=644</kw>'
        ],
        tips: '💡 <mark>umask是权限的"补码"，777-umask=初始权限</mark>',
        story: '🎭 场景联想：umask像<strong>默认隔音板</strong>（掩住某些权限）。<strong>777是全开</strong>（全员杀青），<strong>umask=022</strong>是<strong>掩住写权限</strong>（别人不能乱改），剩下<strong>755</strong>。文件还要<strong>去掉x</strong>（防止误执行）变<strong>644</strong>。',
        relatedQuestions: []
      },
      {
        id: 'chmod-chown',
        title: 'chmod与chown命令 <mark>【考点:改变文件权限和所有者(chmod/chown)】</mark>',
        keyPoints: [
          '<strong>chmod</strong>：<kw>改变文件或目录的访问权限</kw>',
          '<strong>符号方式</strong>：<kw>chmod u+r file</kw>（用户加读权限）',
          '<strong>数值方式</strong>：<kw>chmod 755 file</kw>',
          '<strong>chown</strong>：<kw>改变文件所有者</kw>（修改uid）',
          '<strong>用法</strong>：<kw>chown owner[:group] file</kw>',
          '<strong>权限</strong>：只有<kw>超级用户能用chown</kw>'
        ],
        tips: '🔧 <mark>chmod改权限，chown改所有者</mark>',
        story: '🔨 场景联想：<strong>chmod</strong>是<strong>换锁</strong>（改权限，决定谁能进），<strong>chown</strong>是<strong>过户</strong>（换主人，只有房管局/root能办）。chmod有<strong>两种方式</strong>：<strong>u+r符号法</strong>（加钥匙）和<strong>755数字法</strong>（直接换锁）。',
        relatedQuestions: []
      },
      {
        id: 'scsi-naming',
        title: 'SCSI存储设备命名 <mark>【考点:SCSI 存储设备命名方式】</mark>',
        keyPoints: [
          '<strong>格式</strong>：<kw>/dev/sdmn</kw>（<kw>m=a,b,c...代表物理设备，n=1,2,3...代表分区</kw>）',
          '<strong>示例</strong>：<kw>/dev/sda是第1个SCSI硬盘</kw>',
          '<strong>分区</strong>：<kw>/dev/sda1、/dev/sda2分别是第1、2分区</kw>',
          '<strong>接口</strong>：SCSI是<kw>小型计算机接口</kw>，可接<kw>磁盘/磁带/光驱/扫描仪</kw>'
        ],
        tips: '💾 <mark>/dev/sda1：sd(SCSI)+a(第1块盘)+1(第1分区)</mark>',
        story: '💿 场景联想：硬盘命名像<strong>停车场编号</strong>。<strong>sd</strong>是<strong>场区</strong>（SCSI磁盘），<strong>a/b/c</strong>是<strong>楼层</strong>（第几块盘），<strong>1/2/3</strong>是<strong>车位号</strong>（第几分区）。所以<strong>/dev/sda1</strong>就是<strong>SCSI场-A楼-1号车位</strong>！',
        relatedQuestions: []
      },
      {
        id: 'mount-umount',
        title: '文件系统挂载 <mark>【考点:文件挂载】</mark>',
        keyPoints: [
          '<strong>流程</strong>：必须按<kw>“挂载→使用→卸载”顺序操作</kw>',
          '<strong>mount</strong>：<kw>安装文件系统到目录树</kw>',
          '<strong>umount</strong>：<kw>卸载文件系统</kw>',
          '<strong>挂载点</strong>：<kw>传统挂载点/mnt，自动挂载/media</kw>',
          '<strong>注意</strong>：<kw>强行取出介质可能造成文件系统损坏</kw>',
          '<strong>修复</strong>：受损文件系统需用<kw>fsck清理修复</kw>'
        ],
        tips: '⚠️ <mark>挂载→使用→卸载，强行取出会损坏文件系统</mark>',
        story: '💿 场景联想：挂载U盘像<strong>接驳马</strong>。<strong>mount</strong>是<strong>给马套鞍</strong>（接入目录树），<strong>umount</strong>是<strong>解鞍</strong>（安全移除）。<strong>强行拔U盘</strong>是<strong>把马直接抽走</strong>（文件系统损坏），需要<strong>fsck兽医</strong>来修！',
        relatedQuestions: []
      },
      {
        id: 'find-ln',
        title: 'find与ln命令 <mark>【考点:find;ln 的用法和区别】</mark>',
        keyPoints: [
          '<strong>find</strong>：<kw>从文件系统中查找文件位置</kw>',
          '<strong>find用法</strong>：<kw>find [path] [expression]</kw>',
          '<strong>ln</strong>：<kw>链接管理，创建硬链接和符号链接</kw>',
          '<strong>ln格式1</strong>：<kw>ln target linkname</kw>（创建链接）',
          '<strong>ln格式2</strong>：<kw>ln target</kw>（当前目录创建同名链接）',
          '<strong>符号链接</strong>：使用<kw>-s选项</kw>（ln -s target link）'
        ],
        tips: '💡 <mark>find查文件，ln做链接</mark>',
        story: '🔍 场景联想：<strong>find</strong>是<strong>搜索雷达</strong>（全盘扫描找文件），<strong>ln</strong>是<strong>搭桥梁</strong>（创建链接）。ln有<strong>两种桥</strong>：<strong>硬链接</strong>是<strong>钢筋水泥桥</strong>（同一家），<strong>软链接-s</strong>是<strong>指示牌</strong>（快捷方式）。',
        relatedQuestions: []
      },
      {
        id: 'df-du',
        title: 'df与du区别 <mark>【考点:df 和du 的区别】</mark>',
        keyPoints: [
          '<strong>df</strong>：<kw>显示文件系统使用情况</kw>（<kw>磁盘空间</kw>）',
          '<strong>df用法</strong>：<kw>df [options] [filesystem]</kw>',
          '<strong>du</strong>：<kw>统计文件或目录大小</kw>',
          '<strong>du用法</strong>：<kw>du [options] [names]</kw>',
          '<strong>区别</strong>：<kw>df看整体磁盘空间，du看具体文件大小</kw>'
        ],
        tips: '🎯 <mark>df磁盘整体，du文件大小</mark>',
        story: '📏 场景联想：<strong>df</strong>是<strong>看水库总水量</strong>（磁盘整体空间），<strong>du</strong>是<strong>测每个水桶的水</strong>（具体文件/目录大小）。<strong>df</strong>看<strong>大局</strong>（还剩多少空间），<strong>du</strong>看<strong>细节</strong>（谁占用了多少）。',
        relatedQuestions: []
      }
    ]
  },
  {
    id: 'ch6-process',
    name: '第六章：进程管理',
    icon: '⚙️',
    color: 'purple',
    cards: [
      {
        id: 'program-process',
        title: '程序、进程、作业、任务概念 <mark>【考点:程序、进程、作业、任务的概念】</mark>',
        keyPoints: [
          '<kw>程序</kw>：<kw>存储在介质上的可执行文件</kw>（<kw>静态</kw>）',
          '<kw>进程</kw>：<kw>程序的动态执行过程</kw>',
          '<kw>并发并行</kw>：<kw>多进程同时运行</kw>，<kw>同一程序可多次运行</kw>',
          '<kw>进程标识</kw>：每个进程有<kw>唯一的进程ID（PID）</kw>',
          '<kw>作业/任务</kw>：<kw>用户要求计算机完成的工作集合</kw>，可能需要<kw>多个程序联合完成</kw>'
        ],
        tips: '💡 <mark>程序是静态文件，进程是动态执行</mark>',
        story: '🎬 场景联想：<strong>程序</strong>是<strong>电影剧本</strong>（静态文本），<strong>进程</strong>是<strong>正在拍摄的电影</strong>（动态执行）。同一剧本可以<strong>同时多机机位拍摄</strong>（多进程），每个机位有<strong>独特编号</strong>（PID）。',
        relatedQuestions: []
      },
      {
        id: 'process-0-1',
        title: '0号进程与1号进程 <mark>【考点:0 1 进程的区别】</mark>',
        keyPoints: [
          '<kw>0号进程</kw>：<kw>唯一只在核心态执行的进程</kw>',
          '<strong>0号功能</strong>：<kw>调度分配处理机、负责进程交换、初始化时创建1号进程</kw>',
          '<kw>空闲进程</kw>：Linux中<kw>0号创建1号后变成空闲进程</kw>，<kw>系统无就绪进程时才运行</kw>',
          '<kw>1号进程</kw>：<kw>系统初始化进程</kw>（<kw>init或systemd</kw>）'
        ],
        tips: '🎯 <mark>0号是老大哥创世者，1号是init初始化</mark>',
        story: '👑 场景联想：<strong>0号进程</strong>是<strong>开天辟地的盘古</strong>（核心态，调度一切），创造了<strong>1号人类祖先</strong>（init初始化）后自己<strong>退休变空闲进程</strong>（没人干活才出来）。',
        relatedQuestions: []
      },
      {
        id: 'ps-command',
        title: 'ps进程状态查询 <mark>【考点:进程状态查询 ps】</mark>',
        keyPoints: [
          '<strong>功能</strong>：<kw>显示进程状态和信息的快照</kw>',
          '<strong>ps -el</strong>：<kw>长格式显示所有进程</kw>',
          '<strong>ps -Af | more</strong>：<kw>显示所有进程及参数，分屏显示</kw>',
          '<strong>ps -t tty1</strong>：<kw>查询与终端相关的进程</kw>',
          '<strong>ps -f -u username</strong>：<kw>查询与用户相关的进程</kw>',
          '<strong>ps -axj</strong>：<kw>查询整个系统进程信息</kw>'
        ],
        tips: '💡 <mark>ps配合kill结束失控或不必要的进程</mark>',
        story: '🔎 场景联想：<strong>ps</strong>是<strong>进程的监控摄像头</strong>（拍快照）。<strong>-el</strong>是<strong>全景镜头</strong>（所有进程），<strong>-u username</strong>是<strong>人脸识别</strong>（过滤用户），配合<strong>kill</strong>可以<strong>杀掉失控进程</strong>！',
        relatedQuestions: []
      },
      {
        id: 'suid-sgid-sticky',
        title: 'suid/sgid/sticky特殊权限 <mark>【考点:suid/sgid/sticky 的数字表示】</mark>',
        keyPoints: [
          '<kw>suid</kw>：<kw>4xxx</kw>，<kw>执行时拥有文件所有者权限</kw>',
          '<kw>sgid</kw>：<kw>2xxx</kw>，<kw>执行时拥有文件组权限</kw>',
          '<kw>sticky</kw>：<kw>1xxx</kw>，<kw>目录下文件只有所有者能删除</kw>',
          '<strong>字符方式</strong>：<kw>chmod u+s file</kw>（设置suid）',
          '<strong>数字方式</strong>：<kw>chmod 4755 file</kw>（<kw>suid=4, sgid=2, sticky=1</kw>）',
          '<strong>示例</strong>：<kw>chmod 6777 file</kw>（同时设置suid+sgid）'
        ],
        tips: '🎯 <mark>4是suid，2是sgid，1是sticky</mark>',
        story: '🎭 场景联想：特殊权限像<strong>代理权</strong>。<strong>suid=4</strong>是<strong>借主人身份</strong>（执行时变主人），<strong>sgid=2</strong>是<strong>借组身份</strong>，<strong>sticky=1</strong>是<strong>防删贴纸</strong>（公共目录别人不能删我文件）。',
        relatedQuestions: []
      },
      {
        id: 'kill-killall',
        title: 'kill与killall <mark>【考点:killall/kill】</mark>',
        keyPoints: [
          '<strong>kill</strong>：<kw>向指定PID的进程发送信号</kw>',
          '<strong>kill用法</strong>：<kw>kill [-signal] PID</kw>',
          '<strong>killall</strong>：<kw>向指定进程名的所有进程发送信号</kw>',
          '<strong>killall用法</strong>：<kw>killall [-signal] name</kw>',
          '<strong>区别</strong>：<kw>kill用PID，killall用进程名（可能一次杀多个）</kw>',
          '<strong>常用信号</strong>：<kw>-9强制终止，-15正常终止</kw>'
        ],
        tips: '⚠️ killall可能杀掉多个同名进程，需谨慎',
        story: '🗡️ 场景联想：<strong>kill</strong>是<strong>狙击枪</strong>（精准杀一个PID），<strong>killall</strong>是<strong>散弹枪</strong>（按名字群杀）。<strong>-9</strong>是<strong>炸药弹</strong>（强制终止），<strong>-15</strong>是<strong>麻醉弹</strong>（正常终止）。killall谨慎用，<strong>别误伤！</strong>',
        relatedQuestions: []
      }
    ]
  },
  {
    id: 'ch7-network',
    name: '第七章：网络管理',
    icon: '🌐',
    color: 'cyan',
    cards: [
      {
        id: 'ping-command',
        title: 'ping命令',
        keyPoints: [
          '<strong>作用</strong>：<kw>测试网络是否连通</kw>',
          '<strong>原理</strong>：发送<kw>ICMP回显请求包</kw>，等待<kw>回显应答</kw>',
          '<strong>用法</strong>：<kw>ping 目标主机IP或域名</kw>',
          '<strong>常用选项</strong>：<kw>-c指定次数</kw>，<kw>-i指定间隔</kw>，<kw>-s指定包大小</kw>',
          '<strong>返回信息</strong>：<kw>时间TTL、往返时间RTT、丢包率</kw>'
        ],
        tips: '💡 <mark>ping是网络诊断第一工具</mark>',
        story: '📡 场景联想：<strong>ping</strong>是<strong>声呐探测器</strong>（发送声波回显）。发出<strong>ICMP请求包</strong>是<strong>喊"在吗？"</strong>，收到<strong>回显应答</strong>是对方<strong>"在！"</strong>。<strong>RTT</strong>是<strong>喊话往返时间</strong>，<strong>丢包</strong>是<strong>对方没听见</strong>！',
        relatedQuestions: []
      },
      {
        id: 'ip-route',
        title: '网络IP管理（ip命令）',
        keyPoints: [
          '<strong>ip route show</strong>：<kw>查看当前路由设置</kw>',
          '<strong>ip route add</strong>：<kw>添加静态路由</kw>',
          '<strong>ip route del</strong>：<kw>删除路由</kw>',
          '<strong>ip route change</strong>：<kw>修改路由</kw>',
          '<strong>示例</strong>：<kw>ip route add 192.168.1.0/24 via 10.0.0.1</kw>（添加网段路由）',
          '<strong>替代关系</strong>：<kw>ip命令是新版工具，替代ifconfig/route</kw>'
        ],
        tips: '🎯 <mark>ip route管路由，add添加del删除</mark>',
        story: '🗺️ 场景联想：<strong>ip route</strong>是<strong>交通路线规划</strong>。<strong>show</strong>是<strong>查地图</strong>（看现有路线），<strong>add</strong>是<strong>新修公路</strong>（添加路由），<strong>via</strong>是<strong>经由某个路口</strong>（网关）。<strong>192.168.1.0/24</strong>是<strong>整个小区</strong>（网段），<strong>10.0.0.1</strong>是<strong>必经的十字路口</strong>！',
        relatedQuestions: []
      },
      {
        id: 'netstat-ss',
        title: 'netstat与ss命令',
        keyPoints: [
          '<strong>netstat</strong>：<kw>显示网络连接、路由表、接口状态</kw>（传统工具）',
          '<strong>netstat -tuln</strong>：<kw>查看TCP/UDP监听端口</kw>',
          '<strong>netstat -r</strong>：<kw>显示路由表</kw>',
          '<strong>ss</strong>：<kw>更快的socket统计工具</kw>（新版工具）',
          '<strong>ss -tuln</strong>：<kw>查看监听端口</kw>（速度更快）',
          '<strong>常用选项</strong>：<kw>-t=TCP，-u=UDP，-l=监听，-n=数字显示</kw>'
        ],
        tips: '⚡ <mark>ss比netstat快，选项类似</mark>',
        story: '🔌 场景联想：<strong>netstat/ss</strong>是<strong>港口监控台</strong>（查看网络连接）。<strong>-t/-u</strong>是<strong>货船/游艇类型</strong>（TCP/UDP），<strong>-l</strong>是<strong>等待停靠的船</strong>（监听端口），<strong>-n</strong>是<strong>显示船号</strong>（数字不解析域名）。<strong>ss</strong>是<strong>高速摄像头</strong>（速度更快）！',
        relatedQuestions: []
      },
      {
        id: 'firewalld',
        title: 'firewalld防火墙管理',
        keyPoints: [
          '<strong>firewalld</strong>：<kw>动态防火墙管理工具</kw>（替代iptables）',
          '<strong>区域zone</strong>：<kw>不同信任等级的预定义规则集</kw>（public/trusted/drop等）',
          '<strong>firewall-cmd --list-all</strong>：<kw>查看当前区域所有设置</kw>',
          '<strong>firewall-cmd --add-service=http</strong>：<kw>开放服务</kw>（临时生效）',
          '<strong>--permanent</strong>：<kw>永久生效</kw>（需reload）',
          '<strong>firewall-cmd --reload</strong>：<kw>重载配置</kw>'
        ],
        tips: '🔥 <mark>临时生效不加--permanent，永久生效要reload</mark>',
        story: '🛡️ 场景联想：<strong>firewalld</strong>是<strong>城墙守卫</strong>（动态防火墙）。<strong>zone区域</strong>是<strong>不同信任级别的城门</strong>（public=普通门，trusted=贵宾通道，drop=直接关闭）。<strong>--add-service</strong>是<strong>临时放行</strong>（守卫记在脑子里），<strong>--permanent</strong>是<strong>刻在门上</strong>（永久生效），但要<strong>reload通知守卫</strong>！',
        relatedQuestions: []
      },
      {
        id: 'ssh-scp',
        title: 'SSH与SCP远程管理',
        keyPoints: [
          '<strong>SSH</strong>：<kw>安全远程登录协议</kw>（Secure Shell）',
          '<strong>ssh用法</strong>：<kw>ssh user@host</kw>（远程登录）',
          '<strong>ssh -p port</strong>：<kw>指定端口</kw>（默认22）',
          '<strong>SCP</strong>：<kw>基于SSH的安全文件传输</kw>',
          '<strong>scp本地到远程</strong>：<kw>scp file user@host:/path</kw>',
          '<strong>scp远程到本地</strong>：<kw>scp user@host:/path/file .</kw>',
          '<strong>scp -r</strong>：<kw>递归传输目录</kw>'
        ],
        tips: '🔐 <mark>SSH登录，SCP传文件，都走22端口加密</mark>',
        story: '🚁 场景联想：<strong>SSH</strong>是<strong>秘密电话</strong>（加密远程登录），<strong>SCP</strong>是<strong>加密快递</strong>（安全传文件）。都走<strong>22号机密通道</strong>（端口22）。<strong>scp file user@host:/path</strong>像<strong>"把包裹寄给某人的某地址"</strong>，<strong>-r</strong>是<strong>打包整箱货</strong>（递归目录）！',
        relatedQuestions: []
      }
    ]
  }
];

/**
 * 获取所有知识模块
 */
export function getAllModules(): KnowledgeModule[] {
  return KNOWLEDGE_MODULES;
}

/**
 * 根据ID获取模块
 */
export function getModuleById(id: string): KnowledgeModule | undefined {
  return KNOWLEDGE_MODULES.find(m => m.id === id);
}

/**
 * 获取知识快照统计
 */
export function getSnapshotStats() {
  const totalCards = KNOWLEDGE_MODULES.reduce((sum, m) => sum + m.cards.length, 0);
  const totalKeyPoints = KNOWLEDGE_MODULES.reduce(
    (sum, m) => sum + m.cards.reduce((s, c) => s + c.keyPoints.length, 0),
    0
  );
  
  return {
    modules: KNOWLEDGE_MODULES.length,
    cards: totalCards,
    keyPoints: totalKeyPoints,
  };
}
