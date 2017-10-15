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
route.get('/allSubject',(req,resp)=>{
	examSystemDB.allSubject(req.query.id).then((data)=>{
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
//9.显示题目选项
route.get('/getChoice',(req,resp)=>{
	examSystemDB.getChoice(req.query.subject_id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
})
//10.通过id删除题目
route.get('/deleteSubject',(req,resp)=>{
	examSystemDB.deleteSubject(req.query.id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
// 11.添加题目
route.get('/addSubject',(req,resp)=>{
	var typeId = req.query.subjectType_id;
	var	departmentId = req.query.department_id;
	var	levelId = req.query.subjectLevel_id;
	var	topicId = req.query.topic_id;
	var	stem = req.query.stem;
	var	analysis = req.query.analysis;
	var	answer = req.query.answer;	
	examSystemDB.addSubject(analysis,answer,stem,departmentId,levelId,typeId,topicId).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
// 12.添加答案
route.post('/addChoice',(req,resp)=>{
	// var content = req.query.content;
	// var correct = req.query.correct;
	// var subjectId = req.query.subject_id;
	var content = req.body['content[]'];
	var correct = req.body['correct[]'];
	var subjectId = req.body['subjectId'];
	examDB.addChoice(content,correct,subjectId).then((data)=>{
	// examSystemDB.addChoice(content,correct,subjectId).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
module.exports = route;