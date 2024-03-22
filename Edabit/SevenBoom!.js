
/*
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.


*/




/* ::::::Solution::::::*/

function sevenBoom(arr) {
 // Map each number to true if it contains 7, false otherwise
    const contains7 = arr.map(num => num.toString().includes("7"));
    
    // Check if any element in the mapped array is true
    if (contains7.includes(true)) {
        return "Boom!";
     else 
        return "there is no 7 in the array";
    
}


// :::::: TEST Cases :::::

Test.assertEquals(sevenBoom([2, 6, 7, 9, 3]), "Boom!")
Test.assertEquals(sevenBoom([33, 68, 400, 5]), "there is no 7 in the array")
Test.assertEquals(sevenBoom([86, 48, 100, 66]), "there is no 7 in the array")
Test.assertEquals(sevenBoom([76, 55, 44, 32]), "Boom!")
Test.assertEquals(sevenBoom([35, 4, 9, 37]), "Boom!")
