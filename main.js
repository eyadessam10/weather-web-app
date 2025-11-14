const apiKey = 'd055e144cfaadfaed02a912c4303867f'

const unitsBtn = document.getElementById("unitsBtn");
const menuWrapper = document.getElementById("menuWrapper");
const searchInp = document.getElementById('searchInp');
const searchWrapper = document.getElementById("searchWrapper")
const searchDropDown = document.getElementById("searchDropDown")
const searchBtn = document.getElementById('searchBtn');
const searchIcon = document.getElementById('searchIcon');
const Celesius = document.getElementById("Celesius");
const Fahrenheit = document.getElementById("Fahrenheit");
const kmh = document.getElementById("kmh");
const mph = document.getElementById("mph");
const Millimeters = document.getElementById("Millimeters");
const Inches = document.getElementById("Inches");
const checkC = document.querySelector("#Celesius img");
const checkF = document.querySelector("#Fahrenheit img");
const checkK = document.querySelector("#kmh img");
const checkM = document.querySelector("#mph img");
const checkMi = document.querySelector("#Millimeters img");
const checkI = document.querySelector("#Inches img");
const switchTo = document.getElementById("switchTo");
const daysMenu = document.getElementById("daysMenu");
const daysMenuBtn = document.getElementById("daysMenuBtn");
const city = document.getElementById("city")
const feelsLike = document.querySelector("#feelsLike .num")
const humidity = document.querySelector("#humidity .num")
const windSpeed = document.querySelector("#windSpeed .num")
const prec = document.querySelector("#prec .num")
const bgDay = document.querySelector("#cal #bgDay")
const bgMonth = document.querySelector("#cal #bgMonth")
const bgDate = document.querySelector("#cal #bgDate")
const hd = document.querySelectorAll(".hd")
const great = document.querySelectorAll(".great")
const small = document.querySelectorAll(".small")
let isPinned = false
/*---------------------------------------------------------------------------menu hover and focus functinos---------------------------------------------------------------------------------------- */


