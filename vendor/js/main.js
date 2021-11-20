//load play video 
const button = document.querySelector(".video-play--btn");
const video = document.querySelector(".video-clip");
const bg = document.querySelector(".bg-clip");
const close = document.querySelector(".close");
button.onclick = function(){
    video.classList.add("show");
    bg.classList.add('show');
}
bg.onclick = function(){
    video.classList.remove("show");
    bg.classList.remove('show');
} 
// filter
const filter_buttons = document.querySelectorAll('.product-details--item .box-item');
const filter_box = document.querySelectorAll('.product-details .product-details--list');
// Array.from(filter_buttons).forEach(filter_button => 
//     filter_button.addEventListener("click",function(){
//         console.log("nguyen");
//     })
//     )