
$(document).ready(function(){
	var $mobileMenuOpen = false;
  var $menuLock = false;
  
	$(window).scroll(function(){
  	var $scroll = $(window).scrollTop();
    console.log($scroll);
    
    if ($scroll >= 220){
    	$menuLock = true;
    	console.log("yoooo");
      $("#navigation").css("position", "fixed");
      $("#nav-list").css("top", "5px");
      $("#logo-small-desktop").css("display", "inline");
     	$("#logo-container").css("margin-bottom", "40px");
      $("#mobile-nav-header").css("opacity", "1");
     
      /*$("#home-photo").css("top", "40px");
      $("#services-container").css("top", "37px");
      $("#about-container").css("top", "-3px");*/
    }else if ($scroll<220){
    	$menuLock = false;
    	$("#navigation").css("position", "relative");
      $("#nav-list").css("top", "10px");
      $("#logo-small-desktop").css("display", "none");
      $("#logo-container").css("margin-bottom", "0px");
      
      if ($mobileMenuOpen == false){
      	$("#mobile-nav-header").css("opacity", "0");
      };
    }  
  });
  
  $("#mobile-nav-button").click(function(){
  	if ($mobileMenuOpen){
    	$('#mobile-menu-container').slideUp('slow');
      $("#logo-link-container").css("visibility", "visible");
      
      if ($menuLock == false){
      	$("#mobile-nav-header").css("opacity", "0");
      };
      
      $mobileMenuOpen = false;
    }else{
    	$('#mobile-menu-container').slideDown('slow');
      $("#logo-link-container").css("visibility", "hidden");
      $("#mobile-nav-header").css("opacity", "1");
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
  
  $(".mobile-menu-item").hover(
  	function(){
    	$(this).css("backgroundColor", "#8BB2C0");
    }, function(){
      $(this).css("backgroundColor", "white");
    }
  );
  
})
