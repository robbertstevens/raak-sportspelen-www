class PlayField implements HTMLCanvasElement{
	private objects: Material[];
	private game: GameType;

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