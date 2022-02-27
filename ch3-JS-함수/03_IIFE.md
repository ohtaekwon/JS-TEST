# 03. IIFE (Immediately-Invoked Function Expression)

### 3.1. 즉시 실행 함수

```js
// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

const a = 7
function double(){
  console.log(a*2)
}
double(); // 14

// 익명의 함수 - 즉시실행 1. ()()
(function () {
  console.log(a*2)
})() // 14


// 익명의 함수 - 즉시실행 2. (())
(function () {
  console.log(a*2)
}()) // 14

```

