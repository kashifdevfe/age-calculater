export function calculateAge(year: number) {
  const today = new Date()
  const currentYear = today.getFullYear()
  const ageYears = currentYear - year
  
  // High precision conversions for SEO "Content Thickness"
  const ageMonths = ageYears * 12
  const ageWeeks = Math.floor(ageYears * 52.1775)
  const ageDays = Math.floor(ageYears * 365.2425)
  const ageHours = ageDays * 24
  const ageMinutes = ageHours * 60
  const ageSeconds = ageMinutes * 60
  
  // Biological stats (averages)
  const heartBeats = ageMinutes * 72 // Average 72 bpm
  const breathsTotal = ageMinutes * 16 // Average 16 breaths per minute

  return {
    years: ageYears,
    months: ageMonths,
    weeks: ageWeeks,
    days: ageDays,
    hours: ageHours,
    minutes: ageMinutes,
    seconds: ageSeconds,
    heartBeats,
    breathsTotal,
    currentYear,
  }
}
