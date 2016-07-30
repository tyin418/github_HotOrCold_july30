/*---the beginning of the document ready function---*/
$(document).ready(function () {
    /*---where the game starts---*/
    function gamePlay() {

        var inputNumber = $("#userGuess").val();
        console.log(inputNumber);

        computerNumber;

        var guessDifference = (Math.abs(inputNumber - computerNumber));
        console.log(guessDifference);


        if (guessDifference === 0) {
            $("h2").empty().append("You hit the target and press New Game to it start over!!!");
        } else if (guessDifference >= 40 && guessDifference <= 49) {
            $("h2").empty().append("You're cold!");
        } else if (guessDifference >= 30 && guessDifference <= 39) {
            $("h2").empty().append("You're warm!");
        } else if (guessDifference >= 20 && guessDifference <= 29) {
            $("h2").empty().append("You're hot!");
        } else if (guessDifference >= 10 && guessDifference <= 19) {
            $("h2").empty().append("You're burning up!");
        } else if (guessDifference >= 1 && guessDifference <= 9) {
            $("h2").empty().append("You're getting there!");
        } else {
            $("h2").empty().append("You're freezing!");
        }

    };

    /*---define computer generated number---*/
    var inputNumber = function () {
        computerNumber = Math.floor((Math.random() * 100) + 1);
        console.log(computerNumber);
        return computerNumber;
    };

    inputNumber();
    /*nOfGuess = number of times for guessing*/
    var nOfGuess = 0;
    var accounting = function () {
        nOfGuess += 1;
        $('#count').replaceWith("<span id='count'>" + nOfGuess + "</span>");
    };

    /*---press the guess button to begin the game---*/
    /*$("#guessButton").on("click", function () {*/
$("#guessButton").click(function(event){
        event.preventDefault();

        var inputNumber = $("#userGuess").val();
        if (inputNumber > 0 && inputNumber < 101) {
            $("#guessList").append("<li>" + inputNumber + "</li>");
            gamePlay();
            accounting();
        } else {
            alert("It is not a valid number. Please try the game again!!!")
        }
        $("#userGuess").val(" ");

    });
    /*---press the new game button to start a new game---*/

    $(".new").on("click", function () {
        $("#guessList").empty();
        inputNumber();
        var nOfGuess = 0;
        $("#feedback").replaceWith("<h2 id='feedback'>" + "Make your Guess!" + "</h2>");
        $('#count').replaceWith("<span id='count'>" + 0 + "</span>");

    })

    /*--- Display information modal box ---*/

    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/

    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

});
