// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// 1. setTimeout(함수, 시간)
function timeout(){
  setTimeout(()=>{
    console.log('TK')
  },3000)
}
timeout()
console.log('Done!')

// 2. 콜백 함수
function timeout2(callback){
  setTimeout(()=>{
    console.log('TK')
    // 새로 받은 인수를 다음으로 작성한다.
    callback()
  },3000)
}
// timeout2 인수에 새로운 화살표 함수
// 콜백 함수
timeout2(()=>{
  console.log('Done!')
})
// TK
// Done!
// 차례대로 출력이 된다. 
