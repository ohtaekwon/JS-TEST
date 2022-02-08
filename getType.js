export default function getType(data){
  // 특정한 데이터의 타입을 알고 싶을때
  //logic
  return Object.prototype.toString.call(data).slice(8,-1)
}