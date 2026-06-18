function setupNewsForm() {
  const form = document.getElementById("newsForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const image = document.getElementById("image").value.trim();
    
    // Leemos si hay un ID en el input oculto
    const hiddenId = document.getElementById("newsId").value;

    if (!title || !description || !image) {
      alert("Completá todos los campos");
      return;
    }

    let news = getNews();

    // Si hiddenId no está vacío, estamos editando
    if (hiddenId !== "") {
      // Usamos == en lugar de === porque el input oculto devuelve un texto (string)
      const index = news.findIndex(item => item.id == hiddenId);
      
      if (index !== -1) {
        news[index].title = title;
        news[index].description = description;
        news[index].image = image;
      }
      
    } else {
      // Si está vacío, creamos una noticia nueva
      const newNews = {
        id: Date.now(),
        title: title,
        description: description,
        image: image
      };
      news.push(newNews);
    }

    // Guardamos y reiniciamos
    saveNews(news);
    form.reset();
    
    // Vaciamos el input oculto por las dudas
    document.getElementById("newsId").value = "";

    renderNews("adminNewsContainer", true);

    alert("Noticia guardada correctamente");
  });
}

document.addEventListener("DOMContentLoaded", setupNewsForm);