$(document).ready(function () {

    for (let i = 0; i < 9; i++) {
        $(".container").append('<div class="box b' + i + '"></div>');
    }
    $("#restartButton").click(function () {
        $(".winMessage").removeClass("show")
    });


    $(".box").click(function () {

        if ($(".container").hasClass("x")) {
            if ($(this).hasClass("o")) {
                alert("X Class: select differnt");
            } else {
                $(this).addClass("x");
                winner();
                var value = winner();
                if (value == true) {
                    setTimeout(function () {
                        $(".winMessage").addClass("show");
                        $(".winText").text("X WINS!! ")
                        $(".box").removeClass("x || o");
                    }, 200)
                }
                $(".container").removeClass("x").addClass("o");
            }
        } else if ($(".container").hasClass("o")) {
            if ($(this).hasClass("x")) {
                alert("class O: choose differnt")
            } else {
                $(this).addClass("o");
                winner();
                var value = winner();
                if (value == true) {
                    setTimeout(function () {
                        $(".winMessage").addClass("show");
                        $(".winText").text("O WINS!! ")
                        $(".box").removeClass("x || o");
                    }, 200)

                }
                $(".container").removeClass("o").addClass("x");
            }
        }


    });

});

function winner() {
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
