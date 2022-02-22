// .find() .findIndex()

const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']

console.log(fruits)
// 정규 표현식
const a = fruits.find(fruit=> /^B/.test(fruit))
console.log(a)

const b = fruits.findIndex(fruit=>/^B/.test(fruit))
console.log(b)

// .includes()
const c = numbers.includes(3)
console.log(c) // true

const d = fruits.includes('HEROPY')
console.log(d) // false

// .push() .unshift()
// 원본 수정됨 주의!
numbers.push('뒤') // 가장 뒤쪽에 특정 데이터를 삽입
console.log(numbers)

numbers.unshift('앞') // 가장 앞쪽에 특정 데이터를 삽입
console.log(numbers)

// .reverse()
// 원본 수정됨 주의!
numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)

