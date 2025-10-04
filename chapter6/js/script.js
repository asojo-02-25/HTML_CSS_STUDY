const heading = document.querySelector('#heading');

const keyframes = {
    opacity: [0, 1],
    translate: ['0 2rem', '0 0']
}

const options = {
    duration: 2000,
    easing : 'ease-out'
}

heading.animate(keyframes,options);