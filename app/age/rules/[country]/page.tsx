import AdUnit from "@/components/AdUnit"
import Breadcrumbs from "@/components/Breadcrumbs"
import Link from 'next/link'

export const revalidate = 86400

const countryData: Record<string, any> = {
  usa: { name: 'United States', retirement: 67, driving: 16, voting: 18, drinking: 21 },
  uk: { name: 'United Kingdom', retirement: 66, driving: 17, voting: 18, drinking: 18 },
  canada: { name: 'Canada', retirement: 65, driving: 16, voting: 18, drinking: 19 },
  australia: { name: 'Australia', retirement: 67, driving: 16, voting: 18, drinking: 18 },
  india: { name: 'India', retirement: 60, driving: 18, voting: 18, drinking: 25 }, // Average drinking age varies
  uae: { name: 'United Arab Emirates', retirement: 60, driving: 18, voting: 21, drinking: 21 },
  germany: { name: 'Germany', retirement: 66, driving: 18, voting: 18, drinking: 16 }, // Beer/Wine at 16
  france: { name: 'France', retirement: 64, driving: 18, voting: 18, drinking: 18 },
  japan: { name: 'Japan', retirement: 65, driving: 18, voting: 18, drinking: 20 },
}

export async function generateMetadata({ params }: { params: { country: string } }) {
  const { country } = await params
  const data = countryData[country.toLowerCase()]
  if (!data) return { title: 'Legal Age Rules' }
  
  return {
    title: `Legal Age in ${data.name} – Retirement, Driving & Voting`,
    description: `Current legal age requirements in ${data.name}. Retirement age: ${data.retirement}, Driving: ${data.driving}, Voting: ${data.voting}. Check all age milestones in ${data.name}.`,
    alternates: { canonical: `https://agecalculatormaster.com/age/rules/${country.toLowerCase()}` },
    robots: { index: true, follow: true },
  }
}

export async function generateStaticParams() {
  return Object.keys(countryData).map(country => ({ country }))
}

export default async function Page({ params }: { params: { country: string } }) {
  const { country } = await params
  const data = countryData[country.toLowerCase()]

  if (!data) return <h1>Country not found</h1>

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the retirement age in ${data.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `The current retirement age in ${data.name} is ${data.retirement} years.` }
      },
      {
        "@type": "Question",
        name: `How old do you have to be to drive in ${data.name}?`,
        acceptedAnswer: { "@type": "Answer", text: `The legal driving age in ${data.name} is typically ${data.driving} years old.` }
      }
    ]
  }

  return (
    <main style={{ padding: "0 1rem", maxWidth: "800px", margin: "auto" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header style={{ background: '#ffffff', color: '#00ADB5', padding: '2rem 1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Breadcrumbs items={[{ name: `Legal Age ${data.name}`, path: `/age/rules/${country}` }]} />
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, letterSpacing: '-0.025em' }}>
            Legal Age Milestones in {data.name}
          </h1>
        </Link>
      </header>

      <div className="calculator-card">
        <h2 style={{ textAlign: 'center', color: '#1f2937', marginBottom: '2rem' }}>Current Legal Requirements ({new Date().getFullYear()})</h2>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-val">{data.retirement}</div>
            <div className="stat-lbl">Retirement Age</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{data.driving}</div>
            <div className="stat-lbl">Driving Age</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{data.voting}</div>
            <div className="stat-lbl">Voting Age</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{data.drinking}</div>
            <div className="stat-lbl">Legal Drinking</div>
          </div>
        </div>
      </div>

      <AdUnit slot="XXXXXXXXXX" format="horizontal" style={{ margin: '2rem 0' }} />

      <section style={{ margin: '2rem 0', lineHeight: 1.7 }}>
        <h2>Important Age Milestones in {data.name}</h2>
        <p>
          In {data.name}, major life transitions are defined by specific age thresholds. 
          Understanding these milestones is essential for legal compliance, financial planning, 
          and social participation.
        </p>

        <h3 style={{ marginTop: '1.5rem' }}>Retirement & Pensions</h3>
        <p>
          The official retirement age in {data.name} is currently <strong>{data.retirement}</strong>. 
          This is the age at which citizens typically become eligible for full state pension benefits 
          or social security. However, many people choose to continue working beyond this age or opt 
          for early retirement if they have private pension arrangements. It is important to check 
          the specific contribution requirements for your local pension system to ensure you're 
          fully covered when you reach this milestone.
        </p>

        <h3 style={{ marginTop: '1.5rem' }}>Youth & Independence</h3>
        <p>
          Young people in {data.name} gain independence in stages. The ability to operate a motor 
          vehicle begins at <strong>{data.driving}</strong>, although this often comes with 
          provisional licensing requirements and strict supervision rules for the first year of 
          driving. The right to vote and participate in democratic elections is granted at 
          <strong>{data.voting}</strong>, marking the official transition into full legal adulthood 
          in most jurisdictions.
        </p>

        <h3 style={{ marginTop: '1.5rem' }}>Drinking & Social Laws</h3>
        <p>
          The legal age for purchasing and consuming alcohol in {data.name} is <strong>{data.drinking}</strong>. 
          These laws are strictly enforced to promote public safety and health. It is worth noting 
          that in some regions, there may be specific exceptions for private consumption or 
          different age limits for beer and wine versus spirits, though the general legal limit 
          remains the primary benchmark for businesses and law enforcement.
        </p>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2>Compare with Other Countries</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {Object.keys(countryData).filter(c => c !== country.toLowerCase()).map(c => (
            <Link key={c} href={`/age/rules/${c}`} className="year-link"
              style={{ padding: '0.75rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: '#00ADB5', fontWeight: 500 }}>
               Legal Age in {countryData[c].name}
            </Link>
          ))}
        </div>
      </section>

      <div style={{ textAlign: 'center', margin: '3rem 0' }}>
        <Link href="/" className="calc-btn" style={{ textDecoration: 'none' }}>
          Back to Age Calculator
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
