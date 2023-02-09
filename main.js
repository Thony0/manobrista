var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var largura=75;
var altura=100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

var pox=5;
var poy=225;
var novoCarro;
var novoFundo;


function add() {
	novoFundo=new Image();
	novoFundo.onload=uploadBackground;
	novoFundo.src=backgroundImage;

	novoCarro=new Image();
	novoCarro.onload=uploadGreenCar;
	novoCarro.src=greencarImage;
}

function uploadBackground() {
	ctx.drawImage(novoFundo, 0, 0, canvas.width, canvas.height);

}

function uploadGreenCar() {
	ctx.drawImage(novoCarro, pox, poy, largura, altura);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(poy>=0){
		poy=poy-10;
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	if(poy<=350){
		poy=poy+10;
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	if(pox>=0){
		pox=pox-10;
		uploadBackground();
		uploadGreenCar();
	}

}

function right()
{
	if(pox<=750){
		pox=pox+10;
		uploadBackground();
		uploadGreenCar();
	}
}
