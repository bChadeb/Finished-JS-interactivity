let message = document.querySelector('aside')
let hide = document.getElementsByClassName('hide')

function addMovie (event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    inputField = ' '
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.childNodes[0].textContent} deleted`
    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watching`
    } else {
        message.textContent = `${event.target.textContent} added back`
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')
    setTimeout(() => message.classList.add('hide'), 1000) 
}    
        

document.querySelector('form').addEventListener('submit', addMovie)