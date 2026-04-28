import AdUnit from "@/components/AdUnit"
import Breadcrumbs from "@/components/Breadcrumbs"
import Link from 'next/link'
import { decadeData } from "@/lib/decadeData"

export const revalidate = 86400

const decadeThemes: Record<number, string> = {
  1900: "The Turn of the Century and the dawn of the modern industrial age.",
  1910: "The era of the Great War and rapid social transformation.",
  1920: "The Roaring Twenties characterized by jazz, economic expansion, and cultural shifts.",
  1930: "The decade of the Great Depression and the resilient human spirit.",
  1940: "The transformative years of World War II and the post-war reconstruction.",
  1950: "The Cold War era and the rise of mid-century modernism and suburbia.",
  1960: "A decade of revolution, civil rights, and the historic Apollo moon landing.",
  1970: "The era of disco, the environmental movement, and technological beginnings.",
  1980: "The bold years of neon, synthesizers, and the rise of personal computing.",
  1990: "The decade that saw the birth of the World Wide Web and the global internet age.",
  2000: "The new millennium marked by the digital social revolution and global interconnectivity.",
  2010: "The decade of mobile transformation, social media dominance, and innovation.",
  2020: "The era of global change, remote breakthroughs, and the AI revolution.",
}

export async function generateMetadata({ params }: { params: { year: string } }) {
  const { year } = await params
  const start = Math.floor(Number(year) / 10) * 10
  return {
    title: `Age Comparison for the ${start}s Decade – Birth Year Guide`,
    description: `Find your age if you were born in the ${start}s. Complete guide to birth years from ${start} to ${start + 9} with historical context.`,
    alternates: { canonical: `https://agecalculator.agecalculatormaster.com/age/decade/${start}` },
    robots: { index: true, follow: true },
  }
}

export async function generateStaticParams() {
  const decades = []
  for (let y = 1900; y <= 2020; y += 10) {
    decades.push({ year: y.toString() })
  }
  return decades
}

export default async function Page({ params }: { params: { year: string } }) {
  const { year } = await params
  const start = Math.floor(Number(year) / 10) * 10
  const theme = decadeThemes[start] || "A significant period of human history and cultural development."
  const decadeInfo = decadeData[start] || {
    ageRange: "various",
    context: "A significant period of human history and cultural development.",
    generation: "multiple generations"
  }
  
  const yearsInDecade = Array.from({ length: 10 }, (_, i) => start + i).filter(y => y <= new Date().getFullYear())

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Birth Years from the ${start}s Decade`,
    description: `A collection of age calculation tools and historical context for individuals born between ${start} and ${start + 9}.`,
  }

  return (
    <main style={{ padding: "0 1rem", maxWidth: "800px", margin: "auto" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header style={{ background: '#ffffff', color: '#00ADB5', padding: '2rem 1rem', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
        <Breadcrumbs items={[{ name: `The ${start}s`, path: `/age/decade/${start}` }]} />
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>Born in the {start}s Decade</h1>
        </Link>
        <p style={{ color: '#4b5563', marginTop: '0.75rem', fontSize: '1.2rem' }}>{theme}</p>
      </header>

      <div className="container" style={{ paddingTop: '2rem' }}>
        <AdUnit slot="XXXXXXXXXX" format="horizontal" style={{ marginBottom: '2rem' }} />

        <section style={{ marginBottom: '3rem' }}>
          <h2>Select Your Exact Birth Year</h2>
          <p>Find the exact calculation for your age, zodiac sign, and next birthday by selecting your year of birth below:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {yearsInDecade.map(y => (
              <Link key={y} href={`/age/${y}`} className="year-link"
                style={{ padding: '1rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: '#00ADB5', fontWeight: 600, fontSize: '1.2rem' }}>
                Born in {y}
              </Link>
            ))}
          </div>
        </section>

        <AdUnit slot="XXXXXXXXXX" format="rectangle" style={{ margin: '1.5rem auto', display: 'block', maxWidth: '336px' }} />

        <section style={{ margin: '2rem 0', lineHeight: 1.8, background: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ color: '#1e293b', marginTop: 0 }}>The Legacy of the {start}s</h2>
          <p style={{ fontSize: '1.1rem', color: '#334155', fontWeight: 500 }}>
            As of {new Date().getFullYear()}, individuals born in the {start}s are currently {decadeInfo.ageRange}.
          </p>
          <p>
            {decadeInfo.context}
          </p>
          <p>
            <strong>Generation:</strong> People born during this decade typically belong to {decadeInfo.generation}. 
            Growing up during this era meant witnessing significant developments that shaped the modern world. 
            Whether you were born at the beginning or the end of the decade, your cohort represents a vital part of our global community.
          </p>
          <p>
            Our specialized year pages within this decade provide tailored content including:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: '#4b5563' }}>
            <li><strong>Exact Age in High Precision</strong> (down to the heartbeats).</li>
            <li><strong>Zodiac Sign & Personal Stats</strong> based on your era.</li>
            <li><strong>Historical Event Summaries</strong> for every single year in the {start}s.</li>
          </ul>
        </section>

        <section style={{ margin: '2rem 0' }}>
            <h2>Explore Other Decades</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
                {[1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020].filter(d => d !== start).map(d => (
                    <Link key={d} href={`/age/decade/${d}`} className="year-link"
                        style={{ padding: '0.6rem 1.2rem', background: '#f3f4f6', borderRadius: '20px', textDecoration: 'none', color: '#4b5563', fontSize: '0.9rem', fontWeight: 500 }}>
                        {d}s
                    </Link>
                ))}
            </div>
        </section>

        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <Link href="/" className="calc-btn" style={{ textDecoration: 'none' }}>
            Back to Global Calculator
          </Link>
        </div>

        <footer style={{ padding: '2rem 1rem', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
          <p>© {new Date().getFullYear()} Age Calculator — Free Online Tool</p>
          <p style={{ marginTop: '0.75rem' }}>
            <Link href="/privacy" style={{ color: '#00ADB5', marginRight: '1.5rem', fontWeight: 500, textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: '#00ADB5', fontWeight: 500, textDecoration: 'none' }}>Terms of Use</Link>
          </p>
        </footer>
      </div>
    </main>
  )
}
