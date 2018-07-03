function forEach(src, target, opr, idx = 0, incr = 1) {
    const newTarget = opr(src[idx], target, idx, src);
    return idx >= src.length - incr
        ? newTarget
        : forEach(src, newTarget, opr, idx + incr, incr);
};

function forLoop(count, target, opr, idx = 0, incr = 1) {
    const newTarget = opr(idx, target, count);
    return idx >= count - incr
        ? newTarget
        : forLoop(count, newTarget, opr, idx + incr, incr);
};

exports.forEach = forEach;
exports.forLoop = forLoop;