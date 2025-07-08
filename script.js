// JavaScript para navegação e validação do formulário
document.addEventListener('DOMContentLoaded', () => {
    // Destaca a página atual na navegação
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Validação visual do formulário de contato
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita o envio real do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if (nome && email && mensagem) {
                alert('Mensagem enviada com sucesso! (Simulação)');
                form.reset(); // Limpa o formulário
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }
});