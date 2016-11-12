/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { UppercasePipe } from './uppercase.pipe';

describe('Pipe: Uppercase', () => {
  it('create an instance', () => {
    let pipe = new UppercasePipe();
    expect(pipe).toBeTruthy();
  });
  it('Abc should be ABC', () => {
    let pipe = new UppercasePipe();
    expect(pipe.transform('Abc')).toBe('ABC');
  });
  it('null should be empty string', () => {
    let pipe = new UppercasePipe();
    expect(pipe.transform(null)).toBe('');
  });
});
