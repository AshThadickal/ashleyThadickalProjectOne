// A. Create functionality with the hamburger menu:
//  1. create an event listener on the <i> that is the menu image
//  2. when clicked, show the menu 

// B. Adding comments to the blog page within the commentSection area:
//  1. on submit, take the name and comment user input and save as variables
//  2. append the variables to the new comment section and clear the form

const creativeApp = {};

creativeApp.init = function(){
    creativeApp.attachMenuListener();        
    creativeApp.attachFormListener();
}    


// create a function to hold the menu listener event to make menu functional
creativeApp.attachMenuListener = function() {
    // credit to Antoni Ibrahim for suggesting a different way to achieve the funtionality
    // using const within the function as it would be protected within the function 
    const menuIcon = document.querySelector('.fa-bars');
    const menuList = document.querySelector('.hamburgerMenuDisplay')
    const menuUl = document.querySelector('.hamburgerMenuDisplay ul')
    
    // adding event listener to the menuIcon such that a menu will pop down when clicked
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times-circle');
        menuUl.style.display = 'block'
        menuList.classList.toggle('javaMenu');
    })
     
}



// Create a function to hold the event listener to add comments to the page
creativeApp.attachFormListener = function() {
    // targetting the form 
    const formElement = document.querySelector('.leaveComment form')

    // adding the event listener on submit
    formElement.addEventListener('submit', function(event) {
        event.preventDefault();
    
    // store the name value
    const nameElement = document.querySelector('input[name="clientName"]');
    const userName = nameElement.value;

    // store the comment value
    const commentElemnt = document.querySelector('#clientComment')
    const userComment = commentElemnt.value;

    // error handling to prevent empty name/comment
    if (userName && userComment) {
        // create a new div to house the nameElement and commentElement
        const divElement = document.createElement('div');
        divElement.className = 'newComment';
    
        // append the new div to the commentSection
        document.querySelector('.addedComments').append(divElement);

        // create a <p> element for both the name and comment to live in
        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = userName;

        const commentParagraph = document.createElement('p');
        commentParagraph.textContent = userComment;

        // add the namePara. and commentPara. values to the new div
        divElement.append(nameParagraph, commentParagraph);
    
        // need to clear the input field
        nameElement.value = '';
        commentElemnt.value = '';
        } else if (userName === '' && userComment === '') {
            alert('Please provide us with your name and comment.');
        } else if (userComment === '') {
            alert('Please provide a comment.');
        } else if (userName === '') {
            alert('Please provide your name.')
        }
    })
}


creativeApp.init();


