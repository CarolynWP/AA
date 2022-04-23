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
	document.getElementById("days").innerHTML = "🇮‌🇹‌ 🇼‌🇮‌🇱‌🇱‌ 🇹‌🇦‌🇰‌🇪‌ " + days.toFixed(2) + " 🇩‌🇦‌🇾‌🇸‌ 🇹‌🇴‌ 🇼‌🇦‌🇹‌🇨‌🇭‌ " + movie + " 🇲‌🇴‌🇻‌🇮‌🇪‌🇸‌."
}

function calculateWeeks(){
	//variable
	let movie = parseFloat(document.getElementById("movie").value);
  const MOVIE_TIME = movie*2
	
	//calculation for weeks
	let weeks = MOVIE_TIME/168

	//output
	document.getElementById("weeks").innerHTML = "🇮‌🇹‌ 🇼‌🇮‌🇱‌🇱‌ 🇹‌🇦‌🇰‌🇪‌ " + weeks.toFixed(2) + " 🇼‌🇪‌🇪‌🇰‌🇸‌ 🇹‌🇴‌ 🇼‌🇦‌🇹‌🇨‌🇭‌ " + movie + " 🇲‌🇴‌🇻‌🇮‌🇪‌🇸‌."
}