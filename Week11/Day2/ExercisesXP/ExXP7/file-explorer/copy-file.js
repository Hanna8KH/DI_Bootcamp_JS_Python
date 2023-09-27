const fs = require('fs');



function readFile(fileName) {
    fs.readFile(fileName, 'utf-8', function (err, data) {
        if (err) {
            console.error(err)
            return
        }
        console.log(data);
    });

};

function writeFile(fileName, content) {
    fs.writeFile(fileName, content, function (err) { 
        if (err){ 
            console.log(err);
        }
        else{
            console.log('Write operation complete.');
        }
    });
};