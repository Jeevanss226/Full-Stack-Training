$(document).ready(function(){

function addTask(){

let task=$("#taskInput").val().trim();

if(task===""){
alert("Please enter a task");
return;
}

$("#taskList").append(
"<li>"+task+" <span class='delete'>X</span></li>"
);

$("#taskInput").val("");

}

$("#addTask").click(addTask);

$("#taskInput").keypress(function(e){
if(e.which==13){
addTask();
}
});

$("#taskList").on("click","li",function(){
$(this).toggleClass("completed");
});

$("#taskList").on("click",".delete",function(e){
e.stopPropagation();
$(this).parent().remove();
});

$("#all").click(function(){
$("li").show();
});

$("#completed").click(function(){
$("li").hide();
$("li.completed").show();
});

$("#pending").click(function(){
$("li").show();
$("li.completed").hide();
});

$("#themeToggle").click(function(){
$("body").toggleClass("dark");
});

});