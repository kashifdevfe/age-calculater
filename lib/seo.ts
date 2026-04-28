const BASE_URL = 'https://agecalculator.agecalculatormaster.com'

export function generateSEO(year: string) {
  return {
    title: `If You Were Born in ${year}, How Old Are You? – Age Calculator`,
    description: `Find your exact age if you were born in ${year}. Instantly calculate your age in years, months, weeks, and days. Free online tool — no signup needed.`,
    alternates: {
      canonical: `${BASE_URL}/age/${year}`,
    },
    openGraph: {
      title: `Age if Born in ${year} — How Old Am I in ${new Date().getFullYear()}?`,
      description: `Born in ${year}? You are ${new Date().getFullYear() - Number(year)} years old in ${new Date().getFullYear()}. See your age in months, days, and more.`,
      url: `${BASE_URL}/age/${year}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function generateBirthdaySEO(date: string) {
  const [month, day] = date.split('-')
  const displayDate = `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}`
  return {
    title: `Born on ${displayDate} – Birthday Countdown & Age Facts`,
    description: `Is your birthday on ${displayDate}? Find out how many days until your next birthday and fun facts about people born on this date.`,
    alternates: {
      canonical: `${BASE_URL}/age/birthday/${date}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function generateDateSEO(date: string) {
  return {
    title: `Exact Age if Born on ${date} – Age Calculator`,
    description: `Calculate your exact age in years, months, weeks, and days if you were born on ${date}. Instant, accurate result.`,
    alternates: {
      canonical: `${BASE_URL}/age/date/${date}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
