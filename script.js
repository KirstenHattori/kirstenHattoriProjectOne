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
// event listening and handling of the form:
// target the form element and save as a variable so it is easier to use later 
// need to target by classname because there multiple forms on the pages that use this script file. 
const commentsForm = document.getElementById('commentForm');
// const forms = document.querySelectorAll('form');

//   // attach event listener to the form
// create a function to be called when the form is submitted
function preventDefault(event) {
  // prevent the default behaviour of a form submmission
  event.preventDefault();
  console.log('hi');
}


const date = function() {
  // call Date() to get the datestamp of user submission
  // Date();
  // on submit, date() is called and the return is saved as dateString

  dateString = Date();
  // turn the string into an array so can access individual values and use them to populate the page ( ${}-style )
  dateArray = [];
  dateArray = dateString.split(' ');

  // need to convert the three letters for dayofweek and month to full words to be displayed on page. = updating the value of dayOfWeek and month
  // conditional of an if (dayOfWeek = Sun) {dayOfWeek = Sunday} else if (dayOfWeek = Mon){dayOfWeek = Monday} etc
  // extract that out to a fucntion that accepts dayOfWeek as an argument
  dayOfWeek = dateArray[0];
  month = dateArray[1];
  dayOfMonth = dateArray[2];
  year = dateArray[3];
}


// target the user inputs from the form and capturing their value in a variable
const inputs = document.querySelectorAll('input');
// const commentersName = inputs[0].value;
// const commentersComment = document.querySelector('textarea').value;

// save user inputs in an object
const userSubmission = {};
// userSubmission.name = inputs[0].value;
// userSubmission.comment = document.querySelector('textarea').value;
// userSubmission.date = date;


// target the html elements to create new comment li's
const commentsList = document.getElementsByClassName('commentsList');
const commentItem = document.createElement('li');
// accessing the className and modifying it
commentItem.className = 'comment';
// console.log(commentItem);
const commentTxtContainer = document.createElement('div');



// function for updating textContent of html of li's in comment section
// to be called on submit
// .append() ?
function createComment(commentersName, commentersComment) {
  commentItem.textContent = `${commentersName} says ${commentersComment}`
  commentItem.innerHTML =
    `<div class="commentTxtContainer">
    <h4 class="accent">Wednesday October 10th, 2019 by ${commentersName} </h4>
    <p>${commentersComment}</p>
  </div>`
  console.log('hey');
}
// commentsList.appendChild(createComment());

// // ***DOING RIGHT MEOW! 
/* ~~~get commentersName and commentersComment on the page in the same styling as the static comments*/


// when there is just one function to callback
//  // addeventlistener to form and call the prevent default method 
// form.addEventListener('submit', preventDefault);



// form.addEventListener('submit', function(event){
//   event.preventDefault();
//   // blog.form.name = document.querySelector('input').value;
//   // console.log(blog.form.name);
//   console.log('hi');

// });

// tracking user inputs of name and comment 
// // name input:
// blog.form.name = document.querySelector('input[]:')
// 

/* when dynamically populating the form list with data from formspree, will need to:
  create objects for each comment with the properties of name, email, comment that dynamically populates an updated html that is a shell of the markup. so that i can keep the styling that is already done
*/
// calling a bunch of outside declared functions
commentsForm.addEventListener('submit', function (event) {
  preventDefault(event);
  createComment();
  date();
});



// how do i get the input values from the form (text, text area)

//when user submits a form
  //grab the value of the inputs << end result that we want

