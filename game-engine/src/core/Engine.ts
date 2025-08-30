export class Engine {
  private last = 0
  private raf = 0
  start(step: (dt: number) => void) {
    const loop = (t: number) => {
      const dt = this.last ? (t - this.last) / 1000 : 0
      this.last = t
      step(Math.min(dt, 1/30))
      this.raf = requestAnimationFrame(loop as any)
    }
    this.raf = requestAnimationFrame(loop as any)
  }
  stop() {
    cancelAnimationFrame(this.raf)
  }
}
