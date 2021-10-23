from flask import Flask, render_template, redirect
from flask_cors import cross_origin
import requests
import json

app = Flask(__name__)

AUTH_KEY = "AIzaSyCmiCc1TwuYNHhOvaaO3REYC4dPNmfhtow"


@app.route('/<search>')
@app.route('/', defaults={'search': 'freecodecamp'})
@cross_origin()
def index(search="freecodecamp"):
    search = search.replace("_", ' ')
    r = requests.get(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&" +
        f"q={search}&type=video&key={AUTH_KEY}")
    objectList = []
    if r.ok:
        print(r.content)
        items = r.json()['items']
        for item in items:
            objectList.append({
                "title": item['snippet']['title'],
                "channelTitle": item['snippet']['channelTitle'],
                "description": item['snippet']['description'],
                "thumbnails": item['snippet']['thumbnails']['high']['url'],
                "videoId": item['id']['videoId']
            })
    else:
        objectList.append({
            "title": '',
            "channelTitle": '',
            "description": '',
            "thumbnails": '',
            "videoId": ''
        })

    return json.dumps(objectList)


@app.route('/login')
def login():
    return redirect('/register')


@app.route('/login')
def register():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()
