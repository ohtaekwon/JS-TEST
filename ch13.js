// 즉시실행함수
// IIFE, Immedoately-Invoked Function Expression

const a = 7
function double(){
  console.log(a*2)
}
double();

// (함수)()
(function (){
  console.log(a*2)
})();

// (함수())
(function (){
  console.log(a*2)
}());