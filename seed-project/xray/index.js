const Xray = require('x-ray');
const request = require('request'); 
const fs = require('fs');

const xray = new Xray();

var x = Xray({
    filters: {
        cleanUpText: function (value) { return value.replace(/[^\x20-\x7E]/gmi, ""); },
        cleanUpSpaces: function (value) { return value.replace(/\s/g, ""); },
    }
});


x('https://www.avanza.se/aktier/lista.html?gclid=CjwKEAjwtJzLBRC7z43vr63nr3wSJABjJDgJcbWC4UWOZUFLX5st9DCbHm7AOpVV5ITaxKYHGOUbRRoCVzXw_wcB&gclsrc=aw.ds&dclid=CNCPo8S7htUCFREFGQodwQ4IyA', 'table.u-standardTable', {
    tbody: 'tbody | cleanUpText'    
})
    .write('stockNamesRaw.json');

x('https://www.avanza.se/aktier/lista.html?gclid=CjwKEAjwtJzLBRC7z43vr63nr3wSJABjJDgJcbWC4UWOZUFLX5st9DCbHm7AOpVV5ITaxKYHGOUbRRoCVzXw_wcB&gclsrc=aw.ds&dclid=CNCPo8S7htUCFREFGQodwQ4IyA', 'div.tableScrollContainer', {
    tbody: 'tbody | cleanUpSpaces'    
})
    .write('stockInfoRaw.json');


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

// xray('https://www.google.com', 'a', [{
//     a: '',
//     href: '@href'
// }]).write('results.json');
// searchSharesListOutput

// xray('http://www.nasdaqomxnordic.com/shares', 'div', [{
//     div: 'div',
//     table: 'table'
// }]).write('results.json');

// xray('http://www.nasdaqomxnordic.com/shares', 'div.nordic-outer-row', [{
//     div: 'div'    
// }]).write('results.json');

// xray('https://www.avanza.se/aktier/lista.html?gclid=CjwKEAjwtJzLBRC7z43vr63nr3wSJABjJDgJcbWC4UWOZUFLX5st9DCbHm7AOpVV5ITaxKYHGOUbRRoCVzXw_wcB&gclsrc=aw.ds&dclid=CNCPo8S7htUCFREFGQodwQ4IyA', 'div.tableWrapper tbody', [{
//     name: 'tr'    
// }])//.write('results.json');
// (function(results){
//      var cleanedResults = [];
//      results.forEach(function(result){
//         var cleanedResult = {};
//         cleanedResult = result.replace(/(\r\n|\n|\r)/gm,"");        
//         //etc
//         cleanedResults.push(cleanedResult)
//      });

//      //write out results.json 'manually'
//     fs.writeFile('results.json', JSON.stringify(cleanedResults), function (err) {
//         if(err) { return console.log(err) };
//         console.log(cleanedResults + '> results.json');
//     });
// });

// xray('https://www.avanza.se/aktier/lista.html?gclid=CjwKEAjwtJzLBRC7z43vr63nr3wSJABjJDgJcbWC4UWOZUFLX5st9DCbHm7AOpVV5ITaxKYHGOUbRRoCVzXw_wcB&gclsrc=aw.ds&dclid=CNCPo8S7htUCFREFGQodwQ4IyA', 'div.tableWrapper tbody', [{
//     name: 'tr'    
// }]).write('results.json');

// xray('https://www.avanza.se/aktier/lista.html?gclid=CjwKEAjwtJzLBRC7z43vr63nr3wSJABjJDgJcbWC4UWOZUFLX5st9DCbHm7AOpVV5ITaxKYHGOUbRRoCVzXw_wcB&gclsrc=aw.ds&dclid=CNCPo8S7htUCFREFGQodwQ4IyA', 'div.tableWrapper', [{
//     tbody: 'tbody'    
// }]).write('results.json');

// x('https://www.avanza.se/aktier/lista.html?gclid=CjwKEAjwtJzLBRC7z43vr63nr3wSJABjJDgJcbWC4UWOZUFLX5st9DCbHm7AOpVV5ITaxKYHGOUbRRoCVzXw_wcB&gclsrc=aw.ds&dclid=CNCPo8S7htUCFREFGQodwQ4IyA', 'div.tableWrapper', {
//     tbody: 'tbody | cleanUpText'    
// })
//     .write('data.json');


// var x = Xray({
//     filters: {
//         cleanUpText: function (value) { return value.replace(/[^\x20-\x7E]/gmi, ""); },
//     }
// });


// x('http://store.steampowered.com/search/?filter=topsellers', '#search_results div div a', [{
//     title: '.responsive_search_name_combined .search_name .title ',
//     price: '.col.search_price.responsive_secondrow | cleanUpText', // calling filter function 'cleanUpText'
// }])
//     .paginate('.search_pagination_right a.pagebtn:last-child@href')
//     .limit(10)
//     .write('data.json');


