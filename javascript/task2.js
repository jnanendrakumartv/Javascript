var Ramesh_mass=60;
var Ramesh_height=6;
var Suresh_mass=59;
var Suresh_height=7;
var Ramesh_BMI=Ramesh_mass/Ramesh_height**2;
var Suresh_BMI=Suresh_mass/Suresh_height**2;
var bool=Ramesh_BMI>Suresh_BMI;
document.write("Ramesh's mass = "+Ramesh_mass+" kg<br>");
document.write("Ramesh's height = "+Ramesh_height+"<br>");
document.write("Suresh's mass = "+Suresh_mass+" kg<br> ");
document.write("Suresh's height= "+Suresh_height+" <br>");
document.write("Ramesh_BMI = "+Ramesh_BMI+"<br>");
document.write("Suresh_BMI = "+Suresh_BMI+"<br>");
document.write(bool);
if(Ramesh_BMI>Suresh_BMI)
{
	console.log("Is Ramesh's BMI higher than Suresh's?|"+bool);

}