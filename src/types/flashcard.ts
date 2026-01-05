/**
 * 闪卡系统核心类型定义
 */

// ============ 章节相关 ============

export interface Chapter {
  id: string;                    // "ch1", "ch3", "ch3-sect1"
  name: string;                  // "第一章 系统安全管理"
  order: number;                 // 排序序号
  
  // AB卷考点标记
  examHint: {
    inExamA: string[];           // ["简答×1", "选择×1"]
    inExamB: string[];           // ["选择×1", "简答×1"]
    priority: 'high' | 'medium' | 'low'; // 考试优先级
  };
  
  // 进度统计（运行时计算）
  progress?: {
    totalCards: number;
    masteredCards: number;
    reviewCards: number;
    newCards: number;
  };
}

// ============ 闪卡相关 ============

export type CardType = 'fill' | 'choice' | 'short' | 'command';

export interface FlashCard {
  id: string;                    // "ch3-hw-001"
  chapterId: string;             // "ch3" 或 "ch3-sect1"
  source: 'homework' | 'custom'; // 来源：作业题 / 自定义
  type: CardType;                // 题型
  
  // 闪卡内容
  front: string;                 // 题干（问题）
  back: {
    answer: string;              // 标准答案
    explanation: string;         // 详细解析
    keyPoints?: string[];        // 关键词（简答题用）
  };
  
  // 元数据
  tags?: string[];               // 标签（如：["管道", "重定向"]）
  difficulty?: 1 | 2 | 3;       // 难度（1简单 3困难）
  
  // 状态追踪（运行时更新）
  status?: 'new' | 'learning' | 'mastered' | 'review';
  lastReviewTime?: number;
  reviewCount?: number;
  correctCount?: number;
}

// ============ 用户进度相关 ============

export interface FlashCardProgress {
  cardId: string;
  status: 'new' | 'learning' | 'mastered' | 'review';
  lastReviewTime: number;
  reviewCount: number;           // 复习次数
  correctCount: number;          // 答对次数
  wrongCount: number;            // 答错次数
  lastMark: 'wrong' | 'fuzzy' | 'correct'; // 最后一次评价
}

export interface ChapterProgress {
  chapterId: string;
  totalCards: number;
  masteredCards: number;
  reviewCards: number;
  newCards: number;
  lastStudyTime: number;
}
