function init_products() {
	$('.products_showAll_btn').click(function(){
		$('main').css('z-index', 10);
		$('.product_instruction_section').css('visibility', 'visible');
		$('.product_instruction_section').animate({opacity: 1}, 300);
	})
	$('.product_instruction_back_btn').click(function(){
		$('main').css("z-index", "");
		$('.product_instruction_section').animate({opacity: 0}, 300);
		setTimeout(function(){
			$('.product_instruction_section').css('visibility', 'hidden');
		}, 300);
	})

};