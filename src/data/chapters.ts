/**
 * 章节配置
 * 操作系统复习章节
 */

import type { Chapter } from '../types/flashcard';

export const chapters: Chapter[] = [
  {
    id: 'os-intro',
    name: '第一章：操作系统引论',
    order: 1,
    examHint: {
      inExamA: [],
      inExamB: [],
      priority: 'medium'
    }
  },
  {
    id: 'process-mgmt',
    name: '第二章：进程的描述与控制',
    order: 2,
    examHint: {
        inExamA: [],
        inExamB: [],
        priority: 'high'
      }
  },
  {
    id: 'scheduling',
    name: '第三章：处理机调度与死锁',
    order: 3,
    examHint: {
        inExamA: [],
        inExamB: [],
        priority: 'high'
      }
  },
  {
    id: 'memory-mgmt',
    name: '第四章：存储器管理',
    order: 4,
    examHint: {
        inExamA: [],
        inExamB: [],
        priority: 'high'
      }
  },
  {
    id: 'virtual-memory',
    name: '第五章：虚拟存储器',
    order: 5,
    examHint: {
        inExamA: [],
        inExamB: [],
        priority: 'high'
      }
  },
  {
    id: 'io-mgmt',
    name: '第六章：输入输出系统',
    order: 6,
    examHint: {
        inExamA: [],
        inExamB: [],
        priority: 'medium'
      }
  },
  {
    id: 'file-mgmt',
    name: '第七章：文件管理',
    order: 7,
    examHint: {
        inExamA: [],
        inExamB: [],
        priority: 'medium'
      }
  },
   {
    id: 'disk-mgmt',
    name: '第八章：磁盘存储器管理',
    order: 8,
    examHint: {
        inExamA: [],
        inExamB: [],
        priority: 'medium'
      }
  }
];
