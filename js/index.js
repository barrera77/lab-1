//Reference variables
const btnOpenModal = document.querySelector("#btn-open-modal");
const modalWindow = document.querySelector("#modal-window");
const btnCloseModal = document.querySelector("#btn-close-modal");

//Event listeners
btnOpenModal.addEventListener("click", onOpenModalWindow);
btnCloseModal.addEventListener("click", onCloseModalWindow);
modalWindow.addEventListener("click", onClickOutsideModalWindow);

//functions
function onOpenModalWindow(e) {
  modalWindow.showModal();
}

function onCloseModalWindow(e) {
  modalWindow.close();
}

function onClickOutsideModalWindow(e) {
  const modalWindowDimensions = modalWindow.getBoundingClientRect();

  if (
    e.clientX < modalWindowDimensions.left ||
    e.clientX > modalWindowDimensions.right ||
    e.clientY < modalWindowDimensions.top ||
    e.clientY > modalWindowDimensions.bottom
  ) {
    e.currentTarget.close();
  }
}
