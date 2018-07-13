/**
 * Ajax  Request
 * Dependencies : None
 */

(() => {
  const button = document.querySelector("#showInfosVanilla");
  button.addEventListener("click", () => {
    let courses = {};
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      switch (this.readyState) {
        case 1:
          console.log("server connection established ", this.status);
          break;

        case 2:
          console.log("request received ", this.status);
          break;

        case 3:
          console.log("processing request ", this.status);
          break;

        case 4:
          if (this.status === 200) {
            console.log("request finished and response is ready ", this.status);
            courses = JSON.parse(this.responseText);
            const prefix = courses.First;
            const name = "<b>Name</b> : " + prefix.name + "</br>";
            const surname = "<b>Surname</b> : " + prefix.surname + "</br>";
            const country = "<b>country</b> : " + prefix.country + "</br>";
            const activity = "<b>activity</b> : " + prefix.activity + "</br>";
            document.querySelector("#infos").innerHTML =
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
          break;

        default:
          break;
      }
    };
    xmlhttp.open("GET", "public/data/people.json", true);
    xmlhttp.send(null);
  });
})();
