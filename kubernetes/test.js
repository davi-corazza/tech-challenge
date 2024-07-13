import http from 'k6/http';

export const options = {
	discardResponseBodies: true,
	scenarios: {
		contacts: {
			executor: 'constant-vus',
			vus: 350,
			duration: '60s',
		},
	},
};

export default function () {
	http.get('http://localhost:3000/v1/category/all');
	http.get('http://localhost:3000/v1/product/all');
}
