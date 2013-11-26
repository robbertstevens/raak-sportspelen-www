/// <reference path="references.ts" />

class ShapeFactory {
	private _context : CanvasRenderingContext2D;
	constructor(context: CanvasRenderingContext2D){
		this._context = context;
	}
	public CreateShape(shape: string, from: Vector, to: Vector) {		
		var s = null
		switch (shape)
		{
			case "freeLine" :
		  	case "fixedLine" :
		    	s = new Line(from, to, this._context);
		   		break;
		  	case "rectangle" :
			    s = new Rectangle(from, to, this._context);
			    break;	
		}
		return s;
	}
}