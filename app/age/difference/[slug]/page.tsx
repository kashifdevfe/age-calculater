import AdUnit from "@/components/AdUnit"
import Breadcrumbs from "@/components/Breadcrumbs"
import Link from 'next/link'

export const revalidate = 86400

const popularYears = [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020]

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const [y1, y2] = slug.split('-')
  return {
    title: `Age Difference Between ${y1} and ${y2} – How Many Years Apart?`,
    description: `Calculate the age difference between someone born in ${y1} vs ${y2}. They are ${Math.abs(Number(y2) - Number(y1))} years apart. See months and days difference.`,
    alternates: { canonical: `https://agecalculator.agecalculatormaster.com/age/difference/${slug}` },
    robots: { index: true, follow: true },
  }
}

export async function generateStaticParams() {
  const params = []
  for (const y1 of popularYears) {
    for (const y2 of popularYears) {
      if (y1 !== y2) {
        params.push({ slug: `${y1}-${y2}` })
      }
    }
  }
  return params
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const parts = slug.split('-')

  if (parts.length !== 2) return <h1>Invalid format. Use /age/difference/1990-2000</h1>

  const y1 = Number(parts[0])
  const y2 = Number(parts[1])

  if (isNaN(y1) || isNaN(y2) || y1 < 1900 || y2 < 1900 || y1 > 2100 || y2 > 2100) {
    return <h1>Invalid years. Please enter years between 1900 and 2100.</h1>
  }

  const diff = Math.abs(y2 - y1)
  const diffMonths = diff * 12
  const diffDays = Math.floor(diff * 365.25)
  const older = y1 < y2 ? y1 : y2
  const younger = y1 < y2 ? y2 : y1

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the age difference between someone born in ${y1} and ${y2}?`,
        acceptedAnswer: { "@type": "Answer", text: `The age difference is ${diff} years, or approximately ${diffMonths} months and ${diffDays.toLocaleString()} days.` }
      },
      {
        "@type": "Question",
        name: `Who is older — someone born in ${y1} or ${y2}?`,
        acceptedAnswer: { "@type": "Answer", text: `Someone born in ${older} is older by ${diff} years. They were born ${diff} years before the person born in ${younger}.` }
      }
    ]
  }

  // Adjacent pair suggestions for internal linking
  const relatedPairs = popularYears
    .filter(y => y !== y1 && y !== y2)
    .slice(0, 4)
    .map(y => ({ slug: `${y1}-${y}`, label: `${y1} vs ${y}` }))

  return (
    <main style={{ padding: "0 1rem", maxWidth: "800px", margin: "auto" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header style={{ background: '#ffffff', color: '#00ADB5', padding: '2rem 0', textAlign: 'center' }}>
        <Breadcrumbs items={[{ name: `${y1} vs ${y2}`, path: `/age/difference/${slug}` }]} />
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, letterSpacing: '-0.025em' }}>
            {y1} vs {y2} Age Difference
          </h1>
        </Link>
      </header>

      <div className="calculator-card" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#4b5563' }}>
          A person born in <strong>{y1}</strong> and a person born in <strong>{y2}</strong> are:
        </p>

        <div className="age-main" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          <span className="age-num" style={{ fontSize: '4rem' }}>{diff}</span>
          <span className="age-label" style={{ fontSize: '1.5rem' }}>years apart</span>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-val">{diffMonths.toLocaleString()}</div>
            <div className="stat-lbl">Months Apart</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{diffDays.toLocaleString()}</div>
            <div className="stat-lbl">Days Apart</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{older}</div>
            <div className="stat-lbl">Older Year</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{younger}</div>
            <div className="stat-lbl">Younger Year</div>
          </div>
        </div>
      </div>

      <AdUnit slot="XXXXXXXXXX" format="rectangle" style={{ margin: '1.5rem auto', display: 'block', maxWidth: '336px' }} />

      <section style={{ margin: '2rem 0', lineHeight: 1.7 }}>
        <h2>Understanding the Age Difference</h2>
        <p>
          The age gap between someone born in {y1} and someone born in {y2} is <strong>{diff} years</strong>. 
          This translates to approximately <strong>{diffMonths.toLocaleString()} months</strong> or{' '}
          <strong>{diffDays.toLocaleString()} days</strong> of lived experience between the two people.
        </p>
        <p>
          The person born in {older} is older and would have reached all major life milestones — driving age, 
          voting age, legal drinking age — {diff} years before the person born in {younger}.
        </p>

        <h3 style={{ marginTop: '1.5rem' }}>Related Comparisons</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.75rem', marginTop: '1rem' }}>
          {relatedPairs.map(p => (
            <Link key={p.slug} href={`/age/difference/${p.slug}`} className="year-link"
              style={{ padding: '0.75rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: '#00ADB5', fontWeight: 500, display: 'block' }}>
              {p.label}
            </Link>
          ))}
        </div>
      </section>

      <div style={{ textAlign: 'center', margin: '3rem 0' }}>
        <Link href="/" className="calc-btn" style={{ textDecoration: 'none' }}>
          Calculate Exact Age
        </Link>
      </div>

      <footer style={{ padding: '2rem 1rem', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} Age Calculator — Age Difference Tool</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/privacy" style={{ color: '#00ADB5', marginRight: '1.5rem', fontWeight: 500, textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#00ADB5', fontWeight: 500, textDecoration: 'none' }}>Terms of Use</Link>
        </p>
      </footer>
    </main>
  )
}
