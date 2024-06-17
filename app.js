const barElement = document.getElementById('bar');
const closeElement = document.getElementById('close');
const navbarElement = document.getElementById('navbar');

barElement.addEventListener('click', ()=>{
    if(barElement){
        navbarElement.classList.add('active');
    }
})

closeElement.addEventListener('click', ()=>{
    if(closeElement){
        navbarElement.classList.remove('active');
    }
})

// if(barElement){
//     barElement.addEventListener('click', ()=>{
//         navbarElement.classList.add('active');
//     })
// }
// if(closeElement){
//     closeElement.addEventListener('click', ()=>{
//         navbarElement.classList.remove('active');
//     })
// }