export type NewsProps = {
  id: string;
  title: string;
  description: string;
  url: string;
  img: string;
  date: string;
  category: string;
  authors: string[];
  source: { id: string; name: string };
};

export type NewsAiProps = {
  uri: string;
  lang: string;
  isDuplicate: boolean;
  date: string;
  time: string;
  dateTime: string;
  dateTimePub: string;
  dataType: string;
  sim: number;
  url: string;
  title: string;
  body: string;
  source: { uri: string; dataType: string; title: string };
  authors: string[];
  image: string;
  eventUri: string;
  sentiment: number;
  wgt: number;
  relevance: number;
};

export type NewsAPIProps = {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type GuardianProps = {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
};

export type NewsResponseProps = { data: NewsProps[]; categories: string[] };
