## 1. node js 사용방법

### 터미널

1. **npm init -y**
    - `package.json` 파일 생성

2. **npm install parcel-bundler --save-dev**
    - parcel-bundler는 개발하는 용도로만 사용할 것이기 때문에 뒤에 `--save-dev`를 추가한다. 
    - `--save-dev` 이것은 `-D`와 같다.
        - **npm install parcel-bundler -D**
3. `package.json` 파일로 이동
     - `"script"` 명령문에 `"test"`문을 삭제한 후 다음과 같이 작성.
     - **"DEV":"parcel index.html"**
        - 이 명령어는 local에 개발서버를 여는 명령어
     - **"build":"parcel build index.html"**
        - 이 명령어는 local의 개발서버를 여는 것이 아니고, 실제로 build된 결과물을 `dist`라는 폴더에 만든다.
4. `index.html`파일을 만든다.
    - `script` 파일과 연결
    - `main.js`

<br>


## 참고 사이트
---
#### - [ECMA스크립트](https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)