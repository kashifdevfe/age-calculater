export interface DecadeContent {
  ageRange: string;
  context: string;
  generation: string;
}

export const decadeData: Record<number, DecadeContent> = {
  1900: {
    ageRange: "116 to 126 years old",
    context: "The 1900s marked the dawn of the modern industrial age, featuring the first flight of the Wright brothers and the widespread adoption of automobiles. It was an era of profound optimism and rapid technological breakthroughs that set the stage for the 20th century.",
    generation: "The Greatest Generation (early members) and the Lost Generation."
  },
  1910: {
    ageRange: "106 to 116 years old",
    context: "Defined by the Great War (World War I), this decade saw a radical reshuffling of global empires and social norms. It was also the period of the tragic Titanic sinking and the beginning of major shifts in women's suffrage movements worldwide.",
    generation: "The Greatest Generation."
  },
  1920: {
    ageRange: "96 to 106 years old",
    context: "Known as the Roaring Twenties, this decade was characterized by jazz, economic prosperity, and significant cultural shifts. It was a time of liberation and innovation, ending with the onset of the Great Depression.",
    generation: "The Greatest Generation."
  },
  1930: {
    ageRange: "86 to 96 years old",
    context: "The 1930s were dominated by the Great Depression and the subsequent global economic struggle. Despite the hardships, it was also a golden age for cinema and radio, providing a much-needed escape for millions.",
    generation: "The Silent Generation."
  },
  1940: {
    ageRange: "76 to 86 years old",
    context: "This decade was shaped by World War II and the subsequent post-war reconstruction. It marked the beginning of the atomic age and the establishment of the United Nations, setting the groundwork for the modern geopolitical landscape.",
    generation: "The Silent Generation and early Baby Boomers."
  },
  1950: {
    ageRange: "66 to 76 years old",
    context: "The 1950s saw the rise of the Cold War, the birth of rock and roll, and the expansion of suburbia. It was a period of traditional values clashing with a new, emerging youth culture and the start of the Space Race.",
    generation: "Baby Boomers."
  },
  1960: {
    ageRange: "56 to 66 years old",
    context: "A decade of revolution and social change, the 1960s featured the Civil Rights Movement, the Apollo moon landing, and the counterculture explosion. It was a time when young people challenged authority and reshaped the world's cultural identity.",
    generation: "Baby Boomers and early Gen X."
  },
  1970: {
    ageRange: "46 to 56 years old",
    context: "The 1970s brought about the environmental movement, the rise of disco, and the birth of personal computing. It was a decade of transition, marked by economic challenges like the oil crisis and the end of the Vietnam War.",
    generation: "Generation X."
  },
  1980: {
    ageRange: "36 to 46 years old",
    context: "Characterized by bold fashion, synthesizers, and the rise of MTV, the 1980s were a vibrant era of pop culture. The decade also saw the intensifying of the Cold War and the introduction of the first truly popular home computers.",
    generation: "Generation X and early Millennials."
  },
  1990: {
    ageRange: "26 to 36 years old",
    context: "The 1990s witnessed the birth of the World Wide Web and the end of the Cold War. It was the era of grunge music, the expansion of globalization, and the rapid transition from an analog to a digital world.",
    generation: "Millennials."
  },
  2000: {
    ageRange: "16 to 26 years old",
    context: "Marking the start of the new millennium, the 2000s were defined by the digital social revolution, the rise of smartphones, and global interconnectivity. The decade began with the optimism of a new era but was also shaped by the events of 9/11 and the 2008 financial crisis.",
    generation: "Millennials and early Gen Z."
  },
  2010: {
    ageRange: "6 to 16 years old",
    context: "The 2010s were the decade of social media dominance, the rise of the app economy, and significant advancements in artificial intelligence. It was a period of rapid technological integration into every aspect of daily life.",
    generation: "Generation Z."
  },
  2020: {
    ageRange: "0 to 6 years old",
    context: "The 2020s opened with a global pandemic that fundamentally altered how we work, learn, and interact. This decade is currently being defined by the AI revolution and a renewed focus on global sustainability and remote breakthroughs.",
    generation: "Generation Alpha."
  }
};
