const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();

  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 1) {
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    return `${diffHours} hrs ago`;
  } else if (diffDays > 1 && diffDays <= 3) {
    return `${diffDays} days ago`;
  } else if (diffDays > 3) {
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
};

export default formatDate;
