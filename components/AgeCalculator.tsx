'use client'

import { useState, useEffect } from 'react'
import { calculateAge, type AgeResult } from '@/lib/ageUtils'
import ResultDisplay from './ResultDisplay'

export default function AgeCalculator({ 
  initialResult, 
  initialDob, 
  initialTarget 
}: { 
  initialResult?: AgeResult | null;
  initialDob?: string;
  initialTarget?: string;
}) {
  const [mounted, setMounted] = useState(false)
  const [dob, setDob] = useState(initialDob || '')
  const [targetDate, setTargetDate] = useState(initialTarget || '')
  const [result, setResult] = useState<AgeResult | null>(initialResult || null)
  const [error, setError] = useState('')

  useEffect(() => {
    setMounted(true)
    const todayStr = new Date().toISOString().split('T')[0]
    setTargetDate(prev => prev || todayStr)
  }, [])

  const today = mounted ? new Date().toISOString().split('T')[0] : '2026-12-31'

  function handleCalculate() {
    if (!dob) {
      setError('Please enter your date of birth.')
      return
    }
    if (dob > today) {
      setError('Date of birth cannot be in the future.')
      return
    }
    setError('')
    const age = calculateAge(new Date(dob), new Date(targetDate))
    setResult(age)
  }

  return (
    <div className="calculator-card">
      <h2 className="calc-title">Enter Your Date of Birth</h2>

      <div className="input-group">
        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          value={dob}
          max={today}
          onChange={(e) => setDob(e.target.value)}
          aria-label="Date of birth"
        />
      </div>

      <div className="input-group">
        <label htmlFor="target">Age As Of (optional)</label>
        <input
          id="target"
          type="date"
          value={targetDate}
          max={today}
          onChange={(e) => setTargetDate(e.target.value)}
          aria-label="Calculate age as of this date"
        />
      </div>

      {error && <p className="error-msg" role="alert">{error}</p>}

      <button
        onClick={handleCalculate}
        className="calc-btn"
        aria-label="Calculate my age"
      >
        Calculate My Age
      </button>

      {result && <ResultDisplay result={result} dob={dob} />}
    </div>
  )
}
