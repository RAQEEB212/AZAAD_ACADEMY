// components/ShareButton.jsx
'use client';
import { Share2 } from 'lucide-react';

export default function ShareButton({ job }) {
    const shareJob = () => {
        // Build the share text: title + details-page URL + ad URL
        const text = [
            `📢 ${job.title}`,
            `View details: ${window.location.href}`,
            `Preview: ${job.Advertisment}`
        ].join('\n');

        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;

        if (navigator.share) {
            navigator
                .share({
                    title: job.title,
                    text,
                    url: window.location.href
                })
                .catch(console.error);
        } else {
            window.open(whatsappUrl, '_blank');
        }
    };

    return (
        <button
            onClick={shareJob}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
            <Share2 className="w-4 h-4 mr-2" />
            Share
        </button>
    );
}