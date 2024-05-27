import { apiKey } from "./config";

const fetchNews = async (category = "general", searchTerm = "") => {
  let url;
  if (searchTerm) {
    url = `https://newsapi.org/v2/everything?qInTitle=${searchTerm}&apiKey=${apiKey}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    const filteredArticles = data.articles.filter(
      (article) => article.urlToImage !== null
    );
    return {
      ...data,
      articles: filteredArticles,
    };
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }
};

export default fetchNews;
