/**
 * pSEO Sentence Engine
 * Generates randomized, natural-sounding sentences to ensure programmatic pages 
 * pass Google's NLP "unique content" checks and avoid spam filters.
 */

const introTemplates = [
  "If you were born in {year}, you have lived through a remarkable period of history.",
  "Looking back at the year {year}, it's fascinating to see how much the world has changed since you were born.",
  "Anyone whose life journey began in {year} entered a world that looked quite different than the one we live in today.",
  "The world of {year} provides the starting point for your {age}-year journey through time.",
  "For those born in {year}, your life story is inextricably linked with the events and culture of that era."
]

const factTemplates = [
  "A key highlight of {year} was when {fact}.",
  "Interestingly, during the year you were born, {fact}.",
  "Historical records from {year} show that {fact}.",
  "The cultural zeitgeist of {year} was shaped significantly by the fact that {fact}.",
  "One of the most talked-about events in {year} was {fact}."
]

const comparisonTemplates = [
  "At {age} years old, you have seen approximately {heartbeats} heartbeats—a testament to the resilience of the human body.",
  "Your {age}-year journey has spanned roughly {weeks} weeks of life and growth.",
  "In the {age} years since your birth in {year}, you've taken an estimated {breaths} breaths."
]

export function getUniqueIntro(year: number, age: number): string {
  const template = introTemplates[year % introTemplates.length]
  return template.replace("{year}", year.toString()).replace("{age}", age.toString())
}

export function getUniqueFact(year: number, fact: string): string {
  const template = factTemplates[year % factTemplates.length]
  return template.replace("{year}", year.toString()).replace("{fact}", fact)
}

export function getUniqueComparison(year: number, age: number, stats: any): string {
  const template = comparisonTemplates[year % comparisonTemplates.length]
  return template
    .replace("{age}", age.toString())
    .replace("{year}", year.toString())
    .replace("{heartbeats}", stats.heartBeats.toLocaleString())
    .replace("{weeks}", stats.weeks.toLocaleString())
    .replace("{breaths}", stats.breathsTotal.toLocaleString())
}
