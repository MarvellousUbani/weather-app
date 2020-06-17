const errorBox = document.querySelector(".error-message");
const tempValue = document.querySelector(".temperature-value");
const tempMode = document.querySelector(".temperature-mode");
const cityName = document.getElementById("search-weather");
let weatherResult = {};

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const unixTimeConverter = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}

export const setTemperature = (e) => {
    if(e.target.textContent === "F"){
        tempValue.innerHTML = `${weatherResult.tempFah}`;
        tempMode.innerHTML = `°F`;
    }
    if(e.target.textContent === "C"){
        tempValue.innerHTML = `${weatherResult.tempCelcius}`;
        tempMode.innerHTML = `°C`;
    }
}

const getWeather = async (cityValue) => {
    // API Key
    const weatherAppId = `c38553d04516622ea92b67238ae69d62`;

    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${weatherAppId}`);
    const weatherData = await weatherRes.json();

    const { description, icon } = weatherData.weather[0];
    const { temp, humidity, pressure } = weatherData.main;
    const { country, sunrise, sunset } = weatherData.sys;
   
    weatherResult =  {
        tempCelcius:`${Math.ceil(temp-273.15)}`,
        tempFah: `${Math.ceil((temp-273.15) * 9/5 + 32)}`,
        icon: `https://openweathermap.org/img/wn/${icon}@4x.png`,
        humidity: `${humidity}%`,
        pressure: ` ${pressure} hpa`,
        place: `${cityValue}, ${country}`,
        sunrise: `${unixTimeConverter(sunrise)}`,
        sunset:`${unixTimeConverter(sunset)}`,
        day:`${weekDays[new Date().getDay()]}`,
        time: `${unixTimeConverter(new Date().getTime())}`,
        description
    }
}

export const displayWeatherData = () => {
    document.getElementById("weather-icon").setAttribute(`src`, `${weatherResult.icon}`);
    tempValue.innerHTML = `${weatherResult.tempCelcius}`;
    document.querySelector(".date-day").innerHTML = `${weatherResult.day}`;
    document.querySelector(".date-time").innerHTML = `${weatherResult.time}`;
    document.querySelector(".weather-desc").innerHTML = `${weatherResult.description}`;
    document.querySelector(".hm-value").innerHTML = `${weatherResult.humidity}`;
    document.querySelector(".ps-value").innerHTML = `${weatherResult.pressure}`;
    document.querySelector(".sr-value").innerHTML = `${weatherResult.sunrise}`;
    document.querySelector(".ss-value").innerHTML = `${weatherResult.sunset}`;
    document.querySelector(".city-place").innerHTML = `${weatherResult.place}`;
     tempMode.innerHTML = `°C`;
}

export const findAndDisplay = async (city) => {
    let cityInfo = city; 
    try{
        if(typeof city !== "string"){cityInfo = cityName.value; }
        await getWeather(cityInfo);
        cityName.value = "";
        errorBox.classList.add("hidden");
        displayWeatherData();
    }
    catch(err){
       
        errorBox.classList.remove("hidden");
        errorBox.innerHTML = `City Not Found, Try again`;
        cityName.value = "";
        console.log(err);
    }
   
}