
var bio = {
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
        "degree": "transfer",
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
			"location": "San Diego",
			"dates": "2010-2011",
			"description":"Service Analysis"
		}
		]
	
}  

  var projects = {
  	"projects": [
  		{
  			"title": null,
  			"dates": null,
  			"description": null ,
   			"images": null
  		}
  	]

  }

if(bio.skills.length > 0){
	
	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills.replace("%data%",bio.skills[0]));
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[1]));

}