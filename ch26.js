const userAge ={
  // key:value
  name:'Heropy',
  age:85
}
const userEmail={
  name:'Heropy',
  email:'ohtk92@naver.com'
}
// 정적 메서드
const target = Object.assign({},userAge,userEmail)
console.log(target)
console.log(userAge)
console.log(target===userAge)


const a = {k:123}
const b = {k:123}
console.log(a===b)

const user={
  name:'Heropy',
  age:85,
  email:'ohtk92@naver.com'
}
const keys = Object.keys(user)
console.log(keys)  /// (3) ['name', 'age', 'email']

console.log(user['email'])  // ohtk92@naver.com

// map은 배열로 만들어서 반환
const value = keys.map(key=>user[key])
console.log(value)