// Função para esconder o loader e mostrar o conteúdo
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

// Simular o carregamento do conteúdo (2 segundos de espera)
window.addEventListener('load', function() {
    setTimeout(hideLoader, 1900);
});
