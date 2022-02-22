# 06. 조건문 If Else

### 6.1. 조건문(If statement)

#### 6.1.1 random 함수

```js
// random한 정수를 반환
// export이기 때문에 외부의 함수
export default function random(){
  return return Math.floor(Math.random()*10)
}

```

#### 6.1.2 외부의 random 함수 가져오기

```js
import random from "./getRandom";

console.log(random())
```

#### 6.1.3 if & else문 사용하기

```js
import random from "./getRandom";
console.log(random())
const a = random()
if (a===0){
  console.log('a is 0')
} else {
  console.log('rest.....')
}
```

#### 6.1.4 if & elif문 사용하기

```js
if (a===0){
  console.log('a is 0')
} else if (a===2) {
  console.log('a is 2')
} else {
  console.log('rest....')
}
```