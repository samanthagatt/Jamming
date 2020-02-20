import clientId from './secret';

const SPOTIFY_ACCOUNT_URL = 'https://accounts.spotify.com/authorize';
const SPOTIFY_API_URL = 'https://api.spotify.com/v1';
let accessToken = '';
let userId = '';

const Spotify = {
    getAccessToken() {
        if (accessToken.length !== 0) {
            return accessToken;
        }

        const windowUrl = window.location.href;
        if (!windowUrl.includes('access_token=')) {
            const callbackUri = 'http://jammmingbysam.surge.sh';
            const scope = 'playlist-modify-public';
            const state = 'thisisthestateeee'
            const url = `${SPOTIFY_ACCOUNT_URL}?client_id=${clientId}&redirect_uri=${callbackUri}&scope=${scope}&response_type=token&state=${state}`;
            window.location = url;
            return;
        }
        accessToken = windowUrl.split('access_token=').pop().split('&')[0];
        var expiresIn = windowUrl.split('expires_in=').pop().split('&')[0];
        window.setTimeout(() => {
            accessToken = '';
            userId = '';
        }, expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
    },

    async getUserId() {
        const url = `${SPOTIFY_API_URL}/me`;
        const token = this.getAccessToken();
        if (userId.length !== 0) {
            return userId;
        }
        let response;
        try {
            response = await fetch(url, {headers: {Authorization: `Bearer ${token}`}});
        } catch (error) {
            alert(`Error fetching your user id:\n${error}`);
            return;
        }
        if (!response.ok) {
            try {
                const errorJson = await response.json();
                alert(`Error fetching your user id:\n${errorJson.error.message}`);
            } catch {
                alert(`An error occurred fetching your user id\nStatus code: ${response.status}`);
                return;
            }
        }
        try {
            const json = await response.json();
            userId = json.id
            return userId;
        } catch (error) {
            alert(`Error fetching your user id:\n${error}`);
            return;
        }
    },

    async search(term) {
        let token = this.getAccessToken();
        if (token === undefined) { return; };
        const url = `${SPOTIFY_API_URL}/search?q=${term}&type=track`;
        let response;
        try {
            response = await fetch(url, {headers: {Authorization: `Bearer ${token}`}})
        } catch (error) {
            alert(`Error searching for ${term}:\n${error}`);
            return;
        }
        try {
            const json = await response.json();
            if (!response.ok) {
                alert(`Error searching for ${term}:\n${json.error.message}`);
                return;
            }
            return json.tracks.items.map(song => {
                return {
                    title: song.name,
                    artist: song.artists[0].name,
                    album: song.album.name,
                    id: song.id,
                    uri: song.uri
                }
            })
        } catch (error) {
            alert(`Error getting results from Spotify for ${term}:\n${error}`);
            return;
        }
    },

    async createPlaylist(title) {
        const token = this.getAccessToken();
        const userId = await this.getUserId()
        if (userId === undefined) { return; }
        const url = `${SPOTIFY_API_URL}/users/${userId}/playlists`
        let response;
        try {
            response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: title})
            })
        } catch (error) {
            alert(`Error creating your playlist ${title}:\n${error}`);
            return;
        }
        try {
            const json = await response.json();
            if (!response.ok) {
                alert(`Error creating your playlist ${title}:\n ${json.error.message}`);
                return;
            }
            return json.id;
        } catch (error) {
            alert(`Error getting your new playlist id: ${error}`);
            return;
        }
    },
    
    async addPlaylist(title, uris) {
        const playlistId = await this.createPlaylist(title);
        if (playlistId === undefined) { return; }

        const token = this.getAccessToken();
        const url = `${SPOTIFY_API_URL}/playlists/${playlistId}/tracks?uris=${uris.join(',')}`
        let response;
        try {
            response = await fetch(url, {
                method: 'POST',
                headers: {Authorization: `Bearer ${token}`}
            })
        } catch (error) {
            alert(`Error adding songs to your playlist ${title}:\n${error}`);
            return;
        }
        if (!response.ok) {
            try {
                const json = await response.json();
                alert(`Error adding songs to your playlist ${title}:\n ${json.error.message}`);
            } catch (error) {
                alert(`Error adding songs to your playlist ${title}:\n${error}`);
                return;
            }
        }
        return true;
    }
};

export default Spotify;