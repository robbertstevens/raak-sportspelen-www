/// <reference path="shapes/DrawableObject.ts" />
/// <reference path="TouchEvent.ts" />
/// <reference path="GameType.ts" />
class PlayField {
	private objects: IDrawableObject[];
	private game: GameType;
	private canvas: HTMLCanvasElement;

	constructor(game: GameType)
	{
		this.game = game;
	}

	public draw(): void
	{

	}
	private onTouchStart(e: TouchEvent): void {}
	private onTouchMove(e: TouchEvent): void {}
	private onTouchEnd(e: TouchEvent): void {}
}