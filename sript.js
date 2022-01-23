addEventListener('load', () => {

})

let buttonAlert = document.querySelector('.button-send');
let inputEmail = document.querySelector('.input-email');

buttonAlert.addEventListener('click', () => {
    inputEmail.value === '' ? alert('Favor inserir o seu e-mail') : alert('Email cadastrado com sucesso!');
})
