var express = require("express");
var router = express.Router();

const {
    Home,
} = require('../controllers/matricula');

router.get("/", Home);

module.exports = router;