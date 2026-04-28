export interface AgeResult {
  years: number
  months: number
  days: number
  totalDays: number
  totalWeeks: number
  totalMonths: number
  totalHours: number
  totalMinutes: number
  nextBirthdayDays: number
  nextBirthdayDate: string
  zodiacSign: string
  dayOfWeek: string
}

export function calculateAge(dob: Date, targetDate: Date): AgeResult {
  let years = targetDate.getFullYear() - dob.getFullYear()
  let months = targetDate.getMonth() - dob.getMonth()
  let days = targetDate.getDate() - dob.getDate()

  if (days < 0) {
    months--
    const prevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0)
    days += prevMonth.getDate()
  }

  if (months < 0) {
    years--
    months += 12
  }

  const diffMs = targetDate.getTime() - dob.getTime()
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const totalWeeks = Math.floor(totalDays / 7)
  const totalMonths = years * 12 + months
  const totalHours = totalDays * 24
  const totalMinutes = totalHours * 60

  // Next birthday
  const nextBirthday = new Date(
    targetDate.getFullYear(),
    dob.getMonth(),
    dob.getDate()
  )
  if (nextBirthday <= targetDate) {
    nextBirthday.setFullYear(targetDate.getFullYear() + 1)
  }
  const nextBirthdayDays = Math.ceil(
    (nextBirthday.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24)
  )
  const nextBirthdayDate = nextBirthday.toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  })

  // Day of week born
  const dayOfWeek = dob.toLocaleDateString('en-US', { weekday: 'long' })

  // Zodiac sign
  const zodiacSign = getZodiacSign(dob.getMonth() + 1, dob.getDate())

  return {
    years, months, days,
    totalDays, totalWeeks, totalMonths,
    totalHours, totalMinutes,
    nextBirthdayDays, nextBirthdayDate,
    zodiacSign, dayOfWeek
  }
}

function getZodiacSign(month: number, day: number): string {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries ♈'
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus ♉'
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini ♊'
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer ♋'
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo ♌'
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo ♍'
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra ♎'
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio ♏'
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius ♐'
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn ♑'
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius ♒'
  return 'Pisces ♓'
}
