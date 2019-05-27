const express = require('express');
const router = express.Router();

router.post('/save', (req, res) => {
    console.log(req.body["name"]);
    res.status(200);
    res.send({
        route: 'save'
    });
});

router.post('/publish', (req, res) => {
    console.log('publish', req.headers);

    res.status(200);
    res.send({
        route: 'publish'
    });
});

router.post('/validate', (req, res) => {
    console.log('validate', req.headers);
    
    res.status(200);
    res.send({
        route: 'validate'
    });
});

router.post('/execute', (req, res) => {
    const jr  = require("../controllers/controllerJourney");
    jr.postJourney(req);
    res.status(200);
    res.send({
        route: 'execute'
    });
});

module.exports = router;