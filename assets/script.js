$(document).ready(function () { //To have the whole html rendered first before running any code
  $(".saveBtn").on("click", function () { //event listener on the save button
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });

  function hourStatus() {

    const current24Hour = dayjs().format('HH'); // Current hour in 24h format

    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id").split("hour-")[1]); // extract time block hour to compare with current hour

      // compare and change class depending on current hour
      if (blockHour < current24Hour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (blockHour == current24Hour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  hourStatus();

  //add text from local storage if there is any
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  //display current day and time
  $("#currentDay").text(dayjs().format("dddd, MMMM Do, YYYY"));
  $("#currentTime").text(dayjs().format("h:mm A"));

})