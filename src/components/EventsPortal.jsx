import React, { useState } from 'react';
import { Calendar, Users, Trophy, Code, Music, Ticket, X, CheckCircle } from 'lucide-react';

const EventsPortal = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', college: '', phone: '' });

  const events = [
    {
      id: 'credenz',
      name: 'Credenz',
      body: 'IEEE Student Branch',
      date: 'March',
      description: 'Annual technical festival featuring competitive programming, hackathons, and technical paper presentations.',
      subEvents: ['Clash (Coding)', 'B-Plan', 'NTH (Treasure Hunt)', 'Cretronix'],
      participants: '3000+',
      color: '#3b82f6',
      icon: <Code size={24} color="#3b82f6" />
    },
    {
      id: 'inc',
      name: 'Impetus & Concepts (INC)',
      body: 'PICT',
      date: 'February',
      description: 'National level project exhibition and competition bringing innovative ideas from across the country.',
      subEvents: ['Impetus (First Year)', 'Concepts (Final Year)', 'Pradnya', 'Tech Talks'],
      participants: '5000+',
      color: '#f59e0b',
      icon: <Trophy size={24} color="#f59e0b" />
    },
    {
      id: 'pulzion',
      name: 'Pulzion',
      body: 'ACM Student Chapter',
      date: 'October',
      description: 'Premier technical fest focusing on algorithms, problem solving, and emerging technologies.',
      subEvents: ['Bug Bounty', 'WebWeaver', 'Dexter\\\'s Lab', 'Quiz'],
      participants: '2500+',
      color: '#ef4444',
      icon: <Code size={24} color="#ef4444" />
    },
    {
      id: 'addiction',
      name: 'Addiction',
      body: 'Cultural Committee',
      date: 'January',
      description: 'The highly anticipated annual cultural and sports extravaganza of PICT.',
      subEvents: ['Dance Competitions', 'Battle of Bands', 'Sports Meet', 'Drama'],
      participants: '6000+',
      color: '#10b981',
      icon: <Music size={24} color="#10b981" />
    }
  ];

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', college: '', phone: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({ name: '', email: '', college: '', phone: '' });
  };

  const styles = {
    container: {
      backgroundColor: '#0a0f1e',
      padding: '4rem 2rem',
      color: '#f1f5f9',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#f59e0b',
      textShadow: '0 2px 4px rgba(0,0,0,0.5)'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    card: {
      backgroundColor: 'rgba(30, 41, 59, 0.7)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      display: 'flex',
      flexDirection: 'column'
    },
    cardHeader: (color) => ({
      padding: '1.5rem',
      background: `linear-gradient(135deg, ${color}22 0%, rgba(30, 41, 59, 0) 100%)`,
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }),
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      margin: 0
    },
    cardBody: {
      padding: '1.5rem',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    badge: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      backgroundColor: '#111827',
      borderRadius: '999px',
      fontSize: '0.875rem',
      color: '#94a3b8'
    },
    infoRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#94a3b8',
      fontSize: '0.9rem'
    },
    description: {
      color: '#f1f5f9',
      fontSize: '0.95rem',
      lineHeight: '1.5'
    },
    subEvents: {
      margin: '0.5rem 0 0 0',
      padding: '0 0 0 1.2rem',
      color: '#94a3b8',
      fontSize: '0.9rem'
    },
    button: {
      marginTop: 'auto',
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'background-color 0.2s'
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 15, 30, 0.8)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    modal: {
      backgroundColor: '#1e293b',
      borderRadius: '16px',
      padding: '2rem',
      width: '90%',
      maxWidth: '500px',
      border: '1px solid rgba(255,255,255,0.1)',
      position: 'relative'
    },
    closeButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      color: '#94a3b8',
      cursor: 'pointer'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#f1f5f9',
      fontSize: '0.9rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#111827',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '8px',
      color: '#f1f5f9',
      outline: 'none'
    },
    toast: {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      backgroundColor: '#10b981',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      zIndex: 1100,
      animation: 'slideIn 0.3s ease-out'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Tech Fests & Events</h2>
      
      <div style={styles.grid}>
        {events.map(event => (
          <div key={event.id} style={styles.card}>
            <div style={styles.cardHeader(event.color)}>
              {event.icon}
              <h3 style={styles.cardTitle}>{event.name}</h3>
            </div>
            
            <div style={styles.cardBody}>
              <span style={styles.badge}>{event.body}</span>
              
              <div style={styles.infoRow}>
                <Calendar size={16} /> {event.date}
              </div>
              <div style={styles.infoRow}>
                <Users size={16} /> {event.participants} Participants
              </div>
              
              <p style={styles.description}>{event.description}</p>
              
              <div>
                <strong style={{ color: '#f1f5f9', fontSize: '0.9rem' }}>Key Events:</strong>
                <ul style={styles.subEvents}>
                  {event.subEvents.map((sub, i) => <li key={i}>{sub}</li>)}
                </ul>
              </div>

              <button 
                style={styles.button}
                onClick={() => handleRegister(event)}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
              >
                <Ticket size={18} /> Register Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={handleCloseModal}>
              <X size={24} />
            </button>
            <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#f59e0b', fontSize: '1.5rem' }}>
              Register for {selectedEvent?.name}
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input required type="text" style={styles.input} placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <input required type="email" style={styles.input} placeholder="john@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>College/Institution</label>
                <input required type="text" style={styles.input} placeholder="PICT Pune" value={formData.college} onChange={e => setFormData({...formData, college: e.target.value})} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number</label>
                <input required type="tel" style={styles.input} placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              
              <button type="submit" style={{...styles.button, backgroundColor: '#f59e0b', color: '#111827', marginTop: '1rem'}}>
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      )}

      {showToast && (
        <div style={styles.toast}>
          <CheckCircle size={20} /> Registration Successful!
        </div>
      )}
      
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default EventsPortal;
