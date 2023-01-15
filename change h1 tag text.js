console.log('hello there...Hi!');
i = 0;
console.log(`i:$(i)`);
function getName(){
    if(i===0){
    var name = prompt("What is your First name?");
    alert(name);
    i++;
}
    else if(i===1){
        var name = prompt("What is your Middle name?");
        alert(name);
        i++;
    }
    else{
        var name = prompt("What is your Last name?");
        alert(name);
        i++;
    }

    return name;
}
// console.log(getName());
// const heading = document.getElementById("myh1");
// console.log(heading.innerHTML);
// heading.insertText = 'tirth';

document.addEventListener('DOMContentLoaded', e => {
    const h1 = document.getElementById('myh1');
    h1.insertAdjacentText('beforeEnd','...'+getName());
    h1.innerText += ' ' + getName();
    h1.textContent +=  ' ' +getName();
})

