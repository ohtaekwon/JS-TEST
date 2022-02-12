import _ from 'lodash' // From node_modules
import checkType from './getType' // getType.js
// import {random, user as heropy} from './getRandom'  // getRandom.js
import * as R from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(checkType([1,2,3]))
// console.log(random(), random())
// console.log(heropy)
console.log(R)
console.log(R.user)
console.log(R.default)