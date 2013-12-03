class PlayField extends HTMLCanvasElement{
	private objects: DrawableObject[];
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