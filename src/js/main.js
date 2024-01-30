const botao = document.querySelector('.btn-plataforma');
const elementoPlataforma = document.querySelector('.btn-plataforma .plataformas')

botao.addEventListener('click', () => {
    elementoPlataforma.classList.toggle('ativo');
});