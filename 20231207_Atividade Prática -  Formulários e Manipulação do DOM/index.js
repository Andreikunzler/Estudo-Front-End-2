document.querySelector('#forms').addEventListener('submit', (e) => {
    e. preventDefault()
    console.log('Nome: ' + nome.value)
    console.log('Endereço: ' + endereco.value)
    console.log('Cidade: ' + cidade.value)
    if (estado.value === '') {
        alert('Marque ao menos um estado')
        return}  
    console.log('Estado: ' + estado.value)
    console.log(document.querySelector('input[name="cargo"]:checked').value)
    const getInteresse = []
    const  areaInteresse = document.getElementsByName('interesse')
    if (getInteresse.length === 0) {
        alert('Marque ao menos uma área de interesse!')
        return}
    areaInteresse.forEach(element => {
        if (element.checked){
            getInteresse.push(element)   
        }
    });
    if (getInteresse.length === 0) {
        alert('Marque ao menos uma área de interesse!')
        return}    
    console.log('Áres de interesses: ' + getInteresse.join(', '))
    console.log('Mini-Currículo: ' + minicurriculo.value)
})