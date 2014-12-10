var formattedName = HTMLheaderName.replace("%data%", "Aditya Gorti");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
