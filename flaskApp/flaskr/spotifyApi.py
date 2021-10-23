import requests
import base64
import time
import json


class SpotifyApi(object):
    def __init__(self) -> None:
        self.client_key = "1b1d6d55dd4d493b9d5367858a8e1812"
        self.secret_key = "eb9b0654c9c243169bba4fd1f7443429"
        self.expiry = time.time()
        self.access_token = None

    def encode(self):
        client_key = self.client_key
        secret_key = self.secret_key
        key = f"{client_key}:{secret_key}".encode()
        return base64.b64encode(key).decode()

    def auth(self):
        print('function called')
        key = self.encode()
        data = {
            'grant_type': "client_credentials"
        }
        headers = {
            'Authorization': f"Basic {key}",
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        url = 'https://accounts.spotify.com/api/token'

        response = requests.post(url, headers=headers, data=data)
        spotifyAuth = response.json()

        self.expiry = time.time() + spotifyAuth['expires_in']
        self.access_token = spotifyAuth['access_token']

        return response.json()

    def generateAuth(self):
        if self.expiry < time.time() or self.access_token == None:
            self.auth()
            return self.access_token
        else:
            return self.access_token

    def apiCall(self, rg, limit, offset):
        bearerKey = self.generateAuth()
        headers = {
            "Authorization": f"Bearer {bearerKey}",
            "Content-Type": "application/json",
            "Accept": "application/json"
        }

        params = {
            "country": rg,
            "limit": limit,
            "offset": offset
        }
        url = 'https://api.spotify.com/v1/browse/new-releases'
        r = requests.get(url, headers=headers, params=params)

        if r.ok:
            return self.formatData(r.json())
        else:
            return {
                "id": '',
                "webLink": '',
                "image": '',
                'albumType': '',
                'artistList': []
            }

    def formatData(self, data):
        items = data['albums']['items']
        resultList = []
        for item in items:
            k = {
                "id": item['id'],
                "webLink": item['external_urls']['spotify'],
                "image": item['images'][0]['url'],
                "albumType": item['album_type'],
                'artistList': []
            }
            for i in item['artists']:
                k['artistList'].append(i['name'])
            resultList.append(k)
        return json.dumps(resultList)
