console.log('main.js loaded...');

async function getArticles() {
    const response = await fetch("http://localhost:8888");
    const articles = await response.json();
    console.log(articles);
  }

  getArticles();