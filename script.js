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
// ***DOING RIGHT MEOW! === defining the variables outside of the date() method and as properties of the blog {}
const blog = {};
// event listening and handling of the form 
  // tracking user inputs of name and comment 
  // on submit, date() is called 

  blog.dateString = Date();
  blog.dateArray // *** */

  

    // turn the string into an array so can access individual values and use them to populate the page ( ${} style)
    let dateArray = [];
    dateArray = dateString.split(' ');
    // need to convert the three letters for dayofweek and month to full words to be displayed on page. = updating the value of dayOfWeek and month
    // conditional of an if (dayOfWeek = Sun) {dayOfWeek = Sunday} else if (dayOfWeek = Mon){dayOfWeek = Monday} etc
    // extract that out to a fucntion that accepts dayOfWeek as an argument
    dayOfWeek = dateArray[0];
    month = dateArray[1];
    dayOfMonth = dateArray[2];
    year = dateArray[3];

    blog.date = function () {
      // call Date() to get the datestamp of user submission
      Date();
    }
// 
// 
//   
// 

