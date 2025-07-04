function updateTime() {
  // San Francisco
  let sfElement = document.querySelector("#san-francisco");
  if (sfElement) {
    let sfDateElement = sfElement.querySelector(".date");
    let sfTimeElement = sfElement.querySelector(".time");
    let sfTime = moment().tz("America/Los_Angeles");

    sfDateElement.innerHTML = sfTime.format("MMMM Do YYYY");
    sfTimeElement.innerHTML = sfTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Warsaw
  let warsawElement = document.querySelector("#warsaw");
  if (warsawElement) {
    let warsawDateElement = warsawElement.querySelector(".date");
    let warsawTimeElement = warsawElement.querySelector(".time");
    let warsawTime = moment().tz("Europe/Warsaw");

    warsawDateElement.innerHTML = warsawTime.format("MMMM Do YYYY");
    warsawTimeElement.innerHTML = warsawTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
