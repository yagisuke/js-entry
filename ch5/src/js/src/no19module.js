import { Member, Triangle as MyTriangle } from './lib/no19Util'

var m = new Member('やまだ', 'たろう');
document.write('m.getName() -> ', m.getName(), '<br />');

MyTriangle.prototype.getArea = function() {
  return this.base * this.height / 2;
}
var t = new MyTriangle(2, 5);
document.write('t.getArea() -> ', t.getArea(), '<br />');
