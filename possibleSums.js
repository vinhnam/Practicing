/*************recap***************
You have a collection of coins, and you know the values of the coins 
and the quantity of each type of coin in it. 
You want to know how many distinct sums you can make from non-empty groupings 
of these coins.

Example

For coins = [10, 50, 100] and quantity = [1, 2, 1], the output should be
possibleSums(coins, quantity) = 9.

Here are all the possible sums:

50 = 50;
10 + 50 = 60;
50 + 100 = 150;
10 + 50 + 100 = 160;
50 + 50 = 100;
10 + 50 + 50 = 110;
50 + 50 + 100 = 200;
10 + 50 + 50 + 100 = 210;
10 = 10;
100 = 100;
10 + 100 = 110.
As you can see, there are 9 distinct sums that can be created from non-empty 
groupings of your coins.

*/
function possibleSums(coins, quantity) {
    var r = [], m = [];
    for(var i = 0; i < quantity.length; i++)  
      for(var j = 0; j < quantity[i]; j++) 
        m.push(coins[i]);
        
    m.sort(function (a, b) {  return a - b; });
    var f = false,  t = m[0], mIdx = 0, x = {};
    for(var i = 0; i< m.length; i++){
       f = false;
       if(!x[m[i]] ) {r.push(m[i]); f = true;  x[m[i]] = 1; } 
       if(t != m[i]) {mIdx = r.length;}
        var cL = f ? r.length - 1 : r.length; 
        for(j = ( (t == m[i] )? 
                ((cL - mIdx-1) > 0 
                  ? (cL - mIdx-1) : 0) : 0)
          ; j < cL
          ; j++)
        {
            var tmp = r[j] + m[i];
            if(!x[tmp]) {x[tmp]=1;r.push(tmp);}
        }
    }
    return Object.keys(x).length ; 
}