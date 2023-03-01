import * as dotenv from "dotenv";


dotenv.config();
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http:localhost:3000/";
const clientId = process.env.SPOTIFY_CLIENT_ID;

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirectUri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

