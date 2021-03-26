var currentDayEl = $("#currentDayDisplay");
var codeBlockContainer = $(".container");


function displayTime() {
  var rightNow = moment().format('LLLL' );
  currentDayEl.text(rightNow);
}

function codeBlock (){


$(".container").append( "<p>Test</p>" );
} 

// Create all the elements 
  // Time
  // . row Form for input
  // Button to save
  // w/lock symbol
  // .hour =  what hour it is in the first columb
  // .row styling on the middle element 
    // and color chages made in diferent funtion that ticks every min
  // .savebtn is the last element in the row

 
// function to change the color of the times that have passed
  // check current time if 
    // if time has passed .past
    // else time is now .present 
    // if time is to come .future
  // and a way to update them 

// when an event has been added
  //and the save button has been clicked
    //save the event to local storage in a string of objects



codeBlock();
setInterval(displayTime, 1000);

