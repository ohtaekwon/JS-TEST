// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

for (let i=0; i<3; i+=1){
  console.log(i)
}
// 0
// 1
// 2

// index문에서 반복문 만들기
const ulEl = document.querySelector('ul')

for (let i=0; i<10; i+=1){
  const li = document.createElement('li')
  // textContent : 텍스트 추가
  li.textContent = `list-${i+1}`

  if ((i+1)% 2==0){
  // addEventListener
  // 클릭('click')했을 경우 function 실행
  li.addEventListener('click',function(){
    console.log(li.textContent)
  })
  }
  // 페이지상에 추가된 list-${i+1} 보여주기
  ulEl.appendChild(li)
}