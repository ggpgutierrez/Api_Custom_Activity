const journeyService = require('../services/servicesJourney')

const postJourney = (req, res) => {
    console.log(req.body);
    const { email } = req.body;
   
    try{
        journeyService.createCustomer(email);
        
    }catch(e){
        console.log(e.message);
    }
}
module.exports = {
    postJourney
}