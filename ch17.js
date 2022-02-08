const heropy ={
  // 속성과 메서드를 통틀어서 멤버(Member)라 한다.
  // 객체 데이터의 속성이라 한다.
  firstName: 'Heropy',
  lastName: 'Park',
  // 객체 데이터에 함수 데이터가 할당되면 속성이 아니라, 메서드이다.
  getFulName:function(){
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(heropy.getFulName())