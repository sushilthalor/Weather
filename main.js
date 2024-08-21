async function weather(city){
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2d33a0d14d8a22c2c5c6d5d2855dbc3`).then
    (rs => rs.json())
    document.getElementById("search1").style.display="none";
    document.getElementById("card1").style.display="inline-block";
    document.getElementById("c1").innerHTML=city;
    document.getElementById("temp").innerHTML=data.weather[0].description;
    document.getElementById("deg").innerHTML=data.main.temp;
    document.getElementById("humidity").innerHTML=data.main.humidity;
}
function city(){
    let a = document.getElementById("input").value;
    weather(a)
}