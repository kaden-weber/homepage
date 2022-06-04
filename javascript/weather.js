(() => {
	const init = () => {
		updateWeather();
		setInterval(updateWeather, 3600000);
	};

    function updateWeather() {
        fetch('https://wttr.in/?format=j1')
        .then(response => response.json())
        .then(data => displayWeather(data));
    }
	
    function displayWeather(data) {
		document.getElementsByClassName('current-temp')[0].innerHTML = data.current_condition[0].temp_F
    }

	return init();
})()