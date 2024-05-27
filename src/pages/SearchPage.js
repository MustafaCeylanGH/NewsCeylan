import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import fetchNews from "../helpers/fetchNews";
import Loading from "../components/Loading";
import NewsCard from "../components/NewsCard";
import styles from "./SearchPage.module.css";
import RenderPaginationButtons from "../helpers/renderPaginationButtons";
import { CgSearch } from "react-icons/cg";
import { MdClose } from "react-icons/md";

function SearchPage() {
  const {
    loading,
    setLoading,
    searchTerm,
    setSearchTerm,
    searchArticles,
    setSearchArticles,
    currentSearchPage,
  } = useContext(GlobalContext);
  const [searchPageInputText, setSearchPageInputText] = useState("");

  const articlesPerPage = 5;

  useEffect(() => {
    const fetchSearchResult = async () => {
      setLoading(true);
      console.log(searchTerm);
      if (searchTerm.trim() === "") {
        setLoading(false);
        return;
      }
      setSearchPageInputText(searchTerm);
      const news = await fetchNews("general", searchTerm);
      console.log(news);
      setSearchArticles(news.articles);
      setLoading(false);
    };

    fetchSearchResult();
  }, [setLoading, setSearchTerm, setSearchArticles, searchTerm]);

  if (loading) return <Loading />;

  const getCurrentArticles = () => {
    const indexOfLastArticle = currentSearchPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    return searchArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  };

  const currentArticles = getCurrentArticles();

  return (
    <div className={styles.searchResults}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search news, topics and more"
          className={styles.searchInput}
          value={searchPageInputText}
          onChange={(e) => setSearchPageInputText(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" ? setSearchTerm(searchPageInputText) : ""
          }
        />
        {searchPageInputText && (
          <MdClose
            className={styles["icon-close"]}
            onClick={() => setSearchPageInputText("")}
          />
        )}
        <CgSearch
          className={styles["icon-search"]}
          onClick={() => {
            setSearchTerm(searchPageInputText);
          }}
        />
      </div>
      <div className={styles.searchResultsContainer}>
        {currentArticles.map((article, index) => {
          return (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              date={article.publishedAt}
              url={article.url}
              source={article.source.name}
              isSearchPage
            />
          );
        })}
      </div>
      <div className={styles.pagination}>{<RenderPaginationButtons />}</div>
    </div>
  );
}

export default SearchPage;
