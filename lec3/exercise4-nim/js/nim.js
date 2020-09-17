/* Program the game Nim with jQuery:

Nim starts with a number of sticks, e.g., 20
The players (you + computer) take turns to remove either 2 or 3 sticks
A player loses if he/she takes the last sticks
(or there's < 3 left to him/her)

Adapt 06_jQuery/04_events+json+localstorage/01_eventHandling_MVC.html

Your model should contain a stickcount and a Boolean gameover

Start with a dumb computer tactic that, e.g., always removes 2 sticks */
// === holds page data ===
class NimDataModel {
    constructor() {
        /* this.player = 0;
        this.computer = 1; */
        this.state = null;
        this.initial = 20;
        this.visualize();
    }

    remove(n) {
        this.initial -= n;
        this.visualize();
    }

    stickcount() {
        return this.initial;
    }

    setState(n) {
        this.state = n;
    }
    computerSelect() {
        if (this.stickcount() < 3) {
            return $("#result").text("You won");
        }
        this.initial -= Math.random() < 0.5 ? 2 : 3;;
        this.visualize();
    }

    gameover() {
        console.log(this.state);
        if (this.stickcount() < 3) {
            if (this.state == 1) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    visualize() {
        let sticks = "";
        for (let x = 0; x < this.initial; x++) {
            sticks += "  /  ";
        }
        $("#visualization").text(this.initial).append("<h1>" + sticks + "</h1>")
    }

}

$(document).ready(() => {
    // === initialization of data =================
    let myData = new NimDataModel();
    myData.visualize();
    // === setup UI ===============================
    $("#three").addClass("button").click(event => {

        if (myData.gameover() == 1) {
            $(this).prop("disabled", true);
            $("#result").text("Computer won");
        } else if (myData.gameover() == 0) {
            $(this).prop("disabled", true);
            $("#result").text("You won");
        } else {
            myData.remove(3);
            myData.setState(0);
            setTimeout(() => {
                myData.computerSelect();
                myData.setState(1);
            }, 2000);;

        }
    });

    $("#two").addClass("button").click(event => {

        if (myData.gameover() == 1) {
            $(this).prop("disabled", true);
            $("#result").text("Computer won")
        } else if (myData.gameover() == 0) {
            $(this).prop("disabled", true);
            $("#result").text("You won")
        } else {
            myData.remove(2);
            myData.setState(0);
            setTimeout(() => {
                myData.computerSelect();
                myData.setState(1);
            }, 2000);;

        }
    });
    $(".button").mousedown(event => { // prevent selection
        event.preventDefault();
    });
    $("#reset").addClass("button").click(event => {
        location.reload();
    });
});