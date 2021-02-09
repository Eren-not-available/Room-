const toggleButton = document.getElementsByClassName("toggle-button")[0];
const bava = document.getElementsByClassName("bava")[0];

toggleButton.addEventListener("click", () => {
  bava.classList.toggle("active");
});
