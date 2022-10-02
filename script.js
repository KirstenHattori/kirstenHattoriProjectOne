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
// user fills out a form and submits it
//   the inputs are targeted andn the form is listened to so the input.values can be saved as variables to use ^
// target the form
const commentForm = document.getElementById('commentForm');
const userSubmission = {};

//on submit, 
// add an eventlistener to the form
commentForm.addEventListener('submit', function (event) {
  preventDefault(event);
  updateUserSubmission();
  formDate();
  createComment(userSubmission.date, userSubmission.name.value, userSubmission.comment.value);
  formReset();
});

// prevent default form submit behaviour
function preventDefault(event) {
  event.preventDefault();
}

// update the userSubmission object
function updateUserSubmission() {
  userSubmission.name = document.getElementById('name');
  userSubmission.comment = document.getElementById('comment');
}

// function for capturing submission date when user submits form
function formDate() {
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
  // converting Date() returned values to match format of the design = full words
  function fullDayOfWeek(day) {
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

  month = dateArray[1];
  // converting Date() returned values to match format of the design = full words
  function fullMonth(monthFromDate) {
    if (monthFromDate == 'Jan') {
      month = 'January';
    } else if (monthFromDate == 'Feb') {
      month = 'Febuary';
    } else if (monthFromDate == 'Mar') {
      month = 'March';
    } else if (monthFromDate == 'Apr') {
      month = 'April';
    } else if (monthFromDate == 'Jun') {
      month = 'June';
    } else if (monthFromDate == 'Jul') {
      month = 'July';
    } else if (monthFromDate == 'Aug') {
      month = 'August';
    } else if (monthFromDate == 'Sep') {
      month = 'September';
    } else if (monthFromDate == 'Oct') {
      month = 'October';
    } else if (monthFromDate == 'Nov') {
      month = 'November';
    } else if (monthFromDate == 'Dec') {
      month = 'December';
    }
  }
  fullMonth(month);

  dayOfMonth = dateArray[2];
  function dayOfMonthSuffixed(num) {
    if (num === 1 || num === 21 || num === 31) {
      dayOfMonth = num + 'st';
    } else if (num === 2 || num === 22) {
      dayOfMonth = num + 'nd';
    } else if (num === 3 || num === 23) {
      dayOfMonth = num + 'rd';
    } else {
      dayOfMonth = num + 'th';
    }
  }
  dayOfMonthSuffixed(dayOfMonth);

  year = dateArray[3];


  userSubmission.date = `${dayOfWeek} ${month} ${dayOfMonth}, ${year}`
}

// function for displaying userSubmission data on page
function createComment(inputDate, inputName, inputComment) {

  // target the ul.commentsList 
  const ulElement = document.querySelector('.commentsList');

  // create an li.comment
  // create an li element
  const liElement = document.createElement('li');
  // update the className
  liElement.className = 'comment';

  // create a div.commentTxtContainer
  // create a div element
  const divElement = document.createElement('div');
  // update the className
  divElement.className = 'commentTxtContainer';

  // create a h4.accent 
  // create an h4 element
  const h4Element = document.createElement('h4');
  // update the className
  h4Element.className = 'accent';
  // update the textContent with 'userSubmissions.date by userSubmission.name'
  h4Element.textContent = inputDate + ' by ' + inputName;

  // create a p 
  // create a p element
  const pElement = document.createElement('p');
  // update the textContent with userSubmissions.comment
  pElement.textContent = inputComment

  // insert h4.accent into div.commentTxtContainer
  divElement.appendChild(h4Element);

  // insert p into div.commentTxtContainer
  divElement.appendChild(pElement);

  // insert div.commentTxtContainer into li.comment
  liElement.appendChild(divElement);

  // insert liElement(li.comment) into ulElement(ul.commentsList)
  ulElement.appendChild(liElement);
}

// function to refresh the form after successful submission
function formReset() {
  // // // try resetting the input.value to an empty string //didn't reset the placeholder
  //   userSubmission.name = '';
  //   userSubmission.comment = '';

  // // // target the value of the placeholder of each input and textarea and reset either the value in the DOM object or the textContent of the placeholder attribute //didn't work either
  //     // //   // creating an object to keep the form field together
  //     // const formPlaceholders = {}
  //     // // target the placeholder attribute of the name input
  //     // formPlaceholders.name = document.getElementById('name').value
  //     // // target the placeholder attribute of the email input
  //     // formPlaceholders.email = document.getElementById('email')
  //     // // target the placeholder attribute of the textarea
  //     // formPlaceholders.comment = document.getElementById('comment')
  //     // formPlaceholders.name.value = "Name"
  //     // console.log(formPlaceholders);
  //   // // ^= to keep it dryer, just reuse the targetting of the nec elements from the userSubmission object and add one for the email. //that didn't work either - probably because it changes their values in the comment that is posted. 
  // my solution to form resetting - from the to do app code along
  // userSubmission.email = document.getElementById('email');
  // //   userSubmission.name = "";
  // //   userSubmission.email = "";
  // //   userSubmission.comment = "";
  // userSubmission.name.value = '';
  // userSubmission.email.value = '';
  // userSubmission.comment.value = '';

  //moved the .value around, so it is no longer the variable value of the userSubmission properties, it's captured in the different functions so it is indiependently changable = it can be changed in each function which is the nec behaviour. 

  // the built in way, suggestion from Tiffany
  commentForm.reset();
}