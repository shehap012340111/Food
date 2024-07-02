// /////////////////////
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("fix", window.scrollY > 150);
}) 
//////////////////////////
// ////////////////////////////////////////////
var owl = $('#slider_1');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: true,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items:1,
        },
        1100:{
            items: 1,
        },
        1200:{
            items:1
        }
    }
});
// /////////

// ////////////////////////////////////////////
var owl = $('#slider_2');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: true,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items:2,
        },
        1100:{
            items: 3,
        },
        1200:{
            items:3
        }
    }
});
// /////////


window.addEventListener("scroll" , function () {
    let scrollUp = document.querySelector(".scroll_up");
    scrollUp.classList.toggle("scroll_transition", window.scrollY > 150);
    scrollUp.classList.toggle("show_scroll", window.scrollY > 200)
})
    let scrollUp = document.querySelector(".scroll_up");

scrollUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})

let cart_open_tool = document.getElementById("cart_open_tool");
let cart_sidbar = document.getElementById("cart_sidbar");
let close_cart = document.getElementById("close_cart");

cart_open_tool.addEventListener("click", function () {
    cart_sidbar.classList.add("Show")
})

close_cart.addEventListener("click", function () {
    cart_sidbar.classList.remove("Show")
})
// //////////////
let Add_to_Cart_chose_container = document.getElementById("Add_to_Cart_chose_container");
let close_chose = document.getElementById("close_chose");
function addtoChose  () {
let Add_to_Cart_chose_container = document.getElementById("Add_to_Cart_chose_container");
    Add_to_Cart_chose_container.classList.add("Show_Cart_Chose")
}
close_chose.addEventListener("click", function () {
    Add_to_Cart_chose_container.classList.remove("Show_Cart_Chose")
})


function QunteUp (){
    const Qunte_input = document.getElementById("Qunte_input")

    Qunte_input.value++
}

function QunteDown (){
    const Qunte_input = document.getElementById("Qunte_input")

    if (Qunte_input.value > 1) {
        
        Qunte_input.value--

    }
}