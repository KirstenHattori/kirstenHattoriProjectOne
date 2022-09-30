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
  // createComment(userSubmission.date, userSubmission.name, userSubmission.comment);
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

  year = dateArray[3];


  userSubmission.date = `${dayOfWeek} ${month} ${dayOfMonth}, ${year}`
}



// target the ul.commentsList 
const ulElement = document.querySelector('.commentsList');
console.log(ulElement);

// create an li.comment
  // create an li element
const liElement = document.createElement('li');
  // update the className
listItem.className = 'comment'

// create a div.commentTxtContainer
  // create an li element
  // update the className


// create a h4.accent 


// create a p 


// insert p into div.commentTxtContainer


// insert h4.accent into div.commentTxtContainer


// insert div.commentTxtContainer into li.comment


// insert liElement(li.comment) into ulElement(ul.commentsList)
ulElement.appendChild(liElement);


