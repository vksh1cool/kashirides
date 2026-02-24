import { Link } from 'react-router-dom';
import { Users, Wind, CheckCircle2, Shield, Clock, IndianRupee, Headphones, Star, Phone, ChevronRight, MapPin, ArrowRight, Truck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { fleetItems } from '../data/fleet';

const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '5,000+', label: 'Happy Travelers' },
    { number: '50+', label: 'Premium Vehicles' },
    { number: '24/7', label: 'Customer Support' },
];

const whyChooseUs = [
    { icon: Shield, title: 'Verified Drivers', desc: 'Every driver is background-verified, experienced, and knows Varanasi inside-out.' },
    { icon: IndianRupee, title: 'Transparent Pricing', desc: 'No hidden charges. Get clear upfront pricing with no surprises at the end.' },
    { icon: Clock, title: 'On-Time Guarantee', desc: 'We value your time. Our vehicles arrive exactly when promised, every single time.' },
    { icon: Truck, title: 'Well-Maintained Fleet', desc: 'Every vehicle is serviced regularly and deeply cleaned before each trip.' },
    { icon: Headphones, title: '24/7 Support', desc: 'Our team is available round the clock to help you with anything you need.' },
    { icon: MapPin, title: 'Local Expertise', desc: 'We know the best routes, shortcuts, and hidden gems of Varanasi and beyond.' },
];

const testimonials = [
    {
        name: 'Rajesh Sharma',
        location: 'Delhi',
        rating: 5,
        text: 'Booked a 17-seater for our family pilgrimage. The vehicle was immaculate, the driver was courteous, and the entire experience was seamless.',
    },
    {
        name: 'Priya Menon',
        location: 'Mumbai',
        rating: 5,
        text: 'We used Kashi Rides for our destination wedding guest transport. Absolutely flawless coordination. Every guest reached every venue on time.',
    },
    {
        name: 'Amit Gupta',
        location: 'Lucknow',
        rating: 5,
        text: 'Airport pickup was perfect — driver was already waiting. The Innova was clean and comfortable. Will definitely book again for Ayodhya trip.',
    },
];

