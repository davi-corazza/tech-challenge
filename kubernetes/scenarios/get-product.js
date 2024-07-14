import http from 'k6/http';
import { sleep, check, fail } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

export let GetProductDuration = new Trend('GetProductDuration');
export let GetProductFailRate = new Rate('GetProductFailRate');
export let GetProductSuccessRate = new Rate('GetProductSuccessRate');
export let GetProductReqs = new Counter('GetProductReqs');

export default function () {
	let res = http.get('http://localhost:3000/v1/product/all');

	GetProductDuration.add(res.timings.duration);
	GetProductReqs.add(1);
	GetProductFailRate.add(res.status === 0 || res.status >= 400);
	GetProductSuccessRate.add(res.status < 400);

	let durationMsg = `Max duration: ${(4000/1000)}s`;

	let checkResult = check(res, {
		'max duration': (r) => r.timings.duration < 4000,
	});

	if (!checkResult) {
		fail(durationMsg);
	}

	sleep(1);
}
