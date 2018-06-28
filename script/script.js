jQuery(document).ready(function($) {

  function supp() {
    $(".remove").click(function(event) {
      $(this).parents('li').remove();
    });
  }


supp()

$(".addTask").click(function(event) {
var task = $(".newTask").val()
console.log(task);
$("<li class='toDo'>" + task + "<i class='remove'> ✖</i>" + "</li>").appendTo('.TaskToDo')
supp()
});




});


var el = document.getElementById('items');
var sortable = Sortable.create(el);
