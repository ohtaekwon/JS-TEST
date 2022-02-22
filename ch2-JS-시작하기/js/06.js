// 조건문 (If statement)
// 외부 함수 가져오기
import random from "./getRandom";

console.log(random())

// 변수에 외부 함수의 값 할당
const a = random()

// 둘 중에 하나씩 선택

// 1. if & else 문
if (a===0){
  console.log('a is 0')
} else {
  console.log('rest.....')
}

// 2. if & elif 문
if (a===0){
  console.log('a is 0')
} else if (a===2) {
  console.log('a is 2')
} else {
  console.log('rest....')
}