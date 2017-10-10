let pool = require('./pool');

module.exports = {
	//查询所有
	findAll(){
		var sql = "select * from tbl_exam_topic";
		return pool.execute(sql);
	}
}