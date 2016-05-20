require("babel-polyfill");

var  fetchApi = async (url) => {
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
        var result = fetchApi('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDEUR%22,%20%22USDJPY%22,%20%22USDBGN%22,%20%22USDCZK%22,%20%22USDDKK%22,%20%22USDGBP%22,%20%22USDHUF%22,%20%22USDLTL%22,%20%22USDLVL%22,%20%22USDPLN%22,%20%22USDRON%22,%20%22USDSEK%22,%20%22USDCHF%22,%20%22USDNOK%22,%20%22USDHRK%22,%20%22USDRUB%22,%20%22USDTRY%22,%20%22USDAUD%22,%20%22USDBRL%22,%20%22USDCAD%22,%20%22USDCNY%22,%20%22USDHKD%22,%20%22USDIDR%22,%20%22USDILS%22,%20%22USDINR%22,%20%22USDKRW%22,%20%22USDMXN%22,%20%22USDMYR%22,%20%22USDNZD%22,%20%22USDPHP%22,%20%22USDSGD%22,%20%22USDTHB%22,%20%22USDZAR%22,%20%22USDISK%22)&env=store://datatables.org/alltableswithkeys');
        result.then(parseXml);
        console.log('fetched');
    },
    5000,
    null);
   
});

var parseXml = (xml) => {
    let parser = new DOMParser();
    let dom = parser.parseFromString(xml, 'text/xml');
    
    let currency = ["USDEUR","USDJPY","USDBGN","USDGBP","USDCHF","USDAUD","USDBRL","USDZAR"];
    
    var result = "currency:ASK:BID\n";
    
    $.each(currency,
      (index,elem) => {
        var ask = $(dom).find("query").find("results").find("rate#" + elem).find("Ask").text();
        var bid = $(dom).find("query").find("results").find("rate#" + elem).find("Bid").text();
        result += `${elem}:${ask}:${bid }\n`;
      }
    )
    
    $('#adwork').val(result);
}
