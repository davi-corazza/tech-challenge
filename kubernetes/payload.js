import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
	stages: [
		{ duration: '30s', target: 10 }, // Simula 10 usuários em 30 segundos
		{ duration: '1m', target: 50 },  // Aumenta para 50 usuários em 1 minuto
		{ duration: '1m30s', target: 100 }, // Aumenta para 100 usuários em 1 minuto e 30 segundos
		{ duration: '2m', target: 0 },   // Reduz para 0 usuários em 2 minutos
	],
};

export default function () {
	const url = 'http://localhost:3000/product/create';
	const payload = JSON.stringify({
		name: "Itubaina",
		price: "8.00",
		description: "Refrigerante",
		fk_idCategory: 2
	});

	const params = {
		headers: {
			'Content-Type': 'application/json',
			'accept': '*/*',
		},
	};

	const res = http.post(url, payload, params);

	check(res, {
		'is status 200': (r) => r.status === 200,
	});

	sleep(1);
}
