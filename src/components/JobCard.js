import Link from 'next/link';

export default function JobCard({ id, title, org, deadline }) {
    return (
        <Link href={`/jobs/${id}`} className="block">
            <div className="bg-white p-4 shadow rounded-md border hover:shadow-md transition cursor-pointer">
                <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
                <p className="text-sm text-gray-600">Organization: {org}</p>

                <div className="flex justify-between items-center mt-4">
                    <p className="text-sm font-bold text-red-500">Deadline: {deadline}</p>
                    <span className="text-sm text-blue-600 hover:underline">View Details →</span>
                </div>
            </div>
        </Link>
    );
}