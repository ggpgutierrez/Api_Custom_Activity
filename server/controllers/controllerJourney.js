const journeyService = require('../services/servicesJourney')

const postJourney = (req, res) => {
    console.log(req.body);
   
    try{
        journeyService.createCustomer(req.body);
    }catch(e){
        console.log(e.message);
    }
}
module.exports = {
    postJourney
}