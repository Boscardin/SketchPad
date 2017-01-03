function drawGrid(){
	for (var i = 0; i < gridSize * gridSize; i++) {
		$("#canvas").append('<div class="box outline"></div>')
	}
	$(".box").css({
		'width': $('#canvas').width() / gridSize,
		'height': $('#canvas').height() / gridSize
	})
}

function marker() {
	$(".box").mouseenter(function(){
		$(this).css("background-color", "#0059b3")
	})
}

function eraser() {
	$(".box").mouseenter(function(){
		$(this).css("background-color", "#FFF")
	})
}

function rainbow() {
	$(".box").mouseenter(function(){
		var rainbowPaint = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).css("background", rainbowPaint);
	})
}

$(document).ready(function() {

	gridSize = 50;

	drawGrid();

	marker();

	$('[name="clear"]').click(function(){
		$(".box").css("background-color", "#FFF")
	})

	$('[name="eraser"]').click(function(){
		eraser();
	})

	$('[name="marker"]').click(function(){
		marker();
	})

	$('[name="rainbow"]').click(function(){
		rainbow();
	})

	$('[name="small"]').click(function(){
		gridSize = 50;
		$('#canvas').empty();
		drawGrid();
		marker();
	})

	$('[name="medium"]').click(function(){
		gridSize = 100;
		$('#canvas').empty();
		drawGrid();
		marker();
	})

	$('[name="large"]').click(function(){
		gridSize = 150;
		$('#canvas').empty();
		drawGrid();
		marker();
	})

	$('[name="toggle"]').click(function() {
		$(".box").toggleClass("outline");
	})

});
