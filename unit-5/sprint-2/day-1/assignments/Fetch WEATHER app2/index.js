let ArrayWeather=[];
let api_key=`0bf05978ce858b9ae276d4804667688a`;

let JsResultMin=document.getElementById("js-result-min");
let jsResultLeft=document.getElementById("js-result-left");
let jsResultRight=document.getElementById("js-result-Right");
let inputBox=document.getElementById("input-Box");
let btnBox=document.getElementById("btn-Box");
let map=document.getElementById("gmap_canvas");

btnBox.addEventListener("click",DisplayData);

async function DisplayData(){
    try{
let query=inputBox.value;
let Response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}`)

let WeatherObj=await Response.json()
// console.log(WeatherData)
// ArrayWeather=WeatherData.weather;
console.log(ArrayWeather)

DisplayWeatherData(WeatherObj)
map.src= `https://maps.google.com/maps?q=${query}&output=embed`  
    }catch(error)  {
       console.log(error) 
    }
}

// show data...ArrayWeather

function DisplayWeatherData(WeatherObj){
try{
    let date=document.createElement("h5");
    date.textContent=new Date();


    let City=document.createElement("h2");
    City.innerText=WeatherObj.name+",  "+WeatherObj.sys.country;
    
    let tem=document.createElement("h1")
    tem.innerText=Math.round(WeatherObj.main.temp-273.15)+" °C";
    
    let feel=document.createElement("b")
    feel.innerText=`Feels like${Math.round(WeatherObj.main.feels_like-273)}°C .`+WeatherObj.weather[0].description;

    feel.setAttribute("id","feelID")
    
    
    let DivMini=document.createElement("div")
    DivMini.setAttribute("id","DivMini");
    
    let pWind=document.createElement("p");
    pWind.innerText=">"+WeatherObj.wind.speed+"m/s WNW";
    
    let Ppressure=document.createElement("p");
    Ppressure.innerText=WeatherObj.main.pressure+"hPa";
    
    let Phumidity=document.createElement("p");
    Phumidity.innerText=WeatherObj.main.humidity+"%";
    
    let Pgust=document.createElement("p");
    Pgust.innerText="UV: "+WeatherObj.wind.gust;
    
    let feelsLike=document.createElement("p");
    feelsLike.textContent="Dew Point:"+Math.round(WeatherObj.main.feels_like-281)+" °C";
    
    let Pvisibility=document.createElement("p");
    Pvisibility.innerText="Visibility: "+WeatherObj.visibility/1000 +" km";
    
    
    DivMini.append(pWind,Ppressure,Phumidity,Pgust,feelsLike,Pvisibility)
    
    jsResultLeft.append(City,tem,feel,DivMini)
}catch(error){
    console.log(error)
    console.log("not  found")
}

 

    }