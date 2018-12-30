// 1. Create a function that initiates game upon the click of the "start" button. 
$("#startBtn").on("click", function () {
    // if user clicks "start" begin game.
    
    initTimer();

});



// var clockRunning= false;
var time= 120;
var intervalId;


function initTimer() {
    
    
    intervalId= setInterval(decrement, 1000);
    
}

function decrement() {
   
    $("#counter").html(time + "seconds");
   
    time--;

    if (time === 0) {
        stop();
        window.open("./feedback.html")
        // endGame();
    }
}

function stop() {
    clearInterval(intervalId);
}

initTimer();

var correctAnswers=0;
var incorrectAnswers=0;
var unanswered=0;