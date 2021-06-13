const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

router.get('/apts', ctrl.get_apts );

router.get('/apts/write', ctrl.get_apts_write );

router.post('/apts/write', ctrl.post_apts_write );

router.get('/apts/detail/:id', ctrl.get_apts_detail );

router.get('/apts/edit/:id', ctrl.get_apts_edit );

router.post('/apts/edit/:id', ctrl.post_apts_edit );

router.get('/apts/delete/:id', ctrl.get_apts_delete );


module.exports = router;


