import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Our Fleet', path: '/fleet' },
        { name: 'Travel Guides', path: '/blogs' },
    ];

    return (
        <>
            {/* Top Utility Bar */}
            <div className="hidden md:block" style={{
                backgroundColor: '#0f172a',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.75rem',
                padding: '0.5rem 0',
                position: 'relative',
                zIndex: 50
            }}>
                <div className="kashi-container flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a href="tel:+917233999686" className="flex items-center gap-1.5" style={{ transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                        >
                            <Phone size={12} /> +91 72339 99686
                        </a>
                        <a href="mailto:info.kashirides@gmail.com" className="flex items-center gap-1.5" style={{ transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                        >
                            <Mail size={12} /> info.kashirides@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        <span style={{
                            display: 'inline-block', width: '6px', height: '6px',
                            borderRadius: '50%', backgroundColor: '#4ade80',
                            marginRight: '4px', animation: 'fadeIn 2s infinite alternate'
                        }}></span>
                        Varanasi's Most Trusted Transport Service
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav style={{
                position: 'sticky',
                top: 0,
                width: '100%',
                zIndex: 40,
                transition: 'all 0.3s ease',
                backgroundColor: isScrolled ? 'rgba(255,255,255,0.97)' : '#ffffff',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                boxShadow: isScrolled ? '0 1px 20px rgb(0 0 0 / 0.06)' : 'none',
                borderBottom: '1px solid #f1f5f9'
            }}>
                <div className="kashi-container flex items-center justify-between" style={{ height: '72px' }}>

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5" style={{ zIndex: 50, flexShrink: 0 }}>
                        <img
                            src="/assets/Kashi_Rides-removebg-logo.png"
                            alt="Kashi Rides Logo"
                            style={{ height: '52px', maxHeight: '52px', width: 'auto', objectFit: 'contain' }}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-7">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            position: 'relative',
                                            fontSize: '0.9375rem',
                                            fontWeight: location.pathname === link.path ? 600 : 500,
                                            color: location.pathname === link.path ? 'var(--color-brand)' : '#475569',
                                            transition: 'color 0.2s',
                                            padding: '0.5rem 0',
                                        }}
                                        onMouseEnter={e => { if (location.pathname !== link.path) e.currentTarget.style.color = '#0f172a'; }}
                                        onMouseLeave={e => { if (location.pathname !== link.path) e.currentTarget.style.color = '#475569'; }}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && (
                                            <span style={{
                                                position: 'absolute', bottom: '-2px', left: 0, right: 0,
                                                height: '2px', backgroundColor: 'var(--color-brand)', borderRadius: '9999px'
                                            }}></span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-3">
                            <a href="tel:+917233999686" className="flex items-center gap-2" style={{
                                fontSize: '0.875rem', fontWeight: 500, color: '#475569', transition: 'color 0.2s'
                            }}
                                onMouseEnter={e => e.currentTarget.style.color = '#0f172a'}
                                onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                            >
                                <div style={{
                                    width: '36px', height: '36px', borderRadius: '50%',
                                    backgroundColor: 'rgba(185,28,28,0.05)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <Phone size={16} style={{ color: 'var(--color-brand)' }} />
                                </div>
                                <span className="hidden lg:block">Call Now</span>
                            </a>
                            <Link to="/fleet" className="btn btn-primary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}>
                                Book Now <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <button
                        className="md:hidden"
                        style={{
                            zIndex: 50, padding: '0.625rem', borderRadius: '12px',
                            backgroundColor: '#f8fafc', color: '#0f172a',
                            border: '1px solid #f1f5f9', cursor: 'pointer'
                        }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>

                    {/* Mobile Menu */}
                    <div style={{
                        position: 'fixed', inset: 0,
                        backgroundColor: '#ffffff',
                        zIndex: 40,
                        display: 'flex', flexDirection: 'column',
                        transition: 'transform 0.3s ease',
                        transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                    }}
                        className="md:hidden"
                    >
                        <div className="flex-1 flex flex-col items-center justify-center gap-3">
                            <ul className="flex flex-col items-center gap-6" style={{ marginBottom: '2rem' }}>
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            style={{
                                                fontSize: '1.5rem', fontWeight: 600,
                                                color: location.pathname === link.path ? 'var(--color-brand)' : '#0f172a',
                                                transition: 'color 0.2s'
                                            }}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/fleet"
                                className="btn btn-primary"
                                style={{ fontSize: '1.125rem', padding: '0.875rem 2.5rem' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Book Now
                            </Link>
                            <a href="tel:+917233999686" className="flex items-center gap-2" style={{ color: '#475569', marginTop: '1rem', fontWeight: 500 }} onClick={() => setMobileMenuOpen(false)}>
                                <Phone size={18} style={{ color: 'var(--color-brand)' }} /> +91 72339 99686
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
