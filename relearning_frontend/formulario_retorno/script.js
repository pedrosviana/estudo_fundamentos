document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');

  // Cria a estrutura do modal dinamicamente
  function criarModal() {
    const overlay = document.createElement('div');
    overlay.id = 'modalOverlay';
    overlay.className = 'modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'modal';

    const titulo = document.createElement('h2');
    titulo.textContent = 'Obrigado por se cadastrar!';

    const botaoFechar = document.createElement('button');
    botaoFechar.id = 'fecharModal';
    botaoFechar.textContent = 'Fechar';

    modal.appendChild(titulo);
    modal.appendChild(botaoFechar);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Fecha ao clicar no botão
    botaoFechar.addEventListener('click', () => {
      overlay.classList.remove('active');
    });

    // Fecha ao clicar fora do modal
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        overlay.classList.remove('active');
      }
    });

    return overlay;
  }

  // Cria o modal apenas uma vez e reaproveita a referência
  const modalOverlay = criarModal();

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // evita recarregar a página

    // Aqui você poderia enviar os dados para um servidor (fetch/AJAX)
    // Por enquanto, apenas exibimos o modal de sucesso.

    modalOverlay.classList.add('active');
    form.reset();
  });
});