const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=3e90429255b04d6f970e5d65ec282f0f`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}