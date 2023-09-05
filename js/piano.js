const keys = document.querySelectorAll('.key');

function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.currentTime = 0;
    audio.play();
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => {
        key.classList.add('active');
        let note = '';

        switch (key.dataset.note) {
            case 'a':
                note = 'C&';
                break;
            case 'w':
                note = 'A&';
                break;
            case 's':
                note = 'D&';
                break;
            case 'e':
                note = 'A&';
                break;
            case 'd':
                note = 'D&'; 
                break;
            case 'f':
                note = 'F&';
                break;
            case 't':
                note = 'C&';
                break;
            case 'g':
                note = 'F&';
                break;
            case 'y':
                note = 'D&';
                break;
            case 'h':
                note = 'AS';
                break;
            case 'u':
                note = 'EE';
                break;
            case 'j':
                note = 'DD';
                break;
            case 'k':
                note = 'BB';
                break;
            case 'n':
                note = 'FS';
                break;
            case 'z':
                note = 'TH';
                break;
            case 'x':
                note = 'THE';
                break;
            case 'v':
                note = 'THI'; 
                break;
        }

        if (note !== '') {
            playSound(note);
        }
    });

    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
    });

    key.addEventListener('mouseleave', () => {
        key.classList.remove('active');
    });
});


document.addEventListener('keydown', (event) => {
    const keyElement = document.querySelector(`.key[data-note="${event.key.toUpperCase()}"]`);
    if (keyElement) {
        keyElement.classList.add('active');
        playSound(keyElement.dataset.note);
    }
});

document.addEventListener('keyup', (event) => {
    const keyElement = document.querySelector(`.key[data-note="${event.key.toUpperCase()}"]`);
    if (keyElement) {
        keyElement.classList.remove('active');
    }
});
// Adicione um ouvinte de eventos para o teclado
document.addEventListener('keydown', (e) => {
    // Mapeie as teclas do teclado para as notas do piano
    const keyMap = {
        a: 'C&',
        w: 'A&',
        s: 'D&',
        e: 'A&',
        d: 'D&',
        f: 'F&',
        t: 'C&',
        g: 'F&',
        y: 'D&',
        h: 'AS',
        u: 'EE',
        j: 'DD',
        k: 'BB',
        o: 'C#',
        l: 'D',
        p: 'D#',
        n: 'FS',
        z: 'TH',
        x: 'THE',
        v: 'THI',
        ';': 'E',
        "'": 'F',
    };

    // Verifique se a tecla pressionada está mapeada e reproduza o som correspondente
    if (keyMap[e.key]) {
        playSound(keyMap[e.key]);
        const keyElement = document.querySelector(`[data-note="${keyMap[e.key]}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
        }
    }
});

document.addEventListener('keyup', (e) => {
    // Remova a classe 'active' quando a tecla for liberada
    const keyElement = document.querySelector(`[data-note="${keyMap[e.key]}"]`);
    if (keyElement) {
        keyElement.classList.remove('active');
    }
});
