var body = document.body;
var button = document.querySelector('button')

function color_change () {
  var number_one = Math.floor( Math.random() * 255);
  var number_two = Math.floor( Math.random() * 255);
  var number_three = Math.floor( Math.random() * 255);
  body.style.backgroundColor =  `rgb(${number_one}, ${number_two}, ${number_three})`
}
color_change();
body.style.color = 'white';
button.addEventListener('click', color_change);

var auto_color = setInterval(color_change, 500);

setTimeout(function () {
  clearInterval(auto_color);
}, 10000);