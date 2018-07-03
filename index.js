function recurEach(src, target, opr, idx = 0, incr = 1) {
    const newTarget = opr(src[idx], target, idx, src);
    return idx >= src.length - incr
        ? newTarget
        : recurEach(src, newTarget, opr, idx + incr, incr)
}

function forEach(src, idx = 0, incr = 1) {
    return {
        opr: (opr, target) => {
            return src.length === 0
                ? target
                : recurEach(src, target, opr, idx, incr);
        }
    };
};

function forLoop(count, target, opr, idx = 0, incr = 1) {
    if (count === 0) {
        return target;
    } else {
        const newTarget = opr(idx, target, count);
        return idx >= count - incr
            ? newTarget
            : forLoop(count, newTarget, opr, idx + incr, incr);
    }
};

exports.forEach = forEach;
exports.forLoop = forLoop;