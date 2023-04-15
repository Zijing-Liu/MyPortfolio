// JS function to view large picutre in a modal when users cilcks on the images in the prototye section
function zoomIn() {
  var modal = document.getElementById("modal");

  var imgs = document.querySelectorAll("img");
  var modalImg = document.getElementById("modal-img");

  imgs.forEach((i) => {
    i.onclick = function () {
      modalImg.src = i.src;
      modal.style.display = "block";
    };
  });

  modalImg.onclick = function () {
    modal.style.display = "none";
  };
}
