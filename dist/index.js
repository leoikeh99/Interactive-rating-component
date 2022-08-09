const ratings = document.querySelectorAll("li");
let selectedRating;

function selectRating(e) {
  if (selectedRating !== undefined) {
    ratings[selectedRating - 1].classList.remove("active");
  }

  selectedRating = Number(e.target.innerText);
  e.target.classList.add("active");
}

function submitRating() {
  if (selectedRating) {
    document.getElementById("initial-view").classList.add("hide");
    document.getElementById("final-view").classList.remove("hide");
    document.getElementById("final-view").style.animation = "fadeIn 1s ease-in";
    document.getElementById("selected-rating").innerText = selectedRating;
  }
}

ratings.forEach(function (elem) {
  elem.addEventListener("click", selectRating);
});

document.querySelector("button").addEventListener("click", submitRating);
