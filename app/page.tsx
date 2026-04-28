import type { Metadata } from 'next'
import AgeCalculator from '@/components/AgeCalculator'
import FAQSection from '@/components/FAQSection'
import AdUnit from '@/components/AdUnit'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Age Calculator — Calculate Your Exact Age Free Online',
  description: 'Use our free age calculator to find your exact age in years, months, weeks, and days. Just enter your date of birth — instant results, no signup needed.',
  alternates: {
    canonical: 'https://agecalculator.example.com',
  },
}

// JSON-LD Structured Data for Google rich results
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://agecalculator.example.com/#app',
      name: 'Age Calculator',
      url: 'https://agecalculator.example.com',
      description: 'Free online age calculator to find exact age in years, months, weeks, days.',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I calculate my exact age?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Enter your date of birth in the age calculator above. It will instantly show your exact age in years, months, weeks, days, hours, and minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'How old am I if I was born in 2000?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you were born in 2000, you are 25 years old in 2025 (before your birthday) or 26 years old (after your birthday). Use the calculator above for your exact date.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many days old am I?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the age calculator above — it shows your exact age in days, weeks, months, and years all at once.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this age calculator free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, this age calculator is completely free to use with no signup or registration required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I calculate someone else\'s age?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! You can enter any date of birth to calculate the age of anyone — a friend, family member, or even a historical figure.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://agecalculator.example.com',
        },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Header */}
        <header style={{ background: '#ffffff', color: '#00ADB5', padding: '1.5rem 1rem', textAlign: 'center', borderBottom: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/logo.png" alt="Age Calculator Logo" style={{ width: '64px', height: '64px', marginBottom: '0.5rem' }} />
          <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0, letterSpacing: '-0.025em' }}>
            Age Calculator
          </h1>
          <p style={{ margin: '0.5rem 0 0', color: '#4b5563', fontSize: '1.1rem' }}>
            Find your exact age in years, months, weeks & days — instantly free
          </p>
        </header>

        <div className="container">

          {/* Ad Unit — Top (above the fold, highest CTR) */}
          <AdUnit
            slot="XXXXXXXXXX"
            format="horizontal"
            style={{ margin: '1rem 0' }}
          />

          {/* Main Calculator */}
          <AgeCalculator />

          {/* Ad Unit — After result (peak attention moment) */}
          <AdUnit
            slot="XXXXXXXXXX"
            format="rectangle"
            style={{ margin: '1.5rem auto', display: 'block', maxWidth: '336px' }}
          />

          {/* How It Works Section — SEO content */}
          <section style={{ margin: '2rem 0' }}>
            <h2>How to Use the Age Calculator</h2>
            <ol>
              <li>Enter your <strong>date of birth</strong> using the date picker above.</li>
              <li>The calculator will instantly show your <strong>exact age</strong>.</li>
              <li>See your age in years, months, weeks, days, hours, and minutes.</li>
              <li>You can also calculate the age of anyone — just enter their birth date.</li>
            </ol>
          </section>

          {/* FAQ Section with Schema */}
          <FAQSection />

          {/* Ad Unit — Bottom */}
          <AdUnit
            slot="XXXXXXXXXX"
            format="horizontal"
            style={{ margin: '1.5rem 0' }}
          />

          {/* Popular Years Section — pSEO Internal Linking */}
          <section style={{ margin: '2rem 0' }}>
            <h2>Check Age by Birth Year</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              {[1980, 1985, 1990, 1995, 2000, 2005, 2010].map((year) => (
                <a 
                  key={year} 
                  href={`/age/${year}`}
                  className="year-link"
                  style={{ 
                    padding: '0.75rem', 
                    background: '#ffffff', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px', 
                    textAlign: 'center', 
                    textDecoration: 'none', 
                    color: '#00ADB5',
                    fontWeight: 500,
                    transition: 'all 0.15s'
                  }}
                >
                  Born in {year}
                </a>
              ))}
            </div>
          </section>

          {/* New pSEO Sections: Birthdays & Dates */}
          <section style={{ margin: '2rem 0' }}>
            <h2>Birthday Countdowns</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              {["january-1", "march-17", "july-4", "october-31", "december-25"].map((date) => (
                <a 
                  key={date} 
                  href={`/age/birthday/${date}`}
                  className="year-link"
                  style={{ 
                    padding: '0.75rem', 
                    background: '#ffffff', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px', 
                    textAlign: 'center', 
                    textDecoration: 'none', 
                    color: '#00ADB5',
                    fontWeight: 500
                  }}
                >
                  {date.replace('-', ' ')}
                </a>
              ))}
            </div>
          </section>

          {/* New pSEO Sections: Specialized Tools */}
          <section style={{ margin: '2rem 0' }}>
            <h2>Specialized Age Tools</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <Link href="/age/for-visa" className="year-link" style={{ padding: '1rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: '#00ADB5', fontWeight: 600 }}>
                Visa Age Requirements
              </Link>
              <Link href="/age/in-days" className="year-link" style={{ padding: '1rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: '#00ADB5', fontWeight: 600 }}>
                Calculate Age in Days
              </Link>
              <Link href="/age/in-months" className="year-link" style={{ padding: '1rem', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', color: '#00ADB5', fontWeight: 600 }}>
                Calculate Age in Months
              </Link>
            </div>
          </section>

          {/* Extra SEO Content */}
          <section style={{ margin: '2rem 0', color: '#4b5563', lineHeight: 1.7 }}>
            <h2>About This Age Calculator</h2>
            <p>
              Our free online age calculator helps you determine your exact age from your date of birth.
              Whether you need your age for a visa application, a birthday countdown, a legal document,
              or just out of curiosity — this tool gives you instant, accurate results in years, months,
              weeks, days, hours, and even minutes.
            </p>
            <h3>Why Use an Online Age Calculator?</h3>
            <p>
              Calculating your exact age manually — especially in months and days — is surprisingly tricky.
              Different months have different lengths, and leap years add extra complexity. Our calculator
              handles all of this automatically and gives you a precise result instantly.
            </p>
            <h3>Age Calculation Around the World</h3>
            <p>
              Different cultures count age differently. In most Western countries, age increases on your
              birthday each year. In some East Asian cultures, a person is considered 1 year old at birth.
              Our calculator uses the standard international system used for legal documents and official purposes.
            </p>
          </section>

        </div>

        {/* Footer */}
        <footer style={{ background: '#ffffff', color: '#4b5563', padding: '2rem 1rem', textAlign: 'center', fontSize: '0.875rem', borderTop: '1px solid #e5e7eb' }}>
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
