'use client';

import { useParams } from 'next/navigation';
import { subjectiveQuestions } from '@/data /subjectiveQuestions';
import { tests } from '@/data /tests';

export default function SubjectiveTestPage() {
    const { id } = useParams();
    const testId = Number(id);
    const test = tests.find((t) => t.id === testId);
    const questions = subjectiveQuestions[testId] || [];

    if (!test) return <p className="p-4">Test not found.</p>;

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold mb-6">{test.title}</h1>
            <ul className="space-y-6">
                {questions.map((q, i) => (
                    <li key={q.id}>
                        <p className="font-medium mb-2">{i + 1}. {q.question}</p>
                        <textarea
                            rows={4}
                            placeholder="Your Answer"
                            className="w-full p-2 border rounded"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}