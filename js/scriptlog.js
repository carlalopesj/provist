//Configurando opção de visualizar a senha digitada
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

//Fungçaõ de entrar, utilizando o user e a senha cadastrada
function entrar(){
  console.log('Função entrar foi chamada.');
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    user: '',
    email: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         user: item.userCad,
         email: item.emailCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = 'index2.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))

  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}

/*
//Visualizar o localStorage
for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  var value = localStorage.getItem(key);
  console.log(key + ': ' + value);
}
*/