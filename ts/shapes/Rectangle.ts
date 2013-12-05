/// <reference path="Line.ts" />
/// <reference path="../Vector.ts" />
/// <reference path="../TouchEvent.ts" />
class Rectangle implements ILine{
	public dragging: boolean;
	public from: Vector;
	public to: Vector;
	public canvas: HTMLCanvasElement;
	constructor(f: Vector, t: Vector, c: HTMLCanvasElement ) {
		this.from = f;
		this.to = t;
		this.canvas = c;
	}

	public draw(): void 
	{
		this.canvas.getContext("2d").beginPath();
		this.canvas.getContext("2d").rect(this.from.x,this.from.y,(this.to.x -this.from.x), (this.to.y - this.from.y));
		this.canvas.getContext("2d").stroke();
		this.canvas.getContext("2d").closePath();
	}
	public onTouchStart(e: TouchEvent): void 
	{}
	public onTouchMove(e: TouchEvent): void 
	{}
	public onTouchEnd(e: TouchEvent): void 
	{} 
}