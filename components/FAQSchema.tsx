export default function FAQSchema({ year }: { year: number }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How old am I if I was born in ${year}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Your age depends on your birth date, but this page calculates your approximate age instantly.`,
        },
      },
      {
        "@type": "Question",
        name: "How is age calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Age is calculated by subtracting birth year from current year.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
