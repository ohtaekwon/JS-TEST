const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']

// .length
console.log('length')

console.log(numbers[1])
console.log(fruits[2])
console.log([1,2].length)

console.log([].length)

// .concat()
console.log('concat')
console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)

// .forEach()
console.log('forEach')
fruits.forEach(function(fruit, i){
  console.log(fruit,i)
})

// .map()
console.log('map')
const a = fruits.forEach(function(fruit, i){
  console.log(`${fruit}-${i}`)
})
console.log(a)

const b = fruits.map(function(fruit,i){
  return {
    id: i,
    name: fruit
  }
})
console.log(b);

const c = fruits.map((fruit,i)=>({
  id:i,
  name:fruit
}))
console.log(c)