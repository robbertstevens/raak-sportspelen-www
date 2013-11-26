class Vector {
	public x: number;
	public y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	public difference(target: Vector) {
		return new Vector(Math.abs(target.x - this.x), Math.abs(target.y -this.y));
	}
}