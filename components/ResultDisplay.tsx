import type { AgeResult } from '@/lib/ageUtils'

interface Props {
  result: AgeResult
  dob: string
}

export default function ResultDisplay({ result, dob }: Props) {
  const dobFormatted = new Date(dob + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  })

  return (
    <div className="result-box" aria-live="polite">
      <h2 className="result-title">Your Age Result</h2>

      {/* Main result — big display */}
      <div className="age-main">
        <span className="age-num">{result.years}</span>
        <span className="age-label">years</span>
        <span className="age-num">{result.months}</span>
        <span className="age-label">months</span>
        <span className="age-num">{result.days}</span>
        <span className="age-label">days</span>
      </div>

      <p className="dob-line">Born: {dobFormatted}</p>

      {/* Stats grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-val">{result.totalDays.toLocaleString()}</div>
          <div className="stat-lbl">Total Days</div>
        </div>
        <div className="stat-card">
          <div className="stat-val">{result.totalWeeks.toLocaleString()}</div>
          <div className="stat-lbl">Total Weeks</div>
        </div>
        <div className="stat-card">
          <div className="stat-val">{result.totalMonths.toLocaleString()}</div>
          <div className="stat-lbl">Total Months</div>
        </div>
        <div className="stat-card">
          <div className="stat-val">{result.totalHours.toLocaleString()}</div>
          <div className="stat-lbl">Total Hours</div>
        </div>
      </div>

      {/* Fun facts */}
      <div className="fun-facts">
        <div className="fun-item">🎂 Next birthday in <strong>{result.nextBirthdayDays} days</strong> ({result.nextBirthdayDate})</div>
        <div className="fun-item">📅 You were born on a <strong>{result.dayOfWeek}</strong></div>
        <div className="fun-item">⭐ Zodiac sign: <strong>{result.zodiacSign}</strong></div>
      </div>
    </div>
  )
}
