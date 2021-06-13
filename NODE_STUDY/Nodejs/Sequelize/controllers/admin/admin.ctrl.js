const models = require("../../models");

exports.get_products = async (req, res) => {
  try {
    const products = await models.Products.findAll();
    res.render("admin/products.html", { products });
  } catch (e) {
    console.log(e);
  }
};

exports.get_products_write = (_, res) => {
  res.render("admin/write.html");
};

exports.post_products_write = async (req, res) => {
  console.log(req.body);
  try {
    await models.Products.create(req.body);
    res.redirect("/admin/products");
  } catch (e) {
    console.log(e);
  }
};

exports.get_products_detail = async (req, res) => {
  const product = await models.Products.findByPk(req.params.id);
  res.render("admin/detail.html", { product: product });
};

exports.get_products_edit = (req, res) => {
  //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
  models.Products.findByPk(req.params.id).then((product) => {
    res.render("admin/write.html", { product: product });
  });
};

exports.post_products_edit = async (req, res) => {
  await models.Products.update(req.body, {
    where: { id: req.params.id },
  });
  res.redirect("/admin/products/detail/" + req.params.id);
};

exports.get_products_delete = (req, res) => {
  models.Products.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.redirect("/admin/products");
  });
};
