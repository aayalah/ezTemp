/* #SOLID Designs 
	Author: Luciano S. Aldana II
	url: http://brandedsolid.com
*/
$(document).ready(function() {

     $('#fullpage').fullpage({
				anchors: ['welcome', 'hi'],
				css3: true,
                normalScrollElements: '#footer',
                controlArrows: false,
                verticalCentered: true,
                afterLoad: function(anchorLink, index){
            
                }
               
     });
     
  $('#footer').click(function(e) {
      e.preventDefault();
      $(this).toggleClass("expandMe");
      $(this).animate({ scrollTop: 0 }, "fast");
  
      $('.glyphicon-collapse-up').toggleClass('expandMe');
      $('.glyphicon-collapse-down').toggleClass('expandMe');
  });
    
    // Hover over template thumbs
    
    $('#hover1').on('hover', function(e) {
        e.preventDefault();
        $('#one').toggleClass('thumb');
    });
    
    
    $('#hover2').on('hover', function(e) {
        e.preventDefault();        
        $('#two').toggleClass('thumb');
    });
    
    
    $('#hover3').on('hover', function(e) {
        e.preventDefault();        
        $('#three').toggleClass('thumb');
    });
    

    $("button#load").click(function (e){
        
        e.preventDefault();
        $("#footer").trigger('click');
        $("#fullpage").fadeOut(2000);
        $("#solidAjax").fadeIn(500);
        setTimeout(function(){
            $("#solidAjax").fadeOut(500);
            $("iframe").fadeIn(777);
            $(".editMode").addClass("on");
            $(".temprow").addClass("off");
        }, 3000);
        
    });
    
    $("a#back").click(function(){
       
        $("iframe").fadeOut(500);
        $("#fullpage").fadeIn(1000);
        $("button#load").removeClass('on');
            $(".editMode").removeClass("on");
            $(".temprow").removeClass("off");
        $("button#end").css('display', 'block');

        
    });
    
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    $(".s3").fadeOut(1000);
    $(".glyphicon-cloud-upload").toggleClass('drag');
    
}

function drop(ev) {
    console.log("test drop");
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));
    
    $(".s3").fadeIn(1000);
    
    $(".glyphicon-cloud-upload").hide();
    $("button#load").addClass('on');
    
}
