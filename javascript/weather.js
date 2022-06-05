(() => {
  const init = () => {
    checkWeather();
    setInterval(checkWeather, 3600000);
  };

  function checkWeather() {
    fetch("https://wttr.in/?format=j1")
      .then((response) => response.json())
      .then((data) => displayWeather(data));
  }

  function displayWeather(data) {
    const currentConditions = data.current_condition[0];

    document.getElementById("current-temp").innerHTML =
      currentConditions.temp_F;
    document.getElementById("location").innerHTML =
      data.nearest_area[0].areaName[0].value;

    document.getElementById("weather-description").innerHTML =
      currentConditions.weatherDesc[0].value;
  }

  return init();
})();
