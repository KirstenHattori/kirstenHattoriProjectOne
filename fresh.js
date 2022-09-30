// LOGIC AND FUNCTIONALITY
/*
blog = the comments ul and the userSubmission form

stretch goal: 
create function to add the correct suffix to the dayOfMonth number to be grammatically correct
if ends in 0, 4,5,6,7,8,9 add 'th';
else if ends in 1, add 'st';
else if ends in 2, add 'nd';
else if ends in 3, add 'rd';


/* 
~ HTML outline
  ul.commentsList
    li.comment
      div.commentTextContainer
        h4.accent> ${date: dayOfWeek month dayOfMonth `,` year}${userSubmission.name} 
        p> ${userSubmission.comment}

  form.commentForm
    input '#name'
      textarea '#comment'

/*
user inputs ${name} & ${comment} & Date() is called on submission, the value of which is saved as ${date}

capture user's submission in an object
form values are saved in the userSubmission object
  event listener
  event handler = what happens when the submit event happens
    =firing of date()
these properties are used to alter the comments ul
the form resets on successful submit












*/

// first draft > was restarted this is the scrap work



// ~~~what i orginially started with
// // creating namespace
// const blog = {};

// event listening and handling of the form:
// target the form element and save as a variable so it is easier to use later 
// need to target by classname because there multiple forms on the pages that use this script file. 
const form = document.querySelector('form');
// const forms = document.querySelectorAll('form');

//   // attach event listener to the form
// create a function to be called when the form is submitted
function preventDefault(event) {
  // prevent the default behaviour of a form submmission
  event.preventDefault();
  console.log('hi');
}

// target the user inputs from the form and capturing their value in a variable
const inputs = document.querySelectorAll('input');
const commentersName = inputs[0].value;
const commentersComment = document.querySelector('textarea').value;

// save user inputs in an object
const userSubmission = {};
userSubmission.name = inputs[0].value;
userSubmission.comment = document.querySelector('textarea').value;
userSubmission.date = blog.date;


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
commentsList.append(createComment());

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


//=== defining the variables outside of the date() method and as properties of the blog {} ???
// should this be declared inside the date method?
const date = Date();
formDate = function (date) {
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


// 
// 
//   
// 

/* when dynamically populating the form list with data from formspree, will need to:
  create objects for each comment with the properties of name, email, comment that dynamically populates an updated html that is a shell of the markup. so that i can keep the styling that is already done
*/
// calling a bunch of outside declared functions
form.addEventListener('submit', function (event) {
  preventDefault(event);
  createComment();
  date();
});



// //going over with Tiffany in project work time
// // listen for certain user inputs from the form

//   // text
//   // textarea
//   //form submission date

// //save as ^ variables, and the form
// const form = document.querySelector('form');
// const userName = document.querySelector('input[type=text]').value;
// const userComment = document.querySelector('textarea');
// const submitDate = Date();
// console.log(form, userName, userComment, submitDate);
// //will be getting the value from the inputs
// // from values, be able to change the innerHtml

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log(event.target);
// });

// // create html elements