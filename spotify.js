const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "44136ee7c477414b9c6f76c2a2276a82";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoit = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;