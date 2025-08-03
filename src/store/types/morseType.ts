type License = {
  name: string;
  url: URL;
}

type Phonetics = [{
  text: string;
  audio?: URL;
  sourceUrl?: URL;
  license?: License
}];

type SearchedWord = [{
  word: string;
  phonetic: number;
  phonetics: Phonetics
}];

export type { License, Phonetics, SearchedWord };

