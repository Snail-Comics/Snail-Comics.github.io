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
    pageSwitch();
    document.getElementById("page").src = pageNo + '.jpg';
    window.scrollTo(0, 0);
}

function prev() {
    pageNo--;
    pageSwitch();
    document.getElementById("page").src = pageNo + '.jpg';
    window.scrollTo(0, 0);
}

function end() {
    //changes to next folder 
        window.location.href = "../2/2.html";
}

function pageSwitch(){
   switch (pageNo){
    case 1:
            //hides button
            var backBTNChange = document.getElementById('backBTN');
           backBTNChange.setAttribute("hidden", "hidden");
           break;
        case 2:
            var backBTNChange = document.getElementById('backBTN');
            var hide = backBTNChange.getAttribute("hidden");
            backBTNChange.removeAttribute(hide);
            break;
       default:
           break;
    }
    var nextBTNChange = document.getElementById('nextBTN');
    var end = CHlength[0];
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