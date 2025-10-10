//監視対象が範囲内に現れたら実行する動作
const imagedetect = (entries) => {
    const keyframes = {
        opacity: [0, 1],
        translate: ['200px 0', '0 0'],
    }
    const options = {
        duration: 600,
    }

    entries[0].target.animate(keyframes, options);
};

//監視ロボットの決定
const imageObserver = new IntersectionObserver(imagedetect);

//#imageを監視するよう指示
imageObserver.observe(document.querySelector("#image"));

