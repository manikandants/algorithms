'use strict';

var list = [1, 4, 7, 9];

const jumpSearch = (data, value) => {
    var n = data.length;
    var step = Math.floor(Math.sqrt(n));
    var from = 0;
    while (data[Math.min(step, n) - 1] < value) {
      from = step;
      step += Math.floor(Math.sqrt(n));
      if (from >= n) {
        return -1;
      }
    }
    while (data[from] < value) {
      from++;
      if (from === Math.min(step, n)) {
        return -1;
      }
    }
    if (data[from] === value) {
      return from;
    }
    return -1;
};

console.log(jumpSearch(list, 7));
