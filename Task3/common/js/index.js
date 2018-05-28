import {firstModule, secondModule} from './modules';
const first = firstModule();
const second = secondModule();
document.getElementById('result').innerHTML = `${first}<br>${second}`;
