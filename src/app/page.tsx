'use client';

import Link from 'next/link';
import JobCard from '@/components/JobCard';
import ResultCard from '@/components/ResultCard';
import TestCard from '@/components/TestCard';

import { jobs } from '@/data /jobs';
import { results } from '@/data /results';
import { tests } from '@/data /tests';

export default function HomePage() {
    return (
        <div className="max-w-7xl mb-32 pb-32 mx-auto px-4 py-10 space-y-16">
            {/* Welcome Section */}
            <section className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to Azaad Academy</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Your one-stop platform for Government Job Preparation — Jobs, Results, and Practice Tests.
                </p>
            </section>

            {/* Jobs Preview */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Latest Jobs</h2>
                    <Link
                        href="/jobs"
                        className="text-blue-600 text-sm hover:underline"
                    >
                        View All Jobs →
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jobs.slice(0, 2).map((job) => (
                        <JobCard key={job.id} {...job} />
                    ))}
                </div>
            </section>

            {/* Results Preview */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Latest Results</h2>
                    <Link
                        href="/results"
                        className="text-blue-600 text-sm hover:underline"
                    >
                        View All Results →
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {results.slice(0, 2).map((result) => (
                        <ResultCard key={result.id} {...result} />
                    ))}
                </div>
            </section>

            {/* Tests Preview */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">Practice Tests</h2>
                    <Link
                        href="/tests"
                        className="text-blue-600 text-sm hover:underline"
                    >
                        View All Tests →
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tests.slice(0, 2).map((test) => (
                        <TestCard key={test.id} {...test} />
                    ))}
                </div>
            </section>
        </div>
    );
}