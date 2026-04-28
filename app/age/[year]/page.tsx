import { calculateAge } from "@/lib/age"
import { generateSEO } from "@/lib/seo"
import FAQSchema from "@/components/FAQSchema"
import AdUnit from "@/components/AdUnit"
import Link from 'next/link'
import Breadcrumbs from "@/components/Breadcrumbs"
import { getHistoricalContext } from "@/lib/historicalData"

function HowToSchema({ year, age }: { year: number; age: { years: number; currentYear: number } }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to calculate your age if born in ${year}`,
    "step": [
      { "@type": "HowToStep", "position": 1, "text": "Go to the Age Calculator homepage." },
      { "@type": "HowToStep", "position": 2, "text": `Enter your birth year (${year}) in the date of birth field.` },
      { "@type": "HowToStep", "position": 3, "text": "Click the 'Calculate My Age' button." },
      { "@type": "HowToStep", "position": 4, "text": `Your exact age appears: ${age.years} years old in ${age.currentYear}.` }
    ]
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export const revalidate = 86400 // ISR (24 hours)

export async function generateMetadata({ params }: { params: { year: string } }) {
  const { year } = await params
  return generateSEO(year)
}

export async function generateStaticParams() {
  const startYear = 1900
  const endYear = new Date().getFullYear()

  const years = []

  for (let y = startYear; y <= endYear; y++) {
    years.push({ year: y.toString() })
  }

  return years
}

export default async function Page({ params }: { params: { year: string } }) {
  const { year: yearStr } = await params
  const year = Number(yearStr)

  if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
    return (
      <div className="container">
        <h1>Invalid Year</h1>
        <p>Please enter a valid birth year between 1900 and {new Date().getFullYear()}.</p>
        <Link href="/" className="calc-btn" style={{ display: 'inline-block', width: 'auto', textDecoration: 'none', textAlign: 'center' }}>
          Back to Home
        </Link>
      </div>
    )
  }

  const age = calculateAge(year)
  const historicalText = getHistoricalContext(year)
  const adjacentYears = [year - 5, year - 1, year + 1, year + 5].filter(y => y >= 1900 && y <= new Date().getFullYear())

  return (
    <main style={{ padding: "0 1rem", maxWidth: "800px", margin: "auto" }}>
      <FAQSchema year={year} />
      <HowToSchema year={year} age={age} />
      
      <header style={{ background: '#ffffff', color: '#00ADB5', padding: '2rem 1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Breadcrumbs items={[{ name: `Born in ${year}`, path: `/age/${year}` }]} />
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/logo.png" alt="Age Calculator Logo" style={{ width: '56px', height: '56px', marginBottom: '0.75rem' }} />
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, letterSpacing: '-0.025em' }}>
            Age if Born in {year}
          </h1>
        </Link>
      </header>

      <div className="calculator-card" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
          If you were born in <strong>{year}</strong>, you are currently:
        </p>
        
        <div className="age-main" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          <span className="age-num" style={{ fontSize: '4rem' }}>{age.years}</span>
          <span className="age-label" style={{ fontSize: '1.5rem' }}>years old</span>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-val">{age.months.toLocaleString()}</div>
            <div className="stat-lbl">Months Old</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{age.days.toLocaleString()}</div>
            <div className="stat-lbl">Days Old (approx)</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{age.currentYear}</div>
            <div className="stat-lbl">Current Year</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{year}</div>
            <div className="stat-lbl">Born Year</div>
          </div>
        </div>
      </div>

      {/* Ad Unit — Peak Attention */}
      <AdUnit
        slot="XXXXXXXXXX"
        format="rectangle"
        style={{ margin: '1.5rem auto', display: 'block', maxWidth: '336px' }}
      />

      <section style={{ margin: '2rem 0', lineHeight: 1.7 }}>
        <h2>Historical Context: Being Born in {year}</h2>
        <p>{historicalText}</p>

        <h3 style={{ marginTop: '1.5rem' }}>How is your age calculated?</h3>
        <p>
          Calculating your exact age when born in {year} is a simple process of subtraction. 
          By taking the current year ({age.currentYear}) and subtracting your birth year ({year}), 
          we find that you are {age.years} years old.
        </p>
        <p>
          To give you a better perspective, we've also converted that into months and days. 
          Assuming an average year length of 365.25 days (to account for leap years), a person 
          born in {year} has lived approximately {age.days.toLocaleString()} days!
        </p>
      </section>

      {/* Adjacent Year Internal Links */}
      {adjacentYears.length > 0 && (
        <section style={{ margin: '2rem 0' }}>
          <h2>Related Year Calculators</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.75rem', marginTop: '1rem' }}>
            {adjacentYears.map(y => (
              <Link key={y} href={`/age/${y}`} className="year-link"
                style={{ padding: '0.75rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: '#00ADB5', fontWeight: 500, display: 'block' }}>
                Born in {y}
              </Link>
            ))}
          </div>
        </section>
      )}

      <div style={{ textAlign: 'center', margin: '3rem 0' }}>
         <Link href="/" className="calc-btn" style={{ textDecoration: 'none' }}>
           Calculate Exact Birth Date
         </Link>
      </div>

      <footer style={{ padding: '2rem 1rem', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} Age Calculator — programmatic SEO Page</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/privacy" style={{ color: '#00ADB5', marginRight: '1.5rem', fontWeight: 500, textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#00ADB5', fontWeight: 500, textDecoration: 'none' }}>Terms of Use</Link>
        </p>
      </footer>
    </main>
  )
}
