/// <reference path="Line.ts" />
/// <reference path="../Vector.ts" />
/// <reference path="../TouchEvent.ts" />
class StraightLine implements ILine {
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
	{}
	public onTouchStart(e: TouchEvent): void 
	{}
	public onTouchMove(e: TouchEvent): void 
	{}
	public onTouchEnd(e: TouchEvent): void 
	{} 
}