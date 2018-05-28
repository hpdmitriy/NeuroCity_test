require(['modules/firstModule', 'modules/secondModule' ], function (firstModule, secondModule) {
    var first = firstModule();
    var second = secondModule();

    document.getElementById('result').innerHTML = first + '<br>' + second;
});