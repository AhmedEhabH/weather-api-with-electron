import requests  # pip install requests
import json  # pip install simplejson
import sys

# Weather API
api_key = '9bb4b43bf13147ef8628e69c31b866ad'
city = sys.argv[1]


url = 'https://api.weatherbit.io/v2.0/current?city=' + city + '&key=' + api_key
request = requests.get(url)
if request.status_code >= 200 < 400:
    data = json.loads(request.text)
    temp = data['data'][0]['temp']
    desc = data['data'][0]['weather']['description']
    print("Description: {0}. Temprature: {1}".format(desc, temp))

sys.stdout.flush()

