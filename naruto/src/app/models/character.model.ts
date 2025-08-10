export interface characterModel{
  characters : characterItemModel[];
}


export interface characterItemModel{
  id: number;
  name: string;
  images: string[];
  debut: Debut;
  family: Family;
  jutsu: string[];
  natureType: string[];
  personal: Personal;
  rank: Rank;
  tools: string[];
  voiceActors: VoiceActors;
  }

export interface Debut {
  manga: string;
  anime: string;
  novel: string;
  movie: string;
  game: string;
  ova: string;
  appearsIn: string;
}

export interface Family {
  father: string;
  mother: string;
  son: string;
  daughter: string;
  wife: string;
  adoptiveSon: string;
  godfather: string;
}

export interface Personal {
  birthdate: string;
  sex: string;
  age: Age;
  height: Height;
  weight: Weight;
  bloodType: string;
  kekkeiGenkai: string[];
  classification: string[];
  tailedBeast: string;
  occupation: string[];
  affiliation: string[];
  team: string[];
  clan: string;
  titles: string[];
}

export interface Age {
  partI: string;
  partII: string;
  academyGraduate: string;
}

export interface Height {
  partI: string;
  partII: string;
  blankPeriod: string;
}

export interface Weight {
  "partI": string;
  "partII": string;
}

export interface Rank {
  ninjaRank: NinjaRank;
  ninjaRegistration: string;
}

export interface NinjaRank {
  partI: string;
  gaiden: string;
}

export interface VoiceActors {
  japanese: string[];
  english: string[];
}
