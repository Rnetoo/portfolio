// Filtro de projetos
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Atualizar botões ativos
    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('bg-primary', 'text-white');
            btn.classList.remove('glass');
        } else {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('glass');
        }
    });
    
    // Filtrar cards
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category').includes(category)) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Modal functions
function showAddProjectInfo() {
    const modal = document.getElementById('add-project-modal');
    const content = document.getElementById('modal-content');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('add-project-modal');
    const content = document.getElementById('modal-content');
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

// Fechar modal ao clicar fora
document.getElementById('add-project-modal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});