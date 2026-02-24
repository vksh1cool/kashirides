import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/blogs';

export default function BlogPost() {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="kashi-section kashi-container" style={{ paddingTop: '10rem', minHeight: '100vh', textAlign: 'center' }}>
                <h1 className="heading-xl" style={{ marginBottom: '1.5rem' }}>Post Not Found</h1>
                <Link to="/blogs" className="btn btn-primary">Back to Travel Guides</Link>
            </div>
        );
    }

    return (
        <>
            <SEOHead
                title={post.title}
                description={post.excerpt}
                url={`/blogs/${post.id}`}
                type="article"
                image={post.image}
            />

            <article style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
                {/* Hero Image */}
                <div className="relative overflow-hidden" style={{ height: '350px' }}>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{
                        background: 'linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 50%, transparent 100%)'
                    }}></div>
                </div>

                {/* Article Content */}
                <div className="kashi-container" style={{ maxWidth: '768px', margin: '0 auto', marginTop: '-5rem', position: 'relative', zIndex: 10 }}>
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)',
                        padding: '2rem 2rem',
                        border: '1px solid #f1f5f9'
                    }}>

                        <Link to="/blogs" className="inline-flex items-center gap-2" style={{
                            color: 'var(--color-brand)', fontWeight: 600,
                            fontSize: '0.875rem', transition: 'color 0.2s',
                            marginBottom: '2rem', display: 'inline-flex'
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = '#0f172a'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-brand)'}
                        >
                            <ArrowLeft size={16} /> Back to All Guides
                        </Link>

                        <div className="flex items-center gap-2" style={{
                            fontSize: '0.875rem', fontWeight: 500, color: '#94a3b8', marginBottom: '1.25rem'
                        }}>
                            <Calendar size={15} style={{ color: 'var(--color-accent)' }} />
                            Published on {post.date}
                        </div>

                        <h1 className="heading-lg" style={{ marginBottom: '2.5rem', lineHeight: '1.25' }}>{post.title}</h1>

                        <div
                            className="prose"
                            style={{ maxWidth: 'none' }}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <hr style={{ margin: '3rem 0', borderColor: '#f1f5f9' }} />

                        {/* CTA Card */}
                        <div style={{
                            backgroundColor: '#f8fafc',
                            padding: '2rem',
                            borderRadius: '16px',
                            textAlign: 'center',
                            border: '1px solid #f1f5f9'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0f172a' }}>
                                Ready to Book Your Ride?
                            </h3>
                            <p style={{ color: '#64748b', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem', fontSize: '0.9375rem' }}>
                                Our premium fleet is ready for your spiritual journey or outstation trip. Book today for the best rates.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <a href="tel:+917233999686" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                                    <Phone size={16} /> Call Now
                                </a>
                                <Link to="/fleet" className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>View Fleet</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom spacer */}
                <div style={{ height: '5rem' }}></div>
            </article>
        </>
    );
}
