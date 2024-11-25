const https = require('follow-redirects').https; 

const BASE_URL = 'example.api.findcep.com'; 

let options = {   
    'method': 'GET',
    'hostname': BASE_URL,
    'path': '/v1/cep/01234000.json',
};

let req = https.request(options, function (res) { 
    let chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        let body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
});

req.end();