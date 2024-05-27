import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import fetchNews from "../helpers/fetchNews";
import Loading from "../components/Loading";
import styles from "./HomePage.module.css";
import NewsCard from "../components/NewsCard";

function HomePage() {
  const { loading, setLoading } = useContext(GlobalContext);
  const [generalArticle, setGeneralArticle] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const news = await fetchNews("general");
      setGeneralArticle(news.articles);
      setLoading(false);
    };
    loadNews();
  }, [setLoading]);

  if (loading) return <Loading />;

  return (
    <div className={styles.newsContainer}>
      {/* News on the Left Side */}
      <div className={styles.leftColumn}>
        {generalArticle.slice(0, 2).map((article, index) => {
          return (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              date={article.publishedAt}
              url={article.url}
              source={article.source.name}
            />
          );
        })}
      </div>

      {/* The Big News in the Middle */}
      <div className={styles.centerColumn}>
        {generalArticle.slice(2, 3).map((article, index) => {
          return (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              date={article.publishedAt}
              url={article.url}
              source={article.source.name}
              isMiddleColumn
            />
          );
        })}
      </div>

      {/* News Headlines on the Right Side */}
      <div className={styles.rightColumn}>
        {generalArticle.slice(3, 6).map((article, index) => {
          return (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              date={article.publishedAt}
              url={article.url}
              source={article.source.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
