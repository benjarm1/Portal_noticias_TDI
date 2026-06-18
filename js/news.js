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
  },
  {id: 4,
   title: "Neymar se despide de la fase de grupos",
   description: "se confirmo la lesion del astro brasilero y es baja para los primero 3 partidos",
   image: "https://cloudfront-us-east-1.images.arcpublishing.com/semana/DP426VPD5FHKHOBTHM4SBJWG3I.jpg"
    },

    {
        id: 5,
        title: "Se le prohibio la Visa a Thomas Partey",
        description:"El gobierno canadiense le prohibio la entrada reconocido ex arsenal y estrella de Ghana, esto por que tiene al rededor de 7 cargos por abuso sexual y tiene que ser juzgado ",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62UFEPV5nPoGlE40tPe3dzvZCR8dMHyagCuptqOr3nQ&s"

    },

    {
        id : 6,
        title:"Escocia tiene sed",
        description:"Los hinchas escoceses que llegaron la mañana del miercoles a USA hicieron una queja comunitaria con la empresa que los llevo en avion debido a la escasez de cerveza en el vuelo",
        image: "https://c.files.bbci.co.uk/9ed3/live/23c0c780-1256-11f1-989c-0ff32e28c94c.jpg"
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
      <img src="${item.image}" alt="${item.title}" onerror="this.src='img/copa-mundial.jpg'">
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
      const editButton = document.createElement("button");
editButton.textContent = "Editar";
editButton.type = "button";

editButton.addEventListener("click", () => {
  document.getElementById("newsId").value = item.id;
  document.getElementById("title").value = item.title;
  document.getElementById("description").value = item.description;
  document.getElementById("image").value = item.image;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

article.appendChild(editButton);
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
