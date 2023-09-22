const keys = document.querySelectorAll('.key');
        
        keys.forEach(key => {
            key.addEventListener('click', () => playSound(key));
        });
        
        function playSound(key) {
            const note = key.getAttribute('data-note');
            const audio = new Audio(`sounds/A&.mp3`);
            audio.play();
        }