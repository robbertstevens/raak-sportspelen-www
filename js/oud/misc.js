function vector(x,y) {
	this.x = x;
	this.y = y;
}

/***********Drawable objects*****************/
function line(from, to) {
	this.from = from;
	this.to = to;

	this.draw = function(context) {
		context.beginPath();
		context.moveTo(from.x, from.y);
		context.lineTo(to.x, to.y);
		context.stroke();
		context.closePath();
	}
}
function rectangle(from, to) {
	this.from = from;
	this.to = to;

	this.draw = function(context) {
		context.beginPath();
		context.rect(from.x,from.y,(to.x -from.x), (to.y - from.y));
		context.stroke();
		context.closePath();
	}
}