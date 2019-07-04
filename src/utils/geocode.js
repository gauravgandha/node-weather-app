const request = require('request')


const geocode = function(location, callback) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?access_token=pk.eyJ1IjoiZ2F1cmF2Z2FuZGhhIiwiYSI6ImNqeGVtOG9mMDBweHgzeG1kMWg2MTdmdXMifQ.ceAKnQ3vILl9uJ1seVY6Vw&limit=1'

    if (location === undefined)
    {
       return  callback('Please provide a loaction')
    }

    request({ url, json: true }, (error, {body}) => {


        if (error) {

            callback('Error connection to MapBox server',undefined)
        }
        else {
            const feature = body.features[0]

            if (feature === undefined) {
                callback('Nothing found during search!', undefined)
            }
            else {

                const data = {
                    location: feature.place_name,
                    latitude: feature.center[1],
                    longitude: feature.center[0]
                }

                callback(undefined, data)


            }

        }

    })
}

module.exports = {
    geocode: geocode
}