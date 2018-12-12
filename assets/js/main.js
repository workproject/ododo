$(document).ready(function(){
	
	
	$('.mh').matchHeight();
	$('.moretext').click(function(e){
		e.preventDefault();
		$(this).hide();
		$(".gradtext").removeClass("active");
	});
	$('.moretextdouble').click(function(e){
		e.preventDefault();
		$(this).hide();
		$(".graddoubletext").removeClass("active");
	});
	
	$('.likes').raty();
	
	
	$(".besttestom i").click(function (e){
		e.preventDefault();
		$(".besttestom").toggleClass("active");
	});
		$(".ontop").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
	$(".allprop").click(function (){
			$("body,html").animate({
				scrollTop: $("#detailbl").offset().top
			}, 800);
			return false;
		});
	 

		var $countChangerBtn = $('.korz_count .minus, .korz_count .plus');
		$countChangerBtn.on('click', function(){
			var $this = $(this),
				count = parseInt($this.parent().find('input').val()),
				min = $this.data('min'),
				max = $this.data('max');

			if (!count){
				count=0;
			}

			if ($this.hasClass('minus')){
				count--;
				if (count < min){
					return;
				}
				$this.parent().find('input').val(count);
			} else {
				count++;
				if (count > max){
					return;
				}
				$this.parent().find('input').val(count);
			}
		});
	
	
			$('.slider-for').on('init', function(event, slick, direction){
										  console.log(slick);
										  $('.slider-for .slick-slide').matchHeight();
										  // left
										});
	$('.mobile-menu').click(function(){
		$('.shild-men').stop().animate({left: "0"}, 500);
	})
	
	$('.close-m').click(function(){
		$('.shild-men').stop().animate({left: "-200%"}, 500);
	})

	$('.tab').click(function(){
		var id = $(this).attr('data-id');

		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.wr-tab').css('display', 'none');
		$('#' + id).fadeIn(200);
	})

	$('.tels input').inputmask('+79999999999');

	$('.ears-is .year').click(function(){
		$('.year').removeClass('active');
		$(this).addClass('active');
	})

	$('.tabs-is a').click(function(e){
		var idT = $(this).attr('data-str');
		$('.tabs-is a').removeClass('active');
		$(this).addClass('active');
		$('.pag').css('display', 'none');
		$('#strs' + idT).fadeIn(200);
		return false;
	})

	$('.tb .tab').click(function(){
		var idT = $(this).attr('data-id');
		$('.tb tab').removeClass('active');
		$(this).addClass('active');
		$('.pgh').css('display', 'none');
		$('#' + idT).fadeIn(200);
		return false;
	})

	$('.item-w ').click(function(){
		var idT = $(this).attr('data-dost');
		$('.item-w').removeClass('active');
		$(this).addClass('active');
		$('.it-pg').css('display', 'none');
		$('#' + idT).fadeIn(200);
		if( idT === 'pagd3' ) {
			$('.spx .vip-t').css('display', 'none');
			$('.pg3').css('display', 'block');
		}
		else {
			$('.spx .vip-t').css('display', 'flex');
			$('.pg3').css('display', 'none');
		}
		return false;
	})

	$(document).on('click', '.cl', function(){
		var id = $(this).parent().attr('id');
		$('#' + id).css('display', 'none');
		$('#ol1').fadeIn(200);
	})

	$('.item-w2 ').click(function(){
		var idT = $(this).attr('data-dost');
		$('.item-w2').removeClass('active');
		$(this).addClass('active');
		$('.it-pg2').css('display', 'none');
		$('#' + idT).fadeIn(200);
		return false;
	})

	$('.bh').click(function(){
		$('.tgl').toggle();
	})


	$('.catalog li').click(function(){
		if( $(this).hasClass('act-c') ) $(this).removeClass('act-c');
		else $(this).addClass('act-c');
		$(this).find('ul').toggle();
	})

	$('.help li:nth-child(2) a').addClass('act-u');

	$(document).on('click', '.sam-t', function(){
		$('#ol2').css('display', 'flex');
		$('#ol1').css('display', 'none');
		return false;
	})

	$('.cat-b').click(function(){
		var dt = $(this).attr('href');
		$('.new-c .owl-carousel').hide();
		$('.s' + dt).show();
		return false;
	})

	$('.ear').click(function(){
		fastView($(this));

		return false;
	})

	$('.cc,.btn-cc').click(function(){
		add_el_cart($(this));
		return false;
	})
	
		preload();

		$('.dropdown .li').hover(function(){
			
			$(this).parent().parent().find('.back_menu').attr('src',$(this).data('img'));
		},function(){
			$(this).parent().parent().find('.back_menu').attr('src',$(this).parent().parent().find('.back_menu').data('img'));
		});


})

	var preload_end=false;
	var pre_img=0;
	var array_img = new Array('/assets/img/svd.png');
	var all_img=array_img.length;

function preload () {
	for (var key in array_img){
		var i = new Image();
		i.onload = function(){
			pre_img++;
			if (all_img<=pre_img) {
				preload_end=true;
			}
		}
		i.src=array_img[key];
	}
}

