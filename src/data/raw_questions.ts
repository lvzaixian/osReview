import type { Question } from '../types';

export const rawQuestions: Question[] = [];

export const getQuestionBankStats = () => {
    return {
        total: 0,
        single: 0,
        multi: 0,
        boolean: 0,
        fill: 0,
        essay: 0,
        isComplete: true
    };
};
