const NEWS_KEY = "news";

const defaultNews = [
  {
    id: 1,
    title: "El Mundial 2026 será el primero con 48 selecciones",
    description: "La nueva edición tendrá 12 grupos de 4 equipos y una fase eliminatoria desde dieciseisavos.",
    image: "https://www.ole.com.ar/images/2025/11/20/b6t5HMsdL_720x0__1.jpg"
  },
  {
    id: 2,
    title: "Estados Unidos, México y Canadá serán los anfitriones",
    description: "Por primera vez, tres países organizarán juntos una Copa del Mundo masculina.",
    image: "https://media.losandes.com.ar/p/2ec8db325b1d8f539602496ce75c8e99/adjuntos/368/imagenes/100/640/0100640767/1000x0/smart/mundial-2026.webp"
  },

  {
    id: 3,
    title: "Argentina llega como campeona defensora",
    description: "La Selección Argentina buscará defender el título conseguido en Qatar 2022.",
    image:"https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1218%2Fr1429402_1296x729_16%2D9.jpg"
    
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
        description:"Los hinchas escoceses que llegaro la mañana del miercoles a USA hicieron una queja comunitaria con la empresa que los llevo en avion debido a la escases de cerveza en el vuelo",
        image: "https://c.files.bbci.co.uk/9ed3/live/23c0c780-1256-11f1-989c-0ff32e28c94c.jpg"
    }



];

// ===== STORAGE =====
function getNews() {
  return JSON.parse(localStorage.getItem(NEWS_KEY)) || [];
}

function saveNews(news) {
  localStorage.setItem(NEWS_KEY, JSON.stringify(news));
}

function initNews() {
  if (!localStorage.getItem(NEWS_KEY)) {
    saveNews(defaultNews);
  }
}

// ===== RENDER =====
function renderNews(containerId, isAdmin) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  const news = getNews();

  news.forEach(function (item) {
    const article = document.createElement("article");
    article.className = "news-card";

    article.innerHTML = `
      <img src="${item.image}">
      <div class="news-card-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;

    if (isAdmin) {
      const btn = document.createElement("button");
      btn.textContent = "Eliminar";
      btn.addEventListener("click", function () {
        deleteNews(item.id);
      });
      article.appendChild(btn);
    }

    container.appendChild(article);
  });
}

// ===== DELETE =====
function deleteNews(id) {
  const updated = getNews().filter(function (n) {
    return n.id !== id;
  });

  saveNews(updated);
  renderNews("newsContainer", false);
  renderNews("adminNewsContainer", true);
}

// ===== INIT (ORDEN CLAVE) =====
initNews();
renderNews("newsContainer", false);
renderNews("adminNewsContainer", true);