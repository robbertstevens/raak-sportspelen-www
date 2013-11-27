/// <reference path="references.ts" />

class CoachBoard {
	private _canvas: HTMLCanvasElement;
	private	_context: CanvasRenderingContext2D;
	private	_objects: IDrawable[];
	private	_current: Vector; 
	private	_prev: Vector; 
	private	_end: Vector; 
	private	_start: Vector;
	private _shapeType: string;
	private _shapeFactory: ShapeFactory;
	private _rect: ClientRect;

	constructor(canvas: HTMLCanvasElement) {
		this._canvas = canvas;
		this._rect = this._canvas.getBoundingClientRect();		
		this._objects = [];
		this._shapeType = "fixedLine";
		this._context = this.getContext2d();
		this.drawField();
		
		this._shapeFactory = new ShapeFactory(this._context);	

		this._canvas.addEventListener("touchstart", this.touchStart.bind(this), false);
		this._canvas.addEventListener("touchmove", this.touchMove.bind(this), false);
		this._canvas.addEventListener("touchend", this.touchEnd.bind(this), false);
		this.invalidate();
		
	}
	private getContext2d() {
		return this._canvas.getContext("2d");
	}
	public touchStart(e: TouchEvent) {		
		var pos = new Vector(e.targetTouches[0].pageX - this._rect.left, e.targetTouches[0].pageY - this._rect.top);		
		
		this._current = pos;
		this._start = pos;
		this._prev = pos;		
	}

	public touchMove(e: TouchEvent) {
		var pos = new Vector(e.changedTouches[0].pageX - this._rect.left, e.changedTouches[0].pageY - this._rect.top);
		
		if(this._shapeType === "freeLine")
		{
			var diff = null;
			if ( this._prev != null ) {
				diff = this._prev.difference(pos);
			}

			if (diff != null ) {
				if ( diff.x > 5 && diff.y > 5) {

						
					this._objects.push(this._shapeFactory.CreateShape(this._shapeType, this._prev, pos));this._prev = this._current;	

				}
			}
		}
		this._current = pos;
		this.invalidate();
	}

	public touchEnd(e: TouchEvent) {		
		var pos = new Vector(e.changedTouches[0].pageX - this._rect.left, e.changedTouches[0].pageY - this._rect.top);
		
		this._prev = null;
		this._current = null;
		this._end = pos;		
		if(this._shapeType != "freeLine")
		{
			this._objects.push(this._shapeFactory.CreateShape(this._shapeType,this._start, this._end));	
		}		
		console.log(this._objects.length)
		this.invalidate();
	} 
	private invalidate() {
		this.clear(false);

		if(this._start != null && this._current != null && this._shapeType != "freeLine")
		{
			this._shapeFactory.CreateShape(this._shapeType,this._start,this._current).draw();	
		}				
		this._objects.forEach(function(obj) {
			obj.draw();
		});	
		this.drawArrow();
		this.drawMeasurements();	
	}
	private clear(full: boolean) {
		this._context.clearRect(0,0,this._canvas.width, this._canvas.height);
		if ( full ) {			
			this._objects = [];
		}
		this.drawArrow();
		this.drawMeasurements();
	}

	public setShapeType(shape: string){
		this._shapeType = shape;
	}

	public drawField()
	{
		var veld = <PlayField>JSON.parse(RaakStorage.getItem("veld"));
		console.log();
	    this._canvas.style.backgroundColor = veld.fieldColor;
	}

	private drawArrow()
	{
		this._shapeFactory.CreateShape("arrow",new Vector(60,50),new Vector(window.innerWidth - 50,50), "right").draw();
		this._shapeFactory.CreateShape("arrow",new Vector(60,50),new Vector(60,window.innerHeight -100), "down").draw();

		var veld = <PlayField>JSON.parse(RaakStorage.getItem("veld"));
		this._context.font="20px sans-serif";
		this._context.fillStyle = '#FFFFFF';
		this._context.fillText(veld.gameType.charAt(0).toUpperCase() + veld.gameType.slice(1),(window.innerWidth / 2) - 60,25);		
	}

	private drawMeasurements()
	{
		var veld = <PlayField>JSON.parse(RaakStorage.getItem("veld"));

		this._context.font="20px sans-serif";
		this._context.fillStyle = '#FFFFFF';
		this._context.fillText(veld.fieldWidth + " Meter",(window.innerWidth / 2) - 80,45);
		this._context.fillText(veld.fieldHeight ,5, (window.innerHeight / 2) - 60);
		this._context.fillText("Meter",5, (window.innerHeight / 2) - 35);
	}
	
	public measurements()
	{
		var veld = <PlayField>JSON.parse(RaakStorage.getItem("veld"));			
		var width = prompt("Voer de breedte van het speelveld in.", veld.fieldWidth);
		var height = prompt("Voer de hoogte van het speelveld in.", veld.fieldHeight);
		veld.fieldWidth = +width;
		veld.fieldHeight = +height;
		RaakStorage.storeItem("veld", JSON.stringify(veld));
		this.invalidate();
	}
} 
