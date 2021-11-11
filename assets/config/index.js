const API_URL = 'https://gateway.marvel.com:443/v1/public';

const COMIC_API_URL =  `${API_URL}/comics`;

const CHARACTER_API_URL = `${API_URL}/characters`;

const API_TS = process.env.REACT_APP_API_TS;

const API_HASH = process.env.REACT_APP_API_HASH;

const API_KEY = process.env.REACT_APP_API_KEY;

const USER_API_URL = 'http://localhost:8000/api/users';

export {
	API_URL,
	COMIC_API_URL,
	CHARACTER_API_URL,
	API_TS,
	API_HASH,
	API_KEY,
	USER_API_URL
}