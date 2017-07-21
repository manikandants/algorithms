'use strict';

var list = [1, 4, 7, 9];

const binarySearch = (data, from, to, value) => {
    if (to >= from) {
        var mid = Math.floor(from + (to - from) / 2);
        if (data[mid] === value) {
            return mid;
        }

        if (data[mid] > value) {
            return binarySearch(data, from, mid - 1, value);
        } else {
            return binarySearch(data, mid + 1, to, value);
        }
    }

    return -1;
};

console.log(binarySearch(list, 0, list.length - 1, 7));
