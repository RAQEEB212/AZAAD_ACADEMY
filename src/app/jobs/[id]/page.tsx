import { jobs } from '@/data /jobs';
import Image from 'next/image';

export default function JobDetailPage({ params }: { params: { id: string } }) {
    const job = jobs.find((job) => job.id === Number(params.id));

    if (!job) return <div className="p-10">Job not found</div>;

    return (
        <div className="mb-32 pb-32 max-w-4xl mx-auto px-4 py-10 space-y-6">
            {/* Optional: Logo */}
            <Image
                src="/images/sindh-police-logo.png" // make sure this is inside /public/images
                alt="Sindh Police Logo"
                width={120}
                height={120}
                className="mx-auto"
            />

            <h1 className="text-2xl font-bold text-orange-600">{job.title}</h1>

            <p>
                <strong>Organization:</strong> {job.org}
            </p>
            <p>
                <strong>Posted On:</strong> 13-04-2025
            </p>
            <p className="text-red-600">
                <strong>Closing Date:</strong> {job.deadline}
            </p>

            <p className="text-amber-200 leading-relaxed">
                <strong>Project Description:</strong> Applications are invited from the legal heirs of
                Shaheed, Police Employees having domicile of Sindh Province (concerned Ranges) for recruitment against the following posts of Assistant Sub-Inspector (BPS-11) under the Shaheed Quota in Sindh Police.
            </p>

            <div className="flex gap-4 pt-4">
                <a
                    href={job.Apply}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Apply Now
                </a>

                <a
                    href="/flyers/sindh-police-asi-2025.png"
                    download
                    className="px-4 py-2 bg-gray-200 text-gray-700 border rounded hover:bg-gray-300"
                >
                    Download Advertisement
                </a>
            </div>
        </div>
    );
}