import React, { useState } from 'react';
import { Cpu, Monitor, Radio, BrainCircuit, Users, FlaskConical, BookOpen, Award, ChevronDown, ChevronUp } from 'lucide-react';

const departmentsData = [
  {
    id: 'ce',
    name: 'Computer Engineering',
    icon: <Monitor size={32} />,
    color: '#3b82f6',
    hod: 'Dr. Rajesh Kulkarni',
    intake: 180,
    established: 1983,
    highlights: [
      'NBA Accredited Program with excellence in academics',
      'State-of-the-art labs including High Performance Computing',
      'Strong alumni network in top MNCs worldwide',
      'Active ACM and IEEE student chapters'
    ],
    details: {
      overview: 'The Department of Computer Engineering is the largest and oldest department at PICT. It offers a comprehensive curriculum that bridges theoretical computer science with practical software engineering.',
      curriculum: 'Core subjects include Data Structures, Algorithms, OS, DBMS, Networks, and specialized electives in Cloud Computing, Cybersecurity, and Machine Learning.',
      labs: '12 fully equipped laboratories with latest Intel Core i7 systems, NVIDIA GPUs for deep learning, and enterprise-grade networking equipment.',
      faculty: '25+ faculty members with Ph.D., numerous patents, and active research grants from AICTE, DST, and ISRO.'
    }
  },
  {
    id: 'it',
    name: 'Information Technology',
    icon: <Cpu size={32} />,
    color: '#f59e0b',
    hod: 'Dr. Anjali Deshmukh',
    intake: 120,
    established: 2001,
    highlights: [
      'Focus on modern software development practices',
      'Industry-aligned curriculum with regular expert sessions',
      'Dedicated Center of Excellence for IoT and Web3',
      'Consistently high placement records'
    ],
    details: {
      overview: 'The Information Technology department focuses on the practical application of computing technologies to solve real-world business and organizational problems.',
      curriculum: 'Emphasizes Web Technologies, Information Security, Data Analytics, Software Testing, and Enterprise Architecture.',
      labs: 'Advanced Web Development Lab, Cyber Security Lab, and IoT infrastructure with latest development boards and sensors.',
      faculty: 'Dynamic faculty with strong industry ties, focusing on applied research in HCI, Information Retrieval, and Distributed Systems.'
    }
  },
  {
    id: 'entc',
    name: 'Electronics & Telecommunication',
    icon: <Radio size={32} />,
    color: '#ef4444',
    hod: 'Dr. Sameer Patil',
    intake: 120,
    established: 1995,
    highlights: [
      'Pioneering research in 5G and VLSI design',
      'Texas Instruments & ARM sponsored innovation labs',
      'Strong focus on embedded systems and robotics',
      'Excellent track record in national level competitions'
    ],
    details: {
      overview: 'E&TC department provides a solid foundation in electronics, communications, and signal processing, adapting to the rapid advancements in the telecom sector.',
      curriculum: 'Covers VLSI Design, Embedded Systems, Digital Signal Processing, Wireless Communications, and Microwave Engineering.',
      labs: 'Specialized labs for VLSI (Cadence tools), DSP, Microwave & Antenna design, and Advanced Communication Systems.',
      faculty: 'Highly experienced professors leading research in Antenna Design, Image Processing, and Wireless Sensor Networks.'
    }
  },
  {
    id: 'aids',
    name: 'AI & Data Science',
    icon: <BrainCircuit size={32} />,
    color: '#10b981',
    hod: 'Dr. Priya Sharma',
    intake: 60,
    established: 2020,
    highlights: [
      'Cutting-edge curriculum designed with industry experts',
      'Dedicated NVIDIA DGX cluster for AI workloads',
      'Focus on Deep Learning, NLP, and Computer Vision',
      'Active research collaborations with top IT firms'
    ],
    details: {
      overview: 'The newest addition to PICT, the AI & DS department addresses the explosive demand for skilled professionals in artificial intelligence, machine learning, and big data analytics.',
      curriculum: 'Core focus on Machine Learning algorithms, Deep Learning, Natural Language Processing, Big Data Technologies, and AI Ethics.',
      labs: 'High-Performance AI Lab equipped with high-end workstations, GPU clusters, and access to cloud-based AI services.',
      faculty: 'Specialized faculty recruited for their expertise in AI, Data Mining, and Cognitive Computing.'
    }
  }
];

