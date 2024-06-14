// let btn = document.querySelector('.btn')
// let body = document.querySelector('body')

// if (localStorage.getItem('theme') === 'dark') {
//     body.classList.add('dark')
//     btn.textContent = 'White'
// }else {
//     body.classList.remove('dark')
//     btn.textContent = 'Dark'
// }

// btn.addEventListener('click', () => {

//     body.classList.toggle('dark')
//     if (body.classList.contains('dark')){
//         btn.textContent = 'White'
//         localStorage.setItem('theme', 'dark')
//     }else{
//         btn.textContent = 'Dark'
//         localStorage.removeItem('theme')
//     }
// })



function darkmode() {
    const body = document.body
    const wasDarkmode = localStorage.getItem('darkmode') === 'true'

    localStorage.setItem('darkmode', !wasDarkmode)
    body.classList.toggle('dark-mode', !wasDarkmode)
}

document.querySelector('.btn').addEventListener('click', darkmode)

function onload(){
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true')
}
document.addEventListener('DOMContentLoaded', onload)