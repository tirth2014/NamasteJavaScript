function makeSizer(size){
    return function(){
        document.body.style.fontSize = `${size}px`;
        console.log('size changed to ', size);
    };
 }


 // size12, size14, and size16 are now functions that resize the body text to 12, 14, and 16 pixels, respectively.
const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
const size20 = makeSizer(20);

// making on-click event on buttons with these ids.
document.getElementById('size-12').onclick = size12
document.getElementById('size-14').onclick = size14
document.getElementById('size-16').onclick = size16
document.getElementById('size-20').onclick = size20

const setRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    }

window.onclick = () => {
color_elements = document.getElementsByClassName('color-random')
for(var i=0; length=color_elements.length, i<length; ++i){
    color_elements[i].style.color = "#" + setRandomColor();
    };
}
// .style.color = "red";