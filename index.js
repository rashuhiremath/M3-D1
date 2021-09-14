/* 1. Given a string (as a parameter), return the character that is most commonly used. */
function stringToDisplay(str) {
    return str
}
console.log(stringToDisplay("rashmi"))


/* 2. Check if two strings (passed as parameters) are anagrams of each other.
    Do not consider spaces or punctuation, make the whole word lower case.
    Return `true` if the words are anagram, return `false` if they aren't. */








function checkStringsAnagram(a, b) {
    let len1 = a.length
    let len2 = b.length
    if (len1 !== len2) {
        console.log('Invalid Input');
        return
    }
    let str1 = a.toLowerCase().split('').sort().join('')
    let str2 = b.toLowerCase().split('').sort().join('')
    console.log(str1)
    if (str1 === str2) {
        console.log("True")
    } else {
        console.log("False")
    }
}
checkStringsAnagram("indian", "ndiani")
checkStringsAnagram("rashmi", "imhsar")

/* 3. Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams:
    Ex. "listen" is the word, ["enlist", "google", "inlets"] are the possibilities: the output should be ["enlist", "inlets"]
*/

console.log("------------EX 3----------")
function displayAnagramsFromList(inputStr, list) {

    let string2 = inputStr.split("").sort().join("")
    console.log(string2)
    for (let i = 0; i < list.length; i++) {
        if (string2 === list[i].split("").sort().join("")) {
            console.log(list[i])
        }
    }

}
displayAnagramsFromList("rashmi", ["imhsar", "rahsim", "hiremath"])

/* 4. Given a string (as parameter), return `true` if the string is a palindrome or `false` if it is not. Include spaces and punctuation. */
console.log("------------EX 4----------")
function isPalindrome(str_entry) {
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;
    // Check whether the string is empty or not
    if (cstr === "") {
        console.log("Nothing found!");
        return false;
    }
    // Check if the length of the string is even or odd 
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
        // If the length of the string is 1 then it becomes a palindrome
        if (cstr.length === 1) {
            console.log("Entry is a palindrome.");
            return true;
        } else {
            // If the length of the string is odd ignore middle character
            ccount = (cstr.length - 1) / 2;
        }
    }
    // Loop through to check the first character to the last character and then move next
    for (var x = 0; x < ccount; x++) {
        // Compare characters and drop them if they do not match 
        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            console.log("Entry is not a palindrome.");
            return false;
        }
    }
    console.log("The entry is a palindrome.");
    return true;
}
isPalindrome("madam")
/* 5. Given an integer (as parameter), return an integer which digitas are the same as the original number, but reversed.
    Ex: 189 â‡’ 981 */
function reverseInteger(n) {
    n = n + ""
    return n.split("").reverse().join("")
}
console.log(reverseInteger(189))


/* 6. Write a function that takes a positive number X as a parameter. The function should output (as console.log) a step shaped string with X level usign the `#` character. Make sure the steps are on the right hand side:

    2 steps:
        '# '
        '##'
    3 steps:
        '#  '
        '## '
        '###'
    4 steps:
        '#   '
        '##  '
        '### '
        '####'
*/


/* 7. Create a function that, given a string as a parameter, returns a new string which is the original string, but reversed:
"hello" â‡’ "olleh" */
function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString("hiremath"))

/* 8. Create a function that takes an array and a "chuck size" as parameters.
    Divide the array into subarrays with the "chunk size" as lenght:
    array: [1, 2, 3, 4], chunk size: 2 â†’ [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5], chunk size: 4 â†’ [[ 1, 2, 3, 4], [5]]
*/


/* 9. Write a function that accepts a positive number X as parameter.
The function should console.log a pyramid shape with N levels built using the `#` character.
Example with X = 3

```
 '  #  '
 ' ### '
 '#####'
```
*/



/* 10. Write a function that accepts an integer N and returns a NxN spiral matrix:
Ex:

N = 2
[[1, 2],
[4, 3]]
N = 3
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]
N = 4
[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7]]

*/