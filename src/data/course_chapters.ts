/**
 * 系统化学习 - 课程章节数据
 * 来源: docs/ppts/Linux系统与安全 -chp1+chp2.md
 */

import type { CourseChapter } from '../types';

export const courseChapters: CourseChapter[] = [
  {
    id: 'chp1_2',
    title: '第一章 Linux系统与安全 · 第二章 系统入门',
    chapterNumber: 'chp1+chp2',
    overview: '本章介绍Linux操作系统的安全基础、Unix系统历史、Linux发展历程，以及Linux系统的基本操作入门知识。',
    icon: '🐧',
    estimatedMinutes: 60,
    
    // 核心知识骨架
    skeleton: {
      // 问题引入 - 大白话场景
      scenarioIntro: {
        title: '🏰 想象你在守卫一座城堡',
        description: '🎭 你是中世纪城堡的守卫队长。城堡里住着国王（root管理员）、大臣（普通用户）、商人（应用程序）。城门是唯一入口（登录系统），城墙有很多漏洞（系统漏洞），还有小偷想趁夜翻墙（黑客攻击）。你的任务是：确保只有持令牌的人能进城（身份认证），记录每个人的行踪（安全审计），修补城墙的破洞（修复漏洞），不让小偷得逞！',
        problems: [
          '🚪 城门守卫：如何确认来的人真的是他说的那个人？（身份鉴别 = 用户登录验证）',
          '🔑 令牌管理：国王的金钥匙和平民的木钥匙能开一样的门吗？（权限控制 = root vs 普通用户）',
          '📜 巡逻日志：城里昨晚发生了盗窃，怎么查是谁干的？（安全审计 = 系统日志）',
          '🕳️ 修补城墙：墙上有裂缝，小偷可能从哪钻进来？（漏洞修复 = 系统加固）',
          '⚔️ 关闭城门：敌军来袭时，怎么安全地关闭城门而不误伤自己人？（系统关机 = shutdown命令）'
        ]
      },

      framework: [
        '操作系统安全基础',
        'Unix系统发展历史',
        'Linux系统简介与特点',
        'Linux操作系统安全配置',
        '系统开机、登录与关闭'
      ],
      
      // 结构化知识图谱数据（用于自定义渲染）
      knowledgeMap: {
        root: {
          id: 'root',
          title: 'Linux系统与安全',
          level: 0,
          color: 'purple',
          icon: '🐧'
        },
        chapters: [
          {
            id: 'ch1',
            title: '第一章: 系统安全基础',
            level: 1,
            color: 'indigo',
            icon: '🔐',
            sections: [
              {
                id: 'ch1-1',
                title: '操作系统安全目标',
                level: 2,
                color: 'blue',
                icon: '🎯',
                items: [
                  { id: 'ch1-1-1', title: '访问控制', icon: '🚪' },
                  { id: 'ch1-1-2', title: '身份鉴别', icon: '🔑' },
                  { id: 'ch1-1-3', title: '安全审计', icon: '📝' }
                ]
              },
              {
                id: 'ch1-2',
                title: '系统漏洞与威胁',
                level: 2,
                color: 'red',
                icon: '⚠️',
                items: [
                  { id: 'ch1-2-1', title: '输入验证漏洞', icon: '📥' },
                  { id: 'ch1-2-2', title: '缓冲区溢出', icon: '💥' },
                  { id: 'ch1-2-3', title: '权限配置错误', icon: '🔓' }
                ]
              },
              {
                id: 'ch1-3',
                title: 'Unix/Linux发展史',
                level: 2,
                color: 'green',
                icon: '📜',
                items: [
                  { id: 'ch1-3-1', title: 'Multics项目', icon: '🏗️' },
                  { id: 'ch1-3-2', title: 'C语言重写', icon: '💻' },
                  { id: 'ch1-3-3', title: 'System V发布', icon: '🚀' }
                ]
              },
              {
                id: 'ch1-4',
                title: 'Linux安全配置',
                level: 2,
                color: 'orange',
                icon: '⚙️',
                items: [
                  { id: 'ch1-4-1', title: '清理无用账户', icon: '🧹' },
                  { id: 'ch1-4-2', title: '关闭不必要服务', icon: '🛑' },
                  { id: 'ch1-4-3', title: '限制文件权限', icon: '🔒' }
                ]
              }
            ]
          },
          {
            id: 'ch2',
            title: '第二章: 系统入门',
            level: 1,
            color: 'cyan',
            icon: '🖥️',
            sections: [
              {
                id: 'ch2-1',
                title: '开机与界面切换',
                level: 2,
                color: 'teal',
                icon: '🔌',
                items: [
                  { id: 'ch2-1-1', title: '图形界面', icon: '🎨' },
                  { id: 'ch2-1-2', title: '字符界面', icon: '⌨️' }
                ]
              },
              {
                id: 'ch2-2',
                title: '用户登录与注销',
                level: 2,
                color: 'pink',
                icon: '👤',
                items: [
                  { id: 'ch2-2-1', title: 'root用户', icon: '#️⃣' },
                  { id: 'ch2-2-2', title: '普通用户', icon: '$️' }
                ]
              },
              {
                id: 'ch2-3',
                title: '系统关闭与重启',
                level: 2,
                color: 'rose',
                icon: '⏻',
                items: [
                  { id: 'ch2-3-1', title: 'halt命令', icon: '🛑' },
                  { id: 'ch2-3-2', title: 'reboot命令', icon: '🔄' },
                  { id: 'ch2-3-3', title: 'shutdown命令', icon: '⏰' }
                ]
              }
            ]
          }
        ]
      },
      
      keyPoints: [
        '操作系统安全是信息安全的基础',
        '系统漏洞主要包括：输入验证、缓冲区溢出、权限配置等',
        'Unix由Ken Thompson和Dennis Ritchie开发，C语言重写实现可移植',
        'Linux由Linus Torvalds基于Minix开发，采用GPL开源协议',
        'Linux安全配置：清理用户、关闭服务、限制权限、禁止快捷键重启'
      ],
      
      learningObjectives: [
        '理解操作系统安全的重要性和主要目标',
        '掌握常见系统漏洞的类型和防范方法',
        '了解Unix和Linux的发展历史',
        '掌握Linux系统的基本操作（开机、登录、关机）',
        '学会Linux系统的基础安全配置'
      ]
    },
    
    // 详细知识点小节
    sections: [
      // ========== 第一章：Linux系统与安全 ==========
      {
        id: 'section_1_1',
        title: '操作系统的安全',
        sectionNumber: '1.1',
        blocks: [
          {
            id: 'block_1_1_1',
            type: 'highlight',
            content: '<strong>操作系统的安全是信息安全的基础</strong>，没有操作系统安全，就不可能真正解决数据库安全、网络安全和其他应用软件的安全问题。',
            keywords: ['信息安全', '基础', '数据库安全', '网络安全']
          },
          
          {
            id: 'block_1_1_2',
            type: 'text',
            content: '<h3><strong>1.1.1 操作系统的漏洞威胁</strong></h3><p><strong>系统漏洞（System vulnerabilities）</strong>是指应用软件或操作系统软件在逻辑设计上的缺陷或错误，被不法者利用，通过网络植入木马、病毒等方式来攻击或控制整个电脑。</p>'
          },
          
          {
            id: 'block_1_1_3',
            type: 'list',
            content: `<strong>系统漏洞的主要类型：</strong>
<ul class="space-y-2 ml-4">
  <li><mark class="bg-yellow-200 px-1">① 输入验证漏洞</mark> - 没有对用户输入数据合法性进行检查，导致非法进入</li>
  <li><mark class="bg-yellow-200 px-1">② 缓冲区溢出漏洞</mark> - 输入数据超过缓冲区长度，可导致程序崩溃或执行非授权指令</li>
  <li><mark class="bg-yellow-200 px-1">③ 边界条件漏洞</mark> - 没有进行边界条件校验，系统资源耗尽</li>
  <li><mark class="bg-yellow-200 px-1">④ 访问校验漏洞</mark> - 程序校验访问位置存在逻辑错误</li>
  <li><mark class="bg-yellow-200 px-1">⑤ 意外逻辑漏洞</mark> - 对异常情况处理不当</li>
  <li><mark class="bg-yellow-200 px-1">⑥ 竞争条件漏洞</mark> - 多进程访问同一资源时产生的冲突</li>
  <li><mark class="bg-yellow-200 px-1">⑦ 系统顺序化操作漏洞</mark> - 不正确的序列化操作</li>
  <li><mark class="bg-yellow-200 px-1">⑧ 系统环境漏洞</mark> - 环境变量错误或恶意设置</li>
  <li><mark class="bg-yellow-200 px-1">⑨ 系统配置漏洞</mark> - 访问权限、参数配置错误</li>
</ul>`,
            mnemonic: '💡 <strong>助记口诀：</strong>"输缓边访意，竞顺环配" - 按顺序记忆9大漏洞类型',
            keywords: ['输入验证', '缓冲区溢出', '边界条件', '访问校验', '竞争条件', '配置漏洞']
          },
          
          {
            id: 'block_1_1_4',
            type: 'scenario',
            content: `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
  <p class="font-bold text-blue-900 mb-2">🎬 场景代入：黑客攻击流程</p>
  <p class="text-gray-700">想象一个黑客试图入侵你的Linux服务器：</p>
  <ol class="list-decimal ml-6 mt-2 space-y-1 text-gray-700">
    <li>先扫描端口，发现你开启了不必要的telnet服务（<mark>配置漏洞</mark>）</li>
    <li>通过telnet尝试登录，发现有默认账户未删除（<mark>访问漏洞</mark>）</li>
    <li>登录后，发现/tmp目录权限过高，上传恶意脚本（<mark>权限漏洞</mark>）</li>
    <li>利用缓冲区溢出漏洞提权到root（<mark>缓冲区溢出</mark>）</li>
    <li>完全控制你的服务器！</li>
  </ol>
  <p class="mt-3 text-sm text-blue-800"><strong>防御策略：</strong>关闭不必要服务、删除默认账户、严格权限控制、及时更新补丁</p>
</div>`
          },
          
          {
            id: 'block_1_1_5',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-xl border-2 border-red-300"><h3 class="text-2xl font-bold text-red-800 flex items-center gap-2"><span class="text-3xl">🎯</span>操作系统安全管理的主要目标<span class="ml-2 text-sm bg-red-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          
          {
            id: 'block_1_1_6',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-red-500">
<ol class="space-y-3 ml-6 list-decimal text-base">
  <li>依据安全策略进行<strong class="text-red-700 text-lg">访问控制</strong>，防止非法访问（<mark class="bg-yellow-200 px-1 font-semibold">窃取、篡改、破坏</mark>）</li>
  <li>标识系统用户并进行<strong class="text-red-700 text-lg">身份鉴别</strong></li>
  <li>监督系统运行时的<strong class="text-red-700 text-lg">安全性</strong>（<mark class="bg-yellow-200 px-1 font-semibold">安全监督</mark>）</li>
  <li>保证系统自身的<strong class="text-red-700 text-lg">安全性和完整性</strong>（<mark class="bg-yellow-200 px-1 font-semibold">自身安全</mark>）</li>
  <li>建立<strong class="text-red-700 text-lg">访问控制机制</strong>：<mark class="bg-blue-100 px-2 py-1 rounded">自主访问控制、强制访问控制、客体重用</mark>等</li>
  <li>建立<strong class="text-red-700 text-lg">可追究机制</strong>：<mark class="bg-blue-100 px-2 py-1 rounded">标识与鉴别、可信路径、安全审计</mark>等</li>
  <li>建立<strong class="text-red-700 text-lg">连续保护机制</strong>：<mark class="bg-blue-100 px-2 py-1 rounded">系统完整性、隐蔽通道分析、最小特权管理、可信恢复</mark>等</li>
</ol>
<div class="mt-4 bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
  <p class="font-bold text-red-900 mb-1">🎯 助记口诀：</p>
  <p class="text-red-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">访身监自，访追保</mark>（访问、身份、监督、自身、访问机制、追究机制、保护机制）</p>
</div>
</div>`,
            mnemonic: '🎯 <strong>三大机制核心：</strong>访问控制机制 + 可追究机制 + 连续保护机制'
          }
        ]
      },
      
      {
        id: 'section_1_2',
        title: 'UNIX系统简介',
        sectionNumber: '1.2',
        blocks: [
          {
            id: 'block_1_2_1',
            type: 'text',
            content: '<h3><strong>1.2.1 UNIX系统的发展历史</strong></h3><p>UNIX来源于美国国防部研发的<strong>Multics</strong>（MULTiplexed Information and Computing System）项目。Ken Thompson和Dennis Ritchie在Multics半途而废后继续开发，最终诞生了UNIX。</p>'
          },
          
          {
            id: 'block_1_2_2',
            type: 'diagram',
            diagramType: 'mermaid',
            content: `graph LR
    A[Multics项目<br/>1965] --> B[项目失败]
    B --> C[Ken Thompson<br/>星际旅行游戏]
    C --> D[UNICS<br/>1970]
    D --> E[UNIX<br/>Brian Kernighan命名]
    E --> F[B语言]
    F --> G[C语言<br/>1971-1973]
    G --> H[可移植操作系统<br/>1973用C重写]
    H --> I[System V<br/>1983]
    I --> J[SVR3/SVR4<br/>1987-1988]`
          },
          
          {
            id: 'block_1_2_3',
            type: 'highlight',
            content: '<p class="text-lg"><strong>🔑 关键里程碑：</strong></p><ul class="ml-6 space-y-2"><li>📌 <strong>1970</strong> - UNICS诞生（Uniplexed，意为"没那么复杂"）</li><li>📌 <strong>1971</strong> - B语言演化为C语言</li><li>📌 <strong>1973</strong> - 用C语言重写UNIX，成为"可移植操作系统"</li><li>📌 <strong>1983</strong> - System V发布（引入IPC进程间通信）</li></ul>',
            mnemonic: '📅 记忆技巧：70诞生、71有C、73重写、83商用'
          },
          
          {
            id: 'block_1_2_4',
            type: 'scenario',
            content: `<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
  <p class="font-bold text-purple-900 mb-2">🎮 趣味故事：从游戏到操作系统</p>
  <p class="text-gray-700">
    1969年，贝尔实验室退出Multics项目后，Ken Thompson很失落。他写了一个叫"<strong>星际旅行（Space Travel）</strong>"的游戏，想在废弃的DEC PDP-7计算机上运行。为了让游戏跑起来，他不得不为这台机器编写操作环境...结果这个"游戏运行环境"越写越完善，最终成了UNIX的雏形！
  </p>
  <p class="mt-2 text-sm text-purple-800">💡 启示：有时候伟大的发明源于一个简单的需求</p>
</div>`
          }
        ]
      },
      
      {
        id: 'section_1_3',
        title: 'Linux系统简介',
        sectionNumber: '1.3',
        blocks: [
          {
            id: 'block_1_3_1',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-400"><h3 class="text-xl font-bold text-green-800 flex items-center gap-2 mb-3"><span class="text-2xl">🐧</span>Linux系统简介<span class="ml-2 text-sm bg-green-600 text-white px-3 py-1 rounded-full">重点</span></h3><p class="text-gray-800">荷兰计算机科学家<strong class="text-green-700 text-lg">Andy Tanenbaum</strong>开发了类Unix操作系统<strong class="text-green-700 text-lg">Minix</strong>用于教学。芬兰大学生<strong class="text-green-700 text-lg">Linus Torvalds</strong>在Minix基础上编写了操作系统核心，于<mark class="bg-yellow-300 px-2 py-1 rounded font-bold text-lg">1991年10月</mark>公布为<strong class="text-green-700 text-lg">Linux 0.0.2</strong>版本。</p><div class="mt-3 bg-green-50 p-3 rounded-lg border-l-4 border-green-500"><p class="font-bold text-green-900 mb-1">💡 记忆要点：</p><p class="text-green-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-semibold">Andy的Minix → Linus的Linux (1991.10)</mark></p></div></div>'
          },
          
          {
            id: 'block_1_3_2',
            type: 'list',
            content: `<p class="font-bold mb-2">🐧 流行的Linux发行版：</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
  <div class="bg-red-50 p-2 rounded">🔴 <strong>Red Hat Linux</strong> - 红帽子</div>
  <div class="bg-blue-50 p-2 rounded">🔵 <strong>Blue Point Linux</strong> - 蓝点（深圳）</div>
  <div class="bg-red-50 p-2 rounded">🚩 <strong>Red Flag Linux</strong> - 红旗（中科院）</div>
  <div class="bg-green-50 p-2 rounded">🟢 <strong>S.u.S.E Linux</strong> - 德国</div>
  <div class="bg-purple-50 p-2 rounded">🌊 <strong>Debian Linux</strong> - 真正的非商业化</div>
  <div class="bg-yellow-50 p-2 rounded">🌊 <strong>Xteam Linux</strong> - 冲浪（北京）</div>
</div>`
          },
          
          {
            id: 'block_1_3_3',
            type: 'highlight',
            content: '<h3>Linux的特点</h3>',
          },
          
          {
            id: 'block_1_3_4',
            type: 'list',
            content: `<ul class="space-y-2">
  <li>✅ <strong>免费开源</strong> - 内核源代码公开</li>
  <li>✅ <strong>多任务多用户</strong> - 32/64位操作系统</li>
  <li>✅ <strong>硬件兼容性强</strong> - 支持Intel x386、Apple PowerPC、Sun Sparc等</li>
  <li>✅ <strong>虚拟存储管理</strong> - 请求分页式</li>
  <li>✅ <strong>网络功能强大</strong> - TCP/IP、WWW、FTP、邮件、DNS、DHCP、防火墙等</li>
</ul>`,
            mnemonic: '🎯 记忆：<strong>免多硬虚网</strong> - 免费、多任务、硬件、虚拟、网络'
          }
        ]
      },
      
      {
        id: 'section_1_4',
        title: 'Linux操作系统的安全配置',
        sectionNumber: '1.4',
        blocks: [
          {
            id: 'block_1_4_1',
            type: 'list',
            content: `<h3 class="font-bold text-xl mb-3">🔐 Linux安全配置九大措施</h3>
<div class="space-y-3">
  <div class="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
    <p class="font-bold text-red-900">1️⃣ 清理系统不需要的用户和用户组</p>
    <p class="text-sm text-gray-700 mt-1">可删除用户：adm、lp、sync、shutdown、halt、news、uucp、operator、games、gopher等</p>
    <p class="text-sm text-gray-700">可删除用户组：adm、lp、news、uucp、games、dip、pppusers等</p>
  </div>
  
  <div class="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
    <p class="font-bold text-orange-900">2️⃣ 关闭系统不需要的服务</p>
    <p class="text-sm text-gray-700 mt-1">运行的服务越少，系统越安全。除http、smtp、telnet、ftp外，其他服务建议关闭</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-xs">
      chkconfig --level 345 bluetooth off<br/>
      service bluetooth stop
    </code>
  </div>
  
  <div class="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
    <p class="font-bold text-yellow-900">3️⃣ 禁止非root用户执行系统命令</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-xs">
      chmod -R 700 /etc/rc.d/init.d/*
    </code>
  </div>
  
  <div class="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
    <p class="font-bold text-green-900">4️⃣ 限制文件权限</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-xs">
      chmod 700 /usr/bin<br/>
      chmod 700 /bin/ping<br/>
      chmod 500 /bin/ps
    </code>
  </div>
  
  <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
    <p class="font-bold text-blue-900">5️⃣ 禁止Ctrl+Alt+Del重启</p>
    <p class="text-sm text-gray-700 mt-1">防止物理接触者通过快捷键重启服务器</p>
  </div>
  
  <div class="bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-400">
    <p class="font-bold text-indigo-900">6️⃣ 关于系统更新的安全配置</p>
    <p class="text-sm text-gray-700 mt-1">使用yum update时<strong>不升级内核</strong>，只更新软件包（避免兼容性问题）</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-xs">
      yum --exclude=kernel* update
    </code>
  </div>
  
  <div class="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
    <p class="font-bold text-purple-900">7️⃣ /tmp、/var/tmp安全设定</p>
    <p class="text-sm text-gray-700 mt-1">设置nosuid、noexec，防止木马脚本执行</p>
  </div>
  
  <div class="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400">
    <p class="font-bold text-pink-900">8️⃣ 修改history命令记录</p>
    <p class="text-sm text-gray-700 mt-1">让history自动记录命令执行时间</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-xs">
      HISTTIMEFORMAT='%F %T'<br/>
      export HISTTIMEFORMAT
    </code>
  </div>
  
  <div class="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-400">
    <p class="font-bold text-gray-900">9️⃣ 隐藏服务器系统信息</p>
    <p class="text-sm text-gray-700 mt-1">删除或改名/etc/issue和/etc/issue.net，避免泄露系统版本信息</p>
  </div>
</div>`,
            mnemonic: '🔢 九大措施口诀：<strong>清关禁限禁，更临历隐</strong>（清理、关闭、禁止命令、限制权限、禁止快捷键、更新配置、临时目录、历史记录、隐藏信息）',
            keywords: ['用户清理', '服务关闭', '权限限制', '系统更新', 'tmp安全', 'history', '信息隐藏']
          }
        ]
      },
      
      // ========== 第二章：系统入门 ==========
      {
        id: 'section_2_1',
        title: '系统的开机与界面切换',
        sectionNumber: '2.1',
        blocks: [
          {
            id: 'block_2_1_1',
            type: 'text',
            content: '<p>Linux系统启动后有两种界面：</p><ul class="ml-6 space-y-1"><li>🖥️ <strong>图形界面</strong> - GNOME/Unity桌面</li><li>⌨️ <strong>字符界面</strong> - 终端界面（Terminal）</li></ul>'
          },
          
          {
            id: 'block_2_1_2',
            type: 'table',
            content: `<table class="w-full border-collapse border border-gray-300">
  <thead class="bg-gray-100">
    <tr>
      <th class="border border-gray-300 px-4 py-2">用户类别</th>
      <th class="border border-gray-300 px-4 py-2">用户名</th>
      <th class="border border-gray-300 px-4 py-2">密码</th>
      <th class="border border-gray-300 px-4 py-2">提示符</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-4 py-2 font-bold">超级用户</td>
      <td class="border border-gray-300 px-4 py-2"><code>root</code></td>
      <td class="border border-gray-300 px-4 py-2"><code>computer2000</code></td>
      <td class="border border-gray-300 px-4 py-2 text-red-600 font-bold"><code>#</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2">普通用户</td>
      <td class="border border-gray-300 px-4 py-2"><code>user1~user5</code></td>
      <td class="border border-gray-300 px-4 py-2"><code>computer1~5</code></td>
      <td class="border border-gray-300 px-4 py-2 text-green-600 font-bold"><code>$</code></td>
    </tr>
  </tbody>
</table>`,
            mnemonic: '💡 <strong>提示符记忆：</strong># 是root的"井"号权力，$ 是user的"美元"小钱'
          }
        ]
      },
      
      {
        id: 'section_2_2',
        title: '用户的登录与注销',
        sectionNumber: '2.2',
        blocks: [
          {
            id: 'block_2_2_1',
            type: 'highlight',
            content: '<p class="text-lg">⚠️ <strong>安全提醒：</strong>用户使用完系统或暂时离开时，应立即注销。<mark class="bg-yellow-200 px-1">注销≠关机</mark>，注销只是退出当前用户，系统其他用户仍可工作。</p>'
          },
          
          {
            id: 'block_2_2_2',
            type: 'list',
            content: `<p class="font-bold mb-2">字符界面注销方式：</p>
<ul class="ml-6 space-y-1">
  <li>① <code class="bg-gray-200 px-2 py-1 rounded">Ctrl+D</code> 组合键</li>
  <li>② <code class="bg-gray-200 px-2 py-1 rounded">exit</code> 命令</li>
  <li>③ <code class="bg-gray-200 px-2 py-1 rounded">logout</code> 命令</li>
</ul>`
          }
        ]
      },
      
      {
        id: 'section_2_3',
        title: 'Linux系统的关闭与重启',
        sectionNumber: '2.3',
        blocks: [
          {
            id: 'block_2_3_1',
            type: 'list',
            content: `<div class="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-xl border-2 border-orange-400 mb-4"><h3 class="text-2xl font-bold text-orange-800 flex items-center gap-2"><span class="text-3xl">🔌</span>常用关机/重启命令<span class="ml-2 text-sm bg-orange-600 text-white px-3 py-1 rounded-full">重点</span></h3><div class="mt-2 bg-orange-50 p-3 rounded-lg"><p class="font-bold text-orange-900 mb-1">🎯 助记口诀：</p><p class="text-orange-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">哈瑞宝收印</mark>（halt、reboot、poweroff、shutdown、init）</p></div></div>
<h3 class="font-bold text-xl mb-3">五大命令详解</h3>
<div class="space-y-3">
  <div class="bg-blue-50 p-3 rounded-lg">
    <p class="font-bold text-blue-900">1. halt - 关闭系统</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-sm">
      halt -p  # 关机后关闭电源
    </code>
  </div>
  
  <div class="bg-green-50 p-3 rounded-lg">
    <p class="font-bold text-green-900">2. reboot - 重启系统</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-sm">
      reboot  # 关闭系统后重新启动
    </code>
  </div>
  
  <div class="bg-purple-50 p-3 rounded-lg">
    <p class="font-bold text-purple-900">3. poweroff - 断电关机</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-sm">
      poweroff  # 等价于 halt -p
    </code>
  </div>
  
  <div class="bg-orange-50 p-3 rounded-lg">
    <p class="font-bold text-orange-900">4. shutdown - 安全关机（推荐）</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-sm">
      shutdown -h now        # 立即关机<br/>
      shutdown -r now        # 立即重启<br/>
      shutdown -h 10:42      # 10:42分关机<br/>
      shutdown -r +20        # 20分钟后重启<br/>
      shutdown -c            # 取消已下达的关机命令
    </code>
    <p class="text-sm text-gray-700 mt-2">✨ 优势：会向所有用户发送通知，给足准备时间</p>
  </div>
</div>`,
            mnemonic: '🎯 <strong>命令记忆：</strong>halt暂停、reboot重启、poweroff断电、<mark class="bg-yellow-200 px-2 py-1 rounded font-bold">shutdown最安全（会通知所有用户）</mark>',
            keywords: ['halt', 'reboot', 'poweroff', 'shutdown']
          },
          
          {
            id: 'block_2_3_2',
            type: 'table',
            content: `<p class="font-bold mb-2">shutdown命令参数详解：</p>
<table class="w-full border-collapse border border-gray-300 text-sm">
  <thead class="bg-gray-100">
    <tr>
      <th class="border border-gray-300 px-3 py-2">选项</th>
      <th class="border border-gray-300 px-3 py-2">功能描述</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-r</code></td>
      <td class="border border-gray-300 px-3 py-2">重启计算机</td>
      <td class="border border-gray-300 px-3 py-2"><code>shutdown -r now</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-h/-H</code></td>
      <td class="border border-gray-300 px-3 py-2">关机后关闭电源</td>
      <td class="border border-gray-300 px-3 py-2"><code>shutdown -h now</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-k</code></td>
      <td class="border border-gray-300 px-3 py-2">只发警告，不真关机</td>
      <td class="border border-gray-300 px-3 py-2"><code>shutdown -k now</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-c</code></td>
      <td class="border border-gray-300 px-3 py-2">取消已提交的关机任务</td>
      <td class="border border-gray-300 px-3 py-2"><code>shutdown -c</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>time</code></td>
      <td class="border border-gray-300 px-3 py-2">指定时间(hh:mm 或 +分钟)</td>
      <td class="border border-gray-300 px-3 py-2"><code>+10</code> / <code>13:30</code></td>
    </tr>
  </tbody>
</table>`
          }
        ]
      }
    ]
  },

  // ========== 第三章：Shell与命令操作 ==========
  {
    id: 'chp3',
    title: '第三章 Shell与命令操作',
    chapterNumber: 'chp3',
    overview: '本章介绍 Shell命令解释器的基本功能、特殊字符、文件系统结构以及常用Linux命令的使用方法。',
    icon: '💻',
    estimatedMinutes: 90,

    skeleton: {
      // 问题引入 - 魔法咒语类比
      scenarioIntro: {
        title: '🧙 想象你是一个魔法师',
        description: '🎪 你是魔法世界的见习师，刚拿到一本古老的魔法书（Linux系统）。这本书不是用手翻的，而是需要念咒语（Shell命令）来控制。每个咒语都有特定的语法（命令格式），用错了就会失效。书里有不同章节（目录），每章有很多页（文件），你需要学会用咒语去翻页、找内容、改内容，甚至把不同页的魔法组合起来发动强大的魔法！',
        problems: [
          '📜 咒语语法：为什么有些符号像 * ? [ ] 有魔法？（通配符 = 特殊符号）',
          '📚 书的结构：怎么知道我现在在哪一章哪一页？（目录结构 = 树型文件系统）',
          '✨ 快捷咒语：每次都念完整咒语太累，怎么只念前几个字就自动补全？（Tab键补全 = 命令扩展）',
          '📤 魔法输出：咒语结果总是在屏幕上，怎么把它写入卷轴（文件）保存？（I/O重定向 = 输出保存）',
          '🔗 组合魔法：怎么把多个小咒语串联起来发动大招？（管道 = 命令组合）'
        ]
      },

      framework: [
        'Shell命令解释器基本功能',
        '特殊字符与通配符',
        '文件类型与目录结构',
        '命令格式与编辑特性',
        'I/O重定向与管道',
        '设备文件、管道与链接',
        '引号机制与环境变量',
        '目录与文件操作命令',
        'vi文本编辑器三种模式',
        '进程管理与信号机制',
        '别名管理与其他命令'
      ],

      knowledgeMap: {
        root: {
          id: 'root',
          title: 'Shell与命令操作',
          level: 0,
          color: 'purple',
          icon: '💻'
        },
        chapters: [
          {
            id: 'ch3-1',
            title: 'Shell基本概念',
            level: 1,
            color: 'indigo',
            icon: '🐚',
            sections: [
              {
                id: 'ch3-1-1',
                title: 'Shell基本功能',
                level: 2,
                color: 'blue',
                icon: '⚙️',
                items: [
                  { id: 'ch3-1-1-1', title: '命令解释执行', icon: '🎯' },
                  { id: 'ch3-1-1-2', title: '文件名管理', icon: '📁' },
                  { id: 'ch3-1-1-3', title: 'I/O重定向', icon: '🔄' },
                  { id: 'ch3-1-1-4', title: '管道建立', icon: '🔗' },
                  { id: 'ch3-1-1-5', title: 'Shell编程', icon: '📝' }
                ]
              },
              {
                id: 'ch3-1-2',
                title: '特殊字符',
                level: 2,
                color: 'cyan',
                icon: '✨',
                items: [
                  { id: 'ch3-1-2-1', title: '通配符 * ? [ ]', icon: '🎲' },
                  { id: 'ch3-1-2-2', title: '注释符 #', icon: '💬' },
                  { id: 'ch3-1-2-3', title: '转义字符 \\', icon: '🔐' },
                  { id: 'ch3-1-2-4', title: '特殊键 Ctrl', icon: '⌨️' }
                ]
              }
            ]
          },
          {
            id: 'ch3-2',
            title: '文件系统',
            level: 1,
            color: 'green',
            icon: '🗃️',
            sections: [
              {
                id: 'ch3-2-1',
                title: '文件类型',
                level: 2,
                color: 'teal',
                icon: '📄',
                items: [
                  { id: 'ch3-2-1-1', title: '普通文件', icon: '📝' },
                  { id: 'ch3-2-1-2', title: '目录文件', icon: '📂' },
                  { id: 'ch3-2-1-3', title: '设备文件', icon: '📦' },
                  { id: 'ch3-2-1-4', title: '符号链接', icon: '🔗' }
                ]
              },
              {
                id: 'ch3-2-2',
                title: '目录结构',
                level: 2,
                color: 'lime',
                icon: '🌳',
                items: [
                  { id: 'ch3-2-2-1', title: '根目录 /', icon: '🌱' },
                  { id: 'ch3-2-2-2', title: '绝对路径', icon: '🧭' },
                  { id: 'ch3-2-2-3', title: '相对路径', icon: '📍' }
                ]
              }
            ]
          },
          {
            id: 'ch3-3',
            title: '命令操作',
            level: 1,
            color: 'orange',
            icon: '⚡',
            sections: [
              {
                id: 'ch3-3-1',
                title: '命令格式',
                level: 2,
                color: 'amber',
                icon: '📜',
                items: [
                  { id: 'ch3-3-1-1', title: '命令名', icon: '🎯' },
                  { id: 'ch3-3-1-2', title: '选项', icon: '⚙️' },
                  { id: 'ch3-3-1-3', title: '参数', icon: '📥' }
                ]
              },
              {
                id: 'ch3-3-2',
                title: '命令编辑',
                level: 2,
                color: 'yellow',
                icon: '✏️',
                items: [
                  { id: 'ch3-3-2-1', title: 'Tab补全', icon: '⭐' },
                  { id: 'ch3-3-2-2', title: '编辑键', icon: '⌨️' },
                  { id: 'ch3-3-2-3', title: '历史命令', icon: '📜' }
                ]
              },
              {
                id: 'ch3-3-3',
                title: 'I/O重定向',
                level: 2,
                color: 'rose',
                icon: '🔄',
                items: [
                  { id: 'ch3-3-3-1', title: '输入重定向 <', icon: '📥' },
                  { id: 'ch3-3-3-2', title: '输出重定向 >', icon: '📤' },
                  { id: 'ch3-3-3-3', title: '管道 |', icon: '🔗' }
                ]
              }
            ]
          },
          {
            id: 'ch3-4',
            title: '设备文件与链接',
            level: 1,
            color: 'purple',
            icon: '🔌',
            sections: [
              {
                id: 'ch3-4-1',
                title: '设备文件类型',
                level: 2,
                color: 'violet',
                icon: '📦',
                items: [
                  { id: 'ch3-4-1-1', title: '块设备 b', icon: '💾' },
                  { id: 'ch3-4-1-2', title: '字符设备 c', icon: '⌨️' },
                  { id: 'ch3-4-1-3', title: '符号链接 l', icon: '🔗' },
                  { id: 'ch3-4-1-4', title: '管道设备 p', icon: '🔀' }
                ]
              },
              {
                id: 'ch3-4-2',
                title: '两类管道',
                level: 2,
                color: 'fuchsia',
                icon: '🔀',
                items: [
                  { id: 'ch3-4-2-1', title: '无名管道', icon: '⚡' },
                  { id: 'ch3-4-2-2', title: '命名管道', icon: '📛' }
                ]
              },
              {
                id: 'ch3-4-3',
                title: '两类链接',
                level: 2,
                color: 'pink',
                icon: '🔗',
                items: [
                  { id: 'ch3-4-3-1', title: '硬链接', icon: '🔒' },
                  { id: 'ch3-4-3-2', title: '软链接', icon: '🔖' }
                ]
              }
            ]
          },
          {
            id: 'ch3-5',
            title: 'vi编辑器',
            level: 1,
            color: 'amber',
            icon: '📝',
            sections: [
              {
                id: 'ch3-5-1',
                title: 'vi三种模式',
                level: 2,
                color: 'yellow',
                icon: '🎯',
                items: [
                  { id: 'ch3-5-1-1', title: '命令模式', icon: '⌨️' },
                  { id: 'ch3-5-1-2', title: '编辑模式', icon: '✏️' },
                  { id: 'ch3-5-1-3', title: '底行模式', icon: '📋' }
                ]
              },
              {
                id: 'ch3-5-2',
                title: 'vi基本操作',
                level: 2,
                color: 'orange',
                icon: '⚙️',
                items: [
                  { id: 'ch3-5-2-1', title: '插入命令 i/a/o', icon: '➕' },
                  { id: 'ch3-5-2-2', title: '删除命令 x/dd', icon: '🗑️' },
                  { id: 'ch3-5-2-3', title: '保存退出 :wq/:q!', icon: '💾' }
                ]
              }
            ]
          },
          {
            id: 'ch3-6',
            title: '进程管理',
            level: 1,
            color: 'red',
            icon: '⚙️',
            sections: [
              {
                id: 'ch3-6-1',
                title: '信号机制',
                level: 2,
                color: 'rose',
                icon: '🔔',
                items: [
                  { id: 'ch3-6-1-1', title: '信号2 INT', icon: '⏹️' },
                  { id: 'ch3-6-1-2', title: '信号9 KILL', icon: '💀' },
                  { id: 'ch3-6-1-3', title: '信号15 TERM', icon: '🛑' }
                ]
              },
              {
                id: 'ch3-6-2',
                title: '进程管理命令',
                level: 2,
                color: 'pink',
                icon: '🔧',
                items: [
                  { id: 'ch3-6-2-1', title: 'pstree 进程树', icon: '🌳' },
                  { id: 'ch3-6-2-2', title: 'kill 终止进程', icon: '⚔️' },
                  { id: 'ch3-6-2-3', title: 'ps 查看状态', icon: '👁️' }
                ]
              }
            ]
          },
          {
            id: 'ch3-7',
            title: '其他常用命令',
            level: 1,
            color: 'teal',
            icon: '🛠️',
            sections: [
              {
                id: 'ch3-7-1',
                title: '别名管理',
                level: 2,
                color: 'cyan',
                icon: '🏷️',
                items: [
                  { id: 'ch3-7-1-1', title: 'alias 定义', icon: '➕' },
                  { id: 'ch3-7-1-2', title: 'unalias 取消', icon: '➖' }
                ]
              },
              {
                id: 'ch3-7-2',
                title: '文件统计',
                level: 2,
                color: 'sky',
                icon: '📊',
                items: [
                  { id: 'ch3-7-2-1', title: 'wc 统计命令', icon: '🔢' }
                ]
              }
            ]
          }
        ]
      },

      keyPoints: [
        'Shell是命令解释器，主要功能：命令执行、文件管理、I/O重定向、管道建立',
        '通配符：* 代表任意字符串，? 代表单个字符，[ ] 匹配范围内字符',
        'Linux有三种基本文件类型：普通文件、目录文件、设备文件',
        '设备文件类型：b块设备、c字符设备、l符号链接、p管道设备',
        '两类管道：无名管道（父子进程，自动消失）、命名管道（任意进程，手动删除）',
        '两类链接：硬链接（相同inode）、软链接（不同inode，包含路径）',
        '引号机制：单引号禁止替换、双引号允许替换、反单引号执行命令',
        'vi三种模式：命令模式（默认）、编辑模式（i/a/o进入）、底行模式（:命令）',
        '常用信号：INT(2)中断、KILL(9)强制杀死、TERM(15)正常结束',
        '进程管理：pstree查看进程树、kill发送信号终止进程、ps查看进程状态',
        'alias定义别名、unalias取消别名、wc统计文件行数/单词数/字节数'
      ],

      learningObjectives: [
        '理解Shell的基本功能和工作原理',
        '掌握通配符、注释符、转义字符的使用',
        '了解Linux文件类型和目录结构',
        '掌握命令格式、Tab补全和历史命令使用',
        '学会I/O重定向和管道的基本操作',
        '理解设备文件类型、两类管道和两类链接的区别',
        '掌握引号机制和环境变量的使用',
        '熟练掌握vi编辑器的三种工作模式及基本操作',
        '理解进程管理的信号机制，掌握pstree、kill、ps命令',
        '学会使用alias管理命令别名、wc统计文件信息'
      ]
    },

   sections: [
      {
        id: 'section_3_1',
        title: 'Shell基本功能与概念',
        sectionNumber: '3.1',
        blocks: [
          {
            id: 'block_3_1_1',
            type: 'highlight',
            content: '<strong>Shell是操作系统的命令解释程序</strong>，负责接收用户输入的命令，并对其进行解释和执行。',
            keywords: ['命令解释器', 'Shell', '解释执行']
          },
          {
            id: 'block_3_1_1_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-xl border-2 border-blue-300"><h3 class="text-2xl font-bold text-blue-800 flex items-center gap-2"><span class="text-3xl">🎯</span>Shell功能与种类<span class="ml-2 text-sm bg-blue-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_1_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-blue-500">
<p class="text-lg font-bold text-blue-900 mb-3">Shell的六大功能：</p>
<ul class="space-y-3 ml-4">
  <li><strong class="text-blue-700 text-lg">① 命令解释执行</strong> - 接收并执行用户输入的命令</li>
  <li><strong class="text-blue-700 text-lg">② 文件名管理</strong> - 处理文件名匹配和扩展</li>
  <li><strong class="text-blue-700 text-lg">③ I/O重定向</strong> - 控制输入输出流向</li>
  <li><strong class="text-blue-700 text-lg">④ 通信管道建立</strong> - 连接多个命令</li>
  <li><strong class="text-blue-700 text-lg">⑤ 系统环境设置</strong> - 配置环境变量</li>
  <li><strong class="text-blue-700 text-lg">⑥ Shell编程</strong> - 编写脚本自动化任务</li>
</ul>
<div class="mt-4 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
  <p class="font-bold text-blue-900 mb-1">🎯 助记口诀：</p>
  <p class="text-blue-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">命文IO管环编</mark>（命令、文件、IO、管道、环境、编程）</p>
</div>
</div>`,
            mnemonic: '🎯 <strong>核心记忆：</strong>Shell六大功能 = 命文IO管环编',
            scenario: `<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mt-3">
              <div class="font-bold text-purple-900 mb-2">🎭 场景类比：Shell就像剧院导演</div>
              <p class="text-purple-800">想象Shell是剧院导演，演员是各种程序。① <strong>命令解释</strong>就是导演听懂你的指挥；② <strong>文件名管理</strong>是导演帮你找演员（通配符像模糊搜索）；③ <strong>I/O重定向</strong>是导演控制音响效果（声音从哪来到哪去）；④ <strong>管道</strong>是多个演员接力表演；⑤ <strong>环境设置</strong>是布置舞台；⑥ <strong>Shell编程</strong>是写剧本让演员自动排练。</p>
            </div>`
          },
          {
            id: 'block_3_1_3',
            type: 'text',
            content: '<h3><strong>3.1.1 常用Shell类型</strong></h3><p>Linux的Shell种类繁多，最常用的是<strong>bash（Bourne Again Shell）</strong>，它是GNU工程的默认Shell，兼有csh、tcsh和ksh的特色。</p>'
          }
        ]
      },

      {
        id: 'section_3_2',
        title: '特殊字符与通配符',
        sectionNumber: '3.2',
        blocks: [
          {
            id: 'block_3_2_1',
            type: 'list',
            content: `<strong>三大通配符魔法：</strong>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-cyan-100">
      <th class="border border-gray-300 px-3 py-2 text-left">通配符</th>
      <th class="border border-gray-300 px-3 py-2 text-left">意义</th>
      <th class="border border-gray-300 px-3 py-2 text-left">举例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 rounded">*</code></td>
      <td class="border border-gray-300 px-3 py-2">代表任意长度字符串（不包括.开头文件）</td>
      <td class="border border-gray-300 px-3 py-2"><code>*.txt</code> - 所有txt文件</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 rounded">?</code></td>
      <td class="border border-gray-300 px-3 py-2">代表单个字符</td>
      <td class="border border-gray-300 px-3 py-2"><code>file?.txt</code> - file1.txt, file2.txt</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 rounded">[ ]</code></td>
      <td class="border border-gray-300 px-3 py-2">匹配方括号中的任意一个字符</td>
      <td class="border border-gray-300 px-3 py-2"><code>[abc]*</code> - a开头、b开头或c开头的文件</td>
    </tr>
  </tbody>
</table>`,
            scenario: `<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-3">
              <div class="font-bold text-green-900 mb-2">🎲 场景类比：通配符就像游戏里的搜索功能</div>
              <p class="text-green-800"><strong>*</strong> 是"任意匹配"（像搜索"*剑"找到"长剑、短剑、魔法剑"）；<strong>?</strong> 是"单字通配"（"?剑"只找"长剑、短剑"不含"魔法剑"）；<strong>[ ]</strong> 是"指定选项"（"[长短]剑"只找"长剑、短剑"）。就像游戏物品筛选器！</p>
            </div>`
          },
          {
            id: 'block_3_2_1_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-gray-100 to-slate-100 p-4 rounded-xl border-2 border-gray-300"><h3 class="text-2xl font-bold text-gray-800 flex items-center gap-2"><span class="text-3xl">🎯</span>转义字符<span class="ml-2 text-sm bg-gray-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_2_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-gray-500">
<p class="text-lg font-bold text-gray-900 mb-3">其他特殊字符：</p>
<ul class="space-y-3 ml-4">
  <li><strong class="text-gray-700 text-lg">#</strong> - 注释符，从#开始到行末都是注释</li>
  <li><strong class="text-gray-700 text-lg">\\</strong> - <mark class="bg-yellow-200 px-2 py-1 font-semibold">转义字符</mark>，用于表示特殊字符（<mark class="bg-yellow-200 px-1">\\n换行、\\t制表符</mark>等）</li>
  <li><strong class="text-gray-700 text-lg">Ctrl+C</strong> - 终止当前程序</li>
  <li><strong class="text-gray-700 text-lg">Ctrl+D</strong> - 结束输入或注销</li>
  <li><strong class="text-gray-700 text-lg">Ctrl+Z</strong> - 挂起当前程序</li>
</ul>
</div>`
          }
        ]
      },

      {
        id: 'section_3_3',
        title: '文件类型与目录结构',
        sectionNumber: '3.3',
        blocks: [
          {
            id: 'block_3_3_1',
            type: 'highlight',
            content: '<strong>UNIX/Linux的文件均为无结构的字符流</strong>，系统有三种基本文件类型。',
            keywords: ['字符流', '文件类型']
          },
          {
            id: 'block_3_3_1_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-xl border-2 border-teal-300"><h3 class="text-2xl font-bold text-teal-800 flex items-center gap-2"><span class="text-3xl">🎯</span>Linux三种基本文件类型<span class="ml-2 text-sm bg-teal-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_3_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-teal-500">
<p class="text-lg font-bold text-teal-900 mb-3">三种基本文件类型：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-teal-100">
      <th class="border border-gray-300 px-3 py-2">类型</th>
      <th class="border border-gray-300 px-3 py-2">标识</th>
      <th class="border border-gray-300 px-3 py-2">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-teal-700 text-lg">普通文件</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1">-</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">存储数据</mark>的常规文件（文本、二进制）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-teal-700 text-lg">目录文件</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1">d</code></td>
      <td class="border border-gray-300 px-3 py-2">至少包含<mark class="bg-yellow-200 px-1 font-semibold">. 和 .. 两项</mark>（<mark class="bg-yellow-200 px-1">当前目录和上级目录</mark>）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-teal-700 text-lg">设备文件</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1">b/c/l/p</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">代表硬件设备</mark>的特殊文件</td>
    </tr>
  </tbody>
</table>
<div class="mt-4 bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400">
  <p class="font-bold text-teal-900 mb-1">🎯 重点提示：</p>
  <p class="text-teal-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">. 是当前目录，.. 是上级目录</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mt-3">
              <div class="font-bold text-amber-900 mb-2">📚 场景类比：文件系统就像图书馆</div>
              <p class="text-amber-800"><strong>普通文件</strong>是书籍（文本书、图画书）；<strong>目录文件</strong>是书架和书架标签（告诉你书在哪）；<strong>设备文件</strong>是图书馆的设备（复印机、电脑、投影仪等），每种设备有不同的使用方式。</p>
            </div>`
          },
          {
            id: 'block_3_3_2_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-green-100 to-lime-100 p-4 rounded-xl border-2 border-green-300"><h3 class="text-2xl font-bold text-green-800 flex items-center gap-2"><span class="text-3xl">🎯</span>绝对路径 vs 相对路径<span class="ml-2 text-sm bg-green-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_3_3',
            type: 'text',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-green-500">
<h3><strong>3.3.1 目录结构：树型组织</strong></h3>
            <p>UNIX/Linux系统采用<strong>树型目录结构</strong>组织文件系统，整个文件系统只有一个"根"（用 <code>/</code> 表示）。</p>
            <ul class="space-y-3 ml-4 mt-3">
              <li><strong class="text-green-700 text-lg">绝对路径</strong>：<mark class="bg-yellow-200 px-1 font-semibold">从根目录开始</mark>，如 <code>/home/user/file.txt</code></li>
              <li><strong class="text-green-700 text-lg">相对路径</strong>：<mark class="bg-yellow-200 px-1 font-semibold">从当前目录开始</mark>，如 <code>../user/file.txt</code></li>
              <li><strong class="text-green-700 text-lg">特殊符号</strong>：<code>.</code>当前目录，<code>..</code>上级目录，<code>~</code>家目录</li>
            </ul>
<div class="mt-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
  <p class="font-bold text-green-900 mb-1">🎯 记忆技巧：</p>
  <p class="text-green-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">绝对路径以/开头，相对路径不以/开头</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mt-3">
              <div class="font-bold text-blue-900 mb-2">🌳 场景类比：目录结构就像家族树</div>
              <p class="text-blue-800"><strong>根目录/</strong>是老祖宗；<strong>/home、/etc、/usr</strong>是不同分支家族；<strong>绝对路径</strong>是完整家谱（从老祖宗数到你）；<strong>相对路径</strong>是从你自己开始数（"我爸的哥哥的儿子"=堂哥）。</p>
            </div>`
          }
        ]
      },

      {
        id: 'section_3_4',
        title: '命令格式与编辑特性',
        sectionNumber: '3.4',
        blocks: [
          {
            id: 'block_3_4_1',
            type: 'highlight',
            content: '<strong>命令格式：</strong><code>命令名 [选项...] [参数...]</code>',
            keywords: ['命令格式', '选项', '参数']
          },
          {
            id: 'block_3_4_2',
            type: 'list',
            content: `<strong>命令行三要素：</strong>
<ol class="space-y-2 ml-4">
  <li><strong>命令名</strong> - 要执行的程序名称（如ls、cd、cat）</li>
  <li><strong>选项</strong> - 改变命令行为的标志
    <ul class="ml-4 mt-1">
      <li>传统UNIX风格：<code>-l</code>（单字母）</li>
      <li>GNU风格：<code>--long</code>（完整单词）</li>
    </ul>
  </li>
  <li><strong>参数</strong> - 命令操作的对象（如文件名、目录名）</li>
</ol>

<div class="bg-gray-100 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例：</div>
  <code class="block">ls -l /etc/passwd</code>
  <div class="text-sm mt-1">• ls是命令名 • -l是选项 • /etc/passwd是参数</div>
</div>`,
            scenario: `<div class="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400 mt-3">
              <div class="font-bold text-pink-900 mb-2">🍕 场景类比：命令就像点外卖</div>
              <p class="text-pink-800"><strong>命令名</strong>是选餐厅（"我要披萨"）；<strong>选项</strong>是选规格（"-大份 -加辣"）；<strong>参数</strong>是具体菜品（"夏威夷披萨"）。完整订单："披萨店 -大份 -加辣 夏威夷披萨"！</p>
            </div>`
          },
          {
            id: 'block_3_4_3',
            type: 'list',
            content: `<strong>三大命令行编辑特性：</strong>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-purple-100">
      <th class="border border-gray-300 px-3 py-2">特性</th>
      <th class="border border-gray-300 px-3 py-2">操作</th>
      <th class="border border-gray-300 px-3 py-2">作用</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong>Tab补全</strong></td>
      <td class="border border-gray-300 px-3 py-2">按<code>Tab</code>键</td>
      <td class="border border-gray-300 px-3 py-2">自动补全命令或文件名</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong>编辑键</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code>Ctrl+A/E</code></td>
      <td class="border border-gray-300 px-3 py-2">光标移到行首/行尾</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong>历史记录</strong></td>
      <td class="border border-gray-300 px-3 py-2">↑/↓键或<code>history</code></td>
      <td class="border border-gray-300 px-3 py-2">查看和重用历史命令</td>
    </tr>
  </tbody>
</table>`,
            mnemonic: '💡 <strong>效率口诀：</strong>"Tab补全省时间，箭头翻历史，Ctrl快速跳"'
          }
        ]
      },

      {
        id: 'section_3_5',
        title: 'I/O重定向与管道',
        sectionNumber: '3.5',
        blocks: [
          {
            id: 'block_3_5_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-xl border-2 border-orange-300"><h3 class="text-2xl font-bold text-orange-800 flex items-center gap-2"><span class="text-3xl">🎯</span>I/O重定向<span class="ml-2 text-sm bg-orange-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_5_1',
            type: 'highlight',
            content: '<strong>Linux的三个标准流：</strong>标准输入(0)、标准输出(1)、标准错误输出(2)',
            keywords: ['标准流', 'I/O重定向', '文件描述符']
          },
          {
            id: 'block_3_5_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-orange-500">
<p class="text-lg font-bold text-orange-900 mb-3">I/O重定向操作符：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-orange-100">
      <th class="border border-gray-300 px-3 py-2">操作符</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 rounded text-lg font-bold">&lt;</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-orange-700">输入重定向</strong> - <mark class="bg-yellow-200 px-1">让命令从文件读取输入</mark></td>
      <td class="border border-gray-300 px-3 py-2"><code>wc &lt; file.txt</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 rounded text-lg font-bold">&gt;</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-orange-700">输出重定向</strong> - <mark class="bg-yellow-200 px-1 font-semibold">覆盖方式</mark>保存输出</td>
      <td class="border border-gray-300 px-3 py-2"><code>ls &gt; list.txt</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 rounded text-lg font-bold">&gt;&gt;</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-orange-700">输出追加</strong> - <mark class="bg-yellow-200 px-1 font-semibold">追加方式</mark>保存输出</td>
      <td class="border border-gray-300 px-3 py-2"><code>echo "hi" &gt;&gt; log.txt</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 rounded">2&gt;</code></td>
      <td class="border border-gray-300 px-3 py-2">错误输出重定向</td>
      <td class="border border-gray-300 px-3 py-2"><code>cmd 2&gt; err.log</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 rounded text-lg font-bold">|</code></td>
      <td class="border border-gray-300 px-3 py-2">管道（连接命令）</td>
      <td class="border border-gray-300 px-3 py-2"><code>ls | wc -l</code></td>
    </tr>
  </tbody>
</table>
<div class="mt-4 bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
  <p class="font-bold text-orange-900 mb-1">🎯 助记口诀：</p>
  <p class="text-orange-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">&lt;输入 &gt;覆盖输出 &gt;&gt;追加输出</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mt-3">
              <div class="font-bold text-cyan-900 mb-2">🚰 场景类比：I/O重定向就像水管系统</div>
              <p class="text-cyan-800"><strong>&lt;</strong> 是从水库取水（读文件）；<strong>&gt;</strong> 是清空水桶再倒水（覆盖文件）；<strong>&gt;&gt;</strong> 是往水桶里加水（追加内容）；<strong>|</strong> 是用管道连接两个水池（第一个命令的输出流向第二个命令）。水（数据）在管道里流动！</p>
            </div>`
          },
          {
            id: 'block_3_5_3',
            type: 'list',
            content: `<strong>管道的威力：</strong>
<div class="bg-gray-100 p-3 rounded mt-3 space-y-2">
  <div>
    <code class="block bg-white p-2 rounded">ls -l /dev | wc -l</code>
    <div class="text-sm mt-1">统计/dev目录下的文件数量</div>
  </div>
  <div>
    <code class="block bg-white p-2 rounded">cat /etc/passwd | grep "root" | wc -l</code>
    <div class="text-sm mt-1">统计含有"root"的行数（多级管道）</div>
  </div>
  <div>
    <code class="block bg-white p-2 rounded">ps aux | grep nginx | awk '{print $2}'</code>
    <div class="text-sm mt-1">查找nginx进程并提取进程ID</div>
  </div>
</div>`,
            mnemonic: '💡 <strong>管道口诀：</strong>"一个命令做一事，管道串联威力大"'
          }
        ]
      },

      {
        id: 'section_3_6',
        title: '常用目录操作命令',
        sectionNumber: '3.6',
        blocks: [
          {
            id: 'block_3_6_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-300"><h3 class="text-2xl font-bold text-green-800 flex items-center gap-2"><span class="text-3xl">🎯</span>ls命令组合拳<span class="ml-2 text-sm bg-green-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_6_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-green-500">
<p class="text-lg font-bold text-green-900 mb-3">五大目录操作命令：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-green-100">
      <th class="border border-gray-300 px-3 py-2">命令</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">常用选项</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="font-bold text-lg">ls</code></td>
      <td class="border border-gray-300 px-3 py-2">列出目录内容</td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1 font-semibold">-l -a -R -t</mark></td>
      <td class="border border-gray-300 px-3 py-2"><code>ls -lah</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="font-bold">cd</code></td>
      <td class="border border-gray-300 px-3 py-2">改变工作目录</td>
      <td class="border border-gray-300 px-3 py-2">- .. ~ ~-</td>
      <td class="border border-gray-300 px-3 py-2"><code>cd /tmp</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="font-bold">pwd</code></td>
      <td class="border border-gray-300 px-3 py-2">显示当前目录</td>
      <td class="border border-gray-300 px-3 py-2">-P -L</td>
      <td class="border border-gray-300 px-3 py-2"><code>pwd</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="font-bold">mkdir</code></td>
      <td class="border border-gray-300 px-3 py-2">创建目录</td>
      <td class="border border-gray-300 px-3 py-2">-p -m</td>
      <td class="border border-gray-300 px-3 py-2"><code>mkdir -p a/b/c</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="font-bold">rmdir</code></td>
      <td class="border border-gray-300 px-3 py-2">删除空目录</td>
      <td class="border border-gray-300 px-3 py-2">-p</td>
      <td class="border border-gray-300 px-3 py-2"><code>rmdir temp</code></td>
    </tr>
  </tbody>
</table>
<div class="mt-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
  <p class="font-bold text-green-900 mb-1">🎯 ls命令选项详解：</p>
  <ul class="text-green-800 space-y-1 ml-4">
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">-l</mark> 长格式显示（详细信息）</li>
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">-a</mark> 显示隐藏文件（以.开头）</li>
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">-h</mark> 人类可读文件大小</li>
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">-R</mark> 递归显示子目录</li>
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">-t</mark> 按修改时间排序</li>
  </ul>
</div>
</div>`,
            mnemonic: '💡 <strong>助记口诀：</strong>"列(ls)、进(cd)、看(pwd)、建(mkdir)、删(rmdir)"',
            scenario: `<div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-3">
              <div class="font-bold text-yellow-900 mb-2">🏠 场景类比：目录操作就像在房子里走动</div>
              <p class="text-yellow-800"><strong>ls</strong>是开灯看房间里有什么；<strong>cd</strong>是从一个房间走到另一个房间；<strong>pwd</strong>是看门牌号知道自己在哪；<strong>mkdir</strong>是盖新房间；<strong>rmdir</strong>是拆掉空房间。</p>
            </div>`
          }
        ]
      },

      {
        id: 'section_3_7',
        title: '设备文件与链接',
        sectionNumber: '3.7',
        blocks: [
          {
            id: 'block_3_7_1_devices',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-indigo-500">
<p class="text-lg font-bold text-indigo-900 mb-3">常见设备文件种类：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-indigo-100">
      <th class="border border-gray-300 px-3 py-2">标识</th>
      <th class="border border-gray-300 px-3 py-2">类型</th>
      <th class="border border-gray-300 px-3 py-2">说明</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold">b</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-indigo-700">块设备文件</strong></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">以块方式存取</mark>（硬盘、磁盘、磁带）</td>
      <td class="border border-gray-300 px-3 py-2">/dev/sda</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold">c</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-indigo-700">字符设备文件</strong></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">以字符方式存取</mark>（字符打印机、显示器）</td>
      <td class="border border-gray-300 px-3 py-2">/dev/tty</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold">l</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-indigo-700">符号链接</strong></td>
      <td class="border border-gray-300 px-3 py-2">通过文件内容指向它所链接的文件</td>
      <td class="border border-gray-300 px-3 py-2">/dev/cdrom → sr0</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold">p</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-indigo-700">管道设备文件</strong></td>
      <td class="border border-gray-300 px-3 py-2">用于进程间通信的FIFO临时文件</td>
      <td class="border border-gray-300 px-3 py-2">mkfifo mypipe</td>
    </tr>
  </tbody>
</table>
<div class="mt-4 bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-400">
  <p class="font-bold text-indigo-900 mb-1">🎯 助记口诀：</p>
  <p class="text-indigo-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">b块 c字符 l链接 p管道</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mt-3">
              <div class="font-bold text-purple-900 mb-2">🔌 场景类比：设备文件就像公司的设备</div>
              <p class="text-purple-800"><strong>块设备b</strong>是仓库货架（整箱整箱搬，如硬盘）；<strong>字符设备c</strong>是打印机（一个个字符打印）；<strong>符号链接l</strong>是快捷方式（指向真实设备）；<strong>管道p</strong>是传送带（进程间传数据）。</p>
            </div>`,
            mnemonic: '💡 <strong>重点记忆：</strong>Linux把所有I/O设备都看成文件，统一操作，简化管理！'
          },
          {
            id: 'block_3_7_1_pipe_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-xl border-2 border-blue-300 mt-4"><h3 class="text-2xl font-bold text-blue-800 flex items-center gap-2"><span class="text-3xl">🎯</span>两类管道定义<span class="ml-2 text-sm bg-blue-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_7_2_pipes',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-blue-500">
<p class="text-lg font-bold text-blue-900 mb-3">两类管道设备：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-cyan-100">
      <th class="border border-gray-300 px-3 py-2 w-1/4">类型</th>
      <th class="border border-gray-300 px-3 py-2">特点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-blue-700 text-lg">无名管道</strong></td>
      <td class="border border-gray-300 px-3 py-2">
        • <mark class="bg-yellow-200 px-1 font-semibold">主要用于有直接继承关系的父子进程之间</mark>的通信<br/>
        • <mark class="bg-yellow-200 px-1">当创建无名管道的进程结束后，无名管道自动消失</mark><br/>
        • 示例：<code>ls | wc -l</code>（管道符|创建的就是无名管道）
      </td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-blue-700 text-lg">命名管道</strong></td>
      <td class="border border-gray-300 px-3 py-2">
        • 是一种<mark class="bg-yellow-200 px-1 font-semibold">特殊的设备文件</mark>，在文件系统里以文件形式存在<br/>
        • 由于是以文件形式存在，<mark class="bg-yellow-200 px-1 font-semibold">不论是否有家族关系的进程间都可使用</mark>其进行通信<br/>
        • <mark class="bg-yellow-200 px-1">在通信结束后，若不主动删除它，它不会自动消失</mark><br/>
        • 创建：<code>mkfifo mypipe</code>
      </td>
    </tr>
  </tbody>
</table>
<div class="mt-4 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
  <p class="font-bold text-blue-900 mb-1">🎯 核心区别：</p>
  <p class="text-blue-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">无名管道：父子进程专用，自动消失；命名管道：任意进程通用，手动删除</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mt-3">
              <div class="font-bold text-cyan-900 mb-2">📞 场景类比：管道就像通信工具</div>
              <p class="text-cyan-800"><strong>无名管道</strong>是父母和孩子之间的对讲机（只能家人用，关机就没了）；<strong>命名管道</strong>是公司内部电话（有分机号，任何人都能打，除非拆除否则一直在）。</p>
            </div>`
          },
          {
            id: 'block_3_7_3_link_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-300 mt-4"><h3 class="text-2xl font-bold text-green-800 flex items-center gap-2"><span class="text-3xl">🎯</span>两类文件链接<span class="ml-2 text-sm bg-green-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_7_4_links',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-green-500">
<p class="text-lg font-bold text-green-900 mb-3">两类文件链接对比：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-green-100">
      <th class="border border-gray-300 px-3 py-2 w-1/5">特性</th>
      <th class="border border-gray-300 px-3 py-2">硬链接（-）</th>
      <th class="border border-gray-300 px-3 py-2">符号链接/软链接（l）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2 font-bold">定义</td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1 font-semibold">两个或多个文件名共用一个文件体</mark>，一个文件可有多个名字，<mark class="bg-yellow-200 px-1">具有相同的i节点号</mark></td>
      <td class="border border-gray-300 px-3 py-2">不同的文件，<mark class="bg-yellow-200 px-1">各有自己的i节点</mark>，但可通过符号链接文件的内容访问被链接文件</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2 font-bold">inode编号</td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1 font-semibold">具有相同的inodes编号</mark></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">具有不同的inode编号</mark></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2 font-bold">链接数</td>
      <td class="border border-gray-300 px-3 py-2">ls -l显示链接数</td>
      <td class="border border-gray-300 px-3 py-2">ls -l显示链接计数为1，并指向原始文件</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2 font-bold">文件内容</td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">链接有实际的文件内容</mark></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">软链接包含原始文件的路径，而不是内容</mark></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2 font-bold">删除链接</td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1 font-semibold">删除任何链接，只是减少链接计数，但不影响其他链接</mark>。即使原始文件被删除，链接仍将显示文件的内容</td>
      <td class="border border-gray-300 px-3 py-2">删除软链接不影响任何内容，但<mark class="bg-yellow-200 px-1">当原始文件被删除时，该链接将成为悬空链接</mark></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2 font-bold">目录支持</td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">不能为目录创建硬链接</mark></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">软链接可以链接到目录</mark></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2 font-bold">创建命令</td>
      <td class="border border-gray-300 px-3 py-2"><code>ln 源文件 链接文件名</code></td>
      <td class="border border-gray-300 px-3 py-2"><code>ln -s 源文件 链接文件名</code></td>
    </tr>
  </tbody>
</table>
<div class="mt-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
  <p class="font-bold text-green-900 mb-1">🎯 核心区别：</p>
  <p class="text-green-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">硬链接=同一文件多个名字（相同inode），软链接=快捷方式（不同inode）</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400 mt-3">
              <div class="font-bold text-emerald-900 mb-2">📄 场景类比：链接就像文件的别名</div>
              <p class="text-emerald-800"><strong>硬链接</strong>是同一个人有多个身份证号码，删除一个身份证，人还在（文件还在）；<strong>软链接</strong>是Windows的快捷方式，双击快捷方式能打开源文件，但删除源文件后快捷方式就失效了。</p>
            </div>`,
            mnemonic: '💡 <strong>记忆技巧：</strong>链接为Linux解决文件共享使用，带来<mark class="bg-yellow-200 px-1">隐藏文件路径、增加权限安全、节省存储</mark>等好处'
          }
        ]
      },

      {
        id: 'section_3_8',
        title: '引号机制与变量',
        sectionNumber: '3.8',
        blocks: [
          {
            id: 'block_3_8_1_quotes',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-pink-500">
<p class="text-lg font-bold text-pink-900 mb-3">Shell中的三种引号：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-rose-100">
      <th class="border border-gray-300 px-3 py-2 w-1/5">引号类型</th>
      <th class="border border-gray-300 px-3 py-2">作用</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold text-lg">'...'</code><br/><strong class="text-pink-700">单引号</strong></td>
      <td class="border border-gray-300 px-3 py-2">
        • <mark class="bg-yellow-200 px-1 font-semibold">所有字符都作为普通字符</mark>，特殊字符失去原有意义<br/>
        • <mark class="bg-yellow-200 px-1">不进行变量替换和命令替换</mark><br/>
        • 示例：<code>string='$PATH'</code> → 输出：$PATH（原样输出）
      </td>
      <td class="border border-gray-300 px-3 py-2"><code>$ echo '$PATH'</code><br/>输出：$PATH</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold text-lg">"..."</code><br/><strong class="text-pink-700">双引号</strong></td>
      <td class="border border-gray-300 px-3 py-2">
        • <mark class="bg-yellow-200 px-1 font-semibold">可以进行变量替换和命令替换</mark><br/>
        • 特殊字符仍具有特殊意义（$、反引号、\、"）<br/>
        • 双引号内的双引号必须表示为 <code>\"</code><br/>
        • 示例：<code>myself="I am \"$myname\""</code>
      </td>
      <td class="border border-gray-300 px-3 py-2"><code>$ echo "$PATH"</code><br/>输出：/usr/bin:/bin:...</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold text-lg">\`...\`</code><br/><strong class="text-pink-700">反单引号</strong></td>
      <td class="border border-gray-300 px-3 py-2">
        • <mark class="bg-yellow-200 px-1 font-semibold">命令替换</mark>（Command Substitution）<br/>
        • <mark class="bg-yellow-200 px-1">反单引号内的内容作为命令首先被执行</mark>，然后将命令的标准输出替换反单引号位置<br/>
        • 另一种形式：<code>$(cmd)</code> 功能更强<br/>
        • 示例：<code>x=\`pwd\`</code>、<code>y=$(whoami)</code>
      </td>
      <td class="border border-gray-300 px-3 py-2"><code>$ x=\`pwd\`</code><br/><code>$ echo $x</code><br/>输出：/home/user</td>
    </tr>
  </tbody>
</table>
<div class="mt-4 bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400">
  <p class="font-bold text-pink-900 mb-1">🎯 核心记忆：</p>
  <p class="text-pink-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">单引号'原样输出'，双引号"可替换"，反单引号执行命令</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400 mt-3">
              <div class="font-bold text-rose-900 mb-2">📝 场景类比：引号就像不同的包装盒</div>
              <p class="text-rose-800"><strong>单引号'</strong>是透明密封袋，里面什么都看得见但不能动（原样保存）；<strong>双引号"</strong>是可以换东西的盒子（可以把变量替换成值）；<strong>反单引号</strong>是魔法盒，先执行里面的咒语再把结果放进来。</p>
            </div>`,
            mnemonic: '💡 <strong>记忆口诀：</strong>单引号死板，双引号灵活，反引号先算'
          },
          {
            id: 'block_3_8_2_var_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl border-2 border-blue-300 mt-4"><h3 class="text-2xl font-bold text-blue-800 flex items-center gap-2"><span class="text-3xl">🎯</span>变量与环境变量<span class="ml-2 text-sm bg-blue-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_8_3_var',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-blue-500">
<p class="text-lg font-bold text-blue-900 mb-3">变量定义与使用：</p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <p class="font-bold mb-2">1. 变量定义方法：</p>
  <code class="block">var_name=var_value</code>
  <div class="text-sm mt-1">注意：<mark class="bg-yellow-200 px-1">等号两边不能有空格</mark>！</div>
</div>

<div class="bg-yellow-50 p-3 rounded mt-3">
  <p class="font-bold mb-2">2. 变量使用示例：</p>
  <code class="block">$ x=123                  # 定义变量x，值为123</code>
  <code class="block">$ y='I am a student'     # 定义变量y</code>
  <code class="block">$ echo $x $y $HOME       # 显示变量值，引用变量用$</code>
  <code class="block">$ z="$x $y"              # 在双引号内可以引用变量</code>
</div>

<h3 class="text-lg font-bold text-blue-900 mb-2 mt-4">环境变量：</h3>
<p>Shell在开始执行时定义了一些<strong>和系统工作环境有关的变量</strong>，用来控制用户程序的执行，或为用户程序的执行提供环境支持。</p>

<div class="bg-green-50 p-3 rounded mt-3">
  <p class="font-bold mb-2">常用环境变量：</p>
  <table class="w-full text-sm">
    <tr>
      <td class="py-1"><code>HOME</code></td>
      <td class="py-1">家目录</td>
      <td class="py-1"><code>$ echo $HOME</code></td>
    </tr>
    <tr>
      <td class="py-1"><code>USER/LOGNAME</code></td>
      <td class="py-1">用户名</td>
      <td class="py-1"><code>$ echo $USER</code></td>
    </tr>
    <tr>
      <td class="py-1"><code>PATH</code></td>
      <td class="py-1"><mark class="bg-yellow-200 px-1 font-semibold">命令搜索路径</mark></td>
      <td class="py-1"><code>$ echo $PATH</code></td>
    </tr>
    <tr>
      <td class="py-1"><code>PWD</code></td>
      <td class="py-1">当前工作目录的绝对路径</td>
      <td class="py-1"><code>$ echo $PWD</code></td>
    </tr>
    <tr>
      <td class="py-1"><code>PS1/PS2</code></td>
      <td class="py-1">主提示符/辅提示符</td>
      <td class="py-1"><code>$ echo $PS1</code></td>
    </tr>
  </table>
</div>

<div class="bg-purple-50 p-3 rounded mt-3">
  <p class="font-bold mb-2">查看和设置环境变量：</p>
  <code class="block">$ env              # 显示所有环境变量</code>
  <code class="block">$ export           # 同上</code>
  <code class="block">$ export my_var="value"   # 定义环境变量</code>
  <code class="block">$ export -n my_var        # 撤销环境变量</code>
</div>

<div class="mt-4 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
  <p class="font-bold text-blue-900 mb-1">🎯 重点提示：</p>
  <ul class="text-blue-800 space-y-1 ml-4">
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">env、export、set</mark> 都可以查询环境变量</li>
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">$PATH</mark> 决定了命令搜索路径，非常重要！</li>
  </ul>
</div>
</div>`,
            scenario: `<div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mt-3">
              <div class="font-bold text-indigo-900 mb-2">🏭 场景类比：变量就像公司的公告板</div>
              <p class="text-indigo-800"><strong>普通变量</strong>是你自己的便签纸（只有你看得见）；<strong>环境变量</strong>是公司的公告板（所有程序都能看到）。<strong>$PATH</strong>就像公司的部门花名册，找命令就像找员工，先查花名册里列的部门位置！</p>
            </div>`,
            mnemonic: '💡 <strong>助记口诀：</strong>用户变量自己用，环境变量全局用；export导出全局，env查看全环境'
          }
        ]
      },

      {
        id: 'section_3_9',
        title: '常用文件操作命令',
        sectionNumber: '3.9',
        blocks: [
          {
            id: 'block_3_7_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-xl border-2 border-purple-300"><h3 class="text-2xl font-bold text-purple-800 flex items-center gap-2"><span class="text-3xl">🎯</span>more/less分页查看<span class="ml-2 text-sm bg-purple-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_7_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-purple-500">
<p class="text-lg font-bold text-purple-900 mb-3">核心文件操作命令：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-rose-100">
      <th class="border border-gray-300 px-3 py-2">命令</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">常用选项</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="font-bold">cat</code></td>
      <td class="border border-gray-300 px-3 py-2">显示/合并文件</td>
      <td class="border border-gray-300 px-3 py-2">-n -E -s</td>
      <td class="border border-gray-300 px-3 py-2"><code>cat file.txt</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="font-bold">cp</code></td>
      <td class="border border-gray-300 px-3 py-2">复制文件/目录</td>
      <td class="border border-gray-300 px-3 py-2">-r -i -a</td>
      <td class="border border-gray-300 px-3 py-2"><code>cp -r dir1 dir2</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="font-bold">mv</code></td>
      <td class="border border-gray-300 px-3 py-2">移动/重命名</td>
      <td class="border border-gray-300 px-3 py-2">-i -f</td>
      <td class="border border-gray-300 px-3 py-2"><code>mv old.txt new.txt</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code class="font-bold">rm</code></td>
      <td class="border border-gray-300 px-3 py-2">删除文件/目录</td>
      <td class="border border-gray-300 px-3 py-2">-r -f -i</td>
      <td class="border border-gray-300 px-3 py-2"><code>rm -rf dir</code></td>
    </tr>
    <tr class="bg-purple-50">
      <td class="border border-gray-300 px-3 py-2"><code class="font-bold text-lg text-purple-700">more/less</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-purple-700">分页查看文件</strong></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1 font-semibold">空格翻页</mark></td>
      <td class="border border-gray-300 px-3 py-2"><code>less big.log</code></td>
    </tr>
  </tbody>
</table>
<div class="mt-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
  <p class="font-bold text-purple-900 mb-1">🎯 more vs less：</p>
  <ul class="text-purple-800 space-y-1 ml-4">
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">more</mark> 只能向前翻页，看完自动退出</li>
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">less</mark> 可以前后翻页，功能更强大</li>
  </ul>
</div>
</div>`,
            scenario: `<div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mt-3">
              <div class="font-bold text-indigo-900 mb-2">📄 场景类比：文件操作就像处理文档</div>
              <p class="text-indigo-800"><strong>cat</strong>是打开文档看内容；<strong>cp</strong>是复印文档；<strong>mv</strong>是移动文档到另一个文件夹或改名；<strong>rm</strong>是把文档扔进碎纸机（-rf是连文件夹一起碎掉）；<strong>more/less</strong>是一页页翻看厚书。</p>
            </div>`,
            mnemonic: '⚠️ <strong>安全警告：</strong><code>rm -rf</code>威力巨大，删除前三思！特别是<code>rm -rf /</code>会删除整个系统！'
          }
        ]
      },

      {
        id: 'section_3_10',
        title: 'vi文本编辑器',
        sectionNumber: '3.10',
        blocks: [
          {
            id: 'block_3_10_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-xl border-2 border-amber-300"><h3 class="text-2xl font-bold text-amber-800 flex items-center gap-2"><span class="text-3xl">🎯</span>vi的三种工作模式<span class="ml-2 text-sm bg-amber-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_10_1_modes',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-orange-500">
<p class="text-lg font-bold text-orange-900 mb-3 flex items-center gap-2">vi的三种工作模式<span class="ml-2 text-sm bg-orange-500 text-white px-3 py-1 rounded-full">重点</span>：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-orange-100">
      <th class="border border-gray-300 px-3 py-2 w-1/5">模式名称</th>
      <th class="border border-gray-300 px-3 py-2">功能说明</th>
      <th class="border border-gray-300 px-3 py-2 w-1/4">如何进入</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-orange-700 text-lg">命令模式</strong></td>
      <td class="border border-gray-300 px-3 py-2">
        • <mark class="bg-yellow-200 px-1">当进入vi时，处在命令模式</mark><br/>
        • 可通过vi命令对文件内容进行处理<br/>
        • 可通过插入命令进入编辑模式
      </td>
      <td class="border border-gray-300 px-3 py-2">启动vi时默认进入</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-orange-700 text-lg">编辑模式</strong></td>
      <td class="border border-gray-300 px-3 py-2">
        • 可以对文件内容进行<mark class="bg-yellow-200 px-1">插入、修改、删除</mark>等编辑操作<br/>
        • 按<mark class="bg-yellow-200 px-1 font-semibold">Esc键</mark>返回命令模式
      </td>
      <td class="border border-gray-300 px-3 py-2">
        命令模式下输入：<br/>
        <code>i I a A o O</code>
      </td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-orange-700 text-lg">命令项模式<br/><span class="text-sm">(底行模式)</span></strong></td>
      <td class="border border-gray-300 px-3 py-2">
        • 在命令模式下输入<mark class="bg-yellow-200 px-1 font-semibold">冒号":"</mark>后，光标跳到底行<br/>
        • 输入相关命令完成指定操作（保存、退出、查找、替换等）
      </td>
      <td class="border border-gray-300 px-3 py-2">
        命令模式下输入：<br/>
        <code>:</code> （冒号）
      </td>
    </tr>
  </tbody>
</table>

<div class="mt-4 bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
  <p class="font-bold text-orange-900 mb-2">🎯 模式切换流程图：</p>
  <div class="bg-white p-3 rounded border border-orange-200 font-mono text-center">
    <div>启动vi → <span class="bg-blue-100 px-2 py-1 rounded">命令模式</span></div>
    <div class="my-2">↓ (i,a,o等)  ↑ (Esc)</div>
    <div><span class="bg-green-100 px-2 py-1 rounded">编辑模式</span></div>
    <div class="my-2">命令模式 ↔ (:) ↔ <span class="bg-purple-100 px-2 py-1 rounded">底行模式</span></div>
  </div>
</div>
</div>`,
            mnemonic: '💡 <strong>助记口诀：</strong>"进vi先命令，i/a/o来编辑，Esc回到命令，冒号底行走"'
          },
          {
            id: 'block_3_10_2_commands',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-amber-500 mt-4">
<p class="text-lg font-bold text-amber-900 mb-3">vi常用基本操作：</p>

<div class="mb-4">
  <h4 class="font-bold text-amber-800 mb-2">1. 编辑模式进入命令：</h4>
  <table class="w-full border-collapse">
    <thead>
      <tr class="bg-amber-50">
        <th class="border border-gray-300 px-2 py-1">命令</th>
        <th class="border border-gray-300 px-2 py-1">功能</th>
        <th class="border border-gray-300 px-2 py-1">命令</th>
        <th class="border border-gray-300 px-2 py-1">功能</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-2 py-1"><code>i</code></td>
        <td class="border border-gray-300 px-2 py-1">光标处插入</td>
        <td class="border border-gray-300 px-2 py-1"><code>I</code></td>
        <td class="border border-gray-300 px-2 py-1">行首插入</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-2 py-1"><code>a</code></td>
        <td class="border border-gray-300 px-2 py-1">光标后追加</td>
        <td class="border border-gray-300 px-2 py-1"><code>A</code></td>
        <td class="border border-gray-300 px-2 py-1">行末追加</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-2 py-1"><code>o</code></td>
        <td class="border border-gray-300 px-2 py-1">当前行后插入新行</td>
        <td class="border border-gray-300 px-2 py-1"><code>O</code></td>
        <td class="border border-gray-300 px-2 py-1">当前行前插入新行</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mb-4">
  <h4 class="font-bold text-amber-800 mb-2">2. 删除命令：</h4>
  <table class="w-full border-collapse">
    <tbody>
      <tr>
        <td class="border border-gray-300 px-2 py-1"><code>x / X</code></td>
        <td class="border border-gray-300 px-2 py-1">删除光标处/前的字符</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-2 py-1"><code>dd</code></td>
        <td class="border border-gray-300 px-2 py-1">删除当前行</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-2 py-1"><code>D / d0</code></td>
        <td class="border border-gray-300 px-2 py-1">删除到行末/行首</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mb-4">
  <h4 class="font-bold text-amber-800 mb-2">3. 保存与退出（底行模式）：</h4>
  <table class="w-full border-collapse">
    <tbody>
      <tr>
        <td class="border border-gray-300 px-2 py-1"><code>:w</code></td>
        <td class="border border-gray-300 px-2 py-1">保存但不退出</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-2 py-1"><code>:q</code></td>
        <td class="border border-gray-300 px-2 py-1">退出(未修改时)</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-2 py-1"><code>:wq / :x / ZZ</code></td>
        <td class="border border-gray-300 px-2 py-1">保存并退出</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-2 py-1"><code>:q! / ZQ</code></td>
        <td class="border border-gray-300 px-2 py-1">不保存强制退出</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mt-4 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
  <p class="font-bold text-amber-900 mb-1">🎯 最常用组合：</p>
  <p class="text-amber-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">:wq 保存退出 | :q! 强制退出 | dd 删除行 | /keyword 搜索</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-3">
              <div class="font-bold text-yellow-900 mb-2">📝 场景类比：vi就像Word编辑器</div>
              <p class="text-yellow-800">打开Word要先看文档（<strong>命令模式</strong>），双击某处才能输入文字（<strong>编辑模式</strong>），按Esc返回查看模式，点击菜单栏（<strong>底行模式</strong>）执行保存、查找等操作。vi也是这样三层结构！</p>
            </div>`,
            mnemonic: '💡 <strong>新手必记：</strong>进vi按i开始编辑，编辑完按Esc，输入:wq保存退出，输入:q!放弃修改！'
          }
        ]
      },

      {
        id: 'section_3_11',
        title: 'wc文件统计与进程管理',
        sectionNumber: '3.11',
        blocks: [
          {
            id: 'block_3_11_1_wc',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-teal-500">
<p class="text-lg font-bold text-teal-900 mb-3">wc命令 - 文件内容统计：</p>
<p class="mb-3"><mark class="bg-yellow-200 px-2 py-1 rounded">wc对输入文件进行统计</mark>：行数、单词数、字节数等。</p>

<h4 class="font-bold text-teal-800 mb-2">常用选项：</h4>
<table class="w-full border-collapse mt-2">
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2 w-1/4"><code>-l</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1 font-semibold">统计行数</mark>（最常用）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-w</code></td>
      <td class="border border-gray-300 px-3 py-2">统计单词数</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-c / -m</code></td>
      <td class="border border-gray-300 px-3 py-2">字节数/字符数统计</td>
    </tr>
  </tbody>
</table>

<h4 class="font-bold text-teal-800 mb-2 mt-4">使用示例：</h4>
<div class="bg-gray-100 p-3 rounded space-y-2">
  <div>
    <code class="block">$ wc -l /etc/passwd</code>
    <span class="text-sm text-gray-600">统计系统有多少个用户（行数）</span>
  </div>
  <div>
    <code class="block">$ ls -l | wc -l</code>
    <span class="text-sm text-gray-600">统计当前目录的文件数量（与管道结合）</span>
  </div>
</div>
</div>`,
            mnemonic: '💡 <strong>助记：</strong>wc = <strong>W</strong>ord <strong>C</strong>ount（单词计数），最常用<code>-l</code>统计行数'
          },
          {
            id: 'block_3_11_2_process_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-xl border-2 border-red-300 mt-4"><h3 class="text-2xl font-bold text-red-800 flex items-center gap-2"><span class="text-3xl">🎯</span>进程管理与信号<span class="ml-2 text-sm bg-red-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_3_11_3_signals',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-red-500">
<p class="text-lg font-bold text-red-900 mb-3">常用信号类型：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-red-100">
      <th class="border border-gray-300 px-3 py-2 w-1/6">信号编号</th>
      <th class="border border-gray-300 px-3 py-2 w-1/6">信号名</th>
      <th class="border border-gray-300 px-3 py-2">含义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2 text-center"><code>2</code></td>
      <td class="border border-gray-300 px-3 py-2"><code>INT</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1 font-semibold">中断信号</mark>，常用<code>Ctrl+C</code>发出，表示结束进程但并不强制</td>
    </tr>
    <tr class="bg-red-50">
      <td class="border border-gray-300 px-3 py-2 text-center"><code class="font-bold text-red-700">9</code></td>
      <td class="border border-gray-300 px-3 py-2"><code class="font-bold text-red-700">KILL</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1 font-semibold">杀死进程，即强制结束进程</mark>（不可被捕获）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2 text-center"><code>15</code></td>
      <td class="border border-gray-300 px-3 py-2"><code>TERM</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">正常结束进程，是kill命令的默认信号</mark></td>
    </tr>
  </tbody>
</table>

<div class="mt-4 bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
  <p class="font-bold text-red-900 mb-1">🎯 最重要的三个信号：</p>
  <ul class="text-red-800 space-y-1 ml-4">
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">信号2 (INT)</mark> - Ctrl+C产生，礼貌地请求结束</li>
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">信号9 (KILL)</mark> - 强制杀死，不可拒绝（最常用！）</li>
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">信号15 (TERM)</mark> - 正常结束，kill命令的默认信号</li>
  </ul>
</div>
</div>`,
            mnemonic: '💡 <strong>助记：</strong>信号9就像"死亡通知书"，进程收到必须立刻结束，无法拒绝！'
          },
          {
            id: 'block_3_11_4_pstree',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-green-500 mt-4">
<p class="text-lg font-bold text-green-900 mb-3">pstree - 查看进程树：</p>
<p class="mb-3"><mark class="bg-yellow-200 px-2 py-1 rounded">显示系统内进程间的关系（进程树）</mark>。所有进程以<code>init(1)</code>为根。</p>

<h4 class="font-bold text-green-800 mb-2">常用参数：</h4>
<table class="w-full border-collapse">
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2 w-1/4"><code>-p</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1 font-semibold">显示pid（最常用）</mark></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-u</code></td>
      <td class="border border-gray-300 px-3 py-2">显示用户名称</td>
    </tr>
  </tbody>
</table>

<h4 class="font-bold text-green-800 mb-2 mt-4">使用示例：</h4>
<div class="bg-gray-100 p-3 rounded space-y-2">
  <div>
    <code class="block">$ pstree -p | grep vsftpd</code>
    <span class="text-sm text-gray-600">查询vsftpd进程的PID</span>
  </div>
</div>

<div class="mt-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
  <p class="font-bold text-green-900 mb-1">🎯 最常用组合：</p>
  <p class="text-green-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">pstree -p | grep 进程名</mark> - 查找某个进程的PID</p>
</div>
</div>`
          },
          {
            id: 'block_3_11_5_kill',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-red-500 mt-4">
<p class="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">kill - 终止进程执行<span class="ml-2 text-sm bg-red-500 text-white px-3 py-1 rounded-full">重点</span>：</p>
<p class="mb-3"><mark class="bg-yellow-200 px-2 py-1 rounded font-semibold">向指定进程（pid）发送一个特定的信号（signal）</mark>。默认发送终止信号<code>TERM(15)</code>。</p>

<h4 class="font-bold text-red-800 mb-2">命令格式：</h4>
<div class="bg-gray-100 p-3 rounded">
  <code>kill [-s signame | -n signum | -signum] pid ...</code><br/>
  <code>kill -l [signame]</code>
</div>

<h4 class="font-bold text-red-800 mb-2 mt-4">使用示例：</h4>
<div class="bg-gray-100 p-3 rounded space-y-2">
  <div>
    <code class="block">$ kill -9 3231</code>
    <span class="text-sm text-gray-600">发送信号9（KILL），强制终止PID为3231的进程</span>
  </div>
  <div>
    <code class="block">$ pstree -p | grep named</code>
    <span class="text-sm text-gray-600">先查询named进程的PID</span>
  </div>
  <div>
    <code class="block">$ kill -9 1656</code>
    <span class="text-sm text-gray-600">终止PID为1656的进程</span>
  </div>
</div>

<div class="mt-4 bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
  <p class="font-bold text-red-900 mb-1">🎯 最常用操作流程：</p>
  <ol class="text-red-800 space-y-1 ml-4 list-decimal">
    <li>先用<mark class="bg-yellow-200 px-1">pstree -p | grep 进程名</mark>查找进程的PID</li>
    <li>再用<mark class="bg-yellow-200 px-1">kill -9 PID</mark>强制终止进程</li>
  </ol>
</div>
</div>`,
            mnemonic: '⚠️ <strong>重要提醒：</strong>kill -9是最强硬的终止方式，进程无法拒绝。普通终止用<code>kill PID</code>即可（默认信号15）',
            scenario: `<div class="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400 mt-3">
              <div class="font-bold text-pink-900 mb-2">🏭 场景类比：进程就像工厂的生产线</div>
              <p class="text-pink-800">工厂有很多生产线（进程），每条生产线有编号（PID），主生产线（父进程）可以启动分支生产线（子进程）。厂长通过广播（信号）通知某条生产线停止工作（kill进程）。</p>
            </div>`
          }
        ]
      },

      {
        id: 'section_3_12',
        title: '其他常用命令',
        sectionNumber: '3.12',
        blocks: [
          {
            id: 'block_3_12_1_alias',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-purple-500">
<p class="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">alias/unalias - 别名管理<span class="ml-2 text-sm bg-purple-500 text-white px-3 py-1 rounded-full">重点</span>：</p>
<p class="mb-3"><mark class="bg-yellow-200 px-2 py-1 rounded">alias为可执行程序定义别名</mark>，常用的<code>ll</code>就是<code>ls -l</code>的别名。</p>

<h4 class="font-bold text-purple-800 mb-2">命令格式：</h4>
<div class="bg-gray-100 p-3 rounded">
  <code>alias [-p] [name[=value]] ...</code><br/>
  <code>unalias [-a] [name ...]</code>
</div>

<h4 class="font-bold text-purple-800 mb-2 mt-4">使用示例：</h4>
<div class="bg-gray-100 p-3 rounded space-y-2">
  <div>
    <code class="block">$ alias</code>
    <span class="text-sm text-gray-600">显示所有已定义的别名</span>
  </div>
  <div>
    <code class="block">$ alias li='ls -l -i'</code>
    <span class="text-sm text-gray-600">定义别名li，功能为ls -l -i</span>
  </div>
  <div>
    <code class="block">$ unalias ll</code>
    <span class="text-sm text-gray-600">取消别名ll</span>
  </div>
  <div>
    <code class="block">$ unalias -a</code>
    <span class="text-sm text-gray-600">取消所有别名</span>
  </div>
</div>

<div class="mt-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
  <p class="font-bold text-purple-900 mb-1">🎯 最常用别名：</p>
  <p class="text-purple-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">ll = ls -l</mark>（长格式列出文件）</p>
</div>
</div>`,
            scenario: `<div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mt-3">
              <div class="font-bold text-indigo-900 mb-2">🏷️ 场景类比：别名就像昵称</div>
              <p class="text-indigo-800">"Robert"的昵称是"Bob"，别人叫"Bob"就知道是Robert。alias也是这样，<code>ll</code>是<code>ls -l</code>的昵称，敲<code>ll</code>实际执行的是<code>ls -l</code>！</p>
            </div>`,
            mnemonic: '💡 <strong>记忆技巧：</strong>alias设置别名，unalias取消别名，常用ll代替ls -l'
          }
        ]
      }
    ]
  },

  // ========== 第四章：用户、组和密码安全管理 ==========
  {
    id: 'chp4',
    title: '第四章 用户、组与密码安全管理',
    chapterNumber: 'chp4',
    overview: '本章介绍Linux用户和组的概念、相关配置文件、用户组管理命令以及密码安全管理策略。',
    icon: '👥',
    estimatedMinutes: 90,

    skeleton: {
      scenarioIntro: {
        title: '🏢 想象你在管理一家公司',
        description: '🎪 你是公司人事总监，负责管理员工（用户）。每个员工有工号（UID）、所属部门（组GID）、门禁卡密码（登录密码）、办公桌（家目录）。有些员工是高管（root）能进所有房间，有些是普通员工（一般用户）只能进自己部门。你要确保：只有正式员工能进公司，离职员工及时删除账号，密码定期更换，不同部门的员工有不同权限！',
        problems: [
          '📛 员工档案：每个员工的工号、部门、办公桌在哪里查？（/etc/passwd = 用户数据库）',
          '🔐 密码保险箱：密码不能明文存，要加密藏起来！（/etc/shadow = 影子密码文件）',
          '🏢 部门管理：怎么把相同职能的员工分到一个部门共享资源？（组 = group）',
          '🆕 招聘新人：怎么快速给新员工开通账号和分配办公桌？（useradd = 创建用户）',
          '🔑 密码策略：怎么强制要求员工定期换密码？（passwd = 密码管理）'
        ]
      },

      framework: [
        '用户与UID、组与GID',
        '用户组配置文件（/etc/passwd、/etc/shadow、/etc/group）',
        '用户管理命令（useradd、userdel、usermod）',
        '组管理命令（groupadd、groupdel、groupmod）',
        '密码安全策略与管理',
        '用户身份查询命令（id、who、whoami）',
        '用户切换与权限提升（su、sudo）',
        '用户间通信命令（write、wall、tty）'
      ],

      knowledgeMap: {
        root: {
          id: 'root',
          title: '用户组与密码安全',
          level: 0,
          color: 'purple',
          icon: '👥'
        },
        chapters: [
          {
            id: 'ch4-1',
            title: '用户与组概念',
            level: 1,
            color: 'indigo',
            icon: '👤',
            sections: [
              {
                id: 'ch4-1-1',
                title: '用户与UID',
                level: 2,
                color: 'blue',
                icon: '🆔',
                items: [
                  { id: 'ch4-1-1-1', title: 'root用户（UID=0）', icon: '#️⃣' },
                  { id: 'ch4-1-1-2', title: '普通用户（UID≥1000）', icon: '👨' },
                  { id: 'ch4-1-1-3', title: '系统用户（1<UID<1000）', icon: '⚙️' }
                ]
              },
              {
                id: 'ch4-1-2',
                title: '组与GID',
                level: 2,
                color: 'cyan',
                icon: '👥',
                items: [
                  { id: 'ch4-1-2-1', title: '基本组', icon: '🏠' },
                  { id: 'ch4-1-2-2', title: '附加组', icon: '➕' },
                  { id: 'ch4-1-2-3', title: '组成员管理', icon: '👫' }
                ]
              }
            ]
          },
          {
            id: 'ch4-2',
            title: '配置文件',
            level: 1,
            color: 'green',
            icon: '📁',
            sections: [
              {
                id: 'ch4-2-1',
                title: '/etc/passwd',
                level: 2,
                color: 'teal',
                icon: '📄',
                items: [
                  { id: 'ch4-2-1-1', title: '7个字段结构', icon: '7️⃣' },
                  { id: 'ch4-2-1-2', title: 'UID/GID', icon: '🔢' },
                  { id: 'ch4-2-1-3', title: '家目录与Shell', icon: '🏠' }
                ]
              },
              {
                id: 'ch4-2-2',
                title: '/etc/shadow',
                level: 2,
                color: 'lime',
                icon: '🔐',
                items: [
                  { id: 'ch4-2-2-1', title: '加密密码', icon: '🔒' },
                  { id: 'ch4-2-2-2', title: '密码时效', icon: '⏰' },
                  { id: 'ch4-2-2-3', title: '账号锁定', icon: '🚫' }
                ]
              },
              {
                id: 'ch4-2-3',
                title: '/etc/group',
                level: 2,
                color: 'emerald',
                icon: '📋',
                items: [
                  { id: 'ch4-2-3-1', title: '组名与GID', icon: '🏷️' },
                  { id: 'ch4-2-3-2', title: '组成员列表', icon: '📝' }
                ]
              }
            ]
          },
          {
            id: 'ch4-3',
            title: '用户组管理',
            level: 1,
            color: 'orange',
            icon: '⚙️',
            sections: [
              {
                id: 'ch4-3-1',
                title: '用户管理',
                level: 2,
                color: 'amber',
                icon: '👤',
                items: [
                  { id: 'ch4-3-1-1', title: 'useradd 创建', icon: '➕' },
                  { id: 'ch4-3-1-2', title: 'userdel 删除', icon: '🗑️' },
                  { id: 'ch4-3-1-3', title: 'usermod 修改', icon: '✏️' }
                ]
              },
              {
                id: 'ch4-3-2',
                title: '组管理',
                level: 2,
                color: 'yellow',
                icon: '👥',
                items: [
                  { id: 'ch4-3-2-1', title: 'groupadd 创建', icon: '➕' },
                  { id: 'ch4-3-2-2', title: 'groupdel 删除', icon: '🗑️' },
                  { id: 'ch4-3-2-3', title: 'groupmod 修改', icon: '✏️' }
                ]
              },
              {
                id: 'ch4-3-3',
                title: '密码管理',
                level: 2,
                color: 'rose',
                icon: '🔑',
                items: [
                  { id: 'ch4-3-3-1', title: 'passwd 修改密码', icon: '🔐' },
                  { id: 'ch4-3-3-2', title: '账号锁定/解锁', icon: '🔒' },
                  { id: 'ch4-3-3-3', title: '密码时效设置', icon: '⏰' }
                ]
              }
            ]
          },
          {
            id: 'ch4-4',
            title: '用户身份与权限管理',
            level: 1,
            color: 'blue',
            icon: '🔐',
            sections: [
              {
                id: 'ch4-4-1',
                title: '身份查询命令',
                level: 2,
                color: 'sky',
                icon: '🆔',
                items: [
                  { id: 'ch4-4-1-1', title: 'id 查看UID/GID', icon: '🔢' },
                  { id: 'ch4-4-1-2', title: 'who 已登录用户', icon: '👥' },
                  { id: 'ch4-4-1-3', title: 'whoami 当前用户名', icon: '🤔' }
                ]
              },
              {
                id: 'ch4-4-2',
                title: 'su与sudo',
                level: 2,
                color: 'violet',
                icon: '🔄',
                items: [
                  { id: 'ch4-4-2-1', title: 'su 切换用户', icon: '🔁' },
                  { id: 'ch4-4-2-2', title: 'sudo 提升权限', icon: '⬆️' },
                  { id: 'ch4-4-2-3', title: '/etc/sudoers配置', icon: '📄' }
                ]
              },
              {
                id: 'ch4-4-3',
                title: '用户间通信',
                level: 2,
                color: 'teal',
                icon: '💬',
                items: [
                  { id: 'ch4-4-3-1', title: 'write 发消息', icon: '✉️' },
                  { id: 'ch4-4-3-2', title: 'wall 广播消息', icon: '📢' },
                  { id: 'ch4-4-3-3', title: 'tty 查终端', icon: '📍' }
                ]
              }
            ]
          }
        ]
      },

      keyPoints: [
        '用户由用户名和UID标识，系统通过UID识别用户；root的UID为0',
        '组由组名和GID标识，一个用户可属于多个组',
        '/etc/passwd存用户基本信息（7字段），/etc/shadow存加密密码',
        'useradd创建用户，userdel删除用户，usermod修改用户属性',
        'passwd管理密码，支持锁定/解锁账号、设置密码时效',
        '密码安全原则：定期更换、复杂度高、不共用、不含个人信息',
        'id显示UID/GID信息，who显示已登录用户，whoami显示当前用户名',
        'su切换用户身份（需对方密码），sudo临时提升权限（需自己密码）',
        'su - newuser切换新环境，su newuser保持原环境',
        'sudo由/etc/sudoers控制权限，修改必须用visudo命令'
      ],

      learningObjectives: [
        '理解Linux用户和组的概念及其安全意义',
        '掌握/etc/passwd、/etc/shadow、/etc/group文件结构',
        '学会使用useradd、userdel、usermod管理用户',
        '学会使用groupadd、groupdel、groupmod管理组',
        '掌握passwd命令和密码安全策略',
        '掌握id、who、whoami命令查询用户身份',
        '理解su和sudo的区别，掌握它们的使用场景',
        '了解/etc/sudoers配置文件的基本结构',
        '掌握write、wall等用户间通信命令'
      ]
    },

    sections: [
      {
        id: 'section_4_1',
        title: '用户与UID、组与GID',
        sectionNumber: '4.1',
        blocks: [
          {
            id: 'block_4_1_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-xl border-2 border-indigo-300"><h3 class="text-2xl font-bold text-indigo-800 flex items-center gap-2"><span class="text-3xl">🎯</span>uid与gid概念<span class="ml-2 text-sm bg-indigo-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_4_1_1',
            type: 'highlight',
            content: '<strong>每个用户都有用户名和UID（用户标识）</strong>，系统通过UID来识别用户；<strong>每个组都有组名和GID（组标识）</strong>。',
            keywords: ['UID', 'GID', '用户标识', '组标识']
          },
          {
            id: 'block_4_1_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-indigo-500">
<p class="text-lg font-bold text-indigo-900 mb-3">用户分类：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-blue-100">
      <th class="border border-gray-300 px-3 py-2">用户类型</th>
      <th class="border border-gray-300 px-3 py-2">UID范围</th>
      <th class="border border-gray-300 px-3 py-2">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-indigo-700 text-lg">超级用户root</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold">UID = 0</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">拥有系统最高权限</mark>，可做任何操作</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-indigo-700 text-lg">系统用户</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1">1 ≤ UID < 1000</code></td>
      <td class="border border-gray-300 px-3 py-2">运行系统服务的用户（如bin、daemon）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-indigo-700 text-lg">普通用户</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1">UID ≥ 1000</code></td>
      <td class="border border-gray-300 px-3 py-2">实际登录系统的用户</td>
    </tr>
  </tbody>
</table>
<div class="mt-4 bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-400">
  <p class="font-bold text-indigo-900 mb-1">🎯 重点记忆：</p>
  <ul class="text-indigo-800 space-y-1 ml-4">
    <li><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">系统通过UID识别用户</mark>，不是用户名</li>
    <li><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">/etc/passwd存用户，/etc/group存组</mark></li>
  </ul>
</div>
</div>`,
            scenario: `<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mt-3">
              <div class="font-bold text-purple-900 mb-2">🏢 场景类比：UID就像员工工号</div>
              <p class="text-purple-800"><strong>root（UID=0）</strong>是董事长工号001，权力最大；<strong>系统用户</strong>是保安、清洁工（工号002-999），维护公司运转；<strong>普通用户</strong>是普通员工（工号1000起），各司其职。公司通过工号识别你，不是通过名字！</p>
            </div>`
          },
          {
            id: 'block_4_1_3',
            type: 'text',
            content: '<h3><strong>组的概念</strong></h3><p>组是具有某种关联的<strong>用户集合</strong>。一个组可包含多个用户，一个用户也可参与多个组。用户信息存储在<code>/etc/passwd</code>，组信息存储在<code>/etc/group</code>。</p>'
          }
        ]
      },

      {
        id: 'section_4_2',
        title: '用户组配置文件',
        sectionNumber: '4.2',
        blocks: [
          {
            id: 'block_4_2_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-xl border-2 border-green-300"><h3 class="text-2xl font-bold text-green-800 flex items-center gap-2"><span class="text-3xl">🎯</span>/etc/passwd与/etc/shadow<span class="ml-2 text-sm bg-green-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_4_2_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-green-500">
<p class="text-lg font-bold text-green-900 mb-3">/etc/passwd文件结构（7字段）：</p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block text-lg">username:password:uid:gid:comment:dir:shell</code>
  <div class="mt-2 text-sm">
    <div>• <strong class="text-green-700">username</strong>：<mark class="bg-yellow-200 px-1">用户名，必须以字符开始</mark></div>
    <div>• <strong class="text-green-700">password</strong>：密码（现已移至/etc/shadow，这里显示x）</div>
    <div>• <strong class="text-green-700">uid</strong>：<mark class="bg-yellow-200 px-1">用户标识号</mark></div>
    <div>• <strong class="text-green-700">gid</strong>：<mark class="bg-yellow-200 px-1">组标识号</mark></div>
    <div>• <strong class="text-green-700">comment</strong>：注释信息</div>
    <div>• <strong class="text-green-700">dir</strong>：<mark class="bg-yellow-200 px-1">用户家目录</mark></div>
    <div>• <strong class="text-green-700">shell</strong>：<mark class="bg-yellow-200 px-1">用户登录后使用的shell程序</mark></div>
  </div>
</div>

<div class="bg-yellow-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例：</div>
  <code class="block">root:x:0:0:root:/root:/bin/bash</code>
  <div class="text-sm mt-1">root用户，UID和GID都是0，家目录/root，使用bash</div>
</div>
<div class="mt-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
  <p class="font-bold text-green-900 mb-1">🎯 助记口诀：</p>
  <p class="text-green-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">名密uid-gid-注家shell</mark>（7字段顺序）</p>
</div>
</div>`,
            scenario: `<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-3">
              <div class="font-bold text-green-900 mb-2">📇 场景类比：/etc/passwd就像员工花名册</div>
              <p class="text-green-800">公司有个员工花名册，记录每个人的：姓名、工号、部门、办公室位置、使用的电脑系统。人事一查花名册就知道你的所有基本信息！</p>
            </div>`
          },
          {
            id: 'block_4_2_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-red-500 mt-4">
<p class="text-lg font-bold text-red-900 mb-3">/etc/shadow影子密码文件：</p>
<p class="mt-2"><mark class="bg-yellow-200 px-2 py-1 font-semibold">为了安全，密码加密后存在/etc/shadow</mark>（只有root可读）。</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-rose-100">
      <th class="border border-gray-300 px-3 py-2">字段</th>
      <th class="border border-gray-300 px-3 py-2">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-red-700">username</strong></td>
      <td class="border border-gray-300 px-3 py-2">用户名</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-red-700">password</strong></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1 font-semibold">加密后的密码</mark>（!!表示被锁定）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-red-700">lastchanged</strong></td>
      <td class="border border-gray-300 px-3 py-2">最后修改密码的日期</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-red-700">min/max</strong></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">密码最短/最长有效期</mark>（天数）</td>
    </tr>
  </tbody>
</table>
</div>`,
            scenario: `<div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-3">
              <div class="font-bold text-red-900 mb-2">🔐 场景类比：/etc/shadow就像保险箱</div>
              <p class="text-red-800">员工密码不能放在花名册上（太危险！），要加密后锁进保险箱，只有董事长（root）有钥匙。密码上写着"有效期到XX年XX月"，过期必须换新密码！</p>
            </div>`,
            mnemonic: '⚠️ <strong>安全警示：</strong>/etc/shadow权限必须是600（只有root可读写），否则系统极度不安全！'
          }
        ]
      },

      {
        id: 'section_4_3',
        title: '用户管理命令',
        sectionNumber: '4.3',
        blocks: [
          {
            id: 'block_4_3_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-amber-100 to-yellow-100 p-4 rounded-xl border-2 border-amber-300"><h3 class="text-2xl font-bold text-amber-800 flex items-center gap-2"><span class="text-3xl">🎯</span>用户管理命令<span class="ml-2 text-sm bg-amber-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_4_3_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-amber-500">
<p class="text-lg font-bold text-amber-900 mb-3">useradd - 创建新用户</p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">useradd [选项] 用户名</code>
</div>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-teal-100">
      <th class="border border-gray-300 px-3 py-2">选项</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-d</code></td>
      <td class="border border-gray-300 px-3 py-2">指定家目录</td>
      <td class="border border-gray-300 px-3 py-2"><code>-d /home/test</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-m</code></td>
      <td class="border border-gray-300 px-3 py-2">创建家目录</td>
      <td class="border border-gray-300 px-3 py-2"><code>-m</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-g</code></td>
      <td class="border border-gray-300 px-3 py-2">指定基本组</td>
      <td class="border border-gray-300 px-3 py-2"><code>-g users</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-s</code></td>
      <td class="border border-gray-300 px-3 py-2">指定Shell</td>
      <td class="border border-gray-300 px-3 py-2"><code>-s /bin/bash</code></td>
    </tr>
  </tbody>
</table>

<div class="bg-blue-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">完整示例：</div>
  <code class="block"># useradd -m -d /home/zhangsan -g users -s /bin/bash zhangsan</code>
  <div class="text-sm mt-1">创建用户zhangsan，家目录/home/zhangsan，属于users组</div>
  <code class="block mt-2"># passwd zhangsan</code>
  <div class="text-sm mt-1">为zhangsan设置密码（创建后必须设密码才能登录）</div>
</div>
<div class="mt-4 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
  <p class="font-bold text-amber-900 mb-1">🎯 重点提示：</p>
  <p class="text-amber-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">useradd创建、usermod修改、userdel删除、passwd设密码</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mt-3">
              <div class="font-bold text-amber-900 mb-2">🆕 场景类比：useradd就像入职手续</div>
              <p class="text-amber-800">新员工入职，人事给你：① 工号（UID）；② 分配部门（组）；③ 安排办公桌（家目录）；④ 配电脑系统（Shell）；⑤ 设置门禁卡密码（passwd）。一套流程走完才能正式上班！</p>
            </div>`
          },
          {
            id: 'block_4_3_2',
            type: 'list',
            content: `<strong>其他用户管理命令：</strong>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-indigo-100">
      <th class="border border-gray-300 px-3 py-2">命令</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>userdel</code></td>
      <td class="border border-gray-300 px-3 py-2">删除用户</td>
      <td class="border border-gray-300 px-3 py-2"><code>userdel -r zhangsan</code>（-r同时删家目录）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>usermod</code></td>
      <td class="border border-gray-300 px-3 py-2">修改用户</td>
      <td class="border border-gray-300 px-3 py-2"><code>usermod -l newname oldname</code>（改名）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>passwd</code></td>
      <td class="border border-gray-300 px-3 py-2">密码管理</td>
      <td class="border border-gray-300 px-3 py-2"><code>passwd zhangsan</code>（设密码）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>id</code></td>
      <td class="border border-gray-300 px-3 py-2">查看UID/GID</td>
      <td class="border border-gray-300 px-3 py-2"><code>id zhangsan</code></td>
    </tr>
  </tbody>
</table>`,
            mnemonic: '💡 <strong>安全原则：</strong>离职员工账号要及时删除（userdel -r），闲置账号是安全隐患！'
          }
        ]
      },

      {
        id: 'section_4_4',
        title: '组管理与密码安全',
        sectionNumber: '4.4',
        blocks: [
          {
            id: 'block_4_4_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-rose-100 to-pink-100 p-4 rounded-xl border-2 border-rose-300"><h3 class="text-2xl font-bold text-rose-800 flex items-center gap-2"><span class="text-3xl">🎯</span>密码设置注意事项<span class="ml-2 text-sm bg-rose-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_4_4_1',
            type: 'list',
            content: `<strong>组管理命令：</strong>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-green-100">
      <th class="border border-gray-300 px-3 py-2">命令</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>groupadd</code></td>
      <td class="border border-gray-300 px-3 py-2">创建新组</td>
      <td class="border border-gray-300 px-3 py-2"><code>groupadd dev_team</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>groupdel</code></td>
      <td class="border border-gray-300 px-3 py-2">删除组</td>
      <td class="border border-gray-300 px-3 py-2"><code>groupdel dev_team</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>groupmod</code></td>
      <td class="border border-gray-300 px-3 py-2">修改组</td>
      <td class="border border-gray-300 px-3 py-2"><code>groupmod -n newname oldname</code></td>
    </tr>
  </tbody>
</table>`
          },
          {
            id: 'block_4_4_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-rose-500 mt-4">
<p class="text-lg font-bold text-rose-900 mb-3">passwd密码管理：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-rose-100">
      <th class="border border-gray-300 px-3 py-2">选项</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-l</code></td>
      <td class="border border-gray-300 px-3 py-2">锁定用户</td>
      <td class="border border-gray-300 px-3 py-2"><code>passwd -l zhangsan</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-u</code></td>
      <td class="border border-gray-300 px-3 py-2">解锁用户</td>
      <td class="border border-gray-300 px-3 py-2"><code>passwd -u zhangsan</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-x</code></td>
      <td class="border border-gray-300 px-3 py-2">密码最长有效期</td>
      <td class="border border-gray-300 px-3 py-2"><code>passwd -x 90 zhangsan</code>（90天）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-n</code></td>
      <td class="border border-gray-300 px-3 py-2">密码最短有效期</td>
      <td class="border border-gray-300 px-3 py-2"><code>passwd -n 7 zhangsan</code>（7天内不能改）</td>
    </tr>
  </tbody>
</table>

<div class="bg-red-100 p-3 rounded mt-3">
  <div class="font-bold text-red-900 mb-2">🔑 密码安全六原则：</div>
  <ol class="text-sm text-red-800 space-y-1 ml-4">
    <li><strong class="text-red-700">① 定期更换密码</strong>（建议90天）</li>
    <li><strong class="text-red-700">② 不包含用户名、生日、电话等个人信息</strong></li>
    <li><strong class="text-red-700">③ 不同系统使用不同密码</strong></li>
    <li><strong class="text-red-700">④ 密码易记但不写在纸上</strong></li>
    <li><strong class="text-red-700">⑤ 严禁共用密码</strong></li>
    <li><strong class="text-red-700">⑥ 输入密码时防止被窥视</strong></li>
  </ol>
</div>
<div class="mt-4 bg-rose-50 p-3 rounded-lg border-l-4 border-rose-400">
  <p class="font-bold text-rose-900 mb-1">🎯 助记口诀：</p>
  <p class="text-rose-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">定期换、不泄露、够复杂、别共用</mark>（密码安全四要素）</p>
</div>
</div>`,
            scenario: `<div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mt-3">
              <div class="font-bold text-cyan-900 mb-2">🔐 场景类比：密码管理就像门禁卡管理</div>
              <p class="text-cyan-800"><strong>passwd -l</strong>是冻结门禁卡（员工违规暂时不能进公司）；<strong>passwd -u</strong>是解冻；<strong>-x 90</strong>是规定门禁卡90天后过期必须换新卡；<strong>-n 7</strong>是换卡后7天内不能再换（防止频繁更换）。</p>
            </div>`,
            mnemonic: '💡 <strong>助记口诀：</strong>"定期换、不泄露、够复杂、别共用" - 密码安全四要素'
          }
        ]
      },

      {
        id: 'section_4_5',
        title: 'id、who、whoami命令',
        sectionNumber: '4.5',
        blocks: [
          {
            id: 'block_4_5_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-blue-100 to-sky-100 p-4 rounded-xl border-2 border-blue-300"><h3 class="text-2xl font-bold text-blue-800 flex items-center gap-2"><span class="text-3xl">🎯</span>用户身份查询命令<span class="ml-2 text-sm bg-blue-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_4_5_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-blue-500">
<p class="text-lg font-bold text-blue-900 mb-3">id - 显示用户UID/GID信息</p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">id [选项] [用户名]</code>
</div>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-sky-100">
      <th class="border border-gray-300 px-3 py-2">选项</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-u</code></td>
      <td class="border border-gray-300 px-3 py-2">显示有效UID</td>
      <td class="border border-gray-300 px-3 py-2"><code>id -u</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-g</code></td>
      <td class="border border-gray-300 px-3 py-2">显示有效GID</td>
      <td class="border border-gray-300 px-3 py-2"><code>id -g</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-G</code></td>
      <td class="border border-gray-300 px-3 py-2">显示所属的所有组</td>
      <td class="border border-gray-300 px-3 py-2"><code>id -G</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-n</code></td>
      <td class="border border-gray-300 px-3 py-2">以名字显示（与-u/-g配合）</td>
      <td class="border border-gray-300 px-3 py-2"><code>id -un</code></td>
    </tr>
  </tbody>
</table>

<div class="bg-blue-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">完整示例：</div>
  <code class="block">$ id zhangsan</code>
  <div class="text-sm mt-1">uid=1000(zhangsan) gid=1000(zhangsan) groups=1000(zhangsan)</div>
  <code class="block mt-2">$ id -un</code>
  <div class="text-sm mt-1">显示当前用户名</div>
</div>
</div>`,
            scenario: `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mt-3">
              <div class="font-bold text-blue-900 mb-2">🆔 场景类比：id就像查工牌</div>
              <p class="text-blue-800">你想知道某人的工号和部门，就看他的工牌：<strong>id zhangsan</strong>显示张三的工号（UID）、所属部门（GID）、参与的其他项目组（附加组）。自己查自己直接<code>id</code>就行！</p>
            </div>`
          },
          {
            id: 'block_4_5_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-cyan-500 mt-4">
<p class="text-lg font-bold text-cyan-900 mb-3">who - 显示已登录用户信息</p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">who [选项]</code>
</div>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-cyan-100">
      <th class="border border-gray-300 px-3 py-2">选项</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-H</code></td>
      <td class="border border-gray-300 px-3 py-2">显示标题头</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-q</code></td>
      <td class="border border-gray-300 px-3 py-2">显示用户名和用户数</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>who am i</code></td>
      <td class="border border-gray-300 px-3 py-2">显示操作者自己的信息</td>
    </tr>
  </tbody>
</table>

<div class="bg-yellow-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例：</div>
  <code class="block">$ who</code>
  <div class="text-sm mt-1">zhangsan  tty1  2025-01-01 08:00</div>
  <code class="block mt-2">$ who -H</code>
  <div class="text-sm mt-1">带标题显示所有在线用户</div>
</div>
</div>`,
            scenario: `<div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mt-3">
              <div class="font-bold text-cyan-900 mb-2">👥 场景类比：who就像查考勤表</div>
              <p class="text-cyan-800">公司有个电子考勤系统，<strong>who</strong>命令一看，就知道现在有哪些员工在线办公、几点上班的、在哪个工位（终端）。<code>who am i</code>是查自己的打卡记录！</p>
            </div>`
          },
          {
            id: 'block_4_5_3',
            type: 'highlight',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-green-500 mt-4">
<p class="text-lg font-bold text-green-900 mb-3">whoami - 显示当前用户名<span class="ml-2 text-sm bg-green-500 text-white px-3 py-1 rounded-full">重点</span></p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">whoami</code>
</div>
<p class="mt-3"><mark class="bg-yellow-200 px-2 py-1 font-semibold">功能相当于 id -un</mark>，显示与当前有效ID相关的用户名。</p>

<div class="bg-green-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例：</div>
  <code class="block">$ whoami</code>
  <div class="text-sm mt-1">zhangsan</div>
  <code class="block mt-2">$ id -un</code>
  <div class="text-sm mt-1">zhangsan （效果相同）</div>
</div>
<div class="mt-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
  <p class="font-bold text-green-900 mb-1">🎯 重点记忆：</p>
  <p class="text-green-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">whoami = id -un，显示当前用户名</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-3">
              <div class="font-bold text-green-900 mb-2">🤔 场景类比：whoami就像问"我是谁"</div>
              <p class="text-green-800">当你用<code>su</code>切换成其他用户后忘了自己现在是谁，敲<code>whoami</code>系统告诉你："你现在是zhangsan"。相当于看自己的工牌确认身份！</p>
            </div>`,
            mnemonic: '💡 <strong>记忆技巧：</strong>whoami = who am i（我是谁），最简单的身份确认命令'
          }
        ]
      },

      {
        id: 'section_4_6',
        title: 'su与sudo命令',
        sectionNumber: '4.6',
        blocks: [
          {
            id: 'block_4_6_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-xl border-2 border-orange-300"><h3 class="text-2xl font-bold text-orange-800 flex items-center gap-2"><span class="text-3xl">🎯</span>su与sudo的区别<span class="ml-2 text-sm bg-orange-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_4_6_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-orange-500">
<p class="text-lg font-bold text-orange-900 mb-3">su - 切换用户身份</p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">su [选项] [-] [新用户名 [参数]]</code>
</div>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-amber-100">
      <th class="border border-gray-300 px-3 py-2">选项</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-</code> 或 <code>-l</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">以新用户环境启动shell</mark></td>
      <td class="border border-gray-300 px-3 py-2"><code>su - root</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-c CMD</code></td>
      <td class="border border-gray-300 px-3 py-2">以新用户身份执行命令CMD</td>
      <td class="border border-gray-300 px-3 py-2"><code>su - root -c "ls"</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-s shell</code></td>
      <td class="border border-gray-300 px-3 py-2">切换时指定shell</td>
      <td class="border border-gray-300 px-3 py-2"><code>su -s /bin/zsh root</code></td>
    </tr>
  </tbody>
</table>

<div class="bg-orange-50 p-3 rounded mt-3">
  <div class="font-bold text-orange-900 mb-2">💡 关键区别：</div>
  <ul class="text-sm text-orange-800 space-y-1 ml-4">
    <li><code>su newuser</code> - <mark class="bg-yellow-200 px-1">保持原环境</mark>（工作目录不变）</li>
    <li><code>su - newuser</code> - <mark class="bg-yellow-200 px-1">切换新环境</mark>（进入新用户家目录）</li>
  </ul>
</div>

<div class="bg-red-50 p-3 rounded mt-3">
  <div class="font-bold text-red-900 mb-2">⚠️ 安全提示：</div>
  <ul class="text-sm text-red-800 space-y-1 ml-4">
    <li>• 从普通用户切换到其他用户<strong>必须输入对方密码</strong></li>
    <li>• 只有<strong>root切换到其他用户不需要密码</strong></li>
    <li>• 不指定用户名时<strong>默认切换到root</strong></li>
  </ul>
</div>

<div class="mt-4 bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
  <p class="font-bold text-orange-900 mb-1">🎯 助记口诀：</p>
  <p class="text-orange-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">su切人、sudo借权，su要密码、sudo配置权</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 mt-3">
              <div class="font-bold text-orange-900 mb-2">🔄 场景类比：su就像换工牌上班</div>
              <p class="text-orange-800">你是普通员工张三，临时要用经理的电脑干活。<code>su manager</code>就是换上经理工牌，但还坐在自己工位（原环境）；<code>su - manager</code>是换工牌后去经理办公室（新环境）。当然，换工牌需要经理的门禁密码！</p>
            </div>`
          },
          {
            id: 'block_4_6_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-purple-500 mt-4">
<p class="text-lg font-bold text-purple-900 mb-3">sudo - 以其他用户身份执行命令<span class="ml-2 text-sm bg-purple-500 text-white px-3 py-1 rounded-full">重点</span></p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">sudo [-选项] 命令</code>
</div>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-purple-100">
      <th class="border border-gray-300 px-3 py-2">选项</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-u user</code></td>
      <td class="border border-gray-300 px-3 py-2">以指定用户身份执行（默认root）</td>
      <td class="border border-gray-300 px-3 py-2"><code>sudo -u admin ls</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-l</code></td>
      <td class="border border-gray-300 px-3 py-2">列出当前用户可执行的命令</td>
      <td class="border border-gray-300 px-3 py-2"><code>sudo -l</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-k</code></td>
      <td class="border border-gray-300 px-3 py-2">强制下次输入密码</td>
      <td class="border border-gray-300 px-3 py-2"><code>sudo -k</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-s</code></td>
      <td class="border border-gray-300 px-3 py-2">启动shell</td>
      <td class="border border-gray-300 px-3 py-2"><code>sudo -s</code></td>
    </tr>
  </tbody>
</table>

<div class="bg-purple-50 p-3 rounded mt-3">
  <div class="font-bold text-purple-900 mb-2">🔑 /etc/sudoers配置文件：</div>
  <p class="text-sm text-purple-800 mb-2">格式：<code>用户 主机=(身份) 命令</code></p>
  <div class="bg-gray-100 p-2 rounded">
    <code class="block text-sm">root  ALL=(ALL)  ALL</code>
    <div class="text-xs mt-1">root可在任何位置以任何人身份执行任何命令</div>
    <code class="block text-sm mt-2">%wheel  ALL=(ALL)  ALL</code>
    <div class="text-xs mt-1">wheel组用户可在任何位置以任何人身份执行任何命令</div>
    <code class="block text-sm mt-2">zhangsan  ALL=(ALL)  /sbin/shutdown</code>
    <div class="text-xs mt-1">zhangsan只能执行shutdown命令</div>
  </div>
</div>

<div class="bg-red-100 p-3 rounded mt-3">
  <div class="font-bold text-red-900 mb-2">⚠️ 修改sudoers必须用visudo命令：</div>
  <code class="block"># visudo</code>
  <p class="text-sm mt-1">visudo会检查语法错误，防止配置文件损坏导致无法使用sudo！</p>
</div>

<div class="mt-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
  <p class="font-bold text-purple-900 mb-1">🎯 su与sudo的本质区别：</p>
  <ul class="text-purple-800 space-y-1 ml-4">
    <li><strong>su</strong>：<mark class="bg-yellow-200 px-1">切换用户身份</mark>，需要对方密码，启动新shell</li>
    <li><strong>sudo</strong>：<mark class="bg-yellow-200 px-1">临时借用权限</mark>，输入自己密码，执行单条命令</li>
  </ul>
</div>
</div>`,
            scenario: `<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mt-3">
              <div class="font-bold text-purple-900 mb-2">🎫 场景类比：sudo就像临时授权卡</div>
              <p class="text-purple-800">你是普通员工，需要进机房重启服务器（需要管理员权限）。<code>sudo reboot</code>相当于用自己的授权卡（/etc/sudoers配置的权限）临时获得管理员权力执行这一个操作，操作完立刻恢复普通员工身份。不像<code>su</code>需要完全变成管理员！</p>
            </div>`,
            mnemonic: '💡 <strong>核心区别：</strong>su要对方密码切换身份，sudo要自己密码临时借权'
          }
        ]
      },

      {
        id: 'section_4_7',
        title: 'write、wall、tty命令',
        sectionNumber: '4.7',
        blocks: [
          {
            id: 'block_4_7_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-teal-500">
<p class="text-lg font-bold text-teal-900 mb-3">write - 向指定用户发信息</p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">write 用户名 [终端名]</code>
</div>
<p class="mt-2">向系统中指定用户发送信息。若用户多处登录，需指定终端名。</p>

<div class="bg-teal-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例：</div>
  <code class="block">$ write zhangsan</code>
  <div class="text-sm mt-1">向zhangsan发消息，输入内容，按Ctrl+D结束</div>
  <code class="block mt-2">$ write zhangsan tty1</code>
  <div class="text-sm mt-1">向登录在tty1终端的zhangsan发消息</div>
</div>
</div>`,
            scenario: `<div class="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400 mt-3">
              <div class="font-bold text-teal-900 mb-2">💬 场景类比：write就像发内部消息</div>
              <p class="text-teal-800">公司内网有个即时通讯工具，<code>write zhangsan</code>就是给张三发消息："张三，会议室等你！"。如果张三同时在两台电脑登录，要指定发给哪台（tty1还是tty2）。</p>
            </div>`
          },
          {
            id: 'block_4_7_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-indigo-500 mt-4">
<p class="text-lg font-bold text-indigo-900 mb-3">wall - 向所有用户广播信息</p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">wall [文件]</code>
</div>
<p class="mt-2"><mark class="bg-yellow-200 px-1">向所有已登录用户发送广播信息</mark>，所有终端都会收到。</p>

<div class="bg-indigo-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例：</div>
  <code class="block">$ wall</code>
  <div class="text-sm mt-1">输入消息内容，按Ctrl+D发送</div>
  <code class="block mt-2">$ wall < notice.txt</code>
  <div class="text-sm mt-1">从文件读取内容并广播</div>
</div>

<div class="bg-red-50 p-3 rounded mt-3">
  <div class="font-bold text-red-900 mb-2">⚠️ 注意事项：</div>
  <ul class="text-sm text-red-800 space-y-1 ml-4">
    <li>• 系统允许最多20行消息，长行会被截断</li>
    <li>• 广播消息会扰乱接收者屏幕，请谨慎使用</li>
    <li>• 超级用户发送的消息无法被拒收</li>
  </ul>
</div>
</div>`,
            scenario: `<div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mt-3">
              <div class="font-bold text-indigo-900 mb-2">📢 场景类比：wall就像公司广播</div>
              <p class="text-indigo-800">公司大喇叭广播："各位同事注意，服务器将于10分钟后重启维护！"所有在线员工的电脑都弹出这条通知。<code>wall</code>就是这个大喇叭，一次通知所有人！</p>
            </div>`,
            mnemonic: '💡 <strong>记忆技巧：</strong>wall = write to all（写给所有人），群发消息'
          },
          {
            id: 'block_4_7_3',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-gray-500 mt-4">
<p class="text-lg font-bold text-gray-900 mb-3">tty - 显示当前终端设备</p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">tty [-s]</code>
</div>
<p class="mt-2">显示命令所使用的终端设备名，确定使用位置。</p>

<div class="bg-gray-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例：</div>
  <code class="block">$ tty</code>
  <div class="text-sm mt-1">/dev/pts/0 （显示当前终端名）</div>
  <code class="block mt-2">$ tty -s</code>
  <div class="text-sm mt-1">不输出，只返回状态码（0表示在终端运行）</div>
</div>
</div>`,
            scenario: `<div class="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400 mt-3">
              <div class="font-bold text-gray-900 mb-2">📍 场景类比：tty就像查工位号</div>
              <p class="text-gray-800">你在公司有多个工位可以办公，<code>tty</code>告诉你现在坐在哪个工位。比如显示<code>/dev/pts/0</code>就是"你在0号工位"，其他人要找你就知道往哪发消息了！</p>
            </div>`
          }
        ]
      }
    ]
  },

  // ========== 第五章：文件系统安全使用与管理 ==========
  {
    id: 'chp5',
    title: '第五章 文件系统安全使用与管理',
    chapterNumber: 'chp5',
    overview: '本章介绍文件系统权限管理、权限修改命令、文件系统的分区创建和挺载管理。',
    icon: '🗄️',
    estimatedMinutes: 90,

    skeleton: {
      scenarioIntro: {
        title: '🏠 想象你在管理一栋公寓',
        description: '🎪 你是公寓物业经理，管理一栋公寓楼（文件系统）。每个房间（文件/目录）都有三把钥匙：房主钥匙（用户权限）、家人钥匙（组权限）、客人钥匙（其他人权限）。每把钥匙有三种能力：进门查看（读 r）、移动家具（写 w）、随意进出（执行 x）。你的工作：给房主配钥匙，禁止陌生人乱进，整理硬盘分区！',
        problems: [
          '🔑 钥匙管理：房主、家人、客人分别有哪些权力？（rwx = 读写执行）',
          '🚪 门禁设置：怎么给某个房间设置"只有房主能进"？（chmod = 修改权限）',
          '🏠 房主变更：房子卖给别人了，怎么改房主名字？（chown = 改所有者）',
          '💾 硬盘分区：新硬盘怎么分区格式化后才能用？（fdisk + mkfs = 分区+格式化）',
          '📌 挺载磁盘：U盘插进电脑怎么让它显示出来？（mount = 挺载文件系统）'
        ]
      },

      framework: [
        '三种权限（读写执行）与三类人（u/g/o）',
        '权限的字符串和数字表示（rwx = 755）',
        'umask默认权限掌码',
        '权限管理命令（chmod、chown、chgrp）',
        '文件系统的分区、格式化与挣载',
        '文件系统检查与修复（fsck、sync）',
        '文件查找命令（find）',
        '链接管理命令（ln）',
        '磁盘空间统计（df、du）'
      ],

      knowledgeMap: {
        root: {
          id: 'root',
          title: '文件系统安全',
          level: 0,
          color: 'purple',
          icon: '🗄️'
        },
        chapters: [
          {
            id: 'ch5-1',
            title: '权限系统',
            level: 1,
            color: 'indigo',
            icon: '🔐',
            sections: [
              {
                id: 'ch5-1-1',
                title: '三种权限',
                level: 2,
                color: 'blue',
                icon: '🔑',
                items: [
                  { id: 'ch5-1-1-1', title: '读权限 r', icon: '👁️' },
                  { id: 'ch5-1-1-2', title: '写权限 w', icon: '✏️' },
                  { id: 'ch5-1-1-3', title: '执行权 x', icon: '▶️' }
                ]
              },
              {
                id: 'ch5-1-2',
                title: '三类人',
                level: 2,
                color: 'cyan',
                icon: '👥',
                items: [
                  { id: 'ch5-1-2-1', title: '用户主 u', icon: '👤' },
                  { id: 'ch5-1-2-2', title: '同组人 g', icon: '👫' },
                  { id: 'ch5-1-2-3', title: '其他人 o', icon: '👥' }
                ]
              }
            ]
          },
          {
            id: 'ch5-2',
            title: '权限管理命令',
            level: 1,
            color: 'green',
            icon: '⚙️',
            sections: [
              {
                id: 'ch5-2-1',
                title: 'chmod/chown/chgrp',
                level: 2,
                color: 'lime',
                icon: '🔐',
                items: [
                  { id: 'ch5-2-1-1', title: 'chmod 修改权限', icon: '🔑' },
                  { id: 'ch5-2-1-2', title: 'chown 改所有者', icon: '👤' },
                  { id: 'ch5-2-1-3', title: 'chgrp 改组', icon: '👥' }
                ]
              }
            ]
          },
          {
            id: 'ch5-3',
            title: '文件系统管理',
            level: 1,
            color: 'orange',
            icon: '💾',
            sections: [
              {
                id: 'ch5-3-1',
                title: '分区与挺载',
                level: 2,
                color: 'amber',
                icon: '💠',
                items: [
                  { id: 'ch5-3-1-1', title: 'fdisk 分区', icon: '🔧' },
                  { id: 'ch5-3-1-2', title: 'mkfs 格式化', icon: '✨' },
                  { id: 'ch5-3-1-3', title: 'mount/umount', icon: '📌' }
                ]
              }
            ]
          },
          {
            id: 'ch5-4',
            title: '文件系统检查与工具',
            level: 1,
            color: 'red',
            icon: '🔧',
            sections: [
              {
                id: 'ch5-4-1',
                title: '检查与修复',
                level: 2,
                color: 'rose',
                icon: '🛠️',
                items: [
                  { id: 'ch5-4-1-1', title: 'fsck 文件系统检查', icon: '🔍' },
                  { id: 'ch5-4-1-2', title: 'sync 同步', icon: '🔄' },
                  { id: 'ch5-4-1-3', title: '/lost+found', icon: '📦' }
                ]
              },
              {
                id: 'ch5-4-2',
                title: '文件查找',
                level: 2,
                color: 'purple',
                icon: '🔍',
                items: [
                  { id: 'ch5-4-2-1', title: 'find 查找文件', icon: '📍' },
                  { id: 'ch5-4-2-2', title: '-name 按名字', icon: '🏷️' },
                  { id: 'ch5-4-2-3', title: '-exec 执行命令', icon: '⚡' }
                ]
              },
              {
                id: 'ch5-4-3',
                title: '链接与空间',
                level: 2,
                color: 'teal',
                icon: '🔗',
                items: [
                  { id: 'ch5-4-3-1', title: 'ln 链接管理', icon: '🔗' },
                  { id: 'ch5-4-3-2', title: 'df 磁盘空间', icon: '📊' },
                  { id: 'ch5-4-3-3', title: 'du 目录大小', icon: '📦' }
                ]
              }
            ]
          }
        ]
      },

      keyPoints: [
        '文件权限分三种（rwx）和三类人（u/g/o），共九位权限位',
        '权限可用字符串（rwxr-xr-x）或数字（755）表示',
        'umask控制文件创建时的默认权限，root为022，普通用户为002',
        'chmod修改权限，chown改所有者，chgrp改组',
        '磁盘使用流程：fdisk分区 → mkfs格式化 → mount挣载',
        'mount挣载文件系统，umount卸载，/etc/fstab配置开机自动挣载',
        'fsck检查修复文件系统，不能对已挂载的文件系统操作',
        'find查找文件，支持-name/-size/-mtime/-user/-perm等多种条件',
        'ln创建链接：硬链接相同inode，软链接不同inode',
        'df查看整个文件系统使用情况，du统计具体目录/文件大小'
      ],

      learningObjectives: [
        '理解Linux文件权限的三类人和三种权限',
        '掌握权限的字符串和数字表示方法',
        '学会使用chmod、chown、chgrp修改权限',
        '掌握磁盘分区、格式化和挣载的基本操作',
        '理解umask和默认权限的关系',
        '掌握fsck文件系统检查与修复方法',
        '熟练使用find命令查找文件',
        '理解硬链接和软链接的区别',
        '掌握df和du命令统计磁盘空间使用'
      ]
    },

    sections: [
      {
        id: 'section_5_1',
        title: '文件权限系统',
        sectionNumber: '5.1',
        blocks: [
          {
            id: 'block_5_1_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl border-2 border-blue-300"><h3 class="text-2xl font-bold text-blue-800 flex items-center gap-2"><span class="text-3xl">🎯</span>三种基本权限<span class="ml-2 text-sm bg-blue-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_5_1_1',
            type: 'highlight',
            content: '<strong>文件权限分三种（rwx）和三类人（u/g/o）</strong>，组成九位权限位。',
            keywords: ['rwx', '三类人', '权限位']
          },
          {
            id: 'block_5_1_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-blue-500">
<p class="text-lg font-bold text-blue-900 mb-3">三种权限：</p>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-blue-100">
      <th class="border border-gray-300 px-3 py-2">权限</th>
      <th class="border border-gray-300 px-3 py-2">符号</th>
      <th class="border border-gray-300 px-3 py-2">对文件</th>
      <th class="border border-gray-300 px-3 py-2">对目录</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-blue-700 text-lg">读 r</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold">r</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">查看文件内容</mark></td>
      <td class="border border-gray-300 px-3 py-2">列出目录内容（ls）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-blue-700 text-lg">写 w</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold">w</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">修改文件内容</mark></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">创建/删除文件</mark></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-blue-700 text-lg">执行 x</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold">x</code></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">执行文件</mark></td>
      <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">进入目录</mark>（cd）</td>
    </tr>
  </tbody>
</table>

<strong class="block mt-4">三类人：</strong>
<ul class="space-y-2 ml-4 mt-2">
  <li><mark class="bg-blue-200 px-1">u (user)</mark> - 用户主（文件拥有者）</li>
  <li><mark class="bg-green-200 px-1">g (group)</mark> - 同组人（与文件同组的用户）</li>
  <li><mark class="bg-yellow-200 px-1">o (other)</mark> - 其他人（除u和g外的用户）</li>
</ul>
<div class="mt-4 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
  <p class="font-bold text-blue-900 mb-1">🎯 数字表示：</p>
  <p class="text-blue-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">r=4、w=2、x=1</mark>，rwx=7，r-x=5，rwxr-xr-x=755</p>
</div>
</div>`,
            scenario: `<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mt-3">
              <div class="font-bold text-purple-900 mb-2">🔑 场景类比：权限就像房间钥匙</div>
              <p class="text-purple-800">每个房间有三把钥匙：<strong>房主</strong>（u）、<strong>家人</strong>（g）、<strong>客人</strong>（o）。每把钥匙有三种能力：<strong>r-进门查看</strong>（看看家具但不能动）；<strong>w-移动家具</strong>（改家具摆放、买新家具、扔旧家具）；<strong>x-随意进出</strong>（目录的x是能不能进房间）。没权限就是-（门上没有这种钥匙孔）！</p>
            </div>`
          },
          {
            id: 'block_5_1_3',
            type: 'list',
            content: `<strong>权限表示方法：</strong>

<div class="bg-gray-100 p-3 rounded mt-3">
  <div class="font-bold mb-2">1、字符串表示：</div>
  <code class="block text-lg">rwxr-xr-x</code>
  <div class="text-sm mt-2">
    <div>• 前3位 rwx：用户主权限（可读写执行）</div>
    <div>• 中3位 r-x：同组人权限（可读执行，不可写）</div>
    <div>• 后3位 r-x：其他人权限（可读执行，不可写）</div>
  </div>
</div>

<div class="bg-gray-100 p-3 rounded mt-3">
  <div class="font-bold mb-2">2、数字表示（八进制）：</div>
  <table class="w-full mt-2 text-sm">
    <tr><td>• r=4, w=2, x=1</td></tr>
    <tr><td>• rwx = 4+2+1 = 7</td></tr>
    <tr><td>• r-x = 4+0+1 = 5</td></tr>
    <tr><td>• r-- = 4+0+0 = 4</td></tr>
  </table>
  <code class="block mt-2 text-lg">rwxr-xr-x = 755</code>
  <code class="block mt-1 text-lg">rw-r--r-- = 644</code>
</div>`,
            mnemonic: '💡 <strong>数字记忆：</strong>r=4 w=2 x=1，加起来就是权限值！如rwx=7, rw-=6, r-x=5, r--=4'
          }
        ]
      },

      {
        id: 'section_5_2',
        title: 'umask默认权限',
        sectionNumber: '5.2',
        blocks: [
          {
            id: 'block_5_2_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-cyan-100 to-teal-100 p-4 rounded-xl border-2 border-cyan-300"><h3 class="text-2xl font-bold text-cyan-800 flex items-center gap-2"><span class="text-3xl">🎯</span>文件创建掩码umask<span class="ml-2 text-sm bg-cyan-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_5_2_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-cyan-500">
<p class="text-lg font-bold text-cyan-900 mb-3">umask文件创建掩码：</p>
<p class="mt-2"><mark class="bg-yellow-200 px-2 py-1 font-semibold">umask控制新建文件/目录的默认权限</mark>，是权限的"补码"。</p>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-cyan-100">
      <th class="border border-gray-300 px-3 py-2">用户类型</th>
      <th class="border border-gray-300 px-3 py-2">umask值</th>
      <th class="border border-gray-300 px-3 py-2">文件默认权限</th>
      <th class="border border-gray-300 px-3 py-2">目录默认权限</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-cyan-700">root</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold">0022</code></td>
      <td class="border border-gray-300 px-3 py-2">644 (rw-r--r--)</td>
      <td class="border border-gray-300 px-3 py-2">755 (rwxr-xr-x)</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong class="text-cyan-700">普通用户</strong></td>
      <td class="border border-gray-300 px-3 py-2"><code class="bg-yellow-100 px-2 py-1 font-bold">0002</code></td>
      <td class="border border-gray-300 px-3 py-2">664 (rw-rw-r--)</td>
      <td class="border border-gray-300 px-3 py-2">775 (rwxrwxr-x)</td>
    </tr>
  </tbody>
</table>

<div class="bg-yellow-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">计算方法：</div>
  <div class="text-sm">
    <div>• 目录：<mark class="bg-yellow-200 px-1 font-semibold">777 - umask = 默认权限</mark></div>
    <div>• 文件：<mark class="bg-yellow-200 px-1 font-semibold">目录权限 - x权限 = 文件权限</mark></div>
    <div class="mt-2">示例：root的umask=022</div>
    <div>　目录：777-022=755</div>
    <div>　文件：755-111=644（去掉执行权）</div>
  </div>
</div>
<div class="mt-4 bg-cyan-50 p-3 rounded-lg border-l-4 border-cyan-400">
  <p class="font-bold text-cyan-900 mb-1">🎯 助记口诀：</p>
  <p class="text-cyan-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">777-umask=初始权限，文件再去掉x</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-3">
              <div class="font-bold text-green-900 mb-2">🎭 场景类比：umask就像默认锁</div>
              <p class="text-green-800">你买新房子，开发商默认给你装的锁：<strong>root的umask=022</strong>意思是“同组和其他人没有写权限”（等于锁住了w）；<strong>普通用户umask=002</strong>是“只锁住其他人的w”。你可以用<code>umask 077</code>把锁换成"只有房主能进"！</p>
            </div>`
          }
        ]
      },

      {
        id: 'section_5_3',
        title: '权限管理命令',
        sectionNumber: '5.3',
        blocks: [
          {
            id: 'block_5_3_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-xl border-2 border-teal-300"><h3 class="text-2xl font-bold text-teal-800 flex items-center gap-2"><span class="text-3xl">🎯</span>chmod与chown命令<span class="ml-2 text-sm bg-teal-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_5_3_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-teal-500">
<p class="text-lg font-bold text-teal-900 mb-3">chmod - 修改权限</p>

<div class="bg-gray-100 p-3 rounded mt-3">
  <div class="font-bold mb-2">符号模式：</div>
  <code class="block">chmod [u/g/o/a] [+/-/=] [r/w/x] 文件</code>
  <div class="text-sm mt-2">
    <div>• u/g/o/a：用户主/组/其他/所有</div>
    <div>• +/-/=：增加/删除/设置</div>
    <div>• r/w/x：读/写/执行</div>
  </div>
</div>

<div class="bg-blue-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例：</div>
  <code class="block"># chmod u+x file.sh</code>
  <div class="text-sm mt-1">给房主增加执行权限</div>
  
  <code class="block mt-2"># chmod g+w,o-r file.txt</code>
  <div class="text-sm mt-1">组增加写权限，其他人去掉读权限</div>
  
  <code class="block mt-2"># chmod a=rw file.txt</code>
  <div class="text-sm mt-1">所有人都设为rw</div>
</div>

<div class="bg-gray-100 p-3 rounded mt-3">
  <div class="font-bold mb-2">数字模式：</div>
  <code class="block">chmod 755 file</code>
  <div class="text-sm mt-2">
    <div>• 7(rwx) = 用户主可读写执行</div>
    <div>• 5(r-x) = 组和其他人可读执行</div>
  </div>
</div>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-teal-100">
      <th class="border border-gray-300 px-3 py-2">常用权限</th>
      <th class="border border-gray-300 px-3 py-2">数字</th>
      <th class="border border-gray-300 px-3 py-2">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>rwxr-xr-x</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong>755</strong></td>
      <td class="border border-gray-300 px-3 py-2">目录、可执行文件</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>rw-r--r--</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong>644</strong></td>
      <td class="border border-gray-300 px-3 py-2">普通文件</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>rwx------</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong>700</strong></td>
      <td class="border border-gray-300 px-3 py-2">私密文件</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>rw-------</code></td>
      <td class="border border-gray-300 px-3 py-2"><strong>600</strong></td>
      <td class="border border-gray-300 px-3 py-2">私密文件（/etc/shadow）</td>
    </tr>
  </tbody>
</table>`,
            scenario: `<div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mt-3">
              <div class="font-bold text-amber-900 mb-2">🚪 场景类比：chmod就像换锁</div>
              <p class="text-amber-800"><strong>chmod u+x</strong>是给房主加一把限制颗粒度（增加执行权）；<strong>chmod 755</strong>是直接换整套锁（设置所有权限）；<strong>chmod -R 755 dir</strong>是给整栋楼的所有房间都换锁（递归修改）。如果你的秘密文件要设成600（只有房主能读写）！</p>
            </div>`,
            mnemonic: '⚠️ <strong>安全警示：</strong>不要随便<code>chmod 777</code>！这意味着任何人都能进你房间随便改东西！'
          },
          {
            id: 'block_5_3_2',
            type: 'list',
            content: `<strong>chown/chgrp - 改所有者/组</strong>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-indigo-100">
      <th class="border border-gray-300 px-3 py-2">命令</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>chown</code></td>
      <td class="border border-gray-300 px-3 py-2">改文件所有者</td>
      <td class="border border-gray-300 px-3 py-2"><code>chown zhang file.txt</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>chown</code></td>
      <td class="border border-gray-300 px-3 py-2">同时改主和组</td>
      <td class="border border-gray-300 px-3 py-2"><code>chown zhang:users file.txt</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>chgrp</code></td>
      <td class="border border-gray-300 px-3 py-2">改文件组</td>
      <td class="border border-gray-300 px-3 py-2"><code>chgrp users file.txt</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-R</code></td>
      <td class="border border-gray-300 px-3 py-2">递归修改</td>
      <td class="border border-gray-300 px-3 py-2"><code>chown -R zhang:users /home/zhang</code></td>
    </tr>
  </tbody>
</table>`,
            scenario: `<div class="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400 mt-3">
              <div class="font-bold text-rose-900 mb-2">🏠 场景类比：chown就像房屋过户</div>
              <p class="text-rose-800">房子卖给别人了，<strong>chown</strong>就是去房管局办过户手续（改房主名字）。<strong>chown zhang:users file</strong>是同时把房主改成zhang，把房子划到users组（比如划到某个小区业主群）。只有root（房管局）能办过户！</p>
            </div>`
          }
        ]
      },

      {
        id: 'section_5_4',
        title: '文件系统管理',
        sectionNumber: '5.4',
        blocks: [
          {
            id: 'block_5_4_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-xl border-2 border-amber-300"><h3 class="text-2xl font-bold text-amber-800 flex items-center gap-2"><span class="text-3xl">🎯</span>文件系统挂载<span class="ml-2 text-sm bg-amber-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_5_4_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-amber-500">
<p class="text-lg font-bold text-amber-900 mb-3">磁盘使用三步曲：</p>

<div class="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg mt-3">
  <div class="flex items-center space-x-4">
    <div class="flex-1 text-center">
      <div class="text-2xl mb-2">①</div>
      <div class="font-bold">fdisk 分区</div>
      <div class="text-sm mt-1">把硬盘分成几块</div>
    </div>
    <div class="text-2xl">→</div>
    <div class="flex-1 text-center">
      <div class="text-2xl mb-2">②</div>
      <div class="font-bold">mkfs 格式化</div>
      <div class="text-sm mt-1">创建文件系统</div>
    </div>
    <div class="text-2xl">→</div>
    <div class="flex-1 text-center">
      <div class="text-2xl mb-2">③</div>
      <div class="font-bold">mount 挺载</div>
      <div class="text-sm mt-1">挺载到目录</div>
    </div>
  </div>
</div>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-amber-100">
      <th class="border border-gray-300 px-3 py-2">命令</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>fdisk</code></td>
      <td class="border border-gray-300 px-3 py-2">磁盘分区管理</td>
      <td class="border border-gray-300 px-3 py-2"><code>fdisk -l</code> 查看分区</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>mkfs</code></td>
      <td class="border border-gray-300 px-3 py-2">创建文件系统</td>
      <td class="border border-gray-300 px-3 py-2"><code>mkfs -t ext4 /dev/sdb1</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>mount</code></td>
      <td class="border border-gray-300 px-3 py-2">挺载文件系统</td>
      <td class="border border-gray-300 px-3 py-2"><code>mount /dev/sdb1 /mnt/usb</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>umount</code></td>
      <td class="border border-gray-300 px-3 py-2">卸载文件系统</td>
      <td class="border border-gray-300 px-3 py-2"><code>umount /mnt/usb</code></td>
    </tr>
  </tbody>
</table>
<div class="mt-4 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400">
  <p class="font-bold text-amber-900 mb-1">🎯 重点提示：</p>
  <ul class="text-amber-800 space-y-1 ml-4">
    <li><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">挂载→使用→卸载</mark>，三步缺一不可</li>
    <li><mark class="bg-yellow-200 px-2 py-1 rounded">强行取出介质可能造成文件系统损坏</mark></li>
  </ul>
</div>
</div>`,
            scenario: `<div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mt-3">
              <div class="font-bold text-cyan-900 mb-2">💾 场景类比：硬盘就像整理仓库</div>
              <p class="text-cyan-800">你买了个空仓库（新硬盘）：<strong>① fdisk分区</strong>是用隔板把仓库分成几个房间；<strong>② mkfs格式化</strong>是在房间里装上货架系统（ext4文件系统）；<strong>③ mount挺载</strong>是给房间装上门牌号（/mnt/usb），这样才能找到它！<strong>umount</strong>就是摘门牌（卸载）。</p>
            </div>`,
            mnemonic: '💡 <strong>顺口溜：</strong>"分区格式挺，三步缺一不可" - 记住硬盘使用三步曲！'
          },
          {
            id: 'block_5_4_2',
            type: 'list',
            content: `<strong>实际操作流程：</strong>

<div class="bg-gray-100 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例：挺载U盘</div>
  <code class="block"># fdisk -l</code>
  <div class="text-sm mt-1">查看设备，发现U盘为/dev/sdb1</div>
  
  <code class="block mt-2"># mkdir /mnt/usb</code>
  <div class="text-sm mt-1">创建挺载点目录</div>
  
  <code class="block mt-2"># mount /dev/sdb1 /mnt/usb</code>
  <div class="text-sm mt-1">挺载U盘到/mnt/usb</div>
  
  <code class="block mt-2"># cd /mnt/usb</code>
  <div class="text-sm mt-1">现在可以访问U盘内容了</div>
  
  <code class="block mt-2"># umount /mnt/usb</code>
  <div class="text-sm mt-1">使用完毕卸载（拔U盘前必须执行）</div>
</div>

<div class="bg-red-100 p-3 rounded mt-3">
  <div class="font-bold text-red-900 mb-2">⚠️ 注意事项：</div>
  <ul class="text-sm text-red-800 space-y-1 ml-4">
    <li><strong class="text-red-700">① 卸载前必须离开挂载点目录</strong>（cd到其他地方）</li>
    <li><strong class="text-red-700">② 不先umount就拔U盘可能损坏数据！</strong></li>
    <li><strong class="text-red-700">③ /etc/fstab配置开机自动挂载</strong></li>
  </ul>
</div>`
          }
        ]
      },

      {
        id: 'section_5_5',
        title: 'fsck文件系统检查与修复',
        sectionNumber: '5.5',
        blocks: [
          {
            id: 'block_5_5_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-red-100 to-rose-100 p-4 rounded-xl border-2 border-red-300"><h3 class="text-2xl font-bold text-red-800 flex items-center gap-2"><span class="text-3xl">🎯</span>fsck文件系统修复<span class="ml-2 text-sm bg-red-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_5_5_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-red-500">
<p class="text-lg font-bold text-red-900 mb-3">fsck - 文件系统检查与修复</p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">fsck [选项] [文件系统]</code>
</div>

<div class="bg-yellow-100 p-3 rounded mt-3">
  <div class="font-bold text-yellow-900 mb-2">⚠️ 文件系统受损原因：</div>
  <ul class="text-sm text-yellow-800 space-y-1 ml-4">
    <li>• <mark class="bg-yellow-200 px-1">意外掉电、非法关机</mark></li>
    <li>• <mark class="bg-yellow-200 px-1">强行拔出未卸载的U盘</mark></li>
    <li>• 文件大小与分配的块不一致</li>
    <li>• i节点内容错误、丢失的块等</li>
  </ul>
</div>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-red-100">
      <th class="border border-gray-300 px-3 py-2">选项</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-a</code></td>
      <td class="border border-gray-300 px-3 py-2">自动修复错误</td>
      <td class="border border-gray-300 px-3 py-2"><code>fsck -a</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-y</code></td>
      <td class="border border-gray-300 px-3 py-2">所有提示默认yes</td>
      <td class="border border-gray-300 px-3 py-2"><code>fsck -y /dev/sda1</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-t</code></td>
      <td class="border border-gray-300 px-3 py-2">指定文件系统类型</td>
      <td class="border border-gray-300 px-3 py-2"><code>fsck -t ext4 /dev/sdb1</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-C</code></td>
      <td class="border border-gray-300 px-3 py-2">显示进度条</td>
      <td class="border border-gray-300 px-3 py-2"><code>fsck -C /dev/sda2</code></td>
    </tr>
  </tbody>
</table>

<div class="bg-red-50 p-3 rounded mt-3">
  <div class="font-bold text-red-900 mb-2">🚨 系统开机问题检查：</div>
  <p class="text-sm text-red-800 mb-2">非法关机后，开机可能进入维护模式，提示：</p>
  <code class="block bg-gray-200 p-2">Give root password for maintenance</code>
  <p class="text-sm text-red-800 mt-2">解决方法：</p>
  <div class="bg-gray-100 p-2 rounded mt-2">
    <code class="block"># fsck -a</code>
    <div class="text-xs mt-1">检查所有文件系统</div>
    <code class="block mt-2"># fsck -y /dev/sda2</code>
    <div class="text-xs mt-1">检查/dev/sda2分区</div>
    <code class="block mt-2"># reboot</code>
    <div class="text-xs mt-1">重新启动</div>
  </div>
</div>

<div class="mt-4 bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
  <p class="font-bold text-red-900 mb-1">🎯 重点提示：</p>
  <ul class="text-red-800 space-y-1 ml-4">
    <li><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">fsck不能对已挂载的文件系统操作</mark></li>
    <li>丢失的文件以i节点号为名存放在<strong>/lost+found</strong></li>
  </ul>
</div>
</div>`,
            scenario: `<div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-3">
              <div class="font-bold text-red-900 mb-2">🔧 场景类比：fsck就像修理仓库</div>
              <p class="text-red-800">仓库的货架系统损坏了（电门关门时断电），部分货物丢失标签、放错位置。<strong>fsck</strong>就是修理工，检查每个货架，修复错误，把丢失的货物放进<code>/lost+found</code>杂物房。修好后才能重启（reboot）仓库！</p>
            </div>`,
            mnemonic: '💡 <strong>安全原则：</strong>关机前先<code>sync</code>同步，正常<code>shutdown</code>，不要直接断电！'
          }
        ]
      },

      {
        id: 'section_5_6',
        title: 'find文件查找命令',
        sectionNumber: '5.6',
        blocks: [
          {
            id: 'block_5_6_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl border-2 border-purple-300"><h3 class="text-2xl font-bold text-purple-800 flex items-center gap-2"><span class="text-3xl">🎯</span>find文件查找<span class="ml-2 text-sm bg-purple-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_5_6_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-purple-500">
<p class="text-lg font-bold text-purple-900 mb-3">find - 文件综合查找命令<span class="ml-2 text-sm bg-purple-500 text-white px-3 py-1 rounded-full">重点</span></p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">find [路径] [表达式]</code>
</div>
<p class="mt-2"><mark class="bg-yellow-200 px-2 py-1">从指定路径开始查找文件</mark>，支持按名字、大小、时间、权限等多种条件查找。</p>

<div class="bg-purple-50 p-3 rounded mt-3">
  <div class="font-bold text-purple-900 mb-2">🔍 常用查找条件：</div>
  <table class="w-full border-collapse mt-2">
    <thead>
      <tr class="bg-purple-100">
        <th class="border border-gray-300 px-3 py-2">参数</th>
        <th class="border border-gray-300 px-3 py-2">功能</th>
        <th class="border border-gray-300 px-3 py-2">示例</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-name</code></td>
        <td class="border border-gray-300 px-3 py-2">按文件名查找</td>
        <td class="border border-gray-300 px-3 py-2"><code>find / -name "*.txt"</code></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-type</code></td>
        <td class="border border-gray-300 px-3 py-2">按文件类型查找</td>
        <td class="border border-gray-300 px-3 py-2"><code>find /tmp -type f</code> (f文件/d目录)</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-size</code></td>
        <td class="border border-gray-300 px-3 py-2">按文件大小查找</td>
        <td class="border border-gray-300 px-3 py-2"><code>find / -size +100M</code> (大于100MB)</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-mtime</code></td>
        <td class="border border-gray-300 px-3 py-2">按修改时间查找</td>
        <td class="border border-gray-300 px-3 py-2"><code>find /home -mtime -1</code> (24小时内)</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-user</code></td>
        <td class="border border-gray-300 px-3 py-2">按所有者查找</td>
        <td class="border border-gray-300 px-3 py-2"><code>find /home -user zhang</code></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-perm</code></td>
        <td class="border border-gray-300 px-3 py-2">按权限查找</td>
        <td class="border border-gray-300 px-3 py-2"><code>find / -perm 0644</code></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="bg-blue-50 p-3 rounded mt-3">
  <div class="font-bold text-blue-900 mb-2">⚙️ 常用动作：</div>
  <table class="w-full border-collapse mt-2">
    <thead>
      <tr class="bg-blue-100">
        <th class="border border-gray-300 px-3 py-2">参数</th>
        <th class="border border-gray-300 px-3 py-2">功能</th>
        <th class="border border-gray-300 px-3 py-2">示例</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-print</code></td>
        <td class="border border-gray-300 px-3 py-2">输出结果</td>
        <td class="border border-gray-300 px-3 py-2"><code>find / -name "*.txt" -print</code></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-delete</code></td>
        <td class="border border-gray-300 px-3 py-2">删除找到的文件</td>
        <td class="border border-gray-300 px-3 py-2"><code>find /tmp -name "*.tmp" -delete</code></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-exec cmd {} \;</code></td>
        <td class="border border-gray-300 px-3 py-2">对找到的文件执行命令</td>
        <td class="border border-gray-300 px-3 py-2"><code>find / -name core -exec rm {} \;</code></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-ok cmd {} \;</code></td>
        <td class="border border-gray-300 px-3 py-2">同-exec，但执行前确认</td>
        <td class="border border-gray-300 px-3 py-2"><code>find /tmp -name core -ok rm {} \;</code></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="bg-gray-100 p-3 rounded mt-3">
  <div class="font-bold mb-2">实用示例：</div>
  <code class="block"># find /home -user zhang -name "*.c" -print</code>
  <div class="text-sm mt-1">查找/home下zhang用户的所有C文件</div>
  
  <code class="block mt-2"># find /tmp -name core -type f -exec rm -f '{}' \;</code>
  <div class="text-sm mt-1">查找并删除/tmp下所有名为core的文件</div>
  
  <code class="block mt-2"># find / -size +100M -print</code>
  <div class="text-sm mt-1">查找大于100MB的文件</div>
  
  <code class="block mt-2"># find /home -perm 0644 -user test -print</code>
  <div class="text-sm mt-1">查找/home下权限为644且属于test的文件</div>
</div>

<div class="mt-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
  <p class="font-bold text-purple-900 mb-1">🎯 助记口诀：</p>
  <p class="text-purple-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">find查文件，条件多，-name最常用</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mt-3">
              <div class="font-bold text-purple-900 mb-2">🔍 场景类比：find就像仓库查货</div>
              <p class="text-purple-800">仓库太大，要找一个货物。<strong>find</strong>是搜索系统：<code>-name "*.txt"</code>是按名字找（找所有txt结尾的货）；<code>-size +100M</code>是按大小找（找大于100公斤的货）；<code>-mtime -1</code>是找昨天入库的货。找到后用<code>-exec rm</code>直接删除！</p>
            </div>`,
            mnemonic: '💡 <strong>记忆技巧：</strong><code>find 路径 -name 名字</code>，这是find最基本的用法'
          }
        ]
      },

      {
        id: 'section_5_7',
        title: 'ln链接管理命令',
        sectionNumber: '5.7',
        blocks: [
          {
            id: 'block_5_7_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-teal-100 to-cyan-100 p-4 rounded-xl border-2 border-teal-300"><h3 class="text-2xl font-bold text-teal-800 flex items-center gap-2"><span class="text-3xl">🎯</span>ln链接管理<span class="ml-2 text-sm bg-teal-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_5_7_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-teal-500">
<p class="text-lg font-bold text-teal-900 mb-3">ln - 链接管理命令<span class="ml-2 text-sm bg-teal-500 text-white px-3 py-1 rounded-full">重点</span></p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">ln [选项] target linkname</code>
</div>
<p class="mt-2">用于创建文件的<mark class="bg-yellow-200 px-1">硬链接</mark>和<mark class="bg-yellow-200 px-1">符号链接（软链接）</mark>。</p>

<div class="bg-teal-50 p-3 rounded mt-3">
  <div class="font-bold text-teal-900 mb-2">🔗 两类链接的区别：</div>
  <table class="w-full border-collapse mt-2">
    <thead>
      <tr class="bg-teal-100">
        <th class="border border-gray-300 px-3 py-2">类型</th>
        <th class="border border-gray-300 px-3 py-2">inode</th>
        <th class="border border-gray-300 px-3 py-2">特点</th>
        <th class="border border-gray-300 px-3 py-2">创建方式</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><strong class="text-teal-700">硬链接</strong></td>
        <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">相同inode</mark></td>
        <td class="border border-gray-300 px-3 py-2">不能跨分区，不能链接目录</td>
        <td class="border border-gray-300 px-3 py-2"><code>ln file link</code></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><strong class="text-teal-700">软链接</strong></td>
        <td class="border border-gray-300 px-3 py-2"><mark class="bg-yellow-200 px-1">不同inode</mark></td>
        <td class="border border-gray-300 px-3 py-2">可跨分区，可链接目录</td>
        <td class="border border-gray-300 px-3 py-2"><code>ln -s file link</code></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="bg-gray-100 p-3 rounded mt-3">
  <div class="font-bold mb-2">常用参数：</div>
  <table class="w-full border-collapse mt-2">
    <thead>
      <tr class="bg-cyan-100">
        <th class="border border-gray-300 px-3 py-2">选项</th>
        <th class="border border-gray-300 px-3 py-2">功能</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-s</code></td>
        <td class="border border-gray-300 px-3 py-2">创建符号链接（不加则为硬链接）</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-f</code></td>
        <td class="border border-gray-300 px-3 py-2">强行操作，删除已存在的同名文件</td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-3 py-2"><code>-i</code></td>
        <td class="border border-gray-300 px-3 py-2">交互提示，链接名已存在时提示</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="bg-blue-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例：</div>
  <code class="block"># ln -s /tmp/myfile my_link</code>
  <div class="text-sm mt-1">在当前目录创建/tmp/myfile的符号链接my_link</div>
  
  <code class="block mt-2"># ln /bin/ls /usr/bin/l</code>
  <div class="text-sm mt-1">在/usr/bin为/bin/ls创建硬链接l</div>
  
  <code class="block mt-2"># ls -li</code>
  <div class="text-sm mt-1">查看inode号，确认链接类型</div>
</div>

<div class="mt-4 bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400">
  <p class="font-bold text-teal-900 mb-1">🎯 核心记忆：</p>
  <p class="text-teal-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">硬链接相同inode，软链接不同inode</mark></p>
</div>
</div>`,
            scenario: `<div class="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400 mt-3">
              <div class="font-bold text-teal-900 mb-2">🔗 场景类比：链接就像家门钥匙</div>
              <p class="text-teal-800"><strong>硬链接</strong>是配多把一模一样的钟匙（相同inode），进的是同一个房门，房主迁走了钥匙也能用；<strong>软链接</strong>是留个纸条写“真房在XX路”（不同inode），纸条指向真房地址，真房拆了纸条就失效！</p>
            </div>`,
            mnemonic: '💡 <strong>记忆技巧：</strong><code>ln</code>默认硬链接，<code>ln -s</code>软链接（s=symbolic）'
          }
        ]
      },

      {
        id: 'section_5_8',
        title: 'df与du命令',
        sectionNumber: '5.8',
        blocks: [
          {
            id: 'block_5_8_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-green-100 to-lime-100 p-4 rounded-xl border-2 border-green-300"><h3 class="text-2xl font-bold text-green-800 flex items-center gap-2"><span class="text-3xl">🎯</span>df与du的区别<span class="ml-2 text-sm bg-green-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_5_8_1',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-green-500">
<p class="text-lg font-bold text-green-900 mb-3">df - 磁盘空间使用情况<span class="ml-2 text-sm bg-green-500 text-white px-3 py-1 rounded-full">重点</span></p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">df [选项] [文件系统]</code>
</div>
<p class="mt-2"><mark class="bg-yellow-200 px-2 py-1">显示系统中已挂载文件系统的使用情况</mark>。</p>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-green-100">
      <th class="border border-gray-300 px-3 py-2">选项</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-h</code></td>
      <td class="border border-gray-300 px-3 py-2">人类易读方式显示</td>
      <td class="border border-gray-300 px-3 py-2"><code>df -h</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-i</code></td>
      <td class="border border-gray-300 px-3 py-2">显示inode使用情况</td>
      <td class="border border-gray-300 px-3 py-2"><code>df -i</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-k</code></td>
      <td class="border border-gray-300 px-3 py-2">以KB为单位</td>
      <td class="border border-gray-300 px-3 py-2"><code>df -k</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-a</code></td>
      <td class="border border-gray-300 px-3 py-2">显示所有文件系统</td>
      <td class="border border-gray-300 px-3 py-2"><code>df -a</code></td>
    </tr>
  </tbody>
</table>

<div class="bg-blue-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例输出：</div>
  <code class="block">$ df -h</code>
  <pre class="bg-gray-200 p-2 rounded mt-2 text-xs">
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        50G   20G   28G  42% /
/dev/sdb1       100G   50G   46G  52% /home
  </pre>
</div>
</div>`,
            scenario: `<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-3">
              <div class="font-bold text-green-900 mb-2">📊 场景类比：df就像查仓库容量</div>
              <p class="text-green-800">仓库管理员想知道哪个仓库还有空位。<strong>df -h</strong>就是查看每个仓库的总容量、已用多少、还剩多少、使用率多少。比如"/dev/sda1 50G Used:20G"意思是“1号仓库总共50G，用了20G”。</p>
            </div>`
          },
          {
            id: 'block_5_8_2',
            type: 'list',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-lime-500 mt-4">
<p class="text-lg font-bold text-lime-900 mb-3">du - 目录和文件大小统计<span class="ml-2 text-sm bg-lime-500 text-white px-3 py-1 rounded-full">重点</span></p>
<div class="bg-gray-100 p-3 rounded mt-3">
  <code class="block">du [选项] [文件/目录]</code>
</div>
<p class="mt-2"><mark class="bg-yellow-200 px-2 py-1">统计文件或目录占用的磁盘空间大小</mark>。</p>

<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-lime-100">
      <th class="border border-gray-300 px-3 py-2">选项</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-h</code></td>
      <td class="border border-gray-300 px-3 py-2">人类易读方式显示</td>
      <td class="border border-gray-300 px-3 py-2"><code>du -h</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-s</code></td>
      <td class="border border-gray-300 px-3 py-2">只显示总计（不列出子目录）</td>
      <td class="border border-gray-300 px-3 py-2"><code>du -sh /home</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-a</code></td>
      <td class="border border-gray-300 px-3 py-2">显示所有文件（不只是目录）</td>
      <td class="border border-gray-300 px-3 py-2"><code>du -ah</code></td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-k</code></td>
      <td class="border border-gray-300 px-3 py-2">以KB为单位</td>
      <td class="border border-gray-300 px-3 py-2"><code>du -k /var</code></td>
    </tr>
  </tbody>
</table>

<div class="bg-blue-50 p-3 rounded mt-3">
  <div class="font-bold mb-2">示例：</div>
  <code class="block">$ du -sh /home/*</code>
  <pre class="bg-gray-200 p-2 rounded mt-2 text-xs">
2.5G    /home/zhang
1.8G    /home/li
500M    /home/wang
  </pre>
  <div class="text-sm mt-1">显示/home下每个用户目录的大小</div>
</div>

<div class="mt-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
  <p class="font-bold text-green-900 mb-1">🎯 df与du的本质区别：</p>
  <ul class="text-green-800 space-y-1 ml-4">
    <li><strong>df</strong>：<mark class="bg-yellow-200 px-1">查看整个文件系统（分区）的使用情况</mark></li>
    <li><strong>du</strong>：<mark class="bg-yellow-200 px-1">统计具体目录/文件的大小</mark></li>
  </ul>
</div>
</div>`,
            scenario: `<div class="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-400 mt-3">
              <div class="font-bold text-lime-900 mb-2">📦 场景类比：du就像称重量</div>
              <p class="text-lime-800"><strong>du -sh /home/zhang</strong>就是称一下zhang的货物（目录）总重量多少。比如显示“2.5G”意思是“zhang的所有货物加2.5GB”。<code>du -sh /*</code>是称一下根目录下每个文件夹的重量！</p>
            </div>`,
            mnemonic: '💡 <strong>记忆技巧：</strong>df=Disk Free（磁盘剩余），du=Disk Usage（磁盘使用）'
          }
        ]
      }
    ]
  },

  // ========== 第6章：进程及安全管理 ==========
  {
    id: 'chp6',
    title: '第6章 进程及安全管理',
    chapterNumber: 'chp6',
    overview: '本章介绍程序与进程的概念、登录shell的启动与定制、进程安全管理与调度命令。重点讲解suid/sgid权限、进程状态查询和进程管理命令。',
    icon: '⚙️',
    estimatedMinutes: 90,
    
    skeleton: {
      scenarioIntro: {
        title: '🏭 想象你在管理一个工厂',
        description: '🎭 你是工厂的生产经理。工厂里有很多生产线（进程），每条生产线都在执行不同的任务。有些生产线在前台（前台进程），你能直接看到它们在工作；有些在后台车间（后台进程），默默运转。每条生产线都有唯一的编号（PID），你需要监控它们的状态、启动新生产线、停止失控的生产线。工厂的门禁系统（suid）允许普通员工临时获得经理权限来执行特殊任务。',
        problems: [
          '🏷️ 生产线编号：每条生产线怎么标识？（PID = 进程ID）',
          '🔍 状态监控：怎么知道哪些生产线在运行？（ps命令 = 查看进程）',
          '🛑 紧急停止：生产线失控了怎么办？（kill命令 = 终止进程）',
          '🔑 临时授权：普通员工要修改重要文件怎么办？（suid权限 = 临时提权）',
          '🚪 门禁管理：哪些程序可以让普通用户以root权限运行？（设置suid）'
        ]
      },

      framework: [
        '程序、进程、作业的概念',
        'Linux系统的启动过程',
        '0#进程与1#进程',
        '进程状态及查询（ps）',
        '三类进程：前台、后台、批处理',
        '登录shell的启动与定制',
        'suid/sgid权限与sticky位',
        '进程管理命令（kill、killall、fuser）'
      ],
      
      knowledgeMap: {
        root: {
          id: 'root',
          title: '进程及安全管理',
          level: 0,
          color: 'purple',
          icon: '⚙️'
        },
        chapters: [
          {
            id: 'ch6-1',
            title: '进程基础概念',
            level: 1,
            color: 'indigo',
            icon: '📋',
            sections: [
              {
                id: 'ch6-1-1',
                title: '程序与进程',
                level: 2,
                color: 'blue',
                icon: '🔄',
                items: [
                  { id: 'ch6-1-1-1', title: '程序定义', icon: '📄' },
                  { id: 'ch6-1-1-2', title: '进程定义', icon: '⚡' },
                  { id: 'ch6-1-1-3', title: '作业与任务', icon: '📦' }
                ]
              },
              {
                id: 'ch6-1-2',
                title: '系统启动',
                level: 2,
                color: 'cyan',
                icon: '🚀',
                items: [
                  { id: 'ch6-1-2-1', title: '引导程序', icon: '🔧' },
                  { id: 'ch6-1-2-2', title: '0#进程', icon: '0️⃣' },
                  { id: 'ch6-1-2-3', title: '1#进程(init)', icon: '1️⃣' }
                ]
              },
              {
                id: 'ch6-1-3',
                title: '进程状态',
                level: 2,
                color: 'green',
                icon: '📊',
                items: [
                  { id: 'ch6-1-3-1', title: 'R-运行', icon: '▶️' },
                  { id: 'ch6-1-3-2', title: 'S-睡眠', icon: '💤' },
                  { id: 'ch6-1-3-3', title: 'Z-僵尸', icon: '👻' }
                ]
              }
            ]
          },
          {
            id: 'ch6-2',
            title: '进程安全管理',
            level: 1,
            color: 'orange',
            icon: '🔐',
            sections: [
              {
                id: 'ch6-2-1',
                title: 'suid/sgid权限',
                level: 2,
                color: 'red',
                icon: '🔑',
                items: [
                  { id: 'ch6-2-1-1', title: 'suid概念', icon: 's' },
                  { id: 'ch6-2-1-2', title: 'sgid概念', icon: 'g' },
                  { id: 'ch6-2-1-3', title: '权限设置', icon: '⚙️' }
                ]
              },
              {
                id: 'ch6-2-2',
                title: 'sticky位',
                level: 2,
                color: 'pink',
                icon: '📌',
                items: [
                  { id: 'ch6-2-2-1', title: 'sticky定义', icon: 't' },
                  { id: 'ch6-2-2-2', title: '典型应用', icon: '/tmp' }
                ]
              },
              {
                id: 'ch6-2-3',
                title: '进程管理命令',
                level: 2,
                color: 'teal',
                icon: '💻',
                items: [
                  { id: 'ch6-2-3-1', title: 'ps查看', icon: '🔍' },
                  { id: 'ch6-2-3-2', title: 'kill终止', icon: '❌' },
                  { id: 'ch6-2-3-3', title: 'killall批量', icon: '🗑️' }
                ]
              }
            ]
          }
        ]
      },
      
      keyPoints: [
        '程序是静态文件，进程是程序的动态执行过程',
        '0#进程是唯一在核心态执行的进程，1#进程是所有用户进程的祖先',
        'suid权限让普通用户以文件所有者身份执行程序',
        'sticky位保护目录中的文件只能被所有者删除',
        'ps命令查看进程状态，kill/killall终止进程'
      ],
      
      learningObjectives: [
        '理解程序、进程、作业的区别与联系',
        '掌握Linux系统启动过程和关键进程',
        '学会使用ps命令查看进程状态',
        '掌握suid/sgid/sticky特殊权限的设置和应用',
        '熟练使用kill、killall、fuser等进程管理命令'
      ]
    },
    
    sections: [
      {
        id: 'section_6_1',
        title: '程序和进程的概念',
        sectionNumber: '6.1',
        blocks: [
          {
            id: 'block_6_1_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl border-2 border-blue-300"><h3 class="text-2xl font-bold text-blue-800 flex items-center gap-2"><span class="text-3xl">🎯</span>程序、进程、作业、任务概念<span class="ml-2 text-sm bg-blue-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_6_1_1',
            type: 'highlight',
            content: '<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-blue-500"><p class="text-lg font-bold text-blue-900 mb-3">程序与进程的本质区别：</p><p><mark class="bg-yellow-200 px-2 py-1">程序是存储在介质上的静态可执行文件</mark>，<mark class="bg-yellow-200 px-2 py-1">进程是程序的动态执行过程</mark>。同一个程序可以同时运行多次，但每次对应不同的进程，拥有不同的<mark class="bg-yellow-200 px-2 py-1">进程标识（PID）</mark>。</p></div>',
            keywords: ['程序', '进程', '动态执行', 'PID']
          },
          
          {
            id: 'block_6_1_2',
            type: 'text',
            content: `<h3><strong>6.1.1 程序、进程、作业和任务</strong></h3>
<p><strong>程序（Program）</strong>：存储在介质上的可执行文件，具有可执行属性和执行内容，是静态的。</p>
<p><strong>进程（Process）</strong>：程序的动态执行过程，突出程序运行时的状态，是动态的。进程具有并发和并行特征，同一程序可多次同时运行产生不同进程。</p>
<p><strong>作业/任务（Job/Task）</strong>：用户要求计算机完成某项任务时所做工作的集合，一个作业可能需要几个程序联合完成。</p>`,
          },
          
          {
            id: 'block_6_1_3',
            type: 'list',
            content: `<strong>Linux系统的启动过程：</strong>
<ul class="space-y-2 ml-4">
  <li><mark class="bg-yellow-200 px-1">① 引导程序装入</mark> → 系统引导块被装入内存开始执行</li>
  <li><mark class="bg-yellow-200 px-1">② 初始化系统数据结构</mark> → 构造缓冲区、区表、页表等</li>
  <li><mark class="bg-yellow-200 px-1">③ 安装根文件系统</mark> → 将根文件系统安装到根"/"下</li>
  <li><mark class="bg-yellow-200 px-1">④ 创建0#进程</mark> → 系统内核启动完成</li>
  <li><mark class="bg-yellow-200 px-1">⑤ 创建1#进程</mark> → 进一步初始化，启动各种服务</li>
  <li><mark class="bg-yellow-200 px-1">⑥ 用户登录</mark> → 终端用户可以登录系统</li>
</ul>`,
            scenario: `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mt-3">
              <div class="font-bold text-blue-900 mb-2">🏗️ 场景类比：系统启动就像盖房子</div>
              <p class="text-blue-800"><strong>① 引导</strong>是打地基；<strong>② 初始化</strong>是搭框架；<strong>③ 安装根文件系统</strong>是装修主体；<strong>④ 0#进程</strong>是总工程师（内核态）；<strong>⑤ 1#进程</strong>是包工头（用户态），负责叫来各种工人（服务进程）；<strong>⑥ 用户登录</strong>就是业主可以入住了！</p>
            </div>`,
            mnemonic: '💡 <strong>记忆口诀：</strong>"引初安创创用" - 引导、初始化、安装、创建0#、创建1#、用户登录'
          },
          
          {
            id: 'block_6_1_3_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl border-2 border-purple-300"><h3 class="text-2xl font-bold text-purple-800 flex items-center gap-2"><span class="text-3xl">🎯</span>0号进程与1号进程<span class="ml-2 text-sm bg-purple-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_6_1_4',
            type: 'highlight',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-purple-500"><h3><strong>6.1.3 0#进程与1#进程</strong></h3>
<p><strong>0#进程</strong>：</p>
<ul class="ml-6 mt-2 space-y-1">
  <li>• 唯一只在<mark class="bg-yellow-200 px-1">核心态</mark>下执行的进程</li>
  <li>• 三大功能：<strong>调度分配处理机、负责进程交换、创建1#进程</strong></li>
  <li>• 创建1#进程后变成<strong>空闲进程（Idler）</strong>，无就绪进程时才运行</li>
</ul>

<p class="mt-3"><strong>1#进程（init或systemd）</strong>：</p>
<ul class="ml-6 mt-2 space-y-1">
  <li>• 系统启动时创建的<mark class="bg-yellow-200 px-1">创建进程的进程</mark></li>
  <li>• 根据配置文件初始化系统、创建所需进程</li>
  <li>• 初始化完成后变成<strong>回收进程</strong>，专门领养孤儿进程和回收僵尸进程</li>
  <li>• 是除0#进程外<strong>所有进程的祖先进程</strong></li>
</ul>`,
            keywords: ['0#进程', '1#进程', '核心态', '孤儿进程', '僵尸进程']
          },
          
          {
            id: 'block_6_1_4_highlight2',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-xl border-2 border-green-300"><h3 class="text-2xl font-bold text-green-800 flex items-center gap-2"><span class="text-3xl">🎯</span>ps进程状态查询<span class="ml-2 text-sm bg-green-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_6_1_5',
            type: 'code',
            language: 'bash',
            content: `# 查看进程家族关系树
pstree

# 显示进程状态和信息（常用参数）
ps -el      # 长格式显示所有进程
ps -Af      # 带命令及参数显示所有进程
ps -t tty1  # 查询与终端tty1相关的进程
ps -u root  # 查询与用户root相关的进程
ps -axj     # 查询整个系统进程情况

# 查看当前终端的所有进程
ps a`,
            mnemonic: '💡 <strong>ps命令记忆：</strong>"ps = Process Status" - 进程状态查看器'
          },
          
          {
            id: 'block_6_1_6',
            type: 'table',
            content: `<h3>进程状态标志</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-blue-100">
      <th class="border border-gray-300 px-3 py-2">状态</th>
      <th class="border border-gray-300 px-3 py-2">说明</th>
      <th class="border border-gray-300 px-3 py-2">场景</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>R</code></td>
      <td class="border border-gray-300 px-3 py-2">Running/Runable 运行或就绪</td>
      <td class="border border-gray-300 px-3 py-2">进程正在执行或等待CPU</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>S</code></td>
      <td class="border border-gray-300 px-3 py-2">Sleep 睡眠</td>
      <td class="border border-gray-300 px-3 py-2">等待事件发生（可中断）</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>D</code></td>
      <td class="border border-gray-300 px-3 py-2">Delaying 非中断睡眠</td>
      <td class="border border-gray-300 px-3 py-2">通常是等待I/O</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>T</code></td>
      <td class="border border-gray-300 px-3 py-2">Traced or stopped 被跟踪或停止</td>
      <td class="border border-gray-300 px-3 py-2">调试或被暂停</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>Z</code></td>
      <td class="border border-gray-300 px-3 py-2">Zombie 僵尸状态</td>
      <td class="border border-gray-300 px-3 py-2">已终止但父进程未处理</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>&lt;</code></td>
      <td class="border border-gray-300 px-3 py-2">高优先级进程</td>
      <td class="border border-gray-300 px-3 py-2">优先获得CPU时间</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>N</code></td>
      <td class="border border-gray-300 px-3 py-2">低优先级进程</td>
      <td class="border border-gray-300 px-3 py-2">让出CPU给其他进程</td>
    </tr>
  </tbody>
</table>`,
            mnemonic: '💡 <strong>记忆口诀：</strong>"R跑S睡D等T停Z尸" - Running睡眠Delaying停止Zombie'
          }
        ]
      },
      
      {
        id: 'section_6_2',
        title: '三类进程',
        sectionNumber: '6.1.5',
        blocks: [
          {
            id: 'block_6_2_1',
            type: 'list',
            content: `<strong>三类进程：</strong>
<ul class="space-y-3 ml-4">
  <li>
    <div class="font-bold text-lg">① 前台进程（Foreground Process）</div>
    <div class="ml-4 mt-1">• 用户直接控制的终端交互式进程</div>
    <div class="ml-4">• 从标准输入读数据，向标准输出写数据</div>
    <div class="ml-4">• 示例：文字处理、游戏、浏览器等应用程序</div>
  </li>
  <li>
    <div class="font-bold text-lg">② 后台进程（Background Process）</div>
    <div class="ml-4 mt-1">• 在系统后台运行，用户不直接交互</div>
    <div class="ml-4">• <mark class="bg-yellow-200 px-1">守候进程（Daemon）</mark>：永久运行的服务器进程</div>
    <div class="ml-4">• 示例：httpd、sshd、crond等系统服务</div>
  </li>
  <li>
    <div class="font-bold text-lg">③ 批处理进程（Batch Process）</div>
    <div class="ml-4 mt-1">• 用户通过编程将任务提交给系统</div>
    <div class="ml-4">• 系统在合适时间调度执行</div>
    <div class="ml-4">• 示例：cron定时任务、shell脚本</div>
  </li>
</ul>`,
            scenario: `<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-3">
              <div class="font-bold text-green-900 mb-2">🎭 场景类比：三类进程就像餐厅员工</div>
              <p class="text-green-800"><strong>前台进程</strong>是服务员，直接和顾客（用户）打交道；<strong>后台进程</strong>是厨师，在后厨默默工作，顾客看不见但一直在运行；<strong>批处理进程</strong>是打烊后的清洁工，按计划定时执行任务。</p>
            </div>`
          }
        ]
      },
      
      {
        id: 'section_6_3',
        title: '登录shell的启动与定制',
        sectionNumber: '6.2',
        blocks: [
          {
            id: 'block_6_3_1',
            type: 'highlight',
            content: '<strong>登录shell启动流程</strong>：用户输入用户名和密码后，系统检查/etc/passwd、/etc/shadow、/etc/group文件。验证通过后启动shell，依次执行：① /etc/profile → ② ~/.bash_profile → ③ ~/.bashrc → ④ /etc/bashrc，最后出现系统提示符。',
            keywords: ['登录shell', '/etc/profile', '~/.bash_profile', '~/.bashrc']
          },
          
          {
            id: 'block_6_3_2',
            type: 'code',
            language: 'bash',
            content: `# 修改用户登录shell
useradd -s /bin/csh test      # 创建用户时指定shell为csh
usermod -s /bin/csh test      # 修改已有用户的shell
chsh -s /bin/tcsh test        # 使用chsh命令修改shell

# shell定制示例：在~/.bash_profile末尾添加
export PATH=$PATH:/opt/myapp/bin
alias ll='ls -l'
echo "Welcome, $USER!"`,
            mnemonic: '💡 <strong>shell配置文件执行顺序：</strong>"/etc/profile → ~/.bash_profile → ~/.bashrc → /etc/bashrc"'
          }
        ]
      },
      
      {
        id: 'section_6_4',
        title: 'suid/sgid权限和sticky属性',
        sectionNumber: '6.3.1',
        blocks: [
          {
            id: 'block_6_4_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-xl border-2 border-orange-300"><h3 class="text-2xl font-bold text-orange-800 flex items-center gap-2"><span class="text-3xl">🎯</span>suid/sgid/sticky特殊权限<span class="ml-2 text-sm bg-orange-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_6_4_1',
            type: 'highlight',
            content: `<div class="bg-white p-4 rounded-lg shadow-lg border-l-4 border-orange-500"><h3>suid和sgid权限</h3>
<p><strong>setuid（suid）</strong>：</p>
<ul class="ml-6 mt-2 space-y-1">
  <li>• 当一个程序具有suid属性时，<mark class="bg-yellow-200 px-2 py-1 font-semibold">执行者将临时获得程序所有者的权限</mark></li>
  <li>• 有效uid（euid）= 程序所有者uid，真实uid（ruid）= 执行者uid</li>
  <li>• <strong>只对二进制可执行文件有效</strong>，对脚本无效</li>
  <li>• 常见设置suid的程序：<mark class="bg-yellow-200 px-2 py-1">/bin/ping、/usr/bin/passwd、/usr/bin/sudo</mark></li>
</ul>

<p class="mt-3"><strong>setgid（sgid）</strong>：</p>
<ul class="ml-6 mt-2 space-y-1">
  <li>• 类似suid，执行者获得程序所属组的权限</li>
  <li>• 有效gid（egid）= 程序组gid，真实gid（rgid）= 执行者gid</li>
</ul>
<div class="mt-4 bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
  <p class="font-bold text-orange-900 mb-1">🎯 助记口诀：</p>
  <p class="text-orange-800"><mark class="bg-yellow-200 px-2 py-1 rounded font-bold">4是suid，2是sgid，1是sticky</mark>（数字设置法）</p>
</div></div>`,
            keywords: ['suid', 'sgid', 'euid', 'passwd命令'],
            scenario: `<div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 mt-3">
              <div class="font-bold text-orange-900 mb-2">🔑 场景类比：suid就像临时工作证</div>
              <p class="text-orange-800">普通员工（普通用户）要修改公司花名册（/etc/passwd），但花名册只有经理（root）才能改。怎么办？给员工发个<strong>临时经理工作证</strong>（suid权限的passwd程序），员工拿着这个证去修改时，系统认为他是经理，允许修改。用完自动收回工作证。</p>
            </div>`
          },
          
          {
            id: 'block_6_4_2',
            type: 'code',
            language: 'bash',
            content: `# suid/sgid权限设置（字符方式）
chmod u+s myp1        # 为myp1设置suid，权限变为rwsr-xr-x
chmod g+s myp2        # 为myp2设置sgid，权限变为rwxrwsr-x
chmod ug+s myp3       # 同时设置suid和sgid，权限变为rwsrwsrwx

# suid/sgid权限设置（数字方式）
chmod 4755 myp1       # 设置suid（4000 + 755）
chmod 2775 myp2       # 设置sgid（2000 + 775）
chmod 6777 myp3       # 同时设置suid和sgid（6000 + 777）

# 查找具有suid/sgid的文件
find / -perm /4000 -print   # 查找具有suid的文件
find / -perm /2000 -print   # 查找具有sgid的文件
find / -perm /6000 -print   # 查找同时具有suid和sgid的文件`,
            mnemonic: '💡 <strong>数字记忆：</strong>"4是suid，2是sgid，1是sticky" - 权限位前缀数字'
          },
          
          {
            id: 'block_6_4_3',
            type: 'highlight',
            content: `<h3>sticky位（粘着位）</h3>
<p><strong>sticky权限</strong>：</p>
<ul class="ml-6 mt-2 space-y-1">
  <li>• <mark class="bg-yellow-200 px-1">只能用于目录</mark>，保护目录中的文件</li>
  <li>• 设置sticky后，目录中的文件<strong>只能被所有者或root删除</strong></li>
  <li>• 即使其他用户对目录有写权限，也无法删除别人的文件</li>
  <li>• 典型应用：/tmp、/usr/tmp、/var/spool/uucppublic</li>
</ul>`,
            keywords: ['sticky', '/tmp', '粘着位'],
            scenario: `<div class="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400 mt-3">
              <div class="font-bold text-pink-900 mb-2">📌 场景类比：sticky就像公共储物柜</div>
              <p class="text-pink-800">/tmp目录就像火车站的公共储物柜，每个人（用户）都可以放东西（创建文件），但<strong>只能拿走自己的东西</strong>（删除自己的文件），不能动别人的柜子（删除别人的文件），除非你是站长（root）。</p>
            </div>`
          },
          
          {
            id: 'block_6_4_4',
            type: 'code',
            language: 'bash',
            content: `# sticky位设置
chmod +t mydir        # 字符方式设置sticky位
chmod 1755 mydir      # 数字方式设置sticky位（1000 + 755）

# 查看/tmp目录的sticky位
ls -ld /tmp
# 输出：drwxrwxrwt  ... /tmp
#                ^
#                └─ 't'表示有sticky位

# 查找具有sticky位的目录
find / -perm /1000 -print`,
            mnemonic: '💡 <strong>sticky记忆：</strong>"t = 只能碰Touch自己的" - 保护/tmp目录'
          },
          
          {
            id: 'block_6_4_5',
            type: 'table',
            content: `<h3>特殊权限位总结</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-purple-100">
      <th class="border border-gray-300 px-3 py-2">权限</th>
      <th class="border border-gray-300 px-3 py-2">数字</th>
      <th class="border border-gray-300 px-3 py-2">符号</th>
      <th class="border border-gray-300 px-3 py-2">作用对象</th>
      <th class="border border-gray-300 px-3 py-2">功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>suid</code></td>
      <td class="border border-gray-300 px-3 py-2">4000</td>
      <td class="border border-gray-300 px-3 py-2">u+s (s/S)</td>
      <td class="border border-gray-300 px-3 py-2">可执行文件</td>
      <td class="border border-gray-300 px-3 py-2">执行时获得文件所有者权限</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>sgid</code></td>
      <td class="border border-gray-300 px-3 py-2">2000</td>
      <td class="border border-gray-300 px-3 py-2">g+s (s/S)</td>
      <td class="border border-gray-300 px-3 py-2">可执行文件</td>
      <td class="border border-gray-300 px-3 py-2">执行时获得文件所属组权限</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>sticky</code></td>
      <td class="border border-gray-300 px-3 py-2">1000</td>
      <td class="border border-gray-300 px-3 py-2">+t (t/T)</td>
      <td class="border border-gray-300 px-3 py-2">目录</td>
      <td class="border border-gray-300 px-3 py-2">文件只能被所有者删除</td>
    </tr>
  </tbody>
</table>

<div class="bg-yellow-100 p-3 rounded mt-3">
  <div class="font-bold text-yellow-900 mb-2">⚠️ 小写s/t vs 大写S/T</div>
  <ul class="text-sm text-yellow-800 space-y-1 ml-4">
    <li>• 小写<code>s</code>/<code>t</code>：原来有执行权限x，设置特殊权限后显示s/t</li>
    <li>• 大写<code>S</code>/<code>T</code>：原来没有执行权限x，设置特殊权限后显示S/T</li>
    <li>• 示例：rw<strong>s</strong>r-xr-x（有x变s） vs rw<strong>S</strong>r--r--（无x变S）</li>
  </ul>
</div>`
          }
        ]
      },
      
      {
        id: 'section_6_5',
        title: '进程管理与调度命令',
        sectionNumber: '6.3.2',
        blocks: [
          {
            id: 'block_6_5_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-xl border-2 border-red-300"><h3 class="text-2xl font-bold text-red-800 flex items-center gap-2"><span class="text-3xl">🎯</span>kill与killall<span class="ml-2 text-sm bg-red-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_6_5_1',
            type: 'code',
            language: 'bash',
            content: `# killall - 按名称终止进程
killall -l              # 列出可用信号
killall man             # 终止所有名为man的进程
killall -9 bash         # 强制终止所有bash进程
killall -i httpd        # 交互式终止（需确认）
killall -u username     # 终止指定用户的所有进程

# fuser - 显示使用指定文件/设备的进程
fuser -k /dev/tty5      # 杀死所有使用终端tty5的进程
fuser -u 23/tcp 21/tcp  # 监视telnet和ftp端口，显示用户
fuser -n tcp 21         # 监视ftp端口的tcp活动
fuser -m /mnt/usb       # 显示使用/mnt/usb文件系统的进程`,
            mnemonic: '💡 <strong>进程管理记忆：</strong>"\kill杀PID，killall杀名字，fuser找使用者"'
          },
          
          {
            id: 'block_6_5_2',
            type: 'table',
            content: `<h3>进程管理命令对比</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-teal-100">
      <th class="border border-gray-300 px-3 py-2">命令</th>
      <th class="border border-gray-300 px-3 py-2">操作对象</th>
      <th class="border border-gray-300 px-3 py-2">典型用法</th>
      <th class="border border-gray-300 px-3 py-2">注意事项</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>ps</code></td>
      <td class="border border-gray-300 px-3 py-2">查看进程</td>
      <td class="border border-gray-300 px-3 py-2">ps -ef | grep httpd</td>
      <td class="border border-gray-300 px-3 py-2">显示进程快照</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>kill</code></td>
      <td class="border border-gray-300 px-3 py-2">PID</td>
      <td class="border border-gray-300 px-3 py-2">kill -9 1234</td>
      <td class="border border-gray-300 px-3 py-2">需要知道进程ID</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>killall</code></td>
      <td class="border border-gray-300 px-3 py-2">进程名</td>
      <td class="border border-gray-300 px-3 py-2">killall httpd</td>
      <td class="border border-gray-300 px-3 py-2">会杀死所有同名进程</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>fuser</code></td>
      <td class="border border-gray-300 px-3 py-2">文件/设备/端口</td>
      <td class="border border-gray-300 px-3 py-2">fuser -k /dev/sda1</td>
      <td class="border border-gray-300 px-3 py-2">找出占用资源的进程</td>
    </tr>
  </tbody>
</table>`,
            scenario: `<div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-3">
              <div class="font-bold text-red-900 mb-2">⚠️ 使用kill命令的注意事项</div>
              <ul class="text-red-800 space-y-1 ml-4">
                <li>① <code>kill -9</code>是强制终止，进程无法做清理工作，慎用！</li>
                <li>② 推荐先用<code>kill -15</code>（默认TERM信号），让进程正常退出</li>
                <li>③ 不要随意杀死系统关键进程（如1#进程init）</li>
                <li>④ <code>killall bash</code>会让所有用户退出登录，极其危险！</li>
              </ul>
            </div>`
          }
        ]
      }
    ]
  },

  // ========== 第7章：网络配置、管理与基本应用 ==========
  {
    id: 'chp7',
    title: '第7章 网络配置、管理与基本应用',
    chapterNumber: 'chp7',
    overview: '本章介绍TCP/IP基础知识和网络管理命令，包括IP地址、端口服务、物理地址与逻辑地址、主机名设置、网卡命名方案、ping/netstat/ifconfig/ip等网络命令。',
    icon: '🌐',
    estimatedMinutes: 80,
    
    skeleton: {
      scenarioIntro: {
        title: '🏙️ 想象你在管理一个城市的道路网络',
        description: '🛣️ 你是城市规划局局长。城市里有很多房子（主机），每栋房子都有唯一的门牌号（IP地址）和身份证号（MAC地址）。房子通过道路（网络）连接，信件（数据包）通过邮递员（路由器）投递。每栋房子有不同的门（端口），邮递员需要知道是应该敲前门（80端口）还是后门（22端口）。',
        problems: [
          '🏠 门牌号管理：怎么为房子分配门牌号？（IP地址配置）',
          '🚪 门的管理：不同的门接收不同的服务怎么办？（端口服务）',
          '📬 邮递路线：信件怎么找到目的地？（路由表）',
          '📞 通讯测试：怎么知道另一栋房子是否在家？（ping命令）',
          '🔍 网络监控：怎么查看当前的网络连接？（netstat命令）'
        ]
      },

      framework: [
        'IP地址与分类（A/B/C类）',
        '端口与服务（/etc/services）',
        '物理地址（MAC）与逻辑地址（IP）',
        '主机名设置（hostname/hostnamectl）',
        '网卡命名方案（en/wl/ww）',
        '网络管理命令（ping/netstat/arp/ifconfig/ip）'
      ],
      
      knowledgeMap: {
        root: {
          id: 'root',
          title: '网络配置与管理',
          level: 0,
          color: 'cyan',
          icon: '🌐'
        },
        chapters: [
          {
            id: 'ch7-1',
            title: 'TCP/IP基础',
            level: 1,
            color: 'blue',
            icon: '💻',
            sections: [
              {
                id: 'ch7-1-1',
                title: 'IP地址',
                level: 2,
                color: 'indigo',
                icon: '🏠',
                items: [
                  { id: 'ch7-1-1-1', title: 'A类IP', icon: '🅰️' },
                  { id: 'ch7-1-1-2', title: 'B类IP', icon: '🅱️' },
                  { id: 'ch7-1-1-3', title: 'C类IP', icon: '🅲' }
                ]
              },
              {
                id: 'ch7-1-2',
                title: '端口与服务',
                level: 2,
                color: 'cyan',
                icon: '🚪',
                items: [
                  { id: 'ch7-1-2-1', title: '端口定义', icon: '#️⃣' },
                  { id: 'ch7-1-2-2', title: '/etc/services', icon: '📝' }
                ]
              },
              {
                id: 'ch7-1-3',
                title: 'MAC与IP',
                level: 2,
                color: 'teal',
                icon: '🏷️',
                items: [
                  { id: 'ch7-1-3-1', title: 'MAC地址', icon: '🆔' },
                  { id: 'ch7-1-3-2', title: 'IP地址', icon: '🆘' }
                ]
              }
            ]
          },
          {
            id: 'ch7-2',
            title: '网络管理命令',
            level: 1,
            color: 'green',
            icon: '⚙️',
            sections: [
              {
                id: 'ch7-2-1',
                title: '测试命令',
                level: 2,
                color: 'lime',
                icon: '📡',
                items: [
                  { id: 'ch7-2-1-1', title: 'ping', icon: '🏓' },
                  { id: 'ch7-2-1-2', title: 'traceroute', icon: '🛣️' }
                ]
              },
              {
                id: 'ch7-2-2',
                title: '配置命令',
                level: 2,
                color: 'emerald',
                icon: '🔧',
                items: [
                  { id: 'ch7-2-2-1', title: 'ifconfig', icon: 'I' },
                  { id: 'ch7-2-2-2', title: 'ip', icon: '🆘' },
                  { id: 'ch7-2-2-3', title: 'route', icon: '🛣️' }
                ]
              },
              {
                id: 'ch7-2-3',
                title: '查询命令',
                level: 2,
                color: 'teal',
                icon: '🔍',
                items: [
                  { id: 'ch7-2-3-1', title: 'netstat', icon: '📊' },
                  { id: 'ch7-2-3-2', title: 'arp', icon: '🗃️' },
                  { id: 'ch7-2-3-3', title: 'nslookup', icon: '🔎' }
                ]
              }
            ]
          }
        ]
      },
      
      keyPoints: [
        'IP地址分A/B/C三类，子网掩码用于区分网络号和主机号',
        '端口是16位数字，用于标识进程，定义在/etc/services中',
        'MAC地址是物理地址（网卡），IP地址是逻辑地址（网络层）',
        'ping测试连通性，netstat查看网络状态，ifconfig/ip配置网卡',
        '网卡命名：en=以太网，wl=无线局域网，ww=无线广域网'
      ],
      
      learningObjectives: [
        '掌握IP地址的分类和子网掩码的作用',
        '理解端口和服务的对应关系',
        '区分物理地址和逻辑地址的作用',
        '掌握主机名设置和网卡命名规则',
        '熟练使用ping、netstat、ifconfig、ip等网络命令'
      ]
    },
    
    sections: [
      {
        id: 'section_7_1',
        title: 'IP地址',
        sectionNumber: '7.1.1',
        blocks: [
          {
            id: 'block_7_1_1',
            type: 'text',
            content: `<h3>IP地址基本概念</h3>
<p><strong>IP地址（Internet Protocol Address）</strong>是网际协议地址，由<mark class="bg-yellow-200 px-1">32位二进制数</mark>构成，分为<strong>网络号</strong>和<strong>主机号</strong>两部分。</p>
<p><strong>点分十进制表示法</strong>：将32位分成4组，每组8位，各组以十进制表示，用圆点分开。</p>
<p>示例：<code>192.168.1.1</code> = <code>11000000.10101000.00000001.00000001</code></p>`,
            keywords: ['IP地址', '网络号', '主机号', '点分十进制']
          },
          
          {
            id: 'block_7_1_2',
            type: 'table',
            content: `<h3>IP地址分类</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-cyan-100">
      <th class="border border-gray-300 px-3 py-2">类别</th>
      <th class="border border-gray-300 px-3 py-2">第一个字节范围</th>
      <th class="border border-gray-300 px-3 py-2">默认子网掩码</th>
      <th class="border border-gray-300 px-3 py-2">网络数量</th>
      <th class="border border-gray-300 px-3 py-2">主机数量</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong>A类</strong></td>
      <td class="border border-gray-300 px-3 py-2">0-127</td>
      <td class="border border-gray-300 px-3 py-2">255.0.0.0</td>
      <td class="border border-gray-300 px-3 py-2">126个</td>
      <td class="border border-gray-300 px-3 py-2">16777214个</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong>B类</strong></td>
      <td class="border border-gray-300 px-3 py-2">128-191</td>
      <td class="border border-gray-300 px-3 py-2">255.255.0.0</td>
      <td class="border border-gray-300 px-3 py-2">16384个</td>
      <td class="border border-gray-300 px-3 py-2">65534个</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><strong>C类</strong></td>
      <td class="border border-gray-300 px-3 py-2">192-223</td>
      <td class="border border-gray-300 px-3 py-2">255.255.255.0</td>
      <td class="border border-gray-300 px-3 py-2">2097152个</td>
      <td class="border border-gray-300 px-3 py-2">254个</td>
    </tr>
  </tbody>
</table>

<div class="bg-blue-100 p-3 rounded mt-3">
  <div class="font-bold text-blue-900 mb-2">📌 特殊IP地址</div>
  <ul class="text-sm text-blue-800 space-y-1 ml-4">
    <li>• <strong>私有地址</strong>：10.0.0.0/8、172.16.0.0/12、192.168.0.0/16</li>
    <li>• <strong>回环地址</strong>：127.0.0.0/8（127.0.0.1是localhost）</li>
    <li>• <strong>广播地址</strong>：主机号全为1（如192.168.1.255）</li>
    <li>• <strong>网络地址</strong>：主机号全为0（如192.168.1.0）</li>
  </ul>
</div>`,
            mnemonic: '💡 <strong>记忆口诀：</strong>"A类最大B类中间C类小" - 看第一个数字：0-127是A，128-191是B，192-223是C'
          },
          
          {
            id: 'block_7_1_3',
            type: 'highlight',
            content: `<h3>子网掩码</h3>
<p><strong>子网掩码（Subnet Mask）</strong>用于区分IP地址中的<mark class="bg-yellow-200 px-1">网络号和主机号</mark>，通过与IP地址进行<strong>按位与运算</strong>得到网络地址。</p>
<ul class="ml-6 mt-2 space-y-1">
  <li>• A类默认子网掩码：<code>255.0.0.0</code></li>
  <li>• B类默认子网掩码：<code>255.255.0.0</code></li>
  <li>• C类默认子网掩码：<code>255.255.255.0</code></li>
</ul>`,
            keywords: ['子网掩码', '网络地址', '按位与']
          }
        ]
      },
      
      {
        id: 'section_7_2',
        title: '端口与服务',
        sectionNumber: '7.1.2',
        blocks: [
          {
            id: 'block_7_2_1',
            type: 'text',
            content: `<h3>端口（Port）</h3>
<p><strong>端口</strong>是一个<mark class="bg-yellow-200 px-1">16位的数字</mark>，唯一标识一个进程。每个TCP或UDP分组头都包含<strong>源端口</strong>和<strong>目的端口号</strong>。</p>
<p><strong>服务</strong>是协议和端口的组合，定义在<code>/etc/services</code>文件中。</p>`,
            keywords: ['端口', '/etc/services', 'TCP', 'UDP']
          },
          
          {
            id: 'block_7_2_2',
            type: 'table',
            content: `<h3>常见服务端口</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-blue-100">
      <th class="border border-gray-300 px-3 py-2">服务</th>
      <th class="border border-gray-300 px-3 py-2">端口</th>
      <th class="border border-gray-300 px-3 py-2">协议</th>
      <th class="border border-gray-300 px-3 py-2">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2">HTTP</td>
      <td class="border border-gray-300 px-3 py-2">80</td>
      <td class="border border-gray-300 px-3 py-2">TCP</td>
      <td class="border border-gray-300 px-3 py-2">网页服务</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2">HTTPS</td>
      <td class="border border-gray-300 px-3 py-2">443</td>
      <td class="border border-gray-300 px-3 py-2">TCP</td>
      <td class="border border-gray-300 px-3 py-2">加密网页服务</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2">SSH</td>
      <td class="border border-gray-300 px-3 py-2">22</td>
      <td class="border border-gray-300 px-3 py-2">TCP</td>
      <td class="border border-gray-300 px-3 py-2">远程登录</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2">FTP</td>
      <td class="border border-gray-300 px-3 py-2">21</td>
      <td class="border border-gray-300 px-3 py-2">TCP</td>
      <td class="border border-gray-300 px-3 py-2">文件传输</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2">Telnet</td>
      <td class="border border-gray-300 px-3 py-2">23</td>
      <td class="border border-gray-300 px-3 py-2">TCP</td>
      <td class="border border-gray-300 px-3 py-2">远程终端</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2">DNS</td>
      <td class="border border-gray-300 px-3 py-2">53</td>
      <td class="border border-gray-300 px-3 py-2">UDP/TCP</td>
      <td class="border border-gray-300 px-3 py-2">域名解析</td>
    </tr>
  </tbody>
</table>`,
            mnemonic: '💡 <strong>记忆口诀：</strong>"HTTP80、SSH22、FTP21、HTTPS443" - 常用端口要记牢'
          }
        ]
      },
      
      {
        id: 'section_7_3',
        title: '物理地址与逻辑地址',
        sectionNumber: '7.1.3',
        blocks: [
          {
            id: 'block_7_3_1',
            type: 'highlight',
            content: `<p><strong>物理地址（MAC地址）</strong>：</p>
<ul class="ml-6 mt-2 space-y-1">
  <li>• 位于<mark class="bg-yellow-200 px-1">网卡中</mark>，全球唯一，48位（16进制表示</li>
  <li>• 用于<strong>物理层</strong>控制对网络介质的访问</li>
  <li>• 格式示例：<code>00:1A:2B:3C:4D:5E</code></li>
</ul>

<p class="mt-3"><strong>逻辑地址（IP地址）</strong>：</p>
<ul class="ml-6 mt-2 space-y-1">
  <li>• <mark class="bg-yellow-200 px-1">网络层</mark>使用的32位二进制地址</li>
  <li>• 用于对目的主机的<strong>寻址</strong></li>
  <li>• 格式示例：<code>192.168.1.100</code></li>
</ul>`,
            keywords: ['MAC地址', 'IP地址', '物理层', '网络层'],
            scenario: `<div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mt-3">
              <div class="font-bold text-cyan-900 mb-2">🏷️ 场景类比：Mac是身份证，IP是门牌号</div>
              <p class="text-cyan-800"><strong>MAC地址</strong>像身份证号，一生不变，全球唯一，让网卡能在局域网里找到对方；<strong>IP地址</strong>像门牌号，会改变（搬家），用于在互联网上寻址。数据包就像快递：先用IP找到城市（网络），再用MAC找到具体房间（主机）。</p>
            </div>`
          }
        ]
      },
      
      {
        id: 'section_7_4',
        title: '主机名设置',
        sectionNumber: '7.1.4',
        blocks: [
          {
            id: 'block_7_4_0',
            type: 'text',
            content: `<h3><strong>7.1.4 主机名及设置</strong></h3>
<p><strong>主机名（Hostname）</strong>是计算机在网络中的名称标识，便于用户记忆和访问。Linux提供了<code>hostname</code>和<code>hostnamectl</code>两个命令来管理主机名。</p>`,
            keywords: ['主机名', 'hostname', 'hostnamectl']
          },
          
          {
            id: 'block_7_4_1',
            type: 'code',
            language: 'bash',
            content: `# hostname命令 - 显示和临时设置主机名
hostname                    # 显示当前主机名
hostname -v linux.server    # 临时设置主机名（重启后失效）
hostname -d                 # 显示DNS域名
hostname -f                 # 显示完全限定域名（FQDN）
hostname -s                 # 显示短主机名
hostname -i                 # 显示主机的IP地址

# hostnamectl命令 - 查询和设置主机名（永久生效）
hostnamectl                              # 显示当前主机设置信息
hostnamectl set-hostname linux.learning  # 永久设置主机名
hostnamectl status                       # 显示主机状态信息`,
            mnemonic: '💡 <strong>主机名命令对比：</strong>"hostname临时，hostnamectl永久" - hostnamectl设置会写入配置文件'
          },
          
          {
            id: 'block_7_4_2',
            type: 'highlight',
            content: `<div class="bg-blue-100 p-3 rounded mt-3">
  <div class="font-bold text-blue-900 mb-2">📌 主机名配置文件</div>
  <ul class="text-sm text-blue-800 space-y-1 ml-4">
    <li>• <strong>/etc/hostname</strong>：存储主机名（systemd系统）</li>
    <li>• <strong>/etc/sysconfig/network</strong>：网络配置文件（旧系统）</li>
    <li>• <strong>/etc/hosts</strong>：本地主机名与IP地址映射表</li>
  </ul>
</div>`,
            keywords: ['/etc/hostname', '/etc/hosts'],
            scenario: `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mt-3">
              <div class="font-bold text-blue-900 mb-2">🏠 场景类比：主机名就像房子的名字</div>
              <p class="text-blue-800"><strong>IP地址</strong>是门牌号（192.168.1.100），不好记；<strong>主机名</strong>是房子的昵称（"小明家"、"linux-server"），方便记忆。就像你可以说"去小明家"而不用记住门牌号。</p>
            </div>`
          }
        ]
      },
      
      {
        id: 'section_7_5',
        title: '网卡命名方案',
        sectionNumber: '7.1.5',
        blocks: [
          {
            id: 'block_7_5_1',
            type: 'text',
            content: `<h3><strong>7.1.5 网卡命名方案</strong></h3>
<p>Linux系统使用<strong>可预测的网络设备命名方案</strong>（Predictable Network Interface Names），根据硬件位置和类型自动命名网卡，替代了传统的eth0、eth1等命名方式。</p>`,
            keywords: ['网卡命名', 'ens', 'eno', 'enp']
          },
          
          {
            id: 'block_7_5_2',
            type: 'table',
            content: `<h3>网卡名字的前2个字符</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-cyan-100">
      <th class="border border-gray-300 px-3 py-2">前缀</th>
      <th class="border border-gray-300 px-3 py-2">设备类型</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>en</code></td>
      <td class="border border-gray-300 px-3 py-2">以太网（Ethernet）</td>
      <td class="border border-gray-300 px-3 py-2">ens33, eno1, enp0s3</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>wl</code></td>
      <td class="border border-gray-300 px-3 py-2">无线局域网（WLAN）</td>
      <td class="border border-gray-300 px-3 py-2">wlp3s0</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>ww</code></td>
      <td class="border border-gray-300 px-3 py-2">无线广域网（WWAN）</td>
      <td class="border border-gray-300 px-3 py-2">wwp0s29u1u4i6</td>
    </tr>
  </tbody>
</table>

<h3 class="mt-4">网卡名字的第3个及以后字符</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-blue-100">
      <th class="border border-gray-300 px-3 py-2">格式</th>
      <th class="border border-gray-300 px-3 py-2">含义</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>o&lt;index&gt;</code></td>
      <td class="border border-gray-300 px-3 py-2">内置网卡（Onboard）</td>
      <td class="border border-gray-300 px-3 py-2">eno1, eno2</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>s&lt;slot&gt;</code></td>
      <td class="border border-gray-300 px-3 py-2">PCI热插拔插槽编号</td>
      <td class="border border-gray-300 px-3 py-2">ens1, ens33</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>x&lt;MAC&gt;</code></td>
      <td class="border border-gray-300 px-3 py-2">基于MAC地址</td>
      <td class="border border-gray-300 px-3 py-2">enx78e7d1ea46da</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>p&lt;bus&gt;s&lt;slot&gt;</code></td>
      <td class="border border-gray-300 px-3 py-2">PCI几何位置</td>
      <td class="border border-gray-300 px-3 py-2">enp0s3, enp2s0</td>
    </tr>
  </tbody>
</table>`,
            mnemonic: '💡 <strong>网卡前缀记忆：</strong>"en以太、wl无线局域、ww无线广域" - 看前两个字母识别网卡类型'
          },
          
          {
            id: 'block_7_5_3',
            type: 'list',
            content: `<h3>网卡命名优先级方案</h3>
<ul class="space-y-2 ml-4">
  <li>
    <div class="font-bold text-lg">方案1：内置网卡固件索引</div>
    <div class="ml-4 mt-1">• 格式：<code>eno&lt;N&gt;</code>（如eno1）</div>
    <div class="ml-4">• 条件：硬件和BIOS提供索引号</div>
  </li>
  <li>
    <div class="font-bold text-lg">方案2：PCI热插拔插槽索引</div>
    <div class="ml-4 mt-1">• 格式：<code>ens&lt;N&gt;</code>（如ens33）</div>
    <div class="ml-4">• 条件：硬件和BIOS提供PCI插槽索引</div>
  </li>
  <li>
    <div class="font-bold text-lg">方案3：硬件连接器物理位置</div>
    <div class="ml-4 mt-1">• 格式：<code>enp&lt;M&gt;s&lt;N&gt;</code>（如enp0s3）</div>
    <div class="ml-4">• 条件：可以获取物理位置信息</div>
  </li>
  <li>
    <div class="font-bold text-lg">方案4：MAC地址</div>
    <div class="ml-4 mt-1">• 格式：<code>enx&lt;MAC&gt;</code>（如enx78e7d1ea46da）</div>
    <div class="ml-4">• 条件：用户明确选择此方案（默认不使用）</div>
  </li>
  <li>
    <div class="font-bold text-lg">方案5：传统命名（兜底方案）</div>
    <div class="ml-4 mt-1">• 格式：<code>eth&lt;N&gt;</code>（如eth0）</div>
    <div class="ml-4">• 条件：其他方案都失败时使用</div>
  </li>
</ul>`,
            scenario: `<div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mt-3">
              <div class="font-bold text-cyan-900 mb-2">🔌 场景类比：网卡命名就像员工工号</div>
              <p class="text-cyan-800">公司给员工编号有多种方式：<strong>eno1</strong>是部门编号（内置设备）；<strong>ens33</strong>是工位号（PCI插槽）；<strong>enp0s3</strong>是楼层+房间号（物理位置）；<strong>eth0</strong>是流水号（传统方式）。优先用部门编号，找不到就用工位号，最后才用流水号。</p>
            </div>`
          }
        ]
      },
      
      {
        id: 'section_7_6',
        title: '网络管理命令',
        sectionNumber: '7.2',
        blocks: [
          {
            id: 'block_7_4_0_highlight',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-cyan-100 to-blue-100 p-4 rounded-xl border-2 border-cyan-300"><h3 class="text-2xl font-bold text-cyan-800 flex items-center gap-2"><span class="text-3xl">🎯</span>ping命令<span class="ml-2 text-sm bg-cyan-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_7_4_1',
            type: 'code',
            language: 'bash',
            content: `# ping - 测试网络连通性
ping -c 4 192.168.1.1      # 发送4个包后停止
ping -i 2 www.baidu.com    # 每2秒发一次
ping -s 1024 192.168.1.1   # 设置数据包大小为1024字节

# netstat - 检查网络状态
netstat -a           # 显示所有socket
netstat -t           # 显示TCP连接
netstat -u           # 显示UDP连接
netstat -n           # 以数字形式显示
netstat -r           # 显示路由表
netstat -i           # 显示网络接口
netstat -s           # 显示协议统计

# arp - 管理ARP缓存
arp -a               # 显示ARP表
arp -s 192.168.1.1 00:1A:2B:3C:4D:5E  # 添加静态ARP条目
arp -d 192.168.1.1   # 删除ARP条目`,
            mnemonic: '💡 <strong>网络命令记忆：</strong>"ping通、netstat查、arp对应" - 三大基础命令'
          },
          
          {
            id: 'block_7_4_1_highlight2',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-xl border-2 border-green-300"><h3 class="text-2xl font-bold text-green-800 flex items-center gap-2"><span class="text-3xl">🎯</span>网绬IP管理（ip命令）<span class="ml-2 text-sm bg-green-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_7_4_2',
            type: 'code',
            language: 'bash',
            content: `# ifconfig - 网络接口配置
ifconfig                   # 显示所有网卡信息
ifconfig eth0              # 显示指定网卡
ifconfig eth0 down         # 停用eth0网卡
ifconfig eth0 up           # 启用eth0网卡
ifconfig eth0 192.168.1.100 netmask 255.255.255.0  # 设置IP和掩码
ifconfig eth0:1 192.168.1.200 up  # 增加虚拟接口

# ip - 网络配置工具（更强大）
ip link show               # 显示网卡信息
ip addr show               # 显示IP地址
ip link set eth0 up        # 启用网卡
ip addr add 192.168.1.200/24 dev eth1  # 添加IP地址
ip route show              # 显示路由表
ip route add 192.168.2.0/24 via 192.168.1.1  # 添加路由

# route - 路由表管理
route -n                   # 显示路由表（数字形式）
route add -net 192.168.2.0 netmask 255.255.255.0 dev eth0  # 添加路由
route del -net 192.168.2.0 netmask 255.255.255.0  # 删除路由`,
            mnemonic: '💡 <strong>配置命令记忆：</strong>"ifconfig老命令，ip新工具" - ip命令功能更强'
          },
          
          {
            id: 'block_7_4_2_highlight3',
            type: 'highlight',
            content: '<div class="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl border-2 border-purple-300"><h3 class="text-2xl font-bold text-purple-800 flex items-center gap-2"><span class="text-3xl">🎯</span>netstat与ss命令<span class="ml-2 text-sm bg-purple-500 text-white px-3 py-1 rounded-full">重点</span></h3></div>',
          },
          {
            id: 'block_7_4_3',
            type: 'table',
            content: `<h3>网络命令对比</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-green-100">
      <th class="border border-gray-300 px-3 py-2">功能</th>
      <th class="border border-gray-300 px-3 py-2">传统命令</th>
      <th class="border border-gray-300 px-3 py-2">ip命令（推荐）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2">显示网卡信息</td>
      <td class="border border-gray-300 px-3 py-2">ifconfig</td>
      <td class="border border-gray-300 px-3 py-2">ip link show</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2">显示IP地址</td>
      <td class="border border-gray-300 px-3 py-2">ifconfig</td>
      <td class="border border-gray-300 px-3 py-2">ip addr show</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2">启用/停用网卡</td>
      <td class="border border-gray-300 px-3 py-2">ifconfig eth0 up/down</td>
      <td class="border border-gray-300 px-3 py-2">ip link set eth0 up/down</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2">显示路由表</td>
      <td class="border border-gray-300 px-3 py-2">route -n</td>
      <td class="border border-gray-300 px-3 py-2">ip route show</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2">添加IP地址</td>
      <td class="border border-gray-300 px-3 py-2">ifconfig eth0 192.168.1.1</td>
      <td class="border border-gray-300 px-3 py-2">ip addr add 192.168.1.1/24 dev eth0</td>
    </tr>
  </tbody>
</table>`
          },
          
          {
            id: 'block_7_6_4',
            type: 'code',
            language: 'bash',
            content: `# ifup/ifdown - 网络接口的启用与停止
ifup eth0        # 启用网卡eth0
ifdown eth0      # 禁用网卡eth0
ifup ens33       # 启用网卡ens33
ifdown ens33     # 禁用网卡ens33

# 主机名设置
hostname                           # 显示当前主机名
hostname linux.example.com         # 临时设置主机名
hostnamectl                        # 显示主机信息
hostnamectl set-hostname myserver  # 永久设置主机名

# 域名查询
nslookup www.baidu.com     # 查询域名IP地址
host www.google.com        # 域名解析

# 路由跟踪
traceroute www.baidu.com   # 跟踪到目的地的路由`,
            mnemonic: '💡 <strong>查询命令记忆：</strong>"nslookup查IP，traceroute跟踪路" - 网络排错必备'
          }
        ]
      }
    ]
  },

  // ========== 第8章：Shell程序设计 ==========
  {
    id: 'chp8',
    title: '第8章 Shell程序设计',
    chapterNumber: 'chp8',
    overview: '本章介绍Shell脚本编程的基础知识，包括Shell概述、变量使用、条件测试、控制结构（if/case/for/while/until）和函数定义。重点讲解Shell脚本的编写规范、常用命令回顾、变量操作和流程控制。',
    icon: '📜',
    estimatedMinutes: 100,
    
    skeleton: {
      scenarioIntro: {
        title: '📝 想象你在编写一个自动化工作流程',
        description: '🤖 你是一个办公室的效率专家。每天有很多重复性工作：整理文件（文件管理）、发送邮件通知（输出信息）、检查任务状态（条件判断）、批量处理数据（循环）。与其手工做，不如写一个Shell脚本让电脑自动完成！Shell脚本就像一个智能助手，能按照你的指令一步步执行任务，遇到分支自己判断，遇到重复自己循环。',
        problems: [
          '📋 任务列表：怎么让脚本按顺序执行多个命令？（Shell脚本基础）',
          '🏷️ 数据存储：怎么记住用户输入的名字？（变量）',
          '🔀 条件分支：怎么根据用户身份执行不同操作？（if/case语句）',
          '🔁 重复任务：怎么处理一批文件？（for/while循环）',
          '🧩 模块复用：怎么把常用功能打包重复调用？（函数）'
        ]
      },

      framework: [
        'Shell是什么及如何编写',
        '常用命令回顾（用户/目录/文件/权限）',
        '变量（本地变量、环境变量、特殊变量）',
        '条件测试（文件/字符串/数值）',
        '控制结构（if/case/for/while/until）',
        '函数定义与调用'
      ],
      
      knowledgeMap: {
        root: {
          id: 'root',
          title: 'Shell程序设计',
          level: 0,
          color: 'purple',
          icon: '📜'
        },
        chapters: [
          {
            id: 'ch8-1',
            title: 'Shell基础',
            level: 1,
            color: 'indigo',
            icon: '🐚',
            sections: [
              {
                id: 'ch8-1-1',
                title: 'Shell概述',
                level: 2,
                color: 'blue',
                icon: '📖',
                items: [
                  { id: 'ch8-1-1-1', title: 'Shell定义', icon: '💬' },
                  { id: 'ch8-1-1-2', title: '脚本结构', icon: '📄' },
                  { id: 'ch8-1-1-3', title: '执行权限', icon: '🔑' }
                ]
              },
              {
                id: 'ch8-1-2',
                title: '常用命令',
                level: 2,
                color: 'cyan',
                icon: '⌨️',
                items: [
                  { id: 'ch8-1-2-1', title: '用户管理', icon: '👤' },
                  { id: 'ch8-1-2-2', title: '文件管理', icon: '📁' },
                  { id: 'ch8-1-2-3', title: '权限管理', icon: '🔒' }
                ]
              }
            ]
          },
          {
            id: 'ch8-2',
            title: '变量与测试',
            level: 1,
            color: 'green',
            icon: '🔤',
            sections: [
              {
                id: 'ch8-2-1',
                title: '变量类型',
                level: 2,
                color: 'lime',
                icon: '📦',
                items: [
                  { id: 'ch8-2-1-1', title: '本地变量', icon: '📌' },
                  { id: 'ch8-2-1-2', title: '环境变量', icon: '🌍' },
                  { id: 'ch8-2-1-3', title: '特殊变量', icon: '⭐' }
                ]
              },
              {
                id: 'ch8-2-2',
                title: '条件测试',
                level: 2,
                color: 'emerald',
                icon: '✔️',
                items: [
                  { id: 'ch8-2-2-1', title: '文件测试', icon: '📄' },
                  { id: 'ch8-2-2-2', title: '字符串测试', icon: '🔤' },
                  { id: 'ch8-2-2-3', title: '数值测试', icon: '🔢' }
                ]
              }
            ]
          },
          {
            id: 'ch8-3',
            title: '控制结构',
            level: 1,
            color: 'orange',
            icon: '🔀',
            sections: [
              {
                id: 'ch8-3-1',
                title: '条件语句',
                level: 2,
                color: 'amber',
                icon: '🔀',
                items: [
                  { id: 'ch8-3-1-1', title: 'if语句', icon: '❓' },
                  { id: 'ch8-3-1-2', title: 'case语句', icon: '🔢' }
                ]
              },
              {
                id: 'ch8-3-2',
                title: '循环语句',
                level: 2,
                color: 'yellow',
                icon: '🔁',
                items: [
                  { id: 'ch8-3-2-1', title: 'for循环', icon: '🔄' },
                  { id: 'ch8-3-2-2', title: 'while循环', icon: '⏱️' },
                  { id: 'ch8-3-2-3', title: 'until循环', icon: '⏳' }
                ]
              }
            ]
          }
        ]
      },
      
      keyPoints: [
        'Shell脚本以#!/bin/sh开头，需要添加执行权限chmod u+x',
        '变量使用$符号引用，特殊变量如$1/$#/$?/$*等有特定含义',
        '条件测试用[ ]括起来，注意空格：[ -f file ]',
        'if/case用于条件分支，for/while/until用于循环',
        '函数定义为函数名(){ 命令; }，调用时直接使用函数名'
      ],
      
      learningObjectives: [
        '掌握Shell脚本的基本结构和编写规范',
        '熟练使用变量存储和操作数据',
        '掌握文件、字符串、数值的条件测试',
        '熟练编写if、case、for、while等控制结构',
        '学会定义和调用Shell函数实现代码复用'
      ]
    },
    
    sections: [
      {
        id: 'section_8_1',
        title: 'Shell概述与脚本编写',
        sectionNumber: '8.1',
        blocks: [
          {
            id: 'block_8_1_1',
            type: 'highlight',
            content: '<strong>Shell是什么？</strong>Shell是操作系统的<mark class="bg-yellow-200 px-1">命令解释程序</mark>，专门负责接收用户的输入命令，并对其进行解释和执行。Shell既是命令语言，也是程序设计语言。',
            keywords: ['Shell', '命令解释器', '壳层']
          },
          
          {
            id: 'block_8_1_2',
            type: 'list',
            content: `<strong>Shell的六大功能：</strong>
<ul class="space-y-2 ml-4">
  <li>① <mark class="bg-yellow-200 px-1">命令解释执行</mark> - 接收并执行用户输入的命令</li>
  <li>② <mark class="bg-yellow-200 px-1">文件名及管理</mark> - 通配符展开和文件操作</li>
  <li>③ <mark class="bg-yellow-200 px-1">I/O重定向</mark> - 输入输出流的重定向</li>
  <li>④ <mark class="bg-yellow-200 px-1">通信管道建立</mark> - 进程间通信</li>
  <li>⑤ <mark class="bg-yellow-200 px-1">系统环境设置</mark> - 配置环境变量</li>
  <li>⑥ <mark class="bg-yellow-200 px-1">Shell编程</mark> - 编写自动化脚本</li>
</ul>

<div class="bg-blue-100 p-3 rounded mt-3">
  <div class="font-bold text-blue-900 mb-2">🐚 常见Shell类型</div>
  <ul class="text-sm text-blue-800 space-y-1 ml-4">
    <li>• <strong>bash</strong> (Bourne Again Shell) - Linux最常用，功能强大</li>
    <li>• <strong>sh</strong> (Bourne Shell) - 经典Shell，兼容性好</li>
    <li>• <strong>csh</strong> (C Shell) - 语法类似C语言</li>
    <li>• <strong>tcsh</strong> - csh的增强版</li>
  </ul>
</div>`,
            scenario: `<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mt-3">
              <div class="font-bold text-purple-900 mb-2">🎭 场景类比：Shell就像翻译官</div>
              <p class="text-purple-800">你（用户）说中文，电脑只懂机器语言。<strong>Shell</strong>就是中间的翻译官，把你说的"显示当前目录"翻译成电脑能理解的指令。你还可以写一本翻译手册（Shell脚本），让翻译官按手册自动工作！</p>
            </div>`,
            mnemonic: '💡 <strong>记忆口诀：</strong>"命文输管环编" - 命令、文件、输入输出、管道、环境、编程'
          },
          
          {
            id: 'block_8_1_3',
            type: 'code',
            language: 'bash',
            content: `#!/bin/sh
# ShowHello.sh
# To show hello to somebody

echo -n "Enter Your Name:"
read NAME
echo "Hello, $NAME!"

# 保存后添加执行权限
# chmod u+x ShowHello.sh
# 运行脚本
# ./ShowHello.sh`,
            mnemonic: '💡 <strong>脚本三要素：</strong>① 首行#!/bin/sh ② 注释说明 ③ chmod添加执行权限'
          },
          
          {
            id: 'block_8_1_4',
            type: 'highlight',
            content: `<h3>Shell脚本编写规范</h3>
<ul class="ml-6 mt-2 space-y-1">
  <li>• <strong>第一行</strong>必须是<code>#!/bin/sh</code>或<code>#!/bin/bash</code>，指定解释器</li>
  <li>• <strong>第二行</strong>注释脚本名称</li>
  <li>• <strong>第三行</strong>注释脚本功能</li>
  <li>• 编写完成后添加执行权限：<code>chmod u+x 脚本名.sh</code></li>
  <li>• 运行方式：<code>./脚本名.sh</code> 或 <code>sh 脚本名.sh</code></li>
</ul>

<div class="bg-yellow-100 p-3 rounded mt-3">
  <div class="font-bold text-yellow-900 mb-2">⚠️ 注意事项</div>
  <ul class="text-sm text-yellow-800 space-y-1 ml-4">
    <li>• Shell脚本是<strong>按行解释</strong>执行的，不是编译型语言</li>
    <li>• 变量名通常用<strong>大写字母</strong>表示</li>
    <li>• 使用<code>/dev/null</code>（Linux黑洞）丢弃不需要的输出</li>
  </ul>
</div>`,
            keywords: ['#!/bin/sh', 'chmod', '执行权限', '/dev/null']
          }
        ]
      },
      
      {
        id: 'section_8_2',
        title: '变量',
        sectionNumber: '8.2',
        blocks: [
          {
            id: 'block_8_2_1',
            type: 'text',
            content: `<h3>变量定义与使用</h3>
<p>变量可以<strong>定制用户工作环境</strong>，保存有用信息，使系统获知用户相关设置。</p>
<p><strong>基本规则：</strong></p>
<ul class="ml-6 mt-2 space-y-1">
  <li>• 变量名一般用<mark class="bg-yellow-200 px-1">大写字母</mark>表示</li>
  <li>• 引用变量时在变量名前加<code>$</code>符号</li>
  <li>• 使用<code>echo $变量名</code>显示变量值</li>
  <li>• 使用<code>set</code>命令显示所有本地变量</li>
  <li>• 使用<code>unset 变量名</code>清除变量定义</li>
</ul>`,
            keywords: ['变量', 'echo', 'set', 'unset']
          },
          
          {
            id: 'block_8_2_2',
            type: 'code',
            language: 'bash',
            content: `# 定义变量（注意：等号两边不能有空格！）
USER="haison"
echo $USER          # 输出：haison

# 只读变量
readonly USER
# USER="newname"   # 错误！只读变量不能修改

# 环境变量（所有进程可见）
export PATH=$PATH:/opt/myapp/bin
env                 # 显示所有环境变量

# 清除变量
unset USER`,
            mnemonic: '💡 <strong>变量赋值记忆：</strong>"等号紧贴无空格" - NAME="value"（不能有空格）'
          },
          
          {
            id: 'block_8_2_3',
            type: 'table',
            content: `<h3>特殊变量（位置参数与状态变量）</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-green-100">
      <th class="border border-gray-300 px-3 py-2">变量</th>
      <th class="border border-gray-300 px-3 py-2">含义</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>$0</code></td>
      <td class="border border-gray-300 px-3 py-2">脚本名称</td>
      <td class="border border-gray-300 px-3 py-2">./test.sh则$0为test.sh</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>$1-$9</code></td>
      <td class="border border-gray-300 px-3 py-2">位置参数（第1-9个参数）</td>
      <td class="border border-gray-300 px-3 py-2">./test.sh a b，则$1=a $2=b</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>$#</code></td>
      <td class="border border-gray-300 px-3 py-2">参数个数</td>
      <td class="border border-gray-300 px-3 py-2">./test.sh a b c，则$#=3</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>$*</code></td>
      <td class="border border-gray-300 px-3 py-2">所有参数（字符串形式）</td>
      <td class="border border-gray-300 px-3 py-2">"$*" = "a b c"</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>$@</code></td>
      <td class="border border-gray-300 px-3 py-2">所有参数（分别引用）</td>
      <td class="border border-gray-300 px-3 py-2">"$@" = "a" "b" "c"</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>$$</code></td>
      <td class="border border-gray-300 px-3 py-2">当前进程ID</td>
      <td class="border border-gray-300 px-3 py-2">用于生成临时文件：temp.$$</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>$?</code></td>
      <td class="border border-gray-300 px-3 py-2">上一命令退出状态</td>
      <td class="border border-gray-300 px-3 py-2">0表示成功，非0表示失败</td>
    </tr>
  </tbody>
</table>`,
            mnemonic: '💡 <strong>特殊变量记忆：</strong>"$0名$1参$#数$$进程$?状态" - 常用特殊变量'
          },
          
          {
            id: 'block_8_2_4',
            type: 'code',
            language: 'bash',
            content: `#!/bin/sh
# VarTest.sh - 测试特殊变量

USER=haison
echo "Hello,$USER,the output of this script are as follows:"
echo "脚本名称：\`basename $0\`"
echo "第一个参数：$1"
echo "第二个参数：$2"
echo "第十个参数：$10"      # 注意：会被解释为${1}0
echo "所有参数：$*"
echo "参数个数：$#"
echo "当前进程ID：$$"
echo "上一命令退出状态：$?"

# 运行：./VarTest.sh arg1 arg2 arg3`,
            scenario: `<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-3">
              <div class="font-bold text-green-900 mb-2">📦 场景类比：特殊变量就像快递包裹信息</div>
              <p class="text-green-800"><strong>$0</strong>是快递单号（脚本名）；<strong>$1 $2</strong>是收件人地址（参数）；<strong>$#</strong>是包裹数量；<strong>$$</strong>是快递员工号（进程ID）；<strong>$?</strong>是配送状态（0=成功送达）。</p>
            </div>`
          }
        ]
      },
      
      {
        id: 'section_8_3',
        title: '条件测试',
        sectionNumber: '8.3',
        blocks: [
          {
            id: 'block_8_3_1',
            type: 'table',
            content: `<h3>文件状态测试</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-blue-100">
      <th class="border border-gray-300 px-3 py-2">测试符</th>
      <th class="border border-gray-300 px-3 py-2">含义</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-d</code></td>
      <td class="border border-gray-300 px-3 py-2">是否为目录</td>
      <td class="border border-gray-300 px-3 py-2">[ -d /tmp ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-f</code></td>
      <td class="border border-gray-300 px-3 py-2">是否为常规文件</td>
      <td class="border border-gray-300 px-3 py-2">[ -f test.sh ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-r</code></td>
      <td class="border border-gray-300 px-3 py-2">是否可读</td>
      <td class="border border-gray-300 px-3 py-2">[ -r file.txt ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-w</code></td>
      <td class="border border-gray-300 px-3 py-2">是否可写</td>
      <td class="border border-gray-300 px-3 py-2">[ -w file.txt ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-x</code></td>
      <td class="border border-gray-300 px-3 py-2">是否可执行</td>
      <td class="border border-gray-300 px-3 py-2">[ -x script.sh ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-s</code></td>
      <td class="border border-gray-300 px-3 py-2">文件长度>0（非空）</td>
      <td class="border border-gray-300 px-3 py-2">[ -s data.txt ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-L</code></td>
      <td class="border border-gray-300 px-3 py-2">是否为符号链接</td>
      <td class="border border-gray-300 px-3 py-2">[ -L link ]</td>
    </tr>
  </tbody>
</table>

<div class="bg-yellow-100 p-3 rounded mt-3">
  <div class="font-bold text-yellow-900 mb-2">⚠️ 注意：测试符号两边要有空格！</div>
  <ul class="text-sm text-yellow-800 space-y-1 ml-4">
    <li>✅ 正确：<code>[ -f test.sh ]</code></li>
    <li>❌ 错误：<code>[-f test.sh]</code> 或 <code>[ -f test.sh]</code></li>
  </ul>
</div>`,
            mnemonic: '💡 <strong>文件测试记忆：</strong>"目常读写执空链" - d(directory)f(file)r(read)w(write)x(execute)s(size)L(link)'
          },
          
          {
            id: 'block_8_3_2',
            type: 'table',
            content: `<h3>字符串测试</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-purple-100">
      <th class="border border-gray-300 px-3 py-2">测试符</th>
      <th class="border border-gray-300 px-3 py-2">含义</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>=</code></td>
      <td class="border border-gray-300 px-3 py-2">两个字符串相等</td>
      <td class="border border-gray-300 px-3 py-2">[ "$a" = "$b" ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>!=</code></td>
      <td class="border border-gray-300 px-3 py-2">两个字符串不相等</td>
      <td class="border border-gray-300 px-3 py-2">[ "$a" != "$b" ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-z</code></td>
      <td class="border border-gray-300 px-3 py-2">空串（长度为0）</td>
      <td class="border border-gray-300 px-3 py-2">[ -z "$str" ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-n</code></td>
      <td class="border border-gray-300 px-3 py-2">非空串（长度>0）</td>
      <td class="border border-gray-300 px-3 py-2">[ -n "$str" ]</td>
    </tr>
  </tbody>
</table>

<h3 class="mt-4">数值测试</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-orange-100">
      <th class="border border-gray-300 px-3 py-2">测试符</th>
      <th class="border border-gray-300 px-3 py-2">含义</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-eq</code></td>
      <td class="border border-gray-300 px-3 py-2">等于 (equal)</td>
      <td class="border border-gray-300 px-3 py-2">[ "$a" -eq "$b" ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-ne</code></td>
      <td class="border border-gray-300 px-3 py-2">不等于 (not equal)</td>
      <td class="border border-gray-300 px-3 py-2">[ "$a" -ne "$b" ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-gt</code></td>
      <td class="border border-gray-300 px-3 py-2">大于 (greater than)</td>
      <td class="border border-gray-300 px-3 py-2">[ "$a" -gt "$b" ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-lt</code></td>
      <td class="border border-gray-300 px-3 py-2">小于 (less than)</td>
      <td class="border border-gray-300 px-3 py-2">[ "$a" -lt "$b" ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-ge</code></td>
      <td class="border border-gray-300 px-3 py-2">大于等于</td>
      <td class="border border-gray-300 px-3 py-2">[ "$a" -ge "$b" ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-le</code></td>
      <td class="border border-gray-300 px-3 py-2">小于等于</td>
      <td class="border border-gray-300 px-3 py-2">[ "$a" -le "$b" ]</td>
    </tr>
  </tbody>
</table>

<h3 class="mt-4">逻辑操作符</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-green-100">
      <th class="border border-gray-300 px-3 py-2">操作符</th>
      <th class="border border-gray-300 px-3 py-2">含义</th>
      <th class="border border-gray-300 px-3 py-2">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-a</code></td>
      <td class="border border-gray-300 px-3 py-2">逻辑与 (and)</td>
      <td class="border border-gray-300 px-3 py-2">[ -r file -a -w file ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>-o</code></td>
      <td class="border border-gray-300 px-3 py-2">逻辑或 (or)</td>
      <td class="border border-gray-300 px-3 py-2">[ -r file -o -w file ]</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>!</code></td>
      <td class="border border-gray-300 px-3 py-2">逻辑非 (not)</td>
      <td class="border border-gray-300 px-3 py-2">[ ! -f file ]</td>
    </tr>
  </tbody>
</table>`,
            mnemonic: '💡 <strong>数值测试记忆：</strong>"eq等ne不gt大lt小" - equal/not equal/greater/less'
          }
        ]
      },
      
      {
        id: 'section_8_4',
        title: '控制结构',
        sectionNumber: '8.4',
        blocks: [
          {
            id: 'block_8_4_1',
            type: 'code',
            language: 'bash',
            content: `# ========== if语句 ==========
# 格式1：单分支
if [ 条件 ]
then
    命令
fi

# 格式2：双分支
if [ 条件 ]
then
    命令1
else
    命令2
fi

# 格式3：多分支
if [ 条件1 ]
then
    命令1
elif [ 条件2 ]
then
    命令2
else
    命令3
fi

# 示例：比较两个数字
#!/bin/sh
echo -n "输入第一个整数："
read FIRST
echo -n "输入第二个整数："
read SECOND

if [ "$FIRST" -gt "$SECOND" ]
then
    echo "$FIRST 大于 $SECOND"
elif [ "$FIRST" -lt "$SECOND" ]
then
    echo "$FIRST 小于 $SECOND"
else
    echo "$FIRST 等于 $SECOND"
fi`,
            mnemonic: '💡 <strong>if语句记忆：</strong>"if-then-fi" 结构必须完整，fi是if的倒写'
          },
          
          {
            id: 'block_8_4_2',
            type: 'code',
            language: 'bash',
            content: `# ========== case语句 ==========
# 格式
case 值 in
    模式1)
        命令1
        ;;
    模式2)
        命令2
        ;;
    *)
        默认命令
        ;;
esac

# 示例：根据用户身份执行不同操作
#!/bin/sh
USER=\`whoami\`

case $USER in
    root)
        echo "你可以做所有操作"
        ;;
    Dave)
        echo "你可以做部分操作"
        ;;
    *)
        echo "抱歉，你无权操作"
        ;;
esac`,
            mnemonic: '💡 <strong>case语句记忆：</strong>"case-in-esac" - esac是case的倒写，每个分支用;;结束'
          },
          
          {
            id: 'block_8_4_3',
            type: 'code',
            language: 'bash',
            content: `# ========== for循环 ==========
# 格式
for 变量名 in 列表
do
    命令
done

# 示例1：统计当前目录文件数
#!/bin/sh
COUNTER=0
for FILES in *
do
    COUNTER=\`expr $COUNTER + 1\`
done
echo "当前目录有 $COUNTER 个文件"

# 示例2：遍历数字
for i in 1 2 3 4 5
do
    echo "数字：$i"
done

# 示例3：遍历文件列表
for file in *.txt
do
    echo "处理文件：$file"
done`,
            scenario: `<div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mt-3">
              <div class="font-bold text-cyan-900 mb-2">🔄 场景类比：for循环就像流水线</div>
              <p class="text-cyan-800">工厂流水线上有一堆零件（列表），工人（变量）拿起每个零件（in列表），依次加工（执行命令），直到所有零件处理完毕。<code>for file in *.txt</code>就是"对每个txt文件，都执行一次操作"。</p>
            </div>`
          },
          
          {
            id: 'block_8_4_4',
            type: 'code',
            language: 'bash',
            content: `# ========== while循环 ==========
# 格式
while 条件
do
    命令
done

# 示例1：计数循环
#!/bin/sh
COUNTER=0
while [ $COUNTER -lt 10 ]
do
    echo $COUNTER
    COUNTER=\`expr $COUNTER + 1\`
done

# 示例2：读取文件内容
while read LINE
do
    echo $LINE
done < names.txt

# ========== until循环 ==========
# 格式（与while相反：条件为假时循环）
until 条件
do
    命令
done

# 示例：直到变量>10才停止
#!/bin/bash
myvar=1
until [ $myvar -gt 10 ]
do
    echo $myvar
    myvar=$(( $myvar + 1 ))
done`,
            mnemonic: '💡 <strong>循环对比：</strong>while条件为真继续，until条件为真停止 - 相反逻辑'
          },
          
          {
            id: 'block_8_4_5',
            type: 'table',
            content: `<h3>控制结构总结</h3>
<table class="w-full border-collapse mt-3">
  <thead>
    <tr class="bg-indigo-100">
      <th class="border border-gray-300 px-3 py-2">结构</th>
      <th class="border border-gray-300 px-3 py-2">用途</th>
      <th class="border border-gray-300 px-3 py-2">结束符</th>
      <th class="border border-gray-300 px-3 py-2">适用场景</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>if-fi</code></td>
      <td class="border border-gray-300 px-3 py-2">条件分支</td>
      <td class="border border-gray-300 px-3 py-2">fi</td>
      <td class="border border-gray-300 px-3 py-2">1-3个分支判断</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>case-esac</code></td>
      <td class="border border-gray-300 px-3 py-2">多路分支</td>
      <td class="border border-gray-300 px-3 py-2">esac</td>
      <td class="border border-gray-300 px-3 py-2">多个固定值匹配</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>for-done</code></td>
      <td class="border border-gray-300 px-3 py-2">遍历列表</td>
      <td class="border border-gray-300 px-3 py-2">done</td>
      <td class="border border-gray-300 px-3 py-2">处理已知列表</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>while-done</code></td>
      <td class="border border-gray-300 px-3 py-2">条件循环</td>
      <td class="border border-gray-300 px-3 py-2">done</td>
      <td class="border border-gray-300 px-3 py-2">条件为真时循环</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-3 py-2"><code>until-done</code></td>
      <td class="border border-gray-300 px-3 py-2">条件循环</td>
      <td class="border border-gray-300 px-3 py-2">done</td>
      <td class="border border-gray-300 px-3 py-2">条件为假时循环</td>
    </tr>
  </tbody>
</table>`,
            mnemonic: '💡 <strong>结束符记忆：</strong>"if→fi, case→esac, do→done" - 倒写或成对'
          }
        ]
      },
      
      {
        id: 'section_8_5',
        title: '函数',
        sectionNumber: '8.5',
        blocks: [
          {
            id: 'block_8_5_1',
            type: 'code',
            language: 'bash',
            content: `# ========== 函数定义 ==========
# 格式
函数名()
{
    命令
}

# 示例1：简单函数
#!/bin/sh
DATE=\`date\`
Hello()
{
    echo "Hello, today is $DATE"
}

# 调用函数
Hello

# 示例2：带参数的函数
#!/bin/sh
greet()
{
    echo "欢迎，$1！你是第 $2 位访客。"
}

# 调用：greet "张三" "100"
greet "张三" "100"

# 示例3：函数返回值
add()
{
    result=$(( $1 + $2 ))
    echo $result
}

sum=\`add 10 20\`
echo "10 + 20 = $sum"`,
            mnemonic: '💡 <strong>函数记忆：</strong>"函数名(){命令}" - 定义后直接用函数名调用'
          },
          
          {
            id: 'block_8_5_2',
            type: 'highlight',
            content: `<h3>函数使用要点</h3>
<ul class="ml-6 mt-2 space-y-1">
  <li>• 所有函数<mark class="bg-yellow-200 px-1">必须在使用前定义</mark>，通常放在脚本开始部分</li>
  <li>• 调用函数<strong>仅使用函数名</strong>，不需要括号</li>
  <li>• 函数参数通过<code>$1 $2 ...</code>访问，类似脚本参数</li>
  <li>• 函数可以放在<strong>单独文件</strong>中，通过<code>. ./函数文件</code>或<code>source 函数文件</code>加载</li>
  <li>• 函数没有显式return值，使用<code>echo</code>输出，通过<code>\`函数名\`</code>捕获</li>
</ul>

<div class="bg-blue-100 p-3 rounded mt-3">
  <div class="font-bold text-blue-900 mb-2">📦 函数文件示例</div>
  <div class="bg-white p-2 rounded mt-2">
    <div class="text-sm">文件：mylib.sh</div>
    <code class="block">
#!/bin/sh<br>
greet() { echo "Hello, $1!"; }
    </code>
  </div>
  <div class="bg-white p-2 rounded mt-2">
    <div class="text-sm">主脚本：main.sh</div>
    <code class="block">
#!/bin/sh<br>
. ./mylib.sh    # 加载函数库<br>
greet "World"   # 调用函数
    </code>
  </div>
</div>`,
            keywords: ['函数', 'source', '模块化'],
            scenario: `<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mt-3">
              <div class="font-bold text-purple-900 mb-2">🧩 场景类比：函数就像工具箱</div>
              <p class="text-purple-800">你经常需要"打招呼"这个操作，与其每次都写<code>echo "Hello, XXX"</code>，不如做一个<strong>工具</strong>叫<code>greet()</code>，需要时直接调用。函数就是把常用功能打包成工具，需要时拿出来用，避免重复代码！</p>
            </div>`
          }
        ]
      }
    ]
  },

  // ========== 第9章:Web服务器Apache ==========
  {
    id: 'chp9',
    title: '第9章 Web服务器Apache',
    chapterNumber: 'chp9',
    overview: '本章介绍Web服务器Apache的基本概念、安装配置、虚拟主机设置以及安全管理。重点讲解Apache的核心配置文件httpd.conf、虚拟主机的实现方式及常见问题排查。',
    icon: '🌐',
    estimatedMinutes: 60,
    
    skeleton: {
      scenarioIntro: {
        title: '🏨 想象你在经营一家大型酒店',
        description: '🏢 你是一家连锁酒店的总经理。这家酒店（Web服务器）每天接待来自世界各地的客人（用户请求）。前台（Apache）负责接待客人、分配房间（处理请求、返回网页）。酒店有多个楼层（虚拟主机），每层有不同的房间类型（网站目录）。你需要管理：前台服务流程、房间分配规则、安全门禁系统！',
        problems: [
          '🚪 接待流程：客人来了怎么处理？（HTTP请求处理流程）',
          '🏢 楼层管理：一栋楼怎么同时运营多个品牌酒店？（虚拟主机技术）',
          '📋 服务手册：前台的工作规范在哪查？（httpd.conf配置文件）',
          '🔧 故障排查：服务器启动失败怎么办？（查看日志、检查配置）',
          '🔐 安全管理：怎么限制某些房间只允许特定客人进入？（访问控制）'
        ]
      },

      framework: [
        'Apache Web服务器概述',
        'Apache的安装与启动',
        'httpd.conf核心配置文件',
        '虚拟主机配置（基于IP/端口/域名）',
        'Apache安全管理与访问控制'
      ],
      
      knowledgeMap: {
        root: { id: 'root', title: 'Apache Web服务器', level: 0, color: 'cyan', icon: '🌐' },
        chapters: [
          {
            id: 'ch9-1',
            title: 'Apache基础',
            level: 1,
            color: 'indigo',
            icon: '📚',
            sections: [
              { id: 'ch9-1-1', title: 'Apache概述', level: 2, color: 'blue', icon: '📖', items: [
                  { id: 'ch9-1-1-1', title: 'Web服务器定义', icon: '🌍' },
                  { id: 'ch9-1-1-2', title: 'Apache特点', icon: '⭐' }
                ]
              }
            ]
          }
        ]
      },
      
      keyPoints: [
        'Apache是世界上使用最广泛的Web服务器软件，开源免费',
        'httpd.conf是Apache的核心配置文件，位于/etc/httpd/conf/',
        '虚拟主机可以基于IP、端口或域名实现，最常用的是基于域名',
        'DocumentRoot指定网站根目录，DirectoryIndex指定默认首页'
      ],
      
      learningObjectives: [
        '理解Apache Web服务器的工作原理',
        '掌握Apache的安装、启动和停止方法',
        '学会配置httpd.conf核心参数',
        '掌握基于域名的虚拟主机配置'
      ]
    },
    
    sections: [
      {
        id: 'section_9_1',
        title: 'Apache概述',
        sectionNumber: '9.1',
        blocks: [
          {
            id: 'block_9_1_1',
            type: 'text',
            content: '<h3><strong>9.1.1 Apache简介</strong></h3><p><strong>Apache</strong>是世界使用排名<mark class="bg-yellow-200 px-1">第一的Web服务器软件</mark>，是一款<strong>开源软件</strong>，可以运行在几乎所有广泛使用的计算机平台上。</p>'
          },
          
          {
            id: 'block_9_1_2',
            type: 'list',
            content: `<div class="space-y-3">
  <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
    <p class="font-bold text-blue-900">🌟 Apache的核心特点</p>
    <ul class="text-sm text-gray-700 mt-2 space-y-1 ml-4">
      <li>✅ <strong>开源免费</strong> - Apache License，自由使用和修改</li>
      <li>✅ <strong>跨平台</strong> - 支持Linux、Windows、macOS等</li>
      <li>✅ <strong>模块化架构</strong> - 极强的可扩展性，按需加载模块</li>
      <li>✅ <strong>稳定可靠</strong> - 经过多年验证，性能优秀</li>
      <li>✅ <strong>社区活跃</strong> - 丰富的文档和技术支持</li>
    </ul>
  </div>
</div>`,
            keywords: ['Apache', '开源', '模块化', 'Web服务器']
          },
          
          {
            id: 'block_9_1_3',
            type: 'highlight',
            content: `<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
  <p class="font-bold text-green-900 mb-2">📊 Apache市场地位</p>
  <p class="text-sm text-gray-700">Apache自1995年诞生以来，一直是全球使用最广泛的Web服务器软件。根据统计，全球超过<strong>40%的网站</strong>使用Apache作为Web服务器，包括众多知名网站和企业应用。</p>
</div>`,
            scenario: `<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mt-3">
              <div class="font-bold text-purple-900 mb-2">🏨 场景类比：Apache就像酒店的前台系统</div>
              <p class="text-purple-800">Web服务器就像酒店的<strong>前台接待系统</strong>。客人（用户）来酒店（访问网站），前台（Apache）负责：①接待客人（接收HTTP请求）；②分配房间（返回网页内容）；③管理多个楼层（虚拟主机）；④记录访客信息（日志）；⑤控制门禁（访问控制）。Apache的<strong>模块化</strong>就像酒店的不同服务部门，可以按需启用餐饮、健身、会议等服务！</p>
            </div>`
          }
        ]
      },
      
      {
        id: 'section_9_2',
        title: 'Apache的安装与启动管理',
        sectionNumber: '9.2',
        blocks: [
          {
            id: 'block_9_2_1',
            type: 'text',
            content: '<h3><strong>9.2.1 Apache的安装</strong></h3>'
          },
          
          {
            id: 'block_9_2_2',
            type: 'code',
            content: `<div class="space-y-3">
  <div class="bg-red-50 p-3 rounded-lg">
    <p class="font-bold text-red-900 mb-2">🔴 红帽系统安装</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
# 检查是否已安装<br/>
rpm -qa | grep httpd<br/>
dnf list httpd<br/>
<br/>
# 安装Apache<br/>
yum install httpd<br/>
# 或<br/>
dnf install httpd
    </code>
  </div>
  
  <div class="bg-blue-50 p-3 rounded-lg">
    <p class="font-bold text-blue-900 mb-2">🔵 Ubuntu/Debian系统安装</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
# 更新软件包列表<br/>
apt update<br/>
<br/>
# 安装Apache<br/>
apt install apache2
    </code>
  </div>
</div>`,
            keywords: ['安装', 'yum', 'apt', 'httpd', 'apache2']
          },
          
          {
            id: 'block_9_2_3',
            type: 'text',
            content: '<h3><strong>9.2.2 Apache服务器启动管理</strong></h3>'
          },
          
          {
            id: 'block_9_2_4',
            type: 'code',
            content: `<div class="space-y-4">
  <div class="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
    <p class="font-bold text-green-900 mb-2">1️⃣ 运行状态检查</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
systemctl status httpd        # 红帽系统<br/>
systemctl status apache2      # Ubuntu系统<br/>
apachectl status              # 通用命令（所有系统）
    </code>
  </div>
  
  <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
    <p class="font-bold text-blue-900 mb-2">2️⃣ 设置开机自启动</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
systemctl enable httpd        # 红帽系统<br/>
systemctl enable apache2      # Ubuntu系统
    </code>
  </div>
  
  <div class="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
    <p class="font-bold text-purple-900 mb-2">3️⃣ 启动/停止/重启服务</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
systemctl start httpd         # 启动（红帽）<br/>
systemctl stop httpd          # 停止<br/>
systemctl restart httpd       # 重启<br/>
systemctl reload httpd        # 重新加载配置（不中断服务）<br/>
<br/>
# 或使用apachectl通用命令<br/>
apachectl start | stop | restart
    </code>
  </div>
  
  <div class="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
    <p class="font-bold text-yellow-900 mb-2">4️⃣ 配置文件语法检查</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
apachectl configtest          # 检查配置文件语法<br/>
httpd -t                      # 同上（红帽）<br/>
httpd -l                      # 查看编译到Apache中的模块
    </code>
  </div>
</div>`,
            keywords: ['systemctl', 'apachectl', 'start', 'stop', 'restart', 'reload'],
            mnemonic: '💡 <strong>服务管理三步曲：</strong>status查状态 → enable开机启 → start立即启 → reload热重载'
          },
          
          {
            id: 'block_9_2_5',
            type: 'text',
            content: '<h3><strong>9.2.3 Apache服务的测试</strong></h3>'
          },
          
          {
            id: 'block_9_2_6',
            type: 'code',
            content: `<div class="bg-gray-100 p-4 rounded-lg">
  <p class="font-bold mb-2">📁 默认网站目录和文件</p>
  <ul class="text-sm mb-3 space-y-1">
    <li>• <strong>文档根目录：</strong><code>/var/www/html</code></li>
    <li>• <strong>默认首页：</strong><code>index.html</code></li>
  </ul>
  
  <p class="font-bold mb-2">📝 创建测试页面</p>
  <code class="block bg-gray-800 text-green-400 p-3 rounded text-xs">
# 创建测试页面<br/>
cat > /var/www/html/index.html << EOF<br/>
&lt;HTML&gt;<br/>
&nbsp;&nbsp;&lt;TITLE&gt;Apache Server Test!&lt;/TITLE&gt;<br/>
&nbsp;&nbsp;&lt;BODY&gt;&lt;H2&gt;Hello Apache World!&lt;/H2&gt;&lt;/BODY&gt;<br/>
&lt;/HTML&gt;<br/>
EOF
  </code>
  
  <p class="font-bold mt-3 mb-2">🌐 测试访问</p>
  <code class="block bg-gray-800 text-green-400 p-3 rounded text-xs">
# 浏览器访问<br/>
http://127.0.0.1<br/>
http://localhost<br/>
<br/>
# 命令行测试<br/>
elinks http://127.0.0.1/index.html<br/>
curl http://localhost
  </code>
</div>`,
            keywords: ['/var/www/html', 'index.html', '测试页面'],
            scenario: `<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-3">
              <div class="font-bold text-green-900 mb-2">🏠 场景类比：测试Apache就像检查新房</div>
              <p class="text-green-800">安装完Apache就像盖好了新房子（Web服务器），<code>/var/www/html</code>是<strong>客厅</strong>（网站根目录），<code>index.html</code>是<strong>欢迎标语</strong>（首页）。测试访问就是<strong>敲门看看有没有人应答</strong>——如果浏览器显示"Hello Apache World!"，说明前台（Apache）正常营业了！</p>
            </div>`
          }
        ]
      },
      
      {
        id: 'section_9_3',
        title: 'Apache配置文件',
        sectionNumber: '9.3',
        blocks: [
          {
            id: 'block_9_3_1',
            type: 'text',
            content: '<h3><strong>9.3.1 配置文件位置</strong></h3>'
          },
          
          {
            id: 'block_9_3_2',
            type: 'list',
            content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="bg-red-50 p-4 rounded-lg border-2 border-red-400">
    <p class="font-bold text-red-900 mb-2">🔴 红帽系统</p>
    <ul class="text-sm space-y-1">
      <li>📂 <strong>配置目录：</strong><code>/etc/httpd/conf/</code></li>
      <li>📄 <strong>主配置文件：</strong><code>httpd.conf</code></li>
      <li>📁 <strong>模块配置：</strong><code>/etc/httpd/conf.modules.d/</code></li>
      <li>🌐 <strong>网站目录：</strong><code>/var/www/html/</code></li>
      <li>📋 <strong>日志目录：</strong><code>/var/log/httpd/</code></li>
    </ul>
  </div>
  
  <div class="bg-blue-50 p-4 rounded-lg border-2 border-blue-400">
    <p class="font-bold text-blue-900 mb-2">🔵 Ubuntu系统</p>
    <ul class="text-sm space-y-1">
      <li>📂 <strong>配置目录：</strong><code>/etc/apache2/</code></li>
      <li>📄 <strong>主配置文件：</strong><code>apache2.conf</code></li>
      <li>📁 <strong>站点配置：</strong><code>/etc/apache2/sites-available/</code></li>
      <li>🌐 <strong>网站目录：</strong><code>/var/www/html/</code></li>
      <li>📋 <strong>日志目录：</strong><code>/var/log/apache2/</code></li>
    </ul>
  </div>
</div>`,
            keywords: ['httpd.conf', 'apache2.conf', '配置目录', '/etc/httpd']
          },
          
          {
            id: 'block_9_3_3',
            type: 'text',
            content: '<h3><strong>9.3.2 配置文件结构</strong></h3><p>Apache的配置文件分为<strong>三大节</strong>，采用模块化管理：</p>'
          },
          
          {
            id: 'block_9_3_4',
            type: 'list',
            content: `<div class="space-y-3">
  <div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
    <p class="font-bold text-cyan-900">1️⃣ 全局配置节（Global Environment）</p>
    <p class="text-sm text-gray-700 mt-1">控制Apache服务器进程的<mark class="bg-cyan-200 px-1">全局操作</mark>，如服务器根目录、进程号文件、模块加载等</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-xs">
ServerRoot "/etc/httpd"          # 服务器根目录<br/>
PidFile run/httpd.pid            # 进程号文件<br/>
Timeout 60                       # 超时时间
    </code>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
    <p class="font-bold text-green-900">2️⃣ 主服务器配置节（Main Server）</p>
    <p class="text-sm text-gray-700 mt-1">处理<mark class="bg-green-200 px-1">不被虚拟主机处理的请求</mark>，即服务器默认配置</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-xs">
Listen 80                        # 监听端口<br/>
ServerAdmin admin@example.com    # 管理员邮箱<br/>
DocumentRoot "/var/www/html"     # 网站根目录<br/>
DirectoryIndex index.html        # 默认首页
    </code>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
    <p class="font-bold text-purple-900">3️⃣ 虚拟主机配置节（Virtual Hosts）</p>
    <p class="text-sm text-gray-700 mt-1">为<mark class="bg-purple-200 px-1">虚拟主机</mark>提供配置，实现一台服务器托管多个网站</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-xs">
&lt;VirtualHost *:80&gt;<br/>
&nbsp;&nbsp;ServerName www.example.com<br/>
&nbsp;&nbsp;DocumentRoot /var/www/example<br/>
&lt;/VirtualHost&gt;
    </code>
  </div>
</div>`,
            keywords: ['全局配置', '主服务器', '虚拟主机', 'ServerRoot', 'DocumentRoot'],
            mnemonic: '💡 <strong>配置三层结构：</strong>全局环境（整栋楼） → 主服务器（大堂） → 虚拟主机（各楼层）',
            scenario: `<div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-3">
              <div class="font-bold text-yellow-900 mb-2">🏢 场景类比：配置文件就像酒店运营手册</div>
              <p class="text-yellow-800"><strong>全局配置</strong>是酒店的基本信息（地址、电话、老板是谁）；<strong>主服务器配置</strong>是大堂前台的服务标准（开门时间、接待流程、默认房型）；<strong>虚拟主机</strong>是不同楼层的独立运营规则（豪华层、商务层、经济层，各有各的房价和服务）。</p>
            </div>`
          }
        ]
      },
      
      {
        id: 'section_9_4',
        title: '访问控制配置',
        sectionNumber: '9.4',
        blocks: [
          {
            id: 'block_9_4_1',
            type: 'text',
            content: '<h3><strong>9.4.1 目录访问控制</strong></h3><p>Apache通过<code>&lt;Directory&gt;</code>指令实现对目录的访问控制，限制哪些主机可以访问指定目录。</p>'
          },
          
          {
            id: 'block_9_4_2',
            type: 'code',
            content: `<div class="bg-gray-900 text-green-400 p-4 rounded-lg">
  <p class="text-white mb-2">📝 访问控制基本语法</p>
  <code class="block text-xs whitespace-pre-wrap">
&lt;Directory "/var/www/html"&gt;<br/>
&nbsp;&nbsp;Order allow,deny        # 顺序：先allow后deny<br/>
&nbsp;&nbsp;Allow from all          # 允许所有<br/>
&nbsp;&nbsp;Deny from 192.168.1.100 # 拒绝特定IP<br/>
&lt;/Directory&gt;
  </code>
</div>`,
            keywords: ['Directory', 'Order', 'Allow', 'Deny', '访问控制']
          },
          
          {
            id: 'block_9_4_3',
            type: 'text',
            content: '<h3><strong>9.4.2 Order指令的工作原理</strong></h3><p><mark class="bg-yellow-200 px-1">Order指令的顺序至关重要</mark>，写在后面的关键字有<strong>最终决定权</strong>。</p>'
          },
          
          {
            id: 'block_9_4_4',
            type: 'list',
            content: `<div class="space-y-3">
  <div class="bg-blue-50 p-4 rounded-lg">
    <p class="font-bold text-blue-900 mb-2">📌 示例1：Order allow,deny（先允许后拒绝）</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
&lt;Directory "/var/www/www.hncj.edu.cn"&gt;<br/>
&nbsp;&nbsp;Order allow,deny<br/>
&nbsp;&nbsp;Allow from 211.67.113.0/24<br/>
&nbsp;&nbsp;Deny from 211.67.113.18<br/>
&lt;/Directory&gt;
    </code>
    <p class="text-sm text-gray-700 mt-2">✅ <strong>结果：</strong>211.67.113.0/24网段都能访问，<mark class="bg-red-200 px-1">除了211.67.113.18</mark>（deny最后执行，有最终决定权）</p>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <p class="font-bold text-green-900 mb-2">📌 示例2：Order deny,allow（先拒绝后允许）</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
&lt;Directory "/var/www/www.hncj.edu.cn"&gt;<br/>
&nbsp;&nbsp;Order deny,allow<br/>
&nbsp;&nbsp;Allow from 211.67.113.0/24<br/>
&nbsp;&nbsp;Deny from 211.67.113.18<br/>
&lt;/Directory&gt;
    </code>
    <p class="text-sm text-gray-700 mt-2">✅ <strong>结果：</strong>211.67.113.0/24网段<mark class="bg-green-200 px-1">全部能访问</mark>（包括.18），因为allow最后执行，覆盖了deny</p>
  </div>
  
  <div class="bg-yellow-50 p-4 rounded-lg">
    <p class="font-bold text-yellow-900 mb-2">📌 示例3：全部拒绝</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
&lt;Directory "/var/www/www.hncj.edu.cn"&gt;<br/>
&nbsp;&nbsp;Order allow,deny<br/>
&nbsp;&nbsp;Allow from all<br/>
&nbsp;&nbsp;Deny from all<br/>
&lt;/Directory&gt;
    </code>
    <p class="text-sm text-gray-700 mt-2">❌ <strong>结果：</strong><mark class="bg-red-200 px-1">所有主机都被拒绝</mark>（deny最后执行）</p>
  </div>
</div>`,
            keywords: ['Order', 'allow,deny', 'deny,allow', '访问控制顺序'],
            mnemonic: '💡 <strong>Order记忆：</strong>"后来者居上" - Order后面的关键字有最终决定权！',
            scenario: `<div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 mt-3">
              <div class="font-bold text-orange-900 mb-2">🚪 场景类比：Order就像门禁的双重检查</div>
              <p class="text-orange-800"><strong>Order allow,deny</strong>就像：先看白名单（允许谁），再看黑名单（拒绝谁），<strong>黑名单优先级更高</strong>。你在白名单但也在黑名单？对不起，不能进！<br/><br/>
              <strong>Order deny,allow</strong>反过来：先看黑名单，再看白名单，<strong>白名单优先级更高</strong>。你虽然在黑名单，但也在白名单？欢迎进入！</p>
            </div>`
          },
          
          {
            id: 'block_9_4_5',
            type: 'highlight',
            content: `<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
  <p class="font-bold text-purple-900 mb-2">📋 IP地址表示方法</p>
  <ul class="text-sm text-purple-800 space-y-1 ml-4">
    <li>① <strong>网络/子网掩码：</strong><code>211.67.113.0/255.255.255.0</code></li>
    <li>② <strong>CIDR规范：</strong><code>211.67.113.0/24</code></li>
    <li>③ <strong>单个IP地址：</strong><code>211.67.113.18</code></li>
    <li>④ <strong>域名：</strong><code>Allow from example.com</code></li>
    <li>⑤ <strong>所有主机：</strong><code>Allow from all</code></li>
  </ul>
</div>`
          }
        ]
      },
      
      {
        id: 'section_9_5',
        title: '虚拟主机配置',
        sectionNumber: '9.5',
        blocks: [
          {
            id: 'block_9_5_1',
            type: 'text',
            content: '<h3><strong>9.5.1 虚拟主机概述</strong></h3><p><strong>虚拟主机</strong>（Virtual Host）技术允许<mark class="bg-yellow-200 px-1">一台物理服务器托管多个网站</mark>，每个网站拥有独立的域名、目录和配置。</p>'
          },
          
          {
            id: 'block_9_5_2',
            type: 'list',
            content: `<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <div class="bg-blue-50 p-3 rounded-lg border-2 border-blue-400">
    <p class="font-bold text-blue-900 mb-2">🔵 基于端口</p>
    <p class="text-xs text-gray-700">同一IP，不同端口</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2" style="font-size: 10px;">
192.168.1.1:80<br/>
192.168.1.1:8080
    </code>
  </div>
  
  <div class="bg-green-50 p-3 rounded-lg border-2 border-green-400">
    <p class="font-bold text-green-900 mb-2">🟢 基于IP</p>
    <p class="text-xs text-gray-700">不同IP，同一端口</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2" style="font-size: 10px;">
192.168.1.1:80<br/>
192.168.1.2:80
    </code>
  </div>
  
  <div class="bg-purple-50 p-3 rounded-lg border-2 border-purple-400">
    <p class="font-bold text-purple-900 mb-2">🟣 基于域名</p>
    <p class="text-xs text-gray-700">同一IP，不同域名</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2" style="font-size: 10px;">
www.a.com<br/>
www.b.com
    </code>
  </div>
</div>`,
            keywords: ['虚拟主机', '基于端口', '基于IP', '基于域名'],
            scenario: `<div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mt-3">
              <div class="font-bold text-cyan-900 mb-2">🏢 场景类比：虚拟主机就像一栋楼开多家店</div>
              <p class="text-cyan-800">一栋商业楼（物理服务器）可以有多家独立店铺（虚拟主机）：<br/>
              • <strong>基于端口</strong>：同一个地址，走不同的门（1号门、2号门）<br/>
              • <strong>基于IP</strong>：楼有多个大门，每个门是独立入口（东门、西门）<br/>
              • <strong>基于域名</strong>：同一个门，看招牌进店（"星巴克"、"麦当劳"）</p>
            </div>`
          },
          
          {
            id: 'block_9_5_3',
            type: 'text',
            content: '<h3><strong>9.5.2 基于端口的虚拟主机</strong></h3><p>在同一IP地址上，通过<strong>不同端口</strong>区分虚拟主机。</p>'
          },
          
          {
            id: 'block_9_5_4',
            type: 'code',
            content: `<div class="bg-gray-900 text-green-400 p-4 rounded-lg">
  <p class="text-white mb-2">📝 基于端口的虚拟主机配置</p>
  <code class="block text-xs whitespace-pre-wrap">
# 步骤1：添加监听端口<br/>
Listen 80<br/>
Listen 8080<br/>
<br/>
# 步骤2：配置虚拟主机<br/>
&lt;VirtualHost 192.168.64.161:80&gt;<br/>
&nbsp;&nbsp;ServerAdmin admin@example.com<br/>
&nbsp;&nbsp;DocumentRoot /var/www/html<br/>
&nbsp;&nbsp;ServerName 192.168.64.161<br/>
&nbsp;&nbsp;ErrorLog logs/80-error_log<br/>
&nbsp;&nbsp;CustomLog logs/80-access_log common<br/>
&lt;/VirtualHost&gt;<br/>
<br/>
&lt;VirtualHost 192.168.64.161:8080&gt;<br/>
&nbsp;&nbsp;ServerAdmin admin@example.com<br/>
&nbsp;&nbsp;DocumentRoot /var/www/www8080<br/>
&nbsp;&nbsp;ServerName 192.168.64.161<br/>
&nbsp;&nbsp;ErrorLog logs/8080-error_log<br/>
&nbsp;&nbsp;CustomLog logs/8080-access_log common<br/>
&lt;/VirtualHost&gt;<br/>
<br/>
# 步骤3：创建网站目录<br/>
mkdir /var/www/www8080<br/>
echo "Port 8080 Site" > /var/www/www8080/index.html<br/>
<br/>
# 步骤4：重启Apache<br/>
systemctl reload httpd
  </code>
</div>`,
            keywords: ['Listen', '端口', '8080', 'VirtualHost'],
            mnemonic: '💡 <strong>端口虚拟主机：</strong>Listen监听 → VirtualHost配置 → 创建目录 → reload生效'
          },
          
          {
            id: 'block_9_5_5',
            type: 'text',
            content: '<h3><strong>9.5.3 基于IP地址的虚拟主机</strong></h3><p>在同一台服务器上配置<strong>多个IP地址</strong>，每个IP对应一个虚拟主机。</p>'
          },
          
          {
            id: 'block_9_5_6',
            type: 'code',
            content: `<div class="bg-gray-900 text-green-400 p-4 rounded-lg">
  <p class="text-white mb-2">📝 基于IP的虚拟主机配置</p>
  <code class="block text-xs whitespace-pre-wrap">
# 步骤1：为网卡添加子接口（多IP）<br/>
ifconfig eth0:1 192.168.64.162 netmask 255.255.255.0<br/>
ifconfig eth0:2 192.168.64.163 netmask 255.255.255.0<br/>
<br/>
# 步骤2：配置虚拟主机<br/>
&lt;VirtualHost 192.168.64.162:80&gt;<br/>
&nbsp;&nbsp;ServerAdmin admin@site1.com<br/>
&nbsp;&nbsp;DocumentRoot /var/www/www162<br/>
&nbsp;&nbsp;ServerName 192.168.64.162<br/>
&nbsp;&nbsp;ErrorLog logs/162-error_log<br/>
&nbsp;&nbsp;CustomLog logs/162-access_log common<br/>
&lt;/VirtualHost&gt;<br/>
<br/>
&lt;VirtualHost 192.168.64.163:80&gt;<br/>
&nbsp;&nbsp;ServerAdmin admin@site2.com<br/>
&nbsp;&nbsp;DocumentRoot /var/www/www163<br/>
&nbsp;&nbsp;ServerName 192.168.64.163<br/>
&nbsp;&nbsp;ErrorLog logs/163-error_log<br/>
&nbsp;&nbsp;CustomLog logs/163-access_log common<br/>
&lt;/VirtualHost&gt;<br/>
<br/>
# 步骤3：创建网站目录和测试页面<br/>
mkdir /var/www/www162<br/>
echo "&lt;h2&gt;Site 162&lt;/h2&gt;" > /var/www/www162/index.html<br/>
mkdir /var/www/www163<br/>
echo "&lt;h2&gt;Site 163&lt;/h2&gt;" > /var/www/www163/index.html<br/>
<br/>
# 步骤4：重启Apache<br/>
systemctl reload httpd<br/>
<br/>
# 测试<br/>
elinks http://192.168.64.162<br/>
elinks http://192.168.64.163
  </code>
</div>`,
            keywords: ['ifconfig', 'eth0:1', '子接口', 'IP虚拟主机'],
            scenario: `<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-3">
              <div class="font-bold text-green-900 mb-2">🏠 场景类比：基于IP的虚拟主机就像独立门牌号</div>
              <p class="text-green-800">一栋楼有多个独立出入口（子接口），每个门有自己的门牌号（IP地址）。客人直接通过门牌号找到对应的店铺（网站），互不干扰。这种方式<strong>安全性最高</strong>，但需要更多IP地址（资源消耗大）。</p>
            </div>`
          },
          
          {
            id: 'block_9_5_7',
            type: 'text',
            content: '<h3><strong>9.5.4 基于域名的虚拟主机（最常用）</strong></h3><p>在同一IP地址上，通过<strong>不同域名</strong>区分虚拟主机。这是<mark class="bg-yellow-200 px-1">最常用的虚拟主机方式</mark>。</p>'
          },
          
          {
            id: 'block_9_5_8',
            type: 'code',
            content: `<div class="bg-gray-900 text-green-400 p-4 rounded-lg">
  <p class="text-white mb-2">📝 基于域名的虚拟主机配置</p>
  <code class="block text-xs whitespace-pre-wrap">
# 启用基于域名的虚拟主机<br/>
NameVirtualHost *:80<br/>
<br/>
# 配置第一个网站<br/>
&lt;VirtualHost *:80&gt;<br/>
&nbsp;&nbsp;ServerName www.siteA.com<br/>
&nbsp;&nbsp;ServerAlias siteA.com *.siteA.com<br/>
&nbsp;&nbsp;DocumentRoot /var/www/siteA<br/>
&nbsp;&nbsp;ErrorLog logs/siteA-error_log<br/>
&nbsp;&nbsp;CustomLog logs/siteA-access_log common<br/>
&lt;/VirtualHost&gt;<br/>
<br/>
# 配置第二个网站<br/>
&lt;VirtualHost *:80&gt;<br/>
&nbsp;&nbsp;ServerName www.siteB.com<br/>
&nbsp;&nbsp;ServerAlias siteB.com<br/>
&nbsp;&nbsp;DocumentRoot /var/www/siteB<br/>
&nbsp;&nbsp;ErrorLog logs/siteB-error_log<br/>
&nbsp;&nbsp;CustomLog logs/siteB-access_log common<br/>
&lt;/VirtualHost&gt;<br/>
<br/>
# 创建网站目录<br/>
mkdir -p /var/www/{siteA,siteB}<br/>
echo "Welcome to Site A" > /var/www/siteA/index.html<br/>
echo "Welcome to Site B" > /var/www/siteB/index.html<br/>
<br/>
# 重启Apache<br/>
systemctl reload httpd
  </code>
</div>`,
            keywords: ['NameVirtualHost', 'ServerName', 'ServerAlias', '域名虚拟主机'],
            mnemonic: '💡 <strong>域名虚拟主机关键：</strong>ServerName指定主域名，ServerAlias指定别名',
            scenario: `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mt-3">
              <div class="font-bold text-blue-900 mb-2">🏪 场景类比：基于域名就像商场里的不同店铺</div>
              <p class="text-blue-800">一个商场（IP地址）里有很多店铺（网站），都用同一个大门（80端口）。顾客进门后看招牌（域名）找店：看到"星巴克"就进咖啡店，看到"优衣库"就进服装店。Apache根据<strong>HTTP请求头中的Host字段</strong>（域名）把客人领到对应的店铺。<br/><br/>
              这种方式<strong>最节省IP地址</strong>，是互联网上最常用的虚拟主机方案！</p>
            </div>`
          },
          
          {
            id: 'block_9_5_9',
            type: 'highlight',
            content: `<div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
  <p class="font-bold text-yellow-900 mb-2">⚡ 虚拟主机配置要点总结</p>
  <table class="w-full text-sm mt-2">
    <tr class="border-b">
      <td class="py-2 font-bold">类型</td>
      <td class="py-2 font-bold">优点</td>
      <td class="py-2 font-bold">缺点</td>
      <td class="py-2 font-bold">适用场景</td>
    </tr>
    <tr class="border-b">
      <td class="py-2">基于端口</td>
      <td class="py-2">配置简单</td>
      <td class="py-2">需记住端口号</td>
      <td class="py-2">内部测试</td>
    </tr>
    <tr class="border-b">
      <td class="py-2">基于IP</td>
      <td class="py-2">独立性强</td>
      <td class="py-2">浪费IP资源</td>
      <td class="py-2">SSL多站点</td>
    </tr>
    <tr class="border-b">
      <td class="py-2">基于域名</td>
      <td class="py-2">节省IP</td>
      <td class="py-2">需DNS支持</td>
      <td class="py-2">互联网网站</td>
    </tr>
  </table>
</div>`
          }
        ]
      }
    ]
  },

  // ========== 第10章:DHCP服务器 ==========
  {
    id: 'chp10',
    title: '第10章 DHCP服务器',
    chapterNumber: 'chp10',
    overview: '本章介绍DHCP（Dynamic Host Configuration Protocol）动态主机配置协议的工作原理、服务器配置、客户端设置以及DHCP规划。重点讲解DHCP的四个工作阶段、配置文件dhcpd.conf的参数设置及租约管理。',
    icon: '📡',
    estimatedMinutes: 60,
    
    skeleton: {
      scenarioIntro: {
        title: '🏢 想象你在管理一个企业园区的停车场',
        description: '🚗 你是一个大型企业园区的停车场管理员。每天有很多车辆（计算机）进出园区，需要分配停车位（IP地址）。传统方式是给每辆车固定车位（静态IP），但这样太浪费，很多车位闲置。更聪明的办法是：车来了临时分配车位（动态IP），车走了车位回收（租约到期），这就是DHCP的工作原理！你需要管理：车位数量（地址池）、停车时长（租期）、特殊车辆的固定车位（MAC绑定）。',
        problems: [
          '🅿️ 车位分配：新车来了怎么快速分配车位？（DHCP自动分配IP）',
          '⏱️ 停车时长：车位能停多久需要续费？（租约时间lease time）',
          '🚘 固定车位：VIP的车能固定车位吗？（MAC地址绑定）',
          '📋 分配流程：怎么确保不重复分配车位？（DHCP四步握手）',
          '🔧 配置规划：怎么规划车位数量和分区？（地址池规划）'
        ]
      },

      framework: [
        'DHCP服务介绍（自动分配IP地址）',
        'DHCP工作过程（四步握手）',
        'DHCP服务器配置（dhcpd.conf）',
        'DHCP规划（地址池、租约、保留地址）',
        'DHCP客户端配置'
      ],
      
      knowledgeMap: {
        root: { id: 'root', title: 'DHCP服务器', level: 0, color: 'blue', icon: '📡' },
        chapters: [
          {
            id: 'ch10-1',
            title: 'DHCP基础',
            level: 1,
            color: 'indigo',
            icon: '📚',
            sections: [
              { id: 'ch10-1-1', title: 'DHCP介绍', level: 2, color: 'blue', icon: '📖', items: [
                  { id: 'ch10-1-1-1', title: 'DHCP定义', icon: '📝' },
                  { id: 'ch10-1-1-2', title: '工作原理', icon: '⚙️' }
                ]
              }
            ]
          }
        ]
      },
      
      keyPoints: [
        'DHCP可自动为网络设备分配IP地址、子网掩码、网关、DNS等配置',
        'DHCP工作过程分四步：Discover发现、Offer提供、Request请求、ACK确认',
        '核心配置文件是/etc/dhcp/dhcpd.conf，定义地址池、租约、网关等参数',
        '租约时间决定IP地址的使用期限，到期需续租或重新分配'
      ],
      
      learningObjectives: [
        '理解DHCP的工作原理和四个阶段',
        '掌握DHCP服务器的安装和配置方法',
        '学会配置地址池、租约时间和网关',
        '了解DHCP客户端的配置和租约管理'
      ]
   },
    
    sections: [
      {
        id: 'section_10_1',
        title: 'DHCP介绍',
        sectionNumber: '10.1',
        blocks: [
          {
            id: 'block_10_1_1',
            type: 'text',
            content: '<h3><strong>10.1.1 DHCP协议</strong></h3><p><strong>DHCP（Dynamic Host Configuration Protocol）</strong>是<mark class="bg-yellow-200 px-1">动态主机配置协议</mark>的缩写。它分为两部分：一个是<strong>服务器端</strong>，另一个是<strong>客户端</strong>。</p>'
          },
          
          {
            id: 'block_10_1_2',
            type: 'list',
            content: `<div class="space-y-3">
  <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
    <p class="font-bold text-blue-900">🖥️ DHCP服务器</p>
    <p class="text-sm text-gray-700 mt-1">集中管理所有IP网络设定数据，负责处理客户端的DHCP请求</p>
  </div>
  <div class="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
    <p class="font-bold text-green-900">💻 DHCP客户端</p>
    <p class="text-sm text-gray-700 mt-1">使用从服务器分配下来的IP环境数据，配置自己的网络参数</p>
  </div>
  <div class="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
    <p class="font-bold text-purple-900">📋 分配信息</p>
    <p class="text-sm text-gray-700 mt-1">服务器返回：<strong>IP地址、网关、DNS服务器</strong>等信息给客户端</p>
  </div>
</div>`,
            keywords: ['DHCP协议', '服务器端', '客户端', 'IP分配']
          },
          
          {
            id: 'block_10_1_3',
            type: 'highlight',
            content: '<p class="text-lg"><strong>🔑 核心概念：租约（Lease）</strong></p><p class="mt-2">DHCP通过"<mark class="bg-yellow-200 px-1">租约</mark>"的概念，有效且动态地分配客户端TCP/IP相关属性的设定。租约就像停车位的停车时长，到期需要续租或释放。</p>',
            mnemonic: '💡 记忆：DHCP = <strong>D</strong>ynamic <strong>H</strong>ost <strong>C</strong>onfiguration <strong>P</strong>rotocol'
          },
          
          {
            id: 'block_10_1_4',
            type: 'text',
            content: '<h3><strong>10.1.2 DHCP管理的两种基本数据</strong></h3>'
          },
          
          {
            id: 'block_10_1_5',
            type: 'list',
            content: `<ol class="space-y-2 ml-6 list-decimal">
  <li><strong>地址池中的地址</strong> - 可以由DHCP动态分配的可用IP地址</li>
  <li><strong>租用地址</strong> - DHCP已经从地址池中分配出的地址</li>
</ol>
<div class="mt-4 space-y-2">
  <p class="font-bold">📌 相关概念：</p>
  <ul class="ml-6 space-y-1">
    <li>💻 <strong>DHCP客户</strong> - 通过DHCP服务器来获得网络配置参数的主机</li>
    <li>🖥️ <strong>DHCP服务器</strong> - 提供网络配置参数给DHCP客户机的主机</li>
    <li>🔄 <strong>DHCP中继代理</strong> - DHCP服务器和客户端之间转发消息的主机或路由器</li>
    <li>📅 <strong>租用</strong> - DHCP客户从服务器上获得并临时占用该IP地址的过程</li>
  </ul>
</div>`,
            keywords: ['地址池', '租用地址', 'DHCP客户', 'DHCP服务器', '中继代理']
          },
          
          {
            id: 'block_10_1_6',
            type: 'text',
            content: '<h3><strong>10.1.3 DHCP提供两种IP分配方式</strong></h3>'
          },
          
          {
            id: 'block_10_1_7',
            type: 'list',
            content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="bg-green-50 p-4 rounded-lg border-2 border-green-400">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-2xl">🔒</span>
      <h4 class="font-bold text-green-900">自动分配（Automatic Allocation）</h4>
    </div>
    <p class="text-sm text-gray-700">DHCP客户端<mark class="bg-green-200 px-1">第一次成功租用到IP地址后就永远使用这个地址</mark>，类似永久车位</p>
  </div>
  <div class="bg-blue-50 p-4 rounded-lg border-2 border-blue-400">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-2xl">🔄</span>
      <h4 class="font-bold text-blue-900">动态分配（Dynamic Allocation）</h4>
    </div>
    <p class="text-sm text-gray-700">租用到IP地址后<mark class="bg-blue-200 px-1">并非永久使用</mark>，租约到期后必须释放，可给其他工作站使用，也可以续租或租用其他IP</p>
  </div>
</div>
<div class="mt-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
  <p class="font-bold text-purple-900">🎯 扩展功能</p>
  <ul class="text-sm text-gray-700 mt-2 space-y-1 ml-4">
    <li>✅ 可以保留一些IP地址给特殊用途的机器使用</li>
    <li>✅ 可以按照<strong>MAC地址</strong>来分配固定的IP地址（MAC地址绑定）</li>
  </ul>
</div>`,
            keywords: ['自动分配', '动态分配', 'MAC地址绑定'],
            scenario: `<div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-3">
              <div class="font-bold text-yellow-900 mb-2">🅿️ 场景类比：停车场车位管理</div>
              <p class="text-yellow-800">• <strong>自动分配</strong>：买了月卡的固定车位，永久属于你<br>
              • <strong>动态分配</strong>：临时停车位，按小时计费，停满了就得走，下次可能停到其他位置<br>
              • <strong>MAC绑定</strong>：VIP车辆专属车位，只有这辆车能停这个位置</p>
            </div>`
          },
          
          {
            id: 'block_10_1_8',
            type: 'text',
            content: '<h3><strong>10.1.4 DHCP的工作过程（四步握手）</strong></h3>'
          },
          
          {
            id: 'block_10_1_9',
            type: 'diagram',
            diagramType: 'mermaid',
            content: `graph TD
    A[客户端启动<br/>无IP配置] -->|1️⃣ DHCP Discover<br/>广播0.0.0.0→255.255.255.255| B[DHCP服务器收到请求]
    B -->|2️⃣ DHCP Offer<br/>提供可用IP| C[客户端收到多个Offer]
    C -->|3️⃣ DHCP Request<br/>选择一个并广播| D[服务器确认分配]
    D -->|4️⃣ DHCP ACK<br/>确认租约| E[客户端配置网络参数]`
          },
          
          {
            id: 'block_10_1_10',
            type: 'list',
            content: `<div class="space-y-3">
  <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
    <p class="font-bold text-blue-900">1️⃣ DHCP Discover（发现）</p>
    <p class="text-sm text-gray-700 mt-1">客户端发现本机没有IP配置，向网络<mark class="bg-blue-200 px-1">广播</mark>DHCPDISCOVER数据包（源地址0.0.0.0，目的地址255.255.255.255）</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded mt-2 text-xs">等待时间序列：1s → 9s → 13s → 16s（共4次尝试）<br/>失败后5分钟重试</code>
  </div>
  
  <div class="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
    <p class="font-bold text-green-900">2️⃣ DHCP Offer（提供）</p>
    <p class="text-sm text-gray-700 mt-1">服务器收到请求后，从地址池中选择一个可用IP，向客户端<mark class="bg-green-200 px-1">发送DHCPOFFER</mark>数据包，包含IP地址、租约时间等信息</p>
  </div>
  
  <div class="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
    <p class="font-bold text-yellow-900">3️⃣ DHCP Request（请求）</p>
    <p class="text-sm text-gray-700 mt-1">客户端可能收到多个DHCP服务器的Offer，会<mark class="bg-yellow-200 px-1">选择一个</mark>（通常是第一个），向网络广播DHCPREQUEST，告知所有服务器自己的选择</p>
  </div>
  
  <div class="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
    <p class="font-bold text-purple-900">4️⃣ DHCP ACK（确认）</p>
    <p class="text-sm text-gray-700 mt-1">被选中的服务器<mark class="bg-purple-200 px-1">发送DHCPACK</mark>确认数据包，客户端收到后正式配置网络参数。未被选中的服务器收回Offer的IP</p>
  </div>
</div>`,
            keywords: ['DHCP Discover', 'DHCP Offer', 'DHCP Request', 'DHCP ACK', '四步握手'],
            mnemonic: '💡 <strong>四步口诀：</strong>"发（Discover）提（Offer）请（Request）确（ACK）" - DORA流程',
            scenario: `<div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 mt-3">
              <div class="font-bold text-orange-900 mb-2">🚗 场景类比：停车场找车位</div>
              <ol class="text-orange-800 ml-6 list-decimal space-y-1">
                <li><strong>Discover</strong>：你开车进园区，大喊"有车位吗？"（广播）</li>
                <li><strong>Offer</strong>：多个停车楼管理员回应"我这有A01、B05可用"</li>
                <li><strong>Request</strong>：你选择A01，大喊"我要A01车位"（广播告知所有人）</li>
                <li><strong>ACK</strong>：A楼管理员确认"A01分配给你，停2小时"（租约）</li>
              </ol>
            </div>`
          }
        ]
      },
      
      {
        id: 'section_10_2',
        title: 'DHCP服务器的安装与启动管理',
        sectionNumber: '10.2',
        blocks: [
          {
            id: 'block_10_2_1',
            type: 'text',
            content: '<h3><strong>10.2.1 DHCP服务器软件安装</strong></h3>'
          },
          
          {
            id: 'block_10_2_2',
            type: 'code',
            content: `<div class="space-y-3">
  <div class="bg-red-50 p-3 rounded-lg">
    <p class="font-bold text-red-900 mb-2">🔴 红帽系统（RedHat/CentOS/Fedora）</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded">
yum install dhcp-server
    </code>
  </div>
  <div class="bg-blue-50 p-3 rounded-lg">
    <p class="font-bold text-blue-900 mb-2">🔵 Ubuntu/Debian系统</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded">
apt install isc-dhcp-server
    </code>
  </div>
</div>`,
            keywords: ['安装', 'yum', 'apt', 'dhcp-server']
          },
          
          {
            id: 'block_10_2_3',
            type: 'text',
            content: '<h3><strong>10.2.2 启动管理</strong></h3>'
          },
          
          {
            id: 'block_10_2_4',
            type: 'code',
            content: `<div class="space-y-4">
  <div class="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
    <p class="font-bold text-green-900 mb-2">1️⃣ 检查服务状态</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
systemctl status dhcpd.service                  # 红帽系统<br/>
systemctl status isc-dhcp-server.service        # Ubuntu系统
    </code>
  </div>
  
  <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
    <p class="font-bold text-blue-900 mb-2">2️⃣ 启用服务或设为开机自启动</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
systemctl enable dhcpd.service                  # 红帽系统<br/>
systemctl enable isc-dhcp-server.service        # Ubuntu系统
    </code>
  </div>
  
  <div class="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-400">
    <p class="font-bold text-purple-900 mb-2">3️⃣ 启动/关闭/重启服务</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
systemctl start/stop/restart dhcpd.service      # 红帽系统<br/>
systemctl start/stop/restart isc-dhcp-server.service  # Ubuntu系统
    </code>
  </div>
</div>`,
            keywords: ['systemctl', 'start', 'stop', 'restart', 'enable', 'status'],
            mnemonic: '💡 <strong>systemctl三部曲：</strong>status查状态 → enable开机启 → start立即启'
          }
        ]
      },
      
      {
        id: 'section_10_3',
        title: 'DHCP的配置',
        sectionNumber: '10.3',
        blocks: [
          {
            id: 'block_10_3_1',
            type: 'text',
            content: '<h3><strong>10.3.1 配置文件</strong></h3><p>DHCP的核心配置文件是<code class="bg-gray-200 px-2 py-1 rounded">/etc/dhcp/dhcpd.conf</code>。默认情况下此文件不存在，或是一个只有注释内容的空文件。</p>'
          },
          
          {
            id: 'block_10_3_2',
            type: 'highlight',
            content: `<div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
  <p class="font-bold text-yellow-900">📋 配置文件位置</p>
  <ul class="mt-2 space-y-1 text-sm">
    <li>📂 <strong>配置文件：</strong>/etc/dhcp/dhcpd.conf</li>
    <li>📄 <strong>模板文件：</strong>/usr/share/doc/dhcp-server/dhcpd.conf.example</li>
    <li>💡 <strong>首次配置：</strong>复制模板文件到配置文件位置，然后根据需要修改</li>
  </ul>
</div>`
          },
          
          {
            id: 'block_10_3_3',
            type: 'code',
            content: `<div class="bg-gray-900 text-green-400 p-4 rounded-lg">
  <p class="text-white mb-2">📝 dhcpd.conf 配置示例</p>
  <code class="block text-xs whitespace-pre-wrap">
# 全局选项配置
option domain-name "example.org";                    # DNS域名
option domain-name-servers ns1.example.org, ns2.example.org;  # DNS服务器
default-lease-time 600;                              # 默认租约时间（秒）
max-lease-time 7200;                                 # 最大租约时间（秒）
ddns-update-style none;                              # 禁用动态DNS更新
authoritative;                                       # 设置为权威服务器
log-facility local7;                                 # 日志记录位置

# 定义子网和地址池
subnet 10.5.5.0 netmask 255.255.255.224 {
  range 10.5.5.26 10.5.5.30;                         # 地址池范围
  option domain-name-servers ns1.internal.example.org;  # 子网DNS
  option domain-name "internal.example.org";         # 子网域名
  option routers 10.5.5.1;                           # 默认网关
  option broadcast-address 10.5.5.31;                # 广播地址
  default-lease-time 600;                            # 子网租约时间
  max-lease-time 7200;                               # 子网最大租约
}

# MAC地址绑定固定IP
host fantasia {
  hardware ethernet 08:00:07:26:c0:a5;               # MAC地址
  fixed-address fantasia.fugue.com;                  # 固定IP地址
}
  </code>
</div>`,
            keywords: ['dhcpd.conf', '配置文件', 'subnet', 'range', 'option']
          },
          
          {
            id: 'block_10_3_4',
            type: 'text',
            content: '<h3><strong>10.3.2 配置文件中的定义、参数和选项</strong></h3>'
          },
          
          {
            id: 'block_10_3_5',
            type: 'list',
            content: `<div class="space-y-4">
  <div class="bg-blue-50 p-4 rounded-lg">
    <p class="font-bold text-blue-900 mb-2">📌 常用定义（Declarations）</p>
    <table class="w-full text-sm">
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">shared-network 名称 { ... }</td>
        <td class="py-2">定义超级作用域</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">subnet 网络号 netmask 掩码 { ... }</td>
        <td class="py-2">定义作用域（IP子网）</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">range 起始IP 终止IP</td>
        <td class="py-2">定义地址池范围</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">host 主机名 { ... }</td>
        <td class="py-2">定义特殊设置的主机</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">pool { ... }</td>
        <td class="py-2">定义地址池</td>
      </tr>
    </table>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg">
    <p class="font-bold text-green-900 mb-2">⚙️ 常用参数（Parameters）</p>
    <table class="w-full text-sm">
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">default-lease-time 数字</td>
        <td class="py-2">默认租约期限（秒）</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">max-lease-time 数字</td>
        <td class="py-2">最大租约期限（秒）</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">hardware 硬件类型 MAC地址</td>
        <td class="py-2">指定网卡接口和MAC</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">fixed-address IP地址</td>
        <td class="py-2">分配固定IP地址</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">ddns-update-style 类型</td>
        <td class="py-2">DNS动态更新类型</td>
      </tr>
    </table>
  </div>
  
  <div class="bg-purple-50 p-4 rounded-lg">
    <p class="font-bold text-purple-900 mb-2">🔧 常用选项（Options）</p>
    <table class="w-full text-sm">
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">option subnet-mask 掩码</td>
        <td class="py-2">指定子网掩码</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">option routers IP地址</td>
        <td class="py-2">指定默认网关</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">option domain-name "域名"</td>
        <td class="py-2">指定域名</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">option domain-name-servers IP</td>
        <td class="py-2">指定DNS服务器</td>
      </tr>
      <tr class="border-b">
        <td class="py-2 font-mono text-xs">option broadcast-address 地址</td>
        <td class="py-2">指定广播地址</td>
      </tr>
    </table>
  </div>
</div>`,
            keywords: ['定义', '参数', '选项', 'subnet', 'range', 'option'],
            mnemonic: '💡 <strong>三要素：</strong>定义结构（subnet/host） + 参数行为（lease-time） + 选项配置（routers/DNS）'
          }
        ]
      },
      
      {
        id: 'section_10_4',
        title: 'DHCP规划',
        sectionNumber: '10.4',
        blocks: [
          {
            id: 'block_10_4_1',
            type: 'text',
            content: '<h3><strong>10.4.1 小型网络中DHCP的部署</strong></h3>'
          },
          
          {
            id: 'block_10_4_2',
            type: 'list',
            content: `<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
  <p class="font-bold text-blue-900 mb-2">🏢 小型网络（单一子网）部署考虑因素</p>
  <ol class="ml-6 list-decimal space-y-2 text-sm">
    <li><strong>静态IP服务器</strong><br/>
      <span class="text-gray-700">提供特殊服务（DNS、FTP、Web）的服务器应采用<mark class="bg-blue-200 px-1">静态IP地址</mark>，避免IP变化导致服务不可用</span>
    </li>
    <li><strong>服务分离原则</strong><br/>
      <span class="text-gray-700">不同的网络服务应由<mark class="bg-blue-200 px-1">不同的服务器</mark>承担，提高可用性和安全性。某个服务停止时，其他服务仍可正常工作</span>
    </li>
  </ol>
</div>`,
            keywords: ['小型网络', '静态IP', '服务分离']
          },
          
          {
            id: 'block_10_4_3',
            type: 'text',
            content: '<h3><strong>10.4.2 大型网络中DHCP的部署</strong></h3>'
          },
          
          {
            id: 'block_10_4_4',
            type: 'list',
            content: `<div class="space-y-3">
  <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
    <p class="font-bold text-yellow-900 mb-2">⚠️ 大型网络的挑战</p>
    <p class="text-sm text-gray-700">大型网络通常使用<strong>路由器</strong>划分多个物理子网。路由器的主要功能是<mark class="bg-yellow-200 px-1">屏蔽子网间的广播</mark>，减少带宽占用，提高性能。</p>
    <p class="text-sm text-red-700 mt-2">❌ <strong>问题：</strong>DHCP Discover是广播包，无法跨越路由器！子网中的主机无法定位其他子网的DHCP服务器。</p>
  </div>
  
  <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
    <p class="font-bold text-green-900 mb-2">✅ 解决方案</p>
    <div class="space-y-2 text-sm">
      <div class="bg-white p-3 rounded">
        <p class="font-bold text-green-800">方案1：每个子网配置一台DHCP服务器</p>
        <p class="text-gray-700">✅ 优点：每个子网方便获取IP<br/>
        ❌ 缺点：网络管理麻烦，服务器数量多</p>
      </div>
      <div class="bg-white p-3 rounded">
        <p class="font-bold text-green-800">方案2：设置DHCP中继代理（推荐）</p>
        <p class="text-gray-700">✅ 优点：只需一台DHCP服务器，集中管理<br/>
        📋 工作原理：中继代理接收子网内的DHCP请求，转发给DHCP服务器，再将获得的IP返回客户端</p>
      </div>
    </div>
  </div>
</div>`,
            keywords: ['大型网络', '路由器', 'DHCP中继', '广播屏蔽']
          },
          
          {
            id: 'block_10_4_5',
            type: 'text',
            content: '<h3><strong>10.4.3 设置DHCP中继</strong></h3>'
          },
          
          {
            id: 'block_10_4_6',
            type: 'list',
            content: `<div class="space-y-3">
  <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
    <p class="font-bold text-purple-900 mb-2">🔄 DHCP中继代理原理</p>
    <p class="text-sm text-gray-700">DHCP中继代理允许将<mark class="bg-purple-200 px-1">无DHCP服务器子网</mark>内的客户机请求转发给其他子网的DHCP服务器。</p>
    <p class="text-sm text-gray-700 mt-2">当客户机发出请求时，中继代理转发给指定的DHCP服务器；服务器返回应答时，中继代理将应答广播或单播给请求客户机所在的网络。</p>
    <p class="text-sm text-red-700 mt-2">⚠️ <strong>注意：</strong>DHCP中继代理本身应该具有<mark class="bg-red-200 px-1">静态IP地址</mark></p>
  </div>
  
  <div class="bg-blue-50 p-4 rounded-lg">
    <p class="font-bold text-blue-900 mb-2">📦 软件包和服务</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mt-2">
      <div class="bg-white p-2 rounded">
        <p class="font-bold text-red-700">🔴 红帽系统</p>
        <code class="block bg-gray-800 text-green-400 p-2 rounded mt-1 text-xs">
软件包：dhcp-relay<br/>
服务名：dhcrelay.service
        </code>
      </div>
      <div class="bg-white p-2 rounded">
        <p class="font-bold text-blue-700">🔵 Ubuntu系统</p>
        <code class="block bg-gray-800 text-green-400 p-2 rounded mt-1 text-xs">
软件包：isc-dhcp-relay<br/>
服务名：isc-dhcp-relay.service
        </code>
      </div>
    </div>
  </div>
</div>`,
            keywords: ['DHCP中继', 'dhcp-relay', 'dhcrelay'],
            scenario: `<div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 mt-3">
              <div class="font-bold text-orange-900 mb-2">🏢 场景类比：跨楼层停车场管理</div>
              <p class="text-orange-800">大型园区有A、B、C三栋楼，每栋楼都是独立子网。传统方式需要每栋楼配一个停车管理员（DHCP服务器），但这样成本高。<br/><br/>
              <strong>使用中继代理：</strong>只在A楼设置中央管理系统（DHCP服务器），B楼和C楼各设置一个<strong>联络员</strong>（中继代理）。车辆来B楼时，联络员帮忙联系A楼中央系统分配车位，再把车位号告诉车主。所有车位信息集中管理，但各楼都能正常分配！</p>
            </div>`
          }
        ]
      },
      
      {
        id: 'section_10_5',
        title: 'DHCP客户端设置',
        sectionNumber: '10.5',
        blocks: [
          {
            id: 'block_10_5_1',
            type: 'text',
            content: '<h3><strong>10.5.1 DHCP客户端配置</strong></h3><p>在Linux系统中，网络配置可以理解为DHCP客户端设置。可通过<strong>图形界面</strong>方式和<strong>手工修改配置文件</strong>两种方式进行。</p>'
          },
          
          {
            id: 'block_10_5_2',
            type: 'code',
            content: `<div class="space-y-3">
  <div class="bg-green-50 p-3 rounded-lg">
    <p class="font-bold text-green-900 mb-2">📝 配置文件方式（CentOS/RHEL）</p>
    <p class="text-sm text-gray-700 mb-2">编辑网络接口配置文件：<code>/etc/sysconfig/network-scripts/ifcfg-eth0</code></p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
BOOTPROTO=dhcp    # 使用DHCP获取IP<br/>
ONBOOT=yes        # 开机自动启用网卡<br/>
DEVICE=eth0       # 网卡设备名
    </code>
  </div>
  
  <div class="bg-blue-50 p-3 rounded-lg">
    <p class="font-bold text-blue-900 mb-2">📝 配置文件方式（Ubuntu/Debian）</p>
    <p class="text-sm text-gray-700 mb-2">编辑网络配置文件：<code>/etc/network/interfaces</code></p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
auto eth0<br/>
iface eth0 inet dhcp   # 使用DHCP
    </code>
  </div>
  
  <div class="bg-purple-50 p-3 rounded-lg">
    <p class="font-bold text-purple-900 mb-2">🔧 使用ifconfig命令</p>
    <code class="block bg-gray-800 text-green-400 p-2 rounded text-xs">
ifconfig eth0           # 查看网卡配置<br/>
ifconfig eth0 up        # 启用网卡<br/>
ifconfig eth0 down      # 停用网卡<br/>
dhclient eth0           # 手动获取DHCP配置
    </code>
  </div>
</div>`,
            keywords: ['客户端配置', 'ifconfig', 'dhclient', 'BOOTPROTO']
          },
          
          {
            id: 'block_10_5_3',
            type: 'highlight',
            content: `<div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
  <p class="font-bold text-yellow-900 mb-2">💡 常用网络管理命令总结</p>
  <table class="w-full text-sm mt-2">
    <tr class="border-b">
      <td class="py-2 font-mono text-xs">ifconfig</td>
      <td class="py-2">查看和配置网络接口</td>
    </tr>
    <tr class="border-b">
      <td class="py-2 font-mono text-xs">dhclient</td>
      <td class="py-2">手动获取DHCP配置</td>
    </tr>
    <tr class="border-b">
      <td class="py-2 font-mono text-xs">ip addr</td>
      <td class="py-2">显示IP地址信息（新版推荐）</td>
    </tr>
    <tr class="border-b">
      <td class="py-2 font-mono text-xs">systemctl restart network</td>
      <td class="py-2">重启网络服务</td>
    </tr>
  </table>
</div>`,
            mnemonic: '💡 <strong>记忆：</strong>ifconfig看配置，dhclient拿地址，network重启生效'
          }
        ]
      }
    ]
  }
];
