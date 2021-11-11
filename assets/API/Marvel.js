
import { 
	COMIC_API_URL, 
	CHARACTER_API_URL, 
	API_TS,
	API_HASH,
	API_KEY
} from '../config';


const API = {
	fetchComics : async (search = '', page) => {

		const title = search != '' ? '&title='+ search : '';
		const endpoint = COMIC_API_URL+'?'+'ts='+API_TS+'&hash='+API_HASH+'&apikey='+API_KEY + title;
		return await fetch(endpoint).then(response => response.json());
	}
}

export default API;