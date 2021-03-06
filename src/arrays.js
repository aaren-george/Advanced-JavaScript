// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  elements.forEach((element, i) => {
    cb(element, i);
  });
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
};


const map = (elements, cb) => {
  const newArray = elements.map((element) => {
    return cb(element);
  });
  return newArray;
// come back to THISSSSS

  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  if (typeof memo === 'undefined') {
    return elements.reduce((previousTotal, currentValue) => {
      return cb(previousTotal, currentValue);
    });
  }
  return elements.reduce((previousTotal, currentValue) => {
    return cb(previousTotal, currentValue);
  }, memo);
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) return elements[i];
  }
  return 'undefined';
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const newArr = [];
  elements.forEach((element) => {
    if (cb(element) === true) newArr.push(element);
  });
  return newArr;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const newArr = [];
  elements.forEach((element) => {
    if (Array.isArray(element)) {
      const nestedArray = flatten(element);
      nestedArray.forEach((nestedElement) => {
        newArr.push(nestedElement);
      });
    } else {
      newArr.push(element);
    }
  });
  return newArr;
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
