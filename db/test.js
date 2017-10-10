require('babel-polyfill');
var examSystemDB = require('./examSystemDB');

//查询所有
examSystemDB.getAllSubjects(1,1,3,1).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});