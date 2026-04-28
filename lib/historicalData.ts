export interface HistoryFact {
  event: string;
  category: 'History' | 'Science' | 'Culture' | 'Technology' | 'Sport';
}

const yearFacts: Record<number, HistoryFact[]> = {
  1900: [{ event: "The first rigid dirigible airship was launched by Count Zeppelin.", category: 'Technology' }, { event: "The Commonwealth of Australia was established.", category: 'History' }],
  1901: [{ event: "Queen Victoria died after 63 years on the British throne.", category: 'History' }, { event: "The Nobel Prizes were awarded for the first time.", category: 'History' }],
  1903: [{ event: "The Wright Brothers achieved the first powered airplane flight.", category: 'Technology' }],
  1905: [{ event: "Albert Einstein published his Special Theory of Relativity.", category: 'Science' }],
  1910: [{ event: "The first transatlantic wireless telegraph service was established.", category: 'Technology' }],
  1912: [{ event: "The RMS Titanic sank on her maiden voyage.", category: 'History' }],
  1914: [{ event: "World War I began after the assassination of Archduke Franz Ferdinand.", category: 'History' }],
  1918: [{ event: "World War I ended with the Armistice of November 11.", category: 'History' }],
  1920: [{ event: "The League of Nations was established.", category: 'History' }, { event: "Women gained the right to vote in the United States (19th Amendment).", category: 'History' }],
  1927: [{ event: "Charles Lindbergh completed the first nonstop solo transatlantic flight.", category: 'History' }],
  1929: [{ event: "The Great Depression began with the Wall Street Crash.", category: 'History' }],
  1930: [{ event: "Pluto was discovered by astronomer Clyde Tombaugh.", category: 'Science' }],
  1936: [{ event: "The Berlin Olympics took place — Jesse Owens won four gold medals.", category: 'Sport' }],
  1939: [{ event: "World War II began when Germany invaded Poland.", category: 'History' }],
  1940: [{ event: "The Battle of Britain marked a turning point in WWII.", category: 'History' }],
  1945: [{ event: "World War II ended. The United Nations was founded.", category: 'History' }],
  1947: [{ event: "India gained independence from Britain. The transistor was invented at Bell Labs.", category: 'History' }],
  1948: [{ event: "The State of Israel was declared. The Universal Declaration of Human Rights was adopted.", category: 'History' }],
  1950: [{ event: "The Korean War began.", category: 'History' }, { event: "The first credit card (Diners Club) was introduced.", category: 'Technology' }],
  1953: [{ event: "Edmund Hillary and Tenzing Norgay became the first to summit Mount Everest.", category: 'History' }, { event: "DNA's double helix structure was discovered by Watson and Crick.", category: 'Science' }],
  1955: [{ event: "Rosa Parks refused to give up her seat, igniting the Montgomery Bus Boycott.", category: 'History' }, { event: "Disneyland opened in California.", category: 'Culture' }],
  1957: [{ event: "The Soviet Union launched Sputnik, the first artificial satellite.", category: 'Technology' }],
  1960: [{ event: "The first commercially operational lasers were developed.", category: 'Technology' }, { event: "17 African nations gained independence.", category: 'History' }],
  1961: [{ event: "Yuri Gagarin became the first human in space.", category: 'Science' }, { event: "The Berlin Wall was built.", category: 'History' }],
  1963: [{ event: "US President John F. Kennedy was assassinated in Dallas.", category: 'History' }],
  1965: [{ event: "The Voting Rights Act was signed into law in the United States.", category: 'History' }],
  1967: [{ event: "The world's first heart transplant was performed by Dr. Christiaan Barnard.", category: 'Science' }],
  1969: [{ event: "Neil Armstrong became the first human to walk on the Moon.", category: 'Science' }, { event: "Woodstock festival took place.", category: 'Culture' }],
  1970: [{ event: "The first Earth Day was celebrated on April 22.", category: 'History' }, { event: "Apollo 13 survived a critical oxygen tank failure.", category: 'Science' }],
  1971: [{ event: "The microprocessor (Intel 4004) was introduced, revolutionizing computing.", category: 'Technology' }],
  1972: [{ event: "The Atari Pong game was released — the birth of the video game industry.", category: 'Technology' }],
  1973: [{ event: "The Watergate scandal led to President Nixon's resignation the following year.", category: 'History' }],
  1975: [{ event: "Microsoft was founded by Bill Gates and Paul Allen.", category: 'Technology' }],
  1976: [{ event: "Apple Computer was founded by Steve Jobs and Steve Wozniak.", category: 'Technology' }],
  1977: [{ event: "Star Wars was released, transforming cinema and popular culture.", category: 'Culture' }],
  1979: [{ event: "The Iranian Revolution transformed the Middle East.", category: 'History' }, { event: "The Sony Walkman was introduced, changing how people listen to music.", category: 'Technology' }],
  1980: [{ event: "John Lennon was tragically killed in New York City.", category: 'Culture' }, { event: "The first cases of what would become the AIDS epidemic were reported.", category: 'History' }],
  1981: [{ event: "IBM released the first IBM PC, launching the personal computing era.", category: 'Technology' }],
  1983: [{ event: "The Internet's foundation was laid with TCP/IP protocols going live.", category: 'Technology' }],
  1984: [{ event: "Apple launched the Macintosh computer with a groundbreaking Super Bowl ad.", category: 'Technology' }],
  1985: [{ event: "The Live Aid concert raised millions for famine relief in Ethiopia.", category: 'Culture' }, { event: "The Nintendo Entertainment System launched in North America.", category: 'Technology' }],
  1986: [{ event: "The Space Shuttle Challenger disaster shocked the world.", category: 'History' }, { event: "The Chernobyl nuclear disaster occurred in the Soviet Union.", category: 'History' }],
  1987: [{ event: "The Montreal Protocol to protect the ozone layer was signed.", category: 'History' }],
  1989: [{ event: "The Berlin Wall fell, signaling the end of the Cold War.", category: 'History' }, { event: "The World Wide Web was invented by Tim Berners-Lee.", category: 'Technology' }],
  1990: [{ event: "Nelson Mandela was released from prison after 27 years.", category: 'History' }, { event: "The Hubble Space Telescope was launched.", category: 'Science' }],
  1991: [{ event: "The Soviet Union officially dissolved, ending the Cold War.", category: 'History' }, { event: "Nirvana released Nevermind, launching the grunge era.", category: 'Culture' }],
  1993: [{ event: "The World Wide Web was opened to the public.", category: 'Technology' }],
  1994: [{ event: "Nelson Mandela became President of South Africa after the first multiracial elections.", category: 'History' }, { event: "Amazon was founded by Jeff Bezos.", category: 'Technology' }],
  1995: [{ event: "Windows 95 was released, transforming the PC market.", category: 'Technology' }, { event: "eBay and Craigslist were founded.", category: 'Technology' }],
  1996: [{ event: "Dolly the sheep became the first mammal cloned from an adult somatic cell.", category: 'Science' }],
  1997: [{ event: "Titanic became the first film to gross over $1 billion at the box office.", category: 'Culture' }, { event: "The Mars Pathfinder mission landed successfully.", category: 'Science' }],
  1998: [{ event: "Google was founded by Larry Page and Sergey Brin in a California garage.", category: 'Technology' }],
  1999: [{ event: "The Euro was introduced as a common currency for European nations.", category: 'History' }],
  2000: [{ event: "The Y2K bug turned out to be a non-event.", category: 'Technology' }, { event: "The Human Genome Project completed its first draft.", category: 'Science' }],
  2001: [{ event: "The September 11 terrorist attacks changed the world.", category: 'History' }, { event: "Wikipedia was launched.", category: 'Technology' }],
  2003: [{ event: "The Human Genome Project was completed.", category: 'Science' }, { event: "Facebook's precursor was launched at Harvard.", category: 'Technology' }],
  2004: [{ event: "Facebook was officially founded by Mark Zuckerberg.", category: 'Technology' }, { event: "A massive Indian Ocean earthquake and tsunami claimed 230,000 lives.", category: 'History' }],
  2005: [{ event: "YouTube was founded, transforming video consumption.", category: 'Technology' }, { event: "Hurricane Katrina devastated New Orleans.", category: 'History' }],
  2006: [{ event: "Twitter was launched.", category: 'Technology' }, { event: "Pluto was reclassified as a dwarf planet.", category: 'Science' }],
  2007: [{ event: "Steve Jobs unveiled the first iPhone, revolutionizing smartphones.", category: 'Technology' }],
  2008: [{ event: "The Global Financial Crisis caused the worst recession since the 1930s.", category: 'History' }, { event: "Barack Obama was elected as the first Black US President.", category: 'History' }],
  2009: [{ event: "Bitcoin was created by the pseudonymous Satoshi Nakamoto.", category: 'Technology' }],
  2010: [{ event: "The iPad was introduced by Apple.", category: 'Technology' }, { event: "Instagram was launched.", category: 'Technology' }],
  2011: [{ event: "The Arab Spring brought significant political change across the Middle East.", category: 'History' }],
  2012: [{ event: "NASA's Curiosity rover landed on Mars.", category: 'Science' }],
  2013: [{ event: "Edward Snowden revealed massive NSA surveillance programs.", category: 'History' }],
  2014: [{ event: "The Ice Bucket Challenge raised $115 million for ALS research.", category: 'Culture' }],
  2015: [{ event: "The Paris Climate Agreement was signed by 195 nations.", category: 'History' }],
  2016: [{ event: "SpaceX successfully landed its first orbital rocket booster.", category: 'Technology' }],
  2019: [{ event: "The first image of a black hole was captured by the Event Horizon Telescope.", category: 'Science' }],
  2020: [{ event: "The COVID-19 pandemic began, affecting billions of people worldwide.", category: 'History' }],
  2021: [{ event: "The COVID-19 vaccines were rolled out globally at unprecedented speed.", category: 'Science' }],
  2022: [{ event: "James Webb Space Telescope released its first stunning deep-field images.", category: 'Science' }],
  2023: [{ event: "Artificial intelligence tools like ChatGPT became mainstream worldwide.", category: 'Technology' }],
  2024: [{ event: "AI-generated content became prevalent across media and creative industries.", category: 'Technology' }],
}

