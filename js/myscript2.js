$(document).ready(function(){

	
//$(".owl-carousel").owlCarousel();

/*==================================
    05: Check Data
    ====================================*/
    var checkData = function (data, value) {
        return typeof data === 'undefined' ? value : data;
    };
	
/*==================================
06: Owl Carousel
====================================*/
var $owlCarousel = $('.owl-carousel');
$owlCarousel.each(function () {
	var $t = $(this);

	$t.owlCarousel({
		items: checkData($t.data('owl-items'), 1),
		margin: checkData($t.data('owl-margin'), 0),
		loop: checkData($t.data('owl-loop'), true),
		smartSpeed: 450,
		autoplay: checkData($t.data('owl-autoplay'), true),
		autoplayTimeout: checkData($t.data('owl-speed'), 5000),
		center: checkData($t.data('owl-center'), false),
		animateIn: checkData($t.data('owl-animate-in'), false),
		animateOut: checkData($t.data('owl-animate-out'), false),
		nav: checkData($t.data('owl-nav'), false),
		navText: ['<img src="assets/img/icons/angle-left.svg" class="svg">', '<img src="assets/img/icons/angle-right.svg" class="svg">'],
		dots: checkData($t.data('owl-dots'), false),
		responsive: checkData($t.data('owl-responsive'), {})
	});
});


	
//initialise datatime
$('.mydate').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian: 1,
		popup: {
		position: "bottom left",
		origin: "top left"
	}
});

	
/*collapse navigation on click*/
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});	
	
	
	
	
	
	
	 /*========================
    08: Video Popup
    ==========================*/
    var $popUpVideo = $('.popup-video');
    if ($popUpVideo.length) {
        $popUpVideo.magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
        });
    };
	
	
	//registration form
	$('#mSub').click(function(e){
		e.preventDefault(); 

		var dmName = $('#dmName').val();
		var dmPhone = $('#dmPhone').val();
		var dmemail = $('#dmEmail').val();
		var conDemo = $('#conDemo').val();
		var dmmode = $('#dmmode').val();
		var dmcourse = $('#dmcourse').val();
	//	var dmtime = $('#mydate').val();
		var error = false; 
alert (dmtime);
		if(dmName == ''){
			$('#dmName').css('border','1px solid #f00');
			error = true;
		}else{
			$('#dmName').css('border','1px solid #0f0');
		}
		
		if(dmPhone == '' || dmPhone.length >10 || dmPhone.length < 10){
			$('#dmPhone').css('border','1px solid #f00');
			error = true;
		}else{
			$('#dmPhone').css('border','1px solid #0f0');
		}

		if(dmemail == '' || dmemail.indexOf('@') == '-1'){
			$('#dmEmail').css('border','1px solid #f00');
			error = true;
		}else{
			$('#dmEmail').css('border','1px solid #0f0');
		}

		if(conDemo == ''){
			$('#conDemo').css('border','1px solid #f00');
			error = true;
		}else{
			$('#conDemo').css('border','1px solid #0f0');
		}

		if(dmmode == ''){
			$('#dmmode').css('border','1px solid #f00');
			error = true;
		}else{
			$('#dmmode').css('border','1px solid #0f0');
		}	
	if(dmcourse == ''){
			$('#dmcourse').css('border','1px solid #f00');
			error = true;
		}else{
			$('#dmcourse').css('border','1px solid #0f0');
		}	
/*	if(dmtime == ''){
			$('#mydate').css('border','1px solid #f00');
			error = true;
		}else{
			$('#mydate').css('border','1px solid #0f0');
		}	*/
		var formM = $('#mForm');
		var formD = new FormData(formM[0]);

		$('.alert').remove();

		if(error == false){
			$.ajax({
				url: 'pprocess.php',
				type: 'post',
				data: formD,
				contentType: false,
				cache: false,
				processData: false,
				success: function(data){
					$('#mForm').append('<div class="alert alert-success alert-dismissible fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> You details have been sent.</div>');

					$('#mForm')[0].reset();

					/*setTimeout(function(){
						$('#modal-f').modal('hide');

					}, 3000);*/
				}
			})
		}
	});	                                                                                                                             
	
	
	//payment form
	$('#btn-cf').click(function(e){
	e.preventDefault();
	
	var cname = $('#cname').val();
	var cemail = $('#cemail').val();
	var cmob = $('#cmob').val();
	var multis = $('#example-getting-started').val();	
	var error = false; 
	
	if(cname == ''){
		$('#cname').css('border','1px solid #f00');
		error = true;
	}else{
		$('#cname').css('border','1px solid #0f0');
	}
	
	if(cmob == '' || cmob.length >10 || cmob.length < 10){
		$('#cmob').css('border','1px solid #f00');
		error = true;
	}else{
		$('#cmob').css('border','1px solid #0f0');
	}
	
	if(cemail == '' || cemail.indexOf('@') == '-1'){
		$('#cemail').css('border','1px solid #f00');
		error = true;
	}else{
		$('#cemail').css('border','1px solid #0f0');
	}
	
	if(multis == ''){
		$('.multiselect-native-select .btn-group').css('border','1px solid #f00');
		error = true;
	}else{
		$('.multiselect-native-select .btn-group').css('border','1px solid #0f0');
	}		
		
			
	/*var formM = $('#cform');
	var formD = new FormData(formM[0]);
	
	formD.append('cform','cform');*/
	
	$('.alert').remove();
	
	if(error == false){
		
	$('#cform').submit();
		
		/*$.ajax({
			url: 'pprocess.php',
			type: 'post',
			data: formD,
			contentType: false,
			cache: false,
			processData: false,
			success: function(data){
				//alert(data);
				$('#cform').append('<div class="alert alert-success alert-dismissible fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> You details have been sent.</div>');
				
				$('#cform')[0].reset();
				
				setTimeout(function(){
					$('#modal-f').modal('hide');
					
				}, 3000);
				
			}

		})*/
	}
});
	

