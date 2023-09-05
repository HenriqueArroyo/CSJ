var contUser = 0
var contPc = 0

const imgUser = document.getElementById("user")
const imgPC = document.getElementById("pc")
const playing = document.getElementById("playing")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

const audioWin = new Audio("assets/sounds/winning.wav")
const audioLose = new Audio("assets/sounds/losing.wav")

var player1 = ""
var player2 = ""


playing.addEventListener("click", () => {
    reset()
    playPc()
})

function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='/img/" + player1 + ".png'>"
    imgPC.innerHTML = ""
}

function playPc() {
    let opt = ['rock', 'paper', 'scissor']
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num]
    imgPC.innerHTML = "<img src='/img/" + player2 + ".png'>"
    analyze()
}

function analyze() {

    playing.disabled = true

    let win = "0"
    if (player1 == player2) {

    } else if (player1 == "rock"&&player2 == "scissor") {
        win = 1 
        imgPC.innerHTML = "<video autoplay muted loop src='/img/pedrawinstesoura2.mp4' >"
    } else if (player1 == "paper"&&player2 == "rock") {
        win = 1
        imgPC.innerHTML = "<video autoplay muted loop src='/img/papelwinspedra2.mp4' >"
    } else if (player1 == "scissor"&&player2 == "paper") {
        win = 1
        imgPC.innerHTML = "<video autoplay muted loop src='/img/tesourawinspapel2.mp4' >"
    }  else if (player2 == "rock"&&player1 == "scissor") {
        win = -1 
        imgPC.innerHTML = "<video autoplay muted loop src='/img/pedrawinstesoura.mp4' >"
    } else if (player2 == "paper"&&player1 == "rock") {
        win = -1
        imgPC.innerHTML = "<video autoplay muted loop src='/img/papelwinspedra.mp4' >"
    } else if (player2 == "scissor"&&player1 == "paper") {
        win = -1
        imgPC.innerHTML = "<video autoplay muted loop src='/img/tesourawinspapel.mp4' >"
    } 
    if(win == 0){
        
    } else if(win > 0){ 
        contUser = contUser + 1
        audioWin.play()
    } else {
        contPc = contPc + 1
        audioLose.play()
    }

    if (contUser >= 5){
        winner.classList.remove('none')
        winner.classList.add('center')
    }

    if (contPc >= 5){
        loser.classList.remove('none')
        loser.classList.add('center')
    }

    contador.innerHTML = contUser +  ":" + contPc

    setTimeout(()=>{
        playing.disabled = false
        clear();
    },2000)
}

function clear(){
    imgPC.innerHTML=""
    imgUser.innerHTML = ""
}

function newGame(){
    contador.innerHTML = "0:0"
    contPc = 0
    contUser = 0
    reset()
    winner.classList.add('none')
    winner.classList.remove('center')
    loser.classList.add('none')
    loser.classList.remove('center')
}