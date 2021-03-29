var currentDayEl = $("#currentDayDisplay");
var codeBlockContainer = $(".container");
var CurrentTime = moment();
var storedVariables = CurrentTime.format("YYYY-MM-DD");
var arrayOfInputVars = [
  {
    "7AM": "value"
  },
  {

    "8AM": "value"
  }
];

function displayTime() {
  var rightNow = moment().format('LLLL');
  currentDayEl.text(rightNow);
}

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
function createArrayOfHours() {

  var existingScheduler;
  var scheduleString = localStorage.getItem("schedule")
  if (!scheduleString) {
    existingScheduler = []
  }
  else {
    existingScheduler = JSON.parse(localStorage.getItem("schedule"))
  }

  // var indexVar = 0
  var hourElements = $(".hour");
  for (i = 0; i <= hourElements.length; i++) {
    var txtTime = hourElements[i].textContent;
    var matchingItem = existingScheduler.filter(function (rec) {
      return rec.time === txtTime
    });
    if (matchingItem.length > 0) {
      //var matchingItem = existingScheduler.filter(function (rec) { return rec.time === txtTime });
      console.log("if")
      hourElements[i].parentElement.children[1].textContent = matchingItem[0].message;

    }
    else {
      console.log("else")
    }
  }
};

$(".saveBtn").click(function (event) {
  var textBoxDisplay = $(event.target).prev("textarea").val()
  var timeText = $(event.target).parent().children().eq(0).text()

  var existingScheduler;
  var scheduleString = localStorage.getItem("schedule")
  if (!scheduleString) {
    existingScheduler = []
  }
  else {
    existingScheduler = JSON.parse(localStorage.getItem("schedule"))
  }

  var newValue = {
    "time": timeText,
    "message": textBoxDisplay
  }

  existingScheduler.push(newValue);
  console.log(textBoxDisplay)
  // arrayOfInputVars
  localStorage.setItem("schedule", JSON.stringify(existingScheduler))
});



// when an event has been added
//and the save button has been clicked
//save the event to local storage


createArrayOfHours();

setInterval(displayTime, 1000);

