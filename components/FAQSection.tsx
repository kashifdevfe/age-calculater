const faqs = [
  {
    q: 'How do I calculate my exact age?',
    a: 'Enter your date of birth above. The calculator instantly shows your exact age in years, months, weeks, days, hours, and minutes.',
  },
  {
    q: 'How old am I if I was born in 2000?',
    a: `If born in 2000, you are ${new Date().getFullYear() - 1 - 2000} years old in ${new Date().getFullYear()} (before birthday) or ${new Date().getFullYear() - 2000} (after). Use the calculator above for your exact date.`,
  },
  {
    q: 'How many days old am I?',
    a: 'The calculator shows your exact age in total days. A person who is 30 years old has lived approximately 10,957 days.',
  },
  {
    q: 'Is this age calculator free?',
    a: 'Yes — completely free, no signup, no ads blocking the result, no limits.',
  },
  {
    q: 'Can I calculate someone else\'s age?',
    a: 'Yes! Enter any date of birth — for a friend, family member, or anyone else.',
  },
  {
    q: 'How is age calculated differently in different countries?',
    a: 'Most countries count age from the birthday each year. Some East Asian traditions count age differently. This calculator uses the standard international (Western) system.',
  },
]

export default function FAQSection() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <details key={i} className="faq-item">
            <summary className="faq-q">{faq.q}</summary>
            <p className="faq-a">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
