import clientId from './secret';

const SPOTIFY_ACCOUNT_URL = 'https://accounts.spotify.com/authorize';
const SPOTIFY_SEARCH_URL = 'https://api.spotify.com/v1/search';
let accessToken = '';

const Spotify = {
    getAccessToken() {
        if (accessToken.length !== 0) {
            return accessToken;
        }

        const windowUrl = window.location.href;
        if (!windowUrl.includes('access_token=')) {
            const callbackUri = 'http://localhost:3000/';
            const scope = 'playlist-modify-public';
            const state = 'thisisthestateeee'
            const url = `${SPOTIFY_ACCOUNT_URL}?client_id=${clientId}&redirect_uri=${callbackUri}&scope=${scope}&response_type=token&state=${state}`;
            window.location = url;
            return;
        }
        accessToken = windowUrl.split('access_token=').pop().split('&')[0];
        var expiresIn = windowUrl.split('expires_in=').pop().split('&')[0];
        window.setTimeout(() => this.accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
    },

    async search(term) {
        const token = this.getAccessToken();
        const url = `${SPOTIFY_SEARCH_URL}?q=${term}&type=track`;
        let request;
        try {
            request = await fetch(url, {headers: {Authorization: `Bearer ${token}`}})
        } catch (error) {
            alert(`Error searching for ${term}:\n${error}`);
            return;
        }
        if (!request.ok) {
            alert(`An error occurred trying to search for ${term}\nStatus code: ${request.status}`);
            return;
        }
        try {
            const json = await request.json();
            return json.tracks.items.map(song => {
                return {
                    title: song.name,
                    artist: song.artists[0].name,
                    album: song.album.name,
                    id: song.id
                }
            })
        } catch (error) {
            alert(`Error getting results from Spotify for ${term}:\n${error}`);
            return;
        }
    }
};

export default Spotify;