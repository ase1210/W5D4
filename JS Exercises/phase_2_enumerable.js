Array.prototype.myEach = function(func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
};


const func = function(el) {
    return el * el;
};

Array.prototype.myMap = function(func) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(func(this[i]));
    }
    return result;
};

Array.prototype.myMapWithClosure = function(func) {
    const result = [];
    this.myEach(function(el) {
        result.push(func(el));
    });
    return result;
};

Array.prototype.myMapWithClosureES6 = function(func) {
    const result = [];
    this.myEach((el) => {
        result.push(func(el));
    });
    return result;
};

Array.prototype.myReduce = function(func, initialValue) {
    let total, arr;
   if (!initialValue) {
       total = this[0];
       arr = this.slice(1);
   } else {
        arr = this; 
        total = initialValue;
   }
   arr.myEach(function(el) {
       total = func(total, el);
   });
   return total;
};

