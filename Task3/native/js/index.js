var helloWordModule = (function() {
	var msg = 'Hello World';
	return {
		hello: function() {
			console.log(msg);
		}
	}
}());
var helloNewWordModule = (function() {
	var msg = 'Hello New World';
	return {
		hello: function() {
			console.log(msg);
		}
	}
}());
helloWordModule.hello();
helloNewWordModule.hello();
//https://tproger.ru/translations/configure-webpack4/
//http://dev-city.me/2017/08/31/webpack-config-example