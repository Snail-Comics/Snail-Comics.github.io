var pageNo = 1;
var bgChange = document.getElementById('body');

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

function end() {
    pageNo--;
    document.getElementById("page").src = pageNo + '.jpg';
}

function flash() {
  document.body.classList.add('flash')
  window.setTimeout(function() {
    document.body.classList.remove('flash')
  }, 1000)

}

