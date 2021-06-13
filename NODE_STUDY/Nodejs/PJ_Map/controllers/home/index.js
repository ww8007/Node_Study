const { Router } = require('express');
const router = Router();
const models = require('../../models')

router.get('/', async ( _ , res) => {
    res.render('home.html', {
        apts : await models.Apts.findAll()
    })
});

module.exports = router;


