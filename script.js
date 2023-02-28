const prev_btn = document.getElementById('prev-btn');
const next_btn = document.getElementById('next-btn');

const product_items = document.getElementsByClassName('container-items')[0];

const item_width = product_items.children[0].offsetWidth;

function show_or_hide_btn(){

    let scrollable_width = product_items.scrollWidth - product_items.clientWidth;

    prev_btn.style.display = product_items.scrollLeft === 0 ? "none" : "flex";
    next_btn.style.display = product_items.scrollLeft === scrollable_width ? "none" : "flex";

}

show_or_hide_btn();

prev_btn.addEventListener("click", ()=>{
    product_items.scrollTo(product_items.scrollLeft - item_width*2,0);
    show_or_hide_btn();
})

next_btn.addEventListener("click", ()=>{
    product_items.scrollTo(product_items.scrollLeft + item_width*2,0);
    show_or_hide_btn();
})

