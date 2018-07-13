/**
 * Ajax  Request
 * Dependencies: jQuery
 */

$(function() {
  $("#showInfos").on("click", () => {
    $.ajax({
      type: "GET",
      url: "public/data/people.json",
      success: data => {
        const prefix = data.First;
        const name = "<b>Name</b> : " + prefix.name + "</br>";
        const surname = "<b>Surname</b> : " + prefix.surname + "</br>";
        const country = "<b>country</b> : " + prefix.country + "</br>";
        const activity = "<b>activity</b> : " + prefix.activity + "</br>";
        $("#infos").html(
          "<p>" + name + " " + surname + " " + country + " " + activity + "</p>"
        );
      },
      error: () => {
        console.log("Wrong");
      }
    });
  });
});
