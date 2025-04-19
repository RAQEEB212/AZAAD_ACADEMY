interface ResultCardProps {
    title: string;
    publishedDate: string;
    downloadLink: string;
}

export default function ResultCard({ title, publishedDate, downloadLink }: ResultCardProps) {
    return (
        <div className="bg-white p-4 shadow rounded-md border hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">Published: {publishedDate}</p>
            <a
                href={downloadLink}
                target="_blank"
                className="inline-block mt-2 text-sm text-blue-600 hover:underline"
            >
                View Result
            </a>
        </div>
    );
}