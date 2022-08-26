//Sticky
window.onscroll=function()
{
    var tnav = document.getElementById("tnav");
    if(scrollY > 50)
    {
        tnav.classList.add("sticky");
    }
    else
    {
        tnav.classList.remove("sticky");
    }
}
//Dark Mode
const dark = document.getElementById("toggleBtn");
const body = document.getElementById("body");
dark.addEventListener("click",(eo) => {
    body.classList.toggle("dark");
})
function toggleBtn() {
    const Btns = document.querySelector(".btns");
    const add = document.getElementById("add");
    const remove = document.getElementById("remove");
    const btn = document.querySelector(".btns").querySelectorAll("a");
    Btns.classList.toggle("open");
    if (Btns.classList.contains("open")) {
      remove.style.display = "block";
      add.style.display = "none";
      btn.forEach((e, i) => {
        setTimeout(() => {
          bottom = 40 * i;
          e.style.bottom = bottom + "px";
          console.log(e);
        }, 100 * i);
      });
    } else {
      add.style.display = "block";
      remove.style.display = "none";
      btn.forEach((e, i) => {
        e.style.bottom = "0px";
      });
    }
}
//slider 2 and 3
let image =['1','2','3','4','5','6','7'];
 let contentphoto=document.getElementById("jk");
let i=image.length;
function nextimage(){
    if(i<image.length){
        i+=1;
    }else{
        i=1;
    }
    contentphoto.innerHTML="<img src="+image[i-1]+".jpeg>";
}
setInterval(nextimage,1600);
//Thank You