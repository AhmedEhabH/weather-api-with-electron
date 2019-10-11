function get_weather() {
    var { PythonShell } = require('python-shell');
    var path = require('path');
    var city = document.getElementById('city').value;
    document.getElementById('city').value = '';

    var options = {
        scriptPath: path.join(__dirname, '../scripts/'),
        args: [city],
    }

    var weather = new PythonShell('weather-api.py', options);

    weather.on('message', (message) => {
        sweetAlert("Temperature", message, "success");
    })
}