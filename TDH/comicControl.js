var pageNo = 1;
var bgChange = document.getElementById('body');
var displayNo = 1;

const CHlength = [63, 35]

//keyboard support
document.addEventListener("keyup", e => {
    const k = e.key;
    if (k == "ArrowRight" || k == "w")
    {
        next();
    }
    else if (k == "ArrowLeft" || k == "s")
    {
        prev();
    }
 });

function next() {
    pageNo++;
    document.getElementById("page").src = displayNo + "/" + pageNo + '.jpg';
    window.scrollTo(0, 0);
}

function prev() {
    pageNo--;

    if (pageNo < 1 && displayNo == 1){
        pageNo = 1;
    }
    //goes back to last page of folder
    if (pageNo < 1 && displayNo > 1) {
        displayNo--;
        pageNo = CHlength[displayNo-1];
    }
    document.getElementById("page").src = displayNo + "/" + pageNo + '.jpg';
    window.scrollTo(0, 0);
}

function end() {
    //changes to next folder
    if (displayNo < CHlength.length)
    {
        pageNo = 1;
        displayNo++;
        document.getElementById("page").src = displayNo + "/" + pageNo + '.jpg';
    }
  else {
      pageNo--;
      document.getElementById("page").src = displayNo + "/" + pageNo + '.jpg';
  }
}
