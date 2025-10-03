const menu = document.querySelector('#menu');
const list = ['94.png', '107.png', '109.png', '113.png', '116.png', '117.png']; 

const content = `<div><img src="images/${list[0]}" alt="pic94"></div>
<div><img src="images/${list[1]}" alt="pic107"></div>
<div><img src="images/${list[2]}" alt="pic109"></div>
<div><img src="images/${list[3]}" alt="pic113"></div>
<div><img src="images/${list[4]}" alt="pic116"></div>
<div><img src="images/${list[5]}" alt="pic117"></div>
`; 

menu.insertAdjacentHTML('beforeend',content);

