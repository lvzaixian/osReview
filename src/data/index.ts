/**
 * 数据层统一导出
 * 
 * 这个文件负责：
 * 1. 整合原始题目数据
 * 2. 提供统一的题库访问接口
 * 3. 导出题目列表
 */

import { rawQuestions, getQuestionBankStats } from './raw_questions';
import type { Question } from '../types';

/**
 * 完整题库
 * 
 * 这是应用中使用的主要数据源
 */
export const questionBank: Question[] = rawQuestions;

/**
 * 获取题库完整统计信息
 */
export function getFullStats() {
  const bankStats = getQuestionBankStats();

  return {
    questionBank: bankStats,
    summary: {
      total: bankStats.total,
      isComplete: bankStats.isComplete,
    },
  };
}

/**
 * 打印题库统计信息（用于开发调试）
 */
export function logQuestionBankStats() {
  const stats = getFullStats();
  
  console.group('📚 ExamRank1 题库统计');
  console.log('总题数:', stats.questionBank.total);
  console.log('第一章:', stats.questionBank.ch1);
  console.log('第二章:', stats.questionBank.ch2);
  console.log('第三章:', stats.questionBank.ch3);
  console.log('数据完整:', stats.questionBank.isComplete ? '✅ 是' : '⚠️ 否（待补充）');
  console.groupEnd();

  return stats;
}

// 重新导出工具函数
export {
  getQuestionById,
  getQuestionsByChapter,
  getRandomQuestions,
  getExamQuestions,
} from './raw_questions';
