function doFirst(){
	var x = document.getElementById('canvas');
	// declare a 2d drawing surface
	canvas = x.getContext('2d');
	// now we create a gradient for the colors starting at the top left(0,0) and were to stop (100,100)
	var g = canvas.createLinearGradient(0,0,100,100);
	// colorsStop takes 2 params where to start and what color...and then you make many colorStops(it starts at 0 and ends at 1)
	g.addColorStop(.0,"blue");
	g.addColorStop(.5, "yellow");
	g.addColorStop(.75, "white");
	g.addColorStop(1,"red");
	// ahhh, but nothing shows up on our canvas because we havent given it a fillStyle or shape...once we set it equal to the fill style "g" is what happens and then we need to give it a shape
	canvas.fillStyle=g;
	canvas.fillRect(0,0,100,100);
}

window.addEventListener("load", doFirst, false);