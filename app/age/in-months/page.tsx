import type { Metadata } from 'next'
import AgeCalculator from '@/components/AgeCalculator'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'How Old Am I in Months? – Age in Months Calculator',
  description: 'Calculate your exact age in months, weeks, and days. Enter your date of birth to find out how many months old you are — instantly and for free.',
  alternates: { canonical: 'https://age-calculater-one.vercel.app/age/in-months' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How old am I in months?",
      acceptedAnswer: { "@type": "Answer", text: "Use the calculator above. Your age in months equals your age in years multiplied by 12, plus any additional months since your last birthday." }
    },
    {
      "@type": "Question",
      name: "How many months old is a 25-year-old?",
      acceptedAnswer: { "@type": "Answer", text: "A 25-year-old is approximately 300 months old (25 × 12). Use our calculator for the precise count including remaining months." }
    },
    {
      "@type": "Question",
      name: "Why would I need to know my age in months?",
      acceptedAnswer: { "@type": "Answer", text: "Age in months is often required for pediatric health checks, some visa applications, insurance policies, and legal documents in certain countries." }
    }
  ]
}

import Link from 'next/link'

export default function InMonthsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <header style={{ background: '#ffffff', color: '#00ADB5', padding: '2rem 1rem', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>How Old Am I in Months?</h1>
          <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>Calculate your exact age in months, weeks, and days</p>
        </header>

        <div className="container">
          <AdUnit slot="XXXXXXXXXX" format="horizontal" style={{ margin: '1rem 0' }} />
          <AgeCalculator />
          <AdUnit slot="XXXXXXXXXX" format="rectangle" style={{ margin: '1.5rem auto', display: 'block', maxWidth: '336px' }} />

          <section style={{ margin: '2rem 0', lineHeight: 1.7 }}>
            <h2>Age in Months — Quick Reference</h2>
            <p>Your age in months is simply your years multiplied by 12, plus the extra months since your last birthday. This is commonly needed for medical records, insurance, and visa applications.</p>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ background: '#f9fafb' }}>
                  <th style={{ padding: '0.75rem', border: '1px solid #e5e7eb', textAlign: 'left' }}>Age (Years)</th>
                  <th style={{ padding: '0.75rem', border: '1px solid #e5e7eb', textAlign: 'left' }}>Total Months</th>
                  <th style={{ padding: '0.75rem', border: '1px solid #e5e7eb', textAlign: 'left' }}>Total Weeks</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 5, 10, 18, 21, 25, 30, 40, 50, 60].map(y => (
                  <tr key={y}>
                    <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>{y} year{y > 1 ? 's' : ''}</td>
                    <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>{(y * 12).toLocaleString()} months</td>
                    <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>{Math.floor(y * 52.18).toLocaleString()} weeks</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ marginTop: '1.5rem' }}>When Is Age in Months Important?</h3>
            <p>Age in months is commonly required in the following situations:</p>
            <ul style={{ paddingLeft: '1.5rem', color: '#4b5563' }}>
              <li style={{ marginBottom: '0.4rem' }}><strong>Pediatric health checks:</strong> Doctors use months to track development in children under 2 years old.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Visa applications:</strong> Some countries specify age requirements in months for child visas.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Insurance policies:</strong> Life and health insurance premiums often change at specific month milestones.</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>School enrollment:</strong> Many schools require children to be a certain number of months old to enroll.</li>
            </ul>
          </section>

          <section className="faq-section" style={{ margin: '2rem 0' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details className="faq-item"><summary className="faq-q">How old am I in months?</summary><p className="faq-a">Enter your date of birth above and click Calculate. Your total months lived will appear in the stats grid.</p></details>
              <details className="faq-item"><summary className="faq-q">How many months old is a 25-year-old?</summary><p className="faq-a">Approximately 300 months (25 × 12). Use the calculator for your exact count including remaining months since your last birthday.</p></details>
              <details className="faq-item"><summary className="faq-q">Is age in months the same everywhere?</summary><p className="faq-a">Yes — age in months is a universal measurement. However, some East Asian countries use a traditional age system that adds 1 year at birth. Our calculator uses the internationally standard (Western) system.</p></details>
            </div>
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
