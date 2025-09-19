//Sets comic page number
var pageNo = 1;

//Allows users to navagate vis keyboard
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

 //Next and previous page funtions
function next() {
    pageNo++;
    if(pageNo == 18)
    {
        flash();
    } 
    document.getElementById("page").src = pageNo + '.jpg';
    window.scrollTo(0, 0);
}

function prev() {
    pageNo--;
    if (pageNo < 1){
        pageNo = 1;
    }
    if(pageNo == 18)
    {
        flash();
    } 
    document.getElementById("page").src = pageNo + '.jpg';
    window.scrollTo(0, 0);
}

//Activates on page error (end of pages)
function end() {
    pageNo--;
    document.getElementById("page").src = pageNo + '.jpg';
}


//Flashes the background on page 18
function flash() {
  document.body.classList.add('flash')
  window.setTimeout(function() {
    document.body.classList.remove('flash')
  }, 1000)
}

