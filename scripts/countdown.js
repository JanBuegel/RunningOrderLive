// Set the date we're counting down to
var artist;
var timeTo;
var parser;
var xmlDoc;
var counter = 0;
var XMLTime;
var countDownDate;

if (window.XMLHttpRequest) {
   xhttp = new XMLHttpRequest();
} else {    // IE 5/6
   xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xhttp.overrideMimeType('text/xml');

xhttp.open("GET", "./werdchen.xml", false);
parser = new DOMParser();
xmlDoc = xhttp.responseXML;
xhttp.send(null);

console.log(xhttp.responseXML);
console.log(typeof XMLTime + " " + XMLTime);
console.log(typeof countDownDate + " " + countDownDate);

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date().getTime();  
  var XMLTime = xhttp.responseXML.getElementsByTagName("time")[counter].childNodes[0].nodeValue;
  var countDownDate = Date.parse(XMLTime);
  var distance = countDownDate - now;

    if (distance < 0) {
    setInterval(1);
    counter++;
    console.log(counter);
    } else {
    setInterval(1000)
    document.getElementById("loading").style.visibility = "hidden";
    };
  
  // var timeNow = new Date();
  // var timeNowString = timeNow.toLocaleTimeString();

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo2").innerHTML = "current:\n" + xhttp.responseXML.getElementsByTagName("name")[counter].childNodes[0].nodeValue;
  document.getElementById("demo3").innerHTML = "next:\n" + xhttp.responseXML.getElementsByTagName("name")[counter + 1].childNodes[0].nodeValue;
  // document.getElementById("demo4").innerHTML = timeNowString;

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  /*
  if (xhttp.responseXML.getElementsByTagName("type")[counter].childNodes[0].nodeValue == "setup") {
    document.getElementById("demo2").style.color = "green";
  }
  if (xhttp.responseXML.getElementsByTagName("type")[counter].childNodes[0].nodeValue == "live") {
    document.getElementById("demo2").style.color = "black";
  }
  if (xhttp.responseXML.getElementsByTagName("type")[counter + 1].childNodes[0].nodeValue == "setup") {
    document.getElementById("demo3").style.color = "green";
  }
  if (xhttp.responseXML.getElementsByTagName("type")[counter + 1].childNodes[0].nodeValue == "live") {
    document.getElementById("demo3").style.color = "black";
  }
  */
}, 1000);