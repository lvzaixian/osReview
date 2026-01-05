# 📚 ExamRank1 - 二次开发完整指南

> 本文档是README.md的扩展部分，详细说明如何将ExamRank1框架改造为您自己的课程复习网站。

---

## 🔧 二次开发指南

### 🎯 如何改造为自己的课程复习网站

#### 步骤1: 准备数据

##### 1. 题库数据 (src/data/raw_questions.ts)

```typescript
import type { Question } from '../types';

export const rawQuestions: Question[] = [
  {
    id: 'q001',                  // 题目唯一标识
    type: 'single',              // 题型: single/multi/boolean/fill
    stem: '你的题干内容',         // 题目问题
    options: [                   // 选项列表
      { key: 'A', text: '选项A' },
      { key: 'B', text: '选项B' },
      { key: 'C', text: '选项C' },
      { key: 'D', text: '选项D' }
    ],
    answer: 'A',                 // 正确答案
    explain: '这里写详细的答案解析，帮助学生理解为什么选这个答案。',
    keywords: ['关键词1', '关键词2'],  // 可选：用于高亮显示
    mnemonic: '这里写助记口诀，帮助记忆'  // 可选：记忆辅助
  },
  // 更多题目...
];
```

**题型说明**:
- `single`: 单选题 (answer格式: "A")
- `multi`: 多选题 (answer格式: "AB" 或 "ACD")
- `boolean`: 判断题 (answer格式: "true" 或 "false")
- `fill`: 填空题 (answer格式: "答案1;答案2" 用分号分隔多个空)

---

##### 2. 课程章节数据 (src/data/course_chapters.ts)

```typescript
import type { CourseChapter } from '../types';

export const courseChapters: CourseChapter[] = [
  {
    id: 'chp1',                    // 章节ID
    title: '第一章 课程主题',        // 章节标题
    chapterNumber: 'chp1',         // 章节编号
    overview: '本章主要介绍...章节整体概述',  // 章节概述
    icon: '📚',                    // 可选：章节图标
    estimatedMinutes: 60,          // 可选：预计学习时长
    
    skeleton: {                    // 核心知识骨架
      framework: [                 // 核心框架点
        '知识框架点1：核心概念定义',
        '知识框架点2：重要原理说明',
        '知识框架点3：应用场景'
      ],
      keyPoints: [                 // 关键要点
        '⭐ 要点1：这是必考内容',
        '💡 要点2：这是理解难点',
        '🔥 要点3：这是常见考点'
      ],
      scenarioIntro: {             // 场景引入（大白话）
        title: '为什么要学这个？',
        description: '想象你是一个...(用日常生活场景类比)',
        problems: [                // 要解决的核心问题
          '问题1：如何解决...？',
          '问题2：怎样实现...？'
        ]
      },
      mermaidDiagram: `            // 可选：Mermaid图表
graph TD
  A[开始] --> B[步骤1]
  B --> C[步骤2]
  C --> D[结束]
      `,
      learningObjectives: [        // 可选：学习目标
        '掌握...的基本概念',
        '理解...的工作原理',
        '能够应用...解决实际问题'
      ]
    },
    
    sections: [                    // 章节小节列表
      {
        id: 'sec1',
        title: '1.1 小节标题',
        sectionNumber: '1.1',
        blocks: [                  // 内容块列表
          {
            id: 'block1',
            type: 'text',          // 文本段落
            content: '这是一段正文内容...'
          },
          {
            id: 'block2',
            type: 'highlight',     // 重点强调
            content: '⚠️ 这是重点：核心概念的定义...'
          },
          {
            id: 'block3',
            type: 'list',          // 列表
            content: JSON.stringify([
              '列表项1',
              '列表项2',
              '列表项3'
            ])
          },
          {
            id: 'block4',
            type: 'code',          // 代码块
            language: 'bash',      // 代码语言
            content: '#!/bin/bash\necho "Hello World"'
          },
          {
            id: 'block5',
            type: 'tip',           // 提示信息
            content: '💡 小贴士：这里是学习技巧...'
          }
        ]
      }
    ]
  }
];
```

**ContentBlock 类型说明**:
- `text`: 普通文本段落
- `list`: 列表（content使用JSON.stringify传入数组）
- `table`: 表格
- `code`: 代码块（需指定language）
- `diagram`: 图表（支持Mermaid）
- `highlight`: 重点强调
- `tip`: 提示/技巧
- `scenario`: 场景代入

---

##### 3. 知识快照数据 (src/utils/knowledgeSnapshot.ts)

