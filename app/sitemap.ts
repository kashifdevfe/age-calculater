import { MetadataRoute } from 'next'

const BASE_URL = 'https://agecalculator.example.com'

const months = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
]
const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const popularYears = [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020]

export default function sitemap(): MetadataRoute.Sitemap {
  const currentYear = new Date().getFullYear()

  // ── Static routes ─────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/age/in-days`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/age/in-months`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/age/for-visa`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.1 },
  ]

  // ── /age/[year] routes (1900–currentYear) ─────────────────────
  const yearRoutes: MetadataRoute.Sitemap = []
  for (let year = 1900; year <= currentYear; year++) {
    yearRoutes.push({
      url: `${BASE_URL}/age/${year}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: year >= 1970 ? 0.9 : 0.7, // boost recent years
    })
  }

  // ── /age/birthday/[month-day] routes (366 pages) ──────────────
  const birthdayRoutes: MetadataRoute.Sitemap = []
  months.forEach((month, mi) => {
    for (let d = 1; d <= monthDays[mi]; d++) {
      birthdayRoutes.push({
        url: `${BASE_URL}/age/birthday/${month}-${d}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.6,
      })
    }
  })

  // ── /age/difference/[y1-y2] routes ───────────────────────────
  const differenceRoutes: MetadataRoute.Sitemap = []
  for (const y1 of popularYears) {
    for (const y2 of popularYears) {
      if (y1 !== y2) {
        differenceRoutes.push({
          url: `${BASE_URL}/age/difference/${y1}-${y2}`,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 0.65,
        })
      }
    }
  }

  return [
    ...staticRoutes,
    ...yearRoutes,
    ...birthdayRoutes,
    ...differenceRoutes,
  ]
}
