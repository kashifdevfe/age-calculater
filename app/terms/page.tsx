import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use – Age Calculator',
  description: 'Terms and conditions for using the Age Calculator web application.',
  robots: { index: false, follow: true }
}

export default function TermsPage() {
  return (
    <main style={{ padding: "0 1rem", maxWidth: "800px", margin: "auto" }}>
      <header style={{ background: '#ffffff', color: '#00ADB5', padding: '2rem 1rem', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Terms of Use</h1>
        </Link>
      </header>

      <div className="container" style={{ lineHeight: 1.8, color: '#4b5563' }}>
        <p style={{ marginTop: '2rem' }}>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <section style={{ margin: '2rem 0' }}>
          <h2>1. Use of the Site</h2>
          <p>By accessing this website, you are agreeing to be bound by these Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
        </section>

        <section style={{ margin: '2rem 0' }}>
          <h2>2. Disclaimer</h2>
          <p>The materials on Age Calculator are provided on an 'as is' basis. Age Calculator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          <p>Further, Age Calculator does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
        </section>

        <section style={{ margin: '2rem 0' }}>
          <h2>3. Limitations</h2>
          <p>In no event shall Age Calculator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Age Calculator's website.</p>
        </section>

        <section style={{ margin: '2rem 0' }}>
          <h2>4. Accuracy of Materials</h2>
          <p>The materials appearing on Age Calculator's website could include technical, typographical, or photographic errors. Age Calculator does not warrant that any of the materials on its website are accurate, complete or current. Age Calculator may make changes to the materials contained on its website at any time without notice.</p>
        </section>

        <section style={{ margin: '2rem 0' }}>
          <h2>5. Links</h2>
          <p>Age Calculator has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Age Calculator of the site. Use of any such linked website is at the user's own risk.</p>
        </section>

        <section style={{ margin: '2rem 0' }}>
          <h2>6. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
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
