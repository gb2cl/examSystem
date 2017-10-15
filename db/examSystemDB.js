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
	//6.题目信息
	allSubject(){
		var sql = "select * from tbl_exam_subject";
		return pool.execute(sql);
		console.log(pool.execute(sql));
	},
	//7.通过id查询题目信息
	getAllSubjects(department_id,subjectLevel_id,subjectType_id,topic_id){
		var sql = "select * from tbl_exam_subject where department_id ="+department_id+ " and subjectLevel_id ="+subjectLevel_id+ " and subjectType_id ="+subjectType_id+ " and topic_id ="+topic_id;
		return pool.execute(sql);
		console.log(pool.execute(sql));
	},
	//8.更新题目状态
	updateSubjectState(checkState,id){
	    var sql = "update tbl_exam_subject set checkState='"+checkState+"' where id="+id;
	    console.log(sql);
	    return pool.execute(sql);
	},
	//9.显示题目选项
	getChoice(id){
		var sql = "select * from tbl_exam_choice where subject_id="+id;
		return pool.execute(sql);
		console.log(pool.execute(sql));
	},
	//10.通过ID删除题目
	deleteSubject(id){
		var sql = "delete from tbl_exam_subject where id="+id;
		return pool.execute(sql);
		console.log(pool.execute(sql));
	},
	//11.添加题目
	addSubject(analysis,answer,stem,department_id,subjectLevel_id,subjectType_id,topic_id){
		var sql = "insert into tbl_exam_subject values(null,'"+analysis+"','"+answer+"','未审核','"+stem+"',null,"+department_id+","+subjectLevel_id+","+subjectType_id+","+topic_id+",null)";
		return pool.execute(sql);
		console.log(pool.execute(sql));
	},
	// 12.添加答案
	addChoice(content,correct,subject_id){
		for(var i=0;i<content.length;i++){
			var sql = "insert into tbl_exam_choice values(null,'"+content[i]+"',"+correct+","+subject_id+")";
			return pool.execute(sql);
			console.log(pool.execute(sql));
		}
	}
}
