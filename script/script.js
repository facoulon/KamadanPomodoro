jQuery(document).ready(function($) {


$(".addTask").click(function(event) {
var task = $(".newTask").val()
console.log(task);
$("<li class=toDo>" + task + "<i class=remove> ✖</i>" + "</li>").appendTo('.TaskToDo')
});


$(".remove").click(function(event) {
  $(this).parents('li').remove();
});


});


var el = document.getElementById('items');
var sortable = Sortable.create(el);
