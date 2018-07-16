/**
 * Ajax  Request
 * Dependencies : AXIOS
 */

 /** Just a simple request using AXIOS */
$("#showInfosAxios").on("click", () => {
  axios({

    /** We define GET Method */
    method: "GET",
    /** We specify URL to reach the targeted file */
    url: "public/data/people.json"
  })
    /** We use promises with the purpose of treating retrieved data */
    .then(request => {
      /** We do the treatement here
       * This treatement is only done if the request is right
       */
      const prefix = request.data.First;
      const name = "<b>Name</b> : " + prefix.name + "</br>";
      const surname = "<b>Surname</b> : " + prefix.surname + "</br>";
      const country = "<b>country</b> : " + prefix.country + "</br>";
      const activity = "<b>activity</b> : " + prefix.activity + "</br>";
      document.querySelector("#infos").innerHTML =
        "<p>" + name + " " + surname + " " + country + " " + activity + "</p>";
    })
    .catch(() => {
      /** With catch you can "catch" the error if the request failed */
      console.error("AJAX Issues detected");
    });
});
