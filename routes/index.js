const express = require("express");
const router = express.Router();

const balanceRouter = require("./balance");
const clientsRouter = require("./clients");

router.use("/admin", balanceRouter);
router.use("/main", clientsRouter);

module.exports = router;
