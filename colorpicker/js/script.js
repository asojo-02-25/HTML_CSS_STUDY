const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
    text.textContent = `カラーコード : ${color.value}`;
    document.body.style.backgroundColor = color.value;
    if(color.value === '#000000'){text.textContent = `カラーコード : ${color.value} (black)`;}
    if(color.value === '#ffffff'){text.textContent = `カラーコード : ${color.value} (white)`;}
};


//カラーピッカーの変更に伴いcolorBg関数を実行
color.addEventListener('input', colorBg);


