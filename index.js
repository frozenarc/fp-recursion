function forEach(src, target, opr, idx = 0, incr = 1) {
    if (idx >= src.length - incr) {
        return opr(src[idx], target, idx, src);
    } else {
        return forEach(src, opr(src[idx], target, idx, src), opr, idx + incr, incr);
    }
};

function forLoop(count, target, opr, idx = 0, incr = 1) {
    if (idx >= count - incr) {
        return opr(idx, target, count);
    } else {
        return forLoop(count, opr(idx, target, count), opr, idx + incr, incr);
    }
};

exports.forEach = forEach;
exports.forLoop = forLoop;