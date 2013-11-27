/// <reference path="references.ts" />
class Arrow implements IDrawable{
	from: Vector;
	to: Vector;
	context: CanvasRenderingContext2D;
	orientation: string

	constructor(from:Vector, to:Vector, context:CanvasRenderingContext2D, orientation: string){
		this.from = from;
		this.to = to;
		this.context = context;
		this.orientation = orientation;
	}

	draw()
	{		
		this.context.beginPath();
		this.context.moveTo(this.from.x, this.from.y);//arrow line
		this.context.lineTo(this.to.x, this.to.y);

		
		switch(this.orientation)
		{
			case "left" :
				
			break;

			case "up" :
			break;

			case "right" :
				this.context.moveTo(this.to.x, this.to.y);// upper arrow line
				this.context.lineTo(this.to.x - 30, this.to.y - 30);

				this.context.moveTo(this.to.x, this.to.y);// lower arrow line
				this.context.lineTo(this.to.x - 30, this.to.y + 30);
			break;

			case "down" :
				this.context.moveTo(this.to.x, this.to.y);// right arrow line
				this.context.lineTo(this.to.x + 30, this.to.y - 30);

				this.context.moveTo(this.to.x, this.to.y);// left arrow line
				this.context.lineTo(this.to.x - 30, this.to.y - 30);
			break;
		}
		
		this.context.stroke();
		this.context.closePath();
	}
}