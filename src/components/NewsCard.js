import styles from "./NewsCard.module.css";
import formatDate from "../helpers/formatDate";
import { Link } from "react-router-dom";

const NewsCard = ({
  title,
  description,
  imageUrl,
  date,
  url,
  source,
  isMiddleColumn,
  isUpperLeftColumn,
  isSearchPage,
}) => {
  const formattedDate = formatDate(date);
  const cleanTitle = title.split(" - ")[0];

  const cardClasses = isMiddleColumn
    ? styles.middleColumnCard
    : isUpperLeftColumn
    ? styles.isUpperLeftColumn
    : isSearchPage
    ? styles.isSearchPage
    : styles.card;

  return (
    <div className={cardClasses}>
      <Link to={url}>
        {imageUrl && (
          <img src={imageUrl} alt={title} className={styles.cardImage} />
        )}
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{cleanTitle}</h2>
          <p className={styles.cardDescription}>{description}</p>
          <div className={styles.cardMeta}>
            <p className={styles.cardDate}>{formattedDate}</p>
            <p className={styles.cardSource}>{source}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
