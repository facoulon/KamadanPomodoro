jQuery(document).ready(function($) {


$(".addTask").click(function(event) {
    var task = $(".newTask").val()
$("<li>" + task +"</li>").appendTo('.TaskToDo')



});
















});
