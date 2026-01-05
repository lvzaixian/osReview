/**
 * 章节配置
 * 基于AB卷.md手动创建
 */

import type { Chapter } from '../types/flashcard';

export const chapters: Chapter[] = [
  {
    id: 'ch1-2',
    name: '第一章/第二章：系统安全管理',
    order: 1,
    examHint: {
      inExamA: ['简答×1', '选择×1'],
      inExamB: ['选择×1', '简答×1'],
      priority: 'medium'
    }
  },
  {
    id: 'ch3-sect1',
    name: '第三章 第1节：Shell基础',
    order: 2,
    examHint: {
      inExamA: [],
      inExamB: ['填空×3', '选择×1', '简答×1'],
      priority: 'high'
    }
  },
  {
    id: 'ch3-sect2',
    name: '第三章 第2节：文件名及管理',
    order: 3,
    examHint: {
      inExamA: ['简答×2', '填空×5', '选择×1'],
      inExamB: ['填空×1', '选择×4'],
      priority: 'high'
    }
  },
  {
    id: 'ch4-sect1',
    name: '第四章 第1节：用户管理',
    order: 4,
    examHint: {
      inExamA: ['填空×1'],
      inExamB: ['填空×1'],
      priority: 'medium'
    }
  },
  {
    id: 'ch4-sect2',
    name: '第四章 第2节：用户属性',
    order: 5,
    examHint: {
      inExamA: ['选择×1'],
      inExamB: [],
      priority: 'low'
    }
  },
  {
    id: 'ch4-sect5',
    name: '第四章 第5节：密码管理',
    order: 6,
    examHint: {
      inExamA: [],
      inExamB: ['填空×1'],
      priority: 'low'
    }
  },
  {
    id: 'ch4-sect7',
    name: '第四章 第7节：su与sudo',
    order: 7,
    examHint: {
      inExamA: [],
      inExamB: ['填空×1'],
      priority: 'low'
    }
  },
  {
    id: 'ch5-sect2',
    name: '第五章 第2节：文件权限',
    order: 8,
    examHint: {
      inExamA: ['填空×1', '选择×2'],
      inExamB: ['填空×1'],
      priority: 'high'
    }
  },
  {
    id: 'ch5-sect3',
    name: '第五章 第3节：文件系统',
    order: 9,
    examHint: {
      inExamA: ['填空×1'],
      inExamB: [],
      priority: 'medium'
    }
  },
  {
    id: 'ch6-sect1',
    name: '第六章 第1节：进程概念',
    order: 10,
    examHint: {
      inExamA: ['填空×1'],
      inExamB: [],
      priority: 'medium'
    }
  },
  {
    id: 'ch6-sect3',
    name: '第六章 第3节：进程管理',
    order: 11,
    examHint: {
      inExamA: ['简答×1'],
      inExamB: ['简答×2'],
      priority: 'high'
    }
  },
  {
    id: 'ch7',
    name: '第七章：网络管理',
    order: 12,
    examHint: {
      inExamA: [],
      inExamB: [],
      priority: 'low'
    }
  }
];

// 导出章节映射（快速查询）
export const chapterMap = new Map(
  chapters.map(ch => [ch.id, ch])
);

// 导出章节ID列表（按顺序）
export const chapterIds = chapters.map(ch => ch.id);
