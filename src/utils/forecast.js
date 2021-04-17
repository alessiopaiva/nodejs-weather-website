const request = require('request')
    //'&units=f'
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9c80147c3eb51ef2562e210690c62ac3&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect.', undefined)
        } else if (body.error) {
            callback('Unable to find weather.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast