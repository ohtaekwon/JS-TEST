// 조건문 (Switch statement)
// 외부 함수 가져오기
import random from "./getRandom";

// 변수에 외부 함수의 값 할당
const a = random()

// Switch 문
switch (a){
  // a===0 인 경우
  case 0:
    console.log('a is 0')
    break
  // a===2 인 경우
  case 2:
    console.log('a is 2')
    break
  // a===4 인 경우
  case 4:
    console.log('a is 4')
    break
  // case가 전부 해당이 안 될 경우
  default:
    console.log('rest...')
}



