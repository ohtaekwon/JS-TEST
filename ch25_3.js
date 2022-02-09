const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']
const food = ['meet','milk','coffee','ice-cream','waffle','rice']
// .splice()
// 원본 수정됨 주의!
// slice(index 번호,삭제할 아이템)
numbers.splice(2,1)
console.log(numbers)

// 특정 자리에 아이템을 끼워 놓는 용도로도 사용
food.splice(2,0,'water')
console.log(food)

numbers.splice(2,1,99)
console.log(numbers)

fruits.splice(2,0,'Ornage')
console.log(fruits)