const journeyService = require('../services/servicesJourney')

const postJourney = (req, res) => {
    const email = req.body['inArguments'][0]['Email'];
    console.log(email);

    try{
        journeyService.createCustomer(email);
    }catch(e){
        console.log(e.message);
    }
}
module.exports = {
    postJourney
}