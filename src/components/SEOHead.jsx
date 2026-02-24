import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, url, type = "website", image = "/assets/Kashi_Rides-removebg-logo.png" }) {
    const siteName = "Kashi Rides";
    const fullTitle = `${title} | ${siteName}`;
    const fullUrl = `https://kashirides.in${url}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* LLM Optimization (Semantic hint) */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        </Helmet>
    );
}
