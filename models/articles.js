let idCounter = 1;
const articles = [
    { id: 1, title: 'hello', content: 'world' }
]

const getAllArticles = () => articles
const getArticle = (id) => articles.find(a => a.id === parseInt(id))

const createArticle = (title, content) => {
    const newArticle = { id: ++idCounter, title, content }
    articles.push(newArticle)
    return newArticle
}

const updateArticle = (id, title, content) => {
    const article = getArticle(id);
    if (article) {
        if (title) article.title = title;
        if (content) article.content = content;
        return article;
    }
    return null;
}

const deleteArticle = (id) => {
    const index = articles.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
        return articles.splice(index, 1)[0];
    }
    return null;
}

module.exports = { getAllArticles, getArticle, createArticle, updateArticle, deleteArticle }