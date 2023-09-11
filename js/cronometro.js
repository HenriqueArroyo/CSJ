// Declarando Variáveis
var sec = 0;
var min = 0;
var hr=0
var intervalo;


// Impede o digito de chegar em 10, retornando-o para 0 e adicionando ao outro digito
function doisDigitos(digito){
    if(digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}

// Função para Iniciar o Cronometro
function iniciar(){
    relogio()
    intervalo= setInterval(relogio,10)
}

// Função para Pausar o Cronometro
function pausar(){
    clearInterval(intervalo)

}


// Função para Parar o Cronometro // Mostrar mensagem que demonstra o tempo em que o Cronometro foi Parado
function parar(){
    clearInterval(intervalo)
    sec=0
    min=0
    window.alert("Tempo parado em  "+document.getElementById('relogio').innerText)
    document.getElementById('relogio').innerText='00:00:00'

}

// Dinâmica de Tempo do Relógio, Quando se chega ao limite da medida se adiciona a próxima medida e se zera o digito
function relogio(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('relogio').innerText=doisDigitos(hr)+':'+doisDigitos(min)+':'+doisDigitos(sec)
}