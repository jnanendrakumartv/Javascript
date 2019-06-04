function ValidateEmail(inputText)
{
var mailformat = /^((\.[a-z0-9]+)*@([a-z]+)*(\.([a-z]{2,5}|[\d]{1,3})))$/;
if(inputText.value.match(mailformat))
{
document.form1.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}