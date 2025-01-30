// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element
icon.addEventListener('click', responsive_control);

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

// Function to redirect the user to another link based on the conditional text clicked (user can go back)
function reDirect(click) {
    if (click == 'ARCH231') {
        location.href = "https://myplan.uw.edu/course/#/courses/ARCH231";
    } else if (click == 'CSE163') {
        location.href = "https://myplan.uw.edu/course/#/courses/CSE163";
    } else if (click == 'CSE414') {
        location.href = "https://myplan.uw.edu/course/#/courses/CSE414";
    } else if (click == 'DRAMA101') {
        location.href = "https://myplan.uw.edu/course/#/courses/DRAMA101";
    } else if (click == "GEOG360") {
        location.href = "https://myplan.uw.edu/course/#/courses/GEOG360";
    } else if (click == 'GEOG458') {
        location.href = "https://myplan.uw.edu/course/#/courses/GEOG458";
    } else if (click == 'INFO201') {
        location.href = "https://myplan.uw.edu/course/#/courses/INFO201";
    } else if (click == 'github') {
        location.href = "https://github.com/eddiep7";
    }
} 