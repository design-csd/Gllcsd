const express = require('express')
const path = require('path');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
})

app.get('/DistributionSummary.plist', function (req, res) {
    res.sendFile(path.resolve('./DistributionSummary.plist'));
})

app.get('/gllProject.ipa', function (req, res) {
    res.sendFile(path.resolve('./gllProject.ipa'));
})

app.listen(process.env.PORT || 3000, function () {
    console.log(`Example app listening on port ${process.env.PORT}!`);
})
