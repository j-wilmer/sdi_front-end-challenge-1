import { news, author } from "./data";

export function updateStorage(updatedPage) {
  localStorage.setItem("currentPage", updatedPage.toString());
  window.location.reload();
}

export function handleNews(currentPage) {
  return news && news.find((news) => news.id === currentPage);
}
export function handleAuthor(currentNews) {
  return author && author.find((auth) => auth.id === currentNews.author_id);
}

export function handleMonth(currentNews) {
  const dateObj = new Date(currentNews.created_at);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[dateObj.getMonth()];
  return month;
}

export function handleDate(currentNews) {
  const dateObj = new Date(currentNews.created_at);
  const date = dateObj.getDate();
  return date;
}
