const moment = require('moment');

module.exports = function(sequelize, DataTypes){
    const Apts = sequelize.define('Apts',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name : { type: DataTypes.STRING },
            price : { type: DataTypes.INTEGER },
            geo : { type: DataTypes.GEOMETRY('POINT') } ,
            address : { type: DataTypes.TEXT }
        }
    );

    Apts.prototype.dateFormat = (date) => (
        moment(date).format('YYYY-MM-DD')
    );
    
    return Apts;
}