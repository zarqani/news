import { SOURCES } from "@/libs/constants";
import { api } from "@/services";
import {
  GuardianProps,
  NewsAPIProps,
  NewsAiProps,
  NewsProps,
  NewsResponseProps,
} from "@/types/blog.types";

const newsAiRoute = "article/getArticles";
const newsAPIRoute = "top-headlines";
const guardianRoute = "search";

const normalizeNewsAiPost = (data: NewsAiProps): NewsProps => ({
  id: data.uri,
  title: data.title,
  description: "", // data.body,
  url: data.url,
  img: data.image,
  date: data.dateTimePub,
  category: data.dataType,
  authors: data.authors,
  source: {
    id: data.source.uri,
    name: data.source.title,
  },
});

export const getNewsAiPosts = async (params?: {
  [key: string]: any;
}): Promise<NewsResponseProps | undefined> => {
  const paramsQuery = {
    query: {
      $query: {
        $and: [
          {
            conceptUri: "http://en.wikipedia.org/wiki/Technology",
          },
          {
            dateStart: "2024-03-16",
            dateEnd: "2024-04-10",
            lang: "eng",
            ...params,
          },
        ],
      },
      $filter: {
        forceMaxDataTimeWindow: "31",
      },
    },
    resultType: "articles",
    articlesSortBy: "date",
    includeArticleCategories: true,
    includeArticleImage: true,
    apiKey: SOURCES.NEWS_AI.apiKey,
  };

  const response: { articles: { results: NewsAiProps[] } } = await api.get(
    `${process.env.NEXT_PUBLIC_NEWS_AI_API}${newsAiRoute}`,
    paramsQuery
  );
  if (!response) return;

  // .sort((a: NewsAiProps, b: NewsAiProps) => b.id - a.id)
  // .filter((item) => (category ? item.category === category : true));
  const categories: string[] = [];
  const result: NewsProps[] = response.articles.results.map((item) => {
    if (item.dataType && !categories.includes(item.dataType))
      categories.push(item.dataType);
    return normalizeNewsAiPost(item);
  });
  return { data: result, categories };
};

const normalizeNewsAPIPost = (data: NewsAPIProps): NewsProps => ({
  id: data.title,
  title: data.title,
  description: "", // data.description,
  url: data.url,
  img: data.urlToImage,
  date: data.publishedAt,
  category: data.source.name,
  authors: [data.author],
  source: data.source,
});

export const getNewsAPIPosts = async (params?: {
  [key: string]: any;
}): Promise<NewsResponseProps | undefined> => {
  const response: { articles: NewsAPIProps[] } = await api.get(
    `${process.env.NEXT_PUBLIC_NEWS_API}${newsAPIRoute}`,
    { apiKey: SOURCES.NEWS.apiKey, country: "us", ...params }
  );
  if (!response) return;
  const categories: string[] = [];
  const result: NewsProps[] = response.articles.map((item) => {
    if (item.source.name && !categories.includes(item.source.name))
      categories.push(item.source.name);
    return normalizeNewsAPIPost(item);
  });
  return { data: result, categories };
};

const normalizeGuardianPost = (data: GuardianProps): NewsProps => ({
  id: data.id,
  title: data.webTitle,
  description: "",
  url: data.webUrl,
  img: "",
  date: data.webPublicationDate,
  category: data.sectionId,
  authors: [],
  source: {
    id: "",
    name: "",
  },
});

export const getGuardianPosts = async (params?: {
  [key: string]: any;
}): Promise<NewsResponseProps | undefined> => {
  const response: { response: { results: GuardianProps[] } } = await api.get(
    `${process.env.NEXT_PUBLIC_GUARDIAN_API}${guardianRoute}`,
    { "api-key": SOURCES.GUARDIAN.apiKey, ...params }
  );

  if (!response) return;
  const categories: string[] = [];
  // const authors = [];
  const result: NewsProps[] = response.response.results.map((item) => {
    if (item.sectionId && !categories.includes(item.sectionId))
      categories.push(item.sectionId);
    return normalizeGuardianPost(item);
  });

  return { data: result, categories };
};
