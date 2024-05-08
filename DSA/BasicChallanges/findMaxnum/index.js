//  function called findMaxNumber that takes in an array of numbers and returns the largest number in the array.

let num = [2, 4, 6, 8];
function findMaxNumber(arr) {
  let large = arr[0];

  for (let i = 0; i < arr.length; i++) {
    large = large > arr[i] ? large : arr[i];
  }
  console.log(large);
}

// test
findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 10
findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // 10
findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6]); // 10
