// Problem - 6

const reverseString = (str) =>{
    return str.split('').reverse().join('')
}
console.log('Problem - 6 Reverse  String:',reverseString('Limon'))

// Problem - 7 

const countVowels = (str)=>{
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0;
}

console.log('Problem - 7 Count Vowels:',countVowels('limon'))

// Problem - 8 

const isPalindrome = (str)=>{
    const reverse = str.split('').reverse().join('')
    return str === reverse
}
console.log('Problem - 8 Check Palindrome :',isPalindrome('limonnomil'))