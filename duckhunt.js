$(document).ready(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>
  var body = $('body');
  var $body = $('body');
  // 1. Can you create a <div> with the class "duck" and name it "duck"
  // var $duck = $('<div/>',{
  //   'class' : 'duck'
  // });
  // $body.append($duck);
 
  // // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // setInterval(function(){
  //   $('.duck').toggleClass('flap')
  // }, 250);

  // // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
  // $duck.css({
  //     
  //     'left': '100px',
  //     'top' : '10px'
  //   });


  // // 4. Try making the duck move to a different location after 1 second
  // $duck.animate({
  // 
  //     'left' : '30px',
  //     'top': '30px'
  //     
  // },1000);
//here jaz


function  createDuck(){
   var $duck = $('<div/>',{
    'class' : 'duck'
  });
  $body.append($duck);
 
  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  setInterval(function(){
    $('.duck').toggleClass('flap')
  }, 250);

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
  $duck.css({
      
      'left': '100px',
      'top' : '100px'
    });


    setInterval(function(){
      $duck.css("left", Math.random() * window.innerWidth);
      $duck.css("top", Math.random() * window.innerHeight);
    },900)


  // 4. Try making the duck move to a different location after 1 second
  $duck.animate({
      'left' : '300px',
      'top': '300px'
      
  },800);

  $duck.click(function(){
    $duck.addClass('shot');
    var $shotImg = $('<img/>').attr('src','shot.png');
    $duck.append($shotImg);

    setInterval(function(){

      if($('.shot')){
        $duck.remove();
  
      }
    },1000);

    checkForWinner();
    
  })

  // $duck.click(function(){
  //   if ($duck.click){
  //     $duck.addClass(shot);


  //     clearInterval(clear);
  //     $duck.stop(t,f);
      
  //     setTimeout(function(){
  //       $duck.remove();
  //       checkForWinner();
  //     })
    
  //   }
    
  // })

  function checkForWinner(){
    if($body.childern().length == 0){
      alert("YOU WIN!");
    }
  }

  return $duck;

};

for (i = 0; i < 5; i++){
  createDuck();
}
})// end of the main

 
