/// <reference path="./shapes/DrawableObject.ts" />
class GameType{
	public game: string;
	public color: string;
	public materials: IDrawableObject[];

	constructor(g: string, c: string){
		this.game = g;
		this.color = c;
	}
}