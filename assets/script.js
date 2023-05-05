$(document).ready(function () { //To have the whole html rendered first before running any code
  $(".saveBtn").on("click", function () { //event listener on the save button
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });




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
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  //
  // TODO: Add code to display the current date in the header of the page