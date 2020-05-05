var a = -600;
var b = 0;
$(".sign-off").click(function(){
	a += 100;
	b += 17;
	if (b > 100) {
		b = 100;
	}
	$(this).prop( "disabled", true );
	$(this).val('Виконано');
	$('.lineo').css({
		'left': a
	});
	for(let i = 0; i <= b; i++){
		$('.number').html(i + "%");
	}
});
var c = -600;
var d = 0;
$(".sign-offf").click(function(){
	c += 100;
	d += 17;
	if (d > 100) {
		d = 100;
	}
	$(this).prop( "disabled", true );
	$(this).val('Виконано');
	$('.lineoo').css({
		'left': c
	});
	for(let i = 0; i <= d; i++){
		$('.numberr').html(i + "%");
	}
});
$(".nazar").click(function(){
	$(".valeria-block").css({
		'display': 'none'
	});
	$(".nazar-block").css({
		'display': 'flex'
	});
	$(".numberr").css({
		'display': 'none'
	});
	$(".number").css({
		'display': 'block'
	});
	$(".linee").css({
		'display': 'none'
	});
	$(".line").css({
		'display': 'block'
	});
});
$(".valeria").click(function(){
	$(".nazar-block").css({
		'display': 'none'
	});
	$(".valeria-block").css({
		'display': 'flex'
	});
	$(".number").css({
		'display': 'none'
	});
	$(".numberr").css({
		'display': 'block'
	});
	$(".line").css({
		'display': 'none'
	});
	$(".linee").css({
		'display': 'block'
	});
});
$('.bgc-button').click(function(){
	$('.bgc').css({
		'display': 'none'
	});
});