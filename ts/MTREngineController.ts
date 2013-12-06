/// <reference path="TouchEvent.ts" />
/// <reference path="GameType.ts" />
class MTREngineController {
	private _playfield: HTMLCanvasElement;
	private _inventory: HTMLCanvasElement;
	private _objects: IDrawableObject[];
	private _game: GameType;

	constructor(pf: HTMLCanvasElement, inv: HTMLCanvasElement, g: GameType) {
		this._playfield = pf;
		this._inventory = inv;
		this._game = g;

		document.addEventListener("touchstart", this.onTouchStart, false);
		document.addEventListener("touchend", this.onTouchEnd, false);
		document.addEventListener("touchmove",this.onTouchMove, false);
	}

	public draw(): void 
	{
		this._objects.forEach(function(object) {
			object.draw();
		});
	}
	private onTouchStart(e: TouchEvent): void 
	{
		this._objects.forEach(function(object) {
			
		});
	}
	private onTouchMove(e: TouchEvent): void 
	{
		this._objects.forEach(function(object) {
			
		});
	}
	private onTouchEnd(e: TouchEvent): void 
	{
		this._objects.forEach(function(object) {
			
		});
	}
}

function main() {
	var playfield = document.getElementById("playfield"),
		inventory = document.getElementById("inventory"),
		game = new GameType("voetbal", "#fff"),
		engine = new MTREngineController(playfield, inventory, game);
}
