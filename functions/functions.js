function hide() {
	document.getElementById("leftGate").style.marginLeft = "-800px";
	document.getElementById("leftGate").style.width = "0px";
	
	document.getElementById("gate").style.marginRight = "0px";
	document.getElementById("gate").style.width = "0px";
}

function test() {
	document.getElementById("zooKeeper").style.visibility = "visible";	
}

function playSound() {
	var sound = new Audio("resources/sounds/zoolandia.mp3");
	sound.play();
	
	setTimeout(playSound, 78000);
}

function openDoor() {
	var door = new Audio("resources/sounds/open_door.mp3");
	door.play();
}

function useKey() {
	var key = new Audio("resources/sounds/unlock_keys.mp3");
	key.play();
	
	setTimeout(openDoor, 2000);
	setTimeout(hide, 2000);
	setTimeout(test, 6000);
}

function footsteps() {
	var footsteps = new Audio("resources/sounds/footsteps.mp3");	
	footsteps.play();
}

function move() {
	document.getElementById("btn").style.visibility = "hidden";
	document.getElementById("zooKeeper").style.marginLeft = (zooKeeper.style.marginLeft)+ "1050px";
	//document.getElementById("zooKeeper").style.width = (zooKeeper.style.width)+ "0px";
	setTimeout(move, 5000);	
	setTimeout(change, 5000);
}

function change() {
	window.location.href = "animals.html";
}

function lionRoar() {
	var roar = new Audio("resources/sounds/lionroar.mp3");	
	roar.play();
}

function elephantRoar() {
	var roar = new Audio("resources/sounds/elephantsound.mp3");	
	roar.play();
}

function gorillaRoar() {
	var roar = new Audio("resources/sounds/gorillasound.mp3");	
	roar.play();
}

function tigerRoar() {
	var roar = new Audio("resources/sounds/tigersound.mp3");	
	roar.play();
}

function lionGrow() {
	document.getElementById("lionImg").style.background = "url(resources/images/lion.png)";
	document.getElementById("lionImg").style.width = "450px";
	document.getElementById("lionImg").style.height = "300px";
	document.getElementById("lionImg").style.backgroundSize = "cover";
	document.getElementById("lionImg").style.backfaceVisibility = "visible";
	document.getElementById("lionImg").style.transform = "rotateY(180deg)";
	document.getElementById("lionImg").style.transition = "all ease 2s";	
}

function elephantGrow() {
	document.getElementById("elephantImg").style.background = "url(resources/images/elephant.png)";
	document.getElementById("elephantImg").style.width = "450px";
	document.getElementById("elephantImg").style.height = "300px";
	document.getElementById("elephantImg").style.backgroundSize = "cover";
	document.getElementById("elephantImg").style.backfaceVisibility = "visible";
	document.getElementById("elephantImg").style.transform = "rotateY(180deg)";
	document.getElementById("elephantImg").style.transition = "all ease 2s";	
}

function gorillaGrow() {
	document.getElementById("gorillaImg").style.background = "url(resources/images/gorilla.png)";
	document.getElementById("gorillaImg").style.width = "450px";
	document.getElementById("gorillaImg").style.height = "300px";
	document.getElementById("gorillaImg").style.backgroundSize = "cover";
	document.getElementById("gorillaImg").style.backfaceVisibility = "visible";
	document.getElementById("gorillaImg").style.transform = "rotateY(180deg)";
	document.getElementById("gorillaImg").style.transition = "all ease 2s";	
}

function tigerGrow() {
	document.getElementById("tigerImg").style.background = "url(resources/images/tiger.png)";
	document.getElementById("tigerImg").style.width = "100%";
	document.getElementById("tigerImg").style.height = "300px";
	document.getElementById("tigerImg").style.backgroundSize = "cover";
	document.getElementById("tigerImg").style.backfaceVisibility = "visible";
	document.getElementById("tigerImg").style.transform = "rotateY(180deg)";
	document.getElementById("tigerImg").style.transition = "all ease 2s";	
}

