const range = function(start, end) {
    let result = [];
    if (start > end) {
        return [];
    }
    if (start === end) {
        return [end];
    }
    result.push(start);
    // start++;
    // debugger
    return result.concat(range(start + 1, end));
};

const sumRec = function(arr) {
    let sum = 0;
    if (arr.length === 0) {
        return 0;
    }
    let dup_arr = arr.slice()
    sum += dup_arr.shift();
    return sum + sumRec(dup_arr);
};

const exponent = function(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * exponent(base, exp-1);
};

const exponent2 = function(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp === 1) {
        return base;
    }
    if (exp % 2 === 0) {
        return exponent2(base, exp/2) ** 2
    } else {
        return base * (exponent2(base, (exp-1)/2) ** 2) ;
    }
};