```typescript
const modules: KnowledgeModule[] = [
  {
    id: 'mod1',
    name: '模块名称（如：系统安全管理）',
    icon: '🔒',                    // 模块图标
    color: 'blue',                 // 颜色主题：blue/green/purple/orange等
    cards: [
      {
        id: 'card1',
        title: '知识点标题（如：SELinux安全策略）',
        keyPoints: [
          // 使用<kw>标签标记需要背诵的关键词（会被背诵模式遮盖）
          '知识点1：SELinux有<kw>三种工作模式</kw>：enforcing、permissive、disabled',
          
          // 使用<strong>标签高亮重点（不会被遮盖）
          '知识点2：<strong>enforcing模式</strong>会强制执行安全策略',
          
          // 混合使用
          '知识点3：修改配置文件<kw>/etc/selinux/config</kw>可以<strong>永久</strong>更改模式',
          
          // 普通文本
          '知识点4：临时切换使用setenforce命令'
        ]
      },
      {
        id: 'card2',
        title: '另一个知识点',
        keyPoints: [
          '要点1...',
          '要点2...'
        ]
      }
    ]
  },
  // 更多模块...
];

export function getAllModules(): KnowledgeModule[] {
  return modules;
}
```

**标签使用规则**:
- `<kw>关键词</kw>`: 背诵模式会遮盖，适合需要主动回忆的内容
- `<strong>重点</strong>`: 始终高亮显示，不会被遮盖
- 纯文本：正常显示

---

#### 步骤2: 修改配置

##### 1. 修改网站标题和元数据

```html
<!-- index.html -->
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>你的课程名称 - 期末速成</title>
    <meta name="description" content="你的课程描述" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

```typescript
// src/App.tsx - 修改主页标题
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
  你的课程名称
</h1>
<p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium">
  你的副标题描述
</p>
```

##### 2. 调整Vite配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 8080,           // 开发服务器端口
    strictPort: false,    // 端口被占用时自动尝试下一个
  },
  base: '/',              // 部署路径（GitHub Pages需要修改）
  esbuild: {
    jsx: 'automatic',     // JSX自动转换
  },
})
```

##### 3. 定制主题颜色

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ...定义你的主题色
          600: '#你的主色',
        }
      },
      // 添加自定义工具类
      perspective: {
        '1000': '1000px',
      },
    },
  },
}
```

---

#### 步骤3: 移除不需要的模块

如果某些模块不适用于你的课程，可以在App.tsx中注释或删除：

```typescript
// src/App.tsx

// 例如：不需要Linux命令记忆卡？注释掉这部分
{/* 命令卡片按钮 - 不需要可删除 */}
{/*
<button
  onClick={() => setShowCommandCards(true)}
  className="..."
>
  <Terminal className="w-12 h-12" />
  <div>💻 Linux命令记忆卡</div>
</button>
*/}

// 也需要注释掉对应的state和条件渲染
// const [showCommandCards, setShowCommandCards] = useState(false);

// if (showCommandCards) {
//   return <LinuxCommandCards onBack={() => setShowCommandCards(false)} />;
// }
```

**可选模块**:
- ✅ SystematicLearning - 系统化学习（推荐保留）
- ✅ KnowledgeSnapshot - 知识快照（推荐保留）
- ⚙️ LinuxCommandCards - 命令记忆卡（可根据课程性质删除）
- ✅ ModeSelector - 刷题模式（核心功能，建议保留）
- ✅ QuestionBank - 题库浏览（推荐保留）
- ⚙️ EssayMode - 大题背诵（可选）
- ✅ TrashBin - 垃圾桶（建议保留）

---

#### 步骤4: 扩展新功能

##### 添加新的题型

```typescript
// 1. 修改类型定义 (src/types/index.ts)
export type QuestionType = 
  | 'single' 
  | 'multi' 
  | 'boolean' 
  | 'fill'
  | 'short_answer'     // 新增：简答题
  | 'essay';           // 新增：论述题

// 2. 修改Question接口（如需要）
export interface Question {
  id: string;
  type: QuestionType;
  stem: string;
  options: Option[];
  answer: string;
  explain: string;
  keywords?: string[];
  mnemonic?: string;
  
  // 新增：简答题/论述题专用字段
  answerKeyPoints?: string[];    // 答案要点列表
  scoringCriteria?: string[];    // 评分标准
}

// 3. 在useExamEngine中添加判题逻辑
const submitAnswer = useCallback((userAnswer: string) => {
  // ... 现有代码
  
  if (currentQuestion.type === 'short_answer') {
    // 简答题判题逻辑
    // 可以使用关键词匹配等方式
  }
}, [currentQuestion]);
```

##### 添加新的内容块类型

```typescript
// 1. 扩展ContentBlockType (src/types/index.ts)
export type ContentBlockType = 
  | 'text'
  | 'list'
  | 'table'
  | 'code'
  | 'diagram'
  | 'highlight'
  | 'tip'
  | 'scenario'
  | 'video'       // 新增：视频
  | 'audio'       // 新增：音频
  | 'image';      // 新增：图片

