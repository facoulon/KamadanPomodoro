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

var clock = $('h1').FlipClock( 1500, {
    clockFace: 'MinuteCounter',
    onInterval: function(){
      // $(".toDo").unshift()
      console.log(this.getFaceValue());
      if(this.getFaceValue() == 0){
        console.log($(".toDo")[0]);
      $(".done").append($(".toDo")[0]);
      clock.stop()
      clock.setFaceValue(0)

      }
    }
});

clock.setCountdown(true);

$("#start").click(function(event){
    clock.start()
})
$("#stop").click(function(event){
    clock.stop()
})
$("#reset").click(function(){
    clock.reset();
  })

  // if ($(".inn")>.val)

});

var el = document.getElementById('items');
var sortable = Sortable.create(el);
