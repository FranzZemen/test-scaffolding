/*
Created by Franz Zemen 01/23/2023
License Type: 
*/

import 'mocha';
import chai from 'chai';
import {Bar} from './bar.js';

const should = chai.should();
const expect = chai.expect;

describe('commingled tests', () => {
  describe('bar tests', () => {
    it('should say bar', () => {
      const bar = new Bar();
      bar.bar().should.equal('bar');
    });
  });
});

