// 변수 유효범위(Variable Scope)
// var, let, const

// 유효한 범위
function scope(){
  if (true){
    const a = 123
    console.log(a)
  }
}
scope() // 123

// 유효하지 않은 범위
function scope(){
  if (true){
    const a = 123
  }
  console.log(a)
}
scope() // Uncaught ReferenceError: a is not defined

function scope(){
  console.log(a)

  if (true){
    const a = 123
  }
}
scope() // Uncaught ReferenceError: a is not defined

// 함수 범위의 블록 레벨 - var
function scope(){
  console.log(a)
  if (true){
    var a = 123
  }
}
scope() // undefined

