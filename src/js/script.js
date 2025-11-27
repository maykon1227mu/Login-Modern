let leftBox = document.querySelector('.box-left');

let imgDark = document.querySelector('#img-dark');

function darkMode() {
    leftBox.classList.toggle('dark-mode')

    imgDark.attributes.src = './assets/img/Img-Black.png';
}