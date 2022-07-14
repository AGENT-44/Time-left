var days = document.getElementById('days');
var hours = document.getElementById('hours');
var mins = document.getElementById('min');
var sec = document.getElementById('sec');



function get(){
	var today = new Date();
	var new_year = new Date(2023,0,1);

	let diffindays= (new_year-today);
	diffindays = parseInt(diffindays / (1000 * 60 * 60 * 24));

	let diffinhours = (new_year-today);
	diffinhours = parseInt(diffinhours / (1000*60*60));

	let diffinmins = (new_year - today);
	diffinmins = parseInt(diffinmins /(1000*60));

	let diffinsec = (new_year-today);
	diffinsec = parseInt(diffinsec / 1000);

	console.log(diffindays , diffinhours, diffinmins, diffinsec)
	days.innerHTML = diffindays;
	hours.innerHTML=diffinhours;
	mins.innerHTML = diffinmins;
	sec.innerHTML = diffinsec;

}

get();

setInterval(get, 1000);