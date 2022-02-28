# 02. this

### 2.1. 일반(Normal)

- 일반 함수는 호출 위치에 따라서 this를 정의한다. 

```js
// this
// 일반(Normal) 함수는 호출 위치에 따라서 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

const tk = {
  name : 'tk',
  normal : function(){
    console.log(this.name)
  },
  arrow:()=>{
    console.log(this.name)
  }
}
tk.normal()   // tk
tk.arrow()    // undefined

const amy={
  name:'Amy',
  normal:tk.normal, // ()를 통해서 호출을 하고 있지 않기 때문에,
  arrow:tk.arrow
}

amy.normal()  // Amy
amy.arrow() // undefined
```
#### 2.1.1. prototype 을 활용

```js
function User(name){
  this.name = name
}
User.prototype.normal = function(){
  console.log(this.name)
}

User.prototype.arrow = ()=>{
  console.log(this.name)
}

const tk = new User('tk')

tk.normal() // tk
tk.arrow()  // undefined
```


### 2.2. 화살표(Arrow)

- 화살표 함수는 자신이 선언된 함수 범위에서 this를 정의한다. 
- 위의 예시에서 arrow()라는 메소드가 출력이 되기 위해서는 아래와 같이 작성한다.

#### 2.2.1. 일반 함수를 사용했을 때

```js
const timer={
  name:'tk',
  timeout:function(){
    // setTimeout(함수, 시간)
    setTimeout(function(){
      console.log(this.name) // 지정되지 않은 값이 출력
    }, 2000);
  }
}
timer.timeout()

```
#### 2.2.2. 화살표 함수를 사용했을 때
```js
const timer={
  name:'tk',
  timeout:function(){
    // setTimeout(함수, 시간)
    setTimeout(()=>{
      console.log(this.name) // tk
    }, 2000);
  }
}
timer.timeout()

```
- 하나의 화살표 함수를 감싸고 있는 추가적인 함수범위가 있을 경우에 그 함수범위에서 this가 정의된다. 
- 여기서는 `setTimeout`을 감싸고있는 추가적인 함수는 `timeout`이고 그 함수 범위안에 `this`는 `timer`라는 변수의 `name`에 해당하기 때문에,
` **tk** 가 출력이 된다. 