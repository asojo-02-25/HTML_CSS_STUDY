const menu = document.querySelector('#menu');
const list = ['94.png', '107.png', '109.png', '113.png', '116.png', '117.png']; 

for(let i = 0; i < list.length; i++){
    const content = `<div><img src="images/${list[i]}" alt=${list[i]}div>`;
    menu.insertAdjacentHTML('beforeend',content);
}



