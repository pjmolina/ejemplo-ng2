import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() { }
  log(msg: string) { console.log(msg); }
  warn(msg: string) { console.log(msg); }
  error(msg: string) { console.error(msg); }
  sum(a: number, b: number): number { return a + b; }
}
