// 화살표 함수
// () => {} vs. function(){}

const double = function(x){
  return x * 2
}
console.log('double: ', double(7))  // double:  14

// const doubleArrow = (x) =>{
//   return x * 2
// }
// console.log('doubleArrow: ', doubleArrow(7))  // doubleArrow:  14

const doubleArrow = x => x*2
console.log('doubleArrow: ', doubleArrow(7))  // doubleArrow:  14

// 화살표 함수 객체데이터 축약형
const doubleArrow = x => ({
  name : 'tk'
})