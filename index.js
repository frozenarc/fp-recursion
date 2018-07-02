function forEach(sArr, tArr, opr, idx = 0) {
	if(idx === sArr.length - 1) {
		return opr(sArr[idx], tArr, idx, sArr);
	} else {
		return forEach(sArr, opr(sArr[idx], tArr, idx, sArr), opr, idx + 1);
	}
};

function forLoop(start, end, sArr, opr) {
    if(start === end - 1) {
        return opr(sArr, start, end);
    } else {
        return forLoop(start + 1, end, opr(sArr, start, end), opr);
    }
};


exports.forEach = forEach;
exports.forLoop = forLoop;