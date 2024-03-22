/*
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
*/


//:::::: solution ::::::::


function countTrue(arr) {
	return arr.filter((ar)=>ar===true).length
}


/* we filter through each array items and filtered out which are true. This  arr.filter((ar)=>ar===true) gives us new array which
contains true values as array items.then we calculate the length of that array which is the number of true values in given array
*/

//::: test cases

Test.assertEquals(countTrue([true, false, false, true, false]), 2)
Test.assertEquals(countTrue([false, false, false, false]), 0)
Test.assertEquals(countTrue([]), 0)
Test.assertEquals(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]), 8)
Test.assertEquals(countTrue([true, false, true, true, false, false, false, false, false]), 3)
Test.assertEquals(countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]), 8)
Test.assertEquals(countTrue([true, false, true, true, true, false, true, true, false, false]), 6)
Test.assertEquals(countTrue([false, false, false, false, true, false, true, false, true, false, false]), 3)
Test.assertEquals(countTrue([true, false, false, false, true, false, false, true, false, false, false]), 3)
Test.assertEquals(countTrue([true, true, false, true, false, false, false, false, true, false]), 4)
Test.assertEquals(countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]), 9)
Test.assertEquals(countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]), 8)
Test.assertEquals(countTrue([true, true, false, false, false, false, true, false, true, true, false, true]), 6)
