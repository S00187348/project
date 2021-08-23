var url = "https://developer.marvel.com/";
$(document).ready(function(){
  $("button").click(function(){
    $.ajax({
        type:"GET",
        url:url,
        async:true,
        dataType: "json",
           success: function(json) {
              // Parse the response.
              // Do other things.
           },
           error: function(xhr, status, err) {
              // This is where we end up! 
            }
    });
  });
});