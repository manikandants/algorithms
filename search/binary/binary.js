'use strict';

var list = [1, 4, 7, 9];

const recursiveBinarySearch = (data, from, to, value) => {
    if (to >= from) {
        var mid = Math.floor(from + (to - from) / 2);
        if (data[mid] === value) {
            return mid;
        }

        if (data[mid] > value) {
            return recursiveBinarySearch(data, from, mid - 1, value);
        } else {
            return recursiveBinarySearch(data, mid + 1, to, value);
        }
    }

    return -1;
};

const iterativeBinarySearch = (data, value) => {
    var from = 0;
    var to = list.length - 1;
    while (to >= from) {
        var mid = Math.floor(from + (to - from) / 2);
        if (data[mid] === value) {
            return mid;
        }

        if (data[mid] > value) {
            to = mid - 1;
        } else {
            from = mid + 1;
        }
    }

    return -1;
};

console.log(recursiveBinarySearch(list, 0, list.length - 1, 7));

console.log(iterativeBinarySearch(list, 7));
