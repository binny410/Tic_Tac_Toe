$(document).ready(function () {
    //Creating boxes for the board dynamically.
    for (let i = 0; i < 9; i++) {
        $(".container").append('<div class="box b' + i + '"></div>');
    }

    //When clicked on NOUGHTS(O) Button
    $(".noughts").click(function () {
        $(".startMessage").removeClass("show");
        $(".container").addClass("o");
    });

    //When clicked on Crosses(X) Button
    $(".crosses").click(function () {
        $(".startMessage").removeClass("show");
        $(".container").addClass("x");
    });


    //Clickinging on the reset button to start the game.
    $("#restartButton").click(function () {
        $(".winMessage").removeClass("show")
    });

    //When clicked on any box on the board. 
    $(".box").click(function () {
        //If board has "x" class already.
        if ($(".container").hasClass("x")) {
            //if clicked on the same box again with X class.
            if ($(this).hasClass("o")) {
                alert("X Class: select differnt");
            } else {
                $(this).addClass("x");
                winner();
                var value = winner();
                if (value == true) {
                    setTimeout(function () {
                        $(".winMessage").addClass("show");
                        $(".middle").text("X WINS!! ")
                        $(".box").removeClass("x || o");
                    }, 200)
                }
                //after adding X class now changing to O class. 
                $(".container").removeClass("x").addClass("o");
                draw()
            }
        }
        //If the board has class of O.
        else if ($(".container").hasClass("o")) {
            //if clicked on the same box again with X class.
            if ($(this).hasClass("x")) {
                alert("class O: choose differnt")
            } else {
                $(this).addClass("o");
                winner();
                var value = winner();
                if (value == true) {
                    setTimeout(function () {
                        $(".winMessage").addClass("show");
                        $(".middle").text("O WINS!! ")
                        $(".box").removeClass("x || o");
                    }, 200)

                }
                //after adding O class now changing to X class. 
                $(".container").removeClass("o").addClass("x");
                draw()
            }
        }

    });

});

//Function to check if one of the classes(X OR O) is continously present horizontally/Verticall/Diagonally.
function winner() {
    //Getting the class currently in the container div
    var currentPlayer = $(".container").attr("class").split(" ")[1];

    if ($(".b0").hasClass(currentPlayer) && $(".b1").hasClass(currentPlayer) && $(".b2").hasClass(currentPlayer)) {
        return true;
    } else if ($(".b3").hasClass(currentPlayer) && $(".b4").hasClass(currentPlayer) && $(".b5").hasClass(currentPlayer)) {
        return true;
    } else if ($(".b6").hasClass(currentPlayer) && $(".b7").hasClass(currentPlayer) && $(".b8").hasClass(currentPlayer)) {
        return true;
    } else if ($(".b0").hasClass(currentPlayer) && $(".b3").hasClass(currentPlayer) && $(".b6").hasClass(currentPlayer)) {
        return true;
    } else if ($(".b1").hasClass(currentPlayer) && $(".b4").hasClass(currentPlayer) && $(".b7").hasClass(currentPlayer)) {
        return true;
    } else if ($(".b2").hasClass(currentPlayer) && $(".b5").hasClass(currentPlayer) && $(".b8").hasClass(currentPlayer)) {
        return true;
    } else if ($(".b0").hasClass(currentPlayer) && $(".b4").hasClass(currentPlayer) && $(".b8").hasClass(currentPlayer)) {
        return true;
    } else if ($(".b2").hasClass(currentPlayer) && $(".b4").hasClass(currentPlayer) && $(".b6").hasClass(currentPlayer)) {
        return true;
    } else {
        return false;
    }
}

//Function for Draw
function draw() {
    var blocks = parseInt($(".box").length)
    var blockClassCross = $(".box.x").length
    var blockClassNought = $(".box.o").length
    var blockClass = parseInt(blockClassCross) + parseInt(blockClassNought);

    if (blocks == blockClass) {
        setTimeout(function () {
            $(".winMessage").addClass("show");
            $(".middle").text("MATCH DRAW! ")
            $(".box").removeClass("x || o");
        }, 200)
    }
}
