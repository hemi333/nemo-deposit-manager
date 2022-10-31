const express = require("express");
const router = express.Router();

const balanceRouter = require("./balance");
const clientsRouter = require("./clients");

router.use("/balances", balanceRouter);
router.use("/clients", clientsRouter);

module.exports = router;
