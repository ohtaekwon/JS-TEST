function User(first, last){
  this.firstName=first
  this.lastName=last
}
User.prototype.getFulName = function(){
  return `${this.firstName} ${this.lastName}`
}

const heropy =new User('Heropy','Park')
const amy = new User('Amy','Clarke')
const neo = new User('Neo','Smith')

console.log(heropy.getFulName())
console.log(amy.getFulName())
console.log(neo.getFulName())
