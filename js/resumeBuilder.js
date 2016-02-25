var bio={
	"name" : "Sujil Anto",
	"role" : "Web developer",
	"contacts":{
	  "mobile" : "+91-963251080" ,
	  "email"  : "sujilnt@gmail.com",
	  "github" :"Sujilnt",
	  "twitter":"SujilAnto",
	  "location":"Bangalore,India"
	},
	"welcomeMessage":" &nbsp;&nbsp;Hi I'm Sujil , love to learn and code.",
	"Skills":["Html5 "," Css3 "," Javascript "," working on Js frameworks like Angularjs, Nodejs, Reactjs and D3js"," Mastering css frameworks like  Bootstrap 4 , Foundation 5 ,Saas and Google Material Design ","Good Knowledge about Jquery"," and Git."],
	"bioPic" : "images/s.png"
};

var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedmobilecontact=HTMLmobile.replace("%data%",bio.contacts.mobile);
var fomattedemailcontact=HTMLemail.replace("%data%",bio.contacts.email);
var githubAccount=HTMLgithub.replace("%data%",bio.contacts.github);
var twitterAccount=HTMLtwitter.replace("%data%",bio.contacts.twitter);
var currentlocation=HTMLlocation.replace("%data%",bio.contacts.location);
var Message=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var currentskills=HTMLskills.replace("%data%",bio.Skills);
var profilepic=HTMLbioPic.replace("%data%",bio.bioPic);

$('#header').prepend(formattedName,formattedRole);
$('#topContacts').append(formattedmobilecontact,fomattedemailcontact,githubAccount,twitterAccount,currentlocation);
$('#header').append(profilepic,Message,HTMLskillsStart);
$('#skills').append(currentskills);
// about education and work
var job={};
//job1
job.position="Web developer";
job.company="App to Succed";
job.location="(Virtual Internship)Stamford,Usa";
job.description="This is a virtual job ,Where I work from home for Us Based Company .Still the product is under development,Expecting its Launch asap in the market.";
job.date="dec 2015 - till now ";
var apptosucced_company=HTMLworkEmployer.replace("%data%",job.company);
var apptosucced_job=HTMLworkTitle.replace("%data%",job.position);
var apptosucced_location=HTMLworkLocation.replace("%data%",job.location);
var apptosucced_description=HTMLworkDescription.replace("%data%",job.description);
var apptosucced_description=HTMLworkDescription.replace("%data%",job.description);
var apptosucced_date=HTMLworkDates.replace("%data%",job.date);
$('#workExperience').append(HTMLworkStart,apptosucced_company,apptosucced_job,apptosucced_date,apptosucced_location,apptosucced_description);
//job2
job.position="Web developer";
job.company=" Gerg Store";
job.location="Bangalore,India";
job.description="I was working as an Front End Web Developer in the store,This is website was completely developed in php, And also we used content Management System called 'Prestashop' Through this job I learnt to use photoshop and Social Engine Optimization .";
job.date="june 2014 - dec 2014";
var info_company=HTMLworkEmployer.replace("%data%",job.company);
var info_job=HTMLworkTitle.replace("%data%",job.position);
var info_location=HTMLworkLocation.replace("%data%",job.location);
var info_description=HTMLworkDescription.replace("%data%",job.description);
var info_description=HTMLworkDescription.replace("%data%",job.description);
var info_date=HTMLworkDates.replace("%data%",job.date);
$('#workExperience').append(HTMLworkStart,info_company,info_job,info_date,info_location,info_description);
//job3
job.position="Campus Ambassidor";
job.company=" We Chat Mobile App";
job.location="Bangalore,India";
job.description="To empower the experience of mobile products.Work for product improvement by performing a set of activities on a daily activities on daily basis through the internship period.I was head of theWechat Campus Ambassidor in my college , 'T John Institute Of Technology '. My task was manual wechat mobile app Testing. I was managing a team of 8. ";
job.date="Feb 2014 - April 2014";
var wechat_company=HTMLworkEmployer.replace("%data%",job.company);
var wechat_job=HTMLworkTitle.replace("%data%",job.position);
var wechat_location=HTMLworkLocation.replace("%data%",job.location);
var wechat_description=HTMLworkDescription.replace("%data%",job.description);
var wechat_description=HTMLworkDescription.replace("%data%",job.description);
var wechat_date=HTMLworkDates.replace("%data%",job.date);
$('#workExperience').append(HTMLworkStart,wechat_company,wechat_job,wechat_date,wechat_location,wechat_description);

