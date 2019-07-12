var express = require("express");
var router = express.Router();

var async = require("express-async-await");

const request = require("./../utils/request");

/* GET home page. */
router.get("/", async function(req, res, next) {
    const preAdmission = await request(`/admission/pre/admission/get`, {
        method: "POST",
    });
    
    res.render("admision/index", { 
        title: "Express", preAdmission 
    });
});

// ========================================================
// Resulatdos de exemenes de admision
router.get("/resultados", async function(req, res, next) {
    const results = await request(`/admission/results`, {
        method: "POST"
    });
    res.render("admision/resultados", { title: "Express", results });
});

router.get("/resultados/:id", async function(req, res, next) {
    const results = await request(`/admission/results/by/id`, {
        method: "POST",
        body: {
            id: parseInt(req.params.id),
        }
    });
    res.render("admision/resultadosPro", { title: "Express", results });
});

router.get("/resultados/:setting_id/:program_id", async function(req, res, next) {
    const results = await request(`/admission/results/by/program/id`, {
        method: "POST",
        body: {
            setting_id: parseInt(req.params.setting_id),
            program_id: parseInt(req.params.program_id),
        }
    });
    res.render("admision/resultadosProId", { title: "Express", results });
});

// ========================================================
// Postualar
router.get("/postular/:id", async function(req, res, next) {

    res.render("admision/postular", { title: "Express" });
});

router.get("/estadisticas/", function(req, res, next) {
    res.render("admision/estadisticas", { title: "Express" });
});

module.exports = router;
