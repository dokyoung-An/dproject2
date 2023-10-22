const f= document.querySelector('.a');
const ff=document.querySelector('.floorplan');
const a= document.querySelector('.list1');
const b = document.querySelector('.list2');
const c= document.querySelector('.list3');
const fff = document.querySelector('.b');

const open = document.querySelector(".mobile-menu");
const close = document.querySelector(".m-close");
const type = document.querySelector(".side-menu");

open.addEventListener('click',function () {
    type.classList.add('active');
});
close.addEventListener('click', function(){
type.classList.remove('active');

})


f.addEventListener('click', function() {
    ff.style.display = "block";
    f.style.display ="none";
    fff.style.display="block";
})

fff.addEventListener('click', function() {
    ff.style.display = "none";
    fff.style.display ="none";
    f.style.display="block"
})

a.addEventListener('click', function(t){
    a.style.color ="#000";    
    a.style.background="#c49159";
    b.style.color="#fff";
    b.style.background="";
    c.style.color="#fff";
    c.style.background="";
   
})

b.addEventListener('click', function(){
    a.style.color ="#fff";    
    a.style.background="";
    b.style.color="#000";
    b.style.background="#c49159";
    c.style.color="#fff";
    c.style.background="";
})
c.addEventListener('click', function() {
    a.style.color ="#fff";    
    a.style.background="";
    b.style.color="#fff";
    b.style.background="";
    c.style.color="#000";
    c.style.background="#c49159";
})





