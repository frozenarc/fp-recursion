const defRet = function (_defRet) {
    this._defRet = _defRet;
    return this;
};

function _recurEach(src, target, opr, idx, incr) {
    const newTarget = opr(src[idx], target, idx, src);
    return idx >= src.length - incr
        ? newTarget
        : _recurEach(src, newTarget, opr, idx + incr, incr)
};

function recurEach(src, idx = 0, incr = 1) {
    return {
        defRet,
        opr: function (opr) {
            return src.length === 0
                ? this._defRet
                : _recurEach(src, this._defRet, opr, idx, incr);
        }
    };
};

function _recurTill(count, target, opr, idx, incr) {
    const newTarget = opr(idx, target, count);
    return idx >= count - incr
        ? newTarget
        : _recurTill(count, newTarget, opr, idx + incr, incr);
};

function recurTill(count, idx = 0, incr = 1) {
    return {
        defRet,
        opr: function (opr) {
            return count === 0
                ? this._defRet
                : _recurTill(count, this._defRet, opr, idx, incr);
        }
    };
};

exports.recurEach = recurEach;
exports.recurTill = recurTill;