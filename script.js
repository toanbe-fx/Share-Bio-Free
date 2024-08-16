function showProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const container = document.getElementById('progress-bar-container');

    const language = document.getElementById('language-select').value;
    let progress = 0;
    let color = '';

    switch (language) {
        case 'html':
            progress = 80;
            break;
        case 'css':
            progress = 65;
            break;
        case 'js':
            progress = 35;
            break;
        case 'php':
            progress = 20;
            break;
        case 'c':
            progress = 85;
            break;
        case 'cpp':
            progress = 60;
            break;
    }

    if (progress === 100) {
        color = '#F4C2C2'; 
    } else if (progress >= 80) {
        color = '#FFA07A'; 
    } else if (progress >= 50) {
        color = '#32CD32'; 
    } else if (progress >= 30) {
        color = '#1E90FF';
    } else {
        color = '#FF0000'; 
    }

    progressBar.style.width = progress + '%';
    progressBar.style.backgroundColor = color;
    progressText.textContent = progress + '%';

    container.style.display = 'block';

}

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const container = document.querySelector('.container');

    if (overlay && container) {
        overlay.addEventListener('click', function() {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                container.style.display = 'block';
                container.classList.add('animate');
            }, 500);
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const seasonContainer = document.querySelector('.season');
    const isMobile = window.innerWidth <= 480;
    const numberOfElements = isMobile ? 20 : 50;

    const now = new Date();
    const month = now.getMonth(); 
    let season;

    if (month >= 2 && month <= 4) {
        season = 'spring'; 
    } else if (month >= 5 && month <= 7) {
        season = 'summer'; 
    } else if (month >= 8 && month <= 10) {
        season = 'autumn'; 
    } else {
        season = 'winter'; 
    }

    for (let i = 0; i < numberOfElements; i++) {
        const element = document.createElement('div');

        switch (season) {
            case 'summer':
                element.className = 'leaf';
                element.style.backgroundImage = 'url(img/leaf-yellow.png)';
                break;
            case 'winter':
                element.className = 'snowflake';
                break;
            case 'spring':
                element.className = 'blossom';
                element.style.backgroundImage = 'url(img/cherry-blossom.png)';
                break;
            case 'autumn':
                element.className = 'redleaf';
                element.style.backgroundImage = 'url(img/leaf-red.png)';
                break;
        }

        if (element.className === 'leaf' || element.className === 'redleaf') {
            element.style.width = `${Math.random() * 10 + 20}px`; 
            element.style.height = element.style.width;
        } else if (element.className === 'blossom') {
            element.style.width = `${Math.random() * 10 + 20}px`; 
            element.style.height = element.style.width;
        } else {
            element.style.width = `${Math.random() * 10 + 10}px`; 
            element.style.height = element.style.width;
        }

        element.style.left = `${Math.random() * 100}vw`;
        element.style.animationDuration = `${Math.random() * 10 + 5}s`;
        element.style.animationDelay = `${Math.random() * 10}s`;

        seasonContainer.appendChild(element);
    }
});