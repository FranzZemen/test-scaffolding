/*
Created by Franz Zemen 01/23/2023
License Type: 
*/

import 'mocha';
import chai from 'chai';

import {Foo} from '../../foo/foo.js';

const should = chai.should();
const expect = chai.expect;

describe('collocated tests', () => {
  describe('foo tests', () => {
    it('should say foobar', () => {
      const foo = new Foo();
      foo.foo().should.equal('foobar');
    })
  })
});
