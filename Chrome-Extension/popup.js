localStorage.web_stat = false;

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  } else if (request.action == "incCounter") {
    message.innerText = request.source;
  } else if (request.action == "websitestatus") {
    webstatusfield.innerText = request.source;
  }

});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
    
  });

}

window.onload = onWindowLoad;
//localStorage.counter = 0;

//var b = document.getElementById('message');


/*
var ti = 1000;

var int = setInterval(function () {
    
    if (localStorage.web_stat){
    localStorage.counter = +1000 + +localStorage.counter;  
    document.getElementById("counter").innerHTML
      = localStorage.web_stat;
  }



    var time = (Date.now() - localStorage["old"] - +localStorage.counter)/1000;
    var minutes = ~~(time / 60);
    var seconds = ~~(time % 60);
    document.getElementById("time").innerHTML
      = format(minutes) + ":" + format(seconds);
    
    
}, ti);
      


function format(num) {
  return num < 10 ? "0" + num : num;
}
*/





















/*
var ti = 1000
var time = 0
var int = setInterval(function () {
	time += 1

    var minutes = ~~(time / 60);
    var seconds = ~~(time % 60);
    document.getElementById("sec").innerHTML
      = format(minutes) + ":" + format(seconds);
  }, ti);
        

function format(num) {
  return num < 10 ? "0" + num : num;
}

*/

/*
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;

countdown(60);



function countdown(seconds) {
  // current timestamp.
  var now = new Date().getTime();
  // target timestamp; we will compute the remaining time
  // relative to this date.
  var target = new Date(now);
  // update frequency; note, this is flexible, and when the tab is
  // inactive, there are no guarantees that the countdown will update
  // at this frequency.
  var update = 500;
  
  var int = setInterval(function () {
    // current timestamp
    var now = new Date();
    // remaining time, in seconds
    var remaining = (now - target) / 1000;
    
    // if done, alert
    if (remaining < 0) {
      clearInterval(int);
      return;
    }
    
    // format
    //var minutes = ~~(remaining / 60);
    //var seconds = ~~(remaining % 60);
    var t;
    chrome.storage.local.get(['time'], function(result) {
          var minutes = ~~(time / 60);
    var seconds = ~~(time % 60);
    document.getElementById("sec").innerHTML
      = format(minutes) + ":" + format(seconds);
        });
 
    // display
   // document.getElementById("countdown").innerHTML
   //   = format(minutes) + ":" + format(seconds);
  }, update);
}

function format(num) {
  return num < 10 ? "0" + num : num;
}
*/