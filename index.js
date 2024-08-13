let openModal = document.querySelector('.floors')
let closeModal = document.querySelector('.btn-close')
let myModal = document.querySelector('.simpleModal')
let formFooter = document.querySelector('.formFooter')
let form = document.querySelector('.form')

form.addEventListener('click', (ev) => {
    ev.preventDefault()
})

formFooter.addEventListener('click', (event) => {
    event.preventDefault()
})

openModal.addEventListener('click', () => {
    myModal.style.display = 'block'
})

closeModal.addEventListener('click', () => {
    myModal.style.display = 'none';
})

