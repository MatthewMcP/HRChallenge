$(function() {
  
  function hasValue(obj, key, value) {
    return obj.hasOwnProperty(key) && obj[key] === value;
}
  
  $("#submitUsernameBtn").click(function() {
      event.preventDefault();
      var username = $("#UsernameInput").val();
      
    $.get("/getuserdata", function( data ) {
      if(data.some(function(obj) { return hasValue(obj, "username", username); })){
        show("#PassWordDiv");
        hide("#NewUserDiv");
      }
      else{
        show("#NewUserDiv");
        hide("#PassWordDiv");
      }
    });
    
  });
  
});
