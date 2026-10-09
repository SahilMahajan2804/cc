import React, { useState } from 'react';
import { User, BookOpen, Calendar, Clock, Award, Search, BarChart3, CheckCircle, AlertCircle } from 'lucide-react';

const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [librarySearch, setLibrarySearch] = useState('');
  const [libraryFilter, setLibraryFilter] = useState('all');

  const studentInfo = {
    name: 'Arjun Sharma',
    rollNo: 'PICT2023CS042',
    semester: '6th',
    cgpa: '8.75'
  };

  const attendanceData = [
    { subject: 'Data Structures', present: 32, total: 40 },
    { subject: 'Computer Networks', present: 28, total: 35 },
    { subject: 'DBMS', present: 35, total: 40 },
    { subject: 'Operating Systems', present: 22, total: 38 },
    { subject: 'Software Engineering', present: 30, total: 35 },
    { subject: 'Mathematics', present: 38, total: 42 },
  ];

  const overallAttendance = Math.round(
    (attendanceData.reduce((acc, curr) => acc + curr.present, 0) /
    attendanceData.reduce((acc, curr) => acc + curr.total, 0)) * 100
  );

  const schedule = [
    { time: '09:00 - 10:00', subject: 'Computer Networks', faculty: 'Prof. A. K. Patil', room: 'A-201' },
    { time: '10:00 - 11:00', subject: 'DBMS', faculty: 'Dr. S. M. Deshmukh', room: 'A-201' },
    { time: '11:15 - 12:15', subject: 'Operating Systems', faculty: 'Prof. P. R. Joshi', room: 'A-202' },
    { time: '13:00 - 15:00', subject: 'DS Lab', faculty: 'Prof. M. N. Kale', room: 'Lab-4' },
    { time: '15:15 - 16:15', subject: 'Mathematics', faculty: 'Dr. V. B. Gite', room: 'A-201' },
  ];

  const books = [
    { title: 'Introduction to Algorithms', author: 'Cormen, Leiserson', isbn: '978-0262033848', available: true },
    { title: 'Database System Concepts', author: 'Silberschatz, Korth', isbn: '978-0073523323', available: false },
    { title: 'Computer Networks', author: 'Tanenbaum, Wetherall', isbn: '978-0132126953', available: true },
    { title: 'Operating System Concepts', author: 'Silberschatz, Galvin', isbn: '978-1118063330', available: true },
    { title: 'Software Engineering', author: 'Ian Sommerville', isbn: '978-0137035151', available: false },
    { title: 'Discrete Mathematics', author: 'Kenneth Rosen', isbn: '978-0073383095', available: true },
    { title: 'Artificial Intelligence', author: 'Russell, Norvig', isbn: '978-0136042594', available: true },
    { title: 'Design Patterns', author: 'Gamma, Helm', isbn: '978-0201633610', available: true },
    { title: 'Clean Code', author: 'Robert C. Martin', isbn: '978-0132350884', available: false },
    { title: 'The C Programming Language', author: 'Kernighan, Ritchie', isbn: '978-0131103627', available: true },
  ];

  const results = [
    { sem: 1, sgpa: 8.4, credits: 22 },
    { sem: 2, sgpa: 8.6, credits: 22 },
    { sem: 3, sgpa: 8.9, credits: 24 },
    { sem: 4, sgpa: 8.5, credits: 24 },
    { sem: 5, sgpa: 9.1, credits: 22 },
  ];

  const styles = {
    container: {
      backgroundColor: '#0a0f1e',
      padding: '3rem 2rem',
      color: '#f1f5f9',
      fontFamily: 'system-ui, sans-serif',
      minHeight: '100vh'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#3b82f6'
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    },
    tabBtn: (active) => ({
      padding: '0.75rem 1.5rem',
      backgroundColor: active ? '#3b82f6' : '#1e293b',
      color: active ? 'white' : '#94a3b8',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.2s'
    }),
    card: {
      backgroundColor: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '16px',
      padding: '2rem',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem'
    },
    statBox: {
      backgroundColor: '#111827',
      padding: '1.5rem',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '1rem'
    },
    th: {
      textAlign: 'left',
      padding: '1rem',
      borderBottom: '2px solid #3b82f6',
      color: '#94a3b8'
    },
    td: {
      padding: '1rem',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    },
    circProgressContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '2rem',
      flexDirection: 'column',
      gap: '1rem'
    },
    input: {
      padding: '0.75rem 1rem',
      backgroundColor: '#111827',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '8px',
      color: 'white',
      width: '100%',
      maxWidth: '400px'
    },
    barChartRow: {
      display: 'flex',
      alignItems: 'flex-end',
      height: '200px',
      gap: '1rem',
      padding: '1rem 0',
      borderBottom: '1px solid rgba(255,255,255,0.2)'
    },
    bar: (height) => ({
      width: '40px',
      height: `${height * 20}px`,
      backgroundColor: '#f59e0b',
      borderRadius: '4px 4px 0 0',
      transition: 'height 0.3s'
    })
  };

  const renderDashboard = () => (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <User size={40} color="white" />
        </div>
        <div>
          <h3 style={{ fontSize: '1.8rem', margin: '0 0 0.5rem 0' }}>Welcome, {studentInfo.name}</h3>
          <p style={{ color: '#94a3b8', margin: 0 }}>{studentInfo.rollNo} • Semester {studentInfo.semester} • CGPA: {studentInfo.cgpa}</p>
        </div>
      </div>
      
      <div style={styles.grid}>
        <div style={styles.statBox}>
          <Clock size={32} color="#f59e0b" />
          <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>4</span>
          <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Today's Classes</span>
        </div>
        <div style={styles.statBox}>
          <BookOpen size={32} color="#ef4444" />
          <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>3</span>
          <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Pending Assignments</span>
        </div>
        <div style={styles.statBox}>
          <Search size={32} color="#10b981" />
          <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>2</span>
          <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Library Books</span>
        </div>
        <div style={styles.statBox}>
          <Award size={32} color="#8b5cf6" />
          <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>1</span>
          <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Upcoming Exams</span>
        </div>
      </div>
    </div>
  );

  const renderAttendance = () => (
    <div>
      <div style={styles.circProgressContainer}>
        <div style={{ position: 'relative', width: '150px', height: '150px', borderRadius: '50%', background: `conic-gradient(${overallAttendance >= 75 ? '#10b981' : '#ef4444'} ${overallAttendance}%, #111827 0)` }}>
          <div style={{ position: 'absolute', inset: '10px', backgroundColor: '#1e293b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{overallAttendance}%</span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Overall</span>
          </div>
        </div>
      </div>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Subject</th>
            <th style={styles.th}>Present / Total</th>
            <th style={styles.th}>Percentage</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((d, i) => {
            const perc = Math.round((d.present / d.total) * 100);
            const isGood = perc >= 75;
            return (
              <tr key={i}>
                <td style={styles.td}>{d.subject}</td>
                <td style={styles.td}>{d.present} / {d.total}</td>
                <td style={{...styles.td, color: isGood ? '#10b981' : '#ef4444', fontWeight: 'bold'}}>{perc}%</td>
                <td style={styles.td}>
                  {isGood ? <CheckCircle size={20} color="#10b981" /> : <AlertCircle size={20} color="#ef4444" />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  const renderSchedule = () => (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Time</th>
          <th style={styles.th}>Subject</th>
          <th style={styles.th}>Faculty</th>
          <th style={styles.th}>Room</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((s, i) => (
          <tr key={i}>
            <td style={{...styles.td, color: '#f59e0b'}}>{s.time}</td>
            <td style={{...styles.td, fontWeight: 'bold'}}>{s.subject}</td>
            <td style={styles.td}>{s.faculty}</td>
            <td style={styles.td}>{s.room}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderLibrary = () => {
    const filtered = books.filter(b => 
      b.title.toLowerCase().includes(librarySearch.toLowerCase()) && 
      (libraryFilter === 'all' || (libraryFilter === 'available' && b.available))
    );

    return (
      <div>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Search books by title..." 
            style={styles.input} 
            value={librarySearch}
            onChange={(e) => setLibrarySearch(e.target.value)}
          />
          <select 
            style={{...styles.input, width: 'auto'}} 
            value={libraryFilter}
            onChange={(e) => setLibraryFilter(e.target.value)}
          >
            <option value="all">All Books</option>
            <option value="available">Available Only</option>
          </select>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Author</th>
              <th style={styles.th}>ISBN</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b, i) => (
              <tr key={i}>
                <td style={{...styles.td, fontWeight: 'bold'}}>{b.title}</td>
                <td style={styles.td}>{b.author}</td>
                <td style={styles.td}>{b.isbn}</td>
                <td style={{...styles.td, color: b.available ? '#10b981' : '#ef4444'}}>
                  {b.available ? 'Available' : 'Issued'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderResults = () => (
    <div>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', justifyContent: 'center' }}>
        <div style={styles.barChartRow}>
          {results.map((r, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{r.sgpa}</span>
              <div style={styles.bar(r.sgpa)}></div>
              <span style={{ fontSize: '0.9rem' }}>Sem {r.sem}</span>
            </div>
          ))}
        </div>
      </div>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Semester</th>
            <th style={styles.th}>Credits Earned</th>
            <th style={styles.th}>SGPA</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i}>
              <td style={styles.td}>Semester {r.sem}</td>
              <td style={styles.td}>{r.credits}</td>
              <td style={{...styles.td, fontWeight: 'bold', color: '#f59e0b'}}>{r.sgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Student Portal (Demo)</h2>
      
      <div style={styles.nav}>
        <button style={styles.tabBtn(activeTab === 'dashboard')} onClick={() => setActiveTab('dashboard')}><User size={18}/> Dashboard</button>
        <button style={styles.tabBtn(activeTab === 'attendance')} onClick={() => setActiveTab('attendance')}><CheckCircle size={18}/> Attendance</button>
        <button style={styles.tabBtn(activeTab === 'schedule')} onClick={() => setActiveTab('schedule')}><Calendar size={18}/> Schedule</button>
        <button style={styles.tabBtn(activeTab === 'library')} onClick={() => setActiveTab('library')}><BookOpen size={18}/> Library</button>
        <button style={styles.tabBtn(activeTab === 'results')} onClick={() => setActiveTab('results')}><BarChart3 size={18}/> Results</button>
      </div>

      <div style={styles.card}>
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'attendance' && renderAttendance()}
        {activeTab === 'schedule' && renderSchedule()}
        {activeTab === 'library' && renderLibrary()}
        {activeTab === 'results' && renderResults()}
      </div>
    </div>
  );
};

export default StudentPortal;
