const initVal = function (_initVal) {
    this._initVal = _initVal;
    return this;
};

function shouldEnd(length, idx, till) {
    return till && length >= till 
        ? idx >= till 
        : idx >= length
};

function _recurEach(src, value, opr, idx, incr, till) {
    return src.length === 0 || shouldEnd(src.length, idx, till)
        ? value
        : _recurEach(src, opr(src[idx], value, idx, src), opr, idx + incr, incr, till);
};

function recurEach(src, idx = 0, incr = 1, till) {
    return {
        initVal,
        opr: function (opr) {
            return _recurEach(src, this._initVal, opr, idx, incr, till);
        }
    };
};

function _recurTill(till, value, opr, idx, incr) {
    return till === 0 || idx >= till
        ? value
        : _recurTill(till, opr(idx, value, till), opr, idx + incr, incr);
};

function recurTill(till, idx = 0, incr = 1) {
    return {
        initVal,
        opr: function (opr) {
            return _recurTill(till, this._initVal, opr, idx, incr);
        }
    };
};

function _recurWhile(con, value, opr) {
    if(!con(value)) {
        return value;
    } else {
        return _recurWhile(con, opr(value), opr)
    }
}

function recurWhile(con) {
    return {
        initVal,
        opr: function (opr) {
            return _recurWhile(con, this._initVal, opr);
        }
    };
};

exports.recurEach = recurEach;
exports.recurTill = recurTill;
exports.recurWhile = recurWhile;