unitsBtn.addEventListener('mouseenter', () => {
    if(!isPinned) {
        menuWrapper.style.display = 'block';
    }
});
unitsBtn.addEventListener('mouseleave', () => {
    if (!menuWrapper.matches(':hover') && !isPinned) {
            menuWrapper.style.display = 'none';
    }
});
menuWrapper.addEventListener('mouseleave', () => {
    if(!isPinned) {
        menuWrapper.style.display = 'none';
    }
});
unitsBtn.addEventListener("click" , () => {
    isPinned = !isPinned
    menuWrapper.style.display = isPinned ? "block" : "none";
})
searchIcon.onclick = function () {
    searchInp.focus();
}
let switchClick = false;
switchTo.addEventListener("click" , () => {
    if(!switchClick) {
        switchTo.style.borderTop = "1px solid white"
        switchTo.style.borderRight = "1px solid #f5f5f5"
        switchTo.style.borderLeft = "1px solid #f5f5f5"
        switchTo.style.borderBottom = "1px solid Gray"
        switchClick = true
    }
    else if(switchClick) {
        switchTo.style.border = "none"
        
        switchClick = false
    }
})
unitsBtn.onclick = () => {
    if(menuWrapper.style.display == "block") {
        unitsBtn.style.outline = "1px solid white"
    }
    else if(menuWrapper.style.display == "none") {
        unitsBtn.style.outline = "none"
    }
}
function checkmarks () {
    let tempCheck
    let windCheck
    let precCheck
    Celesius.addEventListener("click" , () => {
        if(checkF.style.display == "block") {
            Celesius.style.backgroundColor = "hsl(243, 23%, 30%)"
            Fahrenheit.style.backgroundColor = "hsl(243, 27%, 20%)"
            checkC.style.display = "block"
            checkF.style.display = "none"
        }
        else if(checkC.style.display == "block") {
            Celesius.style.backgroundColor = "hsl(243, 27%, 20%)"
            checkC.style.display = "none"
        }
        else {
            Celesius.style.backgroundColor = "hsl(243, 23%, 30%)";
            checkC.style.display = "block"
        }
        tempCheck = "Celesius"
    })
    Fahrenheit.addEventListener("click" , () => {
        if(checkC.style.display == "block") {
            Fahrenheit.style.backgroundColor = "hsl(243, 23%, 30%)"
            Celesius.style.backgroundColor = "hsl(243, 27%, 20%)"
            checkF.style.display = "block"
            checkC.style.display = "none"
        }
        else if(checkF.style.display == "block") {
            Fahrenheit.style.backgroundColor = "hsl(243, 27%, 20%)"
            checkF.style.display = "none"
        }
        else {
            Fahrenheit.style.backgroundColor = "hsl(243, 23%, 30%)"
            checkF.style.display = "block"
        }
        tempCheck = "Fahrenheit"
    })
    kmh.addEventListener("click" , () => {
        if(checkM.style.display == "block") {
            kmh.style.backgroundColor = "hsl(243, 23%, 30%)"
            mph.style.backgroundColor = "hsl(243, 27%, 20%)"
            checkK.style.display = "block"
            checkM.style.display = "none"
        }
        else if(checkK.style.display == "block") {
            kmh.style.backgroundColor = "hsl(243, 27%, 20%)"
            checkK.style.display = "none"
        }
        else {
            kmh.style.backgroundColor = "hsl(243, 23%, 30%)"
            checkK.style.display = "block"
        }
        windCheck = "kmh"
    })
    mph.addEventListener("click" , () => {
        if(checkK.style.display == "block") {
            mph.style.backgroundColor = "hsl(243, 23%, 30%)";
            kmh.style.backgroundColor = "hsl(243, 27%, 20%)";
            checkM.style.display = "block";
            checkK.style.display = "none"
        }
        else if(checkM.style.display == "block") {
            mph.style.backgroundColor = "hsl(243, 27%, 20%)"
            checkM.style.display = "none"
        }
        else {
            mph.style.backgroundColor = "hsl(243, 23%, 30%)";
            checkM.style.display = "block";
        }
        windCheck = "mph"
    })
    Millimeters.addEventListener("click" , () => {
        if(checkI.style.display == "block") {
            Millimeters.style.backgroundColor = "hsl(243, 23%, 30%)";
            checkMi.style.display = "block";
            Inches.style.backgroundColor = "hsl(243, 27%, 20%)"
            checkI.style.display = "none"
        }
        else if(checkMi.style.display == "block") {
            Millimeters.style.backgroundColor = "hsl(243, 27%, 20%)"
            checkMi.style.display = "none"
        }
        else {
            Millimeters.style.backgroundColor = "hsl(243, 23%, 30%)";
            checkMi.style.display = "block";
        }
        precCheck = "Millimeters"
    })
    Inches.addEventListener("click" , () => {
        if(checkMi.style.display == "block") {
            Inches.style.backgroundColor = "hsl(243, 23%, 30%)"
            checkI.style.display = "block"
            Millimeters.style.backgroundColor = "hsl(243, 27%, 20%)"
            checkMi.style.display = "none"
        }
        else if(checkI.style.display == "block") {
            Inches.style.backgroundColor = "hsl(243, 27%, 20%)"
            checkI.style.display = "none"
        }
        else {
            Inches.style.backgroundColor = "hsl(243, 23%, 30%)"
            checkI.style.display = "block"
        }
        precCheck = "Inches"
    })
}
checkmarks()
let daysMenuCheck = false;
daysMenuBtn.addEventListener("click" , () => {
    if(daysMenuCheck == false) {
        daysMenu.style.display = "flex"
        daysMenuCheck = true;
    }
    else if(daysMenuCheck == true) {
        daysMenu.style.display = "none";
        daysMenuCheck = false;
    }
})
let dropCheck = false
searchWrapper.addEventListener("click" , () => {
    if(dropCheck == false) {
        searchDropDown.style.display = "flex"
        dropCheck = true
    }
    else if(dropCheck == true) {
        searchDropDown.style.display = "none"
        dropCheck = false;
    }
})
const deg = document.getElementById("deg")
const country = document.getElementById("country")
function getWeather (cityName) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d055e144cfaadfaed02a912c4303867f`
    fetch(api)
    .then(response => response.json())
    .then(data => {
        if(data.cod === 200) {
            const temp = data.main.temp;
            const humidtyValue = data.main.humidity
            const feelsLikeValue = data.main.feels_like
            const windValue = data.wind.speed
            const countryName = data.sys.country
            const greatTemp = data.main.temp_max;
            const smallTemp = data.main.temp_min;
            deg.textContent = `${Math.trunc(temp - 273)}°`
            humidity.textContent = `${humidtyValue}%`
            country.textContent = `${countryName}`
            feelsLike.textContent = `${Math.trunc(feelsLikeValue - 273)}°`
            windSpeed.textContent = `${windValue} Km/h`
            hd.forEach(hds => {
                hds.textContent = `${Math.trunc(temp - 273)}°`
            })
            great.forEach(greats => {
                greats.textContent = `${Math.trunc(greatTemp - 273)}°`
            })
            small.forEach(smalls => {
                smalls.textContent = `${Math.trunc(smallTemp - 273)}°`
            })
            Fahrenheit.addEventListener("click" , () => {
                deg.textContent = `${Math.trunc(((temp - 273) * (9/5)) + 32)}°`
                feelsLike.textContent = `${Math.trunc(((feelsLikeValue - 273) * (9/5)) + 32)}°`
                hd.forEach(hds => {
                    hds.textContent = `${Math.trunc(((feelsLikeValue - 273) * (9/5)) + 32)}°`
                })
                great.forEach(greats => 
                    greats.textContent = `${Math.trunc(((greatTemp - 273) * (9/5)) + 32)}°`
                )
                small.forEach(smalls => {
                    smalls.textContent = `${Math.trunc(((smallTemp - 273) * (9/5)) + 32)}°`
                })
            })
            Celesius.addEventListener("click" , () => {
                deg.textContent = `${Math.trunc(temp - 273)}°`
                feelsLike.textContent = `${Math.trunc(feelsLikeValue - 273)}°`
                hd.forEach(hds => {
                    hds.textContent = `${Math.trunc(temp - 273)}°`
                })
                great.forEach(greats => {
                    greats.textContent = `${Math.trunc(greatTemp - 273)}°`
                })
                small.forEach(smalls => {
                    smalls.textContent = `${Math.trunc(smallTemp - 273)}°`
                })
            })
            kmh.addEventListener("click" , () => {
                windSpeed.textContent = `${windValue} Km/h`
            })
            mph.addEventListener("click" , () => {
                windSpeed.textContent = `${(windValue * 0.621371).toFixed(2)} mph`
            })
        }
        else {
            deg.textContent = "--"
        }
    })
    .catch(error => {
        deg.textContent = `${error}`
    })
}
searchBtn.addEventListener("click" , () => {
    const cityName = searchInp.value.trim();
        if(cityName === "") {
        city.textContent = `--`
    }
    else {
        city.textContent = `${cityName},`
        getWeather(cityName)
    }
})
fetch("https://timeapi.io/api/Time/current/zone?timeZone=Africa/Cairo")
    .then(res => res.json())
    .then(data => {
        const apiYear = data.year;
        const apiDay = data.day;
        const apiDayOfWeek = data.dayOfWeek
        const apiMonth = data.month
        const monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const monthOfYearss = monthArray[apiMonth]
        const monthOfYear = monthOfYearss.slice(0,3)
        console.log(apiYear)
        bgDay.textContent = `${apiDayOfWeek}`
        bgMonth.textContent = `${monthOfYear}`
        bgDate.textContent = `${apiDay}, ${apiYear}`
});