// 2. 在SystematicLearning组件中添加渲染逻辑
const renderBlock = (block: ContentBlock) => {
  switch (block.type) {
    case 'video':
      return (
        <video controls className="w-full rounded-lg">
          <source src={block.content} type="video/mp4" />
        </video>
      );
    case 'image':
      return (
        <img 
          src={block.content} 
          alt={block.id}
          className="w-full rounded-lg shadow-md"
        />
      );
    // ... 其他类型
  }
};
```

##### 添加新的学习模块

1. 创建新组件 `src/components/YourNewComponent.tsx`

```typescript
import { ArrowLeft } from 'lucide-react';

interface YourNewComponentProps {
  onBack: () => void;
}

export default function YourNewComponent({ onBack }: YourNewComponentProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <button onClick={onBack} className="...">
          <ArrowLeft /> 返回
        </button>
        
        {/* 你的模块内容 */}
        <h1>新模块标题</h1>
        {/* ... */}
      </div>
    </div>
  );
}
```

2. 在App.tsx中集成

```typescript
// src/App.tsx
import YourNewComponent from './components/YourNewComponent';

function App() {
  const [showYourNew, setShowYourNew] = useState(false);
  
  if (showYourNew) {
    return <YourNewComponent onBack={() => setShowYourNew(false)} />;
  }
  
  return (
    // ... 主页
    <button onClick={() => setShowYourNew(true)}>
      新模块入口
    </button>
  );
}
```

---

## 📐 核心数据结构详解

### UserProgress 用户进度

```typescript
interface UserProgress {
  // 答题记录列表（所有答题历史）
  answerRecords: AnswerRecord[];
  
  // 错题本（题目ID -> 错误详情）
  wrongQuestions: Map<string, WrongQuestion>;
  
  // 已完成题目ID集合
  completedQuestions: Set<string>;
  
  // 已斩杀题目ID集合（连续3次答对或手动斩杀）
  killedQuestions: Set<string>;
  
  // 连续答对次数记录（题目ID -> 次数）
  consecutiveCorrect: Map<string, number>;
  
  // 当前学习模式
  currentMode: ExamMode;
  
  // 最后活跃时间戳
  lastActiveTime: number;
  
  // 考试历史记录
  examHistory: ExamResult[];
  
  // 闪卡进度（可选，闪卡系统专用）
  flashCardProgress?: Map<string, FlashCardProgress>;
  chapterProgress?: Map<string, ChapterProgress>;
  totalFlashCardsStudied?: number;
  totalMasteredCards?: number;
  currentStreak?: number;
}
```

**数据持久化**:
- 自动保存：每次答题、斩杀、模式切换时自动保存
- 存储位置：LocalStorage (key: `rank1_exam_progress`)
- 序列化：Map和Set会转换为数组存储

### Question 题目结构

```typescript
interface Question {
  id: string;                    // 唯一标识，如 "q001"
  type: QuestionType;            // 题型
  stem: string;                  // 题干（支持HTML）
  options: Option[];             // 选项列表
  answer: string;                // 正确答案
  explain: string;               // 详细解析（支持HTML）
  keywords?: string[];           // 关键词（背题模式高亮用）
  mnemonic?: string;             // 助记口诀
}

interface Option {
  key: string;                   // 选项标识 "A", "B", "C", "D"
  text: string;                  // 选项内容（支持HTML）
}

type QuestionType = 
  | 'single'     // 单选：answer = "A"
  | 'multi'      // 多选：answer = "ABC"
  | 'boolean'    // 判断：answer = "true" 或 "false"
  | 'fill';      // 填空：answer = "答案1;答案2;答案3"
```

### ExamMode 学习模式

```typescript
type ExamMode = 
  | 'study'      // 背题模式：顺序学习，显示历史
  | 'practice'   // 刷题模式：乱序，不显示历史
  | 'review'     // 错题回顾：仅错题，按错误次数排序
  | 'exam';      // 模拟考试：智能组卷，延迟反馈

// 模式对比
const modeConfig = {
  study: {
    questionOrder: '固定顺序',
    shuffleOptions: false,
    showHistory: true,
    autoSave: true,
    target: '初次学习、系统掌握'
  },
  practice: {
    questionOrder: '随机乱序',
    shuffleOptions: true,
    showHistory: false,
    autoSave: true,
    target: '巩固记忆、自我测试'
  },
  review: {
    questionOrder: '错误次数降序',
    shuffleOptions: false,
    showHistory: true,
    autoSave: true,
    target: '针对性复习、查漏补缺'
  },
  exam: {
    questionOrder: '智能生成（错题优先）',
    shuffleOptions: true,
    showHistory: false,
    autoSave: '仅记录错题',
    target: '考前模拟、检验水平'
  }
};
```

---

## 🎨 UI定制详细指南

### 修改主题色系

#### 1. 全局配置主题色

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        // 定义你的品牌色
        brand: {
          50: '#eff6ff',   // 最浅
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',  // 主色
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',  // 最深
        }
      }
    }
  }
}
```

