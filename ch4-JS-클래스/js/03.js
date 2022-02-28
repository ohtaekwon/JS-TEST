// ES6 Classes

// function User(first,last){
//   this.firstName = first,
//   this.lastName = last
// }
// User.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }

class User{
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

const tk = new User('tk','oh')
const son = new User('hm','son')
const park = new User('js','park')
console.log(tk) // User {firstName: 'tk', lastName: 'oh'}
console.log(son.getFullName())  // hm son
console.log(park.getFullName()) // js park

