var pool = require('./pool');

module.exports = {
	//1.查询所有getAllSubjectType（获取所有的题目类型）
	getAllSubjectType(){
		var sql = "select * from tbl_exam_subjecttype";
		return pool.execute(sql);
		console.log(pool.execute(sql));
	},
	//2.查询所有getAllSubjectLevel（获取所有的题目难度级别）
	getAllSubjectLevel(){
		var sql = "select * from tbl_exam_subjectlevel";
		return pool.execute(sql);
		console.log(pool.execute(sql));
	},
	//3.查询所有getAllDepartmentes（获取所有的方向）
	getAllDepartmentes(){
		var sql = "select * from tbl_exam_epartment";
		return pool.execute(sql);
		console.log(pool.execute(sql));
	},
	//4.查询所有getAllTopics（获取所有的知识点）
	getAllTopics(){
		var sql = "select * from tbl_exam_topic";
		return pool.execute(sql);
		console.log(pool.execute(sql));
	},
	//5.根据方向id获取该方向下的所有知识点getDepartmentTopics
	getDepartmentTopics(id){
		var sql = "select * from tbl_exam_topic where id="+id;
		return pool.execute(sql);
		console.log(pool.execute(sql));
	},
	//6.保存题目信息
	saveSubject(){
		var sql;
		console.log(pool.execute(sql));
	},
	//7.通过id查询题目信息
	getAllSubjects(department_id,subjectLevel_id,subjectType_id,topic_id){
		var sql = "select stem from tbl_exam_subject where department_id ="+department_id+ " and subjectLevel_id ="+subjectLevel_id+ " and subjectType_id ="+subjectType_id+ " and topic_id ="+topic_id;
		return pool.execute(sql);
		console.log(pool.execute(sql));
	},
	updateSubjectState(checkState,id){
	    // console.log(typeof checkState);
	    // var sql = 'update tbl_exam_subject set checkState='+checkState+' where id = '+id+'';
	    var sql = "update tbl_exam_subject set checkState='"+checkState+"' where id = "+id;
	    console.log(sql);
	    return pool.execute(sql);
	}

}
