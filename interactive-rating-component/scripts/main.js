'use strict';

const submitBtn = document.getElementById("submitbtn");
const ratingCard = document.getElementById("ratingcard");
const thankYouCard = document.getElementById("thankyoucard");

let rating = 0;
const ratingOpts = Array.prototype.slice.call(document.querySelector('.rating-card__items').elements);

ratingOpts.forEach((item) => {
  item.addEventListener("click", function (e) {
    rating = this.value;
    this.classList.add("btn-active");
  })
});


submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById("result").innerText = rating;
  document.getElementById("thankyoucard").classList.remove("inactive");
  document.getElementById("ratingcard").classList.add("inactive");
});