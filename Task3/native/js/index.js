var helloWordModule = (function() {
	var msg = 'Hello World';
	return {
		hello: function(message) {
			console.log(message || msg);
			return message || msg
		}
	}
}());
var helloNewWordModule = (function() {
	var msg = 'Hello New World';
	return {
		hello: function(message) {
			console.log(message || msg);
			return message || msg
		}
	}
}());
var first = helloWordModule.hello();
var second = helloNewWordModule.hello();
document.getElementById('result').innerHTML = first + '<br>' + second;
