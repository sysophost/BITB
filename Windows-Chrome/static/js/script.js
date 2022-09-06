$(document).on("DOMContentLoaded", function() {
  $("#window").draggable();
  $("#window").resizable({
      minHeight: 500,
      minWidth: 300
  });


//   use to generate unique UUID for Google oauth URL
//   var uuid = self.crypto.randomUUID();
//   $("#domain-path").text(`/o/oauth2/v2/auth/identifier?state=${uuid}&access_type=offline&prompt=consent&scope=`);
  
  $("#title-bar").on("dblclick", function(e){
      $("#window").toggleClass("enlarged");
  });
  
  $("#square").click(function(){
      $("#window").toggleClass("enlarged");
  });

  $("#exit").click(function(){
      $("#window").css("display", "none");
  });
});