// FROM THE FINISH:


// user fills out a form and submits it
//   the inputs are targeted andn the form is listened to so the input.values can be saved as variables to use ^
  // target the form
const commentForm = document.getElementById('commentForm');
const userSubmission = {};

//on submit, 
  // add an eventlistener to the form
commentForm.addEventListener('submit', function(event){
  preventDefault(event);
  updateUserSubmission();
  formDate();
});
    // prevent default form submit behaviour
function preventDefault(event) {
  event.preventDefault();
}

    // update the userSubmission object
function updateUserSubmission(){
  userSubmission.name = document.getElementById('name').value;
  userSubmission.comment = document.getElementById('comment').value;
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
    if (num === 1||num===21||num===31){
      dayOfMonth=num+'st';
    } else if (num===2||num===22){
      dayOfMonth=num+'nd';
    } else if (num===3||num===23){
      dayOfMonth=num+'rd';
    } else {
      dayOfMonth=num+'th';
    }
  }
  dayOfMonthSuffixed(dayOfMonth);
  console.log(dayOfMonth);

  year = dateArray[3];
  userSubmission.date = `${dayOfWeek} ${month} ${dayOfMonth}, ${year}`
}




// a new li.comment is created inside of ul.commentsList - happens on submit so create a function to do this that is called on submit
//   the values come from userSubmission{}
//     userSubmission.name
//     userSubmission.comment
//     userSubmission.date

// target the ul.commentsList where the new user data will be appended to as li's
const commentsList = document.getElementsByClassName('commentsList');

// create a new li.comment to append to commentsList
const commentItem = document.createElement('li');
// accessing the className and modifying it
commentItem.className = 'comment';

// update the innerHtml commentItem
// commentItem.innerHTML = `<div class="commentTxtContainer">
//     <h4 class="accent"> ${userSubmission.date} by ${userSubmission.name} </h4>
//     <p>${userSubmission.comment}</p>
//   </div>
// `; //the syntax is being complied weirdly and the html can't be read
// going to create each level of html elements individually and then update their className and textContent

const commentTxtDiv = document.createElement('div');
commentTxtDiv.className = 'commentTxtContainer';

commentTxtDiv.innerHtml = `<h4>userSubmission.date</h4>`