const decadeFacts: Record<number, HistoryFact[]> = {
  1900: [{ event: "The early 20th century saw rapid technological advances. The automobile and airplane were transforming society.", category: 'Technology' }],
  1910: [{ event: "World War I reshaped the political map of Europe and the world.", category: 'History' }],
  1920: [{ event: "The Roaring Twenties brought jazz, prosperity, and cultural transformation.", category: 'Culture' }],
  1930: [{ event: "The Great Depression tested the resilience of economies worldwide.", category: 'History' }],
  1940: [{ event: "World War II was the defining conflict of the 20th century.", category: 'History' }],
  1950: [{ event: "The post-war boom and Space Race defined this era of optimism and competition.", category: 'History' }],
  1960: [{ event: "The 1960s were a decade of civil rights movements, space exploration, and cultural revolution.", category: 'Culture' }],
  1970: [{ event: "The 1970s brought oil crises, disco, and the birth of the personal computer.", category: 'Technology' }],
  1980: [{ event: "The 1980s saw the rise of personal computing, the Cold War's end, and pop culture explosion.", category: 'Culture' }],
  1990: [{ event: "The 1990s saw the rise of the Internet, the World Wide Web, and globalization.", category: 'Technology' }],
  2000: [{ event: "The 2000s were defined by the rise of social media, smartphones, and digital transformation.", category: 'Technology' }],
  2010: [{ event: "The 2010s brought AI breakthroughs, climate urgency, and the mobile-first world.", category: 'Technology' }],
  2020: [{ event: "The 2020s opened with a global pandemic and an AI revolution that changed everything.", category: 'History' }],
}

import { getYearSpecificClosing } from "./generationData"

export function getHistoricalContext(year: number): string {
  // Look for an exact year match first
  const exactFacts = yearFacts[year]
  const decade = Math.floor(year / 10) * 10
  const decadeFact = decadeFacts[decade] || []

  const intros = [
    `The world has undergone incredible shifts in technology and culture since this era began. `,
    `It is fascinating to look back and see how much global society has transformed over these years. `,
    `This period marked the beginning of a life story that spans some of history's most pivotal moments. `,
    `Starting a journey during this time meant witnessing the digital revolution from its very inception. `
  ]

  let text = intros[year % intros.length]

  if (exactFacts && exactFacts.length > 0) {
    text += `In ${year} itself, the world saw major events: ${exactFacts[0].event} `
    if (exactFacts[1]) {
      text += `Additionally, ${exactFacts[1].event} `
    }
  } else if (decadeFact.length > 0) {
    text += `The ${decade}s were a pivotal time — ${decadeFact[0].event} `
  }

  const closing = getYearSpecificClosing(year)
  text += closing

  return text
}
