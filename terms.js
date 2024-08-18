function showMore(articleId) {
    let article = document.getElementById(articleId);
    let fullArticle = article.querySelector('.full-article');
    if (fullArticle.style.display === "none" || fullArticle.style.display === "") {
        fullArticle.style.display = "block";
    } else {
        fullArticle.style.display = "none";
    }
}