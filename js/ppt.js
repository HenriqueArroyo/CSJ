 // Variável para contar os pontos do usuário
var contUser = 0
 // Variável para contar os pontos do pc
var contPc = 0

// Variaveis
const imgUser = document.getElementById("user") // Imagem do usuário
const imgPC = document.getElementById("pc") // Imagem do pc
const playing = document.getElementById("playing") // Botão para jogar
const contador = document.getElementById("contador") // Contador de pontos
// Elemento para exibir "vencedor" ou "perdedor"
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

// Escolha dos Jogadores
var player1 = ""
var player2 = ""

// Ao clicar o botão playing
playing.addEventListener("click", () => {
    reset()  // para definir a escolha do jogador
    playPc() // para que o computador jogue
})

// redefinir a escolha do jogador
function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value // Obtém a escolha do jogador
    imgUser.innerHTML = "<img src='/img/" + player1 + ".png'>" // Exibe a imagem da escolha do jogador
    imgPC.innerHTML = "" // Limpa a imagem do computador
}

// Função para o computador jogar
function playPc() {
    let opt = ['rock', 'paper', 'scissor']
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num] // Escolha aleatória do computador
    imgPC.innerHTML = "<img src='/img/" + player2 + ".png'>" // Exibe a imagem da escolha do computador
    analyze() // analisar o resultado do jogo
}

function analyze() {

    playing.disabled = true // Desabilita o botão enquanto o resultado é exibido


    let win = "0" // armazenar o resultado do jogo

    // Empate
    if (player1 == player2) {

    } 
    // Condições de vitória e vídeos exibidos conforme o resultado
    else if (player1 == "rock"&&player2 == "scissor") {
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

    // Pontuação de Vitória
    // Se o Usuario ou o PC chegar em 5 pts acaba
    if(win == 0){
        
    } else if(win > 0){ 
        contUser = contUser + 1
      
    } else {
        contPc = contPc + 1
      
    }

     // Verifica se alguém alcançou a pontuação máxima
    if (contUser >= 5){
        winner.classList.remove('none') // Exibe a mensagem de vencedor
        winner.classList.add('center')
    }

    if (contPc >= 5){
        loser.classList.remove('none') // Exibe a mensagem de perdedor
        loser.classList.add('center')
    }

    // Placar da Partida
    contador.innerHTML = contUser +  ":" + contPc

    setTimeout(()=>{
        playing.disabled = false
        clear();
    },2000)
}

// Limpar a Imagem após a rodada
function clear(){
    imgPC.innerHTML=""
    imgUser.innerHTML = ""
}

// Reiniciar Variaveis e resetar a partida
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