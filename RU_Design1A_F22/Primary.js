
/*
function toggleActiveLink(link) {
    var links = document.querySelectorAll('.navigation a');
    links.forEach(function (item) {
        item.classList.remove('active');
    });
    link.classList.add('active');
}
*/


let students = document.querySelectorAll("a");
let container = document.querySelector('#container');

for (let a of students){
  a.onmouseenter = function(){
    a.classList.add("hover")
  }
  a.onmouseleave = function(){
    a.classList.remove("hover")
  }
}

document.getElementById("shuffle").onclick=function(e){
  e.preventDefault();
  for (var i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
  }
}

