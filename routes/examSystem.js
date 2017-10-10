let express = require('express');
let route = express.Router();
let examSystemDB = require('../db/examSystemDB');

//1.查询所有SubjectType
route.get('/getAllSubjectType',(req,resp)=>{
	examSystemDB.getAllSubjectType().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
})
//2.查询所有SubjectLevel
route.get('/getAllSubjectLevel',(req,resp)=>{
	examSystemDB.getAllSubjectLevel().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
})
//3.查询所有Departmentes
route.get('/getAllDepartmentes',(req,resp)=>{
	examSystemDB.getAllDepartmentes().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
})
//4.查询所有Topics
route.get('/getAllTopics',(req,resp)=>{
	examSystemDB.getAllTopics().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
})
//5.根据id获取该方向上的所有知识点
route.get('/getDepartmentTopics',(req,resp)=>{
	examSystemDB.getDepartmentTopics(req.query.id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
})
//6.保存题目信息
route.post('/saveSubject',(req,resp)=>{
	examSystemDB.saveSubject(req.query.id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
})
//7.查询所有题目信息
route.get('/getAllSubjects',(req,resp)=>{
	examSystemDB.getAllSubjects(req.query.department_id,req.query.subjectLevel_id,req.query.subjectType_id,req.query.topic_id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});

})
//8.更新题目审核状态
route.get('/updateSubjectState',(req,resp)=>{
	examSystemDB.updateSubjectState(req.query.checkState,req.query.id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});

})
module.exports = route;