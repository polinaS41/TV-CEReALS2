function show_friends() {
	var fr= document.getElementById("friends");
	fr.style.display ="block";

}
function hide_friends() {
	var fr= document.getElementById("friends");
	fr.style.display ="none";

}



function show_lost() {
	var lo= document.getElementById("lost");
	lo.style.display ="block";

}
function hide_lost() {
	var lo= document.getElementById("lost");
	lo.style.display ="none";

}




function show_sherlok() {
	var sh= document.getElementById("sherlok");
	sh.style.display ="block";

}
function hide_sherlok() {
	var sh= document.getElementById("sherlok");
	sh.style.display ="none";

}




function show_911() {
	var hl= document.getElementById("911");
	hl.style.display ="block";

}
function hide_911() {
	var hl= document.getElementById("911");
	hl.style.display ="none";

}




function show_fate() {
	var fa= document.getElementById("fate");
	fa.style.display ="block";

}
function hide_fate() {
	var fa= document.getElementById("fate");
	fa.style.display ="none";

}

function turn_off() {
	var light = document.getElementById("all");
	if (window.getComputedStyle(light).backgroundColor == "rgb(0, 0, 0)")
	{
		light.style.backgroundColor = "#FDF4E3";
	}
	else 
		light.style.backgroundColor = "black";

	var zag = document.getElementById("up");
	if (window.getComputedStyle(up).color == "rgb(0, 0, 0)")
	{
		up.style.color = "white";
	}
	else 
		up.style.color = "black";
	
}
function review(){
	let name = document.getElementById("input_name");
	let wish = document.getElementById("input_wish");
	
}






















