
jQuery(document).ready(function ($) {
    
    
    if( $(window).width() < 768 ) {
        $('#inner2 .col-md-4').addClass('text-center');   
    }
    
    $(".blk-OverlayLFT").on('mouseover', function () {
        $("img#head1").toggleClass("centerME");
    });

    
    $(".blk-OverlayRT").on('mouseover', function () {
        $("img#head2").toggleClass("centerME");
    });

     $('.navbar a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target,
        $target = $(target);
			
         
		
		if ( target != window.location.hash ){
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top-300
	        }, 500, 'swing', function () {
	        });
		}
       
    });
    
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        
        var st = $(this).scrollTop(),
            $navLogo = $("img#solid-logo");
       
        if (st > lastScrollTop){
            $navLogo.addClass('small');
        } else if ( st == 0 ){
            $navLogo.removeClass('small');

        } 
        
        lastScrollTop = st;
        
    });
                    console.log("details Luciano Zero");

   /*
    var detailsPic = [ 'a#item0', 'a#item1',  'a#item2'],
        buttDetails = [ '.order-pannel0 button.btn.btn-success', '.order-pannel1 button.btn.btn-success', '.order-pannel2 button.btn.btn-success'],
       buttOrder = [],
       pannelDetails = [ '.order-pannel0', '.order-pannel1', '.order-pannel2'];

    var mealToggleClass = 'expandMe'; 
           
    function buttGenerator( buttArry, pannelArry, togClass ) {
      //Work smarter not harder
            console.log(buttArry[0]);   
        var details = [],
            pannels = [],
            buttons = [];
        for (var i=0; i < buttArry.length; i++) { 
             details.push(pannelArry[i]);
             pannels.push(buttArry[i]);

        }
        for (var x=0; x < buttArry.length; x++) {
            details[x].click(function() {
                pannels[x].toggleClass(togClass); 
                buttons[x].toggleClass(togClass);  
           });
        }                           
    } 
                               
    buttGenerator(detailsPic, pannelDetails, mealToggleClass);                       
    */

    // Pannel Controls
    $("a#item0").click(function(e) {
        e.preventDefault();
        $(".order-pannel0").toggleClass('expandMe'); 
        $(".order-pannel0 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel0 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');
        $("#meal-box0").toggleClass('expandMe');


    });
    $("a#item1").click(function(e) {
        e.preventDefault();
        $(".order-pannel1").toggleClass('expandMe'); 
        $(".order-pannel1 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel1 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');
        $("#meal-box1").toggleClass('expandMe');
        
    });
    $('a#item2').click(function(e) {
        e.preventDefault();
        $(".order-pannel2").toggleClass('expandMe'); 
        $(".order-pannel2 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel2 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');
        $("#meal-box2").toggleClass('expandMe');
        
    });
    

    // Detail Button Controls
    $("button#details0").click(function(e) {
        console.log("details Zero");
        e.preventDefault();
        $(".order-pannel0").toggleClass('expandMe'); 
        $(".order-pannel0 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel0 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');

    });
    $("#details1").click(function(e) {
        e.preventDefault();
        $(".order-pannel1").toggleClass('expandMe'); 
        $(".order-pannel1 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel1 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');
    });
    $("#details2").click(function(e) {
       e.preventDefault();
        $(".order-pannel2").toggleClass('expandMe'); 
        $(".order-pannel2 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel2 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');
    });
    
    $('button.plus').click(function() {
    var sp = parseFloat($(this).prev('span').text());
    $(this).prev('input').text(sp + 1);
    });

 $('button.minus').click(function() {
    var sp = parseFloat($(this).next('span').text());
    $(this).next('input').text(sp - 1);
 });
    
});