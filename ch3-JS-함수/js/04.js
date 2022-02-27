// 호이스팅(Hoisiting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// 1. 함수 표현
const a = 7

double() // 14

 function double(){
  console.log(a*2)
}

// 2. 함수 선언
const a = 7

double() // 14

 function double(){
  console.log(a*2)
}