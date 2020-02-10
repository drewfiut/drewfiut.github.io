var start = new Date(2019, 8, 25);
start = start.getTime();

var today = new Date();
today = today.getTime() - start;

var target = new Date(2024, 6, 1);
target = target.getTime() - start;

var percent = today / target;

percent = percent * 100;

console.log(percent);

document.querySelector("#progress").style.width = percent.toString() + "%";