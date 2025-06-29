const sliderObj = {
    item: 1,
    autoplay:true,
    gap: 30,
    arrow: true,
    dot: true
}
let currentPosition = 0;
const slider = document.getElementById("slider");

slider.innerHTML = `<div class="innerWrapper">${slider.innerHTML}</div>`;

const children = slider.children[0].children;
console.log(children);


slider.insertAdjacentHTML("afterend", `<div class="arrows">
        <div id="sliderLeftArrow" onclick="moveLeft()"><i class="fa-solid fa-arrow-left"></i></div>
        <div id="sliderRightArrow" onclick="moveRight()"><i class="fa-solid fa-arrow-right"></i></div>
    </div>`);


const sliderWidth = slider.clientWidth;

const TotalGutterWidth = (sliderObj.item - 1)*sliderObj.gap;
const itemWidth = (sliderWidth - TotalGutterWidth)/sliderObj.item;

console.log(children.length - 1 * sliderObj.gap);


slider.children[0].style.width = (children.length * itemWidth) + ((children.length - 1) * sliderObj.gap)+"px";


Array.from(children).forEach(function(item, index){
    item.style.width = itemWidth+"px"
})


function moveRight(){
    currentPosition = currentPosition - (itemWidth + sliderObj.gap)

    slider.children[0].style.transform = `translateX(${currentPosition}px)`;
}

function moveLeft(){
    currentPosition = currentPosition + (itemWidth + sliderObj.gap)

    slider.children[0].style.transform = `translateX(${currentPosition}px)`;
}