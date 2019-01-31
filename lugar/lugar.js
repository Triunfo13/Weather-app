const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (resp.data.status === 'ZERP_RESULTS') {
        throw new Error(`No hay resultados para la ciudad:  ${direccion}`);
    }

    let location = resp.data.results[0];
    let coordenates = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coordenates.lat,
        lng: coordenates.lng
    }

}

module.exports = {
    getLugarLatLng
}