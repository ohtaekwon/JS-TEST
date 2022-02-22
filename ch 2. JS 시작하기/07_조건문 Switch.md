# 07. 조건문 Switch

### 7.1. 조건문(Switch statement)

- Switch문은 분기로 조건식이 딱 나눠질때 쓰기에 적합하다.

#### 7.1.1 Switch & case

```js
// 조건문 (Switch statement)
// 외부 함수 가져오기
import random from "./getRandom";
// 변수에 외부 함수의 값 할당
const a = random()

// Switch 문
switch (a){
  // a===0 인 경우
  case 0:
    console.log('a is 0')
  // a===2 인 경우
  case 2:
    console.log('a is 2')
  // a===4 인 경우
  case 4:
    console.log('a is 4')
}
```

#### 7.1.2 break문

- `break`문을 쓰지 않으면 계속 진행된다.

```js
// 조건문 (Switch statement)
// 외부 함수 가져오기
import random from "./getRandom";
// 변수에 외부 함수의 값 할당
const a = random()

// Switch 문
switch (a){
  // a===0 인 경우
  case 0:
    console.log('a is 0')
    break
  // a===2 인 경우
  case 2:
    console.log('a is 2')
    break
  // a===4 인 경우
  case 4:
    console.log('a is 4')
    break
}
```

#### 7.1.3 default 문

- `default`문을 쓰면 if문의 else와 같은 기능을 한다.

```js
// Switch 문
switch (a){
  // a===0 인 경우
  case 0:
    console.log('a is 0')
    break
  // a===2 인 경우
  case 2:
    console.log('a is 2')
    break
  // a===4 인 경우
  case 4:
    console.log('a is 4')
    break
  // case가 전부 해당이 안 될 경우
  default:
    console.log('rest...')
}
```