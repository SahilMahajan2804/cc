import React from 'react';
import { MapPin, Phone, Mail, Globe, MessageCircle, Briefcase, Play, Camera, ExternalLink, GraduationCap } from 'lucide-react';

const Footer = () => {
  const styles = {
    footer: {
      background: 'linear-gradient(to bottom, #0a0f1e, #050811)',
      color: '#94a3b8',
      fontFamily: 'system-ui, sans-serif',
      paddingTop: '4rem',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    },
    topSection: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '3rem'
    },
    logoArea: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      color: '#f1f5f9',
      marginBottom: '0.5rem'
    },
    tagline: {
      color: '#3b82f6',
      fontSize: '1.1rem',
      letterSpacing: '1px'
    },
    grid: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem 3rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2.5rem'
    },
    colTitle: {
      color: '#f1f5f9',
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      position: 'relative',
      paddingBottom: '0.5rem'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    },
    link: {
      color: '#94a3b8',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'color 0.2s',
      cursor: 'pointer'
    },
    iconGroup: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    iconBtn: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#111827',
      border: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#f1f5f9',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    contactRow: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1rem',
      alignItems: 'flex-start'
    },
    accreditationRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      padding: '2rem',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      flexWrap: 'wrap'
    },
    badge: {
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      color: '#3b82f6',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      fontWeight: '600',
      border: '1px solid rgba(59, 130, 246, 0.2)'
    },
    bottomBar: {
      backgroundColor: '#03050a',
      padding: '1.5rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }
  };

  const handleHoverIn = (e) => { e.currentTarget.style.color = '#3b82f6'; };
  const handleHoverOut = (e) => { e.currentTarget.style.color = '#94a3b8'; };

  const handleIconHoverIn = (e) => { 
    e.currentTarget.style.backgroundColor = '#3b82f6';
    e.currentTarget.style.transform = 'translateY(-3px)';
  };
  const handleIconHoverOut = (e) => { 
    e.currentTarget.style.backgroundColor = '#111827';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.topSection}>
        <div style={styles.logoArea}>
          <GraduationCap size={40} color="#f59e0b" />
          <h2 style={{ fontSize: '2rem', margin: 0 }}>PICT</h2>
        </div>
        <div style={styles.tagline}>Pune Institute of Computer Technology</div>
      </div>

      <div style={styles.grid}>
        <div>
          <h3 style={styles.colTitle}>Quick Links
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '2px', backgroundColor: '#f59e0b' }}></div>
          </h3>
          <ul style={styles.list}>
            {['Home', 'About PICT', 'Admissions', 'Anti-Ragging', 'RTI', 'AICTE Approval'].map(item => (
              <li key={item}><a style={styles.link} onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={styles.colTitle}>Academics
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '2px', backgroundColor: '#f59e0b' }}></div>
          </h3>
          <ul style={styles.list}>
            {['Departments', 'Syllabus', 'Academic Calendar', 'Examinations', 'Research'].map(item => (
              <li key={item}><a style={styles.link} onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={styles.colTitle}>Connect With Us
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '2px', backgroundColor: '#f59e0b' }}></div>
          </h3>
          <div style={styles.iconGroup}>
            <div style={styles.iconBtn} onMouseOver={handleIconHoverIn} onMouseOut={handleIconHoverOut} title="Facebook"><Globe size={20} /></div>
            <div style={styles.iconBtn} onMouseOver={handleIconHoverIn} onMouseOut={handleIconHoverOut} title="Twitter"><MessageCircle size={20} /></div>
            <div style={styles.iconBtn} onMouseOver={handleIconHoverIn} onMouseOut={handleIconHoverOut} title="LinkedIn"><Briefcase size={20} /></div>
            <div style={styles.iconBtn} onMouseOver={handleIconHoverIn} onMouseOut={handleIconHoverOut} title="YouTube"><Play size={20} /></div>
            <div style={styles.iconBtn} onMouseOver={handleIconHoverIn} onMouseOut={handleIconHoverOut} title="Instagram"><Camera size={20} /></div>
          </div>
        </div>

        <div>
          <h3 style={styles.colTitle}>Contact Info
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '2px', backgroundColor: '#f59e0b' }}></div>
          </h3>
          <div style={styles.contactRow}>
            <MapPin size={20} color="#3b82f6" style={{ flexShrink: 0 }} />
            <span>Survey No. 27, Near Trimurti Chowk, Dhankawadi, Pune, Maharashtra 411043</span>
          </div>
          <div style={styles.contactRow}>
            <Phone size={20} color="#3b82f6" style={{ flexShrink: 0 }} />
            <span>+91 20 24371101</span>
          </div>
          <div style={styles.contactRow}>
            <Mail size={20} color="#3b82f6" style={{ flexShrink: 0 }} />
            <span>info@pict.edu</span>
          </div>
        </div>
      </div>

      <div style={styles.accreditationRow}>
        <div style={styles.badge}>NAAC A++</div>
        <div style={styles.badge}>NBA Accredited</div>
        <div style={styles.badge}>AICTE Approved</div>
        <div style={styles.badge}>Affiliated to Savitribai Phule Pune University</div>
      </div>

      <div style={styles.bottomBar}>
        © 2026 Pune Institute of Computer Technology. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
