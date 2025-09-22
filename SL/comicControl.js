var pageNo = 1;
var bgChange = document.getElementById('body');
var folder = 0;
var display = "Aud/";

//keyboard support
document.addEventListener("keyup", e => {
    const k = e.key;
    if (k == "ArrowRight" || k == " " || k == "w")
    {
        next();
    }
    else if (k == "ArrowLeft" || k == "Backspace" || k == "s")
    {
        prev();
    }
 });

function next() {
    pageNo++;
    document.getElementById("page").src = display + pageNo + '.png';
    window.scrollTo(0, 0);
    //checks which round it is
    if (folder == 1){
        backgroundChange();
    } 
    else {
    spookMode();
    }
}

function prev() {
    pageNo--;

    if (pageNo < 1 && folder == 0){
        pageNo = 1;
    }
    //goes back to Audition last page
    if (pageNo < 1 && folder == 1) {
        folder = 0;
        display = "Aud/"
        pageNo = 61;
    }
    document.getElementById("page").src = display + pageNo + '.png';
    window.scrollTo(0, 0);
    if (folder == 1){
        backgroundChange();
    } 
    else {
    spookMode();
    }
}

function end() {
    //changes to next folder
    if (folder == 0)
    {
        folder = 1;
        pageNo = 1;
        display = "R1/";
        document.getElementById("page").src = display + pageNo + '.png';
    }
    else{
        pageNo--;
        document.getElementById("page").src = display + pageNo + '.png';
    }
    
}


//These are background effects for the comic
function spookMode() {
    if (pageNo >= 25 && pageNo <= 39)
    {
        bgChange.classList.remove("normal");
        bgChange.classList.add("carcosa");
    }
    else 
    {
        bgChange.classList.remove("carcosa");
        bgChange.classList.add("normal");
    }
}

function backgroundChange ()
{
    switch (pageNo) {
        case 55:
            bgChange.classList.remove("carcosa");
            bgChange.classList.add("normal");
            break;
        
        case 56: 
            bgChange.classList.remove("normal");
            bgChange.classList.add("carcosa"); 
            break;

        case 69: 
            bgChange.classList.remove("normal");
            bgChange.classList.add("carcosa"); 
            break;

        case 70:
            bgChange.classList.remove("carcosa");
            bgChange.classList.add("normal");
            break;

        case 76:
            bgChange.classList.remove("sploosh");
            bgChange.classList.add("normal"); 
            break;

        case 77:
            bgChange.classList.remove("normal");
            bgChange.classList.add("sploosh"); 
            break;

        case 78:
            bgChange.classList.remove("sploosh");
            bgChange.classList.add("normal"); 
            break;

        default: break;
    }
}