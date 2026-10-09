import React, { useState } from 'react';
import { TrendingUp, Building2, Users, IndianRupee, Award, Briefcase, BarChart3 } from 'lucide-react';

const PlacementsDashboard = () => {
  const [activeYear, setActiveYear] = useState('2026');
  
  const years = ['2022', '2023', '2024', '2025', '2026'];
  
  const packageDistribution = [
    { range: '< 5 LPA', count: 45, height: '15%' },
    { range: '5-10 LPA', count: 210, height: '60%' },
    { range: '10-15 LPA', count: 280, height: '85%' },
    { range: '15-25 LPA', count: 85, height: '40%' },
    { range: '25+ LPA', count: 30, height: '20%' },
  ];

  const recruiters = [
    'Google', 'Microsoft', 'Amazon', 'PhonePe', 'Mastercard', 
    'JP Morgan', 'Goldman Sachs', 'Barclays', 'Nvidia', 'Adobe', 
    'Cisco', 'TCS', 'Infosys', 'Persistent', 'Veritas'
  ];

  const deptStats = [
    { dept: 'Computer Engineering', placed: 175, total: 180, avgPkg: '14.5 LPA', highest: '45.0 LPA' },
    { dept: 'Information Technology', placed: 115, total: 120, avgPkg: '12.8 LPA', highest: '38.0 LPA' },
    { dept: 'Electronics & Telecom.', placed: 108, total: 120, avgPkg: '9.5 LPA', highest: '28.0 LPA' },
    { dept: 'AI & Data Science', placed: 58, total: 60, avgPkg: '13.2 LPA', highest: '41.0 LPA' },
  ];

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
      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    metricsRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3rem',
    },
    metricCard: {
      backgroundColor: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '1rem',
      padding: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    metricIcon: (color) => ({
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      backgroundColor: `${color}15`,
      color: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    metricValue: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#f1f5f9',
    },
    metricLabel: {
      color: '#94a3b8',
      fontSize: '0.875rem',
    },
    yearTabs: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2rem',
    },
    yearTab: (isActive) => ({
      padding: '0.5rem 1.5rem',
      backgroundColor: isActive ? '#3b82f6' : 'transparent',
      color: isActive ? '#fff' : '#94a3b8',
      border: `1px solid ${isActive ? '#3b82f6' : 'rgba(148, 163, 184, 0.2)'}`,
      borderRadius: '9999px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.2s',
    }),
    dashboardGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
      marginBottom: '1.5rem',
    },
    panel: {
      backgroundColor: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '1rem',
      padding: '1.5rem',
    },
    panelTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#e2e8f0',
    },
    chartContainer: {
      height: '250px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
      paddingTop: '2rem',
      borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
    },
    barWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      width: '15%',
    },
    bar: (height) => ({
      width: '100%',
      height: height,
      backgroundColor: '#3b82f6',
      borderRadius: '4px 4px 0 0',
      transition: 'height 1s ease-out',
      backgroundImage: 'linear-gradient(to top, #1e40af, #3b82f6)',
    }),
    barLabel: {
      color: '#94a3b8',
      fontSize: '0.75rem',
      textAlign: 'center',
    },
    barCount: {
      color: '#f1f5f9',
      fontWeight: '600',
      fontSize: '0.875rem',
    },
    recruitersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: '1rem',
    },
    recruiterPill: {
      backgroundColor: 'rgba(17, 24, 39, 0.6)',
      border: '1px solid rgba(148, 163, 184, 0.1)',
      borderRadius: '0.5rem',
      padding: '1rem 0.5rem',
      textAlign: 'center',
      color: '#cbd5e1',
      fontWeight: '600',
      fontSize: '0.9rem',
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      textAlign: 'left',
    },
    th: {
      padding: '1rem',
      color: '#94a3b8',
      borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
      fontWeight: '500',
    },
    td: {
      padding: '1rem',
      color: '#e2e8f0',
      borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
    },
    placementRate: (rate) => ({
      color: rate > 90 ? '#10b981' : '#f59e0b',
      fontWeight: '600',
    })
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h2 style={styles.title}>Placement Cell & Career Services</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Empowering students with exceptional career opportunities</p>
        </div>

        <div style={styles.metricsRow}>
          <div style={styles.metricCard}>
            <div style={styles.metricIcon('#10b981')}><TrendingUp size={24} /></div>
            <div>
              <div style={styles.metricValue}>45 LPA</div>
              <div style={styles.metricLabel}>Highest Package</div>
            </div>
          </div>
          <div style={styles.metricCard}>
            <div style={styles.metricIcon('#3b82f6')}><IndianRupee size={24} /></div>
            <div>
              <div style={styles.metricValue}>12.5 LPA</div>
              <div style={styles.metricLabel}>Average Package</div>
            </div>
          </div>
          <div style={styles.metricCard}>
            <div style={styles.metricIcon('#f59e0b')}><Users size={24} /></div>
            <div>
              <div style={styles.metricValue}>650+</div>
              <div style={styles.metricLabel}>Students Placed</div>
            </div>
          </div>
          <div style={styles.metricCard}>
            <div style={styles.metricIcon('#8b5cf6')}><Building2 size={24} /></div>
            <div>
              <div style={styles.metricValue}>200+</div>
              <div style={styles.metricLabel}>Top Recruiters</div>
            </div>
          </div>
        </div>

        <div style={styles.yearTabs}>
          {years.map(year => (
            <button 
              key={year} 
              style={styles.yearTab(activeYear === year)}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        <div style={styles.dashboardGrid}>
          <div style={styles.panel}>
            <h3 style={styles.panelTitle}><BarChart3 size={20} /> Package Distribution ({activeYear})</h3>
            <div style={styles.chartContainer}>
              {packageDistribution.map((data, index) => (
                <div key={index} style={styles.barWrapper}>
                  <div style={styles.barCount}>{data.count}</div>
                  <div style={styles.bar(data.height)}></div>
                  <div style={styles.barLabel}>{data.range}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.panel}>
            <h3 style={styles.panelTitle}><Briefcase size={20} /> Top Recruiters</h3>
            <div style={styles.recruitersGrid}>
              {recruiters.map((company, index) => (
                <div key={index} style={styles.recruiterPill}>
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.panel}>
          <h3 style={styles.panelTitle}><Award size={20} /> Department-wise Statistics</h3>
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Department</th>
                  <th style={styles.th}>Total Students</th>
                  <th style={styles.th}>Placed</th>
                  <th style={styles.th}>Placement Rate</th>
                  <th style={styles.th}>Avg Package</th>
                  <th style={styles.th}>Highest Package</th>
                </tr>
              </thead>
              <tbody>
                {deptStats.map((stat, index) => {
                  const rate = Math.round((stat.placed / stat.total) * 100);
                  return (
                    <tr key={index}>
                      <td style={{...styles.td, fontWeight: '600'}}>{stat.dept}</td>
                      <td style={styles.td}>{stat.total}</td>
                      <td style={styles.td}>{stat.placed}</td>
                      <td style={styles.td}>
                        <span style={styles.placementRate(rate)}>{rate}%</span>
                      </td>
                      <td style={styles.td}>{stat.avgPkg}</td>
                      <td style={styles.td}>{stat.highest}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlacementsDashboard;
