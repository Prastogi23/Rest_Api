const express = require("express");
const { getallproduct, getallproducttesting } = require("../controllers/products");
const router = express.Router();

router.route("/").get(getallproduct);
router.route("/testing").get(getallproducttesting);

module.exports = router;