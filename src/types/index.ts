/**
 * ExamRank1 核心类型定义
 * Linux系统与安全期末复习系统
 */

// 导入闪卡类型
import type { FlashCardProgress, ChapterProgress } from './flashcard';

// ==================== 题目相关类型 ====================

/**
 * 选项接口
 */
export interface Option {
  /** 选项标识 (如 A, B, C, D) */
  key: string;
  /** 选项文本内容 */
  text: string;
}

/**
 * 题目类型枚举
 */
export type QuestionType = 'single' | 'multi' | 'boolean' | 'fill';

/**
 * 题目接口
 */
export interface Question {
  /** 题目唯一标识符 */
  id: string;
  /** 题目类型 */
  type: QuestionType;
  /** 题干内容 */
  stem: string;
  /** 选项列表 (填空题时为空数组) */
  options: Option[];
  /** 正确答案 (单选: "A", 多选: "AB", 判断: "true"/"false", 填空: 答案文本) */
  answer: string;
  /** 答案解析 */
  explain: string;
  /** 关键词列表 (用于高亮显示) */
  keywords?: string[];
  /** AI 助记口诀 */
  mnemonic?: string;
}

// ==================== 用户进度相关类型 ====================

/**
 * 答题记录接口
 */
export interface AnswerRecord {
  /** 题目 ID */
  questionId: string;
  /** 用户答案 */
  userAnswer: string;
  /** 正确答案 */
  correctAnswer: string;
  /** 是否正确 */
  isCorrect: boolean;
  /** 答题时间戳 */
  timestamp: number;
  /** 答题模式 */
  mode: ExamMode;
}

/**
 * 错题记录接口
 */
export interface WrongQuestion {
  /** 题目 ID */
  questionId: string;
  /** 错误次数 */
  mistakeCount: number;
  /** 最后答错时间 */
  lastMistakeTime: number;
  /** 复习次数 */
  reviewCount: number;
  /** 最后一次的错误答案 */
  lastWrongAnswer?: string;
}

/**
 * 用户进度接口（扩展版）
 */
export interface UserProgress {
  // ===== 原有字段（题库模式） =====
  /** 答题记录列表 */
  answerRecords: AnswerRecord[];
  /** 错题本 */
  wrongQuestions: Map<string, WrongQuestion>;
  /** 已完成题目 ID 集合 */
  completedQuestions: Set<string>;
  /** 已斩杀题目 ID 集合 */
  killedQuestions: Set<string>;
  /** 题目连续答对次数记录 */
  consecutiveCorrect: Map<string, number>;
  /** 当前模式 */
  currentMode: ExamMode;
  /** 最后活跃时间 */
  lastActiveTime: number;
  /** 考试历史记录 */
  examHistory: ExamResult[];
  
  // ===== 新增字段（闪卡模式） =====
  /** 闪卡进度映射 */
  flashCardProgress?: Map<string, FlashCardProgress>;
  /** 章节进度映射 */
  chapterProgress?: Map<string, ChapterProgress>;
  /** 累计学习闪卡数 */
  totalFlashCardsStudied?: number;
  /** 累计掌握闪卡数 */
  totalMasteredCards?: number;
  /** 连续学习天数 */
  currentStreak?: number;
}

// ==================== 考试模式相关类型 ====================

/**
 * 考试模式枚举
 */
export type ExamMode = 'study' | 'practice' | 'review' | 'exam';

/**
 * 考试配置接口
 */
export interface ExamConfig {
  /** 单选题数量 */
  singleCount: number;
  /** 多选题数量 */
  multiCount: number;
  /** 判断题数量 */
  booleanCount: number;
  /** 是否乱序选项 */
  shuffleOptions: boolean;
  /** 是否限时 */
  timed: boolean;
  /** 时长(分钟) */
  duration?: number;
}

/**
 * 试卷接口
 */
export interface ExamPaper {
  /** 试卷 ID */
  id: string;
  /** 试卷标题 */
  title: string;
  /** 题目列表 */
  questions: Question[];
  /** 考试配置 */
  config: ExamConfig;
  /** 创建时间 */
  createdAt: number;
}

/**
 * 考试结果接口（存档记录）
 */
export interface ExamResult {
  /** 考试记录 ID */
  id: string;
  /** 试卷 ID */
  paperId: string;
  /** 考试开始时间 */
  startTime: number;
  /** 考试提交时间 */
  submittedAt: number;
  /** 用时(秒) */
  duration: number;
  /** 题目列表（含答案） */
  questions: Question[];
  /** 用户答案映射 */
  userAnswers: Map<string, string>;
  /** 正确题数 */
  correctCount: number;
  /** 总题数 */
  totalCount: number;
  /** 正确率（百分比） */
  accuracy: number;
}

// ==================== 组件 Props 类型 ====================

/**
 * 题目卡片组件 Props
 */
