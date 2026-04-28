import type { Metadata } from 'next'
import AgeCalculator from '@/components/AgeCalculator'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'How Many Days Old Am I? – Day Age Calculator',
  description: 'Find out exactly how many days old you are. Enter your date of birth to calculate your total age in days, weeks, months, and years instantly.',
  alternates: { canonical: 'https://agecalculator.example.com/age/in-days' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many days old am I?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the calculator above: enter your date of birth and click Calculate. The result shows your total age in days, which is approximately 365.25 × your age in years."
      }
    },
    {
      "@type": "Question",
      name: "How do I calculate how many days I have been alive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply your age in years by 365, then add 1 extra day per 4 years (for leap years). Our calculator does this automatically and shows the precise total."
      }
    },
    {
      "@type": "Question",
      name: "How many days old is a 30-year-old person?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 30-year-old person has lived approximately 10,957 days (30 × 365 + 7 leap days). Use our calculator for your exact count."
      }
    }
  ]
}

import Link from 'next/link'

export default function InDaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <header style={{ background: '#ffffff', color: '#00ADB5', padding: '2rem 1rem', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>How Many Days Old Am I?</h1>
          <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>Enter your date of birth to calculate your exact age in days</p>
        </header>

        <div className="container">
          <AdUnit slot="XXXXXXXXXX" format="horizontal" style={{ margin: '1rem 0' }} />
          <AgeCalculator />
          <AdUnit slot="XXXXXXXXXX" format="rectangle" style={{ margin: '1.5rem auto', display: 'block', maxWidth: '336px' }} />

          <section style={{ margin: '2rem 0', lineHeight: 1.7 }}>
            <h2>Understanding Your Age in Days</h2>
            <p>
              Knowing how many days old you are is a fascinating way to measure your life. 
              On average, a year consists of 365.25 days — the extra quarter accounts for 
              the leap year that occurs every four years. Our calculator uses this precise 
              figure to give you an accurate total.
            </p>
            <h3>Quick Reference Table</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ background: '#f9fafb' }}>
                  <th style={{ padding: '0.75rem', border: '1px solid #e5e7eb', textAlign: 'left' }}>Age (Years)</th>
                  <th style={{ padding: '0.75rem', border: '1px solid #e5e7eb', textAlign: 'left' }}>Approximate Days</th>
                  <th style={{ padding: '0.75rem', border: '1px solid #e5e7eb', textAlign: 'left' }}>Approximate Weeks</th>
                </tr>
              </thead>
              <tbody>
                {[10, 18, 20, 25, 30, 40, 50, 60, 70, 80].map(y => (
                  <tr key={y}>
                    <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>{y} years</td>
                    <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>{Math.floor(y * 365.25).toLocaleString()} days</td>
                    <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>{Math.floor(y * 52.18).toLocaleString()} weeks</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section style={{ margin: '2rem 0', lineHeight: 1.7 }}>
            <h2>Frequently Asked Questions</h2>
            <details className="faq-item"><summary className="faq-q">How many days old am I?</summary><p className="faq-a">Enter your date of birth above and click Calculate. You'll see your exact total days lived.</p></details>
            <details className="faq-item"><summary className="faq-q">How many days old is a 30-year-old?</summary><p className="faq-a">Approximately 10,957 days. Use the calculator above for your precise count based on your exact birth date.</p></details>
            <details className="faq-item"><summary className="faq-q">Does the calculator account for leap years?</summary><p className="faq-a">Yes. Our calculator uses the exact millisecond difference between your birth date and today, which naturally accounts for all leap years.</p></details>
          </section>

          <AdUnit slot="XXXXXXXXXX" format="horizontal" style={{ margin: '1.5rem 0' }} />
        </div>

        <footer style={{ background: '#ffffff', color: '#4b5563', padding: '2rem 1rem', textAlign: 'center', borderTop: '1px solid #e5e7eb', fontSize: '0.875rem' }}>
          <p>© {new Date().getFullYear()} Age Calculator — Free Online Tool</p>
          <p style={{ marginTop: '0.75rem' }}>
            <Link href="/privacy" style={{ color: '#00ADB5', marginRight: '1.5rem', fontWeight: 500, textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: '#00ADB5', fontWeight: 500, textDecoration: 'none' }}>Terms of Use</Link>
          </p>
        </footer>
      </main>
    </>
  )
}
