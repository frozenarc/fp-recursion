const { recurFor, recurTill } = require('./index');
const expect = require('chai').expect;

describe('recurFor', () => {

    it('Array', () => {
        const res = recurFor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            .defRet([])
            .opr((val, arr = []) => [...arr, val + 1]);

        expect(res).to.deep.equal([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    it('Array', () => {
        const res = recurFor([])
            .defRet([])
            .opr((val, arr) => [...arr, val + 1]);

        expect(res).to.deep.equal([]);
    });

    it('Array', () => {
        const res = recurFor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            .opr((val, arr = []) => [...arr, val + 1]);

        expect(res).to.deep.equal([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    it('Array, idx = 3', () => {
        const res = recurFor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
            .opr((val, arr = []) => [...arr, val + 1]);

        expect(res).to.deep.equal([5, 6, 7, 8, 9, 10, 11]);
    });

    it('Array, idx = 0, incr = 2', () => {
        const res = recurFor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 0, 2)
            .opr((val, arr = []) => [...arr, val + 1]);

        expect(res).to.deep.equal([2, 4, 6, 8, 10, 12]);
    });

    it('Custom Object', () => {
        const res = recurFor([1, 2, 3])
            .opr((val, obj = {}) => ({ prev: Object.assign({}, obj), cur: val }));

        expect(res).to.deep.equal({ prev: { prev: { prev: {}, cur: 1 }, cur: 2 }, cur: 3 });
    });

    it('Primitive Value', () => {
        //4 + 1 + 2 + 3
        const res = recurFor([1, 2, 3])
            .opr((val, prim = 4) => prim + val);

        expect(res).to.equal(10);
    });
});

describe('forLoop', () => {

    it('Empty Array', () => {
        const res = recurTill(0)
            .defRet([])
            .opr((idx, arr) => [...arr, idx * 2]);

        expect(res).to.deep.equal([]);
    });

    it('Array', () => {
        const res = recurTill(10)
            .defRet([])
            .opr((idx, arr = []) => [...arr, idx * 2]);

        expect(res).to.deep.equal([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]);
    });

    it('Array, idx = 3', () => {
        const res = recurTill(10, 3)
            .opr((idx, arr = []) => [...arr, idx * 2]);

        expect(res).to.deep.equal([6, 8, 10, 12, 14, 16, 18]);
    });

    it('Array, idx = 0, incr = 2', () => {
        const res = recurTill(10, 0, 2)
            .opr((idx, arr = []) => [...arr, idx * 2]);

        expect(res).to.deep.equal([0, 4, 8, 12, 16]);
    });

    it('Custom Object', () => {
        const res = recurTill(3)
            .opr((idx, obj = {}) => ({ prev: Object.assign({}, obj), cur: idx }));

        expect(res).to.deep.equal({ prev: { prev: { prev: {}, cur: 0 }, cur: 1 }, cur: 2 });
    });

    it('Primitive Value', () => {
        //4 + 0 + 1 + 2 + 3 + 4
        const res = recurTill(5)
            .opr((idx, prim = 4) => prim + idx);

        expect(res).to.equal(14);
    });
});
