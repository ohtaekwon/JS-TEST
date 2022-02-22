// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
const user={
  name:'Heropy',
  age:85,
  emails:['ohtk92@naver.com']
}
const copyUser = user
console.log(copyUser===user)  // true

user.age = 22
console.log('user',user) // {name: 'Heropy', age: 22, emails: Array(1)}
console.log('copyuser',copyUser) // {name: 'Heropy', age: 22, emails: Array(1)}

console.log('---------')
console.log('---------')