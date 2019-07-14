const request = require("./../utils/request");

const Home = async (req, res, next) => {
    const setting = await request('/setting', {
        method: "GET",
    });
    let title = setting.success ? `${setting.data.prefix_short_name} ${setting.data.institute}` : 'institute';

    res.render('index', { title, setting });
}

module.exports = {
    Home,
}