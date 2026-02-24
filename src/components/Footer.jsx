import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative overflow-hidden" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.12 }}
            >
                <source src="/assets/footer.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(15,23,42,1) 0%, rgba(15,23,42,0.92) 50%, rgba(15,23,42,0.8) 100%)'
            }}></div>

            <div className="kashi-container relative" style={{ zIndex: 10, paddingTop: '5rem', paddingBottom: '2.5rem' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" style={{ marginBottom: '4rem' }}>

                    {/* Brand */}
                    <div>
                        <img
                            src="/assets/Kashi_Rides-removebg-logo.png"
                            alt="Kashi Rides Logo"
                            style={{ height: '48px', marginBottom: '1.25rem', filter: 'drop-shadow(0 4px 6px rgb(0 0 0 / 0.3))' }}
                        />
                        <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                            Varanasi's premium transport service. From luxury Tempo Travellers to Buses and Cabs, we make group travel spiritual, comfortable, and memorable.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" style={{
                                    width: '40px', height: '40px', borderRadius: '12px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    transition: 'all 0.3s ease', color: '#ffffff'
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.backgroundColor = 'var(--color-brand)';
                                        e.currentTarget.style.borderColor = 'var(--color-brand)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    }}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem' }}>
                            Quick Links
                        </h3>
                        <ul className="flex flex-col" style={{ gap: '0.75rem' }}>
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Our Fleet', path: '/fleet' },
                                { name: 'Travel Guides', path: '/blogs' },
                            ].map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="flex items-center gap-2 group" style={{
                                        color: '#94a3b8', fontSize: '0.875rem', transition: 'color 0.2s'
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                                        onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                                    >
                                        <ArrowRight size={12} style={{ color: 'var(--color-brand)', opacity: 0.5 }} />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fleet */}
                    <div>
                        <h3 style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem' }}>
                            Our Fleet
                        </h3>
                        <ul className="flex flex-col" style={{ gap: '0.75rem' }}>
                            {[
                                'Tempo Travellers (12-26 Seater)',
                                'Luxury Buses (40-49 Seater)',
                                'Maharaja & Urbania',
                                'SUVs & Sedans',
                            ].map(item => (
                                <li key={item}>
                                    <Link to="/fleet" className="flex items-center gap-2" style={{
                                        color: '#94a3b8', fontSize: '0.875rem', transition: 'color 0.2s'
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                                        onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                                    >
                                        <ArrowRight size={12} style={{ color: 'var(--color-brand)', opacity: 0.5 }} />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem' }}>
                            Contact Us
                        </h3>
                        <ul className="flex flex-col" style={{ gap: '1rem' }}>
                            <li className="flex items-start gap-3" style={{ fontSize: '0.875rem' }}>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '8px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0, marginTop: '2px'
                                }}>
                                    <MapPin size={16} style={{ color: 'var(--color-brand)' }} />
                                </div>
                                <span style={{ color: '#94a3b8' }}>Varanasi, Uttar Pradesh, India</span>
                            </li>
                            <li className="flex items-center gap-3" style={{ fontSize: '0.875rem' }}>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '8px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <Phone size={16} style={{ color: 'var(--color-brand)' }} />
                                </div>
                                <a href="tel:+917233999686" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                                >+91 72339 99686</a>
                            </li>
                            <li className="flex items-center gap-3" style={{ fontSize: '0.875rem' }}>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '8px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <Mail size={16} style={{ color: 'var(--color-brand)' }} />
                                </div>
                                <a href="mailto:info.kashirides@gmail.com" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                                >info.kashirides@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4" style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: '1.75rem'
                }}>
                    <p style={{ color: '#64748b', fontSize: '0.75rem' }}>
                        &copy; {new Date().getFullYear()} Kashi Rides. All Rights Reserved.
                    </p>
                    <p style={{ color: '#475569', fontSize: '0.75rem' }}>
                        Managed & Developed by{' '}
                        <a
                            href="https://launchpixel.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#94a3b8', fontWeight: 600, transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                            onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                        >LaunchPixel.in</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
