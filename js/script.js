//use strict function
'use strict'

//js
function calculateDays(){
	//variable
	let movie = parseFloat(document.getElementById("movie").value);
  const MOVIE_TIME = movie*2
	
	//calculation for days
	let days = MOVIE_TIME/24

	//output
	document.getElementById("days").innerHTML = "๐ฎโ๐นโ ๐ผโ๐ฎโ๐ฑโ๐ฑโ ๐นโ๐ฆโ๐ฐโ๐ชโ " + days.toFixed(2) + " ๐ฉโ๐ฆโ๐พโ๐ธโ ๐นโ๐ดโ ๐ผโ๐ฆโ๐นโ๐จโ๐ญโ " + movie + " ๐ฒโ๐ดโ๐ปโ๐ฎโ๐ชโ๐ธโ."
}

function calculateWeeks(){
	//variable
	let movie = parseFloat(document.getElementById("movie").value);
  const MOVIE_TIME = movie*2
	
	//calculation for weeks
	let weeks = MOVIE_TIME/168

	//output
	document.getElementById("weeks").innerHTML = "๐ฎโ๐นโ ๐ผโ๐ฎโ๐ฑโ๐ฑโ ๐นโ๐ฆโ๐ฐโ๐ชโ " + weeks.toFixed(2) + " ๐ผโ๐ชโ๐ชโ๐ฐโ๐ธโ ๐นโ๐ดโ ๐ผโ๐ฆโ๐นโ๐จโ๐ญโ " + movie + " ๐ฒโ๐ดโ๐ปโ๐ฎโ๐ชโ๐ธโ."
}