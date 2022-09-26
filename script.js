// MAIN NAV
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector('#hamburger');
  const menuCloseButton = document.querySelector('#closeMenu');
  const menu = document.querySelector('.slideOut');

  hamburgerButton.addEventListener('click', (e) => {
    menu.classList.add('open');
  });

  menuCloseButton.addEventListener('click', (e) => {
    menu.classList.remove('open');
  });
})

// BLOG FORM

// ***DOING RIGHT MEOW! 
  //=== defining the variables outside of the date() method and as properties of the blog {}

// // creating namespace
const blog = {};

// event listening and handling of the form:
  // target the form element and save as a variable so it is easier to use later 
    // need to target by classname because there multiple forms on the pages that use this script file. 
const form = document.querySelector('form');
const forms = document.querySelectorAll('form');

//   // attach event listener to the form
  // create a function to be called when the form is submitted
function preventDefault(event) {
  // prevent the default behaviour of a form submmission
  event.preventDefault();
  console.log('hi');
}

// target the user inputs from the form and capturing their value in a variable
const inputs = document.querySelectorAll('input');
const commenterName = inputs[0].value;
const comment = document.querySelector('textarea').value;

// target the html elements to create new comment li's



// function for updating textContent of html of li's in comment section
  // to be called on submit







// when there is just one function to callback
  //  // addeventlistener to form and call the prevent default method 
  // form.addEventListener('submit', preventDefault);

// calling a bunch of outside declared functions
form.addEventListener('submit', function(event){
  preventDefault(event);

})

// form.addEventListener('submit', function(event){
//   event.preventDefault();
//   // blog.form.name = document.querySelector('input').value;
//   // console.log(blog.form.name);
//   console.log('hi');

// });
  
// tracking user inputs of name and comment 
  // // name input:
  // blog.form.name = document.querySelector('input[]:')

  
    // should this be declared inside the date method?
  blog.date = function () {
    // call Date() to get the datestamp of user submission
    // Date();
    // on submit, date() is called and the return is saved as dateString
    blog.dateString = Date();
    
    // turn the string into an array so can access individual values and use them to populate the page ( ${}-style )
    blog.dateArray = [];
    blog.dateArray = blog.dateString.split(' ');
    
    // need to convert the three letters for dayofweek and month to full words to be displayed on page. = updating the value of dayOfWeek and month
    // conditional of an if (dayOfWeek = Sun) {dayOfWeek = Sunday} else if (dayOfWeek = Mon){dayOfWeek = Monday} etc
    // extract that out to a fucntion that accepts dayOfWeek as an argument
    blog.dayOfWeek = blog.dateArray[0];
    blog.month = blog.dateArray[1];
    blog.dayOfMonth = blog.dateArray[2];
    blog.year = blog.dateArray[3];
  }

  
// 
// 
//   
// 

