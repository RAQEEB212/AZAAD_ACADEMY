// src/components/Analytics.tsx
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: unknown[]) => void;
    }
}

export default function Analytics() {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID!; // your G-XXXXXXX

    useEffect(() => {
        // 1️⃣ Bootstrap dataLayer & gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function (...args) {
            window.dataLayer.push(args);
        };

        // 2️⃣ Initial pageview
        window.gtag('js', new Date());
        window.gtag('config', GA_ID, {
            page_path: window.location.pathname + window.location.search,
        });

        // 3️⃣ Track subsequent SPA navigations
        const trackPage = () => {
            window.gtag('config', GA_ID, {
                page_path: window.location.pathname + window.location.search,
            });
        };

        // Monkey‑patch pushState to fire our trackPage
        const originalPush = history.pushState;
        history.pushState = function (data, unused, url) {
            originalPush.apply(this, [data, unused, url]);
            trackPage();
        };

        // Also listen for back/forward
        window.addEventListener('popstate', trackPage);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('popstate', trackPage);
            history.pushState = originalPush;
        };
    }, [GA_ID]);

    return (
        <>
            {/* Load GA4 library */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            {/* Minimal init (real init happens in useEffect) */}
            <Script id="gtag-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
        `}
            </Script>
        </>
    );
}