import { useState, useMemo } from 'react';
import { FileText, Server, UserCircle, Globe, Search, Brain, RotateCcw } from 'lucide-react';

// 图标组件映射
const Icons = {
  File: FileText,
  System: Server,
  User: UserCircle,
  Network: Globe,
  Search: Search,
  Brain: Brain,
  Rotate: RotateCcw,
};

interface CommandOption {
  flag: string;
  mean: string;
  context: string;
}

interface CommandData {
  cmd: string;
  category: 'file' | 'system' | 'auth' | 'network';
  rank: number;
  desc: string;
  memory: string;
  visual: string;
  options: CommandOption[];
  example: string;
  tip: string;
}

const commandData: CommandData[] = [
  // --- 文件操作 (File) ---
  {
    cmd: "ls",
    category: "file",
    rank: 5,
    desc: "列出目录内容",
    memory: "LiSt (清单)",
    visual: "📋 像列出购物清单一样，详细列出文件夹里的每一项。",
    options: [
      { flag: "-l", mean: "长格式 (Long)", context: "⭐ 必用：显示权限、所有者、大小、时间等详细信息" },
      { flag: "-a", mean: "所有文件 (All)", context: "显示隐藏文件（以.开头的文件）" },
      { flag: "-h", mean: "人类可读 (Human)", context: "配合-l使用，将字节转为 K, M, G 显示大小" },
      { flag: "-t", mean: "时间排序 (Time)", context: "按修改时间排序，最新的在前面" },
      { flag: "-r", mean: "反向 (Reverse)", context: "反转排序结果（常与 -t 配合用）" },
      { flag: "-d", mean: "目录本身", context: "只看目录属性，不看里面的内容" },
      { flag: "-i", mean: "inode号", context: "显示文件的索引节点号（查硬链接用）" }
    ],
    example: "ls -lhart",
    tip: "ls -lrt 是运维最爱：最新的文件会在最下面，不用滚屏就能看到。"
  },
  {
    cmd: "cp",
    category: "file",
    rank: 5,
    desc: "复制文件/目录",
    memory: "CoPy (克隆)",
    visual: "👯‍♂️ 影分身之术。原件保留，制造一个一模一样的副本。",
    options: [
      { flag: "-r", mean: "递归 (Recursive)", context: "⭐ 必用：复制目录时必须加，否则报错" },
      { flag: "-p", mean: "保留属性 (Preserve)", context: "保留原文件的时间、权限、所有者信息" },
      { flag: "-a", mean: "归档 (Archive)", context: "最强复制：等于 -pdr，保留所有属性且递归，备份专用" },
      { flag: "-f", mean: "强制 (Force)", context: "覆盖同名文件时不提示" },
      { flag: "-i", mean: "交互 (Interactive)", context: "覆盖前询问（安全选项）" }
    ],
    example: "cp -a /var/www /backup/www",
    tip: "习惯性加上 -a 或 -r，能避免 90% 的复制失败问题。"
  },
  {
    cmd: "mv",
    category: "file",
    rank: 5,
    desc: "移动/重命名",
    memory: "MoVe (搬家)",
    visual: "🚚 叫搬家公司把东西搬走。原地搬家=改名。",
    options: [
      { flag: "-f", mean: "强制 (Force)", context: "覆盖目标文件不提示" },
      { flag: "-i", mean: "交互 (Interactive)", context: "覆盖前询问用户" },
      { flag: "-u", mean: "更新 (Update)", context: "当源文件比目标文件新，或目标缺失时才移动" }
    ],
    example: "mv old_dir new_dir",
    tip: "Linux下没有 rename 命令（虽有但很少用），mv 包办一切重命名。"
  },
  {
    cmd: "rm",
    category: "file",
    rank: 5,
    desc: "删除文件/目录",
    memory: "ReMove (粉碎)",
    visual: "🗑️ 丢进粉碎机。注意 Linux 通常没有回收站，删了就是删了。",
    options: [
      { flag: "-r", mean: "递归 (Recursive)", context: "⭐ 必用：删除目录及其内部所有文件" },
      { flag: "-f", mean: "强制 (Force)", context: "不提示、不报错，直接干掉" },
      { flag: "-i", mean: "交互 (Interactive)", context: "每删一个文件都问你一句（防止手抖）" },
      { flag: "-v", mean: "详细 (Verbose)", context: "显示删除过程，让你知道删了啥" }
    ],
    example: "rm -rf /tmp/garbage",
     tip: "rm -rf 是\"删库跑路\"命令，使用前请深呼吸，看清路径！"
  },
  {
    cmd: "tar",
    category: "file",
    rank: 5,
    desc: "打包/压缩",
    memory: "Tape ARchive (打包)",
    visual: "📦 把一堆零散衣服（文件）塞进一个行李箱（压缩包）。",
    options: [
      { flag: "-c", mean: "创建 (Create)", context: "新建一个压缩包" },
      { flag: "-x", mean: "解压 (Extract)", context: "解开一个压缩包" },
      { flag: "-z", mean: "gzip属性", context: "处理 .tar.gz 格式（最常用）" },
      { flag: "-j", mean: "bzip2属性", context: "处理 .tar.bz2 格式" },
      { flag: "-v", mean: "详细 (Verbose)", context: "显示处理过程" },
      { flag: "-f", mean: "文件 (File)", context: "⭐ 必选：后面必须紧跟压缩包文件名" }
    ],
    example: "tar -czvf back.tar.gz /data",
    tip: "口诀：czvf (创建压缩)，xzvf (解压)。f 永远放最后！"
  },
  {
    cmd: "ln",
    category: "file",
    rank: 4,
    desc: "创建链接",
    memory: "LiNk (快捷方式)",
    visual: "🔗 软链接就像 Windows 的快捷方式；硬链接就像文件的另一个名字。",
    options: [
      { flag: "-s", mean: "软链接 (Symbolic)", context: "⭐ 常用：创建指向文件/目录的快捷方式" },
      { flag: "-f", mean: "强制 (Force)", context: "如果目标链接已存在，先删除再创建" }
    ],
    example: "ln -s /app/bin/run /usr/bin/run",
    tip: "不加 -s 是硬链接（只能针对文件，不能跨分区）；加 -s 是软链接（万能）。"
  },
  {
    cmd: "mkdir",
    category: "file",
    rank: 4,
    desc: "创建目录",
    memory: "MaKe DIR (盖房)",
    visual: "🏗️ 在空地上建新房子。",
    options: [
      { flag: "-p", mean: "父目录 (Parents)", context: "⭐ 必用：自动创建路径中不存在的父目录（a/b/c）" },
      { flag: "-m", mean: "模式 (Mode)", context: "创建时直接指定权限（如 -m 777）" }
    ],
    example: "mkdir -p project/src/main",
    tip: "想建多级目录？一定要加 -p，否则会报错。"
  },
  {
    cmd: "touch",
    category: "file",
    rank: 4,
    desc: "创建文件/更新时间",
    memory: "Touch (摸一下)",
    visual: "👈 摸一下文件，如果存在就更新它的时间戳；不存在就变出一个空文件。",
    options: [
      { flag: "-t", mean: "时间 (Time)", context: "指定特定的时间戳 (YYYYMMDDhhmm)" },
      { flag: "-a", mean: "访问时间", context: "只修改访问时间" },
      { flag: "-m", mean: "修改时间", context: "只修改内容修改时间" }
    ],
    example: "touch newfile.txt",
    tip: "最快创建空文件的方法。"
  },
  {
    cmd: "find",
    category: "file",
    rank: 4,
    desc: "查找文件",
    memory: "Find (地毯搜索)",
    visual: "🔍 拿着放大镜，在整个硬盘里翻箱倒柜。",
    options: [
      { flag: "-name", mean: "按名", context: "按文件名查找（支持通配符 *.log）" },
      { flag: "-type", mean: "类型", context: "f=文件, d=目录, l=链接" },
      { flag: "-mtime", mean: "修改时间", context: "-1 (24h内), +7 (7天前)" },
      { flag: "-size", mean: "大小", context: "+10M (大于10MB)" },
      { flag: "-exec", mean: "执行", context: "对找到的文件执行命令 (高级用法)" },
      { flag: "-user", mean: "用户", context: "查找属于某个用户的文件" }
    ],
    example: "find /var -name '*.log' -mtime -1",
    tip: "这是真·搜索，速度慢但无孔不入。支持逻辑组合。"
  },
  {
    cmd: "grep",
    category: "file",
    rank: 5,
    desc: "文本搜索",
    memory: "Global Regex Print (漏斗)",
    visual: "🧪 文字过滤器。把一堆文字倒进去，只有含关键词的行漏下来。",
    options: [
      { flag: "-i", mean: "忽略大小写", context: "Case Insensitive，大小写通吃" },
      { flag: "-v", mean: "反向 (Invert)", context: "排除：显示不包含关键词的行" },
      { flag: "-r", mean: "递归 (Recursive)", context: "搜整个目录下的所有文件内容" },
      { flag: "-n", mean: "行号 (Number)", context: "显示关键词在哪一行" },
      { flag: "-c", mean: "计数 (Count)", context: "只统计匹配了多少行" },
      { flag: "-E", mean: "扩展正则", context: "支持更复杂的正则表达式" }
    ],
    example: "grep -rn 'Error' /var/log",
    tip: "cat log.txt | grep 'Error' 是最经典的排错连招。"
  },

  // --- 系统操作 (System) ---
  {
    cmd: "ps",
    category: "system",
    rank: 4,
    desc: "查看进程",
    memory: "Process Status (快照)",
    visual: "📸 给系统瞬间拍张X光片，看看到底有哪些程序在跑。",
    options: [
      { flag: "-ef", mean: "全格式 (Standard)", context: "⭐ 常用：显示UID, PID, CMD等标准信息" },
      { flag: "aux", mean: "BSD风格", context: "⭐ 常用：显示CPU, MEM占用率" },
      { flag: "-u", mean: "用户", context: "查看特定用户的进程" }
    ],
    example: "ps -ef | grep java",
    tip: "配合 grep 使用，快速定位你的程序死了没。"
  },
  {
    cmd: "kill",
    category: "system",
    rank: 4,
    desc: "结束进程",
    memory: "Kill (刺杀)",
    visual: "🗡️ 发个信号给进程：'你可以走了'，或者直接刺杀。",
    options: [
      { flag: "-l", mean: "列出信号", context: "查看所有可用的信号编号" },
      { flag: "-15", mean: "SIGTERM (默认)", context: "温柔通知：请你正常退出（给进程收拾数据的时间）" },
      { flag: "-9", mean: "SIGKILL (强制)", context: "⭐ 必杀：立即杀死，不留遗言（慎用，可能丢数据）" }
    ],
    example: "kill -9 12345",
    tip: "先礼后兵：先直接 kill (15)，杀不掉再 kill -9。"
  },
  {
    cmd: "df",
    category: "system",
    rank: 3,
    desc: "磁盘空间",
    memory: "Disk Free (查房)",
    visual: "🏢 查看大楼（硬盘分区）还有多少空房间。",
    options: [
      { flag: "-h", mean: "人类可读 (Human)", context: "⭐ 必选：以 GB, MB 显示容量" },
      { flag: "-T", mean: "类型", context: "显示文件系统类型 (xfs, ext4)" },
      { flag: "-i", mean: "Inodes", context: "查看 inode 使用率（小文件太多会耗尽 inode）" }
    ],
    example: "df -hT",
    tip: "硬盘满了？先用 df 看总体，再用 du 找细节。"
  },
  {
    cmd: "du",
    category: "system",
    rank: 3,
    desc: "目录大小",
    memory: "Disk Usage (称重)",
    visual: "⚖️ 称一下每个文件夹到底有多重（占多大空间）。",
    options: [
      { flag: "-s", mean: "汇总 (Summary)", context: "只看总大小，不列出每个子文件" },
      { flag: "-h", mean: "人类可读", context: "显示 K, M, G" },
      { flag: "-a", mean: "所有文件", context: "连同文件大小一起列出" },
      { flag: "--max-depth=1", mean: "深度", context: "只看第一层目录的大小（排查神器）" }
    ],
    example: "du -sh *",
    tip: "du -sh * 是查找哪个文件夹占满了硬盘的最佳命令。"
  },
  {
    cmd: "mount",
    category: "system",
    rank: 3,
    desc: "挂载设备",
    memory: "Mount (插U盘)",
    visual: "🔌 把光盘、U盘插到系统的目录树上，让它变成树的一部分。",
    options: [
      { flag: "-t", mean: "类型", context: "指定文件系统类型 (iso9660, vfat, nfs)" },
      { flag: "-o loop", mean: "挂载镜像", context: "把 .iso 文件当成光盘直接挂载" },
      { flag: "-o remount,rw", mean: "重挂载", context: "将只读文件系统重新挂载为可读写（修复模式用）" }
    ],
    example: "mount /dev/cdrom /mnt",
    tip: "Linux 不会自动弹盘符，必须手动 mount。"
  },

  // --- 权限与用户 (Auth) ---
  {
    cmd: "chmod",
    category: "auth",
    rank: 5,
    desc: "修改权限",
    memory: "CHange MODe (红绿灯)",
    visual: "🚦 设定谁能过（读），谁能停（写），谁能跑（执行）。",
    options: [
      { flag: "-R", mean: "递归 (Recursive)", context: "修改整个目录及内部所有文件的权限" },
      { flag: "+x", mean: "加执行权", context: "让脚本变成可运行程序" },
      { flag: "755", mean: "数字模式", context: "rwxr-xr-x (主人全权，别人只读)" },
      { flag: "u+s", mean: "SUID", context: "特殊权限：执行时拥有文件主人的权力（如 passwd 命令）" },
      { flag: "+t", mean: "Sticky Bit", context: "特殊权限：只能删自己的文件（用于 /tmp）" }
    ],
    example: "chmod -R 755 /var/www",
    tip: "r=4, w=2, x=1。牢记 777 (全开), 755 (标准), 644 (文件标准)。"
  },
  {
    cmd: "chown",
    category: "auth",
    rank: 4,
    desc: "修改所有者",
    memory: "CHange OWNer (过户)",
    visual: "🏠 房产过户。把文件送给别人。",
    options: [
      { flag: "-R", mean: "递归", context: "把整个文件夹里的东西都过户" },
      { flag: "user:group", mean: "格式", context: "同时修改用户和组 (root:root)" }
    ],
    example: "chown -R www:www /var/www/html",
    tip: "只有 root 才有权力把文件随便送人。"
  },
  {
    cmd: "useradd",
    category: "auth",
    rank: 3,
    desc: "添加用户",
    memory: "User Add (生娃)",
    visual: "👶 系统里新增一个人口，发身份证。",
    options: [
      { flag: "-m", mean: "家目录", context: "⭐ 必选：创建 /home/username" },
      { flag: "-s", mean: "Shell", context: "指定登录后的Shell (如 /bin/bash, /sbin/nologin)" },
      { flag: "-g", mean: "主组", context: "指定基本组" },
      { flag: "-G", mean: "附加组", context: "加入其他组 (如 wheel, sudo)" },
      { flag: "-u", mean: "UID", context: "手动指定用户ID" }
    ],
    example: "useradd -m -s /bin/bash tom",
    tip: "建完用户千万别忘设密码 (passwd)，否则用不了。"
  },
  {
    cmd: "passwd",
    category: "auth",
    rank: 4,
    desc: "修改密码",
    memory: "Password (钥匙)",
    visual: "🔑 配钥匙。管理员可以配所有人的，自己只能配自己的。",
    options: [
      { flag: "-l", mean: "锁定 (Lock)", context: "冻结账号，禁止登录" },
      { flag: "-u", mean: "解锁 (Unlock)", context: "解冻账号" },
      { flag: "-d", mean: "删除 (Delete)", context: "清空密码（允许无密码登录，危险！）" },
      { flag: "-S", mean: "状态 (Status)", context: "查看密码状态" }
    ],
    example: "passwd user1",
    tip: "提示过于简单？root 可以强制设置弱密码，普通用户不行。"
  },

  // --- 网络与连接 (Network) ---
  {
    cmd: "netstat",
    category: "network",
    rank: 4,
    desc: "网络状态",
    memory: "Net Status (监控)",
    visual: "📺 监控室大屏。谁连着我？我在监听谁？",
    options: [
      { flag: "-t", mean: "TCP", context: "显示 TCP 协议连接" },
      { flag: "-u", mean: "UDP", context: "显示 UDP 协议连接" },
      { flag: "-n", mean: "数字 (Numeric)", context: "不解析域名，直接显示 IP（速度快）" },
      { flag: "-l", mean: "监听 (Listening)", context: "只看正在等待连接的端口" },
      { flag: "-p", mean: "进程 (Program)", context: "显示哪个程序占用了端口" },
      { flag: "-r", mean: "路由", context: "显示路由表" }
    ],
    example: "netstat -ntlp",
    tip: "背下来：-ntlp。这是查端口占用的标准连招。"
  },
  {
    cmd: "ping",
    category: "network",
    rank: 4,
    desc: "测试连通",
    memory: "Ping-Pong (乒乓)",
    visual: "🏓 发个球过去，看球回不回得来。",
    options: [
      { flag: "-c", mean: "次数 (Count)", context: "ping -c 4：发4个包就停（Linux默认一直发）" },
      { flag: "-i", mean: "间隔 (Interval)", context: "发包间隔秒数" },
      { flag: "-s", mean: "大小 (Size)", context: "指定数据包大小（测试大包通过率）" }
    ],
    example: "ping -c 4 8.8.8.8",
    tip: "网不通？先 ping 127.0.0.1 (测网卡)，再 ping 网关，最后 ping 外网。"
  },
  {
    cmd: "ifconfig",
    category: "network",
    rank: 4,
    desc: "网卡配置",
    memory: "Interface Config (身份证)",
    visual: "🪪 查看或修改网卡的IP地址、MAC地址。",
    options: [
      { flag: "-a", mean: "所有 (All)", context: "显示所有网卡，包括没启动的" },
      { flag: "up/down", mean: "开关", context: "ifconfig eth0 up (启动网卡)" },
      { flag: "IP", mean: "设IP", context: "ifconfig eth0 192.168.1.100" }
    ],
    example: "ifconfig",
    tip: "CentOS 7+ 可能没有 ifconfig，请用 ip addr 代替。"
  },

  // --- 文件操作补充 ---
  {
    cmd: "cat",
    category: "file",
    rank: 5,
    desc: "查看文件内容",
    memory: "conCATenate (连接)",
    visual: "📖 把文件打开，一口气从头读到尾。",
    options: [
      { flag: "-n", mean: "行号 (Number)", context: "⭐ 常用：显示行号" },
      { flag: "-b", mean: "非空行号", context: "只给非空行编号" },
      { flag: "-A", mean: "显示所有", context: "显示不可见字符（换行、制表符等）" },
      { flag: "-s", mean: "压缩空行", context: "多个连续空行压缩为一个" }
    ],
    example: "cat -n app.log",
    tip: "cat 只能看不能改。想看大文件？用 less 或 more。"
  },
  {
    cmd: "head",
    category: "file",
    rank: 4,
    desc: "查看文件头部",
    memory: "Head (头)",
    visual: "👀 只看文件的开头几行。",
    options: [
      { flag: "-n", mean: "行数 (Number)", context: "指定看前几行（默认10行）" },
      { flag: "-c", mean: "字节数", context: "按字节数查看" }
    ],
    example: "head -n 20 access.log",
    tip: "查日志开头用 head，看结尾用 tail。"
  },
  {
    cmd: "tail",
    category: "file",
    rank: 5,
    desc: "查看文件尾部",
    memory: "Tail (尾巴)",
    visual: "📜 从文件最后往前看。滚动日志必备。",
    options: [
      { flag: "-n", mean: "行数", context: "指定看最后几行（默认10行）" },
      { flag: "-f", mean: "跟踪 (Follow)", context: "⭐ 必用：实时追踪文件更新（看日志神器）" },
      { flag: "-F", mean: "增强跟踪", context: "文件被删除重建后继续跟踪" },
      { flag: "-c", mean: "字节数", context: "按字节数查看" }
    ],
    example: "tail -f /var/log/messages",
    tip: "tail -f 是运维看日志的标配，Ctrl+C 才能退出。"
  },
  {
    cmd: "vi",
    category: "file",
    rank: 4,
    desc: "文本编辑器",
    memory: "VIsual (可视化)",
    visual: "✏️ Linux 自带的文本编辑器。三种模式切换有点烧脑。",
    options: [
      { flag: "i", mean: "插入模式", context: "进入编辑模式，可以输入内容" },
      { flag: "Esc", mean: "命令模式", context: "退出编辑模式，可以执行命令" },
      { flag: ":w", mean: "保存", context: "写入文件（命令模式下）" },
      { flag: ":q", mean: "退出", context: "退出编辑器" },
      { flag: ":wq", mean: "保存并退出", context: "保存后退出" },
      { flag: ":q!", mean: "强制退出", context: "不保存强制退出" }
    ],
    example: "vi config.txt",
    tip: "记住三步曲：i 进入编辑，Esc 退出编辑，:wq 保存退出。"
  },

  // --- 系统操作补充 ---
  {
    cmd: "top",
    category: "system",
    rank: 5,
    desc: "实时系统监控",
    memory: "Top (顶部)",
    visual: "📊 实时刷新的任务管理器。CPU、内存、进程一目了然。",
    options: [
      { flag: "-d", mean: "延迟 (Delay)", context: "设置刷新间隔秒数" },
      { flag: "-p", mean: "进程ID", context: "只监控指定进程" },
      { flag: "-u", mean: "用户", context: "只看某个用户的进程" },
      { flag: "M", mean: "内存排序", context: "按内存使用率排序（运行时按）" },
      { flag: "P", mean: "CPU排序", context: "按CPU使用率排序（运行时按）" },
      { flag: "k", mean: "杀进程", context: "kill进程（运行时按k输入PID）" }
    ],
    example: "top -d 3",
    tip: "按 q 退出。M 键看内存大户，P 键看 CPU 大户。"
  },
  {
    cmd: "free",
    category: "system",
    rank: 4,
    desc: "内存使用情况",
    memory: "Free (空闲)",
    visual: "💾 查看内存还剩多少。",
    options: [
      { flag: "-h", mean: "人类可读", context: "⭐ 必用：以 GB, MB 显示" },
      { flag: "-m", mean: "MB单位", context: "以MB为单位显示" },
      { flag: "-g", mean: "GB单位", context: "以GB为单位显示" },
      { flag: "-s", mean: "间隔", context: "每隔几秒刷新一次" }
    ],
    example: "free -h",
    tip: "看 available 那一列，才是真正可用的内存。"
  },
  {
    cmd: "systemctl",
    category: "system",
    rank: 5,
    desc: "服务管理",
    memory: "System Control (系统控制)",
    visual: "🎛️ CentOS 7+ 的服务管家。启动、停止、重启服务全靠它。",
    options: [
      { flag: "start", mean: "启动", context: "启动服务" },
      { flag: "stop", mean: "停止", context: "停止服务" },
      { flag: "restart", mean: "重启", context: "重启服务" },
      { flag: "status", mean: "状态", context: "查看服务状态" },
      { flag: "enable", mean: "开机启动", context: "设置开机自启" },
      { flag: "disable", mean: "禁止启动", context: "取消开机自启" }
    ],
    example: "systemctl restart nginx",
    tip: "改配置后记得 restart。想开机启动加 enable。"
  },
  {
    cmd: "uname",
    category: "system",
    rank: 3,
    desc: "系统信息",
    memory: "Unix NAME (系统名)",
    visual: "🏷️ 查看系统的身份证信息。",
    options: [
      { flag: "-a", mean: "全部 (All)", context: "⭐ 常用：显示所有系统信息" },
      { flag: "-r", mean: "内核版本", context: "显示内核版本" },
      { flag: "-m", mean: "硬件架构", context: "显示机器硬件架构（x86_64）" },
      { flag: "-n", mean: "主机名", context: "显示主机名" }
    ],
    example: "uname -a",
    tip: "uname -a 是查系统信息的万能钥匙。"
  },

  // --- 权限与用户补充 ---
  {
    cmd: "su",
    category: "auth",
    rank: 4,
    desc: "切换用户",
    memory: "Switch User (变身)",
    visual: "🎭 变身成另一个用户（通常是root）。",
    options: [
      { flag: "-", mean: "完全切换", context: "⭐ 推荐：切换用户并加载其环境变量" },
      { flag: "-c", mean: "执行命令", context: "以目标用户身份执行一条命令" },
      { flag: "-s", mean: "指定Shell", context: "使用指定的Shell" }
    ],
    example: "su - root",
    tip: "su 需要知道目标用户密码。sudo 只需要自己密码。"
  },
  {
    cmd: "sudo",
    category: "auth",
    rank: 5,
    desc: "以管理员执行",
    memory: "SuperUser DO (临时权力)",
    visual: "👑 临时借用root权限执行命令。",
    options: [
      { flag: "-u", mean: "指定用户", context: "以指定用户身份执行" },
      { flag: "-i", mean: "登录Shell", context: "模拟登录，加载环境变量" },
      { flag: "-s", mean: "运行Shell", context: "运行Shell（类似 su）" },
      { flag: "-l", mean: "列出权限", context: "列出当前用户可执行的sudo命令" }
    ],
    example: "sudo systemctl restart nginx",
    tip: "sudo 输入的是你自己的密码，不是root密码。"
  },
  {
    cmd: "userdel",
    category: "auth",
    rank: 3,
    desc: "删除用户",
    memory: "User DELete (除名)",
    visual: "🗑️ 把用户从系统中除名。",
    options: [
      { flag: "-r", mean: "删除家目录", context: "⭐ 常用：连同家目录和邮箱一起删除" },
      { flag: "-f", mean: "强制删除", context: "强制删除（即使用户已登录）" }
    ],
    example: "userdel -r olduser",
    tip: "不加 -r 只删用户，家目录还在。加 -r 才彻底。"
  },
  {
    cmd: "groupadd",
    category: "auth",
    rank: 3,
    desc: "添加用户组",
    memory: "Group ADD (建群)",
    visual: "👥 创建一个用户组（群）。",
    options: [
      { flag: "-g", mean: "GID", context: "指定组ID" },
      { flag: "-r", mean: "系统组", context: "创建系统组（GID小于1000）" }
    ],
    example: "groupadd developers",
    tip: "建组后用 usermod -aG 把用户加入组。"
  },

  // --- 网络补充 ---
  {
    cmd: "ssh",
    category: "network",
    rank: 5,
    desc: "远程登录",
    memory: "Secure SHell (安全隧道)",
    visual: "🔐 加密的远程登录通道。",
    options: [
      { flag: "-p", mean: "端口 (Port)", context: "指定SSH端口（默认22）" },
      { flag: "-i", mean: "密钥文件", context: "使用指定的私钥文件登录" },
      { flag: "-l", mean: "登录名", context: "指定登录用户名" },
      { flag: "-v", mean: "详细模式", context: "显示详细的连接过程（调试用）" }
    ],
    example: "ssh root@192.168.1.100",
    tip: "记住格式：ssh 用户名@IP地址。默认端口22。"
  },
  {
    cmd: "scp",
    category: "network",
    rank: 4,
    desc: "远程复制",
    memory: "Secure CoPy (安全快递)",
    visual: "📦 通过SSH隧道传文件。",
    options: [
      { flag: "-r", mean: "递归", context: "⭐ 必用：复制目录时必须加" },
      { flag: "-P", mean: "端口 (大写P)", context: "指定SSH端口" },
      { flag: "-p", mean: "保留属性 (小写p)", context: "保留文件时间和权限" },
      { flag: "-v", mean: "详细模式", context: "显示传输进度" }
    ],
    example: "scp -r /data root@192.168.1.100:/backup",
    tip: "本地到远程：scp 本地 用户@IP:远程。反过来就反着写。"
  },
  {
    cmd: "wget",
    category: "network",
    rank: 4,
    desc: "下载文件",
    memory: "Web GET (网络搬运工)",
    visual: "⬇️ 从网上下载文件。",
    options: [
      { flag: "-O", mean: "输出文件名", context: "指定保存的文件名" },
      { flag: "-c", mean: "断点续传", context: "继续上次未完成的下载" },
      { flag: "-b", mean: "后台下载", context: "后台下载" },
      { flag: "-q", mean: "安静模式", context: "不输出下载信息" }
    ],
    example: "wget -c http://example.com/file.zip",
    tip: "下载大文件记得加 -c，断网了可以续传。"
  },
  {
    cmd: "curl",
    category: "network",
    rank: 4,
    desc: "数据传输",
    memory: "Client URL (万能客户端)",
    visual: "🔗 瑞士军刀般的网络工具。测试API必备。",
    options: [
      { flag: "-X", mean: "请求方法", context: "指定HTTP方法（GET, POST等）" },
      { flag: "-H", mean: "请求头", context: "添加HTTP请求头" },
      { flag: "-d", mean: "数据 (Data)", context: "发送POST数据" },
      { flag: "-o", mean: "输出文件", context: "将输出写入文件" },
      { flag: "-I", mean: "只看头", context: "只显示响应头" },
      { flag: "-v", mean: "详细模式", context: "显示请求和响应的详细信息" }
    ],
    example: "curl -X GET https://api.example.com",
    tip: "curl 是测试 API 的神器，wget 是下载文件的首选。"
  }
];

