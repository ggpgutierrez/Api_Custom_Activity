const journeydb = require('../db/journeydb')

const createCustomer = (email) => {
    try {
      return journeydb.createUserJourney(email)
    } catch(e) {
      throw new Error(e.message)
    }
  }
   
  module.exports = {
    createCustomer
  }
   
