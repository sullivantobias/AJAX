/**
 * Ajax  Request
 * Dependencies : AXIOS
 */

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
      document.querySelector("#infos").innerHTML =
        "<p>" + name + " " + surname + " " + country + " " + activity + "</p>";
    })
    .catch(() => {
      console.error("AJAX Issues detected");
    });
});