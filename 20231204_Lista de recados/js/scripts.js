const messagesContainer = document.querySelector('.messages-list')

async function fetchItens() {
  try {
    const response = await api.get('/notes')
    const itens = response.data

    console.log(itens)

    messagesContainer.innerHTML = ''

    itens.forEach(message => {
      const lista = document.createElement('div')
      lista.classList.add('card')

      lista.innerHTML = `
          <h2 class="card-title">${message.title}</h2>
          <p class="card-description">${message.description}</p>
      `
      messagesContainer.appendChild(lista)
    })
    if (itens.length === 0) {
        lista.innerHTML = `
        <h2 class="card-title">Erro ao buscar mensagens</h2>`
      }
  } catch (error) {
    console.log('Erro ao buscar mensagens', error)
  }
}

fetchItens()