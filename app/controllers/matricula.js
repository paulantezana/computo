const request = require("./../utils/request");

const Home = async (req, res, next) => {
    // const preAdmission = await request(`/admission/pre/admission/get`, {
    //     method: "POST",
    // });
    
    res.render("matricula/index", { 
        title: "Express" 
    });
}

module.exports = {
    Home,
}