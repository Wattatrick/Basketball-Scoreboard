let scoreBox = document.getElementById("score-box")
let scoreBoxguest = document.getElementById("score-box-guest")
let announCement = document.getElementById("announcement")
let point = 0
let pointg = 0
let announ = "ㅤ"

function add(){
    point += 1
    scoreBox.textContent = point
}
function add2(){
    point += 2
    scoreBox.textContent = point
}
function add3(){
    point += 3
    scoreBox.textContent = point
}
function addg(){
    pointg += 1
    scoreBoxguest.textContent = pointg
}
function add2g(){
    pointg += 2
    scoreBoxguest.textContent = pointg
}
function add3g(){
    pointg += 3
    scoreBoxguest.textContent = pointg
}
function reset(){
    scoreBox.textContent = 0 
    scoreBoxguest.textContent = 0
    point = 0
    pointg = 0
}
function endgame(){
    if (point > pointg){
        announ = "The Home Team Has Won The Match 🏆"
    }else if (point < pointg){
        announ = "The Guest Team Has Won The Match 🏆"
    }else {
        announ = "It's A Draw 🤝"
    }
    announCement.textContent = announ
}