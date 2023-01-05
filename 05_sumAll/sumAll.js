const sumAll = function(start, end) {
    let sum = 0;

    // my original solution for the check (still works)
    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") {
        return "ERROR";
    }

    // another way for typeof check
    /*
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    */

    if (start > end) {
        const temp = end
        end = start;
        start = temp;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
