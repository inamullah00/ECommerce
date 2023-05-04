const items = require("../models/items");

const getaddItems = (req, res) => {
  res.render("form");
};

const addItems = async (req, res) => {
  const title = req.body.title;
  const data = await items.create({
    title: title,
  });
  res.redirect("/item/showItem");
};

const showItems = async (req, res) => {
  const data = await items.findAll();
  res.render("displayItem", { result: data });
};

const editItems = async (req, res) => {
  const data = await items.findOne({ where: { id: req.params.itemId } });
  res.render("updateForm", { result: data });
};

const updateItems = async (req, res) => {
  const itemId = req.params.itemId;
  const data = await items.update(
    { title: req.body.title },
    { where: { id: itemId } }
  );
  res.redirect("/item/showItem");
};

const deleteItems = async (req, res) => {
  await items.destroy({ where: { id: req.params.itemId } });
  res.redirect("/item/showItem");
};

module.exports = {
  showItems,
  editItems,
  addItems,
  deleteItems,
  getaddItems,
  updateItems,
};
