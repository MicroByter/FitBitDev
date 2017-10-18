'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var clock = _interopDefault(require('clock'));
var document = _interopDefault(require('document'));

function zeroPad(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

clock.granularity = "minutes";
var gameBoardT = [" ", " ", " "];
var gameBoardM = [" ", " ", " "];
var gameBoardB = [" ", " ", " "];
var myHours = document.getElementById("myHours");
var myMins = document.getElementById("myMins");
var tl = document.getElementById("tl");
var tm = document.getElementById("tm");
var tr = document.getElementById("tr");
var mybutton = document.getElementById("mybutton");
var ml = document.getElementById("ml");
var mm = document.getElementById("mm");
var mr = document.getElementById("mr");
var bl = document.getElementById("bl");
var bm = document.getElementById("bm");
var br = document.getElementById("br");
var restart = document.getElementById("restart");
var currPlayer = "0";
tl.onclick = function (e) {
    console.log("click tl");
    tl.href = setTheTile("TL");
    printGameBoard();
};
tm.onclick = function (e) {
    console.log("click tm");
    tm.href = setTheTile("TM");
    printGameBoard();
};
tr.onclick = function (e) {
    console.log("click tr");
    tr.href = setTheTile("TR");
    printGameBoard();
};
ml.onclick = function (e) {
    console.log("click ml");
    ml.href = setTheTile("ML");
    printGameBoard();
};
mm.onclick = function (e) {
    console.log("click mm");
    mm.href = setTheTile("MM");
    printGameBoard();
};
mr.onclick = function (e) {
    console.log("click mr");
    mr.href = setTheTile("MR");
    printGameBoard();
};
bl.onclick = function (e) {
    console.log("click bl");
    bl.href = setTheTile("BL");
    printGameBoard();
};
bm.onclick = function (e) {
    console.log("click bm");
    bm.href = setTheTile("BM");
    printGameBoard();
};
br.onclick = function (e) {
    console.log("click br");
    br.href = setTheTile("BR");
    printGameBoard();
};
restart.onclick = function (e) {
    console.log("click restart!");
    currPlayer = 0;
    tl.href = "b.png";
    tm.href = "b.png";
    tr.href = "b.png";
    ml.href = "b.png";
    mm.href = "b.png";
    mr.href = "b.png";
    bl.href = "b.png";
    bm.href = "b.png";
    br.href = "b.png";
    for (var i = 0; i < 3; i++) {
        gameBoardT[i] = " ";
        gameBoardM[i] = " ";
        gameBoardB[i] = " ";
    }
};
function printGameBoard() {
    console.log(gameBoardT[0] + "/" + gameBoardT[1] + "/" + gameBoardT[2]);
    console.log("-----");
    console.log(gameBoardM[0] + "/" + gameBoardM[1] + "/" + gameBoardM[2]);
    console.log("-----");
    console.log(gameBoardB[0] + "/" + gameBoardB[1] + "/" + gameBoardB[2]);
}
function setTheTile(POS) {
    switch (POS) {
        case "TL":
            gameBoardT[0] = currPlayer;
            break;
        case "TM":
            gameBoardT[1] = currPlayer;
            break;
        case "TR":
            gameBoardT[2] = currPlayer;
            break;
        case "ML":
            gameBoardM[0] = currPlayer;
            break;
        case "MM":
            gameBoardM[1] = currPlayer;
            break;
        case "MR":
            gameBoardM[2] = currPlayer;
            break;
        case "BL":
            gameBoardB[0] = currPlayer;
            break;
        case "BM":
            gameBoardB[1] = currPlayer;
            break;
        case "BR":
            gameBoardB[2] = currPlayer;
            break;
        default:
            console.log("oops, not right" + POS);
            break;
    }
    if (currPlayer == 0) {
        currPlayer = 1;
        return "x.png";
    }
    else {
        currPlayer = 0;
        return "o.png";
    }
}
function updateClock() {
    var today = new Date();
    var hours = today.getHours();
    var mins = zeroPad(today.getMinutes());
    myHours.innerText = zeroPad(hours);
    myMins.innerText = mins;
}
clock.ontick = function () { return updateClock(); };
updateClock();
