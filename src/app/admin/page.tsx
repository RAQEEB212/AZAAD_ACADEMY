'use client';

export default function AdminDashboard() {
    return (
        <div className="max-w-7xl mb-32 mx-auto px-4 py-10 space-y-10">
            {/* Heading */}
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            {/* Admin Intro */}
            <div className="bg-white p-6 rounded-lg shadow border text-gray-700 leading-relaxed">
                <h2 className="text-2xl font-semibold mb-4">Meet the Team Behind Azaad Academy</h2>
                <p className="mb-4">
                    <strong>Mushtaq</strong> is a dedicated CSS aspirant who deeply understands the journey
                    of competitive exam preparation. He is responsible for curating high-quality, relevant, and
                    regularly updated content to help students succeed.
                </p>
                <p className="mb-4">
                    <strong>Raqeeb</strong> is a skilled Computer Engineer and full-stack developer managing the
                    design, development, and functionality of Azaad Academy. From building intuitive interfaces
                    to maintaining code quality and SEO, he handles all things tech.
                </p>
                <p>
                    Together, Mushtaq and Raqeeb aim to build a one-stop platform for government job aspirants
                    with everything from job announcements to practice tests.
                </p>
            </div>

            {/* Admin Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Jobs */}
                <div className="bg-white p-6 shadow rounded-md border">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Jobs Management</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>➕ Add New Job</li>
                        <li>📋 View All Jobs</li>
                        <li>✏️ Edit / ❌ Delete Job</li>
                    </ul>
                </div>

                {/* Results */}
                <div className="bg-white p-6 shadow rounded-md border">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Results Management</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>➕ Add New Result</li>
                        <li>📋 View All Results</li>
                        <li>✏️ Edit / ❌ Delete Result</li>
                    </ul>
                </div>

                {/* Tests */}
                <div className="bg-white p-6   shadow rounded-md border">
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Tests Management</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>➕ Add New Test</li>
                        <li>📋 View All Tests</li>
                        <li>✏️ Edit / ❌ Delete Test</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}