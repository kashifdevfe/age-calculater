import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy – Age Calculator',
  description: 'Privacy Policy for Age Calculator. Learn how we handle your data and our use of cookies and advertising.',
  robots: { index: false, follow: true } // Usually better to not index legal pages to save crawl budget
}

export default function PrivacyPage() {
  return (
    <main style={{ padding: "0 1rem", maxWidth: "800px", margin: "auto" }}>
      <header style={{ background: '#ffffff', color: '#00ADB5', padding: '2rem 1rem', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Privacy Policy</h1>
        </Link>
      </header>

      <div className="container" style={{ lineHeight: 1.8, color: '#4b5563' }}>
        <p style={{ marginTop: '2rem' }}>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <section style={{ margin: '2rem 0' }}>
          <h2>1. Introduction</h2>
          <p>Welcome to Age Calculator. We value your privacy and are committed to protecting it. This Privacy Policy explains what information we collect and how it is used.</p>
        </section>

        <section style={{ margin: '2rem 0' }}>
          <h2>2. Information We Collect</h2>
          <p><strong>Personal Data:</strong> We do not require users to register or provide any personal identification information to use our calculator.</p>
          <p><strong>Log Data:</strong> Like most websites, we collect information that your browser sends whenever you visit our site ("Log Data"). This may include information such as your computer's IP address, browser type, browser version, the pages you visit, and other statistics.</p>
        </section>

        <section style={{ margin: '2rem 0' }}>
          <h2>3. Cookies and Advertising</h2>
          <p>We use cookies to serve ads and analyze our traffic. We partner with third-party vendors, including Google, who use cookies to serve ads based on a user's prior visits to your website or other websites.</p>
          <p>Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to your sites and/or other sites on the Internet.</p>
          <p>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#00ADB5' }}>Ads Settings</a>.</p>
        </section>

        <section style={{ margin: '2rem 0' }}>
          <h2>4. Data Accuracy</h2>
          <p>While we strive for 100% accuracy in our calculations, this tool is for informational purposes only. We are not responsible for any decisions made based on the results provided by this calculator.</p>
        </section>

        <section style={{ margin: '2rem 0' }}>
          <h2>5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at support@yourdomain.com.</p>
        </section>

        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <Link href="/" className="calc-btn" style={{ textDecoration: 'none' }}>
            Back to Calculator
          </Link>
        </div>
      </div>

      <footer style={{ background: '#ffffff', color: '#4b5563', padding: '2rem 1rem', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
        <p>© {new Date().getFullYear()} Age Calculator — Free Online Tool</p>
      </footer>
    </main>
  )
}
