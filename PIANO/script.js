const keys = document.querySelectorAll('.key');

function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.currentTime = 0;
    audio.play();
}

const keyMap = {
    a: 'A&',
    w: 'B&',
    s: 'C&',
    o: 'D&',
    l: 'E&',
    p: 'F&',
    t: 'G&',
    g: 'A#',
    y: 'C#',
    h: 'D#',
    u: 'F#',
    j: 'G#',
    k: 'H&',
    o: 'I&',
    l: 'J&',
    p: 'K&',
    ';': 'L&',
};

keys.forEach((key) => {
    key.addEventListener('mousedown', () => {
        key.classList.add('active');
        playSound(key.dataset.note);
    });

    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
    });

    key.addEventListener('mouseleave', () => {
        key.classList.remove('active');
    });
});

window.addEventListener('keydown', (e) => {
    if (keyMap[e.key.toLowerCase()]) {
        playSound(keyMap[e.key.toLowerCase()]);
        const keyElement = document.querySelector(`[data-note="${keyMap[e.key.toLowerCase()]}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
        }
    }
});

window.addEventListener('keyup', (e) => {
    // Remova a classe 'active' quando a tecla for liberada
    const keyElement = document.querySelector(`[data-note="${keyMap[e.key.toLowerCase()]}"]`);
    if (keyElement) {
        keyElement.classList.remove('active');
    }
});