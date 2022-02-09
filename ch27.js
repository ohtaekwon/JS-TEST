// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당
const user = {
  name:'Heropy',
  age:85,
  email:'ohtk92@naver.com',
  address:'USA'
}
const  {name:heropy, age, email, address='Korea'} = user
// E.g, uesr.address

console.log(`사용자의 이름은 ${heropy}입니다.`)
console.log(`${heropy}의 나이는 ${age} 입니다.`)
console.log(`${heropy}}의 이메일 주소는 ${email}입니다.`)
console.log(address)

const fruits = ['Appe','Banana','Cherry']

const [,,b]=fruits
console.log(b)