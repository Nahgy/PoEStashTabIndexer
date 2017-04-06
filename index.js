const request = require("request");
const fs = require("fs");
var body;

request('http://www.pathofexile.com/api/public-stash-tabs', (error, response, body) => {
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