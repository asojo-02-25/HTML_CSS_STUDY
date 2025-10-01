const btn = document.querySelector("#btn");

btn.addEventListener('click',() => {
    document.body.classList.toggle('dark-theme');
    /*もしボタンがクリックされたときにボタンが「ダークモードにする」であれば、ボタン押下後に「ライトモードにする」に変更*/
    if(btn.textContent === "ダークモードにする")
        {btn.textContent = "ライトモードにする"}
    /*もしボタンがクリックされたときにボタンが「ライトモードにする」であれば、ボタン押下後に「ダークモードにする」に変更*/
    else{btn.textContent = "ダークモードにする"}
});
