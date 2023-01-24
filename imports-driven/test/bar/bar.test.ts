/*
Created by Franz Zemen 01/23/2023
License Type: 
*/

import 'mocha';
import chai from 'chai';
import {Bar} from '#index';

const should = chai.should();
const expect = chai.expect;

describe('imports driven tests', () => {
  describe('bar tests', () => {
    it('should say bar', () => {
      const bar = new Bar();
      bar.bar().should.equal('bar');
    });
  });
});

