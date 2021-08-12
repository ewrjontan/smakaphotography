// Contact form submission
$(function() {
  
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
  $("#bookSubmitButton").on("click", function(){
    $("#bookModal").modal("hide");
    $("#bookModal").on("hidden.bs.modal", function(){
      $("#bookSuccessModal").modal("show");
    });
  });
  /*$("#bookSubmitButton").on("click", function(){
    $('#bookSuccessModal').modal("show");
  });*/


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