#### 2. 应用主题色到组件

```tsx
// 渐变背景
className="bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200"

// 按钮
className="bg-brand-500 hover:bg-brand-600 text-white"

// 文字
className="text-brand-700 font-bold"

// 边框
className="border-2 border-brand-400"
```

#### 3. 预设主题方案

**蓝色系（学术风格）**:
```tsx
from-blue-50 via-indigo-50 to-cyan-50
bg-blue-500 hover:bg-blue-600
```

**绿色系（清新风格）**:
```tsx
from-green-50 via-emerald-50 to-teal-50
bg-green-500 hover:bg-green-600
```

**紫色系（现代风格）**:
```tsx
from-purple-50 via-violet-50 to-fuchsia-50
bg-purple-500 hover:bg-purple-600
```

**橙色系（活力风格）**:
```tsx
from-orange-50 via-amber-50 to-yellow-50
bg-orange-500 hover:bg-orange-600
```

### 布局调整

#### 1. 主页网格布局

```tsx
// 2x2网格（默认）
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

// 3列网格
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// 4列网格
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

// 1列（全屏宽）
<div className="grid grid-cols-1 gap-6">
```

#### 2. 响应式文字大小

```tsx
// 小 -> 中 -> 大 -> 超大
className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"

// 标题
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"

// 副标题
className="text-lg sm:text-xl md:text-2xl"
```

#### 3. 间距调整

```tsx
// 内边距
className="p-2 sm:p-4 md:p-6 lg:p-8"

// 外边距
className="m-2 sm:m-4 md:m-6 lg:m-8"

// 间隙
className="gap-2 sm:gap-4 md:gap-6"
```

#### 4. 卡片圆角和阴影

```tsx
// 圆角
className="rounded-lg"      // 8px
className="rounded-xl"      // 12px
className="rounded-2xl"     // 16px
className="rounded-3xl"     // 24px

// 阴影
className="shadow-sm"       // 小阴影
className="shadow-md"       // 中阴影
className="shadow-lg"       // 大阴影
className="shadow-xl"       // 超大阴影
className="shadow-2xl"      // 最大阴影
```

### 动画效果

#### 1. 悬停动画

```tsx
// 放大
className="transform hover:scale-105 transition-all duration-300"

// 上移
className="transform hover:-translate-y-2 transition-all duration-300"

// 旋转
className="transform hover:rotate-3 transition-all duration-300"

// 组合
className="transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
```

#### 2. 点击动画

```tsx
// 缩小反馈
className="active:scale-95 transition-all"

// 组合悬停和点击
className="transform hover:scale-105 active:scale-95 transition-all duration-300"
```

#### 3. 渐入动画

```tsx
// 淡入
className="animate-fade-in"

// 从下滑入
className="animate-slide-up"

// 弹跳
className="animate-bounce"

// 脉冲
className="animate-pulse"
```

#### 4. 自定义动画（需在tailwind.config.js配置）

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    }
  }
}
```

---

## 🚀 性能优化建议

### 1. 题库大小优化

**问题**: 题目超过1000道时，初次加载慢

**解决方案A**: 分批加载
```typescript
// src/data/index.ts
export const questionBank: Question[] = [];

// 异步加载
export async function loadQuestions(chapterIds: string[]) {
  const chunks = await Promise.all(
    chapterIds.map(id => import(`./chapters/${id}.ts`))
  );
  return chunks.flatMap(c => c.questions);
}
```

**解决方案B**: 虚拟滚动
```tsx
// 安装
npm install react-window

// 使用
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={questions.length}
  itemSize={100}
  width="100%"
>
  {({ index, style }) => (
    <div style={style}>
      <QuestionCard question={questions[index]} />
    </div>
  )}
</FixedSizeList>
```

### 2. 图片资源优化

**压缩图片**:
```bash
# 安装工具
npm install imagemin imagemin-webp

