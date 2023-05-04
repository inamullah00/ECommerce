const express = require("express");
const router = express.Router();
const {
  showItems,
  addItems,
  editItems,
  deleteItems,
  getaddItems,
  updateItems,
} = require("../controllers/itemController");

router.get("/", getaddItems);
router.post("/addItem", addItems);
router.get("/showItem", showItems);

router.get("/editItem/:itemId", editItems);
router.post("/updateItem/:itemId", updateItems);
router.delete("/deleteItem/:itemId", deleteItems);

module.exports = router;
