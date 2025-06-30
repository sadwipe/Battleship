export default function renderModal() {
  const body = document.body;

  const modal = document.createElement("div")
  modal.classList.add("modal")

  const modalContent = document.createElement('div')
  modalContent.classList.add("modal-content")

  const modalTitle = document.createElement("modal-title")
  modalTitle.textContent = "Welcome to Battleship game"
  modalTitle.classList.add("modal-title")

  const description = document.createElement("div");
  description.innerHTML = 'Place your <u>Carrier</u>';
  description.classList.add("description");

  const button = document.createElement("button");
  button.textContent = 'Rotate';
  button.classList.add("rotate");

  const board = document.createElement("div");
  board.classList.add("board");
  board.classList.add("build");

  modalContent.appendChild(modalTitle)
  modalContent.appendChild(description)
  modalContent.appendChild(button)
  modalContent.appendChild(board)

  modal.appendChild(modalContent);

  body.appendChild(modal);
}
