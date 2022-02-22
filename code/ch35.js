// Query(검색) String(문자데이터)
// 주소 ? 속성=값 & 속성=값 & 속성=값
// http://www.omdbapi.com/?apikey=[yourkey]& 에서 ?부터가 Query String이라고 할 수 있다.
// api 키 : 7035c60c

import axios from 'axios'

function fetchMovies(){
  axios
  .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then(res => {
    console.log(res)
    const h1El=document.querySelector('h1')
    const imgEl=document.querySelector('img')
    h1El.textContent = res.data.Search[0].Title
    imgEl.src=res.data.Search[0].Poster
  })
}

fetchMovies()