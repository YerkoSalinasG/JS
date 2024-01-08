'use strict'

var side = document.getElementById("asideMenu");
console.log(side);
//side.style.background="red";
side.onclick = function(){
    if(side.className == "aa"){
        side.className="xx";
        side.style.backgroundColor = "blue";
    }else if(side.className =="xx"){
        side.className="aa";
        side.backgroundColor="red";
    }
    //side.style.background="red";
    //side.className="aa";
}


// var side = document.getElementById("asideMenu");
// console.log(side);