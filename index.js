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
console.log('Problem - 6 Count Vowels:',countVowels('limon'))