export interface QuestionCardProps {
  question: Question;
  currentAnswer: string;
  onAnswerChange: (answer: string) => void;
  showExplanation: boolean;
  highlightKeywords: boolean;
  shuffleOptions: boolean;
}

/**
 * 选项按钮组件 Props
 */
export interface OptionButtonProps {
  option: Option;
  isSelected: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
  disabled: boolean;
  onClick: () => void;
}

/**
 * 进度条组件 Props
 */
export interface ProgressProps {
  current: number;
  total: number;
  correctCount: number;
  wrongCount: number;
}

/**
 * 统计面板组件 Props
 */
export interface StatsProps {
  totalQuestions: number;
  completedQuestions: number;
  correctRate: number;
  wrongQuestionCount: number;
}

// ==================== LocalStorage 数据结构 ====================

/**
 * LocalStorage 存储的用户数据结构
 */
export interface StorageData {
  /** 答题记录 */
  answerRecords: AnswerRecord[];
  /** 错题本 (序列化为数组) */
  wrongQuestions: [string, WrongQuestion][];
  /** 已完成题目 ID 列表 */
  completedQuestions: string[];
  /** 已斩杀题目 ID 列表 */
  killedQuestions: string[];
  /** 题目连续答对次数 (序列化为数组) */
  consecutiveCorrect: [string, number][];
  /** 当前模式 */
  currentMode: ExamMode;
  /** 最后活跃时间 */
  lastActiveTime: number;
  /** 数据版本号 */
  version: string;
  /** 考试历史记录 */
  examHistory: ExamResult[];
}

// ==================== 工具函数类型 ====================

/**
 * 题目过滤器函数类型
 */
export type QuestionFilter = (question: Question) => boolean;

/**
 * 题目排序函数类型
 */
export type QuestionSorter = (a: Question, b: Question) => number;

// ==================== 系统化学习相关类型 ====================

/**
 * 课程章节接口
 */
export interface CourseChapter {
  /** 章节 ID */
  id: string;
  /** 章节标题 */
  title: string;
  /** 章节号 (chp1, chp2, ...) */
  chapterNumber: string;
  /** 章节概述 */
  overview: string;
  /** 核心知识骨架 */
  skeleton: KnowledgeSkeleton;
  /** 知识点列表 */
  sections: CourseSection[];
  /** 学习时长估计(分钟) */
  estimatedMinutes?: number;
  /** 图标 emoji */
  icon?: string;
}

/**
 * 核心知识骨架
 */
export interface KnowledgeSkeleton {
  /** 章节核心框架 */
  framework: string[];
  /** Mermaid 图表代码 */
  mermaidDiagram?: string;
  /** 结构化知识图谱（用于自定义渲染） */
  knowledgeMap?: KnowledgeMapData;
  /** 关键要点提示 */
  keyPoints: string[];
  /** 学习前瞄 */
  learningObjectives?: string[];
  /** 问题引入 - 大白话场景 */
  scenarioIntro?: {
    /** 场景标题 */
    title: string;
    /** 场景描述（问题情境） */
    description: string;
    /** 要解决的核心问题 */
    problems: string[];
  };
}

/**
 * 知识图谱数据结构
 */
export interface KnowledgeMapData {
  root: KnowledgeNode;
  chapters: KnowledgeChapter[];
}

export interface KnowledgeNode {
  id: string;
  title: string;
  level: number;
  color: string;
  icon: string;
}

export interface KnowledgeChapter extends KnowledgeNode {
  sections: KnowledgeSection[];
}

export interface KnowledgeSection extends KnowledgeNode {
  items: KnowledgeItem[];
}

export interface KnowledgeItem {
  id: string;
  title: string;
  icon: string;
}

/**
 * 课程小节接口
 */
export interface CourseSection {
  /** 小节 ID */
  id: string;
  /** 小节标题 */
  title: string;
  /** 小节号 (1.1, 1.2, ...) */
  sectionNumber: string;
  /** 内容块列表 */
  blocks: ContentBlock[];
}

/**
 * 内容块类型枚举
 */
export type ContentBlockType = 
  | 'text'      // 文本段落
  | 'list'      // 列表
  | 'table'     // 表格
  | 'code'      // 代码块
  | 'diagram'   // 图表 (Mermaid/PlantUML/Dot)
  | 'highlight' // 重点强调
  | 'tip'       // 提示信息
  | 'scenario'; // 场景代入

/**
 * 内容块接口
 */
export interface ContentBlock {
  /** 块 ID */
  id: string;
  /** 块类型 */
  type: ContentBlockType;
  /** 内容 */
  content: string;
  /** 助记口诀 */
  mnemonic?: string;
  /** 场景化联想 */
  scenario?: string;
  /** 关键词(用于高亮) */
  keywords?: string[];
  /** 图表类型 (diagram 类型专用) */
  diagramType?: 'mermaid' | 'plantuml' | 'dot';
  /** 语言类型 (code 类型专用) */
  language?: string;
}
