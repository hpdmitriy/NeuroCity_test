
function getData(url,loader, selector) {
    var dataLoader = document.getElementById(loader);
    var dataView = document.getElementById(selector);
    dataLoader.style.visibility='visible';
    fetch(url)
        .then(function(response) {
            if(response.status >=200 && response.status<= 300) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got data");
        })
        .then(function(data) {
            dataView.innerText = JSON.stringify(data,null,2);
            dataLoader.style.visibility='hidden';
            return data;

        })
        .catch(function (error) {
            dataLoader.style.visibility='hidden';
            console.log(error);
        });
}
var button = document.getElementById('getData');
button.addEventListener('click', function () {
    getData('/api/article', 'loader','result')
});