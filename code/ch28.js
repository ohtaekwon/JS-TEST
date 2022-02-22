// 전개 연산자 (Spread)
// ...
const fruits = ['Apple','Banana','Cherry','orange']
console.log(fruits) // (3) ['Apple', 'Banana', 'Cherry']
console.log(...fruits)  // Apple Banana Cherry

const toObject=(a, b, ...c)=>({a,b,c})

console.log(toObject(...fruits))  // {a: 'Apple', b: 'Banana', c: 'Cherry'}
console.log(toObject(fruits[0],fruits[1],fruits[2])) // {a: 'Apple', b: 'Banana', c: 'Cherry'}
