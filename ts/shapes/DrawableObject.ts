/// <reference path="../TouchEvent.ts" />
interface IDrawableObject {
	dragging : boolean;
	canvas: HTMLCanvasElement;

	draw(): void;
	onTouchStart(e: TouchEvent): void;
	onTouchMove(e: TouchEvent): void;
	onTouchEnd(e: TouchEvent): void;
}