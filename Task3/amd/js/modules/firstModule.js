define(function () {
    function firstModule(msg) {
        var message  = msg || 'Hello World';
        console.log(message);
        return message
    }
    return firstModule;
});