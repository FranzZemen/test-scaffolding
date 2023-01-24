/*
Created by Franz Zemen 01/23/2023
License Type: 
*/

import {Bar} from '../bar/bar.js';

export class Foo {
  constructor() {}

  foo(): string {
    const theBar = new Bar();
    return 'foo' + theBar.bar();
  }
}
