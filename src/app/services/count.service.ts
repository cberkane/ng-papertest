import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  count: number = 0;
  private readonly countKey: string = 'count';

  x: number = 1;
  private actionCount: number = 0;

  constructor() {
    this.initCount();
  }

  private initCount(): void {
    const count = sessionStorage.getItem(this.countKey);
    if (!count)
      sessionStorage.setItem(this.countKey, JSON.stringify(this.count));
    else this.count = !isNaN(parseInt(count)) ? parseInt(count) : 0;
  }

  public increment(): void {
    this.count += this.x;
    sessionStorage.setItem(this.countKey, JSON.stringify(this.count));
    this.action();
  }

  public decrement(): void {
    this.count -= this.x;
    sessionStorage.setItem(this.countKey, JSON.stringify(this.count));
    this.action();
  }

  public reset(): void {
    this.count = 0;
    sessionStorage.setItem(this.countKey, JSON.stringify(this.count));
  }

  private action(): void {
    this.actionCount++;
    if (this.actionCount % 30 === 0) this.x *= 2;
  }
}
