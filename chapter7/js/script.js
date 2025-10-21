//ローディングから画面遷移
const loadingAreaGray = document.querySelector('#loading')
const loadingAreaGreen = document.querySelector('#loading-screen')
const loadingText = document.querySelector('#loading p')

window.addEventListener('load', () =>{
    //ローディング終了後、グレースクリーンを透明にする
    loadingAreaGray.animate(
        [
            {
                opacity: 1,
                offset: .8,
            },
            {
                opacity: 0,
                offset: 1,
                visibility: 'hidden',
            },
        ],
        {
            duration: 2000,
            easing: 'ease',
            fill: 'forwards',  
        }
    );
    //ローディング中、'loading...'の文字を表示し、終了したら不透明度を0にし透明にする
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8
            },
            {
                opacity: 0,
                offset: 1
            },
        ],    
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
    //ローディング中、グリーンスクリーンを100vh(画面下側)から-100vh(画面上側)まで移動させる(コンピューターの世界では左上を座標の(0, 0)としている)
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    );    
});

//ギャラリー　
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

//thumbImagesにマウスが重なったときにmainImageに選択している画像を表示する
//(1)mainImageの画像の不透明度を0にし透明に
//(2)透明になったmainImagesの部分に選択したthumbImagesを表示

// for(let i = 0; i < thumbImages.length; i++){
//     thumbImages[i].addEventListener('mouseover', (event) =>{
//         mainImage.src = event.target.src;
//         mainImage.animate(
//             {
//                 opacity: [0, 1]
//             },
//             {
//                 duration: 500,
//             }
//         );
//     })
// }

thumbImages.forEach((thumbImage) => {
    thumbImage.addEventListener('mouseover', (event) =>{
        mainImage.src = event.target.src;
        mainImage.animate(
            {
                opacity: [0, 1]
            },
            {
                duration: 500,
            }
        );
    });
});

const menuPanel = document.querySelector('#menu-panel');
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuOptions = {
    duration: 600,
    easing: 'ease',
    fill: 'forwards',
}

// メニューを開く
menuOpen.addEventListener('click', () => {
    menuPanel.animate({translate: ['100vw 0', '0 0']}, menuOptions);
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
    menuPanel.animate({translate: ['0 0', '100vw 0']},menuOptions);
});

