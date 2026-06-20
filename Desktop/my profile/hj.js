async function fetchDevArticles() {
    const container = document.getElementById('articles-container');
    try {
        const response = await fetch('https://dev.to/api/articles?per_page=6');
        const articles = await response.json();

        articles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'article-card';
            card.innerHTML =` 
                <img src="${article.cover_image || 'default-image.jpg'}" alt="cover">
                <div class="content">
                    <h3>${article.title}</h3>
                    <p>${article.description.substring(0, 80)}...</p>
                    <a href="${article.url}" target="_blank">see more</a>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = "<p>sorry, there's error</p>";
    }
}

fetchDevArticles();