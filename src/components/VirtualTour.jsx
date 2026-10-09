import React, { useState } from 'react';
import { Building, BookOpen, Monitor, Lightbulb, Dumbbell, Home, Coffee, Mic, Landmark, MapPin } from 'lucide-react';

const VirtualTour = () => {
  const [activeZone, setActiveZone] = useState(null);

  const zones = [
    { id: 'academic', name: 'Main Academic Building', icon: <Building size={32} />, desc: 'Core academic block housing administration and primary classrooms.', details: ['4 Floors', 'Administrative Offices', 'Principal Office', '30+ Classrooms'] },
    { id: 'library', name: 'Central Library', icon: <BookOpen size={32} />, desc: 'Extensive collection of books, journals, and digital resources.', details: ['Capacity: 500+', 'Digital Section', 'Reading Hall', '80k+ Volumes'] },
    { id: 'computer', name: 'Computer Center', icon: <Monitor size={32} />, desc: 'State-of-the-art labs equipped with modern computing facilities.', details: ['10+ specialized labs', 'High-speed internet', 'Server Room'] },
    { id: 'incubation', name: 'Innovation & Incubation', icon: <Lightbulb size={32} />, desc: 'Hub for startups, research projects, and entrepreneurial activities.', details: ['Workspace for startups', 'Mentorship programs', 'Funding assistance'] },
    { id: 'sports', name: 'Sports Complex', icon: <Dumbbell size={32} />, desc: 'Indoor and outdoor sports facilities for overall development.', details: ['Basketball Court', 'Gymnasium', 'Table Tennis', 'Volleyball Court'] },
    { id: 'boys_hostel', name: 'Boys Hostel', icon: <Home size={32} />, desc: 'Comfortable accommodation facilities for male students.', details: ['Capacity: 400', 'Mess Facility', 'Wi-Fi enabled', 'Recreation Room'] },
    { id: 'girls_hostel', name: 'Girls Hostel', icon: <Home size={32} />, desc: 'Secure and well-equipped accommodation for female students.', details: ['Capacity: 300', 'Mess Facility', 'Strict Security', 'Study Rooms'] },
    { id: 'cafeteria', name: 'Cafeteria', icon: <Coffee size={32} />, desc: 'Hygienic and diverse food options in a vibrant seating area.', details: ['Multi-cuisine menu', 'Seating: 200+', 'Open-air section'] },
    { id: 'auditorium', name: 'Auditorium', icon: <Mic size={32} />, desc: 'Main venue for seminars, cultural events, and guest lectures.', details: ['Seating: 800', 'Advanced AV system', 'Centralized AC'] },
    { id: 'admin', name: 'Admin Block', icon: <Landmark size={32} />, desc: 'Student section, accounts, and official administrative work.', details: ['Student Section', 'Accounts Dept', 'Scholarship Office'] }
  ];

  const styles = {
    container: {
      backgroundColor: '#0a0f1e',
      padding: '4rem 2rem',
      color: '#f1f5f9',
      fontFamily: 'system-ui, sans-serif',
      minHeight: '100vh'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#f1f5f9'
    },
    layout: {
      display: 'flex',
      flexDirection: 'row',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      flexWrap: 'wrap'
    },
    mapArea: {
      flex: '1 1 60%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: '1rem',
      backgroundColor: '#111827',
      padding: '2rem',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.05)'
    },
    zoneBtn: (isActive) => ({
      backgroundColor: isActive ? 'rgba(245, 158, 11, 0.2)' : 'rgba(30, 41, 59, 0.8)',
      border: `2px solid ${isActive ? '#f59e0b' : 'rgba(255,255,255,0.1)'}`,
      borderRadius: '12px',
      padding: '1.5rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
      color: isActive ? '#f59e0b' : '#94a3b8',
      transition: 'all 0.3s ease',
      boxShadow: isActive ? '0 0 15px rgba(245, 158, 11, 0.3)' : 'none',
      textAlign: 'center'
    }),
    zoneName: {
      fontSize: '0.85rem',
      fontWeight: '600',
      marginTop: '0.5rem'
    },
    infoPanel: {
      flex: '1 1 35%',
      backgroundColor: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '2rem',
      border: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '400px'
    },
    infoTitle: {
      fontSize: '1.8rem',
      color: '#f59e0b',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    emptyState: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: '#94a3b8',
      textAlign: 'center',
      gap: '1rem'
    },
    detailsList: {
      listStyle: 'none',
      padding: 0,
      marginTop: '1.5rem'
    },
    detailsItem: {
      padding: '0.75rem 0',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: '#f1f5f9'
    }
  };

  const activeZoneData = zones.find(z => z.id === activeZone);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Virtual Campus Tour</h2>
      
      <div style={styles.layout}>
        <div style={styles.mapArea}>
          {zones.map(zone => (
            <button 
              key={zone.id} 
              style={styles.zoneBtn(activeZone === zone.id)}
              onClick={() => setActiveZone(zone.id)}
              onMouseEnter={(e) => {
                if(activeZone !== zone.id) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if(activeZone !== zone.id) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {zone.icon}
              <span style={styles.zoneName}>{zone.name}</span>
            </button>
          ))}
        </div>

        <div style={styles.infoPanel}>
          {activeZoneData ? (
            <div style={{ animation: 'fadeIn 0.4s ease' }}>
              <h3 style={styles.infoTitle}>
                {activeZoneData.icon} {activeZoneData.name}
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '1.1rem' }}>
                {activeZoneData.desc}
              </p>
              
              <ul style={styles.detailsList}>
                {activeZoneData.details.map((detail, idx) => (
                  <li key={idx} style={styles.detailsItem}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div style={styles.emptyState}>
              <MapPin size={48} color="#3b82f6" opacity={0.5} />
              <p style={{ fontSize: '1.2rem' }}>Select a campus zone from the map to view details.</p>
            </div>
          )}
        </div>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .layout { flex-direction: column; }
          }
        `}
      </style>
    </div>
  );
};

export default VirtualTour;
