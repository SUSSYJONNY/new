var canvas = new fabric.Canvas('myCanvas');


blockY = 1;
blockX = 1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject = "";

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function (img) {
		blockImageObject = img;

		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
			top: blockY,
			left: blockX
		})
		canvas.add(blockImageObject);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '69') {
		blockX =10;
		new_image("rr1.png");
		console.log("e");
	}
	if (keyPressed == '86') {
		blockX = 200;
		new_image("gr.png");
		console.log("v");
	}

	if (keyPressed == '89') {
		blockX = 350;
		new_image("yr.png");
		console.log("a");
	}
	if (keyPressed == '80') {
		blockX = 600;
		new_image("pr.png");
		console.log("r");
	}
	if (keyPressed == '66') {
		blockX = 700;
		new_image("br.png");
		console.log("i");
	}

}

