//use strict function
'use strict'

//js
function calculateDays(){
	//variable
	let movie = parseFloat(document.getElementById("movie").value);
  const MOVIE_TIME = movie*2
	
	//calculations
	let days = MOVIE_TIME/24
	let weeks = MOVIE_TIME/168

	//output
	document.getElementById("days").innerHTML = "It will take " + days + "days to watch " + movie + "movies."
	document.getElementById("weeks").innerHTML = "It will take" + weeks + "weeks to watch " + movie + "movies."
}