# 转换为WebP
imagemin images/*.{jpg,png} --plugin=webp --out-dir=images/webp
```

**使用picture标签**:
```tsx
<picture>
  <source srcSet="/images/hero.webp" type="image/webp" />
  <source srcSet="/images/hero.jpg" type="image/jpeg" />
  <img src="/images/hero.jpg" alt="Hero" />
</picture>
```

**懒加载**:
```tsx
<img 
  src="/images/large.jpg" 
  loading="lazy"  // 原生懒加载
  alt="Large image"
/>
```

### 3. 代码分割

**组件懒加载**:
```typescript
// src/App.tsx
import { lazy, Suspense } from 'react';

const SystematicLearning = lazy(() => import('./components/SystematicLearning'));
const KnowledgeSnapshot = lazy(() => import('./components/KnowledgeSnapshot'));

function App() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      {showSystematic && <SystematicLearning />}
      {showSnapshot && <KnowledgeSnapshot />}
    </Suspense>
  );
}
```

**路由级代码分割**:
```typescript
// 使用React Router时
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Study = lazy(() => import('./pages/Study'));

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/study" element={<Study />} />
</Routes>
```

### 4. LocalStorage优化

**压缩存储数据**:
```typescript
// 安装LZ-String
npm install lz-string

// src/utils/storage.ts
import LZString from 'lz-string';

export function saveProgress(progress: UserProgress): void {
  const serialized = JSON.stringify(progress);
  const compressed = LZString.compress(serialized);
  localStorage.setItem(STORAGE_KEY, compressed);
}

export function loadProgress(): UserProgress {
  const compressed = localStorage.getItem(STORAGE_KEY);
  if (!compressed) return getInitialProgress();
  
  const decompressed = LZString.decompress(compressed);
  return JSON.parse(decompressed);
}
```

**定期清理过期数据**:
```typescript
// 清理7天前的答题记录
export function cleanOldRecords(progress: UserProgress): UserProgress {
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  
  return {
    ...progress,
    answerRecords: progress.answerRecords.filter(
      r => r.timestamp > sevenDaysAgo
    )
  };
}
```

### 5. Memo化优化

**使用useMemo缓存计算结果**:
```typescript
const expensiveValue = useMemo(() => {
  return questions.filter(q => q.type === 'single');
}, [questions]);
```

**使用useCallback缓存函数**:
```typescript
const handleSubmit = useCallback((answer: string) => {
  // 处理逻辑
}, [dependencies]);
```

**使用React.memo优化组件**:
```typescript
const QuestionCard = React.memo(({ question, onAnswer }) => {
  // 组件逻辑
}, (prevProps, nextProps) => {
  // 自定义比较逻辑
  return prevProps.question.id === nextProps.question.id;
});
```

---

## 📦 部署指南

### 静态托管平台部署

#### 1. Vercel部署（推荐）

```bash
# 1. 安装Vercel CLI
npm i -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel

# 4. 生产部署
vercel --prod
```

**配置文件** (vercel.json):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### 2. Netlify部署

**方式一：拖拽部署**
```bash
# 1. 构建
npm run build

# 2. 访问 https://app.netlify.com/drop
# 3. 拖拽dist文件夹到页面
```

**方式二：命令行部署**
```bash
# 1. 安装CLI
npm i -g netlify-cli

# 2. 登录
netlify login

# 3. 部署
netlify deploy

# 4. 生产部署
netlify deploy --prod
```

**配置文件** (netlify.toml):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 3. GitHub Pages部署

```bash
# 1. 安装gh-pages
npm install -D gh-pages

# 2. 修改package.json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}

# 3. 修改vite.config.ts
export default defineConfig({
  base: '/仓库名/',  // 重要！
})

# 4. 部署
npm run deploy
```

**GitHub Actions自动部署**:
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install and Build
        run: |
          npm install
          npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 服务器部署

#### Nginx部署

**1. 构建**
```bash
npm run build
```

**2. 上传dist文件夹到服务器**
```bash
# 使用scp
scp -r dist/* user@server:/var/www/exam-rank1/
```

**3. 配置Nginx**
```nginx
# /etc/nginx/sites-available/exam-rank1
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/exam-rank1;
    index index.html;
    
    # SPA路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 启用gzip压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json;
    
    # 静态资源缓存
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**4. 启用配置并重启**
```bash
sudo ln -s /etc/nginx/sites-available/exam-rank1 /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### Docker部署

**Dockerfile**:
```dockerfile
# 构建阶段
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 运行阶段
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf**:
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

**构建和运行**:
```bash
# 构建镜像
docker build -t exam-rank1 .

# 运行容器
docker run -d -p 80:80 --name exam-rank1-app exam-rank1
```

---

## 🐛 常见问题FAQ

### Q1: LocalStorage存储空间不足怎么办？

**问题**: LocalStorage限制为5MB，题库过大或答题记录过多会超出限制。

**解决方案**:

**方案A**: 使用IndexedDB（推荐）
```typescript
// 安装idb
npm install idb

// src/utils/idb-storage.ts
import { openDB } from 'idb';

const DB_NAME = 'exam-rank1-db';
const STORE_NAME = 'progress';

async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME);
    },
  });
}

export async function saveProgressIDB(progress: UserProgress) {
  const db = await initDB();
  await db.put(STORE_NAME, progress, 'current');
}

export async function loadProgressIDB(): Promise<UserProgress | null> {
  const db = await initDB();
  return db.get(STORE_NAME, 'current');
}
```

**方案B**: 压缩数据
```typescript
import LZString from 'lz-string';

export function saveProgress(progress: UserProgress) {
  const compressed = LZString.compress(JSON.stringify(progress));
  localStorage.setItem(STORAGE_KEY, compressed);
}
```

**方案C**: 定期清理
```typescript
// 只保留最近30天的答题记录
const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
progress.answerRecords = progress.answerRecords.filter(
  r => r.timestamp > thirtyDaysAgo
);
```

---

### Q2: 题目选项乱序不一致问题

**问题**: 同一题目每次刷新选项顺序不同，导致学生困惑。

**解决方案**: 使用确定性种子乱序

```typescript
// 已在useExamEngine中实现
const shuffledOptions = useShuffleWithSeed(
  currentQuestion?.options || [],
  `${currentQuestion?.id}_${mode}`  // 使用题目ID+模式作为种子
);

// 确保同一题目在同一模式下选项顺序一致
```

**注意**: 如果需要每次都随机，传入时间戳作为种子：
```typescript
const seed = `${questionId}_${Date.now()}`;
```

---

### Q3: 如何在题目中添加图片？

**方案A**: 直接在题干中使用img标签
```typescript
{
  id: 'q001',
  type: 'single',
  stem: `
    <p>下图展示的是什么？</p>
    <img src="/images/diagram.png" alt="示意图" class="w-full max-w-md mx-auto rounded-lg shadow-md" />
    <p>请选择正确答案：</p>
  `,
  options: [...]
}
```

**方案B**: 使用Markdown语法（需要集成Markdown解析器）
```bash
npm install react-markdown
```

```typescript
import ReactMarkdown from 'react-markdown';

// 组件中使用
<ReactMarkdown>{question.stem}</ReactMarkdown>

// 题干格式
stem: `
下图展示的是什么？

![示意图](/images/diagram.png)

请选择正确答案：
`
```

---

### Q4: 如何支持LaTeX数学公式？

**安装KaTeX**:
```bash
npm install katex react-katex
```

**使用方式**:
```typescript
// 方案A: 内联公式
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// 内联
<InlineMath math="E = mc^2" />

// 块级
<BlockMath math="\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}" />

// 方案B: 在题干中使用分隔符
stem: `计算 $E = mc^2$ 中的能量值。`

// 然后用正则替换
const renderMath = (text: string) => {
  return text.replace(/\$(.*?)\$/g, (match, math) => {
    return `<InlineMath>${math}</InlineMath>`;
  });
};
```

---

### Q5: 如何导出/导入学习进度？

**已实现功能** (src/utils/storage.ts):

```typescript
// 导出进度为JSON文件
export function exportProgress(): string {
  const progress = loadProgress();
  return JSON.stringify({
    answerRecords: progress.answerRecords,
    wrongQuestions: Array.from(progress.wrongQuestions.entries()),
    completedQuestions: Array.from(progress.completedQuestions),
    killedQuestions: Array.from(progress.killedQuestions),
    consecutiveCorrect: Array.from(progress.consecutiveCorrect.entries()),
    currentMode: progress.currentMode,
    lastActiveTime: progress.lastActiveTime,
    exportTime: new Date().toISOString(),
  }, null, 2);
}

// 导入进度
export function importProgress(jsonString: string): boolean {
  try {
    const data = JSON.parse(jsonString);
    // 验证数据格式...
    saveProgress(convertToUserProgress(data));
    return true;
  } catch (error) {
    console.error('导入失败:', error);
    return false;
  }
}
```

**添加UI按钮**:
```tsx
// 在设置页面添加
<button onClick={() => {
  const data = exportProgress();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `progress_${Date.now()}.json`;
  a.click();
}}>
  导出学习进度
</button>

<input 
  type="file" 
  accept=".json"
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const success = importProgress(event.target?.result as string);
      alert(success ? '导入成功！' : '导入失败！');
    };
    reader.readAsText(file);
  }}
/>
```

---

### Q6: 如何添加打印功能？

**方案A**: CSS打印样式
```css
/* src/print.css */
@media print {
  /* 隐藏不需要打印的元素 */
  .no-print, button, nav, .sidebar {
    display: none !important;
  }
  
  /* 打印时展开所有折叠内容 */
  details {
    display: block;
  }
  
  /* 避免内容被分页截断 */
  .question-card {
    page-break-inside: avoid;
  }
  
  /* 设置页边距 */
  @page {
    margin: 2cm;
  }
}
```

**方案B**: 使用react-to-print
```bash
npm install react-to-print
```

```typescript
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function ExamPage() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <button onClick={handlePrint} className="no-print">
        打印试卷
      </button>
      
      <div ref={componentRef}>
        {/* 要打印的内容 */}
        {questions.map(q => <QuestionCard key={q.id} question={q} />)}
      </div>
    </>
  );
}
```

---

### Q7: 移动端体验不佳怎么优化？

**优化清单**:

1. **触摸友好的交互**
```tsx
// 增大点击区域
className="py-4 px-6"  // 至少44x44px

