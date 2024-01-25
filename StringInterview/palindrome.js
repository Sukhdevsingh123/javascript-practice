var str = "racecar";
var Totalnt = str.length;

for (var i = 0; i < Totalnt / 2; i++) {
    if (str.charAt(i) !== str.charAt(Totalnt - 1 - i)) {
        console.log('false');
        
    }
    else{
        console.log('true')
    }
}
