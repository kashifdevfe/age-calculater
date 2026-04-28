import { calculateAge } from "@/lib/ageUtils"
import FAQSchema from "@/components/FAQSchema"
import AdUnit from "@/components/AdUnit"
import Breadcrumbs from "@/components/Breadcrumbs"
import Link from 'next/link'
import ResultDisplay from "@/components/ResultDisplay"

export const revalidate = 86400

import { generateDateSEO } from "@/lib/seo"

export async function generateMetadata({ params }: { params: { date: string } }) {
  const { date } = await params
  return generateDateSEO(date)
}

export async function generateStaticParams() {
  const params = []
  const currentYear = new Date().getFullYear();
  // Generate params for the last 10 years to scale build time
  for (let y = currentYear - 10; y <= currentYear; y++) {
    for (let m = 1; m <= 12; m++) {
      params.push({ date: `${y}-${m.toString().padStart(2, '0')}-01` })
    }
  }
  return params
}

export default async function Page({ params }: { params: { date: string } }) {
  const { date: dateStr } = await params
  const birthDate = new Date(dateStr);
  const now = new Date();

  if (isNaN(birthDate.getTime()) || birthDate > now) {
    return <h1>Invalid Birth Date</h1>
  }

  const age = calculateAge(birthDate, now);

  return (
    <main style={{ padding: "0 1rem", maxWidth: "800px", margin: "auto" }}>
      <header style={{ background: '#ffffff', color: '#00ADB5', padding: '1.5rem 0', textAlign: 'center' }}>
        <Breadcrumbs items={[{ name: `Born on ${dateStr}`, path: `/age/date/${dateStr}` }]} />
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, letterSpacing: '-0.025em' }}>
             Exact Age for {dateStr}
          </h1>
        </Link>
      </header>

      <div className="calculator-card">
        <ResultDisplay result={age} dob={dateStr} />
      </div>

      <AdUnit
        slot="XXXXXXXXXX"
        format="rectangle"
        style={{ margin: '1.5rem auto', display: 'block', maxWidth: '336px' }}
      />

      <section style={{ margin: '2rem 0', lineHeight: 1.7 }}>
        <h2>Age Calculation Details</h2>
        <p>
          Being born on <strong>{birthDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong> 
          means you have lived for {age.totalDays.toLocaleString()} days since your birth. 
          Our calculator accounts for leap years and the varying lengths of months to provide this precise result.
        </p>
        <p>
          You were born on a <strong>{age.dayOfWeek}</strong> and your zodiac sign is <strong>{age.zodiacSign}</strong>.
        </p>
      </section>

      <div style={{ textAlign: 'center', margin: '3rem 0' }}>
         <Link href="/" className="calc-btn" style={{ textDecoration: 'none' }}>
           Calculate Another Age
         </Link>
      </div>

      <footer style={{ padding: '2rem 1rem', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} Age Calculator — Free Online Tool</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/privacy" style={{ color: '#00ADB5', marginRight: '1.5rem', fontWeight: 500, textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#00ADB5', fontWeight: 500, textDecoration: 'none' }}>Terms of Use</Link>
        </p>
      </footer>
    </main>
  )
}
