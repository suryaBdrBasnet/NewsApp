const topicField = document.getElementById("topic");
console.log(topicField)

const searchNews = () => {
    const topic = topicField.value;
    console.log(topic)
    const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=f045e7788f4941b6884a5994d9f5433d`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.articles))

}

const displayNews = (news) =>{
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    news.forEach(news => {
        newsContainer.insertAdjacentHTML

        const div = document.createElement("div");
        div.classList.add("news");

        const html = `
            <h3>Title: ${news.title}</h3>
            <p>${news.description}</p>
            <a href="${news.url}" target="_blank">Read More</a>
        `;
        div.insertAdjacentHTML("beforeend", html);
        newsContainer.appendChild(div);
        
    });

}