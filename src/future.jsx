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
    setInterval( () => {
        var adresult = fetchJson('http://localhost:8080/src/sample.json');
        adresult.then(A);
        console.log('fetched');
    },
    5000,
    null);
   
});

var A = (a) => {
    $('#adwork').val(a);
}
