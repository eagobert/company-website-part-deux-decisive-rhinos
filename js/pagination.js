// an array of the divs to hide and show
const itemContainer = document.getElementById("item-content").children;

// go through and tag all the divs as hidden, except the num 
// we want to show. 
let showActiveProducts = function(num) {
    
    for (var i = 0; i < itemContainer.length; i++) {
        var element = itemContainer[i];
        element.className = "hidden";
        if (i===(num-1)) {
            element.className = "";
        }
    }
}

// --- PAGINATION --- //
const pagination = document.getElementById("pagination").children;



// The pagination logic uses the .inactiveLink class to style the active item
// this function loops through the children and removes the 
// class from all elements and and adds it back to the 
// selected pageNum. Works for the arrow keys too.

let setCurrentPage = function(pageNum) {
    for (let i = 0; i < pagination.length; i++) {
        let element = pagination[i];
        let text = element.textContent;
        element.className="";
        if (text===pageNum){
            element.className = "inactiveLink";
        }
    }
}

// Function only for the arrows that makes the arrows
// hidden and invisible. 

let makeInactive = function(text) {
    
    for (let i = 0; i < pagination.length; i++) {
        let element = pagination[i];
        
        if (element.textContent === text) {
            element.className = "inactiveLink invisible";
        }
    }
}

/*
loops through the elements in the pagination div and 
checks for the inactiveLink class. This excludes the arrow keys
which are at the beginning and end of the array since they 
can never be the current item.

RETURNS: text content of the 'active' item 
*/
let getActiveElement = () => {
    let active = 0;
    // do not look at the first and last element
    for (let i = 1; i < pagination.length-1; i++) {
        let element = pagination[i];
       
        if (element.classList.contains("inactiveLink")) {
            active = element.textContent;
        }
    }
    return active;
}

/* loads a page relative to the active page */
let loadPreviousPage = function() {
    const active = getActiveElement();
    
    switch (active) {
        case "2":
            loadPage1();
            
            break; 
        case "3":
            loadPage2();
            
            break;
        case "4":
            loadPage3();
            
            break;
        case "5":
            loadPage4();
            
            break;
        default: 
            break;

    }

}


let loadNextPage = function() {
    const active = getActiveElement();
    
    switch (active) {
        case "1":
            loadPage2();
            break; 

        case "2":
            loadPage3();
            break;

        case "3":
            loadPage4();
            break;

        case "4":
            loadPage5();
            break;

        default: 
            break;

    }
}

let loadPage1 = function() {
    //handle the pagination
    setCurrentPage("1");
    makeInactive("<");
    //hide the other divs
    showActiveProducts(1);
};
let loadPage2 = function() {
    setCurrentPage("2");   
    //hide the other divs
    showActiveProducts(2);
};

let loadPage3 = function() {
    setCurrentPage("3");
    showActiveProducts(3);
      
};
let loadPage4 = function() {
    setCurrentPage("4");
    showActiveProducts(4);
};
let loadPage5 = function() {
    setCurrentPage("5");
    makeInactive(">");
    showActiveProducts(5);
};

// default of loading the first page
loadPage1();






