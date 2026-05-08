var pageNo = 1;
var displayNo = 1;

const CHlength = [63, 35, 16, 24]

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
    getChapter();
    pageSwitch();
    document.getElementById("page").src = pageNo + '.jpg';
    window.scrollTo(0, 0);
}

function prev() {
    pageNo--;
    if (pageNo < 1){
        getChapter();
        var previousPart = (displayNo -1).toString();
        var newURL = "https://snail-comics.github.io/TDH/Pages/" + previousPart + "/" + previousPart + ".html";
        window.location.replace(newURL);
    }
    pageSwitch();
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

function pageSwitch(){
    var backBTNChange = document.getElementById('backBTN');
   switch (pageNo){
    case 1:
            //hides button
           backBTNChange.innerHTML = "PREVIOUS PART";
           break;
        case 2:
            backBTNChange.innerHTML = "BACK";
            break;
       default:
           break;
    }
    var nextBTNChange = document.getElementById('nextBTN');
    var lastPanel = displayNo - 1;
    var end = CHlength[lastPanel];
   if (pageNo == end)
    {
        nextBTNChange.innerHTML = "NEXT PART";
    }
   else
   {
       nextBTNChange.innerHTML = "NEXT";
   }
    return;
}