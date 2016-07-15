
$(function() {
  var pb = new Pandorabot("aiaas.pandorabots.com", "1409612842152", "marvinthehrbot", "a37c4d6ceaeff54c647cf8d65eab1e74");
 
   /*$('form').submit(function(event) {
     doTalk();
  });*/
  
  function doTalk() {
    var input = document.getElementById("yousay").value;
    document.getElementById("yousay").value = "";
    pb.talk(input, function(data) {
      var response = data["responses"];
      document.getElementById("response").innerHTML = response;
      console.log(response);
    });
  }
});