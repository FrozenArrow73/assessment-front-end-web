let color = document.getElementById("color")
let place = document.getElementById("place")
let ritual = document.getElementById("ritual")

function colorBtn () {
    alert("Green")
}
function placeBtn () {
    alert("Big Cottonwood Canyon")
}
function ritualBtn () {
    alert("Burning insense")
}

color.addEventListener("click", colorBtn)
place.addEventListener("click", placeBtn)
ritual.addEventListener("click", ritualBtn)