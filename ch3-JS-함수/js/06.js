// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

// 1.1. setTimeout
setTimeout(function(){
  console.log('setTimeout-함수선언 : TK')
},3000)
// 3초 뒤에 TK 가 나온다.

// 1.2. setTimeout - 화살표 함수
setTimeout(()=>{
  console.log('setTimout-화살표함수 : TK')
},3000);

// 2.1. clearTimeout
const timer = setTimeout(() => {
  console.log('clearTimeout : TK')
}, 3000);

// 2.1.1.
// h1 태그를 선택
const h1El = document.querySelector('h1')
// 클릭했을시 종료
h1El.addEventListener('click',()=>{
  clearTimeout(timer)
})

// 3.1. clearInterval
const timer2 = setInterval(()=>{
  console.log('clearInterval : TK')
},3000)

// 3.2.
const h1El2 = document.querySelector('h1')
// 클릭했을 시에 콘솔에 출력 x
h1El2.addEventListener('click',()=>{
  clearInterval(timer2)
})