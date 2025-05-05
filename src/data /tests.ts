// Define allowed types
export type TestType = 'mcq' | 'subjective' | 'tips';

export interface Test {
    id: number;
    title: string;
    totalQuestions: number;
    type: TestType;
}

// Apply type to the array
export const tests: Test[] = [
    {
        id: 1,
        title: 'English Grammar MCQ Test',
        totalQuestions: 10,
        type: 'mcq',
    },
    {
        id: 2,
        title: 'Essay Writing Practice',
        totalQuestions: 3,
        type: 'subjective',
    },
    {
        id: 3,
        title: 'Exam Tips & Tricks',
        totalQuestions: 5,
        type: 'tips',
    },
];