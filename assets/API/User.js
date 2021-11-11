import { USER_API_URL } from '../config';
import axios from 'axios';

const UserAPI = {
	create : async (fields) => {
		return await axios.post(USER_API_URL+"/create", {
			fields
		});
	}
}

export default UserAPI;