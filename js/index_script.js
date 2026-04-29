let sand_interval;
let fire_interval;
let red_interval;
let light_interval;
let t_id;
let last_t_id = 0;
let current_eye_animation;
let index_is_animating = false;

let dpx = 70;
let dpy = 55; 
let drop_animation_flag = false;
function drop_animate(){
	let a = Math.random()*2*Math.PI;
	let dpx1 = 50 + 35*Math.cos(a);
	let dpy1 = 50 + 30*Math.sin(a);
	let speed = Math.ceil(Math.sqrt((dpx1 - dpx)*(dpx1 - dpx) + (dpy1 - dpy)*(dpy1 - dpy)))*50;
	$('.lens_drop').animate({
		left: dpx1+"%",
		top: dpy1+"%"
	},speed, "linear", function(){
		dpx = dpx1;
		dpy = dpy1;
		if(drop_animation_flag){
			drop_animate();
		}
	})	
}
function remove_eye_animations(){
	index_is_animating = false;
	switch(current_eye_animation){
		case "1":
			$('.eye_mask_fire').stop();
			$('.eye_mask_fire').fadeTo(1000, 0);
			$('.nasa_particles').removeClass('active').fadeTo(1000, 0);
			pJSDom[0].pJS.particles.move.enable = false;
			break;
		case "2":
			t_id = setTimeout(function(){},1);
			$('.eye_mask_sand').stop();
			$('.eye_mask_sand').fadeTo(1000, 0);
			clearInterval(sand_interval);
			$('.eye_particle').remove();
			while(t_id>=last_t_id){
				clearTimeout(t_id);
				t_id--;
			}
			last_t_id=t_id;
			break;
		case "3":
			t_id = setTimeout(function(){},1);
			$('.eye_mask_red, .eye_mask_red1, .eye_mask_red2, .eye_mask_red3, .eye_mask_red4').stop();
			$('.eye_mask_red, .eye_mask_red1, .eye_mask_red2, .eye_mask_red3, .eye_mask_red4').fadeTo(1000, 0);
			clearInterval(red_interval);
			while(t_id>=last_t_id){
				clearTimeout(t_id);
				t_id--;
			}
			last_t_id=t_id;
			break;
		case "4":
			t_id = setTimeout(function(){},1);
			clearInterval(light_interval);
			$('.eye_mask_light').stop().fadeTo(1500, 0);
			setTimeout(function(){
				$('.eye_eye_light').stop().fadeTo(1000, 0);
			},500);
			while(t_id>=last_t_id){
				clearTimeout(t_id);
				t_id--;
			}
			last_t_id=t_id;
			break;
		case "5":
			$('.eye_image').addClass('unBlur_animate');
			setTimeout(function(){
				$('.eye_image').removeClass('unBlur_animate blur_animate');
			}, 1100);
			break;
		case "6":
			$('.eye_tears1_holder, .eye_tears2_holder, .eye_tears3_holder, .eye_single_tears_holer').stop().removeClass('active').fadeTo(2000, 0);
			break;
		case "7":
			t_id = setTimeout(function(){},1);
			$('.lens_particles').removeClass('active').fadeTo(1000, 0);
			pJSDom[1].pJS.particles.move.enable = false;
			$('.lens_drop').fadeTo(500, 0);
			drop_animation_flag =false;
			$('.eye_mask_lens_holder').fadeTo(1000, 0);
			setTimeout(function(){
				$('.eye_mask_lens_-right, .eye_mask_lens_-left, .eye_mask_lens_-centr, .eye_mask_lens_wave-centr').stop();
				$('.eye_mask_lens_-right, .eye_mask_lens_-left, .eye_mask_lens_-centr, .eye_mask_lens_wave-centr').removeClass('active');
			},1000);
			while(t_id>=last_t_id){
				clearTimeout(t_id);
				t_id--;
			}
			last_t_id=t_id;
			break;
	}
	
	$('.eye_section_bottom').removeClass('active');
	$('.eye_section_simptom_title').html(`Які симптоми вас турбують? <br>Оберіть свій для підбору крапель для ваших очей.`);
	$('.menu_section').removeClass('active');
	$('html').removeClass('hide_overflow');
	$('.eye_title_holder, .eye_lines').fadeIn(1000);
}

