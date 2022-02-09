const pi = 3.1459265458979
console.log(pi)

const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)

const integer = parseInt(str) // 정수로 형 변환
const float = parseFloat(str) // 실수로 형 변환

console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)
