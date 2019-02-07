Array.prototype.uniq = function () {
    const uniq_arr = [];
    for (let i = 0; i < this.length; i++) {
        if (!uniq_arr.includes(this[i])) {
            uniq_arr.push(this[i]);
        }
    }
    return uniq_arr;
};

Array.prototype.twoSum = function () {
    const result = []
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                result.push([i, j]);
            }
        }
    }
    return result;
};

Array.prototype.transpose = function () {
    const result = []
    let rows = this.length;
    let cols = this[0].length;
    for (let i = 0; i < cols; i++) {
        result.push([]);
        for (let j = 0; j < rows; j++) {       
                result[i].push(this[j][i]);
        }
    }
    return result;
};