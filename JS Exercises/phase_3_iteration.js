Array.prototype.bubbleSort = function() {
    let sorted = this.slice()
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
            if (sorted[i] > sorted[j]) {
                let temp = sorted[i];
                sorted[i] = sorted[j];
                sorted[j] = temp;
            } else {
                continue
            }
        }   
    }   
    return sorted;
}

Array.prototype.bubbleSort2 = function() {
    let sorted = this.slice()
    let i = 0
    while (i < sorted.length) {
        if (sorted[i] > sorted[i + 1]){
            let temp = sorted[i];
            sorted[i] = sorted[i + 1];
            sorted[i + 1] = temp;
            i--
        } else {
            i++
        }
    }
    return sorted;
}

String.prototype.substrings = function() {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            if (!result.includes(this.slice(i, j))) {
                result.push(this.slice(i, j))
            }
        }
    }
    return result;
}