function add_eye_animation(n, text){
	if (index_is_animating == true) {
		return;
	}
	index_is_animating = true;
	current_eye_animation = n;
	$('.eye_section_simptom_title').text(text).addClass('active');
	$('.eye_section_bottom').addClass('active');
	$('.eye_title_holder, .eye_lines').fadeOut(500);
	switch(n){
		case "1":
			pJSDom[0].pJS.particles.move.enable = true;
			pJSDom[0].pJS.fn.particlesRefresh();
			$('.eye_mask_fire').fadeTo(3000, 1);
			$('.nasa_particles').addClass('active').fadeTo(2000, 1);
			break;
		case "2":
			$('.eye_mask_sand').fadeTo(3000, 1);
			for(let i=0; i<50; i++){
				let l, t;
				t = Math.random()*100
				if(i%2 == 0){
					l = Math.random()*25;
				}else{
					l = 75 + Math.random()*25;
				}
				$('.eye_particles_holder').append(`<div class="eye_particle" style="left:`+l+`%;top:`+t+`%; opacity:0"></div>`);
			}
			setTimeout(function(){
				$('.eye_particle').slice(-51).css({left: "50%", top: "50%", opacity: 1});
			},100);
			setTimeout(function(){
				$('.eye_particle').slice(0, 50).css('opacity', '0');
			},10000);
			setTimeout(function(){
				$('.eye_particle').slice(0, 50).remove();
			},12000);
			sand_interval = setInterval(function(){
				for(let i=0; i<50; i++){
					t = Math.random()*100
					if(i%2 == 0){
						l = Math.random()*25;
					}else{
						l = 75 + Math.random()*25;
					}
					$('.eye_particles_holder').append(`<div class="eye_particle" style="left:`+l+`%;top:`+t+`%; opacity:0"></div>`);
				}
				setTimeout(function(){
					$('.eye_particle').slice(-51).css({left: "50%", top: "50%", opacity: 1});
				},100);
				setTimeout(function(){
					$('.eye_particle').slice(0, 50).css('opacity', '0');
				},10000);
				setTimeout(function(){
					$('.eye_particle').slice(0, 50).remove();
				},12000);
			}, 3000);	
			break;
		case "3":
			$('.eye_mask_red').fadeTo(2000, 1); 
			setTimeout(function(){$('.eye_mask_red1, .eye_mask_red3').fadeTo(300, 1).addClass('active')},1500);
			setTimeout(function(){$('.eye_mask_red2, .eye_mask_red4').fadeTo(300, 1).addClass('active')},1600);
			setTimeout(function(){$('.eye_mask_red, .eye_mask_red1, .eye_mask_red2, .eye_mask_red3, .eye_mask_red4').fadeTo(1000, 0).removeClass('active')},5000);
			red_interval = setInterval(function(){
				$('.eye_mask_red').fadeTo(2000, 1);
				setTimeout(function(){$('.eye_mask_red1, .eye_mask_red3').fadeTo(300, 1).addClass('active')},1500);
				setTimeout(function(){$('.eye_mask_red2, .eye_mask_red4').fadeTo(300, 1).addClass('active')},1600);
				setTimeout(function(){$('.eye_mask_red, .eye_mask_red1, .eye_mask_red2, .eye_mask_red3, .eye_mask_red4').fadeTo(1000, 0).removeClass('active')},5000);
			},6000);
			break;
		case "4":
			$('.eye_mask_light').fadeTo(2000, 1);
			setTimeout(function(){
				$('.eye_eye_light').fadeTo(2000, 1);
			},500);
			setTimeout(function(){
				$('.eye_mask_light').fadeTo(1500, 0);
				setTimeout(function(){
					$('.eye_eye_light').fadeTo(1000, 0);
				},500);
			}, 3000)

			light_interval = setInterval(function(){
				$('.eye_mask_light').fadeTo(2000, 1);
				setTimeout(function(){
					$('.eye_eye_light').fadeTo(2000, 1);
				},500);
				setTimeout(function(){
					$('.eye_mask_light').fadeTo(1500, 0);
					setTimeout(function(){
						$('.eye_eye_light').fadeTo(1000, 0);
					},500);
				}, 3000)
			}, 5000)
			
			break;
		case "5":
			$('.eye_image').addClass('blur_animate');	
			break;
		case "6":
			$('.eye_tears1_holder, .eye_tears2_holder, .eye_tears3_holder').stop().addClass('active').fadeTo(2000, 1);
			setTimeout(function(){
				$('.eye_single_tears_holer').stop().addClass('active').fadeTo(1000, 1);;
			}, 700);	
			break;
		case "7":
			$('.eye_mask_lens_holder').fadeTo(1000, 1);
			setTimeout(function(){
				$('.eye_mask_lens_-right, .eye_mask_lens_-left').addClass('active');
				pJSDom[1].pJS.particles.move.enable = true;
				pJSDom[1].pJS.fn.particlesRefresh();
				$('.lens_particles').addClass('active').fadeTo(2000, 1);
			},1000);
			setTimeout(function(){
				$('.eye_mask_lens_-centr').addClass('active');
			},2000);
			setTimeout(function(){
				$('.lens_drop').fadeTo(500, 1);
				drop_animation_flag = true;
				drop_animate();
				$('.eye_mask_lens_wave-centr').addClass('active');
			},2800);
			break;
	}
}











