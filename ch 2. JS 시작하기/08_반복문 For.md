# 08. 반복문 For

### 8.1. 반복문(For statement)

#### 8.1.1 for문 

- for (시작조건; 종료조건; 변화조건) {}

```js
for (let i=0; i<3; i+=1){
  console.log(i)
}
// 0
// 1
// 2
```

#### 8.1.2 index문에서 예시 

```js
// index문에서 반복문 만들기
const ulEl = document.querySelector('ul')

for (let i=0; i<10; i+=1){
  const li = document.createElement('li')
  // textContent : 텍스트 추가
  li.textContent = `list-${i+1}`
  // 페이지상에 추가된 list-${i+1} 보여주기
  ulEl.appendChild(li)
}

```

#### 8.1.3 addEventListener

```js
const ulEl = document.querySelector('ul')

for (let i=0; i<10; i+=1){
  const li = document.createElement('li')
  li.textContent = `list-${i+1}`
  // addEventListener
  // 클릭('click')했을 경우 function 실행
  li.addEventListener('click',function(){
    console.log(li.textContent)
  })
  ulEl.appendChild(li)
}

```

#### 8.1.4 반복문에 if 조건문 활용

```js
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

```