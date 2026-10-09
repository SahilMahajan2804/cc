import React, { useState } from 'react';
import { Bell, Search, Calendar, BookOpen, Briefcase, Music, Filter, ArrowRight } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: 'Final Semester Examination Time Table 2026',
    date: '10 Oct 2026',
    category: 'Exam',
    description: 'The final time table for BE/BTech End Semester Exams has been published. Exams begin from 2nd November.',
  },
  {
    id: 2,
    title: 'On-Campus Drive: Microsoft Recruitment 2026',
    date: '08 Oct 2026',
    category: 'Placement',
    description: 'Microsoft will be visiting the campus for the 2026 passing batch. Eligible students must register by 12th October.',
  },
  {
    id: 3,
    title: 'Incandescence 2026 - Annual Cultural Fest',
    date: '05 Oct 2026',
    category: 'Cultural',
    description: 'Get ready for PICT\'s biggest cultural extravaganza! Auditions for dance and music clubs start next week.',
  },
  {
    id: 4,
    title: 'Academic Calendar Update - Spring 2027',
    date: '02 Oct 2026',
    category: 'Academic',
    description: 'Revised academic calendar for the Spring 2027 semester is now available on the ERP portal.',
  },
  {
    id: 5,
    title: 'Hackathon: PICT Inquivesta 3.0',
    date: '30 Sep 2026',
    category: 'Events',
    description: 'Registrations are open for the 36-hour national level hackathon organized by PICT ACM Student Chapter.',
  },
  {
    id: 6,
    title: 'Scholarship Applications for AY 2026-27',
    date: '28 Sep 2026',
    category: 'Academic',
    description: 'MahaDBT scholarship forms are live. Submit your applications with required documents to the student section.',
  },
  {
    id: 7,
    title: 'In-Sem Examination Results Declared',
    date: '25 Sep 2026',
    category: 'Exam',
    description: 'In-semester examination results for SE, TE, and BE have been declared and are available on the student portal.',
  },
  {
    id: 8,
    title: 'Pre-Placement Talk by Barclays',
    date: '20 Sep 2026',
    category: 'Placement',
    description: 'Mandatory pre-placement talk for all shortlisted candidates for the Barclays internship drive.',
  }
];

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Academic': return <BookOpen size={16} />;
    case 'Exam': return <Calendar size={16} />;
    case 'Placement': return <Briefcase size={16} />;
    case 'Events': return <Bell size={16} />;
    case 'Cultural': return <Music size={16} />;
    default: return <Bell size={16} />;
  }
};

const getCategoryColor = (category) => {
  switch (category) {
    case 'Academic': return '#3b82f6'; // Blue
    case 'Exam': return '#ef4444'; // Crimson
    case 'Placement': return '#f59e0b'; // Amber
    case 'Events': return '#10b981'; // Green
    case 'Cultural': return '#8b5cf6'; // Purple
    default: return '#94a3b8';
  }
};

const NoticeBoard = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['All', 'Academic', 'Exam', 'Placement', 'Events', 'Cultural'];

  const filteredNotices = notices.filter(notice => {
    const matchesTab = activeTab === 'All' || notice.category === activeTab;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          notice.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const styles = {
    container: {
      backgroundColor: '#0a0f1e',
      minHeight: '100vh',
      padding: '4rem 2rem',
      color: '#f1f5f9',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, #f1f5f9, #94a3b8)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    controls: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      marginBottom: '2.5rem',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(30, 41, 59, 0.7)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(148, 163, 184, 0.2)',
      borderRadius: '9999px',
      padding: '0.75rem 1.5rem',
      maxWidth: '500px',
      margin: '0 auto',
      width: '100%',
    },
    searchInput: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#f1f5f9',
      outline: 'none',
      width: '100%',
      marginLeft: '0.75rem',
      fontSize: '1rem',
    },
    tabsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '0.75rem',
    },
    tab: (isActive) => ({
      padding: '0.5rem 1.25rem',
      borderRadius: '9999px',
      backgroundColor: isActive ? '#3b82f6' : 'rgba(30, 41, 59, 0.7)',
      color: isActive ? '#f1f5f9' : '#94a3b8',
      border: `1px solid ${isActive ? '#3b82f6' : 'rgba(148, 163, 184, 0.2)'}`,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: '500',
      fontSize: '0.9rem',
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '1.5rem',
    },
    card: {
      backgroundColor: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '1rem',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
    },
    dateBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#94a3b8',
      fontSize: '0.875rem',
      marginBottom: '1rem',
    },
    categoryTag: (color) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.375rem',
      backgroundColor: `${color}15`,
      color: color,
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      marginBottom: '1rem',
      width: 'fit-content',
    }),
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.75rem',
      lineHeight: '1.4',
      color: '#f1f5f9',
    },
    cardDesc: {
      color: '#94a3b8',
      fontSize: '0.95rem',
      lineHeight: '1.5',
      marginBottom: '1.5rem',
      flex: 1,
    },
    readMore: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#3b82f6',
      fontWeight: '500',
      fontSize: '0.9rem',
      cursor: 'pointer',
      marginTop: 'auto',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h2 style={styles.title}>Latest Notices & Announcements</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Stay updated with what\'s happening at PICT</p>
        </div>

        <div style={styles.controls}>
          <div style={styles.searchContainer}>
            <Search size={20} color="#94a3b8" />
            <input 
              type="text" 
              placeholder="Search notices..." 
              style={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={styles.tabsContainer}>
            {tabs.map(tab => (
              <button 
                key={tab}
                style={styles.tab(activeTab === tab)}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'All' && <Filter size={14} style={{ display: 'inline', marginRight: '5px' }} />}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {filteredNotices.length > 0 ? (
          <div style={styles.grid}>
            {filteredNotices.map((notice, index) => (
              <div 
                key={notice.id} 
                style={{
                  ...styles.card,
                  animation: `fadeIn 0.5s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={styles.categoryTag(getCategoryColor(notice.category))}>
                    {getCategoryIcon(notice.category)}
                    {notice.category}
                  </div>
                  <div style={styles.dateBadge}>
                    <Calendar size={14} />
                    {notice.date}
                  </div>
                </div>
                <h3 style={styles.cardTitle}>{notice.title}</h3>
                <p style={styles.cardDesc}>{notice.description}</p>
                <div style={styles.readMore}>
                  Read More <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#94a3b8' }}>
            <Bell size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
            <p style={{ fontSize: '1.2rem' }}>No notices found matching your criteria.</p>
          </div>
        )}
        
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .notice-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
          }
        `}</style>
      </div>
    </div>
  );
};

export default NoticeBoard;
