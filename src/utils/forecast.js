const request = require('request')

const forecast = function (cordinates, location, callback) {
    const url = 'https://api.darksky.net/forecast/3f382eab174e45fe161855950051fcca/' + cordinates+'?units=si'


    request({ url, json: true }, (error, {body}) => {


        if (error) {

            callback('Error in connection', undefined)
        }
        else if (body.error)
        {
            callback('Error: '+ body.error, undefined)
        }
        else {
            const currently = body.currently

            if (currently === undefined) {
                callback('Check the location, it might not be correct', undefined)
            }
            else {
                const daily = body.daily
                const data = {
                    msg:  location +' .Currently it is ' + currently.temperature + '  degrees out and there is  ' + currently.precipProbability * 100 + '% chances of rain.' ,
                    forecast: daily.summary 
                }

                callback(undefined, data)


            }

        }

    })
}

module.exports = {
    forecast: forecast
}