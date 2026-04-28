import FAQSchema from "@/components/FAQSchema"
import AdUnit from "@/components/AdUnit"
import Breadcrumbs from "@/components/Breadcrumbs"
import Link from 'next/link'
import { getZodiacSign } from "@/lib/ageUtils"

export const revalidate = 86400

const months = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
];

const monthDays: Record<string, number> = {
  january: 31, february: 29, march: 31, april: 30, may: 31, june: 30,
  july: 31, august: 31, september: 30, october: 31, november: 30, december: 31
};

export async function generateMetadata({ params }: { params: { date: string } }) {
  const { date } = await params
  const [month, day] = date.split('-')
  const dobDisplay = `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}`;
  const currentYear = new Date().getFullYear();
  
  const title = `Born on ${dobDisplay}? Countdown to Your Birthday ${currentYear}`;
  const description = `Find out exactly how many days until your next birthday if you were born on ${dobDisplay}. See your zodiac sign, fun facts, and age tools for your special day.`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://agecalculator.agecalculatormaster.com/age/birthday/${date}`,
    },
    twitter: {
      title,
      description,
    },
    alternates: { canonical: `https://agecalculator.agecalculatormaster.com/age/birthday/${date}` },
  }
}

export async function generateStaticParams() {
  const params = []
  for (const month of months) {
    for (let day = 1; day <= monthDays[month]; day++) {
      params.push({ date: `${month}-${day}` })
    }
  }
  return params
}

export default async function Page({ params }: { params: { date: string } }) {
  const { date: dateStr } = await params
  const [month, dayStr] = dateStr.split('-')
  const day = Number(dayStr)

  if (!months.includes(month) || isNaN(day) || day < 1 || day > monthDays[month]) {
    return <h1>Invalid Birthday</h1>
  }

  const monthIndex = months.indexOf(month);
  const now = new Date();
  let nextBday = new Date(now.getFullYear(), monthIndex, day);
  if (nextBday < now) {
    nextBday.setFullYear(now.getFullYear() + 1);
  }
  const daysUntil = Math.ceil((nextBday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  const dobDisplay = `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}`;
  const zodiac = getZodiacSign(monthIndex + 1, day);

  return (
    <main style={{ padding: "0 1rem", maxWidth: "800px", margin: "auto" }}>
      <header style={{ background: '#ffffff', color: '#00ADB5', padding: '1.5rem 0', textAlign: 'center' }}>
        <Breadcrumbs items={[{ name: `Birthday ${dobDisplay}`, path: `/age/birthday/${dateStr}` }]} />
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0, letterSpacing: '-0.025em' }}>
            Born on {dobDisplay}
          </h1>
        </Link>
      </header>

      <div className="calculator-card" style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#00ADB5', marginBottom: '1.5rem' }}>Next Birthday Countdown</h2>
        <div className="age-main" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          <span className="age-num" style={{ fontSize: '4rem' }}>{daysUntil}</span>
          <span className="age-label" style={{ fontSize: '1.5rem' }}>days to go!</span>
        </div>
        <p>Your next birthday is on <strong>{nextBday.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong>.</p>
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f0f9ff', borderRadius: '12px', display: 'inline-block' }}>
          <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: '#0369a1' }}>
            Your Zodiac Sign: {zodiac}
          </p>
        </div>
      </div>

      <AdUnit
        slot="XXXXXXXXXX"
        format="horizontal"
        style={{ margin: '1.5rem 0' }}
      />

      <section style={{ margin: '2rem 0', lineHeight: 1.7 }}>
        <h2>Facts about {dobDisplay} Birthdays</h2>
        <p>
          Each year, more than 19 million people celebrate their birthday on the same day as you! 
          Being born on {dobDisplay} makes you special. As a <strong>{zodiac.split(' ')[0]}</strong>, 
          you are part of a unique group of individuals known for their distinct personality traits and astrological alignment.
        </p>
        <p>
          Whether you're planning a party or just curious about how long you've been around, 
          knowing your next birthday is {daysUntil} days away helps you prepare for the celebration. 
          The {dobDisplay} birthday is shared by many notable figures and historical events across the centuries.
        </p>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2>Explore Age by Birth Year</h2>
        <p>Select a birth year to find your exact age if you were born on {dobDisplay} in that year:</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.75rem', marginTop: '1rem' }}>
          {[1980, 1985, 1990, 1995, 2000, 2005, 2010].map(y => (
            <Link key={y} href={`/age/${y}`} className="year-link"
              style={{ padding: '0.75rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: '#00ADB5', fontWeight: 500, display: 'block' }}>
              Born in {y}
            </Link>
          ))}
        </div>
      </section>

      <div style={{ textAlign: 'center', margin: '3rem 0' }}>
         <Link href="/" className="calc-btn" style={{ textDecoration: 'none' }}>
           Go to Age Calculator
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
