const { Router } = require('express');
const router = Router()

router.use('/', require('./home'));
router.use('/admin', require('./admin'));

module.exports = router;