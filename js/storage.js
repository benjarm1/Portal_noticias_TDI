document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const idInput = document.getElementById("newsId");
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    let news = getNews();

    if (idInput.value) {
      // editar
      news = news.map(n =>
        n.id == idInput.value
          ? { ...n, title, description, image }
          : n
      );
    } else {
      // crear
      const newNews = {
        id: Date.now(),
        title,
        description,
        image
      };
      news.push(newNews);
    }

    saveNews(news);
    form.reset();
    idInput.value = "";

    renderNews("adminNewsContainer", true);
    renderNews("newsContainer", false);
  });
});