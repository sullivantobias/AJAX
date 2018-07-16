/**
 * Ajax  Request
 * Dependencies : AXIOS
 */

/** Just a simple request using AXIOS
 * Method GET
 */
$("#showInfosAxiosGET").on("click", () => {
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

      let prefix = request.data;

      for (firstKey in prefix) {
        let prefixFormat = prefix[firstKey];

        console.log(prefixFormat);

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
    })
    .catch(() => {
      /** With catch you can "catch" the error if the request failed */
      console.error("AJAX Issues detected");
    });
});
