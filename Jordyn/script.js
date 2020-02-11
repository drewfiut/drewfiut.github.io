document.querySelector("#progress").style.width = percentCompleted() + "%";

function percentCompleted(){
	var start = new Date(2019, 9, 2).getTime();
	var today = new Date();
	today = today.getTime() - start;
	var target = new Date(2024, 6, 1);
	target = target.getTime() - start;
	var percent = today / target;
	percent = percent * 100;
	return percent.toString();
}