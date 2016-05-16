require("babel-polyfill");

var  fetchJson = async (url) => {
        try {
            let request = await fetch(url);
            let text = await request.text();
            return text;
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    };

$(() => {
   var ipaddress = fetchJson('http://localhost:8080/src/sample.json') 
   $('#tdebug').val(ipaddress)
});