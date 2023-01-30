var title = document.getElementById('title')
var cursor = document.querySelector('.cursor')
var texto = title.innerHTML
var index = 0

const escrever = () => {
  title.innerHTML = title.innerHTML.replace('|', '')

  if (texto.length > index) {
    if (index == 0){
      title.innerHTML = texto.charAt(index) 
    } else {
      title.innerHTML += texto.charAt(index) 
    }

    title.innerHTML += '|'

    index++
    setTimeout(escrever, 100)

  } 
}

escrever()
