
var bio = {                                   //object set up 
    "name": "Aditya Gorti",
    "role": "Web Developer",
    "contacts": {
        "mobile": "858-205-2420",
        "email": "adityagorti6@gmail.com",
        "github": "https://github.com/adityagorti",
        "location": "San Diego"
    },
    "welcMessage": "Welcome to my Resume",
    "skills": [
        "awesome",
        "badass"
    ]
}

var education = {
    "schools": [
    {
        "name": "Mount San Antonio",
        "location": "San Diego",
        "degree": "Transfer",
        "majors": "Electrical Engineering",
        "dates": "2005-2008",
        "url": "mtsac.com"
    },

    {	"name": "UCSD",
        "location": "San Diego",
        "degree": "BS",
        "majors": "Electrical Engineering",
        "dates": "2008-2011",
        "url": "ucsd.edu"
    }],
    "onlinecourse": {
    	"title": "Udacity Nano Degree",
    	"school": "Udacity",
    	"dates": "2014-present",
    	"url": "Udacity.com"
    }
    }

var work = {
	"jobs": [
		{
			"employer": "LPL Financial",
			"title": "Service Analyst",
			"location": "San Diego",
			"dates": "2011-Present",
			"description":"Service Analysis"
		},
		{
			"employer": "Ametek",
			"title": "Repair Admin",
			"location": "Oakland, CA",
			"dates": "2010-2011",
			"description":"Service Analysis"
		}
		]
	
}  

  var projects = {
  	"projects": [
  		{
  			"title": "First Project",
  			"dates": "Today",
  			"description": "In Progress" ,
   			"images": null
  		}
  	]

  }

var formattedName = HTMLheaderName.replace("%data%",bio.name);  //header(Name and Role) information
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


//Contact info

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedImage = HTMLbioPic.replace("%data%","https://placekitten.com/g/200/300");
var formattedWelc = HTMLWelcomeMsg.replace("%data%",bio.welcMessage);

console.log(bio.contacts.github);
 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedGit);
 $("#topContacts").append(formattedLocation);
 $("#header").append(formattedImage);
 $("#header").append(formattedWelc);

 if(bio.skills.length > 0){
  
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[0]));
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[1]));

}

//Work Experience Section

var displayWork = function() {
for(xyz in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[xyz].employer);
  var formattedtitle= HTMLworkTitle.replace("%data%",work.jobs[xyz].title);
  var formattedEmployerTitle = formattedEmployer + formattedtitle;
  var workDates = HTMLworkDates.replace("%data%",work.jobs[xyz].dates);
  var workLocation = HTMLworkLocation.replace("%data%",work.jobs[xyz].location)
  var workDescription = HTMLworkDescription.replace("%data%",work.jobs[xyz].description);
  $(".work-entry:last").append(formattedEmployerTitle);
  $(".work-entry:last").append(workDates);
  $(".work-entry:last").append(workLocation);
  $(".work-entry:last").append(workDescription);   
}
}

displayWork();


//Project area


projects.display = function() {
    for(var x in projects.projects){
      $("#projects").append(HTMLprojectStart);
      var projTitle = HTMLprojectTitle.replace("%data%",projects.projects[x].title);
      var projDates = HTMLprojectDates.replace("%data%",projects.projects[x].dates);
      var projDesc = HTMLprojectDescription.replace("%data%",projects.projects[x].description);
      var projImage = HTMLprojectImage.replace("%data%",projects.projects[x].images);
      $(".project-entry:last").append(projTitle);
      $(".project-entry:last").append(projDates);
      $(".project-entry:last").append(projDesc);
      $(".project-entry:last").append(projImage);
  }  
}

projects.display();

// Education Info

function displayEducation(){

for(var schools in education.schools){
  var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[schools].name);
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[schools].degree);
  var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[schools].dates);
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[schools].location);
  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[schools].majors)
  $("#education").append( HTMLschoolStart);
  $(".education-entry:last").append(formattedSchoolName);
  $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
}

$("#education").append(HTMLonlineClasses);

for (var onlineCourses in education.onlinecourse){
  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlinecourse[onlineCourses].title);
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlinecourse[onlineCourses].school);
  var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlinecourse[onlineCourses].dates);
  var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlinecourse[onlineCourses].url);
  
  $("#education").append(formattedOnlineTitle);
    $("#education").append(formattedOnlineSchool);
      $("#education").append(formattedOnlineDates);
        $("#education").append(formattedOnlineUrl);




}
}

displayEducation();


$(document).click(function(loc){

 	var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);

 });

$("#main").append(internationalizeButton);   // International Button setup
function inName(nameStr){
  var splitLoc = nameStr.indexOf(" ");
  var regCase = nameStr.slice(0,splitLoc);
  var uppCase = nameStr.slice(splitLoc).toUpperCase();
  var totalCase = regCase.slice(0,1).toUpperCase() + regCase.slice(1) + uppCase;

  return totalCase;
}


 
$("#mapDiv").append(googleMap);
