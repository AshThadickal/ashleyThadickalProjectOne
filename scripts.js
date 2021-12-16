// // Create functionality with the hamburger menu
// // 1. create an event listener on the <i> that is the menu image
// // 2. when clicked, show the menu 

const menuIcon = document.querySelector('.fa-bars');
const menuList = document.querySelector('.hamburgerMenuDisplay')
const menuUl = document.querySelector('.hamburgerMenuDisplay ul')

// add my event listener to the menuIcon

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times-circle');
    menuUl.style.display = 'block'
    menuList.classList.toggle('javaMenu');
})

// adding comments to the blog page within the commentSection area
// 1. on submit, take the name and comment user input and save a variables
// 2. append to the 

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
    }


})