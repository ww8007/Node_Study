const models = require('../../models');

exports.get_apts = ( _ , res) => {
    models.Apts.findAll({

    }).then( (apts) => {
        // DB에서 받은 apts를 apts변수명으로 내보냄
        res.render( 'admin/apts.html' ,{ apts : apts });
    });
}

exports.get_apts_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_apts_write = ( req , res ) => {

    models.Apts.create(req.body).then( () => {
        res.redirect('/admin/apts');
    });
}

exports.get_apts_detail = ( req , res ) => {
    models.Apts.findByPk(req.params.id).then( (apt) => {
        res.render('admin/detail.html', { apt: apt });  
    });
};

exports.get_apts_edit = ( req , res ) => {
    
    models.Apts.findByPk(req.params.id).then( (apt) => {
        res.render('admin/write.html', { apt : apt });
    });
};

exports.post_apts_edit = ( req , res ) => {

    models.Apts.update(
        req.body , 
        { 
            where : { id: req.params.id } 
        }
    ).then( () => {
        res.redirect('/admin/apts/detail/' + req.params.id );
    });

}

exports.get_apts_delete = ( req , res ) => {
    models.Apts.destroy({
        where: {
            id: req.params.id
        }
    }).then( () => {
        res.redirect('/admin/apts');
    });
};