import { restClient } from '@polygon.io/client-js';
const rest = restClient("pGs02PvWIdUv0MjR5jY68zEFBHm1TFUP");
rest.stocks.previousClose("AAPL").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});

