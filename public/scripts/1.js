
function initAnalizys (m1,m2){
	
	var startDate = new Date();
  one = $M(m1);
  other = $M(m2);
  two = one.multiply(other);
  var alltime=(new Date() - startDate) / 1000.0;
  
  console.log(alltime);
  ws.emit('taskFinished',JSON.stringify({taskid:_taskid,time:alltime}));
	
	
}

initAnalizys(m1, m2);