const express = require('express');
const router = express.Router();
const http = require('http');
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

router.get('/execute', (req, res) => {
    const options = {
        hostname: 'https://mc351wk91pkyb0wj0my-rqqwjtg4.rest.marketingcloudapis.com/asset/v1/content/assets',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const data = JSON.stringify({
        "name": "imagem teste gif nova nova",
        "assetType": {
          "name": "gif",
          "id": 20
         },
        "file": "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      });

    const req2 = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`)
        res.on('data', (d) => {
          process.stdout.write(d)
        })
      })
      req2.on('error', (error) => {
        console.error(error)
      })
      req2.write(data)
      req2npm.end()

    //const jr  = require("../controllers/controllerJourney");
    //jr.postJourney(req);
    res.status(200);
    res.send({
        route: 'execute'
    });
});

module.exports = router;
