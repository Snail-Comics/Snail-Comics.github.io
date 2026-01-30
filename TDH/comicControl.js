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
    document.getElementById("page").src = pageNo + '.jpg';
    window.scrollTo(0, 0);
}

function prev() {
    pageNo--;
    getChapter();
    //stays on first page of chapter until I can big brain some shit
    if (pageNo < 1){
        pageNo = 1;
    }
    document.getElementById("page").src = pageNo + '.jpg';
    window.scrollTo(0, 0);
}

function end() {
    //changes to next folder 
    getChapter();
    if (displayNo < CHlength.length)
    {
        pageNo = 1;
        displayNo++;
        window.location.href = "../" + displayNo + "/" + displayNo + ".html";
    }
  else {
      pageNo--;
      document.getElementById("page").src = pageNo + '.jpg';
  }
}

function getChapter(){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    const arr = page.split(".");
    displayNo= Number(arr[0]);
}