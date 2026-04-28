import type { Metadata } from 'next'
import AgeCalculator from '@/components/AgeCalculator'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Age Calculator for Visa Application – Minimum Age Requirements',
  description: 'Check if you meet the minimum age requirement for your visa application. Calculate your exact age and compare against visa age rules for popular countries.',
  alternates: { canonical: 'https://agecalculator.example.com/age/for-visa' },
  robots: { index: true, follow: true },
}

const visaAgeRules = [
  { country: 'United States', minAge: 14, notes: 'Under 14 and over 79 may waive the in-person interview.' },
  { country: 'United Kingdom', minAge: 18, notes: 'Standard visitor visa. Minors need additional documentation.' },
  { country: 'Schengen Area (EU)', minAge: 18, notes: 'Minors require parental consent and additional documents.' },
  { country: 'Canada', minAge: 18, notes: 'Minors need a Custodian Declaration form.' },
  { country: 'Australia', minAge: 18, notes: 'Minors may need parental authority to apply.' },
  { country: 'Japan', minAge: 18, notes: 'Minors need parental or guardian signatures on application.' },
  { country: 'UAE', minAge: 18, notes: 'Minors need NOC from parent/guardian.' },
  { country: 'New Zealand', minAge: 17, notes: 'Under 17 require a Special Direction application.' },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum age for a US visa?",
      acceptedAnswer: { "@type": "Answer", text: "There is no strict minimum age for a US visa. However, applicants under 14 and over 79 may qualify for a visa interview waiver. All minors must still apply and meet all requirements." }
    },
    {
      "@type": "Question",
      name: "Do I need to be 18 to apply for a visa?",
      acceptedAnswer: { "@type": "Answer", text: "Most countries allow minors to apply for visas, but require parental or guardian consent, additional documentation, and sometimes in-person attendance by a parent. Use our calculator to verify your exact age." }
    },
    {
      "@type": "Question",
      name: "How do I calculate my exact age for a visa application?",
      acceptedAnswer: { "@type": "Answer", text: "Use the age calculator above. Enter your exact date of birth. The tool will give you your precise age on today's date, formatted in years, months, and days — exactly as required by most visa applications." }
    }
  ]
}

import Link from 'next/link'

export default function ForVisaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <header style={{ background: '#ffffff', color: '#00ADB5', padding: '2rem 1rem', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Age Calculator for Visa Applications</h1>
          <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>Verify your exact age and check minimum age requirements by country</p>
        </header>

        <div className="container">
          <AdUnit slot="XXXXXXXXXX" format="horizontal" style={{ margin: '1rem 0' }} />
          
          <AgeCalculator />

          <AdUnit slot="XXXXXXXXXX" format="rectangle" style={{ margin: '1.5rem auto', display: 'block', maxWidth: '336px' }} />

          <section style={{ margin: '2rem 0', lineHeight: 1.7 }}>
            <h2>Minimum Age Requirements by Country</h2>
            <p>
              Many countries have specific age requirements for visa applications, especially for minors. 
              Use the table below to check the age requirements for your destination country.
            </p>

            <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#00ADB5', color: 'white' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Country / Region</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Min. Independent Age</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Notes for Minors</th>
                  </tr>
                </thead>
                <tbody>
                  {visaAgeRules.map((row, i) => (
                    <tr key={row.country} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                      <td style={{ padding: '0.75rem 1rem', border: '1px solid #e5e7eb', fontWeight: 500 }}>{row.country}</td>
                      <td style={{ padding: '0.75rem 1rem', border: '1px solid #e5e7eb' }}>{row.minAge} years</td>
                      <td style={{ padding: '0.75rem 1rem', border: '1px solid #e5e7eb', color: '#4b5563', fontSize: '0.9rem' }}>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={{ marginTop: '1.5rem' }}>Why Does Age Matter for a Visa?</h3>
            <p>
              Age is a critical factor in visa applications for several reasons. Most countries have a minimum 
              age threshold (typically 18) for independent applications without parental consent. 
              Additionally, applicants over a certain age (e.g., 79 for US visas) may receive different 
              processing treatment or interview waivers.
            </p>
            <p>
              Having your precise age — in years, months, and days — ready when filling out visa forms 
              prevents delays and rejections due to incorrect information. Many immigration forms require 
              you to state your age as of the <em>date of application</em>, not your next birthday.
            </p>

            <h3>What Age Information Do Visa Applications Need?</h3>
            <p>Most visa applications require the following age-related information:</p>
            <ul style={{ paddingLeft: '1.5rem', color: '#4b5563' }}>
              <li style={{ marginBottom: '0.4rem' }}><strong>Date of Birth</strong> — exact date (day, month, year)</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Age at Time of Application</strong> — calculated to the day</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Passport Issue and Expiry Dates</strong> — must be valid for the duration of travel</li>
              <li style={{ marginBottom: '0.4rem' }}><strong>Age of Dependents</strong> — for family visa applications</li>
            </ul>
          </section>

          <section className="faq-section" style={{ margin: '2rem 0' }}>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-q">What is the minimum age for a US visa?</summary>
                <p className="faq-a">There is no strict minimum age for a US visa. Applicants under 14 and over 79 may qualify for an interview waiver. Minors still need to meet all other requirements.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">Do I need to be 18 to apply for a Schengen visa?</summary>
                <p className="faq-a">Minors can apply for Schengen visas, but they require notarized parental consent forms, a letter of authorization, and often must appear in person with a parent or guardian.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">How do I calculate my exact age for a visa form?</summary>
                <p className="faq-a">Use the age calculator at the top of this page. Enter your exact birth date and it will show your age in years, months, and days as of today — the exact format visa applications require.</p>
              </details>
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
