import Link from 'next/link';
interface JobCardProps {
    id: number;
    title: string;
    org: string;
    deadline: string;
}

export default function JobCard({id, title, org, deadline }: JobCardProps) {
    return (
        <div className="bg-white p-4 shadow rounded-md border hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
            <p className="text-sm text-gray-600">Organization: {org}</p>
            <p className="text-sm text-red-500">Deadline: {deadline}</p>
<div className="flex flex-wrap  justify-between">
    <div>

    </div>
    <div>
        <Link
            href={`/jobs/${id}`}
            className="inline-block mt-2 text-blue-600 text-sm hover:underline"
        >
            View Details →
        </Link>

    </div>

</div>

        </div>
    );
}