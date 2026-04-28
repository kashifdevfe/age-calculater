export function calculateAge(year: number) {
  const today = new Date()
  const currentYear = today.getFullYear()

  const ageYears = currentYear - year
  const ageMonths = ageYears * 12
  const ageDays = Math.floor(ageYears * 365.25)

  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays,
    currentYear,
  }
}
