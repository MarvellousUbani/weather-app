import './styles.css';
import {setTemperature, findAndDisplay} from './dom';

const weatherBtn = document.getElementById("get-weather-btn");
const cityName = document.getElementById("search-weather");

weatherBtn.addEventListener("click", findAndDisplay);
cityName.addEventListener("keyup", (e) => { if(e.keyCode === 13){ findAndDisplay();}})
document.querySelector(".temp-group").addEventListener("click", setTemperature)

const INIT = async () => {
    await findAndDisplay("Lagos");
    document.querySelector(".loader").classList.add("hidden");
    document.querySelector(".container").classList.remove("hidden");
};

INIT();
