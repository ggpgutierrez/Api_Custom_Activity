const journeyService = require('../services/servicesJourney')

const postJourney = (req, res) => {
    const email = req.body;
    console.log(email['inArguments'][0]['Email']);

    try{
        journeyService.createCustomer(email);
    }catch(e){
        console.log(e.message);
    }
}
module.exports = {
    postJourney
}