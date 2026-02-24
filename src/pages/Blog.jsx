import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/blogs';

function estimateReadTime(content) {
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return Math.max(3, Math.ceil(words / 200));
}

export default function Blog() {
    return (
        <>
            <SEOHead
                title="Varanasi Travel Blogs & Guides"
                description="Expert travel guides for Varanasi. Learn about renting Tempo Travellers, buses, visiting the ghats, and planning outstation trips like Ayodhya and Prayagraj."
                url="/blogs"
            />

            {/* Hero */}
            <section className="relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
                <div className="absolute inset-0">
                    <img src="/assets/uniqe_ghats_of_varanasi.jpg" alt="Varanasi Ghats" className="w-full h-full object-cover" style={{ opacity: 0.15 }} />
                    <div className="absolute inset-0" style={{
                        background: 'linear-gradient(to bottom, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.98) 100%)'
                    }}></div>
                </div>
                <div className="kashi-container relative" style={{ zIndex: 10, padding: '5rem 1.25rem 6rem', textAlign: 'center' }}>
                    <span className="section-label section-label-dark" style={{ marginBottom: '1rem' }}>Expert Guides</span>
                    <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
                        Travel <span className="gradient-text">Guides</span>
                    </h1>
                    <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '0 auto', lineHeight: '1.7' }}>
                        Insights, tips, and comprehensive transport guides for your spiritual journey in Kashi and beyond.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="kashi-section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="kashi-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {blogPosts.map((post, index) => (
                            <article
                                key={post.id}
                                className="kashi-card animate-slide-up group flex flex-col"
                                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
                            >
                                <Link to={`/blogs/${post.id}`} className="block overflow-hidden relative" style={{ height: '208px', backgroundColor: '#f1f5f9' }}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                        style={{ transition: 'transform 0.7s ease' }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </Link>

                                <div className="flex flex-col flex-grow" style={{ padding: '1.5rem' }}>
                                    <div className="flex items-center gap-4" style={{
                                        fontSize: '0.75rem', fontWeight: 500, color: '#94a3b8', marginBottom: '0.75rem'
                                    }}>
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={13} style={{ color: 'var(--color-brand)' }} />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={13} />
                                            {estimateReadTime(post.content)} min read
                                        </span>
                                    </div>

                                    <Link to={`/blogs/${post.id}`}>
                                        <h2 style={{
                                            fontSize: '1.125rem', fontWeight: 700,
                                            color: '#0f172a', marginBottom: '0.75rem',
                                            lineHeight: '1.4', transition: 'color 0.2s',
                                            display: '-webkit-box', WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical', overflow: 'hidden'
                                        }}
                                            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand)'}
                                            onMouseLeave={e => e.currentTarget.style.color = '#0f172a'}
                                        >
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p style={{
                                        color: '#64748b', fontSize: '0.875rem',
                                        marginBottom: '1.5rem', lineHeight: '1.65',
                                        display: '-webkit-box', WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical', overflow: 'hidden',
                                        flexGrow: 1
                                    }}>
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        to={`/blogs/${post.id}`}
                                        className="inline-flex items-center gap-2"
                                        style={{
                                            color: 'var(--color-brand)', fontWeight: 600,
                                            fontSize: '0.875rem', transition: 'gap 0.2s'
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.gap = '0.75rem'}
                                        onMouseLeave={e => e.currentTarget.style.gap = '0.5rem'}
                                    >
                                        Read Full Guide <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
