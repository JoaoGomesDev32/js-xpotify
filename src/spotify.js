const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "9332757212d044b8adfa63bf40e11ec0";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;