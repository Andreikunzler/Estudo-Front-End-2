// querySelector

let primeiroAluno = document.querySelector('.aluno')
console.log(primeiroAluno)

// querySelectorAll

let todosAlunos = document.querySelectorAll('.aluno')
// const array = Array.from(todosAlunos)
// console.log(array)
console.log(todosAlunos)

// getElementsByClassName

let alunos = document.getElementsByClassName('aluno')
console.log(alunos)


// getElementsById
let aluno1 = document.getElementById("aluno1")
console.log(aluno1)

// getElementsByTagName
let itensList = document.getElementsByTagName('Li')
console.log(itensList[2])

let getAluno1 = document.getElementById('aluno1')
let idAluno = getAluno1.getAttribute('id')
console.log(idAluno)

let chamadaButton = document.querySelector('button')
chamadaButton.getAttribute('disabled','disabled')

// innerText e innerHTML

let paragrafo = document.querySelector('h1')
console.log(paragrafo.innerHTML += 'Texto')


let listaPresenca = document.querySelector('.lista-presenca')
listaPresenca.innerHTML += '<li>Marivaldo</li>'


listaPresenca.classList.add('azul')
listaPresenca.classList.remove('outra-classe')
listaPresenca.classList.toggle('azul')
listaPresenca.classList.contains('azul')
listaPresenca.classList.replace('azul','VERMELHO')
console.log(listaPresenca.classList)

let novoAluno = document.createElement('li')
novoAluno.textContent = 'Carlos'
listaPresenca.appendChild(novoAluno)