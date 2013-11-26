/// <reference path="references.ts" />
interface IDrawable{
	from: Vector;
	to: Vector;
	context: CanvasRenderingContext2D;

	draw(): void;
}