// 클래스
function User(first, last){
  this.firstName = first
  this.lastName = last
}
// prototype
User.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

const TK = new User('TAEKOWN','OH')
const amy = new User('Amy','Clarke')
const neo = new User('Neo','Smith')

console.log(TK)   // user {firstName: 'Amy', lastName: 'Clarke'}
console.log(amy)  // user {firstName: 'Amy', lastName: 'Clarke'}
console.log(neo)  // user {firstName: 'Neo', lastName: 'Smith'}

console.log(TK.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())