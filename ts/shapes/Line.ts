/// <reference path="DrawableObject.ts" />
/// <reference path="../Vector.ts" />
interface ILine extends IDrawableObject {
	from: Vector;
	to: Vector;
}