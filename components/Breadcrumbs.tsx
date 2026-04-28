import Link from 'next/link';

export default function Breadcrumbs({ items }: { items: { name: string, path: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://agecalculator.example.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `https://agecalculator.example.com${item.path}`
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '0.5rem', color: '#6b7280', flexWrap: 'wrap' }}>
        <li><Link href="/" style={{ color: '#00ADB5', textDecoration: 'none' }}>Home</Link></li>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.5rem' }}>
            <span> / </span>
            <Link href={item.path} style={{ color: i === items.length - 1 ? 'inherit' : '#00ADB5', textDecoration: 'none' }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
