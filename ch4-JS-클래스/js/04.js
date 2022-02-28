class Vehicle{
  constructor(name, wheel){
    this.name=name
    this.wheel=wheel
  }
}
const myVehicle = new Vehicle('운송수단',4)
console.log(myVehicle)  // Vehicle {name: '운송수단', wheel: 4}

// extends : 확장(상속)
class Bicycle extends Vehicle{
  constructor(name, wheel){
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('자전거',3)
console.log(myBicycle)  // Bicycle {name: '자전거', wheel: 3}

class Car extends Vehicle{
  constructor(name, wheel, license){
    super(name, wheel)
    this.license=license
  }
}
const myCar = new Car('벤츠',4, true)
console.log(myCar) // Car {name: '벤츠', wheel: 4, license: true}