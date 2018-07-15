// GET request for remote image
$("#showInfosAxios").on("click", () => {
  axios({
    method: "GET",
    url: "public/data/people.json"
  })
    .then(request => {
      const prefix = request.data.First;
      const name = "<b>Name</b> : " + prefix.name + "</br>";
      const surname = "<b>Surname</b> : " + prefix.surname + "</br>";
      const country = "<b>country</b> : " + prefix.country + "</br>";
      const activity = "<b>activity</b> : " + prefix.activity + "</br>";
      $("#infos").html(
        "<p>" + name + " " + surname + " " + country + " " + activity + "</p>"
      );
    })
    .catch(() => {
      console.error("AJAX Issues detected");
    });
});
