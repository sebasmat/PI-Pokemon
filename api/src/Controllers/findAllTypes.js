const {Types} = require('../db.js');
const findAllTypes = (types)=>{
    types.forEach((obj) => {
        delete obj.url;
    });
    const typesBD = Types.bulkCreate(types);
    return typesBD; 
}

module.exports = findAllTypes;