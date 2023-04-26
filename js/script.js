const question1 = document.querySelector(".q1");
const question2 = document.querySelector(".q2");
const question3 = document.querySelector(".q3");
const question4 = document.querySelector(".q4");
const question5 = document.querySelector(".q5");
const answer1 = document.querySelector(".a1");
const answer2 = document.querySelector(".a2");
const answer3 = document.querySelector(".a3");
const answer4 = document.querySelector(".a4");
const answer5 = document.querySelector(".a5");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const arrow4 = document.querySelector(".arrow4");
const arrow5 = document.querySelector(".arrow5");

question1.addEventListener("click", function () {
  answer1.classList.toggle("show");
  question1.classList.toggle("bold");
  arrow1.classList.toggle("rotate");
});
question2.addEventListener("click", function () {
  answer2.classList.toggle("show");
  question2.classList.toggle("bold");
  arrow2.classList.toggle("rotate");
});
question3.addEventListener("click", function () {
  answer3.classList.toggle("show");
  question3.classList.toggle("bold");
  arrow3.classList.toggle("rotate");
});
question4.addEventListener("click", function () {
  answer4.classList.toggle("show");
  question4.classList.toggle("bold");
  arrow4.classList.toggle("rotate");
});
question5.addEventListener("click", function () {
  answer5.classList.toggle("show");
  question5.classList.toggle("bold");
  arrow5.classList.toggle("rotate");
});
