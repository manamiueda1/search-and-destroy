"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  const middle = Math.floor(array.length / 2);

  if (array[middle] === target) {
    return true;
  }
  if (array[middle] > target) {
    const left = array.slice(0, middle);
    return binarySearch(left, target);
  }
  if (array[middle] < target) {
    const right = array.slice(middle + 1);
    return binarySearch(right, target);
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
