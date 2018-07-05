const { recurEach, recurTill } = require('./index');
const expect = require('chai').expect;

describe('recurEach', () => {

    it('Empty Array', () => {
        const res = recurEach([])
            .initVal([])
            .opr((val, arr) => [...arr, val + 1]);

        expect(res).to.deep.equal([]);
    });

    it('Array', () => {
        const res = recurEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            .initVal([])
            .opr((val, arr) => [...arr, val + 1]);

        expect(res).to.deep.equal([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    it('Array, idx = 0, incr = 2, end = 7', () => {
        const res = recurEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 2, 7)
            .initVal([])
            .opr((val, arr) => [...arr, val]);

        expect(res).to.deep.equal([1, 3, 5, 7]);
    });

    it('Array, idx = 0, incr = 2, end = 7', () => {
        const res = recurEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 6, 11)
            .initVal([])
            .opr((val, arr) => [...arr, val]);

        expect(res).to.deep.equal([1, 7]);
    });

    it('Array, idx = 3', () => {
        const res = recurEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
            .opr((val, arr = []) => [...arr, val + 1]);

        expect(res).to.deep.equal([5, 6, 7, 8, 9, 10, 11]);
    });

    it('Array, idx = 0, incr = 2', () => {
        const res = recurEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 0, 2)
            .opr((val, arr = []) => [...arr, val + 1]);

        expect(res).to.deep.equal([2, 4, 6, 8, 10, 12]);
    });

    it('Object', () => {
        const res = recurEach([1, 2, 3])
            .opr((val, obj = {}) => ({ prev: Object.assign({}, obj), cur: val }));

        expect(res).to.deep.equal({ prev: { prev: { prev: {}, cur: 1 }, cur: 2 }, cur: 3 });
    });

    it('Primitive', () => {
        //4 + 1 + 2 + 3
        const res = recurEach([1, 2, 3])
            .opr((val, prim = 4) => prim + val);

        expect(res).to.equal(10);
    });
});

describe('recurTill', () => {

    it('Empty Array', () => {
        const res = recurTill(0)
            .initVal([])
            .opr((idx, arr) => [...arr, idx * 2]);

        expect(res).to.deep.equal([]);
    });

    it('Array', () => {
        const res = recurTill(10)
            .initVal([])
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

    it('Object', () => {
        const res = recurTill(3)
            .opr((idx, obj = {}) => ({ prev: Object.assign({}, obj), cur: idx }));

        expect(res).to.deep.equal({ prev: { prev: { prev: {}, cur: 0 }, cur: 1 }, cur: 2 });
    });

    it('Primitive', () => {
        //4 + 0 + 1 + 2 + 3 + 4
        const res = recurTill(5)
            .opr((idx, prim = 4) => prim + idx);

        expect(res).to.equal(14);
    });

    it('Primitive, factorial', () => {
        //1 * 1 * 2 * 3 * 4 * 5
        const res = recurTill(6, 1)
            .initVal(1)
            .opr((idx, fact) => fact * idx);

        expect(res).to.equal(120);
    });
});
