var year =2016;
var month =2;

switch(month){
case 1: 
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
document.write("31days");
break;
case 4: 
case 6:
case 9:
case 11:
document.write("30Days");
break;
case 2:
if(year%4==0)
    document.write("leap year 29 Days");
default:
document.write("28Days")
}