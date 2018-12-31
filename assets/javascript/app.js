// 1. Create a function that initiates game upon the click of the "start" button. 
$(".startButton").on("click", function () {
    // if user clicks "start" begin game.
    $(".startScreen").hide();
    $(".endScreen").hide();
    $("#gamePlay").show();
    initTimer();
    time=10;

});


// Create a timer.
var time= 10;
var intervalId;


function initTimer() {
    
    
    intervalId= setInterval(decrement, 1000);
    
}

function decrement() {
   
    $("#counter").html(time + "seconds");
   
    time--;

    if (time === 0) {
        stop();
        endGame();
       
    }
}

function stop() {
    clearInterval(intervalId);

}

function endGame() {
    $("#gamePlay").hide();
    $(".startScreen").hide();
    $(".endScreen").show();

}

var correctAnswers=0;
var incorrectAnswers=0;
var unanswered=0;

