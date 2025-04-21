// src/app/jobs/[id]/page.jsx
'use client';

import { jobs } from '../../../data /jobs';  // make sure path is correct
import { Share2 } from 'lucide-react';

export default function JobDetailPage({ params }) {
    const jobId = Number(params.id);
    const job   = jobs.find(j => j.id === jobId);

    if (!job) {
        return (
            <div className="p-10 text-red-500">
                ❌ Job not found
            </div>
        );
    }

    const shareJob = () => {
        // Only title + link
        const text = `${job.title}\n${window.location.href}`;
        const waLink = `https://wa.me/?text=${encodeURIComponent(text)}`;

        if (navigator.share) {
            navigator
                .share({
                    title: job.title,
                    text,
                    url: window.location.href
                })
                .catch(console.error);
        } else {
            window.open(waLink, '_blank');
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
            <h1 className="text-2xl font-bold text-blue-700">{job.title}</h1>
            <p><strong>Organization:</strong> {job.org}</p>
            <p className="text-red-600 font-bold">
                <strong>Deadline:</strong> {job.deadline}
            </p>

            <div>
                <h2 className="text-lg font-semibold">Job Description</h2>
                <p className="mt-2 text-gray-800">{job.description}</p>
            </div>

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

                <button
                    onClick={shareJob}
                    className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                </button>
            </div>
        </div>
    );
}