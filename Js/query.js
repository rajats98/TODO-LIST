$("#plus").on("click",function() {
	$("#newTodo").slideToggle(300);
});

$("#newTodo").keypress(function(key){
	if(key.which===13 && $(this).val()!="")
	{
		
	}
});