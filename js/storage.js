function setupNewsForm() {
  const form = document.getElementById("newsForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const newsId = document.getElementById("newsId").value;
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const image = document.getElementById("image").value.trim();

    if (!title || !description || !image) {
      alert("Completá todos los campos");
      return;
    }

    const news = getNews();

    if (newsId) {
      const updatedNews = news.map((item) => {
        if (item.id === Number(newsId)) {
          return {
            id: item.id,
            title: title,
            description: description,
            image: image
          };
        }

        return item;
      });

      saveNews(updatedNews);
      alert("Noticia modificada correctamente");
    } else {
      const newNews = {
        id: Date.now(),
        title: title,
        description: description,
        image: image
      };

      news.push(newNews);
      saveNews(news);
      alert("Noticia guardada correctamente");
    }

    form.reset();
    document.getElementById("newsId").value = "";

    renderNews("newsContainer", false);
    renderNews("adminNewsContainer", true);
  });
}

document.addEventListener("DOMContentLoaded", setupNewsForm);
