let x=0;
let level=0;
const empty = function(arr) {arr.length = 0;}
log=console.log;
let userClickedParttern=[];
let gamePattern=[];
let buttonColors=["red","blue","green","yellow"];
var randomChosenColor;
function play_Music(y)
{
var music = new Audio() ;
music.src = "sounds/bg.mp3" ;
if (y==0) {
    music.play();
}else{
    music.pause();
}

}
function nextSequence(){
    empty(userClickedParttern);
    level++;
    let randomNumber=Math.floor(Math.random() * (4 - 0) );
    randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
            $("#level-title").text("level "+level);
            $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomChosenColor);
}
function startOver(){
    x++;
    play_Music();
    level=0;
    empty(gamePattern);
    $(document).on('keypress', function(e){
      
        if($(this).data('clicked',true)){
            $("#level-title").text("level "+level);
            nextSequence();
            $(document).off('keypress');
        }
    
    });
}
$(document).on('keypress', function(e){
    
    if($(this).data('clicked',true)){
        $("#level-title").text("level "+level);
        if (x==0) {  
            play_Music(x);
        }else{
            play_Music(1);
        
        }
        nextSequence();
        $(document).off('keypress');
    }

});
function playSound(name){

    var music = new Audio('sounds/'+name+'.mp3');
    music.play();
}
function animatePress(currentColor){
    let check= $("#"+currentColor);
    check.addClass("pressed");
    setTimeout(function(){
        check.removeClass("pressed");
    }, 100);
}

$(".btn").click(function() {
    
    let userChosenColor=$(this).attr('id');

    userClickedParttern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    log(gamePattern+" "+userClickedParttern)
   checkAnswer(gamePattern,userClickedParttern);
    
});

function checkAnswer(gPattern,ucPattern){
   let Length=ucPattern.length-1;
   if (gPattern[Length]===ucPattern[Length]) {
       log("success");
       if (gPattern.length===ucPattern.length) {
           setTimeout(() => {
               nextSequence();
           }, 1000);
       }
   } 
   
   else {
    $("#level-title").text("Game Over,Press Any Key To");
    $("#level-title").append("<br><br>Restart");
    let check= $("body");
    check.addClass("game-over");
    setTimeout(function(){
        check.removeClass("game-over");
    }, 200);
    playSound("wrong");
    
             startOver();               
   }
}















































































































































































































































































































































































// function nextSequence(){
//     let randomNumber=Math.floor(Math.random() * (4 - 0) );
//     gamePattern.push( buttonColors[randomNumber]);
//     return gamePattern; 
// }

























// if (gamePattern[currentLevel]===userClickedParttern[currentLevel]) {
//     log("success");
//     if (userClickedParttern.length===gamePattern.length) 
//     {
//        setTimeout(function(){ 
//        nextSequence();
//        }, 1000);  
//     }
// } 
// else {
//     log("wrong");
// }