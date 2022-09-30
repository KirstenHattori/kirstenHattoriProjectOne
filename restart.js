// FROM THE FINISH:


// user fills out a form and submits it
//   the inputs are targeted andn the form is listened to so the input.values can be saved as variables to use ^
  // target the form
const commentForm = document.getElementById('commentForm');
const userSubmission = {};
  // add an eventlistener to the form
commentForm.addEventListener('submit', function(event){
  preventDefault(event);
});
    //on submit, update the userSubmission object
    // prevent default form submit behaviour
function preventDefault(event) {
  // prevent the default behaviour of a form submmission
  event.preventDefault();
  console.log('hi');
}

// a new li.comment is created inside of ul.commentsList
//   the values come from userSubmission{}
//     userSubmission.name
//     userSubmission.comment
//     userSubmission.date
