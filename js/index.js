var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const audio1 = new Audio("songs/red.mp3");
const audio2 = new Audio("songs/orange.mp3");
const audio3 = new Audio("songs/yellow.mp3");
const audio4 = new Audio("songs/vibrate.mp3");
const audio5 = new Audio("songs/dot.mp3");
const audio6 = new Audio("songs/two.mp3");
const audio7 = new Audio("songs/blue.mp3");
const audio8 = new Audio("songs/green.mp3");
const audio9 = new Audio("songs/purple.mp3");

$("#red").click(function () {
  audio9.pause();
  audio8.pause();
  audio7.pause();
  audio6.pause();
  audio5.pause();
  audio4.pause();
  audio3.pause();
  audio2.pause();
  audio1.play();
});

$("#orange").click(function () {
  audio9.pause();
  audio8.pause();
  audio7.pause();
  audio6.pause();
  audio5.pause();
  audio4.pause();
  audio3.pause();
  audio1.pause();
  audio2.play();
});

$("#yellow").click(function () {
  audio9.pause();
  audio8.pause();
  audio7.pause();
  audio6.pause();
  audio5.pause();
  audio4.pause();
  audio1.pause();
  audio2.pause();
  audio3.play();
});

$("#vibrate").click(function () {
  audio9.pause();
  audio8.pause();
  audio7.pause();
  audio6.pause();
  audio5.pause();
  audio1.pause();
  audio3.pause();
  audio2.pause();
  audio4.play();
});

$("#dot").click(function () {
  audio9.pause();
  audio8.pause();
  audio7.pause();
  audio6.pause();
  audio1.pause();
  audio4.pause();
  audio3.pause();
  audio2.pause();
  audio5.play();
});

$("#two").click(function () {
  audio9.pause();
  audio8.pause();
  audio7.pause();
  audio1.pause();
  audio5.pause();
  audio4.pause();
  audio3.pause();
  audio2.pause();
  audio6.play();
});

$("#blue").click(function () {
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio8.pause();
  audio9.pause();
  audio7.play();
});

$("#green").click(function () {
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
  audio9.pause();
  audio8.play();
});

$("#purple").click(function () {
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
  audio8.pause();
  audio9.play();
});
