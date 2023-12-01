// 8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
// Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
// Essa função deve mostrar um alerta com a mensagem "Clicou em
// Editar!".

const botaoEditar = document.querySelectorAll(".botao-editar")
botaoEditar.forEach(botao => botao.setAttribute('onclick', 'editarCard()'))
function editarCard() {
    alert("Clicou em Editar!")
}


// 9. Adicione o atributo 'onclick' nos elementos de classe
// “botão-apagar”. Ao clicar nesses elementos deve chamar a função
// 'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
// certeza da exclusão do card. Se o usuário confirmar a exclusão deve
// mostrar um alerta com a mensagem "Confirmado!", se não deve
// mostrar a mensagem "Cancelou!".

const botaoApagar = document.querySelectorAll(".botao-apagar")
botaoApagar.forEach(botao => botao.setAttribute('onclick', 'apagarCard()'))
function apagarCard() {
    const confirmar = confirm(`Tem certeza que deseja apagar?`)
    if (confirmar) {
        alert("Confirmado!")
    } else {
        alert("Cancelou!")
    }
}