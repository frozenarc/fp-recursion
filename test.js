const { forEach, forLoop } = require('./index');
const expect = require('chai').expect;

describe('forEach', () => {
    it('Array', () => {
        expect(forEach(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
            [], 
            (val, arr) => [...arr, val + 1]
        )).to.deep.equal([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    it('Array, idx = 3', () => {
        expect(forEach(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
            [], 
            (val, arr) => [...arr, val + 1], 
            3,
            1
        )).to.deep.equal([5, 6, 7, 8, 9, 10, 11]);
    });

    it('Array, idx = 0, incr = 2', () => {
        expect(forEach(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 
            [], 
            (val, arr) => [...arr, val + 1], 
            0,
            2
        )).to.deep.equal([2, 4, 6, 8, 10, 12]);
    });

    it('Custom Object', () => {
        expect(forEach(
            [1, 2, 3], 
            {}, 
            (val, obj) => ({ prev: Object.assign({}, obj), cur: val})
        )).to.deep.equal({ prev: { prev: { prev: {}, cur: 1 }, cur: 2 }, cur: 3 });
    });

    it('Premitive Value', () => {
        //4 + 1 + 2 + 3
        expect(forEach(
            [1, 2, 3], 
            4, 
            (val, prim) => prim + val
        )).to.equal(10);
    });
});

describe('forLoop', () => {
    it('Array', () => {
        expect(forLoop(
            10, 
            [], 
            (idx, arr) => [...arr, idx * 2]
        )).to.deep.equal([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]);
    });

    it('Array, idx = 3', () => {
        expect(forLoop(
            10, 
            [], 
            (idx, arr) => [...arr, idx * 2],
            3
        )).to.deep.equal([6, 8, 10, 12, 14, 16, 18]);
    });

    it('Array, idx = 0, incr = 2', () => {
        expect(forLoop(
            10, 
            [], 
            (idx, arr) => [...arr, idx * 2],
            0,
            2
        )).to.deep.equal([0, 4, 8, 12, 16]);
    });

    it('Custom Object', () => {
        expect(forLoop(
            3, 
            {}, 
            (idx, obj) => ({ prev: Object.assign({}, obj), cur: idx})
        )).to.deep.equal({ prev: { prev: { prev: {}, cur: 0 }, cur: 1 }, cur: 2 });
    });

    it('Premitive Value', () => {
        //4 + 0 + 1 + 2 + 3 + 4
        expect(forLoop(
            5, 
            4, 
            (idx, prim) => prim + idx
        )).to.equal(14);
    });
});
