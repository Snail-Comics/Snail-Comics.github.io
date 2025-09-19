//Sets the current page number/grabs body Id for background changes
var pageNo = 1;
var bgChange = document.getElementById('body');

//Keyboard control options
document.addEventListener("keyup", e => {
    const k = e.key;
    if (k == "ArrowRight" || k == " " || k == "d")
    {
        next();
    }
    else if (k == "ArrowLeft" || k == "Backspace" || k == "a")
    {
        prev();
    }
 });

 //Next, previous controls
function next() {
    pageNo++;
    fire();
    document.getElementById("page").src = pageNo + '.jpg';
    window.scrollTo(0, 0);
}

function prev() {
    pageNo--;
    if (pageNo < 1)
    {
        pageNo = 1;
    }
    fire();
    document.getElementById("page").src = pageNo + '.jpg';
    window.scrollTo(0, 0);   
}

//Activates on error (if theres no next page)
function end() {
    pageNo--;
    document.getElementById("page").src = pageNo + '.jpg';
}

//Checks page number for background change effects
function fire(){
    if (pageNo >= 8 && pageNo <= 11)
    {
        bgChange.classList.add("fire");
        bgChange.classList.remove("body");
    }
    else 
    {
        bgChange.classList.add("body");
        bgChange.classList.remove("fire");
    }
}

