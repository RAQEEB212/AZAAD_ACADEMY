'use client';

import { useParams } from 'next/navigation';
import { mcqQuestions } from '@/data /mcqQuestions';
import { tests } from '@/data /tests';
import { useState } from 'react';

// ✅ Define the shape of an MCQ question
interface McqQuestion {
    id: number;
    question: string;
    options: string[];
    answer: number;
}

// ✅ Force mcqQuestions to be typed with numeric keys
const questionsByTestId: Record<number, McqQuestion[]> = mcqQuestions;

export default function McqTestPage() {
    const { id } = useParams();
    const testId = Number(id);

    const test = tests.find((t) => t.id === testId);
    const questions = questionsByTestId[testId] || [];

    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = () => {
        if (selected === questions[current].answer) {
            setScore(score + 1);
        }
        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setSelected(null);
        } else {
            setShowResult(true);
        }
    };

    if (!test) return <p className="p-4">Test not found.</p>;

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold mb-6">{test.title}</h1>

            {showResult ? (
                <div className="bg-green-100 p-4 rounded">
                    <h2 className="text-xl font-semibold">Test Completed!</h2>
                    <p>Your score: {score} / {questions.length}</p>
                </div>
            ) : (
                <div className="space-y-4">
                    <p className="font-medium">{questions[current].question}</p>
                    <div className="space-y-2">
                        {questions[current].options.map((option, i) => (
                            <button
                                key={i}
                                className={`block w-full text-left px-4 py-2 border rounded ${
                                    selected === i ? 'bg-blue-200' : 'bg-white'
                                }`}
                                onClick={() => setSelected(i)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleAnswer}
                        disabled={selected === null}
                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
                    >
                        {current + 1 === questions.length ? 'Finish' : 'Next'}
                    </button>
                </div>
            )}
        </div>
    );
}