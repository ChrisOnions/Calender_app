var currentDayEl = $("#currentDayDisplay");
var codeBlockContainer = $(".container");

var CurrentTime = moment();

function displayTime() {
  var rightNow = moment().format('LLLL' );
  currentDayEl.text(rightNow);
}


function codeBlock (){


  for (var i = 0; i < 15; i++) {

  var TimeArea = document.createElement("p");
  var userInputBlock = document.createElement("textarea");
  var lockAndKey = document.createElement("button");
  var elementBlock = document.createElement("Div")

  $(TimeArea).addClass("hour col-md-2").text(moment('7:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
  $(userInputBlock).addClass("col-md-9 textarea ").attr("placeholder", "Insert Text Here");
  $(lockAndKey).addClass("saveBtn col-md-1").text(":lock:");
  $(elementBlock).addClass("row text-area");

  codeBlockContainer.append(elementBlock)
  //Append all elements in order
  elementBlock.append(TimeArea);
  elementBlock.append(userInputBlock);
  elementBlock.append(lockAndKey);
//if time is current
  if (CurrentTime.isSame(moment('7:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
    $(userInputBlock).addClass('present')
//if the time is in the future
} else if (CurrentTime.isBefore(moment('7:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
    $(userInputBlock).addClass('future')
//if the time is in the past
} else if (CurrentTime.isAfter(moment('7:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
    $(userInputBlock).addClass('past')
    }

 
};
}
$(".saveBtn").click(function() {
  console.log("Handler for .click() called.");
  localStorage.setItem($(".hour").attr('data-time'), $("").siblings('textarea').val())
});


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

