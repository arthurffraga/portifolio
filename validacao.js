console.log("O arquivo JS conectou com sucesso!");

const formulario = document.getElementById('form-contato');
const caixaAlerta = document.getElementById('mensagem-alerta');

function validarFormulario(evento) {
    evento.preventDefault(); 
    console.log("O botão de enviar foi clicado e o JS conseguiu parar o recarregamento!");
    const valorNome = document.getElementById('nome').value.trim();
    const valorEmail = document.getElementById('email').value.trim();
    const valorMensagem = document.getElementById('mensagem').value.trim();

    if (valorNome === '' || valorEmail === '' || valorMensagem === '') {
        caixaAlerta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Por favor, preencha todos os campos antes de enviar!
            </div>
        `;
    } else {
        caixaAlerta.innerHTML = `
            <div class="alert alert-success" role="alert">
                Mensagem enviada com sucesso, ${valorNome}!
            </div>
        `;
        formulario.reset();
        textoContador.textContent = `0 / ${limite} caracteres`;
    }
}
formulario.addEventListener('submit', validarFormulario);

const campoMensagem = document.getElementById('mensagem');
const textoContador = document.getElementById('contador');
const limite = 250;

function atualizarContador() {
    const tamanhoAtual = campoMensagem.value.length;
    
    textoContador.textContent = `${tamanhoAtual} / ${limite} caracteres`;
    if (tamanhoAtual >= 240) {
        textoContador.classList.replace('text-muted', 'text-danger');
    } else {
        textoContador.classList.replace('text-danger', 'text-muted');
    }
}

campoMensagem.addEventListener('input', atualizarContador);