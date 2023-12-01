let max = 5
let incrementor = 0


function incremento() {
  incrementor ++
  let paragrafo = document.getElementById('contador')
  paragrafo.innerHTML = incrementor
  if(incrementor === 5) {
    let status = document.getElementById('status')
    status.classList.replace('aguardando','pode-comecar')
    status.innerHTML = 'Pode começar a aula'
  }
}