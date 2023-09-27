// Seleciona todos os elementos com a classe 'key'
const keys = document.querySelectorAll('.key');

// Função para tocar o som a sua respectiva nota.
function playSound(note) {
    // Cria um novo elemento de áudio e atribui o arquivo de som com base na nota selecionada.
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.currentTime = 0;  // Reinicia o áudio para o início, permitindo tocar várias vezes rapidamente.
    audio.play();  // Toca o som.
}

// Mapeamento de teclas do teclado 
const keyMap = {
    a: 'A',
    s: 'D',
    d: 'F',
    f: 'B',
    g: 'E',
    h: 'G',
    j: 'C',
};

keys.forEach((key) => {
    // Quando um elemento é clicado, adiciona a classe 'active' e toca o som selecionado.
    key.addEventListener('mousedown', () => {
        key.classList.add('active');
        playSound(key.dataset.note);
    });

    // Quando o botão do mouse é liberado, remove a classe 'active'.
    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
    });

    // Quando o cursor deixa o elemento, remove a classe 'active'.
    key.addEventListener('mouseleave', () => {
        key.classList.remove('active');
    });
});

// funcionalidade teclas do teclado.
window.addEventListener('keydown', (e) => {
    // Verifica se a tecla pressionada corresponde a uma nota no mapeamento.
    if (keyMap[e.key.toLowerCase()]) {
        playSound(keyMap[e.key.toLowerCase()]);  // Toca o som da tecla pressionada.
        const keyElement = document.querySelector(`[data-note="${keyMap[e.key.toLowerCase()]}"]`);
        if (keyElement) {
            keyElement.classList.add('active');  // Adiciona a classe 'active' ao elemento selecionado.
        }
    }
});

// Funcionalidade quando as teclas do teclado são liberadas.
window.addEventListener('keyup', (e) => {
    // Remove a classe 'active' quando a tecla é liberada.
    const keyElement = document.querySelector(`[data-note="${keyMap[e.key.toLowerCase()]}"]`);
    if (keyElement) {
        keyElement.classList.remove('active');
    }
});
