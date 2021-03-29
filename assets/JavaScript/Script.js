var currentDayEl = $("#currentDayDisplay");
var codeBlockContainer = $(".container");
var CurrentTime = moment();
var storedVariables = CurrentTime.format("YYYY-MM-DD");
//Dsplays current time and day
function displayTime() {
  var rightNow = moment().format('LLLL');
  currentDayEl.text(rightNow);
}
//makes a text area for 15 times in the day 
for (var i = 0; i < 15; i++) {

  // Variables to manipulate

  var TimeArea = document.createElement("p");
  var userInputBlock = document.createElement("textarea");
  var lockAndKey = document.createElement("button");
  var elementBlock = document.createElement("Div")

  // Adds the related clsses to the created variables 
  $(TimeArea).addClass("hour col-md-2").text(moment('7:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
  $(userInputBlock).addClass("col-md-9 textarea ").attr("placeholder", "Insert Text Here");
  $(lockAndKey).addClass("saveBtn col-md-1").text("🔒");
  $(elementBlock).addClass("row text-area");
  // displays the variables to the correct position

  codeBlockContainer.append(elementBlock)
  elementBlock.append(TimeArea);
  elementBlock.append(userInputBlock);
  elementBlock.append(lockAndKey);
  // If time is current change color
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

// Function to make an array of hours 
function createArrayOfHours() {
  // setting variables 
  var existingScheduler;
  var scheduleString = localStorage.getItem("schedule")
  // if there is no lovialy stored strings make one  
  if (!scheduleString) {
    existingScheduler = []
  }
  else {
    // If one exists convert the existing var into an object
    existingScheduler = JSON.parse(localStorage.getItem("schedule"))
  }
  // Get the hours tagged elements
  var hourElements = $(".hour");
  //For eache hour element do somthing 
  for (i = 0; i <= hourElements.length - 1; i++) {
    //get the text contenet
    var txtTime = hourElements[i].textContent;
    // Filter 
    var matchingItem = existingScheduler.filter(function (rec) {
      // If the time === time then return matching item
      return rec.time === txtTime
    });
    // if the matching item length is 0
    if (matchingItem.length > 0) {
      // add the text conttent from local storage to the display
      hourElements[i].parentElement.children[1].textContent = matchingItem[0].message;
    }
    else {
      // do nothing   
    }
  }
};
// on click of lock item
$(".saveBtn").click(function (event) {
  // get all variables 
  var textBoxDisplay = $(event.target).prev("textarea").val()
  var timeText = $(event.target).parent().children().eq(0).text()
  var existingScheduler;
  // get item from local storage 
  var scheduleString = localStorage.getItem("schedule")
  // if the item is empty  
  if (!scheduleString) {
    //create one
    existingScheduler = []
  }
  // get the current scheduler
  else {
    existingScheduler = JSON.parse(localStorage.getItem("schedule"))
  }
  // format for storage into existing scheduler
  var newValue = {
    "time": timeText,
    "message": textBoxDisplay
  }
  // push the values
  existingScheduler.push(newValue);

  // convery and store in array
  localStorage.setItem("schedule", JSON.stringify(existingScheduler))
});


createArrayOfHours();

// Update interval for momnet time.
setInterval(displayTime, 1000);