// Efeito de digitação
const phrases = ["Análise de Sistemas", "Gestão de Processos", "Soluções Tecnológicas"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Iniciar após carregamento
if (typingElement) {
    setTimeout(typeWriter, 1000);
}

// Animação de digitação para "Digital Experiences"
function typeImpact() {
    const element = document.getElementById('typing-digitaExperiences');
    if (!element) return;
    
    const text = 'Digital Experiences';
    let index = 0;
    let isDeleting = false;
    
    function type() {
        const current = text.substring(0, index);
        element.textContent = current;
        
        let speed = isDeleting ? 50 : 100;
        
        if (!isDeleting && index < text.length) {
            index++;
            speed = 100 + Math.random() * 50; // Variação natural
        } else if (!isDeleting && index === text.length) {
            speed = 2000; // Pausa no final
            isDeleting = true;
        } else if (isDeleting && index > 0) {
            index--;
            speed = 50;
        } else {
            isDeleting = false;
            speed = 500;
        }
        
        setTimeout(type, speed);
    }
    
    // Iniciar após 1.5s (depois do nome carregar)
    setTimeout(type, 1500);
}

// Chamar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', typeImpact);