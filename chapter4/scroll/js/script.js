const getScrollPercent = () => {
    /*スクロール量*/
    const scrolled = window.scrollY;
    /*ページ全体の高さ*/
    const pageHeight = document.documentElement.scrollHeight
    /*表示領域の高さ*/
    const viewHeight = document.documentElement.clientHeight

    /*スクロール割合を計算*/
    const percentage = (scrolled / (pageHeight - viewHeight)) * 100;
    console.log(percentage);
    //
    document.querySelector('#bar').style.width = `${percentage}%`;
};

/*最終やること*/
window.addEventListener("scroll", getScrollPercent);

