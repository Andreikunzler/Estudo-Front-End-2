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

async function createNewMessage() {
  const newMessage = {
    title: 'Estudar Axios',
    description: '2h por dia',
    user_id: 1
  }

  try {
    const response = await api.post('/notes', newMessage)

    if (response.status === 201) {
      alert('Recado cadastrado com sucesso!')
    }
  } catch (error) {
    console.log('Erro ao cadastrar recado', error)
  }
}

async function updateMessage() {
  const editMessage = {
    title: 'Novo título',
    description: '2h por dia...',
  }

  try {
    const idMensagen = 148
    const response = await api.put(`/notes/${idMensagen}`, editMessage)

    if (response.status === 200) {
      alert('Recado editado com sucesso!')
    }
  } catch (error) {
    console.log('Erro ao editar recado', error)
  }
}

async function deleteMessage() {

  try {
    const idMensagen = 148
    const response = await api.delete(`/notes/${idMensagen}`)

    if (response.status === 200) {
      alert('Recado deletado com sucesso!')
    }
  } catch (error) {
    console.log('Erro ao deletar recado', error)
  }
}
deleteMessage()
fetchItens()