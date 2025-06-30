export default function renderRestartModal(winner) {
  const { body } = document;

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalTitle = document.createElement('div'); // not <modal-title>, it's not valid HTML
  modalTitle.textContent = `${winner} won the game!`;
  modalTitle.classList.add('modal-title');

  const button = document.createElement('button');
  button.textContent = 'Play again';
  button.classList.add('rotate');

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(button);
  modal.appendChild(modalContent);
  body.appendChild(modal);

  button.addEventListener('click', () => {
    modal.remove();
    document.dispatchEvent(new CustomEvent('restartGame'));
  });
}
