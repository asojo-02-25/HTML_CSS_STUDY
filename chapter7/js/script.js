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

