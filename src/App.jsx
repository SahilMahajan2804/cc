import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import NoticeBoard from './components/NoticeBoard'
import AdmissionPredictor from './components/AdmissionPredictor'
import Departments from './components/Departments'
import PlacementsDashboard from './components/PlacementsDashboard'
import EventsPortal from './components/EventsPortal'
import StudentPortal from './components/StudentPortal'
import VirtualTour from './components/VirtualTour'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode ? '#0a0f1e' : '#f8fafc',
      color: darkMode ? '#f1f5f9' : '#1e293b',
      transition: 'background 0.4s ease, color 0.4s ease',
    }}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="notices" style={{ padding: '80px 0' }}>
          <NoticeBoard />
        </section>

        <section id="admissions" style={{ padding: '80px 0' }}>
          <AdmissionPredictor />
        </section>

        <section id="departments" style={{ padding: '80px 0' }}>
          <Departments />
        </section>

        <section id="placements" style={{ padding: '80px 0' }}>
          <PlacementsDashboard />
        </section>

        <section id="events" style={{ padding: '80px 0' }}>
          <EventsPortal />
        </section>

        <section id="student-portal" style={{ padding: '80px 0' }}>
          <StudentPortal />
        </section>

        <section id="campus-tour" style={{ padding: '80px 0' }}>
          <VirtualTour />
        </section>
      </main>

      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}

export default App
