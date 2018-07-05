const initVal = function (_initVal) {
    this._initVal = _initVal;
    return this;
};

function shouldEnd(length, idx, incr, till) {
    return till && length >= till ? idx >= till - incr : idx >= length - incr
};

function _recurEach(src, value, opr, idx, incr, till) {
    const newValue = opr(src[idx], value, idx, src);
    return shouldEnd(src.length, idx, incr, till)
        ? newValue
        : _recurEach(src, newValue, opr, idx + incr, incr, till);
};

function recurEach(src, idx = 0, incr = 1, till) {
    return {
        initVal,
        opr: function (opr) {
            return src.length === 0
                ? this._initVal
                : _recurEach(src, this._initVal, opr, idx, incr, till);
        }
    };
};

function _recurTill(till, value, opr, idx, incr) {
    const newValue = opr(idx, value, till);
    return idx >= till - incr
        ? newValue
        : _recurTill(till, newValue, opr, idx + incr, incr);
};

function recurTill(till, idx = 0, incr = 1) {
    return {
        initVal,
        opr: function (opr) {
            return till === 0
                ? this._initVal
                : _recurTill(till, this._initVal, opr, idx, incr);
        }
    };
};

exports.recurEach = recurEach;
exports.recurTill = recurTill;