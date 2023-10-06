const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTut = tutorials.map((string)=>UpperFirst(string))
  return newTut
}
function UpperFirst (Arr){
 let newArr =[]
  for (let i = 0; i < Arr.length; i++) {
    if (i === 0) {
      newArr.push(Arr[i].toUpperCase())
    } else if (Arr[i-1] === " ") {
         newArr.push(Arr[i].toUpperCase())
        } else {newArr.push(Arr[i])}
}

return newArr.join('')
}
