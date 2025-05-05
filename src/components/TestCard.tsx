'use client';
import { useRouter } from 'next/navigation';

interface TestCardProps {
    id: number;
    title: string;
    totalQuestions: number;
    type: 'mcq' | 'subjective' | 'tips';
}

export default function TestCard({ id, title, totalQuestions, type }: TestCardProps) {
    const router = useRouter();

    const handleClick = () => {
        switch (type) {
            case 'mcq':
                router.push(`/mcq/${id}`);
                break;
            case 'subjective':
                router.push(`/subjective/${id}`);
                break;
            case 'tips':
                router.push(`/tips/${id}`);
                break;
            default:
                router.push(`/subjective/${id}`); // fallback route if type is unknown
                break;
        }
    };

    return (
        <div className="bg-white p-4 border rounded shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-600">Questions: {totalQuestions}</p>
            <button
                onClick={handleClick}
                className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
            >
                Start
            </button>
        </div>
    );
}