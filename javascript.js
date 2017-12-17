
// Contact form submission
$(function() {
  // Get the form.
	var form = $('#ajax-contact');

  // Get the messages div.
  var formMessages = $('#form-messages');

  // TODO: The rest of the code will go here...
	console.log("form working");

  // Event listener for the contact form.
  $(form).submit(function(e) {
      // Stop the browser from submitting the form.
      console.log("Submit button has been pressed");
      e.preventDefault();
      
      // Serialize the form data.
			var formData = $(form).serialize();
			console.log(formData);
      
      // Submit the form using AJAX.
      $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
      })
      
    	//successful response
      .done(function(response) {
    		// Make sure that the formMessages div has the 'success' class.
    		$(formMessages).removeClass('error');
    		$(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#first-name').val('');
        $('#last-name').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#message').val('');
    	})

			//failed response
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');
				
        console.log("dataresponse: "+ data.responseText);
        // Set the message text.
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });
      
      
      // TODO
  });

});





function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

$(document).ready(function(){
	console.log("Hello jquery");
  
  if (!hasTouch()) {
    $("body").addClass("HasHover");
    //console.log("yooooo");
	}
  
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
    
    //temp fix for landscape to portrait (position media query not changing)
    if ($portrait){
    	$("#navigation").css({"position": "fixed", "background-color": "rgba(255, 230, 230, 0)"});
      
    }
    
    //fix for nav bar not changing color when switching between portrait and landscape
    if ($landscape){
    	$("#navigation").css({"position": "relative","background-color": "#ffe6e6"});
      
    }
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
     		//$("#logo-container").css("margin-bottom", "40px");
        //$("#logo-container").css("margin-bottom", "40px");
        $("#home-container-one").css("top", "40px");
      }else if ($portrait){
      	$("#navigation").css("background-color", "rgba(255, 230, 230, 1)");
      }
      
      //$("#mobile-nav-header").css("visibility", "visible");
      $("#mobile-nav-header").css("opacity", "1");

    }else if ($scroll<220){
    	$menuLock = false;
      
      //for orientation = landscape
      if ($landscape){
      	$("#navigation").css("position", "relative");
      	$("#nav-list").css("top", "10px");
      	$("#logo-small-desktop").css("display", "none");
      	//$("#logo-container").css("margin-bottom", "0px");
        $("#home-container-one").css("top", "0px");
      }
    	
      
      if ($mobileMenuOpen == false){
      	//$("#mobile-nav-header").css("visibility", "hidden");
        $("#mobile-nav-header").css("opacity", "0");
        
        if ($portrait){
      		$("#navigation").css("background-color", "rgba(255, 230, 230, 0)");
      	};
      };
    }  
  });
  
  $("#mobile-nav-button").click(function(){
  	if ($mobileMenuOpen){
    	$('#mobile-menu-container').slideUp('slow');
      $("#logo-link-container").css("visibility", "visible");
      
      
      if ($menuLock == false){
      	$("#mobile-nav-header").css("opacity", "0");
        $("#navigation").css("background-color", "rgba(255, 230, 230, 0)");
        //$("#mobile-nav-header").css("visibility", "hidden");
      };
      
      $mobileMenuOpen = false;
    }else{//mobile menu is closed
    	$('#mobile-menu-container').slideDown('slow');
      $("#logo-link-container").css("visibility", "hidden");
      //$("#mobile-nav-header").css("visibility", "visible");
      $("#mobile-nav-header").css("opacity", "1");
      $("#navigation").css("background-color", "rgba(255, 230, 230, 1)");
      $mobileMenuOpen = true;
    }
  	
  })
  
  /*$("#see-pricing-button").hover(
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
    	$(this).css("backgroundColor", "#ccfff5");
    }, function(){
      $(this).css("backgroundColor", "white");
    }
  );*/
  
})
