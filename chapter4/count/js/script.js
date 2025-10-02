const text = document.querySelector("#text");
const count = document.querySelector("#count");

text.addEventListener('input',() => {
    count.textContent = text.value.length;
    
    if (text.value.length > 100) {
        count.classList.add('alart');
    }
    else {
        count.classList.remove('alart');
    }
});

