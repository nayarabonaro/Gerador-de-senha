scrip.js
let sliderElement = document. querySelector("#slider"');
let buttonElement = document. querySelector("#button");
let sizePassword = document. querySelector( #valor");
let password = document.querySelector("#password");
let containerl assword = document. querySelector("#container-password");
let charset = 'abcdefghijk|mnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha =";
sizePassword.innerHTML=sliderElement.value,
slider.oninput = function ) {
sizePassword.innerHTML = this. value;
}
function generatePassword0
let pass =
for(let i = 0, n = charset. length; i < sliderElement.value; ++i
pass += charset.charAt(Math. floor(Math.random() * n));
}
console.log(pass)
containerPassword.classList.remove("hide");
password.innerHTML = pass;
novasenha = pass;
  }
function copyPassword(){
alert("Senha copiada com sucesso!")
navigator.clipboard.writeText(novaSenha);
}
