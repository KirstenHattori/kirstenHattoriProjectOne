// FROM THE FINISH:


// user fills out a form and submits it
//   the inputs are targeted andn the form is listened to so the input.values can be saved as variables to use ^
  // target the form
const commentForm = document.getElementById('commentForm');
const userSubmission = {};
userSubmission.name = document.getElementById('name').value;
userSubmission.comment = document.getElementById('comment').value;


  // add an eventlistener to the form
commentForm.addEventListener('submit', function(event){
  preventDefault(event);

});
  //on submit, 
    // prevent default form submit behaviour
function preventDefault(event) {
  event.preventDefault();
  updateUserSubmission();
}

    // update the userSubmission object
function updateUserSubmission(){
  console.log('hi');
  console.log(userSubmission.comment);
}

// a new li.comment is created inside of ul.commentsList
//   the values come from userSubmission{}
//     userSubmission.name
//     userSubmission.comment
//     userSubmission.date
