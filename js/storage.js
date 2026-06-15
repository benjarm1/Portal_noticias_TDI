function setupNewsForm() {
  const form = document.getElementById("newsForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const image = document.getElementById("image").value.trim();

    if (!title || !description || !image) {
      alert("Completá todos los campos");
      return;
    }

    const news = getNews();

    const newNews = {
      id: Date.now(),
      title: title,
      description: description,
      image: image
    };

    news.push(newNews);
    saveNews(news);

    form.reset();

    renderNews("adminNewsContainer", true);

    alert("Noticia guardada correctamente");
  });
}

document.addEventListener("DOMContentLoaded", setupNewsForm);
