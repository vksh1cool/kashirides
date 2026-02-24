import { useEffect } from 'react';

export default function SEOHead({ title, description, url, type = "website", image = "/assets/Kashi_Rides-removebg-logo.png" }) {
    const siteName = "Kashi Rides";
    const fullTitle = `${title} | ${siteName}`;
    const fullUrl = `https://kashirides.in${url}`;

    useEffect(() => {
        document.title = fullTitle;

        const setMeta = (attr, key, content) => {
            let el = document.querySelector(`meta[${attr}="${key}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, key);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        setMeta('name', 'description', description);
        setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
        setMeta('property', 'og:type', type);
        setMeta('property', 'og:url', fullUrl);
        setMeta('property', 'og:title', fullTitle);
        setMeta('property', 'og:description', description);
        setMeta('property', 'og:image', image);
        setMeta('property', 'twitter:card', 'summary_large_image');
        setMeta('property', 'twitter:url', fullUrl);
        setMeta('property', 'twitter:title', fullTitle);
        setMeta('property', 'twitter:description', description);
        setMeta('property', 'twitter:image', image);
    }, [fullTitle, description, fullUrl, type, image]);

    return null;
}
