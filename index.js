// Data Types 
//  - Strings 
//  -Numbers 
//  - Booleans 
//  - Undefined 
//     - Null
//     - Symbol
//     - BigInt



const myName = 'Ayoola'
const anotherName = ' Adams'
console.log (myName)

doubleNames = myName + anotherName

console.log(doubleNames)

const num1 = '10'
console.log(myName + num1)



isStudent = false 
console.log(isStudent)  


let fruit = 'mango';
console.log(fruit)



 let doneWithJavascript = null;


    console.log(typeof(doneWithJavascript)) //typeof doneWithJavascript
    console.log(typeof(100)) //typeof doneWithJavascript
    console.log(typeof(myName)) //typeof doneWithJavascript
    console.log(typeof(isStudent)) //typeof doneWithJavascript

    const language = 'JavaScript'
    const difficultyLevel = 8;
    const isFun = true;
    let nextLesson;
    const completedLesson = null;

    console.log(language)
    console.log(difficultyLevel)
    console.log(isFun)
    console.log(nextLesson)
    console.log(completedLesson)

    const sentence = language + ' is fun to learn' 
    
const sentence1 = `${language} is  very fun to learn`
console.log(sentence1)
console.log(sentence)

const a = 10
const b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b) // exponentiation 10^5

5 ==='5' 

10 !== 5 


const age = 25;
const isDataslidStudent = true;

console.log(age >30 && isDataslidStudent)

const message2 = "That is Gbenga's book"

console.log(message2.length)

const _name1 = 'Joey' 
name1Upper = _name1.toUpperCase()
console.log(name1Upper)


convertedName = name1Upper.toLowerCase()
console.log(convertedName)


const name3 =  'Samuel'

const slicedName = name3.slice(2,6)

console.log(slicedName)

const includesY = name3.includes('am')
console.log(includesY)

const replacedName = name3.replace('S', 'M')

console.log(replacedName)





const anyhow = '       Why do we even need this, as how?  ' 
console.log(anyhow.length)     
const trimmedAnyhow = anyhow.trim()
console.log(trimmedAnyhow)

const splitAnyhow = trimmedAnyhow.split(' ')
console.log(splitAnyhow)



// console.log(age > 18 && isStudent);  // true (both true)
// console.log(age < 18 || isStudent);  // true (one true)
// console.log(!isStudent);             // false (reverses true to false)


console.log(trimmedAnyhow.charAt(1))


const language3 = 'JavaScript'



console.log(language3.at(-2))


const example1 = 'My name is'
const example2 = 'Ayoola'





const result =example1.concat(' ', example2)

console.log(result)

const fruitList = 'mango, apples, banana, orange'

console.log(fruitList.substring(7,15))

 const num2 = 15

if(num2 >= 15){
    console.log("hurray! the number is greater than 15")

} else {
    console.log("oh no! the number is less than 15")
}


const favLetter = prompt("enter your favorite letter")
const correctLetter = 'a'

if (favLetter === correctLetter){
    alert(`you are correct, the answer is ${correctLetter} ` )

} else if(favLetter === 'A'){
    alert('you are close, but the answer is lowercase a')
    
}else{
    alert('sorry, wrong answer, try again next time')
}






