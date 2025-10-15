//ローディングから画面遷移
const loadingAreaGray = document.querySelector('#loading')
const loadingAreaGreen = document.querySelector('#loading-screen')

window.addEventListener('load' = () =>{
    //ローディング中、グリーンスクリーンを100vh(画面下側)から-100vh(画面上側)まで移動させる(コンピューターの世界では左上を座標の(0, 0)としている)
    loadingAreaGreen.animate(
        {
            translate: ['0, 100vh', '0, 0', '0, -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }

    //ローディング終了後、グレースクリーンを透明にする
    loadingAreaGray.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',  
        }
    )
});

