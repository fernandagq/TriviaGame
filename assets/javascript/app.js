// 1. Create a function that initiates game upon the click of the "start" button. 
function startGame(){}
$(".startButton").on("click", function () {
    // if user clicks "start" begin game.
    initTimer();
    time=120;
    $(".startScreen").hide();
    $(".endScreen").hide();
    $("#gamePlay").show();
    correctAnswers=0;
    incorrectAnswers=0;
    unanswered=0;
});
// Create a timer.
var time= 120;
var intervalId;
var newCorrect = $("#correct");
var newIncorrect= $("#incorrect");
var unanswered= $("#unansweredOne");

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
// Create a function that brings up end-game screen when timer runs out or when player clicks "done."
function endGame() {
    $("#gamePlay").hide();
    $(".startScreen").hide();
    $(".endScreen").show();
}

$("#Submit").on("click", function (){

    endGame();

});

var correctAnswers=0;
var incorrectAnswers=0;
var unanswered=0;

//  Create game logic that recognizes correct v. incorrect answers.
   $("#Submit").on("click", function(){

      var answer= $("input[name='questionOne']:checked").val();

      if(answer==="annaKendrick"){
          correctAnswers++;
        } else if (answer=="justinBieber"){
          incorrectAnswers++;

            }else if (answer=="arianaGrande"){
                incorrectAnswers++;
                
                }else if (answer=="katyPerry"){
                    incorrectAnswers++;

                    }else if (answer==undefined){
                    unanswered++;
                    }
   
      var answer= $("input[name='questionTwo']:checked").val();

      if(answer==="jadenSmith"){
        correctAnswers++;
        } else if (answer=="kylieJenner"){
        incorrectAnswers++;

            }else if (answer=="jojoSiwa"){
                incorrectAnswers++;
                
                }else if (answer=="kanyeWest"){
                    incorrectAnswers++;

                    }else if (answer==undefined){
                    unanswered++;
                     }    
                     
      var answer= $("input[name='questionThree']:checked").val();

      if(answer==="lilJon"){
        correctAnswers++;
        } else if (answer=="daveChappelle"){
        incorrectAnswers++;

            }else if (answer=="kristenBell"){
                incorrectAnswers++;
                
                }else if (answer=="ashtonKutcher"){
                    incorrectAnswers++;

                    }else if (answer==undefined){
                    unanswered++;
                    } 

        var answer= $("input[name='questionFour']:checked").val();

        if(answer==="robLowe"){
            correctAnswers++;
            } else if (answer=="cardiB"){
            incorrectAnswers++;
    
                }else if (answer=="ryanReynolds"){
                    incorrectAnswers++;
                    
                    }else if (answer=="kimKardashian"){
                        incorrectAnswers++;
    
                        }else if (answer==undefined){
                        unanswered++;
                        } 

        var answer= $("input[name='questionFive']:checked").val();

        if(answer==="zachBraff"){
            correctAnswers++;
            } else if (answer=="jonahHill"){
            incorrectAnswers++;
    
                }else if (answer=="sethRogan"){
                    incorrectAnswers++;
                    
                    }else if (answer=="michaelCera"){
                        incorrectAnswers++;
    
                        }else if (answer==undefined){
                        unanswered++;
                        } 

        var answer= $("input[name='questionSix']:checked").val();

        if(answer==="christinaApplegate"){
            correctAnswers++;
            } else if (answer=="mindyKaling"){
            incorrectAnswers++;
    
                }else if (answer=="williamShatner"){
                    incorrectAnswers++;
                    
                    }else if (answer=="none"){
                        incorrectAnswers++;
    
                        }else if (answer==undefined){
                        unanswered++;
                        } 

        var answer= $("input[name='questionSeven']:checked").val();

        if(answer==="rainnWilson"){
            correctAnswers++;
            } else if (answer=="jennaFischer"){
            incorrectAnswers++;
    
                }else if (answer=="johnKrasinski"){
                    incorrectAnswers++;
                    
                    }else if (answer=="steveCarell"){
                        incorrectAnswers++;
    
                        }else if (answer==undefined){
                        unanswered++;
                        } 

        var answer= $("input[name='questionEight']:checked").val();

        if(answer==="jimmyFallon"){
            correctAnswers++;
            } else if (answer=="willFerrell"){
            incorrectAnswers++;
    
                }else if (answer=="kevinHart"){
                    incorrectAnswers++;
                    
                    }else if (answer=="azizAnsari"){
                        incorrectAnswers++;
    
                        }else if (answer==undefined){
                        unanswered++;
                        } 

        var answer= $("input[name='questionNine']:checked").val();

        if(answer==="conan"){
            correctAnswers++;
            } else if (answer=="cole"){
            incorrectAnswers++;
    
                }else if (answer=="sarah"){
                    incorrectAnswers++;
                    
                    }else if (answer=="khloe"){
                        incorrectAnswers++;
    
                        }else if (answer==undefined){
                        unanswered++;
                        } 

        var answer= $("input[name='questionTen']:checked").val();

        if(answer==="chris"){
            correctAnswers++;
            } else if (answer=="mark"){
            incorrectAnswers++;
    
                }else if (answer=="julie"){
                    incorrectAnswers++;
                    
                    }else if (answer=="joseph"){
                        incorrectAnswers++;
    
                        }else if (answer==undefined){
                        unanswered++;
                        } 
            console.log("correct: " + correctAnswers);
            console.log("incorrect: " + incorrectAnswers);
            console.log("unanswered: " + unanswered);
            console.log(answer);

            $("#correct").append(correctAnswers);
            $("#incorrect").append(incorrectAnswers);
            $("#unanswered").append(unanswered);
        
        });

        
        $(".restartButton").on("click", function () {
            location.reload();
           
        });