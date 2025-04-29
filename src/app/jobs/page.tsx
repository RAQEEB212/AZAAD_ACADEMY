import JobCard from '@/components/JobCard';
import { jobs } from '../../data /jobs'; // (I also fixed your typo in the import path)

export default function JobsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Latest Job Announcements</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.slice(0).reverse().map((job) => (
                    <JobCard
                        key={job.id}
                        id={job.id}
                        title={job.title}
                        org={job.org}
                        deadline={job.deadline}
                    />
                ))}
            </div>
        </div>
    );
}