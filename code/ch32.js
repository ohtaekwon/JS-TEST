import _ from 'lodash' // From node_modules
// 1. lodash라는 패키지를 _라는 키워드로 사용한다.

// 2. 배열 데이터 안에 객체 데이터
// 배열 데이터
const usersA = [
  // 객체 데이터
  {userId : '1', name : 'OHTAKWON'},
  {userId : '2', name : 'Neo'}
]

const usersB = [
  {userId : '1', name : 'OHTAEKWON'},
  {userId : '3', name : 'Amy'}
]
// 3. concat 메서드를 사용하여 두 개의 배열 데이터를 병합한다.
// 두개의 배열 데이터를 합쳐서 새로운 배열 데이터로 반환
const usersC = usersA.concat(usersB)
console.log('concat', usersC) // concat (4) [{…}, {…}, {…}, {…}]
// 4. uniqBy 메서드 : 중복된 데이터를 제거
// uniqBy(중복된 데이터의 배열데이터,중복을 구분할 고유한 속성의 이름)
console.log('uniqBy',_.uniqBy(usersC, 'userId')) // uniqBy (3) [{…}, {…}, {…}]

// 5. unionBy : 중복이 발생할 데이터가 두 개일 때,
// unionBy(배열데이터,배열데이터,고유값으로 사용할 속성의 이름)
const usersD = _.unionBy(usersA,usersB,'userId')
console.log('unionBy',usersD)

const users =[
  {userId : '1', name : 'OHTAEKWON'},
  {userId : '2', name : 'Neo'},
  {userId : '3', name : 'Amy'},
  {userId : '4', name : 'Evan'},
  {userId : '5', name : 'Lewis'},
]

// find() : find(배열, 객체)
const foundUser = _.find(users, {name:'Amy'})
const foundUserIndex = _.findIndex(users,{name:'Amy'})
console.log(foundUser)  // {userId: '3', name: 'Amy'}
console.log(foundUserIndex) // 2

_.remove(users, {name:'OHTAEKWON'})
console.log(users)