// 禁用长按菜单
onContextMenu={(e) => e.preventDefault()}

// 优化滚动
className="overflow-y-auto -webkit-overflow-scrolling-touch"
```

2. **防止误操作**
```tsx
// 添加确认对话框
const handleDelete = () => {
  if (window.confirm('确定要删除吗？')) {
    // 执行删除
  }
};

// 防抖处理
import { debounce } from 'lodash';
const debouncedSubmit = debounce(handleSubmit, 300);
```

3. **优化字体大小**
```tsx
// 移动端使用更大的字体
className="text-base sm:text-sm md:text-base"

// 确保最小字体不小于14px
<p className="text-sm min-[14px]">
```

4. **横屏适配**
```css
/* 横屏时调整布局 */
@media (orientation: landscape) and (max-height: 600px) {
  .header {
    padding: 0.5rem;
  }
  
  .question-card {
    max-height: 80vh;
    overflow-y: auto;
  }
}
```

5. **PWA支持**
```json
// public/manifest.json
{
  "name": "ExamRank1",
  "short_name": "复习系统",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#3b82f6",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 📚 进阶扩展

### 1. 添加用户系统

**使用Firebase Authentication**:

```bash
npm install firebase
```

```typescript
// src/utils/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 保存进度到云端
export async function saveProgressToCloud(userId: string, progress: UserProgress) {
  const progressRef = doc(db, 'users', userId, 'progress', 'current');
  await setDoc(progressRef, serializeProgress(progress));
}

// 从云端加载进度
export async function loadProgressFromCloud(userId: string): Promise<UserProgress | null> {
  const progressRef = doc(db, 'users', userId, 'progress', 'current');
  const snapshot = await getDoc(progressRef);
  
  if (snapshot.exists()) {
    return deserializeProgress(snapshot.data());
  }
  return null;
}
```

**登录组件**:
```tsx
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './utils/firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // 登录成功后加载云端进度
    } catch (error) {
      alert('登录失败');
    }
  };

  return (
    <div>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="邮箱"
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder="密码"
      />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}
```

---

### 2. 添加排行榜系统

**数据结构**:
```typescript
interface Leaderboard {
  userId: string;
  username: string;
  avatar: string;
  stats: {
    totalQuestions: number;
    correctRate: number;
    streak: number;          // 连续学习天数
    totalStudyTime: number;  // 总学习时长（分钟）
  };
  rank: number;
  lastUpdated: number;
}
```

**Firestore查询**:
```typescript
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export async function getLeaderboard(limitCount: number = 100): Promise<Leaderboard[]> {
  const leaderboardRef = collection(db, 'leaderboard');
  const q = query(
    leaderboardRef,
    orderBy('stats.correctRate', 'desc'),
    orderBy('stats.totalQuestions', 'desc'),
    limit(limitCount)
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    userId: doc.id,
    ...doc.data()
  } as Leaderboard));
}
```

**排行榜组件**:
```tsx
function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<Leaderboard[]>([]);

  useEffect(() => {
    getLeaderboard(50).then(setLeaderboard);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">🏆 学霸排行榜</h2>
      
      {leaderboard.map((user, index) => (
        <div key={user.userId} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
          <div className="text-2xl font-bold">
            {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
          </div>
          
          <img src={user.avatar} alt={user.username} className="w-12 h-12 rounded-full" />
          
          <div className="flex-1">
            <div className="font-bold">{user.username}</div>
            <div className="text-sm text-gray-600">
              正确率 {user.stats.correctRate}% · 
              已做 {user.stats.totalQuestions}题 · 
              坚持 {user.stats.streak}天
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-lg font-bold text-blue-600">
              {user.stats.correctRate}%
            </div>
            <div className="text-xs text-gray-500">正确率</div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

### 3. AI功能增强

**接入OpenAI API生成解析**:

```typescript
// src/utils/openai.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true  // 仅用于演示，生产环境应通过后端调用
});

