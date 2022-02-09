// default가 있기 때문에 함수명을 생략해도 된다.
export default function getType(data){
  // 특정한 데이터의 타입을 알고 싶을때
  //logic
  return Object.prototype.toString.call(data).slice(8,-1)
}

// default export는 오직 한가지만 내보낼 수 있다. (per module)