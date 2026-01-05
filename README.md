# 📚 ExamRank1 - 通用课程复习框架

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**🎓 一个高度抽象、可复用的通用课程复习网站框架**  
**📖 支持多维度学习、AI助记、知识可视化、闪卡系统等完整功能生态**

[🏗️ 架构设计](#️-架构设计) • [✨ 功能特性](#-功能特性) • [🚀 快速开始](#-快速开始) • [📖 使用指南](#-使用指南) • [🔧 二次开发](#-二次开发)

</div>

---

## 🎯 项目定位

### 这不仅是一个复习系统，更是一个**可复用的课程学习框架**

本项目经过精心架构设计，从**Linux操作系统课程**的实际应用中抽象出通用的学习模式和功能模块，形成了一套**高度可扩展、易于定制**的课程复习网站框架。

**核心优势：**
- ✅ **高度抽象**：核心逻辑与业务数据完全解耦，换课程只需替换数据层
- ✅ **模块化设计**：六大学习模块独立开发，可自由组合
- ✅ **类型安全**：完整的TypeScript类型系统，编译期发现问题
- ✅ **状态管理**：基于Hooks的状态管理，支持进度持久化
- ✅ **响应式UI**：Tailwind CSS原子化设计，完美适配桌面/移动端

**适用场景：**
- 📚 各类课程期末复习系统
- 📝 职业资格考试备考平台
- 🎓 专业知识学习网站
- 🧠 语言学习记忆卡系统

---

## 🏗️ 架构设计

### 📐 整体架构图

```
┌────────────────────────────────────────────────────────────────────┐
│                        ExamRank1 框架架构                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                    展示层 (View Layer)                        │ │
│  ├──────────────────────────────────────────────────────────────┤ │
│  │  App.tsx - 主应用入口 & 路由控制                              │ │
│  │  ├─ 系统化学习 (SystematicLearning)    - 课程内容深度学习    │ │
│  │  ├─ 知识快照 (KnowledgeSnapshot)        - 核心考点提炼        │ │
│  │  ├─ 命令记忆卡 (LinuxCommandCards)      - 场景化命令记忆      │ │
│  │  ├─ 作业题回顾 (ModeSelector)           - 四种刷题模式        │ │
│  │  ├─ 题库浏览 (QuestionBank)             - 全题库检索          │ │
│  │  ├─ 大题背诵 (EssayMode)                - 简答论述题背诵      │ │
│  │  └─ 垃圾桶 (TrashBin)                   - 已斩杀题目管理      │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                   逻辑层 (Logic Layer)                        │ │
│  ├──────────────────────────────────────────────────────────────┤ │
│  │  useExamEngine.ts - 核心考试引擎                              │ │
│  │  ├─ 题目状态管理 (currentQuestion, shuffledQuestions)        │ │
│  │  ├─ 答题逻辑 (submitAnswer, 自动判题, 错题记录)              │ │
│  │  ├─ 进度追踪 (completedQuestions, wrongQuestions)            │ │
│  │  ├─ 智能斩杀 (连续3次答对自动移除)                           │ │
│  │  └─ 模式切换 (study/practice/review/exam)                    │ │
│  │                                                                │ │
│  │  useShuffle.ts - 选项乱序算法                                 │ │
│  │  ├─ Fisher-Yates 洗牌算法                                     │ │
│  │  └─ 确定性种子乱序 (保证同一题目乱序一致)                     │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                   数据层 (Data Layer)                         │ │
│  ├──────────────────────────────────────────────────────────────┤ │
│  │  src/data/                                                     │ │
│  │  ├─ raw_questions.ts       - 题库数据源                       │ │
│  │  ├─ course_chapters.ts     - 课程章节数据                     │ │
│  │  ├─ flashcards.ts          - 闪卡数据                         │ │
│  │  ├─ chapters.ts            - 章节元数据                       │ │
│  │  └─ index.ts               - 统一导出接口                     │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                  工具层 (Utility Layer)                       │ │
│  ├──────────────────────────────────────────────────────────────┤ │
│  │  storage.ts              - LocalStorage持久化                 │ │
│  │  examGenerator.ts        - 智能组卷算法 (错题优先)            │ │
│  │  knowledgeSnapshot.ts    - 知识快照数据处理                   │ │
│  │  mnemonic.ts             - 助记口诀数据                       │ │
│  │  ai_mnemonics.ts         - AI生成助记                         │ │
│  │  dedicated_mnemonics.ts  - 专业助记                           │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                  类型层 (Type Layer)                          │ │
│  ├──────────────────────────────────────────────────────────────┤ │
│  │  types/index.ts          - 核心类型定义                        │ │
│  │  ├─ Question, Option, QuestionType                            │ │
│  │  ├─ UserProgress, AnswerRecord, WrongQuestion                 │ │
│  │  ├─ ExamMode, ExamConfig, ExamResult                          │ │
│  │  ├─ CourseChapter, CourseSection, ContentBlock                │ │
│  │  └─ KnowledgeMapData, KnowledgeSkeleton                       │ │
│  │                                                                │ │
│  │  types/flashcard.ts      - 闪卡系统类型                       │ │
│  │  ├─ FlashCard, CardType                                       │ │
│  │  ├─ Chapter, FlashCardProgress                                │ │
│  │  └─ ChapterProgress                                            │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### 🎯 六大学习模块

#### 1️⃣ 系统化学习模块 (SystematicLearning)
**目标**: 深度课程内容可视化学习

**核心功能**:
- 📚 **章节骨架展示**: 树状知识图谱可视化
- 🎯 **学习前瞻**: 场景化问题引入，激发学习动机
- 🧩 **内容块渲染**: 支持7种内容类型 (text/list/table/code/diagram/highlight/tip)
- 📊 **Mermaid图表**: 流程图/思维导图自动渲染
- 💡 **助记口诀**: 每个知识点配备记忆辅助
- 🎨 **响应式折叠**: 章节/小节可折叠展开

**技术实现**:
- 使用`CourseChapter`类型定义章节结构
- `KnowledgeSkeleton`提供核心框架
- `ContentBlock`支持多种内容渲染

---

#### 2️⃣ 知识快照模块 (KnowledgeSnapshot)
**目标**: 核心考点提炼与背诵

**核心功能**:
- 🎯 **模块化组织**: 按知识模块分类 (如：安全管理、进程、网络)
- 🔑 **关键词标注**: `<strong>`标签高亮核心概念
- 👁️ **背诵模式**: 隐藏关键词，主动回忆训练
- 📝 **卡片式设计**: 每个知识点独立卡片
- 🎨 **颜色编码**: 不同模块使用不同色系
- 📊 **进度跟踪**: 显示已隐藏/总数

**技术实现**:
- `KnowledgeModule`类型定义模块结构
- 使用`<kw>`标签标记需要背诵的关键词
- 支持单卡片独立背诵模式

---

#### 3️⃣ 命令记忆卡模块 (LinuxCommandCards)
**目标**: 场景化命令学习与记忆

**核心功能**:
- 💻 **命令全景库**: 覆盖file/system/auth/network四大类
- 🎯 **选项详解**: 每个flag配备含义+使用场景
- 🧠 **助记口诀**: 谐音记忆 (如: ls=LiSt)
- 🎨 **视觉联想**: Emoji + 场景比喻
- 💡 **实战技巧**: 每个命令附带最佳实践
- 🔍 **智能搜索**: 实时过滤命令

**技术实现**:
- `CommandData`接口定义命令结构
- `CommandOption`详细描述每个选项
- 支持分类过滤和搜索

---

#### 4️⃣ 作业题回顾模块 (四种刷题模式)
**目标**: 多维度题目练习与考核

##### 📖 背题模式 (Study)
- **特性**: 顺序学习、关键词高亮、即时答案
- **适用**: 初次学习、系统掌握
- **实现**: 固定题目顺序，显示历史答题记录

##### ✍️ 刷题模式 (Practice)
- **特性**: 选项乱序、自动记录错题
- **适用**: 巩固记忆、自我测试
- **实现**: 随机乱序题目，临时答题记录

##### 🔄 错题回顾 (Review)
- **特性**: 仅显示错题、按错误次数排序
- **适用**: 针对性复习、查漏补缺
- **实现**: 过滤错题，降序排列

##### 📝 模拟考试 (Exam)
- **特性**: 智能组卷、延迟反馈、成绩报告
- **适用**: 考前模拟、检验水平
- **实现**: `examGenerator`智能选题，错题优先

**核心引擎**: `useExamEngine` Hook
```typescript
- 状态管理: currentIndex, mode, userProgress
- 答题逻辑: submitAnswer (自动判题、错题记录)
- 进度追踪: completedQuestions, wrongQuestions
- 智能斩杀: 连续3次答对自动移除
```

---

#### 5️⃣ 题库浏览模块 (QuestionBank)
**目标**: 全题库检索与管理

**核心功能**:
- 📋 **题型分类**: 按题型筛选 (单选/多选/判断/填空)
- 🔍 **全文搜索**: 题干/选项/解析全文检索
- 📊 **统计信息**: 题目总数、各类型占比
- 🎯 **快速预览**: 展开查看题目详情

---

#### 6️⃣ 大题背诵模块 (EssayMode)
**目标**: 简答题/论述题主动回忆训练

**核心功能**:
- 📝 **题目展示**: 显示题干和标准答案
- 🧠 **主动回忆**: 先回忆再展开答案
- ✅ **进度标记**: 标记已掌握题目

---

### 🎯 四大学习模式对比

| 模式 | 图标 | 核心特性 | 适用场景 |
|------|------|---------|---------|
| **背题模式** | 📖 | • 顺序学习<br>• 关键词高亮<br>• AI助记口诀<br>• 即时答案解析 | 初次学习、系统掌握 |
| **刷题模式** | ✍️ | • 选项乱序<br>• 错题强制复习<br>• 自动错题记录 | 巩固记忆、自我测试 |
| **错题回顾** | 🔄 | • 仅显示错题<br>• 按错误次数排序<br>• 支持移出错题本 | 针对性复习、查漏补缺 |
| **模拟考试** | 📝 | • 随机抽题组卷<br>• 延迟反馈<br>• 成绩统计与错题分析 | 考前模拟、检验水平 |

### 💡 智能功能

- **🎯 AI 助记口诀**：每道题目配备专业助记口诀，提升记忆效率
- **📊 进度追踪**：实时显示学习进度、正确率、错题数量
- **💾 自动保存**：基于 LocalStorage 的进度持久化，刷新不丢失
- **🎨 阅读模式**：背题/错题模式支持连续阅读视图，快速浏览复习
- **🗑️ 题目管理**：支持"斩杀"功能，已掌握题目不再显示
- **📱 响应式设计**：完美适配桌面端和移动端

### 🌟 模拟考试亮点

- ✅ 智能组卷：错题优先，确保重点题目出现
- ✅ 延迟反馈：答题时不显示对错，模拟真实考试
- ✅ 自动跳转：单选/判断点击选项自动跳转，多选提交后自动跳转
- ✅ 成绩报告：提交后显示分数、正确率、用时、错题列表
- ✅ 考试存档：支持查看历史考试记录

---

## 🚀 快速开始

### 📋 环境要求

- **Node.js**: >= 18.0.0
- **npm** 或 **pnpm**: 推荐使用 pnpm

### 📦 安装

```bash
# 克隆项目
git clone https://github.com/lvzaixian/ExamRank1.git

# 进入项目目录
cd ExamRank1

# 安装依赖（推荐使用 pnpm）
pnpm install

# 或使用 npm
npm install
```

### 🏃 运行

```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

访问 `http://localhost:5173` 开始使用！

---

## 📖 使用指南

### 基础操作

1. **选择学习模式**：首页点击相应的模式卡片
2. **答题操作**：
   - 单选/判断：点击选项即可提交
   - 多选：勾选选项后点击"提交答案"
3. **导航控制**：
   - 使用底部"上一题/下一题"按钮
   - 背题模式支持题目网格快速跳转
4. **状态管理**：
   - 重做：清除当前题目的答题记录
   - 已完成：标记为已掌握
   - 斩杀：移除题目（可在垃圾桶恢复）

### 高级功能

#### 阅读模式（背题/错题模式专属）

- 点击右上角图标切换到阅读模式
- 连续显示所有题目，适合快速浏览
- 支持点击题目头部打开题目网格
- 点击正确答案自动标记为已完成

#### 模拟考试流程

1. 进入模拟考试模式
2. 系统自动生成试卷（错题优先）
3. 按顺序完成所有题目
4. 最后一题点击"提交考试"
5. 查看成绩报告和错题分析

---

## 🛠️ 技术栈

### 核心框架

- **React 19.2.3** - UI 框架
- **TypeScript 5.9.3** - 类型系统
- **Vite 7.2.4** - 构建工具

### 样式方案

- **Tailwind CSS 4.1.18** - 原子化 CSS 框架
- **Lucide React** - 图标库

### 状态管理

- **React Hooks** - 本地状态管理
- **LocalStorage** - 数据持久化

---

## 📁 项目结构

```
ExamRank1/
├── src/
│   ├── components/           # UI 组件层
│   │   ├── ExamEngineTest.tsx    # 考试引擎主组件
│   │   ├── KnowledgeSnapshot.tsx # 知识快照组件
│   │   └── TrashBin.tsx          # 垃圾桶组件
│   │
│   ├── data/                 # 数据层
│   │   ├── raw_questions.ts      # 题目数据
│   │   ├── converted.json        # 转换后的题目数据
│   │   └── index.ts              # 数据导出
│   │
│   ├── hooks/                # 逻辑层
│   │   ├── useExamEngine.ts      # 核心考试引擎 Hook
│   │   └── useShuffle.ts         # 选项乱序 Hook
│   │
│   ├── types/                # 类型定义
│   │   └── index.ts              # TypeScript 类型定义
│   │
│   ├── utils/                # 工具函数
│   │   ├── storage.ts            # LocalStorage 封装
│   │   ├── examGenerator.ts      # 考试生成器
│   │   ├── mnemonic.ts           # 助记口诀工具
│   │   ├── ai_mnemonics.ts       # AI 生成的助记口诀
│   │   ├── dedicated_mnemonics.ts # 专业助记口诀
│   │   └── knowledgeSnapshot.ts  # 知识快照工具
│   │
│   ├── App.tsx               # 主应用组件
│   └── main.tsx              # 应用入口
│
├── scripts/                  # 脚本工具
│   ├── convert_questions.cjs     # 题目格式转换
│   └── generate_exact_mnemonics.cjs # 助记口诀生成
│
├── docs/                     # 文档
│   ├── datasource.html           # 原始题库数据源
│   └── questions.json            # 题目 JSON 数据
│
├── PROJECT_STRUCTURE.md      # 项目结构说明
├── TYPES_ARCHITECTURE.md     # 类型架构文档
└── README.md                 # 项目说明文档
```

---

## 🎨 核心设计

### 数据模型

```typescript
// 题目类型
interface Question {
  id: string;
  type: 'single' | 'multi' | 'boolean';
  stem: string;
  options: Option[];
  answer: string;
  explain: string;
}

// 用户进度
interface UserProgress {
  answerRecords: AnswerRecord[];
  wrongQuestions: Map<string, WrongQuestion>;
  completedQuestions: Set<string>;
  killedQuestions: Set<string>;
  examHistory: ExamResult[];
}
```

### 学习模式

| 模式 | 题目顺序 | 选项乱序 | 显示历史 | 自动保存 |
|------|---------|---------|---------|---------|
| study | 固定顺序 | ❌ | ✅ | ✅ |
| practice | 随机乱序 | ✅ | ❌ | ✅ |
| review | 错误次数降序 | ❌ | ✅ | ✅ |
| exam | 智能生成 | ✅ | ❌ | 仅记录 |

---

## 🔧 开发指南

### 添加新题目

1. 编辑 `src/data/raw_questions.ts`
2. 按照现有格式添加题目数据
3. 运行转换脚本（如需要）

### 自定义助记口诀

编辑 `src/utils/dedicated_mnemonics.ts`：

```typescript
export const dedicatedMnemonics: Record<string, string> = {
  '题目ID': '助记口诀内容',
  // ...
};
```

### 构建部署

```bash
# 构建生产版本
pnpm build

# 输出目录: dist/
# 部署到静态服务器或 GitHub Pages
```

---

## 📊 数据统计

- **题目总数**: 300+ 道
- **覆盖知识点**: 网络服务与安全课程全部章节
- **助记口诀**: 200+ 条专业助记
- **代码量**: 20,000+ 行

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

---

## 👨‍💻 作者

**lvzaixian**

- GitHub: [@lvzaixian](https://github.com/lvzaixian)

---

## 🙏 致谢

- 感谢所有贡献者的付出
- 特别感谢网络服务与安全课程的老师们

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！⭐**

Made with ❤️ by lvzaixian

</div>
