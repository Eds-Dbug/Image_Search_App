import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/search/photos',
	headers: {
		Authorization: 'Client-ID MXAjciYMVFECdlmkUoyE6Kp7dItg2NvvuQUdgJLgGTA',
	},
});
