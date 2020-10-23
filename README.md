# google-scholar-scraper
A web scraper to get google scholar statistics using nodeJS and Github Actions. 

This scapes my google scholar profile and saves my total citations, i10 index, and h index as json. This is used to update the statistics on [pubs.jack.engineering](https://pubs.jack.engineering)

Creates a json file ```citation_stats.json``` that can be read from html using js, updated every day using github actions.  

To use for any google scholar. Fork and change the google scholar url in ```scraper.js``` and the JSON url in the js example below.


##### Example js that updates an html paragraph id=total_cit:  
```  
$.getJSON('https://raw.githubusercontent.com/YOUR_USERNAME/google-scholar-scraper/main/citation_stats.json', function(data) {
        var text = `Citations: <strong>${data.total}</strong> | h-index: <strong>${data.h_index}</strong> | i10-index: <strong>${data.i10_index}</strong>`

        total_cit.innerHTML = text; 
});

