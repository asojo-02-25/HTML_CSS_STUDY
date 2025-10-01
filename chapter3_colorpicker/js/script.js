const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
    if(color.value === '#000000')
        {text.textContent = `カラーコード : ${color.value} (black)`;
    }
    else if(color.value === '#ffffff')
        {text.textContent = `カラーコード : ${color.value} (white)`;
    }
    else text.textContent = `カラーコード : ${color.value}`;
    document.body.style.backgroundColor = color.value;
};


//カラーピッカーの変更に伴いcolorBg関数を実行
color.addEventListener('input', colorBg);


