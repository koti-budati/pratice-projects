import requests
import json


class YoutubeApi(object):
    def __init__(self):
        self.url = "https://youtube.googleapis.com/youtube/v3/search"
        self.authKey = 'AIzaSyCmiCc1TwuYNHhOvaaO3REYC4dPNmfhtow'

    def auth(self, search):
        params = {
            'part': 'snippet',
            'q': search,
            'type': 'video',
            'key': self.authKey
        }
        r = requests.get(self.url, params=params)
        if r.ok:
            return self.formatData(r.json())
        else:
            resultList = [{
                "title": '',
                "channelTitle": '',
                "description": '',
                "videoId": '',
                "thumbnails": ''
            }]
            return json.dumps(resultList)

    def formatData(self, data):
        items = data['items']
        resultList = []
        for item in items:
            resultList.append(
                {
                    "title": item['snippet']['title'],
                    "channelTitle": item['snippet']['channelTitle'],
                    "description": item['snippet']['description'],
                    "videoId": item['id']['videoId'],
                    "thumbnails": item['snippet']['thumbnails']['high']['url'],
                }
            )
        return json.dumps(resultList)
