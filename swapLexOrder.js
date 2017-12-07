function swapLexOrder(str, pairs) {
    var orderedStr = str.split('').sort().reverse();
    for(var i = 0; i < pairs.length; i++){
        pairs[i] = pairs[i].sort(function(a,b){ return a*1 > b*1;});
    } 
    pairs = pairs.sort(function(a,b){
        if (a[0] === b[0]) {
            return (a[1] < b[1]) ? -1 : 1;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    });
    var csl = {};
    var igList = []; 
    for(var i = 0; i < pairs.length; i++){
        if(igList.indexOf(i) < 0){
            csl[i] = pairs[i];
            for(var j = i+1; j < pairs.length; j++ ){ 
                if(csl[i].some(r=>  pairs[j].indexOf(r) >= 0)){
                  csl[i] = Array.from(new Set( csl[i].concat(pairs[j]) ));
                    igList.push(j);
                }
            }
        csl[i].sort(function(a,b){ return a*1 > b*1;});
        }
        
    } 
    var lo = true;
    do{
        var mer = false;
        var t = {};
        Object.keys(csl).forEach(function(key) {
           csl[key].forEach(function(v,i){
              if(!t[csl[key][i]]) { 
                  t[csl[key][i]] =  key;
              }
              else{ 
                  csl[t[csl[key][i]]] = Array.from(new Set( csl[t[csl[key][i]]].concat(csl[key])));
                  csl[t[csl[key][i]]] = csl[t[csl[key][i]]].sort(function(a,b){ return a*1 > b*1;});
                  csl[key] = [] ;
                  mer = true;
              }  
           }); 
        });
        lo = mer;
    } while(lo);
    Object.keys(csl).forEach(function(key) {
       csl[key].forEach(function(v,i){
          csl[key][i] = csl[key][i]-1; 
       }); 
       csl[key] = csl[key].sort(function(a,b){
           return (a*1) - (b*1);
       });
       if(csl[key].length == 0){
           delete csl[key];
       } 
    });
    console.log(csl);
    var x = JSON.parse(JSON.stringify(csl));
    str = str.split('');
    var r = []; r = [...str];
    var z = []; z = [...str];
    r.forEach(function(i, idx){
        r[idx] = '1';
    });
    
    var tmp = [];
    Object.keys(csl).forEach(function(key) {
        tmp = [];
        var x = csl[key];
        x.forEach(function(v, idx){
            tmp.push(str[v]);
        });
        tmp = tmp.sort().reverse(); 
        x.forEach(function(v, id){
            r[v] = tmp[id];
        });
    }); 
    r.forEach(function(v,idx){
        if(v == '1') r[idx] = str[idx];
    });
    r = r.join('');
    return r;
}
