"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('request');
function search(query, result) {
    query = query.replace(' ', '+');
    request({
        url: `https://kgsearch.googleapis.com/v1/entities:search?query=${query}&key=AIzaSyBUp4ijfSJeDKXLKMV8xdwrvUB5FcUF4hw&limit=1&indent=True`,
        json: true
    }, function (err, response, body) {
        if (err)
            return console.error(err);
        result(body);
    });
}
exports.search = search;
//# sourceMappingURL=KnowledgeGraph.js.map