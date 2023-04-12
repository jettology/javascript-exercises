const fibonacci = function(num) {

    if (num < 0) {
        return "OOPS";
    }

    if (num === 0) {
        return 0;
    }

    let a = 0;
    let b = 1;

    let fib = a + b;

    let n = 2;
    while (n < num) {
        a = b;
        b = fib;
        fib = a + b;
        n++;
    }

    return fib;

    // index:   1 2 3 4 5 6 7  8  9  10
    // fib num: 1 1 2 3 5 8 13 21 34 55
};

// console.log(fibonacci("3"));

// Do not edit below this line
module.exports = fibonacci;
