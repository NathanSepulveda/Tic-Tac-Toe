let winner = ""
let turns = 0
let undo = 0
let xAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let yAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let xWins = document.getElementById("Xwins")
let yWins = document.getElementById("Ywins")
let xScore = 0
let yScore = 0
alert("Best Two-Out-Of-Three")
let xAnswerKey = [
    [1, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 0, 1, 1, 0],
    [1, 0, 1, 1, 0, 0, 1, 1, 0],
    [1, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 1, 1, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 1, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 1, 1, 0, 1],
    [0, 1, 1, 0, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 1, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1]   
]
let yAnswerKey = [
    [1, 1, 1, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 0, 1, 1, 0],
    [1, 0, 1, 1, 0, 0, 1, 1, 0],
    [1, 0, 0, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 1, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 1, 0],
    [1, 0, 0, 1, 0, 0, 1, 1, 0],
    [1, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 1],
    [0, 1, 0, 1, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0, 1, 1], 
    [0, 1, 1, 0, 1, 1, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 1, 0, 1],
    [0, 1, 1, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 1, 1, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 1, 1, 1],

    // [0, 1, 0, 0, 1, 0, 0, 1, 0]
]

function tester() {
    xAnswerKey.forEach(taco => {
        // console.log(taco.toString())

        if (taco.toString() === xAnswers.toString()) {
            alert("X wins")
            winner = "X"
            xScore++
            xWins.innerHTML = `X Wins: ${xScore}`
            if (xScore > (yScore) && xScore >= 2) {
                alert("X is the game's winner")
                location.reload();
            } else if (yScore > xScore && yScore >= 2) {
                alert("O is the game's winner")
                location.reload();
            } 
        }
        if (turns > 9 && winner !== "X" && winner !== "Y") {   
            alert("tie")
            turns = 0
        }
    }
    )
}

function testerY() {
    yAnswerKey.forEach(taco => {
        // console.log(taco.toString())
        if (taco.toString() === yAnswers.toString()) {
            alert("O wins")
            winner = "O"
            yScore++
            yWins.innerHTML = `O Wins: ${yScore}`
            if (xScore > yScore && xScore >= 2) {
                alert("X is the game's winner")
                location.reload();
            } else if (yScore > xScore && yScore >= 2) {
                alert("O is the game's winner")
                location.reload();
            }
        }
        if (turns > 8 && winner !== "X" && winner !== "Y") {           
            alert("tie")
            turns = 0
        }
    }
    )
}


var box1 = document.getElementById('1');
box1.addEventListener("click", listener_1, false);

var box2 = document.getElementById('2');
box2.addEventListener("click", listener_2, false);

var box3 = document.getElementById('3');
box3.addEventListener("click", listener_3, false);

var box4 = document.getElementById('4');
box4.addEventListener("click", listener_4, false);

var box5 = document.getElementById('5');
box5.addEventListener("click", listener_5, false);

var box6 = document.getElementById('6');
box6.addEventListener("click", listener_6, false);

var box7 = document.getElementById('7');
box7.addEventListener("click", listener_7, false);

var box8 = document.getElementById('8');
box8.addEventListener("click", listener_8, false);

var box9 = document.getElementById('9');
box9.addEventListener("click", listener_9, false);

function listener_1() {
    // let clicked = false
    let box = document.getElementById('1')
    if (box.innerHTML !== "") {
        alert("You clicked me again!")
    }
    else if (turns % 2 === 0) {
        box.innerHTML = "X";
        box.classList.add("xColors")
        xAnswers[0] = 1
        turns++
    } else {
        document.getElementById('1').innerHTML = "0";
        yAnswers[0] = 1
        box.classList.add("yColors")
        turns++
    }
    tester()
    testerY()
}

function listener_2() {
    let box = document.getElementById('2')
    if (box.innerHTML !== "") {
        alert("You clicked me again!")
    }
    else if (turns % 2 === 0) {
        box.innerHTML = "X";
        box.classList.add("xColors")
        // console.log(box)
        xAnswers[1] = 1
        turns++
    } else {
        document.getElementById('2').innerHTML = "0";
        yAnswers[1] = 1
        box.classList.add("yColors")
        turns++
    }
    tester()
}

function listener_3() {
    let box = document.getElementById('3')
    if (box.innerHTML !== "") {
        alert("You clicked me again!")
    }
    else if (turns % 2 === 0) {
        box.innerHTML = "X";
        box.classList.add("xColors")
        xAnswers[2] = 1
        turns++
    } else {
        document.getElementById('3').innerHTML = "0";
        yAnswers[2] = 1
        box.classList.add("yColors")
        turns++
    }
    tester()
    testerY()
}


