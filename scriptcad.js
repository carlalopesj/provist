let btn = document.querySelector('#verSenha');
let btnConfirm = document.querySelector('#verConfirmSenha');


let user = document.querySelector('#user');
let labelUser = document.querySelector('#labelUser');
let validUser = false;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

user.addEventListener('keyup', () => {
  if(user.value.length <= 2){
    labelUser.setAttribute('style', 'color: red');
    labelUser.innerHTML = 'User *Insira no minimo 3 caracteres';
    user.setAttribute('style', 'border-color: red');
    validUser = false;
  } else {
    labelUser.setAttribute('style', 'color: green');
    labelUser.innerHTML = 'User';
    user.setAttribute('style', 'border-color: green');
    validUser = true;
  }
})

email.addEventListener('keyup', () => {
  if(validatorEmail(email.value) !== true){
    labelEmail.setAttribute('style', 'color: red');
    labelEmail.innerHTML = 'Email *O formato deve ser name@example.com';
    email.setAttribute('style', 'border-color: red');
    validEmail = false;
  } else {
    labelEmail.setAttribute('style', 'color: green');
    labelEmail.innerHTML = 'Email';
    email.setAttribute('style', 'border-color: green');
    validEmail = true;
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red');
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres';
    senha.setAttribute('style', 'border-color: red');
    validSenha = false;
  } else {
    labelSenha.setAttribute('style', 'color: green');
    labelSenha.innerHTML = 'Senha';
    senha.setAttribute('style', 'border-color: green');
    validSenha = true;
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red');
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
    confirmSenha.setAttribute('style', 'border-color: red');
    validConfirmSenha = false;
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green');
    labelConfirmSenha.innerHTML = 'Confirmar Senha';
    confirmSenha.setAttribute('style', 'border-color: green');
    validConfirmSenha = true;
  }
})

function cadastrar(){
  if(validUser && validEmail && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
    
    listaUser.push(
    {
      userCad: user.value,
      emailCad: email.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser));
    
   
    msgSuccess.setAttribute('style', 'display: block');
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
    msgError.setAttribute('style', 'display: none');
    msgError.innerHTML = '';
    
    setTimeout(()=>{
        window.location.href = './login.html';
    }, 1000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
    msgSuccess.innerHTML = '';
    msgSuccess.setAttribute('style', 'display: none');
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha');
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha');
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text');
  } else {
    inputConfirmSenha.setAttribute('type', 'password');
  }
})

function validatorEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}




  
  