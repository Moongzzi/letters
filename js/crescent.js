jQuery(document).ready(function($) {
  $(document).ready(function() {

    // http://www.jsfuck.com/
    var pin = "0428";
    var enterCode = "";
    enterCode.toString();

    $("#numbers button").click(function() {

      var clickedNumber = $(this).text().toString();
      enterCode = enterCode + clickedNumber;
      var lengthCode = parseInt(enterCode.length);
      lengthCode--;
      $("#fields .numberfield:eq(" + lengthCode + ")").addClass("active");

      if (lengthCode == 3) {

        // Check the PIN
        if (enterCode == pin) {
          // Right PIN!
          $("#fields .numberfield").addClass("right");
          $("#numbers").addClass("hide");
          window.location.assign(" https://moongzzi.github.io/crescent_letter/crescent_letter.html");     //깃 허브에 편지 올린 링크를 올릴 예정
        } else {
          // Wrong PIN!
          $("#fields").addClass("miss");
          enterCode = "";
          setTimeout(function() {
            $("#fields .numberfield").removeClass("active");
          }, 200);
          setTimeout(function() {
            $("#fields").removeClass("miss");
          }, 500);

        }

      } else {}

    });
    
    $("#restartbtn").click(function(){
      enterCode = "";
      $("#fields .numberfield").removeClass("active");
      $("#fields .numberfield").removeClass("right");
      $("#numbers").removeClass("hide");
      $("#anleitung p").html("<strong>생일을 입력하세요</strong>");
    });

  });
});