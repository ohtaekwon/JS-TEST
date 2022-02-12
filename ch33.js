// JSON
// 자바스크립트 객체 표기법

import myData from './myData.json'

// JSON이라는 확장자를 가지는 파일은 하나의 문자 데이터이다.
console.log(myData) 


const user={
  name:'OTK',
  age : 30,
  emails : [
    'ohtk92@naver.com',
    'helloworld@naver.com',
  ],
  // -가 쓰고 싶을때 ''
  'company-name':{}
}
console.log('user',user)

// JSON이라는 객체에서 stringify라는 메서드 사용
// JSON은 자바스크립트내 전역 객체
// stringify는 JSON의 포멧으로 문자데이터화 시키는 메서드
const str = JSON.stringify(user)
console.log('str',str) // str {"name":"OTK","age":30,"emails":["ohtk92@naver.com","helloworld@naver.com"],"company-name":{}}
console.log(typeof str) // string

// JSON은 경량화를 시켜야하는 구조이고 문자데이터로 관리
// 실제 JS로 쓸려면 JSON.parse를 사용
// parse는 분석
const obj = JSON.parse(str)
console.log('obj',obj)