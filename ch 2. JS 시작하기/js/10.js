// 형 변환(Type conversion)

const a = 1
const b = '1'

// 비교 연산자
console.log(a===b)  // false

// 동등 연산자
console.log(a==b)   // true


// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false`, -12, '3.14' ...
if ('false'){
  console.log(123)
}
// Falsy(거짓 같은 값)
// fslse, '', null, undefined, 0, -0, NaN

if (null){
  console.log(123)
}

console.log(1 + undefined) // NaN