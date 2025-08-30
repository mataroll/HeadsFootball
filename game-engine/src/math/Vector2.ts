export class Vector2 {
  constructor(public x = 0, public y = 0) {}
  add(v: Vector2) { return new Vector2(this.x + v.x, this.y + v.y) }
  sub(v: Vector2) { return new Vector2(this.x - v.x, this.y - v.y) }
  mul(s: number) { return new Vector2(this.x * s, this.y * s) }
  len() { return Math.hypot(this.x, this.y) }
  norm() { const l = this.len(); return l ? new Vector2(this.x/l, this.y/l) : new Vector2() }
}
