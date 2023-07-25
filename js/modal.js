// 모달 열기/닫기 함수
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal-button");
var close = document.querySelector(".close");

modalButton.onclick = function() {
  modal.style.display = "block";
};

close.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// 페이지 모달 열기/닫기 함수
var subModal = document.querySelector(".sub-modal");
var subModalButton = document.querySelectorAll(".open-modal");
var subModalClose = document.querySelectorAll(".sub-modal .close");

subModalButton.forEach(function(el) {
  el.onclick = function() {
    subModal.style.display = "block";
  };
});

subModalClose.forEach(function(el) {
  el.onclick = function() {
    subModal.style.display = "none";
  };
});

window.onclick = function(event) {
  if (event.target == subModal) {
    subModal.style.display = "none";
  }
};
