var currentPOS = 0;


$(".fa-angle-left").click(function() {
  if (currentPOS == 0) {
    currentPOS = -200;
  }
  else {
    currentPOS += 100;
  }
  $(".deal-container").css("left", currentPOS + "vw");
});

$(".fa-angle-right").click(function() {
  if (currentPOS == -200) {
    currentPOS = 0;
  }
  else {
    currentPOS -= 100;
  }
  $(".deal-container").css("left", currentPOS + "vw");
});