const request = require("./../utils/request");


const Home = async (req, res, next) => {
    const preAdmission = await request(`/admission/pre/admission/get`, {
        method: "POST",
    });
    
    res.render("admision/index", { 
        title: "Express", preAdmission 
    });
}

const Programas = async (req, res, next) => {
    const subsidiaries = await request('/subsidiaries/detail', {
        method: "GET",
    });

    res.render('admision/programas', { title: 'setting', subsidiaries });
}

const Estadisticas = async (req, res, next) => {
    res.render('admision/estadisticas', { title: 'setting' });
}

const Modalidades = async (req, res, next) => {
    const modalities = await request('/admission/modalities', {
        method: "GET",
    });

    res.render('admision/modalidades', { title: 'Modalidades', modalities });
}

const ModalidadesId = async (req, res, next) => {
    const modality = await request(`/admission/modalities/by/id`, {
        method: "POST",
        body: {
            id: parseInt(req.params.id),
        }
    });

    res.render('admision/modalidadesId', { title: 'Modalidades', modality });
}


const Resultados = async (req, res, next) => {
    const results = await request(`/admission/results`, {
        method: "POST"
    });
    res.render("admision/resultados", { title: "Express", results });
}

const ResultadosId = async (req, res, next) => {
    const results = await request(`/admission/results/by/id`, {
        method: "POST",
        body: {
            id: parseInt(req.params.id),
        }
    });
    res.render("admision/resultadosPro", { title: "Express", results });
}

const ResultadosIdPrograma = async (req, res, next) => {
    const results = await request(`/admission/results/by/program/id`, {
        method: "POST",
        body: {
            setting_id: parseInt(req.params.setting_id),
            program_id: parseInt(req.params.program_id),
        }
    });
    res.render("admision/resultadosProId", { title: "Express", results });
}

const PostularId = async (req, res, next) => {
    const preAdmission = await request(`/admission/pre/admission/by/id`, {
        method: "POST",
        body: {
            id: parseInt(req.params.id),
        }
    });

    res.render("admision/postular", { title: "Express", preAdmission });
}

const PostulanteGuardar = async (req, res, next) => {
    const preAdmission = await request(`/admission/pre/admission/save`, {
        method: "POST",
        body: {
            student: {
                dni: req.body.dni,
                full_name: req.body.full_name,
                birth_date: new Date(req.body.birth_date),
                gender: req.body.gender,
                birth_place: req.body.birth_place,
                district: req.body.district,
                province: req.body.province,
                region: req.body.region,
            },
            user: {
                email: req.body.email,
            },
            admission_setting_id: parseInt(req.body.id),
        }
    });

    res.render("admision/postularSuccess", { title: "Express", preAdmission });
}

module.exports = {
    Programas,
    Estadisticas,
    Modalidades,
    ModalidadesId,
    Home,
    Resultados,
    ResultadosId,
    ResultadosIdPrograma,
    PostularId,
    PostulanteGuardar,
}