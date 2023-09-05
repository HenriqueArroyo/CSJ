var sec = 0;
var min = 0;
var hr=0
var intervalo;


function doisDigitos(digito){
    if(digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}

function iniciar(){
    relogio()
    intervalo= setInterval(relogio,10)


}

function pausar(){
    clearInterval(intervalo)

}

function parar(){
    clearInterval(intervalo)
    sec=0
    min=0
    window.alert("Tempo parado em : "+document.getElementById('relogio').innerText)
    document.getElementById('relogio').innerText='00:00:00'

}

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