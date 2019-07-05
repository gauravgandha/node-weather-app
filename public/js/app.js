console.log('Client side javascript file is loaded!')

const queryForm = document.querySelector('form')

const search = document.querySelector('input')
const message = document.querySelector('#message')
const forecast = document.querySelector('#forecast')
const error = document.querySelector('#error')

queryForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    message.textContent = 'loading...'
    error.textContent = ''
    forecast.textContent = ''
    const location = search.value


    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            //console.log(data.error)
           error.textContent = data.error
           message.textContent = ''

        }
        else {
            message.textContent = data.message
            forecast.textContent = data.forecast
          //  console.log(data.forecast)
          // console.log(data.location)
        }
    })
})
})