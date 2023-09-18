
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.header').classList.remove('sticky');
    } else {
        document.querySelector('.header').classList.add('sticky');
    }
    prevScrollpos = currentScrollPos;
}

function scrollToSection1(Main) {
    const main = document.getElementById("main");
    const posicao = main.offsetTop;

    window.scrollTo({
        top: posicao, behavior: 'smooth'
    });

}
function scrollToSection2(projects) {
    const projeto = document.getElementById("projects");
    const posicao = projeto.offsetTop;

    window.scrollTo({
        top: posicao, behavior: 'smooth'
    });
}
function scrollToSection3(social) {
    const contato = document.getElementById("social");
    const posicao = contato.offsetTop;

    window.scrollTo({
        top: posicao, behavior: 'smooth'
    });
}

// ---------------------Troca de tema-----------------------------


const btnMode = document.querySelector('.btn-theme');
const containerMode = document.querySelector('.container');
const imageButton = document.querySelector('.image-mode');


btnMode.addEventListener('click', () => {
    const sunModeActive = containerMode.classList.contains('sun-mode');
    containerMode.classList.toggle('sun-mode');

    if(sunModeActive){
        imageButton.setAttribute('src', '../img/ChangeTheme/sun-icon.svg')
    }
    else{
        imageButton.setAttribute('src', './img/ChangeTheme/moon-icon.svg')
    }
})