export default function Home() {
    const featuredFleet = fleetItems.slice(0, 3);

    return (
        <>
            <SEOHead
                title="Best Cab & Tempo Traveller Service in Varanasi"
                description="Book premium, comfortable, and luxury Tempo Travellers, buses, and cabs for your Kashi Yatra and outstation group trips with Kashi Rides."
                url="/"
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/tempo traveller collage 2.jpg"
                        alt="Premium fleet"
                        className="w-full h-full object-cover"
                        style={{ opacity: 0.15 }}
                    />
                    {/* Strong dark overlay for text readability */}
                    <div className="absolute inset-0" style={{
                        background: 'linear-gradient(to right, rgba(15,23,42,0.97) 0%, rgba(15,23,42,0.92) 50%, rgba(15,23,42,0.75) 100%)'
                    }}></div>
                </div>

                <div className="kashi-container relative" style={{ zIndex: 10, padding: '6rem 1.25rem 7rem' }}>
                    <div style={{ maxWidth: '640px' }}>
                        <span className="section-label section-label-dark animate-fade-in" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                            Varanasi's #1 Transport Service
                        </span>

                        <h1 className="heading-xl animate-fade-in" style={{ color: '#ffffff', marginBottom: '1.5rem', animationDelay: '0.1s' }}>
                            Premium Transport for Your
                            <span className="gradient-text" style={{ display: 'block', marginTop: '0.25rem' }}>Sacred Journey</span>
                        </h1>

                        <p className="animate-fade-in" style={{
                            color: 'rgba(255,255,255,0.75)',
                            fontSize: '1.125rem',
                            lineHeight: '1.8',
                            marginBottom: '2.5rem',
                            maxWidth: '540px',
                            animationDelay: '0.2s'
                        }}>
                            From luxury Tempo Travellers to AC buses and SUVs — travel Varanasi and beyond with comfort, safety, and reliability that thousands trust.
                        </p>

                        <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <a href="tel:+917233999686" className="btn btn-primary btn-lg">
                                <Phone size={20} /> Call to Book
                            </a>
                            <Link to="/fleet" className="btn btn-white btn-lg">
                                View Our Fleet <ChevronRight size={18} />
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center gap-6 animate-fade-in" style={{ marginTop: '3rem', animationDelay: '0.4s' }}>
                            <div className="flex items-center gap-2">
                                <div className="flex" style={{ gap: '2px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} style={{ color: '#facc15', fill: '#facc15' }} />
                                    ))}
                                </div>
                                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>4.9/5 Rating</span>
                            </div>
                            <div style={{ height: '16px', width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                            <div className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>
                                <Shield size={16} style={{ color: '#4ade80' }} />
                                Verified & Insured Fleet
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section style={{ position: 'relative', zIndex: 20, marginTop: '-2rem' }}>
                <div className="kashi-container">
                    <div className="grid grid-cols-2 md:grid-cols-4" style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
                        border: '1px solid #f1f5f9'
                    }}>
                        {stats.map((stat, idx) => (
                            <div key={idx} className="stat-card animate-slide-up" style={{
                                animationDelay: `${idx * 0.1}s`,
                                borderRight: idx < stats.length - 1 ? '1px solid #f1f5f9' : 'none'
                            }}>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="kashi-section" style={{ backgroundColor: '#ffffff' }}>
                <div className="kashi-container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span className="section-label">Why Choose Us</span>
                        <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                            The Kashi Rides <span style={{ color: 'var(--color-brand)' }}>Difference</span>
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: '640px', margin: '0 auto', fontSize: '1.125rem' }}>
                            We're not just another cab service. Here's why thousands of travelers choose us for their most important journeys.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, idx) => (
                            <div
                                key={idx}
                                className="animate-slide-up"
                                style={{
                                    padding: '1.75rem',
                                    borderRadius: '16px',
                                    border: '1px solid #f1f5f9',
                                    transition: 'all 0.3s ease',
                                    animationDelay: `${idx * 0.08}s`,
                                    backgroundColor: '#ffffff',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = 'rgba(185,28,28,0.15)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgb(0 0 0 / 0.06)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '12px',
                                    backgroundColor: 'rgba(185,28,28,0.06)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '1.25rem'
                                }}>
                                    <item.icon size={24} style={{ color: 'var(--color-brand)' }} />
                                </div>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#64748b', fontSize: '0.9375rem', lineHeight: '1.65' }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="section-divider" />

            {/* Popular Fleet */}
            <section className="kashi-section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="kashi-container">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4" style={{ marginBottom: '3rem' }}>
                        <div>
                            <span className="section-label">Our Fleet</span>
                            <h2 className="heading-lg">Most Popular <span style={{ color: 'var(--color-brand)' }}>Vehicles</span></h2>
                        </div>
                        <Link to="/fleet" className="inline-flex items-center gap-2 font-semibold" style={{ color: 'var(--color-brand)', fontSize: '0.875rem', transition: 'gap 0.2s' }}>
                            View All Vehicles <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredFleet.map((vehicle, index) => (
                            <div
                                key={vehicle.id}
                                className="kashi-card animate-slide-up flex flex-col"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="overflow-hidden relative group cursor-pointer" style={{ height: '240px', backgroundColor: '#f8fafc' }}>
                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        className="w-full h-full object-cover"
                                        style={{ transition: 'transform 0.7s ease' }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div style={{
                                        position: 'absolute', top: '16px', right: '16px',
                                        backgroundColor: 'rgba(255,255,255,0.95)',
                                        backdropFilter: 'blur(8px)',
                                        padding: '6px 14px',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: 'var(--color-charcoal)',
                                        boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)'
                                    }}>
                                        {vehicle.seats} Seater
                                    </div>
                                </div>

                                <div className="flex flex-col flex-grow" style={{ padding: '1.75rem' }}>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-brand)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.375rem' }}>
                                        {vehicle.type}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
                                        {vehicle.name}
                                    </h3>

                                    <div className="flex gap-5" style={{ marginBottom: '1.25rem' }}>
                                        <div className="flex items-center gap-1.5" style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 500 }}>
                                            <Users size={16} style={{ color: 'var(--color-accent)' }} /> {vehicle.seats} Seats
                                        </div>
                                        <div className="flex items-center gap-1.5" style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 500 }}>
                                            <Wind size={16} style={{ color: 'var(--color-accent)' }} /> AC
                                        </div>
                                    </div>

                                    <div className="flex-grow" style={{ marginBottom: '1.5rem' }}>
                                        <ul className="flex flex-col" style={{ gap: '0.625rem' }}>
                                            {vehicle.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center" style={{ gap: '0.625rem', color: '#475569' }}>
                                                    <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                                                    <span style={{ fontSize: '0.875rem' }}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a href="tel:+917233999686" className="btn btn-primary" style={{ width: '100%', padding: '0.875rem', fontSize: '0.9375rem', marginTop: 'auto' }}>
                                        <Phone size={16} /> Book This Vehicle
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="section-divider" />

            {/* Testimonials */}
            <section className="kashi-section" style={{ backgroundColor: '#ffffff' }}>
                <div className="kashi-container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span className="section-label">Testimonials</span>
                        <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                            Trusted by <span style={{ color: 'var(--color-brand)' }}>Thousands</span>
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: '640px', margin: '0 auto', fontSize: '1.125rem' }}>
                            Don't take our word for it — hear from travelers who experienced the Kashi Rides difference.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((review, idx) => (
                            <div
                                key={idx}
                                className="testimonial-card animate-slide-up"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className="flex" style={{ gap: '2px', marginBottom: '1rem' }}>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} style={{ color: '#facc15', fill: '#facc15' }} />
                                    ))}
                                </div>
                                <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '50%',
                                        backgroundColor: 'rgba(185,28,28,0.08)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--color-brand)', fontWeight: 700, fontSize: '0.875rem'
                                    }}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, color: 'var(--color-charcoal)', fontSize: '0.875rem' }}>{review.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{review.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="relative overflow-hidden">
                <div style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                    padding: '5rem 0 5.5rem'
                }}>
                    <div className="absolute inset-0" style={{ opacity: 0.05 }}>
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>
                    <div className="kashi-container relative" style={{ zIndex: 10, textAlign: 'center' }}>
                        <h2 className="heading-lg" style={{ color: '#ffffff', marginBottom: '1rem' }}>
                            Ready to Book Your <span className="gradient-text">Ride?</span>
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '540px', margin: '0 auto 2.5rem' }}>
                            Whether it's a temple visit, family trip, wedding, or outstation journey — we've got the perfect vehicle waiting for you.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="tel:+917233999686" className="btn btn-primary btn-lg">
                                <Phone size={20} /> Call Now: +91 72339 99686
                            </a>
                            <Link to="/fleet" className="btn btn-lg" style={{
                                background: 'transparent',
                                border: '2px solid rgba(255,255,255,0.3)',
                                color: '#ffffff',
                                transition: 'all 0.25s ease'
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.backgroundColor = '#ffffff';
                                    e.currentTarget.style.color = '#0f172a';
                                    e.currentTarget.style.borderColor = '#ffffff';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                }}
                            >
                                Explore Fleet <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
