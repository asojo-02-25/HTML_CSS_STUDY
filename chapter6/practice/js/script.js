const heading = document.querySelector('#heading');

const keyframes = {
    borderRadius:  [
        '20% 50% 50% 70% / 50% 50% 70% 50%',
        '50% 70% 50% 50% / 70% 50% 50% 50%',
        '70% 50% 50% 20% / 50% 50% 20% 50%',
        '50% 20% 50% 50% / 20% 50% 50% 50%',
        ],
}

const options = {
    duration: 8000,
    iterations: Infinity,
    diraction: 'alternate',
}

heading.animate(keyframes,options);