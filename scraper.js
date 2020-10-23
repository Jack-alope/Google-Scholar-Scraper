const rp = require('request-promise');
const $ = require('cheerio');
const fsLibrary  = require('fs')
const url = 'https://scholar.google.com/citations?user=RwMPs-8AAAAJ&hl=en';
var list = []

rp(url)
  .then(function(html) {
    $('.gsc_rsb_std', html).map(async (i, e) => {
      list.push(e.children[0].data)
    })
    var d = new Date();
    dict = {"total": list[0],
            "h_index": list[2],
            "i10_index": list[4],
            "Updated": d,
          };
    dict = JSON.stringify(dict)

    fsLibrary.writeFile('citation_stats.json', dict, (error) => {
      if (error) throw err;
    })
  })
  .catch(function(err) {
    //handle error
  });
