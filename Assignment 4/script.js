document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startBtn');
    const soundFormArea = document.getElementById('soundFormArea');
    const soundForm = document.getElementById('soundForm');
    const thankYou = document.getElementById('thankYou');
    const soundListArea = document.getElementById('soundListArea');
    const soundList = document.getElementById('soundList');

    startBtn.addEventListener('click', function() {
        startBtn.classList.add('d-none');
        soundFormArea.classList.remove('d-none');
        soundListArea.classList.remove('d-none');
    });

    soundForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const soundInput = document.getElementById('soundHeard').value.trim();
        const locationInput = document.getElementById('locationHeard').value.trim();

        if (soundInput && locationInput) {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `"${soundInput}" near ${locationInput}`;
            soundList.appendChild(listItem);

            setTimeout(() => {
                thankYou.classList.add('d-none');
            }, 3000);
        }
    });
});

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.textContent = '🍃';

    leaf.style.left = Math.random() * 100 + 'vw';
    
    leaf.style.animationDuration = (5 + Math.random() * 5) + 's';
    
    leaf.style.fontSize = (20 + Math.random() * 30) + 'px';
    
    document.body.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 10000);
}

setInterval(createLeaf, 500);
