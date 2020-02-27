$(document).ready(function() {
  let intervals = [];
  
  let random = function() {      
  return Math.floor(Math.random()*500 + 100);
  }
    $(".button").hover(function(){
  $(this).css("color", " #ffffff");
  }, function(){
  $(this).css("color", "#777777");
});
  
  $(".button").mouseenter(function(){
    for(let i = 1;i<13;i++) {
      let random = Math.random()*500;
      let repeat =setInterval(function(){
      $("#b"+i.toString())
      .animate({height: "150px"})
      .animate({height: "10px"}, random);
      },random); 
      intervals.push(repeat);
      }
    })
    .mouseout(function() {
    for(let i = 0;i<intervals.length;i++) {
      let repeat = intervals[i];
      clearInterval(repeat);
      $("#b"+(i+1).toString()).stop(true);
    }
  }).click(function(){
    for(let i = 1;i<13;i++) {
      $("#b"+i.toString()).stop(true)
      .animate({height:"10px"},10);
    }
  }).mousedown(function(){
    $(".button, .boxGeneral").css("background-color","green");
  }).mouseup(function(){
    $(".button, .boxGeneral").css("background-color","black");
  });
  
  ;
  
  let radio = (button) => {
    $(button).animate({height: "150px"}).animate({height: "10px"}, Math.random()*500);
  }
  
  });


