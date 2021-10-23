from flask import Flask
from flask_cors import cross_origin
from .spotifyApi import SpotifyApi
from .youtubeApi import YoutubeApi

app = Flask(__name__)
spotify = SpotifyApi()
youtube = YoutubeApi()


@app.route("/spotify/", defaults={'rg': 'in', 'limit': 10, 'offset': 5})
@app.route("/spotify/<rg>/<limit>/<offset>")
@cross_origin()
def SpotifyApiCall(rg, limit, offset):
    return spotify.apiCall(rg=rg, limit=limit, offset=offset)


@app.route('/youtube/', defaults={'search': 'freecodecamp react'})
@app.route('/youtube/<search>')
@cross_origin()
def youtubeApiCall(search: str):
    search = search.replace('_', ' ')
    return youtube.auth(search=search)


if __name__ == "__main__":
    app.run()
