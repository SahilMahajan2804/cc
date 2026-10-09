import React, { useState } from 'react';
import { Calculator, GraduationCap, IndianRupee, BarChart3, CheckCircle, XCircle } from 'lucide-react';

const AdmissionPredictor = () => {
  const [formData, setFormData] = useState({
    examType: 'MHT-CET',
    score: '',
    category: 'General',
    department: 'Computer Engineering'
  });
  
  const [result, setResult] = useState(null);

  const cutoffs = {
    'MHT-CET': {
      'Computer Engineering': { General: 99.2, OBC: 98.8, SC: 96.5, ST: 92.0, EWS: 98.9, TFWS: 99.5 },
      'Information Technology': { General: 98.5, OBC: 97.9, SC: 95.0, ST: 90.5, EWS: 98.1, TFWS: 98.9 },
      'AI & Data Science': { General: 97.8, OBC: 97.1, SC: 94.2, ST: 89.5, EWS: 97.4, TFWS: 98.2 },
      'Electronics & Telecommunication': { General: 96.5, OBC: 95.8, SC: 91.5, ST: 85.0, EWS: 96.0, TFWS: 97.1 }
    },
    'JEE Main': {
      'Computer Engineering': { General: 97.5, OBC: 96.5, SC: 92.0, ST: 85.0, EWS: 97.0, TFWS: 98.0 },
      'Information Technology': { General: 96.0, OBC: 95.0, SC: 90.0, ST: 82.0, EWS: 95.5, TFWS: 96.5 },
      'AI & Data Science': { General: 95.0, OBC: 94.0, SC: 88.0, ST: 80.0, EWS: 94.5, TFWS: 95.5 },
      'Electronics & Telecommunication': { General: 93.0, OBC: 91.5, SC: 85.0, ST: 75.0, EWS: 92.5, TFWS: 94.0 }
    }
  };

  const feeStructure = {
    General: { tuition: 110000, development: 15000, exam: 2500, library: 2500, total: 130000 },
    OBC: { tuition: 55000, development: 15000, exam: 2500, library: 2500, total: 75000 },
    SC: { tuition: 0, development: 0, exam: 2500, library: 2500, total: 5000 },
    ST: { tuition: 0, development: 0, exam: 2500, library: 2500, total: 5000 },
    EWS: { tuition: 55000, development: 15000, exam: 2500, library: 2500, total: 75000 },
    TFWS: { tuition: 0, development: 15000, exam: 2500, library: 2500, total: 20000 }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateProbability = () => {
    const score = parseFloat(formData.score);
    if (isNaN(score)) return;

    const requiredCutoff = cutoffs[formData.examType][formData.department][formData.category];
    const diff = score - requiredCutoff;
    
    let probability = 0;
    if (diff >= 0.5) probability = 95;
    else if (diff >= 0) probability = 85;
    else if (diff >= -1) probability = 60;
    else if (diff >= -2.5) probability = 30;
    else probability = 5;

    let color = '#ef4444'; // Red
    if (probability > 70) color = '#10b981'; // Green
    else if (probability >= 40) color = '#f59e0b'; // Amber

    setResult({
      probability,
      color,
      requiredCutoff: `${(requiredCutoff - 1).toFixed(1)} - ${(requiredCutoff + 0.5).toFixed(1)}`,
      fees: feeStructure[formData.category]
    });
  };

  const styles = {
    container: {
      backgroundColor: '#0a0f1e',
      minHeight: '100vh',
      padding: '4rem 2rem',
      color: '#f1f5f9',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    wrapper: {
      maxWidth: '1000px',
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
      background: 'linear-gradient(to right, #f59e0b, #ef4444)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: result ? '1fr 1fr' : 'max-content',
      gap: '2rem',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: 'rgba(30, 41, 59, 0.6)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '1rem',
      padding: '2rem',
      width: result ? '100%' : '500px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#94a3b8',
      fontSize: '0.9rem',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      backgroundColor: 'rgba(17, 24, 39, 0.8)',
      border: '1px solid rgba(148, 163, 184, 0.2)',
      borderRadius: '0.5rem',
      padding: '0.75rem 1rem',
      color: '#f1f5f9',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    button: {
      width: '100%',
      backgroundColor: '#3b82f6',
      color: '#fff',
      border: 'none',
      borderRadius: '0.5rem',
      padding: '1rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1rem',
      transition: 'background-color 0.3s',
    },
    resultSection: {
      marginBottom: '2rem',
    },
    resultTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#f59e0b',
    },
    probBarContainer: {
      backgroundColor: 'rgba(17, 24, 39, 0.8)',
      height: '1.5rem',
      borderRadius: '9999px',
      overflow: 'hidden',
      marginBottom: '0.5rem',
    },
    probBar: (width, color) => ({
      height: '100%',
      width: `${width}%`,
      backgroundColor: color,
      transition: 'width 1s ease-in-out',
    }),
    feeGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginTop: '1rem',
    },
    feeItem: {
      backgroundColor: 'rgba(17, 24, 39, 0.6)',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid rgba(148, 163, 184, 0.1)',
    },
    feeLabel: {
      color: '#94a3b8',
      fontSize: '0.875rem',
      marginBottom: '0.25rem',
    },
    feeAmount: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#f1f5f9',
    },
    feeTotal: {
      gridColumn: '1 / -1',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.3)',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h2 style={styles.title}>Admission Predictor & Fee Calculator</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Estimate your chances and calculate annual fees based on past data</p>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Exam Type</label>
              <select name="examType" value={formData.examType} onChange={handleInputChange} style={styles.input}>
                <option value="MHT-CET">MHT-CET</option>
                <option value="JEE Main">JEE Main</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Score / Percentile</label>
              <input 
                type="number" 
                name="score" 
                value={formData.score} 
                onChange={handleInputChange} 
                placeholder="e.g. 98.5" 
                step="0.01"
                style={styles.input} 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Candidature Category</label>
              <select name="category" value={formData.category} onChange={handleInputChange} style={styles.input}>
                <option value="General">General / Open</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="EWS">EWS</option>
                <option value="TFWS">TFWS</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Preferred Department</label>
              <select name="department" value={formData.department} onChange={handleInputChange} style={styles.input}>
                <option value="Computer Engineering">Computer Engineering (CE)</option>
                <option value="Information Technology">Information Technology (IT)</option>
                <option value="Electronics & Telecommunication">Electronics & Telecomm. (E&TC)</option>
                <option value="AI & Data Science">AI & Data Science (AI&DS)</option>
              </select>
            </div>

            <button style={styles.button} onClick={calculateProbability}>
              <Calculator size={20} />
              Check Eligibility
            </button>
          </div>

          {result && (
            <div style={styles.card}>
              <div style={styles.resultSection}>
                <h3 style={styles.resultTitle}>
                  <BarChart3 size={24} /> Admission Probability
                </h3>
                <div style={styles.probBarContainer}>
                  <div style={styles.probBar(result.probability, result.color)}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem' }}>
                  <span>Low</span>
                  <span style={{ color: result.color, fontWeight: 'bold', fontSize: '1.1rem' }}>{result.probability}%</span>
                  <span>High</span>
                </div>
                
                <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(17, 24, 39, 0.6)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {result.probability > 70 ? <CheckCircle color="#10b981" size={32} /> : result.probability > 40 ? <CheckCircle color="#f59e0b" size={32} /> : <XCircle color="#ef4444" size={32} />}
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Expected Cutoff Range (Percentile)</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>{result.requiredCutoff}</div>
                  </div>
                </div>
              </div>

              <div style={styles.resultSection}>
                <h3 style={styles.resultTitle}>
                  <IndianRupee size={24} /> Estimated Annual Fees
                </h3>
                <div style={styles.feeGrid}>
                  <div style={styles.feeItem}>
                    <div style={styles.feeLabel}>Tuition Fee</div>
                    <div style={styles.feeAmount}>₹{result.fees.tuition.toLocaleString()}</div>
                  </div>
                  <div style={styles.feeItem}>
                    <div style={styles.feeLabel}>Development Fee</div>
                    <div style={styles.feeAmount}>₹{result.fees.development.toLocaleString()}</div>
                  </div>
                  <div style={styles.feeItem}>
                    <div style={styles.feeLabel}>Exam & Univ Fees</div>
                    <div style={styles.feeAmount}>₹{result.fees.exam.toLocaleString()}</div>
                  </div>
                  <div style={styles.feeItem}>
                    <div style={styles.feeLabel}>Library & Others</div>
                    <div style={styles.feeAmount}>₹{result.fees.library.toLocaleString()}</div>
                  </div>
                  <div style={{...styles.feeItem, ...styles.feeTotal}}>
                    <div style={{...styles.feeLabel, color: '#3b82f6'}}>Total Payable Amount</div>
                    <div style={{...styles.feeAmount, color: '#3b82f6', fontSize: '1.5rem'}}>₹{result.fees.total.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmissionPredictor;