function init_index() {
	// let prev_osdi = false;
	// if(referrer_url.includes('slyoza') || referrer_url.includes('local')){
	// 	prev_osdi = true;
	// }
	// if(!localStorage.getItem("index_shown") && !prev_osdi){
		$('.index_bottom_banner').addClass('active');
	// 	localStorage.setItem("index_shown", 0);
	// }else if(localStorage.getItem("index_shown")<1 && !prev_osdi){
	// 	$('.index_bottom_banner').addClass('active');
	// 	localStorage.setItem("index_shown", parseInt(localStorage.getItem("index_shown"))+1);
	// }else{
	// 	$('.index_bottom_banner').fadeOut(1);
	// }
	$('.eye_section_simptom_title_text').addClass('slide_in_left');
	$('.eye_section_simptom_title_text.t2').addClass('slide_in_right');
  	setTimeout(function(){
		$('.index_bottom_banner').removeClass('active');
	}, 10000);

	$('.index_link, .eye_simptom_back_btn').click(function(){
		if(document.querySelector(".eye_section")){
			remove_eye_animations();
		}
	});

	particlesJS.load('particles-js', '/js/particlesjs-config.json');
	particlesJS.load('particles-js1', '/js/particlesjs-config1.json');
	setTimeout(function(){
		pJSDom[0].pJS.particles.move.enable = false;
		pJSDom[1].pJS.particles.move.enable = false;
	}, 1000);
	
	$('main').click(function(){
		$('.index_bottom_banner').removeClass('active');
	})
	$('.eye_title').click(function(){
		add_eye_animation($(this).attr('index'), $(this).text());
	})

	$('.eye_simptom_more_info_btn').click(function(){
		$('.scroll_top_btn').fadeOut(500);
		$('body, html').css({overflow: "hidden"});
		$('.popUp_body[index="'+current_eye_animation+'"]').addClass('active');
		$('.eye_simptoms_popUp').css('visibility', 'visible');
		$('.eye_simptoms_popUp').animate({opacity: 1}, 500);
		$('nav').css("top", "-75px");
	})
	$('.eye_section_m_symptom_holder').click(function(){
		$('body, html').css({overflow: "hidden"});
		$('.scroll_top_btn').fadeOut(500);
		$('.popUp_body[index="'+$(this).attr('index')+'"]').addClass('active');
		$('.eye_simptoms_popUp').css('visibility', 'visible');
		$('.eye_simptoms_popUp').animate({opacity: 1}, 500);
		$('nav').css("top", "-75px");
	})
 
	$('.eye_popUp_back_btn').click(function(){
		$('body, html').css("overflow", "unset");
		$('.eye_simptoms_popUp').animate({opacity: 0}, 500);
		$('nav').css("top", "0");
		setTimeout(function(){
				
			$('.eye_simptoms_popUp').css('visibility', 'hidden');
			$('.popUp_body').removeClass('active');
		}, 500)
		
	})
};