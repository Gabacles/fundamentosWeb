/*
por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName
por seletor: querySelector()

para importar js na pagina html:
<script src="assets/js/script.js"></script>
*/

let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'O nome precisa ter mais de 3 caracteres!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = ''
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk & emailOk & assuntoOk) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente!')
    }
}