// 화살표 함수
// () => {} vs function(){}
// 기본적인 로직을 축약형으로 줄일 수 있음

const double = function(x){
  return x * 2

}

console.log('double :', double(7))

const doubleArrow = x => ({
  name:'ohtaekwon'
})

console.log('doubleArrow :', doubleArrow(7))