document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('.project-item img');
    const overlay = document.querySelector('.project-overlay');
    const overlayImage = document.getElementById('enlarged-image');
    const descriptionDiv = overlay.querySelector('.description');
    const closeBtn = overlay.querySelector('.close-btn');

    projectItems.forEach(item => {
        item.addEventListener('click', function () {
            const projectDescription = this.parentElement.querySelector('.project-description');
            const linkUrl = this.dataset.link; // Obtém o link do data-link
            
            overlay.style.display = 'flex';
            overlayImage.src = item.src;

            // Exibe a descrição que está dentro da tag <p>
            descriptionDiv.innerHTML = projectDescription.innerHTML;

            // Atualiza o link dentro da descrição
            const linkElement = descriptionDiv.querySelector('a');
            linkElement.href = linkUrl; // Define o href do link de acordo com o data-link
        });
    });

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});
