// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let buttonOpenModal = document.getElementById("buttonOpenModal");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

buttonOpenModal.onclick = function () {
  modal.style.display = "block";
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
