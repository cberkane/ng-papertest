import { Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountService {

  countSubject = new BehaviorSubject<number>(0);
  actionCountSubject = new BehaviorSubject<number>(0);

  private count: number = 0;
  private readonly countKey: string = 'count';

  private actionCount: number = 0;
  private x: number = 1;

  constructor() {
    this.initCount();
  }

  getCount$(): Observable<number> {
    return this.countSubject.asObservable();
  }

  getActionCount$(): Observable<number> {
    return this.actionCountSubject.asObservable();
  }

  private initCount(): void {
    const count = sessionStorage.getItem(this.countKey);
    if (!count) sessionStorage.setItem(this.countKey, JSON.stringify(this.count));
    else this.count = !isNaN(parseInt(count)) ? parseInt(count) : 0;
    this.countSubject.next(this.count);
  }

  public increment(): void {
    this.count += this.x;
    sessionStorage.setItem(this.countKey, JSON.stringify(this.count));
    this.countSubject.next(this.count);
    this.toggleCount();
  }

  public decrement(): void {
    this.count -= this.x;
    sessionStorage.setItem(this.countKey, JSON.stringify(this.count));
    this.countSubject.next(this.count);
    this.toggleCount();
  }

  public reset(): void {
    this.count = 0;
    sessionStorage.setItem(this.countKey, JSON.stringify(this.count));
    this.countSubject.next(this.count);
  }

  private toggleCount(): void {
    this.actionCount++;
    this.actionCountSubject.next(this.actionCount);
    if (this.actionCount % 30 === 0) this.x *= 2;
  }
}
