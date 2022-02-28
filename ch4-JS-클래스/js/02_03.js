// this
// 일반(Normal) 함수는 호출 위치에 따라서 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

const timer={
  name:'tk',
  timeout:function(){
    // setTimeout(함수, 시간)
    setTimeout(function() {
      console.log(this.name) // 지정되지 않은 값이 출력
    }, 2000);
  }
}
timer.timeout()