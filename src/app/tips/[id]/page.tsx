'use client';

import { useParams } from 'next/navigation';
import { tips } from '@/data /tips';
import { tests } from '@/data /tests';

// ✅ Define type for the tips object
const typedTips: Record<number, string[]> = tips;

export default function TipsPage() {
    const { id } = useParams();
    const testId = Number(id);
    const test = tests.find((t) => t.id === testId);
    const testTips = typedTips[testId] || [];

    if (!test) return <p className="p-4">Tips not found.</p>;

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold mb-6">{test.title}</h1>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
                {testTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                ))}
            </ul>
        </div>
    );
}