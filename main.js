// 클래스
function user(first, last){
  this.firstName = first
  this.lastName = last
}
user.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

const TK = new user('TAEKOWN','OH')
const amy = new user('Amy','Clarke')
const neo = new user('Neo','Smith')

console.log(TK)   // user {firstName: 'Amy', lastName: 'Clarke'}
console.log(amy)  // user {firstName: 'Amy', lastName: 'Clarke'}
console.log(neo)  // user {firstName: 'Neo', lastName: 'Smith'}

console.log(TK.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())