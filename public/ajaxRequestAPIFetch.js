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
      let prefix = infos;

      for (firstKey in prefix) {
        let prefixFormat = prefix[firstKey];

        const name = "<b>Name</b> : " + prefixFormat.name + "</br>";
        const surname = "<b>Surname</b> : " + prefixFormat.surname + "</br>";
        const country = "<b>country</b> : " + prefixFormat.country + "</br>";
        const activity = "<b>activity</b> : " + prefixFormat.activity + "</br>";
        document.querySelector("#infos").innerHTML +=
          "<p>" +
          name +
          " " +
          surname +
          " " +
          country +
          " " +
          activity +
          "</p>";
      }
    });
});
