import { jobs } from '../../../data /jobs'; // Adjust if your path is different

export default function JobDetailPage({ params }) {
    const jobId = Number(params.id);
    const job = jobs.find((j) => j.id === jobId);

    if (!job) {
        return <div className="p-10 text-red-500">❌ Job not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
            <h1 className="text-2xl font-bold text-blue-700">{job.title}</h1>
            <p><strong>Organization:</strong> {job.org}</p>
            <p className="text-red-600"><strong>Deadline:</strong> {job.deadline}</p>

            <div className="flex gap-4 pt-4">
                <a
                    href={job.Apply}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Apply Now
                </a>

                {job.Advertisment && (
                    <a
                        href={job.Advertisment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                    >
                        View Advertisement
                    </a>
                )}
            </div>


        </div>
    );
}