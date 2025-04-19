import ResultCard from '@/components/ResultCard';
import { results } from '@/data /results';

export default function ResultsPage() {
    console.log("Rendering result page...");
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Latest Results</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((result) => (
                    <ResultCard
                        key={result.id}
                        title={result.title}
                        publishedDate={result.publishedDate}
                        downloadLink={result.downloadLink}
                    />
                ))}
            </div>
        </div>
    );
}