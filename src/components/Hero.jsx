import React from 'react';
import { TrendingUp, Users, Clock, Trophy } from 'lucide-react';

const Hero = () => {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b2a 100%)',
    overflow: 'hidden',
    padding: '120px 20px 60px',
  };

  const blob1 = {
    position: 'absolute',
    top: '-10%',
    right: '-5%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(10,15,30,0) 70%)',
    filter: 'blur(40px)',
    animation: 'float 6s ease-in-out infinite',
    zIndex: 1
  };

  const blob2 = {
    position: 'absolute',
    bottom: '-20%',
    left: '-10%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, rgba(10,15,30,0) 70%)',
    filter: 'blur(40px)',
    animation: 'float 8s ease-in-out infinite reverse',
    zIndex: 1
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    animation: 'fadeInUp 1s ease-out forwards',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '8px 16px',
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '20px',
    color: '#3b82f6',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  };

  const headingStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: 700,
    color: '#f1f5f9',
    lineHeight: 1.1,
    marginBottom: '20px',
  };

  const highlightStyle = {
    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const subHeadingStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#94a3b8',
    maxWidth: '800px',
    margin: '0 auto 40px',
    lineHeight: 1.6,
  };

  const ctaContainer = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '60px',
    flexWrap: 'wrap'
  };

  const primaryBtn = {
    padding: '14px 28px',
    background: '#f59e0b',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
  };

  const secondaryBtn = {
    padding: '14px 28px',
    background: 'transparent',
    color: '#f1f5f9',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    backdropFilter: 'blur(5px)',
  };

  const statsContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  };

  const statCard = {
    background: 'rgba(30, 41, 59, 0.4)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
  };

  const statIconStyle = {
    color: '#3b82f6',
    marginBottom: '12px'
  };

  const statNumber = {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#f1f5f9',
    marginBottom: '4px',
  };

  const statLabel = {
    fontSize: '0.9rem',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  return (
    <section id="home" style={containerStyle}>
      <div style={blob1}></div>
      <div style={blob2}></div>
      
      <div style={contentStyle}>
        <div style={badgeStyle}>Since 1983</div>
        
        <h1 style={headingStyle}>
          Pune Institute of <br/>
          <span style={highlightStyle}>Computer Technology</span>
        </h1>
        
        <p style={subHeadingStyle}>
          Empowering Innovation | NAAC A++ Accredited | Autonomous Institute
        </p>
        
        <div style={ctaContainer}>
          <button 
            style={primaryBtn}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Explore Admissions
          </button>
          <button 
            style={secondaryBtn}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.05)';
              e.target.style.borderColor = 'rgba(255,255,255,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
          >
            Virtual Campus Tour
          </button>
        </div>

        <div style={statsContainer}>
          <div style={statCard} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <TrendingUp size={28} style={statIconStyle} />
            <div style={statNumber}>45+ LPA</div>
            <div style={statLabel}>Highest Package</div>
          </div>
          <div style={statCard} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <Users size={28} style={{...statIconStyle, color: '#f59e0b'}} />
            <div style={statNumber}>98%</div>
            <div style={statLabel}>Placement Rate</div>
          </div>
          <div style={statCard} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <Clock size={28} style={{...statIconStyle, color: '#10b981'}} />
            <div style={statNumber}>35+</div>
            <div style={statLabel}>Years of Excellence</div>
          </div>
          <div style={statCard} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <Trophy size={28} style={{...statIconStyle, color: '#ef4444'}} />
            <div style={statNumber}>Top 100</div>
            <div style={statLabel}>NIRF Ranking</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
