const request = require("request");
const fs = require("fs");

var currentChangeID = '58753553-62100676-58184518-67663682-62827449';

var body;

request('http://www.pathofexile.com/api/public-stash-tabs?id=' + currentChangeID, (error, response, body) => {
    if (error) throw error;
    if (response.statusCode === 200) {
        const formatted = JSON.stringify(JSON.parse(body), null, 2);
        console.log(formatted);

        fs.writeFile('./response.json', formatted, (err) => {
            if (err) throw err;
            console.log('File saved!');
        });
    }
});