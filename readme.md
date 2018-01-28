# Dynamic Background color using rgb color in  pure javascript 

This is a funny little project, which will help you to practice some javascript with fun. Things I have covered in this lesson     

## Math object 

Math object is a collections of `properties` and `method` to perform mathematical calculation.

~~~js
// for getting pi value
Math.PI

// for getting ceil value
Math.ceil(2.33);

//for getting floor value
Math.floor(2.33);

//for getting round value
Math.round(2.33);
Math.round(2.63);
//for getting random number between 0 - 1;
Math.random()

//for getting random number between 0 - 5;
Math.random() * 5

//for getting random integer number between 0 - 5;
Math.floor(Math.random() * 5)

//for getting random integer number between 0 - 5 using pareInt function
// I mean instead of Math.floor() method we can use parseInt function 
parseInt(Math.random() * 5)
~~~

## style in js
using `element.style` object we can style our html document in javascript. In css, we are using `background-color` as css property. But in js `hyphen (-)` treated as `arithmetic operator`. So instead of `background-color` we will use cameCase version 'backgroundColor'. Same goes to similar css properties like `fontFamily`     

~~~php
body.style.backgroundColor = 'red';
body.style.color = 'white';
~~~


##  string interpolation using backtick

~~~js
var name = 'sumon';
var text = `my name is ${name}`;
~~~

## addEventListener

using `addEventListener` we can attach any event to a element

~~~php
button.addEventListener('click', function () {
  // whatever you want to execute on click event
});
~~~
Here first parameter is event name, second parameter is a function   

# setTimeout and setInterval function in js

using `setTimeout`  function we can delayed any execution in certain time, using setInterval method we can do certain work certain time later again and again    

~~~js
setTimeout(function () {
  console.log('helo world')
}, 10000);
setInterval(function () {
  console.log(new Date())
}, 3000);
~~~


## How to make a dynamic  colors using css rgb colors      

color using  `rgb(0, 255, 255)` value we require value for red, green, blue. Min value is 0 and max value is 255. So we have to generate 3 random value in between 0 and 255. Which can be done using  Math.random() and parseInt() method      

~~~js
Math.floor( Math.random() * 255);
~~~


Once we have 3 random numbers, using string interpolation we will set rgb value      

~~~js
var number_one = Math.floor( Math.random() * 255);
var number_two = Math.floor( Math.random() * 255);
var number_three = Math.floor( Math.random() * 255);
body.style.backgroundColor =  `rgb(${number_one}, ${number_two}, ${number_three})`
~~~


Here is the full code for sneak peek. We have added setTimeout and setInterval functionality to make it little more fun          

~~~js
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
~~~
           
         
My name is shibu deb polo        
Thanks         
Please subscribe to my channel https://www.youtube.com/c/polodev10        
Happy coding!      





