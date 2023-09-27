// Declarando Variáveis
var sec = 0;  
var min = 0;  
var hr = 0;   
var intervalo;  // usado para pausar o cronômetro

// garante que os números de horas, minutos e segundos sempre sejam exibidos com dois dígitos
function doisDigitos(digito) {
    if (digito < 10) {
        return ('0' + digito);
    } else {
        return (digito);
    }
}

// Função para Iniciar o Cronômetro
function iniciar() {
    relogio();
    intervalo = setInterval(relogio, 10);  // A cada 10 milissegundos, a função relogio() será chamada para atualizar o cronômetro.
}

// Função para Pausar o Cronômetro
function pausar() {
    clearInterval(intervalo);  // Para o intervalo, pausando o cronômetro.
}

// Função para Parar o Cronômetro e mostrar uma mensagem com o tempo decorrido
function parar() {
    clearInterval(intervalo);  // Para o intervalo, interrompendo o cronômetro.
    // reinicia os atributos
    sec = 0; 
    min = 0;  
    window.alert("Tempo parado em " + document.getElementById('relogio').innerText);  // Exibe uma mensagem com o tempo decorrido
    document.getElementById('relogio').innerText = '00:00:00';  // Reinicia a exibição do cronômetro para 00:00:00
}

// Dinâmica de Tempo do Relógio, incrementa os segundos, minutos e horas, ajustando quando eles alcançam seu limite
function relogio() {
    sec++;  // Incrementa os segundos

    if (sec == 60) {
        min++;  // Se os segundos chegarem a 60, incrementa os minutos e redefine os segundos para 0
        sec = 0;

        if (min == 60) {
            min = 0;  // Se os minutos chegarem a 60, incrementa as horas e redefine os minutos para 0
            hr++;
        }
    }

    // Atualiza o elemento HTML com a exibição formatada do tempo
    document.getElementById('relogio').innerText = doisDigitos(hr) + ':' + doisDigitos(min) + ':' + doisDigitos(sec);
}
