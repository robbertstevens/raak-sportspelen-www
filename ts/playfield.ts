/// <reference path="references.ts" />
class PlayField{
	gameType: string;
	fieldColor: string;
	fieldWidth: number;
	fieldHeight: number;

	constructor(gameType: string, fieldColor: string){
		this.gameType = gameType;
		this.fieldColor = fieldColor;
	}
}