function listener_4() {
    let box = document.getElementById('4')
    if (box.innerHTML !== "") {
        alert("You clicked me again!")
    }
    else if (turns % 2 === 0) {
        box.innerHTML = "X";
        box.classList.add("xColors")
        xAnswers[3] = 1
        turns++
    } else {
        document.getElementById('4').innerHTML = "0";
        yAnswers[3] = 1
        box.classList.add("yColors")
        turns++
    }
    tester()
    testerY()
}

function listener_5() {
    let box = document.getElementById('5')
    if (box.innerHTML !== "") {
        alert("You clicked me again!")
    }
    else if (turns % 2 === 0) {
        box.innerHTML = "X";
        box.classList.add("xColors")
        xAnswers[4] = 1
        turns++
    } else {
        document.getElementById('5').innerHTML = "0";
        yAnswers[4] = 1
        box.classList.add("yColors")
        turns++
    }
    tester()
    testerY()
}

function listener_6() {
    let box = document.getElementById('6')
    if (box.innerHTML !== "") {
        alert("You clicked me again!")
    }
    else if (turns % 2 === 0) {
        box.innerHTML = "X";
        box.classList.add("xColors")
        xAnswers[5] = 1
        turns++
    } else {
        document.getElementById('6').innerHTML = "0";
        yAnswers[5] = 1
        box.classList.add("yColors")
        turns++
    }
    tester()
    testerY()
}

function listener_7() {
    let box = document.getElementById('7')
    if (box.innerHTML !== "") {
        alert("You clicked me again!")
    }
    else if (turns % 2 === 0) {
        box.innerHTML = "X";
        box.classList.add("xColors")
        xAnswers[6] = 1
        turns++
    } else {
        document.getElementById('7').innerHTML = "0";
        yAnswers[6] = 1
        box.classList.add("yColors")
        turns++
    }
    tester()
    testerY()
}

function listener_8() {
    let box = document.getElementById('8')
    if (box.innerHTML !== "") {
        alert("You clicked me again!")
    }
    else if (turns % 2 === 0) {
        box.innerHTML = "X";
        box.classList.add("xColors")
        xAnswers[7] = 1
        turns++
    } else {
        document.getElementById('8').innerHTML = "0";
        yAnswers[7] = 1
        box.classList.add("yColors")
        turns++
    }
    tester()
    testerY()
}

function listener_9() {
    let box = document.getElementById('9')
    if (box.innerHTML !== "") {
        alert("You clicked me again!")
    }
    else if (turns % 2 === 0) {
        box.innerHTML = "X";
        box.classList.add("xColors")
        xAnswers[8] = 1
        turns++
    } else {
        document.getElementById('9').innerHTML = "0";
        box.classList.add("yColors")
        yAnswers[8] = 1
        turns++
    }
    tester()
    testerY()
}

function myFunction() {
    console.log(xAnswers, yAnswers)
    winner = ""
    turns = 0
    undo = 0
    xAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    yAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    let box1 = document.getElementById('1')
    let box2 = document.getElementById('2')
    let box3 = document.getElementById('3')
    let box4 = document.getElementById('4')
    let box5 = document.getElementById('5')
    let box6 = document.getElementById('6')
    let box7 = document.getElementById('7')
    let box8 = document.getElementById('8')
    let box9 = document.getElementById('9')

    box1.innerHTML = "";
    box1.classList.remove("xColors")
    box1.classList.remove("yColors")
    box2.innerHTML = "";
    box2.classList.remove("xColors")
    box2.classList.remove("yColors")
    box3.innerHTML = "";
    box3.classList.remove("xColors")
    box3.classList.remove("yColors")
    box4.innerHTML = "";
    box4.classList.remove("xColors")
    box4.classList.remove("yColors")
    box5.innerHTML = "";
    box5.classList.remove("xColors")
    box5.classList.remove("yColors")
    box6.innerHTML = "";
    box6.classList.remove("xColors")
    box6.classList.remove("yColors")
    box7.innerHTML = "";
    box7.classList.remove("xColors")
    box7.classList.remove("yColors")
    box8.innerHTML = "";
    box8.classList.remove("xColors")
    box8.classList.remove("yColors")
    box9.innerHTML = "";
    box9.classList.remove("xColors")
    box9.classList.remove("yColors")
}

console.log(turns)
