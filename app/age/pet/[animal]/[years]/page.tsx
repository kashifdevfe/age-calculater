import AdUnit from "@/components/AdUnit"
import Breadcrumbs from "@/components/Breadcrumbs"
import Link from 'next/link'

export const revalidate = 86400

const animals = ['dog', 'cat']
const ages = Array.from({ length: 20 }, (_, i) => i + 1)

export async function generateMetadata({ params }: { params: { animal: string, years: string } }) {
  const { animal, years } = await params
  const humanYears = calculatePetAge(animal, Number(years))
  return {
    title: `${years} ${animal} years in human years – Pet Age Calculator`,
    description: `How old is a ${years} year old ${animal} in human years? A ${years} year old ${animal} is approximately ${humanYears} human years old. Calculate pet age instantly.`,
    alternates: { canonical: `https://agecalculatormaster.com/age/pet/${animal}/${years}` },
    robots: { index: true, follow: true },
  }
}

function calculatePetAge(animal: string, years: number) {
  if (years <= 0) return 0
  if (animal === 'dog' || animal === 'cat') {
    if (years === 1) return 15
    if (years === 2) return 24
    return 24 + (years - 2) * 4
  }
  return years * 7 // Default fall back
}

export async function generateStaticParams() {
  const params = []
  for (const animal of animals) {
    for (const age of ages) {
      params.push({ animal, years: age.toString() })
    }
  }
  return params
}

export default async function Page({ params }: { params: { animal: string, years: string } }) {
  const { animal, years } = await params
  const y = Number(years)
  const humanYears = calculatePetAge(animal, y)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How old is a ${years} year old ${animal} in human years?`,
        acceptedAnswer: { "@type": "Answer", text: `A ${years} year old ${animal} is approximately ${humanYears} years old in human years.` }
      },
      {
        "@type": "Question",
        name: `How do you calculate ${animal} age?`,
        acceptedAnswer: { "@type": "Answer", text: `For both dogs and cats, the first year is roughly 15 human years, the second is 9, and each subsequent year is about 4 human years.` }
      }
    ]
  }

  return (
    <main style={{ padding: "0 1rem", maxWidth: "800px", margin: "auto" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header style={{ background: '#ffffff', color: '#00ADB5', padding: '2rem 1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Breadcrumbs items={[{ name: `${years} Year Old ${animal}`, path: `/age/pet/${animal}/${years}` }]} />
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, letterSpacing: '-0.025em' }}>
            {years} {animal === 'dog' ? 'Dog' : 'Cat'} Years to Human Years
          </h1>
        </Link>
      </header>

      <div className="calculator-card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '1.5rem' }}>
          A <strong>{years} year old {animal}</strong> is approximately:
        </p>
        
        <div className="age-main" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          <span className="age-num" style={{ fontSize: '5rem' }}>{humanYears}</span>
          <span className="age-label" style={{ fontSize: '1.5rem' }}>human years</span>
        </div>

        <div className="stats-grid" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div className="stat-card">
            <div className="stat-val">{animal.toUpperCase()}</div>
            <div className="stat-lbl">Species</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{years}</div>
            <div className="stat-lbl">{animal.charAt(0).toUpperCase() + animal.slice(1)} Age</div>
          </div>
        </div>
      </div>

      <AdUnit slot="XXXXXXXXXX" format="rectangle" style={{ margin: '2rem auto', display: 'block', maxWidth: '336px' }} />

      <section style={{ margin: '2rem 0', lineHeight: 1.7 }}>
        <h2>How are {animal} years calculated?</h2>
        <p>
          It's a common myth that one {animal} year equals seven human years. In reality, {animal}s age much 
          faster in their first two years of life.
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: '#4b5563' }}>
          <li>The first year of a {animal}'s life is equal to approximately <strong>15 human years</strong>.</li>
          <li>The second year is equal to approximately <strong>9 human years</strong>.</li>
          <li>After that, each additional year is equal to about <strong>4 human years</strong>.</li>
        </ul>
        
        <h3 style={{ marginTop: '1.5rem' }}>Pet Age Comparison Table</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ background: '#f9fafb' }}>
              <th style={{ padding: '0.75rem', border: '1px solid #e5e7eb', textAlign: 'left' }}>{animal.charAt(0).toUpperCase() + animal.slice(1)} Age</th>
              <th style={{ padding: '0.75rem', border: '1px solid #e5e7eb', textAlign: 'left' }}>Human Equivalent</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 5, 10, 15, 20].map(a => (
              <tr key={a}>
                <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>{a} years</td>
                <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>{calculatePetAge(animal, a)} years old</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2>Other Pet Conversions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {animals.filter(a => a !== animal).map(a => (
            <Link key={a} href={`/age/pet/${a}/${years}`} className="year-link"
              style={{ padding: '1rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: '#00ADB5', fontWeight: 600 }}>
               {years} {a.charAt(0).toUpperCase() + a.slice(1)} Years
            </Link>
          ))}
          <Link href="/age/pet/dog/1" className="year-link" style={{ padding: '1rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: '#00ADB5', fontWeight: 600 }}>
             Dog Age Calculator
          </Link>
        </div>
      </section>

      <div style={{ textAlign: 'center', margin: '3rem 0' }}>
        <Link href="/" className="calc-btn" style={{ textDecoration: 'none' }}>
          Human Age Calculator
        </Link>
      </div>

      <footer style={{ padding: '2rem 1rem', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} Age Calculator — Pet Age Tool</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/privacy" style={{ color: '#00ADB5', marginRight: '1.5rem', fontWeight: 500, textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#00ADB5', fontWeight: 500, textDecoration: 'none' }}>Terms of Use</Link>
        </p>
      </footer>
    </main>
  )
}
