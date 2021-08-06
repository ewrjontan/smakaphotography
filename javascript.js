// Contact form submission
$(function() {
  // Get the form.
	var form = $('#ajax-contact');

  // Get the messages div.
  var formMessages = $('#form-messages');

  // TODO: The rest of the code will go here...
	//console.log("form working");

  // Event listener for the contact form.
  $(form).submit(function(e) {
      // Stop the browser from submitting the form.
      //console.log("Submit button has been pressed");
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
      
      
  });

  /*index chevron*/
  $("#index-down-chevron").on("click", function(){
    $("html, body").animate({
      scrollTop: $("#chevronTarget").offset().top
      }, 800);

  });

  /*for book button*/
  /*index*/
  $("#bookButton").on("click", function(){
      $('#bookModal').modal("show");
  });
  $("#bookButtonIndex").on("click", function(){
    $('#bookModal').modal("show");
  });
  $("#bookButtonIndexMobile").on("click", function(){
    $('#bookModal').modal("show");
  });


  /*pricing page*/
  $("#bookPackageOne").on("click", function(){
    $('#bookModal').modal("show");
    $('#inputPackageSelect').val(0);
  });

  $("#bookPackageTwo").on("click", function(){
    $('#bookModal').modal("show");
    $('#inputPackageSelect').val(1);
  });

  $("#bookWeddingPackageOne").on("click", function(){
    $('#bookModal').modal("show");
    $('#inputPackageSelect').val(2);
  });

  $("#bookWeddingPackageTwo").on("click", function(){
    $('#bookModal').modal("show");
    $('#inputPackageSelect').val(3);
  });

  /*contact page*/
  $("#contactSubmit").on("click", function(){
    let firstname = $("#contactFirstName").val();
    let lastname = $("#contactLastName").val();
    let phone = $("#contactPhone").val();
    let email = $("#contactEmail").val();
    let feedback = $("#contactFeedback").val();
    console.log(firstname, lastname, phone, email, feedback);

    if (firstname !== "" && lastname !== "" && phone !== "" && email !== "" && feedback !== ""){
      let link = `mailto:jonscardenas@gmail.com?subject=New Feedback from ${firstname} ${lastname}&body=${feedback} contact: ${phone} ${email}`;
      console.log(link);
      window.location = link;
      
    }else{
      alert("Please fill out all forms!");
    }

  });

});

