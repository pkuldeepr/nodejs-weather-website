const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/84c828598fdba28d504dabc7cbd4ac35/'+ latitude +','+ longitude
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Internet is not connected!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability +'% chance of rain.')
        }
    })
}

module.exports = forecast