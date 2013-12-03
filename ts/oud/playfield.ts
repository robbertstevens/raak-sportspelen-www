/// <reference path="references.ts" />
class PlayField{
	gameType: string;
	fieldColor: string;
	fieldWidth: number = 0;
	fieldHeight: number = 0;

	constructor(gameType: string, fieldColor: string){
		this.gameType = gameType;
		this.fieldColor = fieldColor;
	}
}