// // 함수 복습
// function sum(x,y){
//   return x+y

// }
// const a = sum(1,3)
// console.log(a)  // 4
// const b = sum(4,12)
// console.log(b)  // 16
// console.log(a+b)  // 20

// const sum = function(x,y){
//   return x + y
// }
// sum(1,3)


// function sum(x,y){
 
//   return x+y
//   console.log(x)

// }
// // 1
// sum(1,3)

// function sum(x,y){
//   if (x<2){
//     return
//   }
//   return x + y
// }
// console.log(sum(1,3)) // undefined


function sum(){
  console.log(arguments)
  return arguments[0] + arguments[1]
}
console.log(sum(7,3)) 
// Arguments(2) [7, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]