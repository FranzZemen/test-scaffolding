/*
Created by Franz Zemen 01/23/2023
License Type: 
*/

import 'mocha';
import chai from 'chai';

import {Foo} from '@franzzemen/self-referencing-test-scaffolding';

const should = chai.should();
const expect = chai.expect;

describe('self-referencing tests', () => {
  describe('foo tests', () => {
    it('should say foobar', () => {
      const foo = new Foo();
      foo.foo().should.equal('foobar');
    })
  })
});
