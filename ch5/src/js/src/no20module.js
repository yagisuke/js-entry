import MyApp from './lib/no20MyApp'

let app = new MyApp('secret string');

for (let key in app) document.write(key, '<br />');
document.write(JSON.stringify(app), '<br />');
document.write(app.checkValue('secret string'), '<br />');

// シンボルプロパティにアクセスできる方法
let id = Object.getOwnPropertySymbols(app)[0];
document.write(app[id]);
