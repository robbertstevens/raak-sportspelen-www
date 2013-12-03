/// <reference path="DrawableObject.ts" />
/// <reference path="../Vector.ts" />
/// <reference path="../TouchEvent.ts" />
interface ILine extends IDrawableObject {
	from: Vector;
	to: Vector;
	draw(): void;
	onTouchStart(e: TouchEvent): void;
	onTouchMove(e: TouchEvent): void;
	onTouchEnd(e: TouchEvent): void;
}