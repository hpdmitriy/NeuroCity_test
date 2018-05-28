define(function () {
    function secondModule(msg) {
        var message  = msg || 'Hello New World';
        console.log(message);
        return message
    }
    return secondModule;
});