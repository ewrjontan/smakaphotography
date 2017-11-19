
$(document).ready(function(){
	var $mobileMenuOpen = false;
  
	$(window).scroll(function(){
  	var $scroll = $(window).scrollTop();
    console.log($scroll);
    
    if ($scroll >= 220){
    	console.log("yoooo");
      $("#navigation").css("position", "fixed");
      $("#nav-list").css("top", "5px");
      $("#logo-small-desktop").css("display", "inline");
     	$("#logo-container").css("margin-bottom", "40px");
     
      /*$("#home-photo").css("top", "40px");
      $("#services-container").css("top", "37px");
      $("#about-container").css("top", "-3px");*/
    }else if ($scroll<220){
    	$("#navigation").css("position", "relative");
      $("#nav-list").css("top", "10px");
      $("#logo-small-desktop").css("display", "none");
      $("#logo-container").css("margin-bottom", "0px");
    }  
  });
  
  $("#mobile-nav-button").click(function(){
  	if ($mobileMenuOpen){
    	$('#mobile-menu-container').slideUp('slow');
      $mobileMenuOpen = false;
    }else{
    	$('#mobile-menu-container').slideDown('slow');
      $mobileMenuOpen = true;
    }
  	
  })
  
  $("#see-pricing-button").hover(
  	function() {
    	$(this).css({"background-color": "#bfbfbf", "color": "white"});
  	}, function() {
    	$(this).css({"background-color": "white", "color": "#cca300"});
  	}
	);
  
  $(".fa").hover(
  	function() {
    	$(this).css("color", "white");
  	}, function() {
    	$(this).css("color", "black");
  	}
	);  
  
})
