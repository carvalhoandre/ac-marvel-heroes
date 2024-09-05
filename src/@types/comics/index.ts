interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface Url {
  type: string;
  url: string;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface CollectedIssue {
  resourceURI: string;
  name: string;
}

interface ComicDate {
  type: string;
  date: string;
}

interface Price {
  type: string;
  price: number;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Image {
  path: string;
  extension: string;
}

interface CreatorItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorItem[];
  returned: number;
}

interface CharacterItem {
  resourceURI: string;
  name: string;
}

interface Characters {
  available: number;
  collectionURI: string;
  items: CharacterItem[];
  returned: number;
}

interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: StoryItem[];
  returned: number;
}

interface EventItem {
  resourceURI: string;
  name: string;
}

interface Events {
  available: number;
  collectionURI: string;
  items: EventItem[];
  returned: number;
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: any[];
  collections: any[];
  collectedIssues: CollectedIssue[];
  dates: ComicDate[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}