$('#btn-on').click(function(e){
	e.preventDefault();
	
	var onname = $('#onname').val();
	var onmob = $('#onmob').val();	
	var onemail = $('#onemail').val();
	
	var error = false; 
	
	if(onname == ''){
		$('#onname').css('border','1px solid #f00');
		error = true;
	}else{
		$('#onname').css('border','1px solid #0f0');
	}
	
	if(onmob == '' || onmob.length >10 || onmob.length < 10){
		$('#onmob').css('border','1px solid #f00');
		error = true;
	}else{
		$('#onmob').css('border','1px solid #0f0');
	}
	
	if(onemail == '' || onemail.indexOf('@') == '-1'){
		$('#onemail').css('border','1px solid #f00');
		error = true;
	}else{
		$('#onemail').css('border','1px solid #0f0');
	}
	

			
	var formM = $('#onform');
	var formD = new FormData(formM[0]);		
	
	$('.alert').remove();
	
	if(error == false){
		
	/*$('#cform').submit();*/
		
		$.ajax({
			url: 'pprocess.php',
			type: 'post',
			data: formD,
			contentType: false,
			cache: false,
			processData: false,
			success: function(data){
				//alert(data);
				$('#onform').append('<div class="alert alert-success alert-dismissible fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> You details have been sent.</div>');
				
				$('#onform')[0].reset();
				
				/*setTimeout(function(){
					$('#modal-f').modal('hide');
					
				}, 3000);*/
				
			}

		})
	}
});
	
	
	
	
	
	
	
	
/*scrol top*/	

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
	
function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("sctop").style.display = "block";
    } else {
        document.getElementById("sctop").style.display = "none";
    }   
}


	
	
$(function(){
	$("nav").before($("#navf").clone().addClass("fixed"));	
	$('#navf.fixed .navbar-header').prepend('<a class="navbar-brand" href="#"><img src="img/logo-o.png" class="img-responsive" alt="wod"/></a>');
	
	$(window).scroll(function(){
		if($(window).scrollTop() >= 150){
			
			$('#navf.fixed').addClass('slideDown');
		}
	else{
		$('#navf.fixed').removeClass('slideDown');
	}	
	
	})
	
})
	

