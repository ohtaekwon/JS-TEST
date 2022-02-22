// 변수 유효범위(Variable Scope)
// var, let, const

function scope(){
  console.log(a)
  if (true){
    let a = 123
  }
}
scope() // 123