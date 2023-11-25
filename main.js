const URL =
"https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m&daily=temperature_2m_min";

const tableBody = document.getElementById("tableBody");

fetch(URL, {method: "GET"})
    .then((response) => response.json())
    .then((data) => {
        console.log(data.hourly.temperature_2m);

        const row = document.createElement('tr');


        const tempCell = document.createElement('td');
        tempCell.innerText("")

    });