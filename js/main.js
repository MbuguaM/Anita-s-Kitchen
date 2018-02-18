//hidding toggling elements
$( "#cross" ).hide();
$( "#menu" ).hide();

//triggering the humberger menu
$( "#hamburger" ).click(function() {
       $( "#menu" ).slideToggle( "slow", function() {
                    $( "#hamburger" ).hide();
                         $( "#cross" ).show();});
});

// closing the menu
$( "#cross" ).click(function() {
      $( "#menu" ).slideToggle( "fast", function() {
          $( "#cross" ).hide();
          $( "#hamburger" ).show();
});
});

function savedEmail(){
     var email=$("#text-box").val();
     var affirm= confirm("is this your email email? "+ email);
  
     if (affirm===true){
         alert("Email successfully saved!")
     }
     else{
         alert("please reenter your email");
     }
}
