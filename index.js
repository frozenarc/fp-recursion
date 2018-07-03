function _recurFor(src, target, opr, idx, incr) {
    const newTarget = opr(src[idx], target, idx, src);
    return idx >= src.length - incr
        ? newTarget
        : _recurFor(src, newTarget, opr, idx + incr, incr)
}

function recurFor(src, idx = 0, incr = 1) {
    return {
        opr: (opr, target) => {
            return src.length === 0
                ? target
                : _recurFor(src, target, opr, idx, incr);
        }
    };
};

function _recurTill(count, target, opr, idx, incr) {
    const newTarget = opr(idx, target, count);
    return idx >= count - incr
        ? newTarget
        : _recurTill(count, newTarget, opr, idx + incr, incr);
}

function recurTill(count, idx = 0, incr = 1) {
    return {
        opr: (opr, target) => {
            return count === 0 
            ? target
            : _recurTill(count, target, opr, idx, incr);
        }
    };
};

exports.recurFor = recurFor;
exports.recurTill = recurTill;