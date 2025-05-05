'use client';
import TestCard from '@/components/TestCard';
import { tests } from '@/data /tests';

export default function TestsPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Practice Tests</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tests.map((test) => (
                    <TestCard
                        key={test.id}
                        id={test.id}
                        title={test.title}
                        totalQuestions={test.totalQuestions}
                        type={test.type}
                    />
                ))}
            </div>
        </div>
    );
}