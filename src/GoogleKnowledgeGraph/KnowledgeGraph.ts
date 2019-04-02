const request = require('request');



export function search(query:string, result) {
    query = query.replace(' ', '+');
    request({
        url: `https://kgsearch.googleapis.com/v1/entities:search?query=${query}&key=AIzaSyBUp4ijfSJeDKXLKMV8xdwrvUB5FcUF4hw&limit=1&indent=True`,
        json : true
    }, function (err, response, body) {
        if (err) return console.error(err);
        result(body);
    })
}