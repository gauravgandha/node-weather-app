console.log('Client side javascript file is loaded!')

const queryForm = document.querySelector('form')

const search = document.querySelector('input')
const forecast = document.querySelector('#forecast')
const error = document.querySelector('#error')

queryForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    forecast.textContent = 'loading...'
    error.textContent = ''
    const location = search.value


    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
           error.textContent = data.error
           forecast.textContent = ''

        }
        else {
            forecast.textContent = data.forecast
            console.log(data.forecast)
           console.log(data.location)
        }
    })
})
})