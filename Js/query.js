$("#plus").click(function() {
	$("input").fadeToggle();
});

$("#newTodo").keypress(function(key){
	if(key.which===13 && $(this).val()!="")
	{

		$('ul').append("<li><span class=\"trash\" ><i class=\"far fa-trash-alt\"></i></span>"+$(this).val()+"</li>")
		$(this).val("");
	}
});

$(".listContainer").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

	event.stopPropagation();

});

$("div").on("click","li",function(){
	$(this).toggleClass("done");

});

$('p').on("mouseenter",function(){
	$(this).parent().find('i').css("display","inline-block");
});