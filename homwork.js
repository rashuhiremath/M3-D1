/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

function sumOfTwoIntegers(integer1, integer2) {
    let sum = integer1 + integer2
    let tripleSum
    if (integer1 !== integer2) {

        console.log(sum)
    } else {
        tripleSum = sum * 3
        console.log(tripleSum)
    }


}
sumOfTwoIntegers(2, 2)
sumOfTwoIntegers(3, 4)

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

function checkTwoGivenIntegers(int1, int2) {
    let sum = 50
    if ((sum === int1 + int2) || ((int1 === 50) || (int2 === 50))) {
        return true
    } else {
        return false
    }
}
console.log(checkTwoGivenIntegers(2, 2))
console.log(checkTwoGivenIntegers(2, 50))
/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
function removeCharacter(position, string) {
    let splitString = string.split("")
    console.log(splitString)


}
removeCharacter(0, "rashmi")

/* 4. Create a function to find and return the largest of three given integers. */
function findLargestNumber(num1, num2, num3) {
    if ((num1 > num2) && (num1 > num3)) {
        return num1
    }
    else if ((num2 > num1) && (num2 > num3)) {
        return num2
    } else {
        return num3
    }
}
console.log(findLargestNumber(12, 5, 19))

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100.
    Return `true` if they do, return `false` if one (or both) don't. */
function checkTheRange(rangeNum, rangeNum2) {

}

/* 6. Create a function to create a new string composed of a specified number of copies of a given string.
    Pass the string and the number of copies as parameters. */


/* 7. Create a function to display the city name if the string begins with "Los" or "New".
    Pass the city name as a parameter. Return `false` if they start with a different string. */


/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements.
    Pass the array as a parameter. */
function calculateSumOfAllElements(array) {
    let totalSum = 0
    for (let i = 0; i < array.length; i++) {
        totalSum += array[i]

    }
    return totalSum
}
console.log(calculateSumOfAllElements([10, 2, 3]))

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3.
    Return `true` is it does, `false` if it doesn't. */


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3.
    Return `true` if it doesn't, `false` if it does. */


/* 11. Create a function to find the longest string from a given array of strings.
    Pass the array as parameter and return the longest string. */


/* 12. Create a function to find the types of a given angle:
  1. Acute angle ???????? between 0 and 90 degrees. Return `acute`.
    2. Right angle ???????? 90 degree. Return `right`
    3. Obtuse angle ???????? between 90 and 180. Return `obtuse`
    4. Straight angle ???????? 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/


/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */


/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */


/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative.
    Return `true` if that's the case, return `false` if it's not. */


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case.
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


/* 17. Create a function to calculate the sum of two integers (passed as parameters).
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example:
    The number has 3 as a factor ???????? return `Diego`
    The number has 5 as a factor ???????? return `Riccardo`
    The number has 7 as a factor ???????? return `Stefano`
    If the number does not have 3,5, or 7, return the original number.
    ???? ?????? The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names.
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */