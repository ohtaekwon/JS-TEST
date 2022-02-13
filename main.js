const user ={
  name:'otk',
  age:30,
  emails:[
    'ohtk92@naver.com',
    'neo@zillinks.com'
  ]
}


// 1. localstorage에 setItem()라는 메서드를 통해서 데이터를 저장
// 1-1. setItem(저장할 데이터의 이름, 가져올 객체 데이터)
// 2. 자바스크립트 데이터를 전부다 문자 데이터로 변환하여 저장해야 한다.
localStorage.setItem('user', JSON.stringify(user))

// 3. localstorage에 저장된 데이터를 다시 js에서 가져와서 출력하기 위해서는, getItem
// 3-1. getItem(데이터의 이름)
console.log(localStorage.getItem('user')) 
// 3-2. {"name":"otk","age":30,"emails":["ohtk92@naver.com","neo@zillinks.com"]}
// 3-3. 문자데이터 형태로 출력이 되었다.

// 4. js에서 활용하기 좋은 객체 데이터로 변환하기 위해서는, parse
// 4-1 pasre()
console.log(JSON.parse(localStorage.getItem('user')))

// 5.
