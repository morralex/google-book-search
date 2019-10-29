const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
// /api
router.use("/books", bookRoutes);

module.exports = router;
