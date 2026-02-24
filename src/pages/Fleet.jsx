import { useState } from 'react';
import { Users, Wind, CheckCircle2, Phone, Filter } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { fleetItems } from '../data/fleet';

export default function Fleet() {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Tempo Traveller', 'Bus', 'SUV', 'Sedan', 'Luxury Van'];

    const filteredFleet = filter === 'All'
        ? fleetItems
        : fleetItems.filter(item => item.type.includes(filter) || item.type === filter);

    return (
        <>
            <SEOHead
                title="Our Fleet - Rent Tempo Travellers & Buses in Varanasi"
                description="Browse our premium fleet of 12-26 seater Tempo Travellers, 40-49 seater coaches, SUVs, and luxury cabs available for rent in Varanasi."
                url="/fleet"
            />

            {/* Hero */}
            <section className="relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
                <div className="absolute inset-0">
                    <img src="/assets/45 seater bus collg.jpg" alt="Our fleet" className="w-full h-full object-cover" style={{ opacity: 0.15 }} />
                    <div className="absolute inset-0" style={{
                        background: 'linear-gradient(to bottom, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.98) 100%)'
                    }}></div>
                </div>
                <div className="kashi-container relative" style={{ zIndex: 10, padding: '5rem 1.25rem 6rem', textAlign: 'center' }}>
                    <span className="section-label section-label-dark" style={{ marginBottom: '1rem' }}>Premium Fleet</span>
                    <h1 className="heading-xl" style={{ color: '#ffffff', marginBottom: '1.25rem' }}>
                        Our <span className="gradient-text">Vehicles</span>
                    </h1>
                    <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '0 auto', lineHeight: '1.7' }}>
                        Every vehicle in our fleet is well-maintained, fully air-conditioned, and driven by experienced local professionals.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section style={{
                backgroundColor: '#ffffff',
                borderBottom: '1px solid #f1f5f9',
                position: 'sticky',
                top: '72px',
                zIndex: 30
            }}>
                <div className="kashi-container" style={{ padding: '1rem 1.25rem' }}>
                    <div className="flex items-center gap-3 overflow-x-auto" style={{ paddingBottom: '0.25rem' }}>
                        <Filter size={16} style={{ color: '#94a3b8', flexShrink: 0 }} />
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                style={{
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.2s ease',
                                    cursor: 'pointer',
                                    border: filter === category ? '1px solid #0f172a' : '1px solid #e2e8f0',
                                    backgroundColor: filter === category ? '#0f172a' : '#ffffff',
                                    color: filter === category ? '#ffffff' : '#475569',
                                    boxShadow: filter === category ? '0 2px 8px rgb(0 0 0 / 0.15)' : 'none',
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet Grid */}
            <section className="kashi-section" style={{ backgroundColor: '#f8fafc' }}>
                <div className="kashi-container" style={{ minHeight: '50vh' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {filteredFleet.map((vehicle, index) => (
                            <div
                                key={vehicle.id}
                                className="kashi-card animate-slide-up flex flex-col"
                                style={{ animationDelay: `${(index % 6) * 0.08}s` }}
                            >
                                <div className="overflow-hidden relative group" style={{ height: '224px', backgroundColor: '#f8fafc' }}>
                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        className="w-full h-full object-cover"
                                        style={{ transition: 'transform 0.7s ease' }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div style={{
                                        position: 'absolute', top: '12px', right: '12px',
                                        backgroundColor: 'rgba(255,255,255,0.95)',
                                        backdropFilter: 'blur(8px)',
                                        padding: '4px 12px',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: '#0f172a',
                                        boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)'
                                    }}>
                                        {vehicle.seats} Seater
                                    </div>
                                </div>

                                <div className="flex flex-col flex-grow" style={{ padding: '1.5rem' }}>
                                    <div style={{ marginBottom: '0.75rem' }}>
                                        <div style={{
                                            fontSize: '0.75rem', fontWeight: 700,
                                            color: 'var(--color-brand)',
                                            letterSpacing: '0.1em', textTransform: 'uppercase',
                                            marginBottom: '0.25rem'
                                        }}>
                                            {vehicle.type}
                                        </div>
                                        <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a' }}>
                                            {vehicle.name}
                                        </h2>
                                    </div>

                                    <div className="flex gap-4" style={{
                                        marginBottom: '1.25rem',
                                        paddingBottom: '1rem',
                                        borderBottom: '1px solid #f1f5f9'
                                    }}>
                                        <div className="flex items-center gap-1.5" style={{ color: '#64748b', fontSize: '0.875rem' }}>
                                            <Users size={15} style={{ color: 'var(--color-accent)' }} /> {vehicle.seats} Seats
                                        </div>
                                        <div className="flex items-center gap-1.5" style={{ color: '#64748b', fontSize: '0.875rem' }}>
                                            <Wind size={15} style={{ color: 'var(--color-accent)' }} /> AC
                                        </div>
                                    </div>

                                    <div className="flex-grow" style={{ marginBottom: '1.5rem' }}>
                                        <ul className="flex flex-col" style={{ gap: '0.5rem' }}>
                                            {vehicle.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center" style={{ gap: '0.5rem', fontSize: '0.875rem', color: '#475569' }}>
                                                    <CheckCircle2 size={15} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a href="tel:+917233999686" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem', marginTop: 'auto' }}>
                                        <Phone size={16} /> Book This Vehicle
                                    </a>
                                </div>
                            </div>
                        ))}

                        {filteredFleet.length === 0 && (
                            <div className="col-span-full" style={{ textAlign: 'center', padding: '5rem 0', color: '#94a3b8' }}>
                                <p style={{ fontSize: '1.125rem' }}>No vehicles found for this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ backgroundColor: 'rgba(185,28,28,0.03)', borderTop: '1px solid rgba(185,28,28,0.08)' }}>
                <div className="kashi-container" style={{ padding: '4rem 1.25rem', textAlign: 'center' }}>
                    <h2 className="heading-md" style={{ marginBottom: '0.75rem' }}>Can't find what you're looking for?</h2>
                    <p style={{ color: '#64748b', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
                        We have more vehicles than listed. Call us and we'll find the perfect match for your group size and budget.
                    </p>
                    <a href="tel:+917233999686" className="btn btn-primary btn-lg">
                        <Phone size={18} /> Call Now: +91 72339 99686
                    </a>
                </div>
            </section>
        </>
    );
}
