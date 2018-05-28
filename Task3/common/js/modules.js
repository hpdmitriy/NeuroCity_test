export function firstModule (msg) {
    const message  = msg || 'Hello World';
	console.log(message);
	return message
}

export function secondModule (msg) {
    const message  = msg || 'Hello New World';
	console.log(message);
	return message
}