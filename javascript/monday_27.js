var array = ['India', 'Pakistan','SouthAfrica', 'Srilanka', 'Russia'];

var lgth = 0;
var longest;

for(var i=0; i < array.length; i++){
    if(array[i].length > lgth){
        var lgth = array[i].length;
        longest = array[i];
    }      
} 
document.write(longest);
alert(longest);
console.log(longest);