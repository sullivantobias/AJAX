/**
 * Ajax  Request
 * Dependencies : None
 * Method : GET
 */

(() => {
  const button = document.querySelector("#showInfosVanilla");
  button.addEventListener("click", () => {
    let infos = {};
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
            infos = JSON.parse(this.responseText);
            let prefix = infos;

            for (firstKey in prefix) {
              let prefixFormat = prefix[firstKey];

              const name = "<b>Name</b> : " + prefixFormat.name + "</br>";
              const surname =
                "<b>Surname</b> : " + prefixFormat.surname + "</br>";
              const country =
                "<b>country</b> : " + prefixFormat.country + "</br>";
              const activity =
                "<b>activity</b> : " + prefixFormat.activity + "</br>";
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
            break;
          }
      }
    };
    xmlhttp.open("GET", "public/data/people.json", true);
    xmlhttp.send(null);
  });
})();
