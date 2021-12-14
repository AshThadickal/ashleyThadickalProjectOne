// Create functionality with the hamburger menu
// 1. create an event listener on the <i> that is the menu image
// 2. when clicked, populate a ul with the <a> to direct to the different pages (i.e. home, blog and contact us) - make this a toggle such that it can be closed again? or create an 'X' on top corner to close?

// creating a variable targetting the <i> that is the menu icon
const menuIcon = document.querySelector('.fa-bars')
// console.log(menuIcon);
// creating the listener event
menuIcon.addEventListener('click', function() {
    console.log(menuIcon)
    
    // I want to add a div that will house a ul enclosing the menu items
    const newDiv = document.createElement('div');
    // console.log(newUl);

    // append the div after the end of the menuIcon
     menuIcon.insertAdjacentElement('afterend', newDiv);

    // Need to create the ul as innerHTML to the div to house the li items
    const newUl = document.createElement ('ul');
    // append this ul to the div container
    newDiv.insertAdjacentElement('afterbegin', newUl);
    // change style to display block
    newUl.style.display = 'block';


    // create a function that will append each li element to the ul 
    function appendlI(listItem) {
        // each time I call this function, I want to create a new li item
        const newLi = document.createElement ('li');
        // need to get the index items within the li element
        newLi.innerHTML = listItem
        // I need to change the display back to block because in media queries it is at display none for the <ul>
        // listItem.style.dispay = 'block';
        // I then want to append each li to the end of the ul element
        newUl.appendChild(newLi)

        // const menuItems = document.createElement('li');
        // newUl.appendChild(menuItems);   
    }
    
    appendlI('<a href="#home">home</a>');
    appendlI('<a href="blog.html">blog</a>');
    appendlI('<a href="#portfolio">portfolio</a>');
    appendlI('<a href="#shop">shop</a>');
    appendlI('<a href="contact.html">contact</a>');
 
   
    
})



// newUl.innerHTML = '<li>< a href = "blog.html" > blog</a ></li >';
//     newUl.innerHTML = '<li>< a href = "#portfolio" > portfolio</a ></li >'
//     newUl.innerHTML = '<li>< a href = "#shop" > shop</a ></li>'
//     newUl.innerHTML = '<li><a href="contact.html">contact</a></li>'