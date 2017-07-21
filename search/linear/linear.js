'use strict';

var list = [1, 4, 7, 9];

const linearSearch = (data, value) => {
    for (var index = 0; index < data.length; index++) {
        if (data[index] === value) {
            return index;
        }
    }

    return -1;
};

console.log(linearSearch(list, 7));
