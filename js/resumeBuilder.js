
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
        "Fast Learner",
        "Quick Thinker",
        "Adept in Web technologies",
        "Excellent Problem Solver",
        "Innovator"
    ]
}

var education = {
    "schools": [
    {
        "name": "Mount San Antonio",
        "location": "Diamond Bar, CA",
        "degree": "Associate Degree",
        "majors": "Electrical Engineering",
        "dates": "2005-2008",
        "url": "http://www.mtsac.edu/"
    },

    {	"name": "UCSD",
        "location": "San Diego",
        "degree": "BS",
        "majors": "Electrical Engineering",
        "dates": "2008-2011",
        "url": "ucsd.edu"
    }],
    "onlinecourse": [{
    	"title": "Front End Web Development Nano Degree",
    	"school": "Udacity",
    	"dates": "2014-present",
    	"url": "Udacity.com"
    },
      {
        "title": "Intro to Front End Development",
        "school": "Thinkful",
        "dates": "Jan 2014 - July 2014",
        "url": "http://www.thinkful.com/"
      }]
    }

var work = {
	"jobs": [
		{
			"employer": "LPL Financial",
			"title": "Service Analyst",
			"location": "San Diego",
			"dates": "2011-Present",
			"description":"Manage a team of financial advisors across the country. Co-developed the UI for a self-directed platform to make trading options easier for our advisors. "
		},
		
    {
      "employer": "Weebly",
      "title": "Remote Analyst",
      "location": "San Francisco, CA",
      "dates": "Dec 2013-Present",
      "description":"Troubleshoot and diagnose user's web sites. Involves routinely checking domain configurations, checking sitemaps, etc."
    },

    {
			"employer": "Ametek",
			"title": "Repair Admin",
			"location": "San Diego, CA",
			"dates": "2010-2011",
			"description":"Ran the repair and service area for programmable power supplies. Oversaw the eastern seaboard and instituted a lean program to cut down turn around times to 5 days from 2 weeks."
		}
		]
	
}  

  var projects = {
  	"projects": [
  		{
  			"title": "First Project",
  			"dates": "September 2014",
  			"description": "Recreated a site from a mockup" ,
   			"images": "../images/proj1mockup.png"
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
var formattedImage = HTMLbioPic.replace("%data%","https://placekitten.com/g/200/200");
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
  for(i=0;i<bio.skills.length;i++){
  $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
  }
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
  $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
  
    $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
}

$("#education").append(HTMLonlineClasses);
    var i = 0;
for (var onlineCourses in education.onlinecourse){
  
  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlinecourse[onlineCourses].title);
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlinecourse[onlineCourses].school);
  var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlinecourse[onlineCourses].dates);
  var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlinecourse[onlineCourses].url);
  $("#onlineClass").append(formattedOnlineTitle + formattedOnlineSchool);
  $("#onlineClass").append(formattedOnlineDates);
  $("#onlineClass").append(formattedOnlineUrl);
   

   if(education.onlinecourse.length!=0 && i<(education.onlinecourse.length-1)){ $('#onlineClass').append('<hr>');}
   i++; 
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

// map
 
$("#mapDiv").append(googleMap);


// footer

$('#footerContacts').append(formattedMobile);
$('#footerContacts').append(formattedEmail);
$('#footerContacts').append(formattedGit);
$('#footerContacts').append(formattedLocation);