//expend profile
	var sts = 0;
$('.btn-pro').click(function(){
	
	
	if(sts == 0){
		$('.ful-pro').slideDown();
		sts = 1;
	}else if(sts == 1){
		$('.ful-pro').slideUp();
		sts = 0;
	}
			
});	
	

	
//pay form
$('.btn-payu').click(function(){
	
	$('#cform').slideToggle('fast');
	$('#pay').val('payu')	
});	
	
$('.btn-paytm').click(function(){
	
	$('#cform').slideToggle('fast');
	$('#pay').val('paytm')	
});		
	
	
//online check form
$('#conline').click(function(){
	
	
	$('#onform').slideToggle('fast');
	
	/*if($(this).attr('checked', true)){
		$('#onform').slideDown('fast');
	}else{
		$('#onform').slideUp('fast');
	}*/
	
	
});
	
	

$('.callmp i').click(function(){
	$('.callmp').toggleClass('l-0');
	
});
	
	
/*demo mod*/	
	
setTimeout(function(){
		$('#demomod').modal('show');
		
	}, 5000);	

	//payment form
	$('#fut-btn').click(function(e){
	e.preventDefault();
	
	var cname = $('#popname').val();
	var cemail = $('#popemail').val();
	var cmob = $('#popphone').val();
	var multis = $('#example-getting-started2').val();	
	var error = false; 
	
	if(cname == ''){
		$('#popname').css('border','1px solid #f00');
		error = true;
	}else{
		$('#popname').css('border','1px solid #0f0');
	}
	
	if(cmob == '' || cmob.length >10 || cmob.length < 10){
		$('#popphone').css('border','1px solid #f00');
		error = true;
	}else{
		$('#popphone').css('border','1px solid #0f0');
	}
	
	if(cemail == '' || cemail.indexOf('@') == '-1'){
		$('#popemail').css('border','1px solid #f00');
		error = true;
	}else{
		$('#popemail').css('border','1px solid #0f0');
	}
	
	if(multis == ''){
		$('.example-getting-started2 .btn-group').css('border','1px solid #f00');
		error = true;
	}else{
		$('.example-getting-started2 .btn-group').css('border','1px solid #0f0');
	}		
		
			
	var formM = $('#fut-off');
	var formD = new FormData(formM[0]);
	
	formD.append('cform','cform');
	
	$('.alert').remove();
	
	if(error == false){
		
	//$('#cform').submit();
		
		$.ajax({
			url: 'pprocess.php',
			type: 'post',
			data: formD,
			contentType: false,
			cache: false,
			processData: false,
			success: function(data){
				//alert(data);
				$('#fut-off').append('<div class="alert alert-success alert-dismissible fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> You details have been sent.</div>');
				
				$('#fut-off')[0].reset();
				
				setTimeout(function(){
					$('#demomod').modal('hide');
					
				}, 3000);
				
			}

		})
	}
});
	
	
	
	
	
	
	
	

});//document ready


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
     $('html, body').animate({scrollTop:0}, 'fast');
}
	
	
//time counter

// Set the date we're counting down to
var countDownDate = new Date("June 01, 2020 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  /*document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";*/

  if(days < 10){
  	days = '0'+days;
  }
  if(hours < 10){
  	hours = '0'+hours;
  }
  if(minutes < 10){
  	minutes = '0'+minutes;
  }
  if(seconds < 10){
  	seconds = '0'+seconds;
  }


  $('.timer .d').html(days + ':');
  $('.timer .h').html(hours + ':');
  $('.timer .m').html(minutes + ':');
  $('.timer .s').html(seconds );

    
  // If the count down is over, write some text 
  if (distance < 0) {

    clearInterval(x);
    $('.timer span').remove();
    //document.getElementById(".timer").innerHTML = "EXPIRED";
    $('.timer').html('EXPIRED!');
  }
}, 1000);

