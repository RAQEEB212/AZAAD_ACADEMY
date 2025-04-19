interface TestCardProps {
    title: string;
    totalQuestions: number;
}

export default function TestCard({ title, totalQuestions }: TestCardProps) {
    return (
        <div className="bg-white p-4 shadow rounded-md border hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-green-700">{title}</h3>
            <p className="text-sm text-gray-600">Questions: {totalQuestions}</p>
            <button className="mt-2 px-4 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                Start Test
            </button>
        </div>
    );
}