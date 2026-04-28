export interface GenerationFact {
  closing: string;
}

export const yearSpecificFacts: Record<number, string> = {
  1980: "People born in 1980 are now 46 years old and often find themselves in leadership roles, balancing career peak with family life.",
  1985: "At 41 years of age, the 1985 cohort represents a bridge between the analog and digital generations, now deeply embedded in the modern workforce.",
  1990: "Now 36, those born in 1990 are reaching a significant life milestone, often focusing on long-term stability and professional growth.",
  1995: "Turning 31 this year, people born in 1995 are the first true digital natives to reach their third decade, driving much of today's tech-driven culture.",
  2000: "At 26 years old, the 2000 generation is now establishing itself in the adult world, bringing fresh perspectives to the global economy.",
  2005: "Now 21, individuals born in 2005 are reaching the age of full legal maturity in many regions, starting their journeys into higher education or early careers.",
  2010: "At 16, those born in 2010 are navigating their mid-teens, growing up in a world where AI and global connectivity are the baseline reality.",
};

export function getYearSpecificClosing(year: number): string {
  if (yearSpecificFacts[year]) {
    return yearSpecificFacts[year];
  }
  
  const age = new Date().getFullYear() - year;
  const decade = Math.floor(year / 10) * 10;
  
  // Dynamic fallback to ensure uniqueness
  if (year < 1960) {
    return `Having reached ${age} years of age, those born in ${year} represent a generation with profound historical perspective on the 20th century's evolution.`;
  }
  if (year < 1980) {
    return `Now ${age} years old, the ${year} cohort has witnessed the complete transformation of the industrial world into the information age we live in today.`;
  }
  if (year < 2000) {
    return `At ${age} years old, people born in ${year} are key participants in today's rapidly changing global landscape, blending traditional values with modern innovation.`;
  }
  
  return `At ${age} years old, those born in the year ${year} are the architects of the future, growing up alongside the most rapid technological advancements in history.`;
}
