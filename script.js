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
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            overlay.style.display = 'none'; 

            document.querySelector('.container').classList.add('animate');
            document.querySelector('.banner').classList.add('animate');
            document.querySelector('.bio-header').classList.add('animate');
            document.querySelector('.social-icons').classList.add('animate');
            document.querySelector('#progress-bar-container').classList.add('animate');
        });
    }
});


