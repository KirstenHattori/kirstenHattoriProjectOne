// LOGIC AND FUNCTIONALITY
/*
blog = the comments ul and the userSubmission form

stretch goal: 
create function to add the correct suffix to the dayOfMonth number to be grammatically correct
if ends in 0, 4,5,6,7,8,9 add 'th';
else if ends in 1, add 'st';
else if ends in 2, add 'nd';
else if ends in 3, add 'rd';

more error proof if done for possible numbers in a month (1-31)

1st
21st
31st

2nd
22nd

3rd
23rd

don't need to type out condition for the re4st of the numbers because the suffix will be 'th' for them. 
4th
5th
6th
7th
8th
9th
10th
11th
12th
13th
14th
15th
16th
17th
18th
19th
20th
24th
25th
26th
27th
28th
29th
30th



create a function that converts the Date() returned dayOfWeek into the full word
function fullDay(day){
  if (day = )
}
  when called pass in dayOfWeek =
  fullDay(dayOfWeek);
/*
  dayOfWeek = dateArray[0];

  function fullDayOfWeek(day){
    if (day == 'Mon') {
      dayOfWeek = 'Monday';
    } else if (day == 'Tue') {
      dayOfWeek = 'Tuesday';
    } else if (day == 'Wed') {
      dayOfWeek = 'Wednesday';
    } else if (day == 'Thu') {
      dayOfWeek = 'Thursday';
    } else if (day == 'Fri') {
      dayOfWeek = 'Friday';
    } else if (day == 'Sat') {
      dayOfWeek = 'Saturday';
    } else if (day == 'Sun') {
      dayOfWeek = 'Sunday';
    }
  }
  fullDayOfWeek(dayOfWeek);

create a small database of userSubmissions and do a loop to display the content on the page dynamically
  = replace the hard coding of the lorem ipsum'd comments 


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
  // function createComment(commentersName, commentersComment) {
  //   commentItem.textContent = `${commentersName} says ${commentersComment}`
  //   commentItem.innerHTML =
  //     `<div class="commentTxtContainer">
  //     <h4 class="accent">Wednesday October 10th, 2019 by ${commentersName} </h4>
  //     <p>${commentersComment}</p>
  //   </div>`
  //   console.log('hey');
  // }
  // commentsList.append(createComment());


function createComment(commentersDate, commentersName, commentersComment) {
  // create a new li.comment to append to commentsList
  const commentItem = document.createElement('li');
  // accessing the className and modifying it
  commentItem.className = 'comment';
  // updating the value of the innerHtml
  commentItem.innerHTML =
    `<div class="commentTxtContainer">
    <h4 class="accent">${commentersDate} by ${commentersName} </h4>
    <p>${commentersComment}</p>
  </div>`
  console.log('hey');

}



// a new li.comment is created inside of ul.commentsList - happens on submit so create a function to do this that is called on submit
//   the values come from userSubmission{}
//     userSubmission.name
//     userSubmission.comment
//     userSubmission.date

// target the ul.commentsList where the new user data will be appended to as li's
// const commentsList = document.getElementsByClassName('commentsList');




// // update the innerHtml commentItem
// // commentItem.innerHTML = `<div class="commentTxtContainer">
// //     <h4 class="accent"> ${userSubmission.date} by ${userSubmission.name} </h4>
// //     <p>${userSubmission.comment}</p>
// //   </div>
// // `; //the syntax is being complied weirdly and the html can't be read
// // going to create each level of html elements individually and then update their className and textContent

// const commentTxtDiv = document.createElement('div');
// commentTxtDiv.className = 'commentTxtContainer';

// commentTxtDiv.innerHtml = `<h4>userSubmission.date</h4>`
// ^^^ for updating the content of the li.commentItem didn't work. trying something else:




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
// const date = Date();
formDate = function () {
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