interface FlipCardProps {
  data: CommandData;
}

const FlipCard = ({ data }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  const theme = {
    file: { border: "border-blue-400", bg: "bg-blue-50", text: "text-blue-600", light: "bg-blue-100/50" },
    auth: { border: "border-orange-400", bg: "bg-orange-50", text: "text-orange-600", light: "bg-orange-100/50" },
    system: { border: "border-green-400", bg: "bg-green-50", text: "text-green-600", light: "bg-green-100/50" },
    network: { border: "border-purple-400", bg: "bg-purple-50", text: "text-purple-600", light: "bg-purple-100/50" }
  }[data.category];

  return (
    <div 
      className={`card-container perspective-1000 group ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        
        {/* Front */}
        <div className={`card-front bg-white rounded-2xl shadow-xl border-b-[6px] ${theme.border} p-7 flex flex-col justify-between overflow-hidden hover:-translate-y-1 transition-transform duration-300`}>
          <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${theme.bg} -mr-10 -mt-10 opacity-60 blur-xl`}></div>
          
          <div>
            <div className="flex justify-between items-start mb-6 relative z-10">
              <h2 className={`text-5xl font-black font-mono ${theme.text} tracking-tighter`}>{data.cmd}</h2>
              <div className="flex gap-0.5" title={`常用指数: ${data.rank}/5`}>
                {[...Array(data.rank)].map((_, i) => (
                  <span key={i} className="text-yellow-400 drop-shadow-sm text-lg">🔥</span>
                ))}
              </div>
            </div>
            <div className="text-slate-600 font-bold text-xl mb-6">{data.desc}</div>
            
            <div className={`${theme.light} p-5 rounded-xl relative border border-white/50 shadow-sm`}>
              <div className="flex items-center gap-2 mb-3 text-slate-700 font-bold text-xs uppercase tracking-wider opacity-70">
                <Brain className="w-4 h-4" /> 场景记忆
              </div>
              <div className="text-slate-800 font-black text-lg mb-2">{data.memory}</div>
              <div className="text-slate-600 text-sm leading-relaxed font-medium">{data.visual}</div>
            </div>
          </div>

          <div className="flex justify-center text-slate-400 items-center gap-2 text-sm font-bold mt-4 uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
            <RotateCcw className="w-4 h-4" /> 点击翻转查看参数
          </div>
        </div>

        {/* Back */}
        <div className="card-back bg-slate-900 rounded-2xl shadow-2xl p-6 flex flex-col border border-slate-700">
          <div className="flex justify-between items-center mb-4 border-b border-slate-700/50 pb-3">
            <span className="font-mono text-2xl font-bold text-white tracking-tight">{data.cmd}</span>
            <span className="text-[10px] font-bold bg-slate-800 px-2 py-1 rounded text-slate-400 uppercase tracking-wider border border-slate-700">Options Dictionary</span>
          </div>

          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar -mr-2">
            <ul className="space-y-4">
              {data.options.map((opt, idx) => (
                <li key={idx} className="text-sm">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-mono text-emerald-400 font-bold text-lg min-w-[3rem]">{opt.flag}</span>
                    <span className="text-slate-200 font-bold">{opt.mean}</span>
                  </div>
                  <p className="text-slate-400 text-xs pl-14 leading-relaxed border-l-2 border-slate-700/50 ml-1">
                    {opt.context}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-700/50">
            <div className="text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-wider">Classic Usage</div>
            <div className="bg-black/40 p-3 rounded-lg font-mono text-sm text-emerald-300 truncate shadow-inner border border-white/5">
              <span className="text-slate-600 mr-2 select-none">$</span>
              {data.example}
            </div>
            <div className="mt-2 text-[11px] text-amber-500/90 flex items-start gap-1.5 leading-tight font-medium">
              <span className="mt-px">⚠️</span> {data.tip}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

interface LinuxCommandCardsProps {
  onBack: () => void;
}

const LinuxCommandCards = ({ onBack }: LinuxCommandCardsProps) => {
  const [filter, setFilter] = useState<'all' | 'file' | 'auth' | 'system' | 'network'>("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredData = useMemo(() => {
    const lowerTerm = searchTerm.toLowerCase().trim();
    return commandData.filter(item => {
      const matchCategory = filter === "all" || item.category === filter;
      if (!matchCategory) return false;
      if (!lowerTerm) return true;

      const basicMatch = 
        item.cmd.toLowerCase().includes(lowerTerm) || 
        item.desc.toLowerCase().includes(lowerTerm) || 
        item.memory.toLowerCase().includes(lowerTerm) ||
        item.visual.toLowerCase().includes(lowerTerm);

      const optionMatch = item.options.some(opt => 
        opt.flag.toLowerCase().includes(lowerTerm) || 
        opt.mean.toLowerCase().includes(lowerTerm) ||
        opt.context.toLowerCase().includes(lowerTerm)
      );

      return basicMatch || optionMatch;
    }).sort((a, b) => b.rank - a.rank); 
  }, [filter, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto p-4 md:p-8 pb-20">
        {/* Header Section */}
        <div className="text-center mb-10 space-y-3">
          <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tight">
            Linux 命令 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pro 记忆卡</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg">
            全景选项库 · 场景化记忆 · 翻转实战
          </p>
        </div>

        {/* 返回按钮 */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-lg shadow-sm border border-gray-200 transition-colors"
          >
            <span>←</span>
            <span>返回主页</span>
          </button>
        </div>

        {/* Search & Filter Bar - 非固定 */}
        <div className="bg-white p-4 rounded-2xl shadow-sm mb-8 border border-gray-100/80">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              {[
                { id: "all" as const, label: "全部核心", color: "bg-gray-800" },
                { id: "file" as const, label: "文件/目录", icon: <FileText className="w-5 h-5" />, color: "bg-blue-600" },
                { id: "auth" as const, label: "用户/权限", icon: <UserCircle className="w-5 h-5" />, color: "bg-orange-500" },
                { id: "system" as const, label: "系统/进程", icon: <Server className="w-5 h-5" />, color: "bg-green-600" },
                { id: "network" as const, label: "网络/连接", icon: <Globe className="w-5 h-5" />, color: "bg-purple-600" },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all font-bold text-sm whitespace-nowrap shadow-sm
                    ${filter === tab.id 
                      ? `${tab.color} text-white shadow-lg scale-105` 
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80 group">
              <div className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="搜命令、选项或场景 (如: 压缩, -r, 755)" 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-700 font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item) => (
            <FlipCard key={item.cmd} data={item} />
          ))}
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍃</div>
            <p className="text-gray-400 text-xl font-medium">空空如也... 换个关键词试试？</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinuxCommandCards;