const Departments = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      setActiveTab('overview');
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BookOpen size={16} /> },
    { id: 'curriculum', label: 'Curriculum', icon: <Award size={16} /> },
    { id: 'labs', label: 'Labs & Infra', icon: <FlaskConical size={16} /> },
    { id: 'faculty', label: 'Faculty & Research', icon: <Users size={16} /> }
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
      background: 'linear-gradient(to right, #3b82f6, #10b981)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
    },
    card: {
      backgroundColor: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '1rem',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    },
    cardHeader: {
      padding: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
    },
    deptInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
    iconWrapper: (color) => ({
      width: '64px',
      height: '64px',
      borderRadius: '1rem',
      backgroundColor: `${color}15`,
      color: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    deptName: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#f1f5f9',
      marginBottom: '0.25rem',
    },
    metaInfo: {
      display: 'flex',
      gap: '1.5rem',
      color: '#94a3b8',
      fontSize: '0.9rem',
    },
    highlights: {
      marginTop: '1rem',
      paddingLeft: '1.5rem',
      color: '#cbd5e1',
    },
    li: {
      marginBottom: '0.5rem',
    },
    expandedContent: {
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '0',
      backgroundColor: 'rgba(17, 24, 39, 0.4)',
    },
    tabsHeader: {
      display: 'flex',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '0 1.5rem',
      overflowX: 'auto',
    },
    tabBtn: (isActive, color) => ({
      padding: '1rem 1.5rem',
      backgroundColor: 'transparent',
      border: 'none',
      borderBottom: `2px solid ${isActive ? color : 'transparent'}`,
      color: isActive ? color : '#94a3b8',
      fontWeight: isActive ? '600' : '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.2s',
      whiteSpace: 'nowrap',
    }),
    tabContent: {
      padding: '2rem',
      color: '#cbd5e1',
      lineHeight: '1.6',
      fontSize: '1.05rem',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h2 style={styles.title}>Academic Departments</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Explore our centers of excellence and specialized engineering programs</p>
        </div>

        <div style={styles.grid}>
          {departmentsData.map(dept => {
            const isExpanded = expandedId === dept.id;
            
            return (
              <div key={dept.id} style={styles.card}>
                <div style={styles.cardHeader} onClick={() => toggleExpand(dept.id)}>
                  <div style={styles.deptInfo}>
                    <div style={styles.iconWrapper(dept.color)}>
                      {dept.icon}
                    </div>
                    <div>
                      <h3 style={styles.deptName}>{dept.name}</h3>
                      <div style={styles.metaInfo}>
                        <span><strong>HOD:</strong> {dept.hod}</span>
                        <span><strong>Intake:</strong> {dept.intake}</span>
                        <span><strong>Est:</strong> {dept.established}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ color: '#94a3b8' }}>
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>

                {!isExpanded && (
                  <div style={{ padding: '0 1.5rem 1.5rem 5.5rem' }}>
                    <ul style={styles.highlights}>
                      {dept.highlights.slice(0, 2).map((hl, i) => (
                        <li key={i} style={styles.li}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {isExpanded && (
                  <div style={styles.expandedContent}>
                    <div style={styles.tabsHeader}>
                      {tabs.map(tab => (
                        <button 
                          key={tab.id}
                          style={styles.tabBtn(activeTab === tab.id, dept.color)}
                          onClick={(e) => { e.stopPropagation(); setActiveTab(tab.id); }}
                        >
                          {tab.icon} {tab.label}
                        </button>
                      ))}
                    </div>
                    <div style={styles.tabContent}>
                      {dept.details[activeTab]}
                      {activeTab === 'overview' && (
                        <div style={{ marginTop: '1.5rem' }}>
                          <h4 style={{ color: '#f1f5f9', marginBottom: '0.5rem' }}>Key Highlights</h4>
                          <ul style={{ paddingLeft: '1.5rem' }}>
                            {dept.highlights.map((hl, i) => (
                              <li key={i} style={styles.li}>{hl}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Departments;