var project={};
project.title="WebmasterBlog";
project.date="Oct 2014- Till Now";
project.description="This is the my personal blog,Where I write about technology and stuffs . The Theme was customised by myself from the template I got .Through this project I learnt Xml, Css and Javascript.I also love to write contents in the web  for seo.<a href='http:www.webmastersblog.org'><b>Live demo</b></a>";
project.pic="images/web.png";
var webmasterblog_title=HTMLprojectTitle .replace("%data%",project.title);
var webbmasterblog_date=HTMLprojectDates.replace("%data%",project.date);
var webmasterblog_description=HTMLprojectDescription.replace("%data%",project.description);
var webmasterblog_image=HTMLprojectImage.replace("%data%",project.pic);
$('#projects').append(HTMLprojectStart,webmasterblog_title,webbmasterblog_date,webmasterblog_description,webmasterblog_image);
//project 2 

project.title="Mobile Portfolio Website";
project.date="June 2014- Sept 2014";
project.description="This is a portfolio website where I learn to create a webpage from scratch from TeamTreehouse.This website runs in all the devices from Tv to mobile screens.Major Concepts learnt here is Media queries of jquery and css in such a way to fit in all the screens.<a href='http://sujilnt.github.io/portfolio1/index.html'><b>Live demo</b></a>";
project.pic="images/portfolio1.png";
var webmasterblog_title=HTMLprojectTitle .replace("%data%",project.title);
var webbmasterblog_date=HTMLprojectDates.replace("%data%",project.date);
var webmasterblog_description=HTMLprojectDescription.replace("%data%",project.description);
var webmasterblog_image=HTMLprojectImage.replace("%data%",project.pic);
$('#projects').append(HTMLprojectStart,webmasterblog_title,webbmasterblog_date,webmasterblog_description,webmasterblog_image);
project.pic="images/ipag-small.png";
var webmasterblog_image=HTMLprojectImage.replace("%data%",project.pic);
$('#projects').append(webmasterblog_image);
project.pic="images/mobile.png";
var webmasterblog_image=HTMLprojectImage.replace("%data%",project.pic);
$('#projects').append(webmasterblog_image);
// project 3 
project.title="The Neighbourhood Map ";
project.date="Still working will finishing by march 1st";
project.description="This web app is a neighborhood map page that shows popular places in the user defined location, and it was the fifth project for Udacity's Front-End Nanodegree. The project was built on Google App Engine, with Knockout.js framework. The project was focused on using external APIs and MVVM pattern to make a single page web app.";
project.pic="http://dw-resume.appspot.com/images/dw_neighborhood_s.jpg";
var webmasterblog_title=HTMLprojectTitle .replace("%data%",project.title);
var webbmasterblog_date=HTMLprojectDates.replace("%data%",project.date);
var webmasterblog_description=HTMLprojectDescription.replace("%data%",project.description);
var webmasterblog_image=HTMLprojectImage.replace("%data%",project.pic);
$('#projects').append(HTMLprojectStart,webmasterblog_title,webbmasterblog_date,webmasterblog_description,webmasterblog_image);
// College Name 
 school={};
school.title="T John Institute of Technology";
school.degree="Bachelors in Information Science Engineering ";
school.location="Bangalore,India";
school.Major="Inforation Science ";
school.date="2010 -2016";
school.description="I pursued Information Science Engineering from T john Institute of Technology.The project that I worked is '<b>On Traffic-Aware Partition and Aggregation in Map Reduce for Bigdata Application</b>'. "
var school_Name=HTMLschoolName.replace("%data%",school.title);
var school_Degree=HTMLschoolDegree.replace("%data%",school.degree);
var school_Location=HTMLschoolLocation.replace("%data%",school.location);
var school_Major=HTMLschoolMajor.replace("%data%",school.Major);
var school_date=HTMLschoolDates.replace("%data%",school.date);
var description=HTMLprojectDescription.replace("%data%",school.description);
$('#education').append(HTMLschoolStart,school_Name,school_Degree,school_Location,description);
// online claases
var online={};
    online["Name"]="Introduction to Java Programming ";
    online["url"]='<a href="www.Udacity.com">Udacity</a>';
    online["line"]='<div class="hrcss"><hr></div>';
var line=online["line"];
var school_Name=HTMLonlineTitle.replace("%data%",online["Name"]);
var school_url=HTMLonlineTitle.replace("%data%",online["url"]);
$('#education').append(HTMLonlineClasses,school_Name,school_url,line);

online["Name"]="Introduction to Designing things on Web ";
online["url"]='<a href="www.Udacity.com">Udacity</a>';

var school_Name=HTMLonlineTitle.replace("%data%",online["Name"]);
var school_url=HTMLonlineTitle.replace("%data%",online["url"]);
$('#education').append(school_Name,school_url,line);

online["Name"]="Data Scientist toolbox Certification ";
online["url"]='<a href="www.Coursera.org">Coursera</a>';

var school_Name=HTMLonlineTitle.replace("%data%",online["Name"]);
var school_url=HTMLonlineTitle.replace("%data%",online["url"]);
$('#education').append(school_Name,school_url,line);



