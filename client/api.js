import axios from 'axios';

export const fetchPerson = idPerson => {
	return axios.get(`/api/portfolio/${idPerson}`)
				.then(resp => resp.data);
}