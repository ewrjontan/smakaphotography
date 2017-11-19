
$(document).ready(function(){

	$(window).scroll(function(){
  	var $scroll = $(window).scrollTop();
    console.log($scroll);
    
    if ($scroll >= 220){
    	console.log("yoooo");
      $("#navigation").css("position", "fixed");
      $("#nav-list").css("top", "5px");
      $("#logo-small").css("display", "inline");
     	$("#logo-container").css("margin-bottom", "40px");
     
      /*$("#home-photo").css("top", "40px");
      $("#services-container").css("top", "37px");
      $("#about-container").css("top", "-3px");*/
    }else if ($scroll<220){
    	$("#navigation").css("position", "relative");
      $("#nav-list").css("top", "10px");
      $("#logo-small").css("display", "none");
      $("#logo-container").css("margin-bottom", "0px");
    }
    
  });
  
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
