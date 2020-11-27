import assert from 'assert';
import fc from 'fast-check';
import {change} from './change.mjs';

describe('unit tests', () => {
    describe('change', () => {
        it('should return [] when given 0', () => {
            assert.deepStrictEqual(change(0), []);
        });
        it('should return [5,2,2] when given 9', () => {
            assert.deepStrictEqual(change(9), [5, 2, 2]);
        });
        it('should return [10,1] when given 11', () => {
            assert.deepStrictEqual(change(11), [10, 1]);
        });
        it('should return [20,5] when given 25', () => {
            assert.deepStrictEqual(change(25), [20, 5]);
        });
        it('should return [100,50,2] when given 152', () => {
            assert.deepStrictEqual(change(152), [100, 50, 2]);
        });
        it('should return correct change for 6543', () => {
            assert.deepStrictEqual(change(6543), [1000, 1000, 1000, 1000, 1000, 1000, 500, 20, 20, 2, 1]);
        });
    });
})

describe('property-based tests', () => {
    describe('change', () => {
        it('should return an array', () => {
            fc.assert(fc.property(fc.nat(10000), n => change(n) instanceof Array))
        });
        it('should return an array that sums up to the input', () => {
            fc.assert(fc.property(fc.nat(10000), n => {
                let res = change(n);
                //assert.equal(n, res.reduce((acc,i) => acc+i, 0));
                return n == res.reduce((acc, i) => acc + i, 0);
            }))
        });
        it('should return a sorted output array', () => {
            fc.assert(fc.property(fc.nat(10000), n => {
                let res = change(n);
                let clone = res.slice(0);
                assert.deepStrictEqual(clone, res.sort((a, b) => b - a));
            }))
        });
        it('should return an array with only valid numbers', () => {
            fc.assert(fc.property(fc.nat(10000), n => {
                let valid = [1,2,5,10,20,50,100,200,500,1000];
                let res = change(n);
                return res.every(i => valid.includes(i));
            }))
        });
    });
})