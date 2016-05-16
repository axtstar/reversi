 
var  fetchJson = async (url) => {
        try {
            let request = await fetch(url);
            let text = await request.text();
            return JSON.parse(text);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    };

$(() => {
   var postal = fetchJson('http://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060') 
  $('#tdebug').val(postal);
});