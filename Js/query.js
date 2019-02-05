$("#plus").on("click",function() {
	$("#newTodo").slideToggle(300);
});

$("#newTodo").keypress(function(key){
	if(key.which===13 && $(this).val()!="")
	{
		 $('table').append("<tr class=\"entry\"> <td class=\"trash\"> <i class=\"far fa-trash-alt\" ></i> </td> <td class=\"todo\">"+this.value+"</td> </tr>");
		$(this).val("");
	}
});

$("table").on("click",".trash",function(){
	$(this).parent().remove();
});

$("table").on("click",".todo",function(){
	$(this).toggleClass("done");

});