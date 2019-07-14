var express = require("express");
var router = express.Router();

const { 
    Programas,
    Estadisticas,
    Modalidades,
    Home,
    Resultados,
    ResultadosId,
    ResultadosIdPrograma,
    PostularId,
    PostulanteGuardar
} = require('../controllers/admision');

router.get("/", Home);
router.get("/estadisticas", Estadisticas);
router.get("/programas", Programas);
router.get("/modalidades", Modalidades);

// ========================================================
// Resulatdos de exemenes de admision
router.get("/resultados", Resultados);
router.get("/resultados/:id", ResultadosId);
router.get("/resultados/:setting_id/:program_id", ResultadosIdPrograma);

// ========================================================
// Postualar
router.get("/postular/:id", PostularId);
router.post("/postular", PostulanteGuardar);

module.exports = router;
