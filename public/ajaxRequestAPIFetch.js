/**
 * Ajax  Request
 * Dependencies : None
 */

const button = document.querySelector("#showInfosFetchAPI");
button.addEventListener("click", () => {
    
  const init = {
    method: "GET",
    cache: "default"
  };

  fetch("public/data/people.json", init)
    .then(response => {
      return response.text();
    })
    .then(responseJson => {
      let infos = JSON.parse(responseJson);

      const prefix = infos.First;
      const name = "<b>Name</b> : " + prefix.name + "</br>";
      const surname = "<b>Surname</b> : " + prefix.surname + "</br>";
      const country = "<b>country</b> : " + prefix.country + "</br>";
      const activity = "<b>activity</b> : " + prefix.activity + "</br>";
      document.querySelector("#infos").innerHTML =
        "<p>" + name + " " + surname + " " + country + " " + activity + "</p>";
    });
});
