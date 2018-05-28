const router = require('express').Router();
const mocks = require('./mock');

router.get('/article', function (req, res, next) {
    const articles = mocks.articles;
    const limit = Number(req.query.limit) || articles.length,
        offset = Number(req.query.offset) || 0;
    res.json(articles.slice(offset, limit + offset))
});

router.get('/article/:id', function (req, res, next) {
    const article = mocks.articles.filter(function (article) {
        return article.id === req.params.id
    })[0];
    if (article) return res.json(article);

    res.status(404).json({error: "not found"});
});

module.exports = router;
