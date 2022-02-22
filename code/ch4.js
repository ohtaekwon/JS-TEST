// 산술 연산자(arithmetic operator)
console.log('산술 연산자')
console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)


// 할당 연산자(assignment operator)
console.log('할당 연산자')
let a = 2
// a = a + 1
a+=1
console.log(a)

// 비교 연산자(comparison operator)
console.log('비교 연산자')
const b = 1
const c = 1
console.log(b===c)

function isEqual(x,y){
  return x === y
}
console.log(b>=c)

// 논리 연산자(logical operator)
const a = 1 === 1
const b = 'AB' === 'AB'
const c = false
console.log(a)
console.log(b)
console.log(c)

console.log('&& : ', b && c) // AND(그리고) 연산자
console.log('|| :', a||b||c )  // OR(또는) 연산자
console.log('! :', !a) // NOT(부정) 연산자