export async function generateExplanation(
  question: string,
  correctAnswer: string
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: '你是一个专业的教学助手，擅长用简单易懂的语言解释复杂概念。'
      },
      {
        role: 'user',
        content: `题目：${question}\n正确答案：${correctAnswer}\n\n请生成一段详细的解析，帮助学生理解为什么这个答案是正确的。`
      }
    ],
    temperature: 0.7,
    max_tokens: 500
  });

  return response.choices[0].message.content || '';
}

// 生成助记口诀
export async function generateMnemonic(
  question: string,
  answer: string
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: '你是一个记忆大师，擅长创造有趣的助记口诀。使用Emoji、谐音、场景联想等方式帮助记忆。'
      },
      {
        role: 'user',
        content: `题目：${question}\n答案：${answer}\n\n请生成一个简短有趣的助记口诀（不超过50字）。`
      }
    ],
    temperature: 0.9,
    max_tokens: 100
  });

  return response.choices[0].message.content || '';
}
```

**在组件中使用**:
```tsx
function QuestionCard({ question }: { question: Question }) {
  const [aiExplanation, setAiExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateAI = async () => {
    setLoading(true);
    try {
      const explanation = await generateExplanation(
        question.stem,
        question.answer
      );
      setAiExplanation(explanation);
    } catch (error) {
      alert('AI生成失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* 题目内容 */}
      
      {/* AI解析按钮 */}
      <button onClick={handleGenerateAI} disabled={loading}>
        {loading ? '生成中...' : '🤖 AI智能解析'}
      </button>
      
      {aiExplanation && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <div className="font-bold mb-2">🤖 AI解析</div>
          <div>{aiExplanation}</div>
        </div>
      )}
    </div>
  );
}
```

---

### 4. 数据可视化

**学习曲线图**:

```bash
npm install recharts
```

```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function LearningCurve({ answerRecords }: { answerRecords: AnswerRecord[] }) {
  // 按日期聚合数据
  const data = useMemo(() => {
    const dailyStats = new Map<string, { date: string; correct: number; wrong: number }>();
    
    answerRecords.forEach(record => {
      const date = new Date(record.timestamp).toLocaleDateString();
      
      if (!dailyStats.has(date)) {
        dailyStats.set(date, { date, correct: 0, wrong: 0 });
      }
      
      const stats = dailyStats.get(date)!;
      if (record.isCorrect) {
        stats.correct++;
      } else {
        stats.wrong++;
      }
    });
    
    return Array.from(dailyStats.values()).sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [answerRecords]);

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-2xl font-bold mb-4">📈 学习曲线</h3>
      
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="correct" stroke="#10b981" name="答对" />
        <Line type="monotone" dataKey="wrong" stroke="#ef4444" name="答错" />
      </LineChart>
    </div>
  );
}
```

**知识点掌握热力图**:
```tsx
import { useMemo } from 'react';

function KnowledgeHeatmap({ questions, completedQuestions }: {
  questions: Question[];
  completedQuestions: Set<string>;
}) {
  // 按章节统计掌握率
  const heatmapData = useMemo(() => {
    const chapterStats = new Map<string, { total: number; completed: number }>();
    
    questions.forEach(q => {
      const chapter = q.id.split('-')[0];  // 假设ID格式为 "chp1-001"
      
      if (!chapterStats.has(chapter)) {
        chapterStats.set(chapter, { total: 0, completed: 0 });
      }
      
      const stats = chapterStats.get(chapter)!;
      stats.total++;
      if (completedQuestions.has(q.id)) {
        stats.completed++;
      }
    });
    
    return Array.from(chapterStats.entries()).map(([chapter, stats]) => ({
      chapter,
      rate: (stats.completed / stats.total) * 100
    }));
  }, [questions, completedQuestions]);

  return (
    <div className="grid grid-cols-5 gap-2">
      {heatmapData.map(({ chapter, rate }) => (
        <div
          key={chapter}
          className={`p-4 rounded-lg text-center ${
            rate >= 80 ? 'bg-green-500 text-white' :
            rate >= 60 ? 'bg-yellow-500 text-white' :
            rate >= 40 ? 'bg-orange-500 text-white' :
            'bg-red-500 text-white'
          }`}
        >
          <div className="font-bold">{chapter}</div>
          <div className="text-2xl">{rate.toFixed(0)}%</div>
        </div>
      ))}
    </div>
  );
}
```

---

## 🙏 鸣谢

感谢以下开源项目和资源:
- [React](https://react.dev/) - UI框架
- [Vite](https://vitejs.dev/) - 构建工具
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Lucide React](https://lucide.dev/) - 图标库
- [Mermaid](https://mermaid.js.org/) - 图表渲染
- [TypeScript](https://www.typescriptlang.org/) - 类型系统

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！⭐**

**📢 欢迎Fork后改造成自己的课程复习网站！**

**💬 遇到问题？提Issue或PR，我会尽快回复！**

Made with ❤️ by lvzaixian

© 2025 ExamRank1 Framework · MIT License

</div>
