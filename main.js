let themeblue = document.querySelector('.blue');
let themeburbl = document.querySelector('.burbl');
let themered = document.querySelector('.red');

themeblue.onclick = () => {
    document.body.classList.add('activ')
    document.body.classList.remove('activ2')

}

themeburbl.onclick = () => {
    document.body.classList.remove('activ')
    document.body.classList.remove('activ2')

}

themered.onclick = () => {
    document.body.classList.add('activ2')
    document.body.classList.remove('activ')
}