const apiK = "a1d334695756c892b7087e2aa09b0351";
let vb = document.getElementById("background-video");
let input = document.querySelector("#city");
let time = document.getElementById("date");
let feels = document.querySelector("#feels");
let temp = document.querySelector("#temp");
let pressure = document.getElementById("pressure");
let wend = document.getElementById("wend");
let icon = document.getElementById("icon");
let modle =  document.querySelector(".modal")
let main;

document.getElementById("btn").addEventListener("click", function () {
  let city = input.value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiK}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == 404 || data.cod == 400) {
        modle.classList.add("del")
      } else {
        main = data.weather[0].main;
        vb.innerHTML = `<source src="${main}.mp4" type="video/mp4">`;
        vb.load();
        feels.textContent = data.weather[0].description;
        temp.textContent = `${data.main.temp} °C`;
        pressure.textContent = `(${data.main.pressure}) P`;
        wend.textContent = `${data.wind.speed} km/h `;
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        input.value = "";
      }
    });
});

function date() {
  newD = new Date().toDateString();
  time.textContent = newD;
}
date();



//// close btn
document.getElementById("btnc").addEventListener("click" , function(){
  modle.classList.remove("del")

})