var reti=true;
function add_el_cart(th){
var data={img:'assets/img/sld-m8.jpg',name:'Игрушка - сердитые птички',MESSAGE:'Товар успешно добавлен в корзину'}
if(reti){
//показываем окно с продолжением покупок
popup_frame="<div id='ekran_block'><div class='popup_frame frame_ok'>";
	popup_frame+="<div class='close_popup_frame' onclick='close_popup()'></div>";
	popup_frame+="<div class='popup_frame_img' style='background-image: url("+"\""+data.img+"\")'></div>";
	popup_frame+="<div class='popup_frame_elname'>"+data.name+"</div>";
	popup_frame+="<div class='popup_frame_text'>"+data.MESSAGE+"</div>";
	popup_frame+="<div class='popup_frame_cont' onclick='close_popup()'>продолжить покупки</div>";
	popup_frame+="<a href='korzina.html' class='popup_frame_cart'>перейти в корзину</a>";
	popup_frame+="</div></div>";
	$("body").append(popup_frame);
	reti=false;
}
else {
	data.MESSAGE="Не удалось добавить товар в корзину";
// показываем окно ошибки
	popup_frame="<div id='ekran_block'><div class='popup_frame frame_err'>";
	popup_frame+="<div class='close_popup_frame' onclick='close_popup()'></div>";
	popup_frame+="<div class='popup_frame_title'>Ошибка</div>";
	popup_frame+="<div class='popup_frame_text'>"+data.MESSAGE+"</div>";
	popup_frame+="<div class='popup_frame_closebutton' onclick='close_popup()'>закрыть</div>";
	popup_frame+="</div></div>";
	$("body").append(popup_frame);
	reti=true;
}



}

function close_popup(){
	$("#ekran_block").remove();
}

function fastView(th){
	$.fancybox.open(
	[{
		src: 'pop.html',
		type:'ajax',
		touch:false,
		afterShow : function( instance, current ) {
			if ($('.slider-nav').length){

				$('.slider-for').on('init', function(event, slick){
					$('.slider-for .ex1').zoom();
				});

				$('.slider-for').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: false,
					arrows: true,
					asNavFor: '.slider-nav',
					infinite: false
				});

				$('.slider-nav').slick({
					slidesToShow: 6,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					infinite: false,		
					asNavFor: '.slider-for',
					focusOnSelect: true,
		
					responsive: [
						{
							breakpoint: 768,
							settings: {
	        					slidesToShow: 3
	        				}
						}
					]
				});

				$('.slider-for')[0].slick.refresh();
			}
		}
	}]
	)
	return false;
}


$.fn.hasAttr = function(name) {
		return this.attr(name) !== undefined;
	};

$(document).ready(function(){
	if ($(".stars").length){
	$(".stars").each(function(index){
	var raiting=40;
	if ($(this).hasAttr("data-raiting")) raiting=$(this).data("raiting");
	$(this).append("<div class='full' style='width:"+raiting+"%;'></div>");
	});	
	}
	if ($(".select_box").length){
	$(".select_box").selectbox();
	}
	
		
	$('.iz').click(function(){
		$(this).toggleClass("is_active");
	})

	$('.close-m2').click(function(){
		$(this).parent().fadeOut(500, function(){$(this).remove()});
	})
	
})

// Обработка формы регистрации
$(document).ready(function(){
	var $registerBtn = $('#registerBtn');

	if (!$registerBtn.length){
		return;
	}

	var $form = $('.registration-wrp form'),
		$inputTel = $form.find('input[name="tel"]'),
		$requiredInputs = $form.find('.required + input'),
		$inputPass = $form.find('input[name="pass"]'),
		$inputPass2 = $form.find('input[name="pass2"]'),
		b_errorFlag = false;

	// Наложение маски
	$inputTel.inputmask('+79999999999');

	$registerBtn.on('click', function(){
		// Сохраняем кнопку в переменную
		var $this = $(this);

		// Сбрасываем информацию о старых ошибках
		$('.error').removeClass('error');
		b_errorFlag = false;

		// Проверяем все обязательные поля.
		// Если хоть одно пустое, то ставим флаг ошибки
		$requiredInputs.each(function(index, el){
			if (!$(el).val()){
				$(el).addClass('error');
				b_errorFlag = true;
			}
		});

		if(b_errorFlag){
			return;
		}

		// Сравниваем пароли
		if ($inputPass.val() != $inputPass2.val()){
			$inputPass.addClass('error');
			$inputPass2.addClass('error');
			return;
		}

		// Запоминаем текст кнопки
		var state = $this.html();
		$.ajax({
            url: $form.attr('action'),
            method: "post",
            data: $form.serialize(),
            dataType: "json",
            beforeSend: function(){
            	// Дизейблим кнопку и меняем текст
                $this.html($this.data('wait')).prop('disable', true);
            },
            success: function(json){
            	if (json.error){
            		console.log('success');
            	};
            },
            error: function(xhr, ajaxOptions, thrownError) {
            	$this.html(state).prop('disable', false);
            	console.log(thrownError);
            }
        });
            
	});
});