# 03. ES6 Classes

### 3.1. 일반 함수의 축약형

```js
// ES6 Classes

const tk = {
  name : 'tk',
  // 1.일반 함수
  normal:function(){
    console.log(this.name)
  },
  arrow:()=>{
    console.log(this.name)
  }
}
tk.normal()
tk.arrow()

```

- 여기서 `1. 일반함수` 부분은 축약형으로 줄일 수 있다.

```js
// ES6 Classes

const tk = {
  name : 'tk',
  // 1.일반 함수
  // 일반 함수를 사용할때 :과 function부분을 생략해도 된다.
  normal:function(){
    console.log(this.name)
  },
  arrow:()=>{
    console.log(this.name)
  }
}
tk.normal()
tk.arrow()
```

### 3.2. class 함수 사용

#### 3.2.1 constructor(){}

- 여기서 `constructor(){}` 이것은 `constructor: function(first, last){}` 와 같은 말이다. 

#### 3.2.2 기존의 함수형과 class 비교


```js
// ES6 Classes

// 기존의 함수형
function User(first,last){
  this.firstName = first,
  this.lastName = last
}
User.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

// class 함수형
class User{
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

const tk = new User('tk','oh')
const son = new User('hm','son')
const park = new User('js','park')
console.log(tk) // User {firstName: 'tk', lastName: 'oh'}
console.log(son.getFullName())  // hm son
console.log(park.getFullName()) // js park


```