$(document).ready(function(){
	var $mobileMenuOpen = false;
  var $menuLock = false;
  var $portrait;
  var $landscape;
  
  //check window size
  $(window).resize(function() {
  	// This will fire each time the window is resized:
    console.log($(window).width());
   	$portrait = window.matchMedia("(orientation: portrait)").matches;
    $landscape = window.matchMedia("(orientation: landscape)").matches;
    console.log("Portrait: " + $portrait);
    console.log("Landscape: " + $landscape);
    /*if($(window).width() <= 667) {
    	console.log("Yo width is less than or equal to 667!");
    } else {
      console.log("Width is greater than 667!");
    }*/
  }).resize(); // This will simulate a resize to trigger the initial run.
  
	$(window).scroll(function(){
  	var $scroll = $(window).scrollTop();
    console.log($scroll);
    
    if ($scroll >= 220){
    	$menuLock = true;
    	console.log("yoooo");
      
      //for oreintaion = landscape
      if ($landscape){
      	$("#navigation").css("position", "fixed");
        $("#nav-list").css("top", "3px");
      	$("#logo-small-desktop").css("display", "inline");
     		$("#logo-container").css("margin-bottom", "40px");
      };
      
      //$("#mobile-nav-header").css("visibility", "visible");
      $("#mobile-nav-header").css("opacity", "1");

    }else if ($scroll<220){
    	$menuLock = false;
      
      //for orientation = landscape
      if ($landscape){
      	$("#navigation").css("position", "relative");
      	$("#nav-list").css("top", "10px");
      	$("#logo-small-desktop").css("display", "none");
      	$("#logo-container").css("margin-bottom", "0px");
      }
    	
      
      if ($mobileMenuOpen == false){
      	//$("#mobile-nav-header").css("visibility", "hidden");
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
        //$("#mobile-nav-header").css("visibility", "hidden");
      };
      
      $mobileMenuOpen = false;
    }else{
    	$('#mobile-menu-container').slideDown('slow');
      $("#logo-link-container").css("visibility", "hidden");
      //$("#mobile-nav-header").css("visibility", "visible");
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