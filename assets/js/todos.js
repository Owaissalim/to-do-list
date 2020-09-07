//	check off specific todos by clicking
// $("li").click(function(){
// 	// if($(this).css("color") === "rgb(128, 128, 128)") {
// 	// 	$(this).css({
// 	// 		color: "black",
// 	// 		textDecoration: "none"
// 	// 	});
// 	// }
// 	// else {
// 	// 	$(this).css({
// 	// 	color: "gray",
// 	// 	textDecoration: "line-through"
// 	// });
// 	// }

// 	//above commented code or just this one line below :P
// 	$(this).toggleClass("completed");
// });

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//	click on X to delete Todo
$("ul").on("click", "span", function(event){
	// $(this).parent().remove();
	// $(this).parent().fadeOut();
	$(this).parent().fadeOut(500, function(){
		$("this").remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
		$(this).val("");
	}
});

$(".fa-user-edit").click(function(){
	$("input[type='text']").fadeToggle();
});