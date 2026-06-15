const NEWS_KEY = "news";

const defaultNews = [
  {
    id: 1,
    title: "El Mundial 2026 será el primero con 48 selecciones",
    description: "La nueva edición tendrá 12 grupos de 4 equipos y una fase eliminatoria desde dieciseisavos.",
    image: "img/infantino-mundial2026.jpg"
  },
  {
    id: 2,
    title: "Estados Unidos, México y Canadá serán los anfitriones",
    description: "Por primera vez, tres países organizarán juntos una Copa del Mundo masculina.",
    image: "img/canada-mexico-eeuu.jpg"
  },
  {
    id: 3,
    title: "Argentina llega como campeona defensora",
    description: "La Selección Argentina buscará defender el título conseguido en Qatar 2022.",
    image: "img/argentinacampeon2022.jpg"
  }
];

function getNews() {
  const savedNews = localStorage.getItem(NEWS_KEY);

  if (savedNews) {
    return JSON.parse(savedNews);
  }

  return defaultNews;
}

function saveNews(news) {
  localStorage.setItem(NEWS_KEY, JSON.stringify(news));
}

function renderNews(containerId, isAdmin = false) {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = "";

  const news = getNews();

  news.forEach((item) => {
    const article = document.createElement("article");
    article.className = "news-card";

    article.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="news-card-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;

    if (isAdmin) {
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.type = "button";

      deleteButton.addEventListener("click", () => {
        deleteNews(item.id);
      });

      article.appendChild(deleteButton);
    }

    container.appendChild(article);
  });
}

function deleteNews(id) {
  const filteredNews = getNews().filter((item) => item.id !== id);
  saveNews(filteredNews);

  renderNews("newsContainer", false);
  renderNews("adminNewsContainer", true);
}

document.addEventListener("DOMContentLoaded", () => {
  renderNews("newsContainer", false);
  renderNews("adminNewsContainer", true);
});
