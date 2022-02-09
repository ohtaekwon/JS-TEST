// 데이터 불변성 (Imutability) 
// 원시 데이터 : String, Number, Boolean, undefined, null
// 참조형 데이터 : Object, Array, Function
// ------------------------------------------------------------------
// |1: {          } |2: {          } |3: {          } |4:{          }
// -------------------------------------------------------------------

let a = {k:1}
let b = {k:1}
console.log(a,b, a===b)
a.k=7
b=a
console.log(a,b,a===b)
a.k=2
console.log(a,b, a===b)
let c = b
console.log(a,b,c,a===c)
a.k = 9
console.log(a,b,c,a===c)