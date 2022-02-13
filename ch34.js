// 객체 데이터
const user ={
  name:'otk',
  age:30,
  emails:[
    'ohtk92@naver.com',
    'neo@zillinks.com'
  ]
}
// localstorage는 데이터가 만료되지 않는다.
// session는 페이지를 닫을 때, 데이터가 사라진다.

// 1. localstorage에 setItem()라는 메서드를 통해서 데이터를 저장
// 1-1. setItem(저장할 데이터의 이름(키), 가져올 객체 데이터(value))
// 2. 자바스크립트 데이터를 전부다 문자 데이터로 변환하여 저장해야 한다.
localStorage.setItem('user', JSON.stringify(user))

// 3. localstorage에 저장된 데이터를 다시 js에서 가져와서 출력하기 위해서는, getItem
// 3-1. getItem(데이터의 이름)
console.log('3번', localStorage.getItem('user')) // 문자데이터
// 3-2. {"name":"otk","age":30,"emails":["ohtk92@naver.com","neo@zillinks.com"]}
// 3-3. 문자데이터 형태로 출력이 되었다.

// 4. js에서 활용하기 좋은 객체 데이터로 변환하기 위해서는, parse
// 4-1 pasre()
console.log('4번', JSON.parse(localStorage.getItem('user')))

// 5. localstorage의 데이터를 실제로 지우는 명령어, removeItem()
// 5-1. localstorage.removeItem('삭제할 데이터의 키 값')
// localStorage.removeItem('user')

// 6. localstorage의 데이터를 수정해야할 때
// 6-1. 일단, getItem을 사용하여 데이터를 가져오고 str이라는 변수에 할당한다.
const str = localStorage.getItem('user')

// 6-2. 가져온 문자데이터를 JSON.parse를 통해서 실제 가공할 수 있는 데이터로 변환
const obj = JSON.parse(str)
obj.age=22
console.log(obj) // age의 데이터가 수정되었다.
localStorage.setItem('user',JSON.stringify(obj))