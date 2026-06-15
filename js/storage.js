document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsForm");

  if (!form) return;

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const imageInput = document.getElementById("image");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const image = imageInput.value.trim();

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
    renderNews("newsContainer", false);
  });
});
