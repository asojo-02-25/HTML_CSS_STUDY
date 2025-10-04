const menu = document.querySelector('#menu');

// const list = ['94.png', '107.png', '109.png', '113.png', '116.png', '117.png']; 
// for(let i = 0; i < list.length; i++){
//     const content = `<div><img src="images/${list[i]}" alt=${list[i]}div>`;
//     menu.insertAdjacentHTML('beforeend',content);
// }

// 以下オブジェクト練習用
// const strawberry = {
//     name: 'いちご',
//     img: 'strawberry.png',
//     price: 200,
// };

// console.log(strawberry);

const lists = [
    {name: 'girl doing the work', img: '94.png'},
    {name: 'studying girl', img : '107.png'},
    {name: 'girl making a presentation', img : '109.png'},
    {name: 'girl passing trough the ticket gate', img : '113.png'},
    {name: 'girl doing the dishes', img : '116.png'},
    {name: 'girl feeling relax trough sauna', img : '117.png'},
]

for(let i = 0; i < lists.length; i++){
    const name = lists[i].name;
    const img = lists[i].img;

    const content = `<div><img src="images/${img}" alt=${name}><p>${name}</p></div>`;
    menu.insertAdjacentHTML('beforeend',content);
}