import React, { useState } from 'react';
import { Book, Code, Terminal, CheckCircle, HelpCircle, FileText, Menu, X, ChevronDown, ChevronRight, Eye, EyeOff } from 'lucide-react';

const sections = [
  { id: 'choice', title: '一、选择题', icon: <CheckCircle className="w-5 h-5" /> },
  { id: 'fill', title: '二、填空题', icon: <FileText className="w-5 h-5" /> },
  { id: 'boolean', title: '三、判断题', icon: <HelpCircle className="w-5 h-5" /> },
  { id: 'short', title: '四、简答题', icon: <Book className="w-5 h-5" /> },
  { id: 'analysis', title: '五、代码解析', icon: <Code className="w-5 h-5" /> },
  { id: 'coding', title: '六、Shell编程', icon: <Terminal className="w-5 h-5" /> },
];

const questionData = {
  choice: [
    { q: "1. Linux 是一个类似于( )的操作系统。", options: ["A. Dos", "B. Windows", "C. Unix", "D. macOS"], a: "C" },
    { q: "2. Linux 系统是一个( )的操作系统。", options: ["A. 单用户、单任务", "B. 单用户、多任务", "C. 多用户、单任务", "D. 多用户、多任务"], a: "D" },
    { q: "3. 在linux系统中,每个目录内放置的东西都有严格的规定,( )目录下存放了系统管理时要用到的各种配置文件和子目录。", options: ["A. /dev", "B. /etc", "C. /bin", "D. /tmp"], a: "B" },
    { q: "4. 使用 $ cd ~ 命令后,我们会进入( )目录。", options: ["A. /", "B. ~", "C. 用户的主目录", "D. /tmp"], a: "C" },
    { q: "5. 设普通账号 hadoop 当前目录为 /usr/local,键入 cd .. 命令后,用户当前目录为( )。", options: ["A. /home", "B. /usr", "C. /home/hadoop", "D. /usr/local"], a: "B" },
    { q: "6. 删除一个非空目录 tmp 的命令是( )。", options: ["A. del tmp", "B. rm -rf tmp", "C. rmdir -r tmp", "D. mv -rf tmp"], a: "B" },
    { q: "7. 下列选项中,用来显示当前工作目录的绝对路径的命令是( )。", options: ["A. passwd", "B. pwd", "C. password", "D. cd"], a: "B" },
    { q: "8. 用命令 ls -al 显示出文件 file 的描述为\"-rwxr-xr-- 1 root root ...\",由此可知文件 file 的类型为( )。", options: ["A. 符号链接", "B. 硬链接", "C. 普通文件", "D. 目录"], a: "C" },
    { q: "9. 一个文件的权限是\"rw-r--r-x\",那么这个文件所有者的权限是( )。", options: ["A. 只读", "B. 写、可执行", "C. 读、写", "D. 读、可执行"], a: "C" },
    { q: "10. 改变文件的属主,可使用命令( )。", options: ["A. chmod", "B. chgrp", "C. chown", "D. umask"], a: "C" },
    { q: "11. 要给文件 test.sh 加上其他人可执行权限的命令是( )。", options: ["A. chmod a+x", "B. chown o+x", "C. chmod o+x", "D. chmod g+x"], a: "C" },
    { q: "12. 默认目录完全权限为777,已知umask为022,则新建目录默认权限为( )。", options: ["A. 777", "B. 022", "C. 755", "D. 644"], a: "C" },
    { q: "13. 某文件的属主是全部权限,组内权限是可读可写,组外成员的权限是只读,该文件权限为( )。", options: ["A. 467", "B. 476", "C. 674", "D. 764"], a: "D" },
    { q: "14. 如果执行命令 chmod 764 file.txt,那么该文件的权限是( )。", options: ["A. rwxr--rw-", "B. rw-r--r--", "C. -xr-rwx", "D. rwxrw-r--"], a: "D" },
    { q: "15. 可实现文件重命名的命令是( )。", options: ["A. cp", "B. mv", "C. ln", "D. rename"], a: "B" },
    { q: "16. 解压一个后缀为 .tar.gz 的文件可以使用( )命令?", options: ["A. gzip", "B. bzip2", "C. xz", "D. tar"], a: "D" },
    { q: "17. 对于压缩文件 mysql.tar.gz,可以用下列哪个命令来解压缩( )?", options: ["A. tar -jxvf", "B. tar -zcvf", "C. tar -ztvf", "D. tar -zxvf"], a: "D" },
    { q: "18. 在vi中退出不保存的命令是( )。", options: ["A. :q", "B. :w", "C. :wq", "D. :q!"], a: "D" },
    { q: "19. 在vi中,命令'dd'用来删除当前的( )。", options: ["A. 行", "B. 变量", "C. 字", "D. 字符"], a: "A" },
    { q: "20. 存放账号信息的文件是( )。", options: ["A. /etc/passwd", "B. /etc/group", "C. /etc/shadow", "D. /etc/gshadow"], a: "A" },
    { q: "21. 一个 bash shell 脚本的第一行是( )。", options: ["A. #/bin/csh", "B. #/bin/bash", "C. /bin/bash", "D. #!/bin/bash"], a: "D" },
    { q: "22. 下面的哪个特殊变量表示位置参数的数量( )。", options: ["A. $$", "B. $?", "C. $#", "D. $*"], a: "C" },
    { q: "23. 在bash中,按( )键可以补全命令和文件。", options: ["A. Ctrl", "B. Tab", "C. Esc", "D. Alt"], a: "B" },
    { q: "24. 以下哪个命令可将本地变量变为环境变量( )?", options: ["A. export", "B. import", "C. set", "D. alias"], a: "A" },
    { q: "25. 判断文件 file 存在且为目录文件的判断式可以写为( )。", options: ["A. -d file", "B. [-d file]", "C. (-d file)", "D. test -d file"], a: "B" },
    { q: "26. 下面哪种符号括起来的字符串都作为普通字符出现( )。", options: ["A. 双引号", "B. 单引号", "C. 倒引号", "D. 圆括号"], a: "B" },
    { q: "27. 在linux系统中,命令( )可以用来将分区挂载到指定目录。", options: ["A. fdisk", "B. mkfs", "C. tune2fs", "D. mount"], a: "D" },
    { q: "28. 激活网络适配器加载网卡到内核中通常由( )完成。", options: ["A. ifconfig", "B. ip", "C. modprobe", "D. route"], a: "C" },
    { q: "29. 一般可以使用( )命令来结束一个进程。", options: ["A. ps", "B. kill", "C. nohup", "D. nice"], a: "B" },
    { q: "30. 字符设备文件类型的标志是( )。", options: ["A. p", "B. c", "C. s", "D. l"], a: "B" },
    { q: "31. Linux 系统至少要创建( )和交换分区。", options: ["A. 根分区(/)", "B. 扩展分区", "C. 逻辑分区", "D. Boot分区"], a: "A" },
    { q: "32. 统计磁盘空间或文件系统使用情况的命令是( )。", options: ["A. df", "B. dd", "C. du", "D. fdisk"], a: "A" },
    { q: "33. 什么命令常用于检测网络主机是否可达?( )", options: ["A. ssh", "B. netstat", "C. ping", "D. exit"], a: "C" },
    { q: "34. 已知 user=hadoop,则执行 echo 'the current user is $user' 的结果为( )。", options: ["A. the current user is $user", "B. the current user is user", "C. the current user is hadoop", "D. 错误"], a: "A" },
    { q: "35. ( )用于表示前一个命令的退出状态码。", options: ["A. $0", "B. $1", "C. $?", "D. $$"], a: "C" },
    { q: "36. 存放 Linux 基本命令的目录是什么?( )", options: ["A. /tmp", "B. /bin", "C. /lib", "D. /home"], a: "B" },
    { q: "37. 从后台启动进程,应在命令结尾处加上的符号是( )。", options: ["A. &", "B. @", "C. #", "D. $"], a: "A" },
    { q: "38. 文件权限为rw-r--r--,要增加所有用户的执行权限和同组用户的写权限,下列命令正确的是( )。", options: ["A. chmod a+x,g+w file", "B. chmod 765 file", "C. chmod +x file", "D. chmod g+w file"], a: "A" },
    { q: "39. 在 vi 编辑器里,下面哪个命令和 :wq 等价( )。", options: ["A. :w", "B. :x 或 ZZ", "C. q!", "D. :q"], a: "B" },
    { q: "40. 对于外部设备文件,一般应将其放在( )目录中。", options: ["A. /bin", "B. /etc", "C. /dev", "D. /lib"], a: "C" },
    { q: "41. 重启 Linux 系统同时把内存信息写入硬盘,应使用( )命令。", options: ["A. reboot", "B. halt", "C. shutdown -r now", "D. init 0"], a: "C" },
    { q: "43. 在linux 系统中,下列哪个命令可以用来建立分区:( )。", options: ["A. fdisk", "B. mkfs", "C. tune2fs", "D. mount"], a: "A" },
    { q: "44. 在Linux系统中,管道的符号是( )。", options: ["A. >", "B. <", "C. |", "D. :"], a: "C" },
    { q: "45. 快速启动网卡\"eth0\"的命令是( )。", options: ["A. ifconfig eth0 up", "B. ipconfig eth0 up", "C. ifup eth0", "D. eth0 start"], a: "C" },
    { q: "46. 若文件 test 的权限描述为:drwxrw-r--,则文件 test 的类型及文件主的权限是( )。", options: ["A. 目录文件、读写执行", "B. 目录文件、读写", "C. 普通文件、读写", "D. 普通文件、读"], a: "A" },
    { q: "47. /etc/shadow文件中存放( )。", options: ["A. 用户账号基本信息", "B. 用户口令的加密信息", "C. 用户组信息", "D. 文件系统信息"], a: "B" },
    { q: "48. Linux 系统中,用户文件描述符0表示( )。", options: ["A. 标准输入", "B. 标准输出", "C. 管道", "D. 标准错误"], a: "A" },
    { q: "49. 交换分区 swap 的大小一般是多少?( )", options: ["A. 100MB", "B. 512MB", "C. 1024MB", "D. 物理内存的1~2倍"], a: "D" },
    { q: "50. Linux文件权限10位长度,第二段(2-4位)表示( )。", options: ["A. 文件类型", "B. 文件所有者的权限", "C. 同组权限", "D. 其他人权限"], a: "B" },
    { q: "53. 以下哪个vi命令可以给文档的每行加上一个编号?( )", options: ["A. :e number", "B. :set number", "C. :number", "D. :list"], a: "B" },
    { q: "56. 超级用户登录的提示符是哪项?( )", options: ["A. @", "B. #", "C. $", "D. ~"], a: "B" },
    { q: "57. pwd 命令功能是什么?( )", options: ["A. 设置密码", "B. 显示密码", "C. 显示当前目录绝对路径", "D. 查看文件"], a: "C" },
    { q: "58. 普通用户的UID通常是( )。", options: ["A. 0", "B. 1-499", "C. 500/1000以上", "D. 负数"], a: "C" },
    { q: "59. passwd 命令如果要删除用户口令,则需要哪个选项?( )", options: ["A. -d", "B. -u", "C. -l", "D. -S"], a: "A" },
    { q: "60. 在 bash shell环境下,当一命令正在执行时,按下 Ctrl-Z 会( )。", options: ["A. 中止前台任务", "B. 结束进程", "C. 将前台任务暂停并转入后台", "D. 注销"], a: "C" },
    { q: "65. 对名为fido的文件用 chmod 551 fido 修改,则它的权限是( )。", options: ["A. -rwxr-xr-x", "B. -rwxr--r--", "C. -r--r--r--", "D. -r-xr-x--x"], a: "D" },
    { q: "67. 普通用户不具有权限执行某个操作时,可以通过使用( )命令执行管理员身份的操作。", options: ["A. su", "B. chmod", "C. sudo", "D. root"], a: "C" },
    { q: "73. 在给定文件中查找特定字符串的命令为( )。", options: ["A. grep", "B. whereis", "C. find", "D. which"], a: "A" },
    { q: "76. 什么命令常用于检测网络主机是否可达?( )", options: ["A. ssh", "B. netstat", "C. ping", "D. exit"], a: "C" },
  ],
  fill: [
    { q: "用( )符号将输出重定向内容附加在原文的后面。", a: ">>" },
    { q: "显示系统中所有进程全面信息的命令为( )。", a: "ps -aux" },
    { q: "vi 具有三种工作方式,分别是( )、( )、( )。", a: "命令模式、编辑模式、底行模式" },
    { q: "Linux 系统大致可分为三层:( )、( )和( )。", a: "内核、Shell、应用 (或 文件系统)" },
    { q: "唯一标识每一个用户的是用户( )和用户名。", a: "UID (ID)" },
    { q: "Linux 创建进程的函数名为( )。", a: "fork" },
    { q: "增加一个用户的命令是( )。", a: "useradd" },
    { q: "改变文件的属主的命令是( )。", a: "chown" },
    { q: "利用管道技术统计当前目录下有多少个文件,该命令是( )。", a: "ls | wc -w (或 ls -l | grep \"^-\" | wc -l)" },
    { q: "把文件 file1 和 file2 合并成 file3 的命令是( )。", a: "cat file1 file2 > file3" },
    { q: "gdb 设置断点命令( ),单步跟踪命令( )。", a: "break, step (或 next)" }
  ],
  boolean: [
    { q: "在Linux系统中,命令区分大小写,但目录名不区分大小写。", a: "错 (都区分)" },
    { q: "用户不能自定义环境变量。", a: "错" },
    { q: "在Linux中,一切皆为文件,包括硬件设备。", a: "对" },
    { q: "在Linux中,没有盘符的概念,所有文件构成一棵树,根目录为\"/\"。", a: "对" },
    { q: "ifconfig 命令用于测试主机网络是否畅通。", a: "错 (ping用于测试,ifconfig用于配置)" },
    { q: "在Shell编程中,要取用一个变量的值,只需在变量名前面加一个\"$\"。", a: "对" },
    { q: "若\"a=1;b=2;c=$a+$b\",则c的值为3。", a: "错 (结果为字符串 1+2,需用expr或(())运算)" },
    { q: "在shell编程中,为了看起来更舒服,赋值运算符两侧可以加空格。", a: "错 (不能加空格)" },
    { q: "Linux 是一个多任务、多用户的操作系统。", a: "对" },
    { q: "输出重定向符\">\"不会覆盖文件原有内容。", a: "错 (会覆盖,>>才是不覆盖追加)" }
  ],
  short: [
    { q: "请列举至少三种执行 shell 脚本的方式,假设 shell 文件名为 test.sh。", a: "1. bash test.sh\n2. sh test.sh\n3. ./test.sh (需先赋予执行权限 chmod +x)\n4. source test.sh" },
    { q: "什么是符号链接?符号链接与硬链接的区别是什么?", a: "符号链接(软链接)类似于Windows快捷方式,指向原文件的路径。硬链接是原文件的一个别名,指向同一个Inode。\n区别:软链接可以跨文件系统,可以指向目录;硬链接不能跨文件系统,不能指向目录。删除原文件,软链接失效,硬链接仍可用。" },
    { q: "简要给出操作系统的定义,主要功能体现在哪些方面?", a: "定义:管理计算机硬件与软件资源的程序。\n功能:进程管理、内存管理、文件系统管理、设备管理、作业管理。" },
    { q: "现在需要统计当前目录 /home/zheng 下普通文件的数目并显示结果,如何实现?", a: "find /home/zheng -type f | wc -l" },
    { q: "vi 编辑器有哪几种工作模式?如何在这几种工作模式之间转换?", a: "三种:命令模式、编辑模式、底行模式。\n转换:\n默认进入命令模式。\n按 i, a, o 等进入编辑模式;按 Esc 回到命令模式。\n按 : 进入底行模式;按 Esc 回到命令模式。" }
  ],
  analysis: [
    {
      title: "脚本分析 1",
      code: `#!/bin/bash
if test $# = 0
then ls .
else
  for i
  do
    ls -l $i
  done
fi`,
      explanation: "判断是否有位置参数。如果没有参数($#为0),列出当前目录内容(ls .)。如果有参数,遍历所有参数,并以长格式列出每个参数指定的文件或目录信息。"
    },
    {
      title: "脚本分析 2 (Sum of Multiples)",
      code: `#!/bin/bash
sum=0
for a in 1 2 3 4 5 6 7 8 9 10
do
  if [ \`expr $a % 3\` -ne 0 ]
  then
    continue
  fi
  echo $a
  sum=\`expr $sum + $a\`
done
echo "sum = $sum"`,
      explanation: "遍历数字1到10。如果数字不能被3整除(取模不等于0),则跳过(continue)。如果能被3整除,输出该数字并累加到sum。最终输出所有能被3整除的数之和(3+6+9=18)。"
    },
    {
      title: "脚本分析 3 (Directory Traversal)",
      code: `#!/bin/bash
dir=$1
if [ -d $dir ]
then
  cd $dir
  for file in *
  do
    if [ -f $file ]
    then
      cat $file
      echo "end of file $file"
    fi
  done
else
  echo "bad directory name $dir"
fi`,
      explanation: "接收一个参数作为目录名。如果该参数是目录(-d),则进入该目录。遍历目录中所有文件(*),如果是普通文件(-f),则输出文件内容(cat)并打印结束标记。如果参数不是目录,报错。"
    }
  ],
  coding: [
    {
      title: "1. 字符设备文件检测",
      desc: "判断一文件是不是字符设备文件,如果是将其拷贝到 /dev 目录下。",
      code: `#!/bin/bash
filename=$1

# -c 判断是否存在且为字符设备
if [ -c "$filename" ]; then
    cp "$filename" /dev/
    echo "Copied $filename to /dev/"
else
    echo "$filename is not a character device."
fi`
    },
    {
      title: "2. 斐波那契数列求和",
      desc: "fibonacci 数列的前10个数为0,1,1,2,3,5,8,13,21,34,计算这10个数的和,并显示。",
      code: `#!/bin/bash
# 虽然可以直接 echo 88,但这里演示计算过程
sum=0
n1=0
n2=1
count=0

# 既然题目给出了具体数字,也可以直接数组求和
# 0 1 1 2 3 5 8 13 21 34
nums=(0 1 1 2 3 5 8 13 21 34)

for i in "\${nums[@]}"; do
    let sum+=i
done

echo "Sum of first 10 Fibonacci numbers is: $sum"`
    },
    {
      title: "3. 100个整数统计",
      desc: "接收用户从键盘输入的100个整数,然后求出其总和、最大值及最小值。",
      code: `#!/bin/bash
sum=0
max=0
min=0

for ((i=1; i<=100; i++)); do
    read -p "Enter number $i: " num
    
    # 初始化 max 和 min 为第一个输入的数
    if [ $i -eq 1 ]; then
        max=$num
        min=$num
    fi
    
    # 累加
    sum=$((sum + num))
    
    # 更新最大最小值
    if [ $num -gt $max ]; then max=$num; fi
    if [ $num -lt $min ]; then min=$num; fi
done

echo "Sum: $sum"
echo "Max: $max"
echo "Min: $min"`
    },
    {
      title: "4. 10个数求最大值",
      desc: "从用户那里接收10个数,并显示已输入的最大数。",
      code: `#!/bin/bash
max=0

echo "Please enter 10 numbers:"

for ((i=1; i<=10; i++)); do
    read num
    if [ $i -eq 1 ]; then
        max=$num
    else
        if [ $num -gt $max ]; then
            max=$num
        fi
    fi
done

echo "The maximum number is: $max"`
    },
    {
      title: "5. 批量删除用户",
      desc: "实现自动删除50个用户账号的功能。账号名为 stud1 至 stud50。",
      code: `#!/bin/bash
for i in {1..50}
do
    # userdel -r 删除用户及其主目录
    userdel -r "stud$i"
    echo "User stud$i deleted."
done`
    },
    {
      title: "6. 及格判断",
      desc: "使用 if-then-else 语句创建一个根据输入的分数判断是否及格的 shell 程序。",
      code: `#!/bin/bash
read -p "Enter score: " score

if [ "$score" -ge 60 ]; then
    echo "Pass"
else
    echo "Fail"
fi`
    },
    {
      title: "7. 平方计算 (While循环)",
      desc: "使用 while 语句创建一个计算 1-5 的平方的 shell 程序。",
      code: `#!/bin/bash
i=1
while [ $i -le 5 ]
do
    sq=$((i * i))
    echo "$i ^ 2 = $sq"
    let i++
done`
    },
    {
      title: "8. 累加求和 (While循环)",
      desc: "使用 while 语句创建一个根据输入的数值求累加和 (1+2+...+n) 的 shell 程序。",
      code: `#!/bin/bash
read -p "Enter n: " n
sum=0
i=1

while [ $i -le $n ]
do
    sum=$((sum + i))
    let i++
done

echo "Sum from 1 to $n is: $sum"`
    },
    {
      title: "9. 文件复制",
      desc: "编写一个脚本,它把第二个位置参数及其以后的各个参数指定的文件复制到第一个位置参数指定的目录中。",
      code: `#!/bin/bash
# $1 是目标目录
target_dir=$1

# 检查参数个数
if [ $# -lt 2 ]; then
    echo "Usage: $0 target_dir file1 file2 ..."
    exit 1
fi

# 检查目录是否存在
if [ ! -d "$target_dir" ]; then
    echo "Error: $target_dir is not a directory"
    exit 1
fi

# shift 移除第一个参数 ($1),现在的 $1 变成了原来的 $2
shift

# 此时 $@ 包含了所有的文件列表
cp "$@" "$target_dir"

echo "Copied files to $target_dir"`
    }
  ]
};

