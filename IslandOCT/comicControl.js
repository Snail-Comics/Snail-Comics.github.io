var pageNo = 1;
var bgChange = document.getElementById('body');
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
    document.getElementById("page").src = display + pageNo + '.jpg';
    window.scrollTo(0, 0);
}

function prev() {
    pageNo--;
    if (pageNo == 0) {
        pageNo = 1;
    }
    document.getElementById("page").src = display + pageNo + '.jpg';
    window.scrollTo(0, 0);
}

function end() {
    pageNo--;
    document.getElementById("page").src = display + pageNo + '.jpg';

}