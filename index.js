const initVal = function (_initVal) {
    this._initVal = _initVal;
    return this;
};

function _recurEach(src, value, opr, idx, incr) {
    const newValue = opr(src[idx], value, idx, src);
    return idx >= src.length - incr
        ? newValue
        : _recurEach(src, newValue, opr, idx + incr, incr)
};

function recurEach(src, idx = 0, incr = 1) {
    return {
        initVal,
        opr: function (opr) {
            return src.length === 0
                ? this._initVal
                : _recurEach(src, this._initVal, opr, idx, incr);
        }
    };
};

function _recurTill(count, value, opr, idx, incr) {
    const newValue = opr(idx, value, count);
    return idx >= count - incr
        ? newValue
        : _recurTill(count, newValue, opr, idx + incr, incr);
};

function recurTill(count, idx = 0, incr = 1) {
    return {
        initVal,
        opr: function (opr) {
            return count === 0
                ? this._initVal
                : _recurTill(count, this._initVal, opr, idx, incr);
        }
    };
};

exports.recurEach = recurEach;
exports.recurTill = recurTill;