import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import fetchNews from "../helpers/fetchNews";
import Loading from "../components/Loading";
import styles from "./SharedStylePage.module.css";
import NewsCard from "../components/NewsCard";

function BusinessPage() {
  const { loading, setLoading } = useContext(GlobalContext);
  const [businessArticle, setBusinessArticle] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const news = await fetchNews("business");
      setBusinessArticle(news.articles);
      setLoading(false);
    };
    loadNews();
  }, [setLoading]);

  if (loading) return <Loading />;

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Business</h1>
      <div className={styles.newsContainer}>
        {/* Just a Big News on the Upper Left */}
        <div className={styles.leftUpperColumn}>
          {businessArticle.slice(0, 1).map((article, index) => {
            return (
              <NewsCard
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                date={article.publishedAt}
                url={article.url}
                source={article.source.name}
                isUpperLeftColumn
              />
            );
          })}
        </div>

        {/* News on the Down Left */}
        <div className={styles.leftDownColumn}>
          {businessArticle.slice(1, 4).map((article, index) => {
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

        {/* News on the Right Side */}
        <div className={styles.rightColumn}>
          {businessArticle.slice(4, 6).map((article, index) => {
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
      </div>
    </div>
  );
}

export default BusinessPage;
