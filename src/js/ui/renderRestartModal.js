import init from "../init";

export default function renderRestartModal(winner) {
  const body = document.body;

  const modal = document.createElement("div")
  modal.classList.add("modal")

  const modalContent = document.createElement('div')
  modalContent.classList.add("modal-content")

  const modalTitle = document.createElement("modal-title")
  modalTitle.textContent = `${winner} won the game!`
  modalTitle.classList.add("modal-title")

  const button = document.createElement("button");
  button.textContent = 'Play again';
  button.classList.add("rotate");

  modalContent.appendChild(modalTitle)
  modalContent.appendChild(button)

  modal.appendChild(modalContent);

  body.appendChild(modal);

  button.addEventListener("click", () => {
    init();
    modal.remove();
  })
}
