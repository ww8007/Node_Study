const models = require("./models");

async function getProducts() {
  try {
    const prdouct1 = await models.Products.findByPk(1); //1번 제품 받아오기
    const product2 = await models.Products.findByPk(2); //
    console.log(prdouct1.dataValues.id);
    console.log(product2.dataValues.price);
  } catch (e) {
    console.log(e);
  }
}

getProducts();