interface CodeBlockProps {
  code: string;
}

const CodeBlock = ({ code }: CodeBlockProps) => (
  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto my-3 border-l-4 border-blue-500 shadow-inner">
    <pre className="whitespace-pre">{code}</pre>
  </div>
);

interface QuestionBankProps {
  onBack: () => void;
}

export default function QuestionBank({ onBack }: QuestionBankProps) {
  const [activeSection, setActiveSection] = useState('choice');
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [visibleAnswers, setVisibleAnswers] = useState<Record<string, boolean>>({});
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleAnswer = (index: number) => {
    setVisibleAnswers(prev => ({ ...prev, [`${activeSection}-${index}`]: !prev[`${activeSection}-${index}`] }));
  };

  const isAnswerVisible = (index: number) => showAllAnswers || visibleAnswers[`${activeSection}-${index}`];

  const renderContent = () => {
    switch (activeSection) {
      case 'choice':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questionData.choice.map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="font-medium text-gray-800 mb-3">{item.q}</div>
                <div className="space-y-1 mb-4 text-sm text-gray-600">
                  {item.options.map((opt, i) => <div key={i} className="px-2 py-1 bg-gray-50 rounded">{opt}</div>)}
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <button 
                    onClick={() => toggleAnswer(index)}
                    className="text-blue-600 text-sm hover:underline flex items-center"
                  >
                    {isAnswerVisible(index) ? <EyeOff className="w-3 h-3 mr-1"/> : <Eye className="w-3 h-3 mr-1"/>}
                    {isAnswerVisible(index) ? '隐藏答案' : '查看答案'}
                  </button>
                  {isAnswerVisible(index) && (
                    <span className="font-bold text-green-600 animate-in fade-in">答案: {item.a}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
      case 'fill':
      case 'boolean':
      case 'short':
        const data = questionData[activeSection as 'fill' | 'boolean' | 'short'];
        return (
          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="font-medium text-gray-800 mb-2">{item.q}</div>
                <div className={`mt-3 p-3 rounded bg-blue-50 text-blue-900 text-sm transition-all duration-300 ${isAnswerVisible(index) ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden p-0'}`}>
                  <strong>参考答案:</strong> <span className="whitespace-pre-line">{item.a}</span>
                </div>
                 <button 
                    onClick={() => toggleAnswer(index)}
                    className="mt-2 text-blue-600 text-sm hover:underline flex items-center"
                  >
                    {isAnswerVisible(index) ? '隐藏答案' : '查看答案'}
                  </button>
              </div>
            ))}
          </div>
        );
      case 'analysis':
        return (
          <div className="space-y-6">
            {questionData.analysis.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <CodeBlock code={item.code} />
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500"/> 代码解析
                  </h4>
                  <p className="text-gray-600 mt-1 text-sm leading-relaxed">{item.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'coding':
        return (
          <div className="space-y-8">
            <div className="bg-blue-50 p-4 rounded border border-blue-100 text-blue-800 text-sm">
              <p>这里提供了基础的 Shell 脚本实现,可以直接作为参考答案。</p>
            </div>
            {questionData.coding.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                  <Terminal className="text-gray-400 w-6 h-6" />
                </div>
                <div className="relative">
                  <div className="absolute top-0 right-0 px-2 py-1 bg-gray-800 text-xs text-gray-400 rounded-bl rounded-tr">BASH</div>
                  <CodeBlock code={item.code} />
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex font-sans">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 shadow-sm transition-all duration-300 flex-shrink-0 sticky top-0 h-screen overflow-y-auto hidden md:block`}>
        <div className="p-4 flex items-center justify-between border-b">
          {sidebarOpen && <h1 className="font-bold text-xl text-blue-700">Linux 复习题库</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-gray-100 rounded text-gray-500">
            {sidebarOpen ? <Menu size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
        <nav className="p-2 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center p-3 rounded-lg transition-colors ${activeSection === section.id ? 'bg-blue-50 text-blue-700 font-medium shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <div className="flex-shrink-0">{section.icon}</div>
              {sidebarOpen && <span className="ml-3 text-sm">{section.title}</span>}
            </button>
          ))}
        </nav>
        
        {/* 返回按钮 */}
        <div className="p-2 border-t border-gray-200">
          <button
            onClick={onBack}
            className="w-full flex items-center justify-center p-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-100"
          >
            <X className="w-5 h-5 mr-2" />
            {sidebarOpen && <span className="text-sm">返回主页</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10 shadow-sm flex justify-between items-center md:hidden">
          <h1 className="font-bold text-lg text-blue-700">Linux 复习</h1>
          <div className="flex space-x-2">
            <select 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
            >
              {sections.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded">
              <X size={20} />
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{sections.find(s => s.id === activeSection)?.title}</h2>
              <p className="text-gray-500 text-sm mt-1">期末复习重点整理</p>
            </div>
            {activeSection !== 'analysis' && activeSection !== 'coding' && (
              <button 
                onClick={() => {
                  setShowAllAnswers(!showAllAnswers);
                  setVisibleAnswers({}); 
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${showAllAnswers ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {showAllAnswers ? '隐藏所有答案' : '显示所有答案'}
              </button>
            )}
          </div>

          <div className="animate-in slide-in-from-bottom-4 duration-500">
            {renderContent()}
          </div>
        </main>
        
        <footer className="p-6 text-center text-gray-400 text-sm border-t">
          Linux System Final Review &copy; 2023-2024
        </footer>
      </div>
    </div>
  );
}
