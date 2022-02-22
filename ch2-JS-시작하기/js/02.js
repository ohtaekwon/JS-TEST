import getType from './getType.js'


console.log('hello world')    // hello world
console.log(typeof 'hello wolrd')   //string
console.log(123)  // 123
console.log(typeof 123) // number
console.log(typeof undefined) // undefined
console.log(typeof null)  // object
console.log(typeof {})  // object
console.log(typeof [])  // object

function getType(data){
  return Object.prototype.toString.call(data).slice(8,-1)
}

console.log(getType(123)) // [object Number]
console.log(getType(false)) // [object Boolean]
console.log(getType(null))  // Null
console.log(getType({}))  // Object
console.log(getType([]))  // Array
