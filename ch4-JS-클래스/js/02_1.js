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