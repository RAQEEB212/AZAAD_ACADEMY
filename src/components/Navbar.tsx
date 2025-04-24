'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">
                    Azaad Academy
                </Link>
                <div className="space-x-6 text-gray-700 font-medium">
                    <Link href="/jobs">Jobs</Link>
                    <Link href="/results">Results</Link>
                    <Link href="/test">Test</Link>
                    <Link href="/admin">Admin</Link>
                    <Link href="/admin/login">Login</Link>
                </div>
            </nav>
        </header>
    );
}