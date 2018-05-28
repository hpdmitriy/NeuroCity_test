var socket = io();
function getData(loader, selector) {
    var dataLoader = document.getElementById(loader);
    var dataView = document.getElementById(selector);
    dataLoader.style.visibility='visible';
    socket.emit('get articles', 'get_articles');
    socket.on('get articles', function(data) {
        dataView.innerText = JSON.stringify(data,null,2);
    });
    dataLoader.style.visibility='hidden';
}
var button = document.getElementById('getData');
button.addEventListener('click', function () {
    getData('loader','result')
});
