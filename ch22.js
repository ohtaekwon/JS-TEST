// JS 데이터

// String : "", '', ``
// Number
// Boolean : true, false
// undefined
// null
// Array : []
// Object : {}

// 정규 표현식
const str = 'ohtk92@naver.com'
console.log(str.match(/.+(?=@)/)[0])

// 공백 제거
const str = '    Hello world'
console.log(str.trim())